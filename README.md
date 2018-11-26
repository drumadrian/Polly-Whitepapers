# Polly-Whitepapers
This project is intended to download PDFs of the AWS whitepapers, convert to audio, and publish.  



### Create the Deployment Pipeline using Cloudformation: 

```
bash
aws cloudformation deploy --template-file '/Users/adrian/Desktop/myhomeforcode/Polly-Whitepapers/deployment_pipeline/pollypapers_deployment_pipeline.yaml' \
                          --stack-name 'Polly-Whitepapers-deployment-Pipeline' \
                          --parameter-overrides CodePipelineName='Polly-Whitepapers-Deployment-Pipeline' CodePipelineS3Bucket=deployment-pipeline-bucket \
                          GitHubOwner=awsgurus GitHubRepo=awsgurus 	=master GitHubToken=awsgurus ArtifactsName=awsgurus \
                          s3DeploymentBucketName=awsgurus GitHubUrl=awsgurus \
                          --capabilities CAPABILITY_NAMED_IAM \
                          --no-fail-on-empty-changeset \
                          --tags createdby=awsgurus project=Polly-Whitepapers
```

