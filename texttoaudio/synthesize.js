var AWS = require('aws-sdk');
var fs = require('fs');

AWS.config.update({ region: 'us-east-1' });

/* Synthesizes plain text or SSML into a file of human-like speech. */
var polly = new AWS.Polly({ apiVersion: "2016-06-10" });
var s3 = new AWS.S3();
var textfilekeys = [];

var s3listobjectsparams = {
    Bucket: "textforpolly",
    MaxKeys: 10
};

s3.listObjectsV2(s3listobjectsparams, function (err, data) {
    if (err) {
        console.log(err, err.stack);
        return;
    }
    else {
        textfilekeys = data.Contents;

        for (var i = 0; i < textfilekeys.length; i++) {
            createAudio(textfilekeys[i])
        }
    }
});

async function createAudio(filekey) {
    var s3getobjectparams = {
        Bucket: "textforpolly", 
        Key: filekey.Key
    };

    var s3Object = await s3.getObject(s3getobjectparams).promise();
    
    var s3textfile = s3Object.Body.toString('utf8');

    var pollyparams = {
        OutputFormat: "mp3",
        SampleRate: "8000",
        Text: s3textfile,
        TextType: "text",
        VoiceId: "Joanna"
    };

    polly.synthesizeSpeech(pollyparams, function (err, data) {
        if (err) {
            console.log(err, err.stack);
            return;
        } else {

            fs.writeFile(filekey.Key+'.mp3', data.AudioStream, (err) => {
                if (err) throw err;
                console.log('The file has been saved!');
            });
        }
    });
}

