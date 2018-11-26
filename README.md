# Polly-Whitepapers
This project is intended to download PDFs of the AWS whitepapers, convert to audio, and publish.  




#Deployment Pipeline

![alt text](https://raw.githubusercontent.com/drumadrian/Polly-Whitepapers/master/Polly_Papers_Deployment_Flow.png)



## Getting Started

1. [Fork this repo](fork).
2. Launch the Deployment Pipeline CloudFormation stack:
    1. [![Launch Stack](https://cdn.rawgit.com/buildkite/cloudformation-launch-stack-button-svg/master/launch-stack.svg)](https://console.aws.amazon.com/cloudformation/home#/stacks/new?stackName=polly-whitepapers-deployment-pipeline&templateURL=https://s3.amazonaws.com/wjordan-aws-codepipeline/cfn-template.yml)
    2. Enter the forked repo's owner in the `GitHubOwner` field.
    3. Create a [New personal access token](https://github.com/settings/tokens/new) with `repo` and `admin:repo_hook` scopes, and enter the token in the `GitHubToken` field.
    4. Enter the name of an existing S3 bucket for storing pipeline artifacts in the `ArtifactBucket` field. ([Create a bucket](http://docs.aws.amazon.com/AmazonS3/latest/gsg/CreatingABucket.html) first if necessary.)
3. Verify the newly-created stack and pipeline.
    1. Check the [CloudFormation Console](https://console.aws.amazon.com/cloudformation) to ensure your stack reaches the `CREATE_COMPLETE` state successfully.
    2. Check the [CodePipeline Console](https://console.aws.amazon.com/codepipeline) to ensure the pipeline's `Source` and `Deploy` stages both completed successfully.
4. Update the parent CloudFormation stack:
    1. Modify `cfn-template.yml` in the Git repository, and commit/push the change.
    2. For example, try renaming the `Dummy` resource to `dummy2`.
5. Update the child CloudFormation stack:
    1. Modify `nested.yml` in the Git repository, and commit/push the change.
    2. For example, try renaming the `Dummy` resource to `Dummy2`.
6. Verify the stack update(s).
  a. Check the CodePipeline Console to ensure the pipeline processes the new commit in both stages.
  b. Check the CloudFormation Console to ensure your stack reaches the `UPDATE_COMPLETE` state successfully.
  c. Verify the created/updated resources in the `Resources` tab of the CloudFormation console match the values in the new template.

That's it!



### Create the Deployment Pipeline using Cloudformation (CLI): 

```

aws cloudformation deploy --template-file '/Users/adrian/Desktop/myhomeforcode/Polly-Whitepapers/deployment_pipeline/pollypapers_deployment_pipeline.yaml' \
                          --stack-name 'Polly-Whitepapers-deployment-Pipeline' \
                          --parameter-overrides \ 
                          Email=adrian@adriandrummond.com \
                          GitHubOwner=awsgurus \ 
                          GitHubRepo=awsgurus 
                          BranchName=master \ 
                          GitHubToken=awsgurus \ 
                          GitHubUrl=awsgurus \
                          --capabilities CAPABILITY_NAMED_IAM \
                          --no-fail-on-empty-changeset \
                          --tags createdby=awsgurus project=Polly-Whitepapers

```

