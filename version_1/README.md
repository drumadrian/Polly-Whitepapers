
[![Build Status](https://travis-ci.org/drumadrian/Polly-Whitepapers.svg?branch=master)](https://travis-ci.org/drumadrian/Polly-Whitepapers.svg?branch=master)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/eb3c203b2e2a434db8d3f7787d254635)](https://www.codacy.com/app/drumadrian/Polly-Whitepapers?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=drumadrian/Polly-Whitepapers&amp;utm_campaign=Badge_Grade)


# Polly-Whitepapers
This project is intended to download PDFs of the AWS whitepapers, convert to audio, and publish.  This project relies on getting PDF files of the AWS whitepapers which are (fortunately) available in other AWS repositories.  



## Deployment Pipeline

![alt text](https://raw.githubusercontent.com/drumadrian/Polly-Whitepapers/master/Polly_Papers_Deployment_Flow.png)





## Getting Started

1. [Fork this repo](fork).
2. Launch the Deployment Pipeline CloudFormation stack:
    1. [![Launch Stack](https://cdn.rawgit.com/buildkite/cloudformation-launch-stack-button-svg/master/launch-stack.svg)](https://console.aws.amazon.com/cloudformation/home#/stacks/new?stackName=polly-whitepapers-deployment-pipeline&templateURL=https://s3-us-west-2.amazonaws.com/adriandrummond.com/media/deployment_pipeline.yaml)
    2. Enter the forked repo's owner in the `GitHubOwner` field.
    3. Create a [New personal access token](https://github.com/settings/tokens/new) with `repo` and `admin:repo_hook` scopes, and enter the token in the `GitHubToken` field.
    4. Enter the name of an S3 bucket for storing pipeline artifacts in the `ArtifactBucket` field. ([Create a bucket](http://docs.aws.amazon.com/AmazonS3/latest/gsg/CreatingABucket.html) first if necessary.)
3. Verify the newly-created stack and pipeline.
    1. Check the [CloudFormation Console](https://console.aws.amazon.com/cloudformation) to ensure your stack reaches the `CREATE_COMPLETE` state successfully.
4. TBD
    1. TBD
    2. TBD
5. TBD
    1. TBD
6. TBD
  a. TBD
  b. TBD
  c. TBD

That's it!





## Create the Deployment Pipeline using AWS StudyGurus CLI: 


Setup

```
chmod +x awsstudygurus
export PATH=$PATH:./
awsstudygurus --help

```

Usage

```

    USAGE: awsstudygurusawsstudygurus [OPTIONS] 

    OPTIONS

	-h     Dispplay this help dialog
	-p     Displays the awsstudygurus tool variables 
	         (varies based on branch)

	-d     Runs with defaults (not yet implemented)
	-r     Forces a reset (not yet implemented)

	-dp    Creates the Cloudformation stack for the Deployment pipeline
	         The Deployment pipeline deploys the app code and 
	         must be created first
	-da    Pushes the application code to the origin for the Deployment pipeline
	         The Deployment pipeline must be created first.  Automation 
	         for the AWS pipeline must be setup using the BitBucket repo plugin
	         https://marketplace.atlassian.com/apps/1211351/repository-mirror-plugin-for-bitbucket?hosting=server&tab=overview
	         https://github.com/ef-labs/stash-hook-mirror/wiki

	-delp  Deletes the Cloudformation stack and related resources for the Deployment pipeline
	-dela  Deletes the Cloudformation stacks and related resources for the Application


	--help 		    Same as -h
	--printvariables    Same as -p
	--deploy_pipeline   Same as -dp
	--deploy_app 	    Same as -da
	--destroy_pipeline  Same as -delp
	--destroy_app	    Same as -dela
	--default 	    not yet implemented
	--reset  	    not yet implemented


```


<br/>
<br/>
<br/>
<br/>





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





#### GitHub Repos with WhitePapers:

- https://github.com/pravsingh/aws_whitepapers

- https://github.com/StevenTTuD/aws-whitepaper-downloader

- https://github.com/sunilake/AWSSolutionsReference




