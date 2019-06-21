import boto3
import json
import os

session = boto3.session.Session()
client = session.client('textract')

sns_complete_topic = os.environ['SnsCompleteTopic']
sns_role = os.environ['PollyTextractPublishSnsRole']


def lambda_handler(event, context):

    bucket = event["Records"][0]["s3"]["bucket"]["name"]
    pdf_file_name = event["Records"][0]["s3"]["object"]["key"]

    response = client.start_document_text_detection(
        DocumentLocation={
            'S3Object': {
                'Bucket': bucket,
                'Name': pdf_file_name
            }
        },
        ClientRequestToken='string',
        JobTag='string',
        NotificationChannel={
            'SNSTopicArn': sns_complete_topic,
            'RoleArn': sns_role
        }
    )
