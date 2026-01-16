# cdk-clickhouse-python-playground1
simple Typescript CDK Stack to push data into Clickhouse

## Architecture
```
VPC ... Clickhouse? or mySQL?
```

## Setup

### Prerequisites
?

### Installation
``` bash
# AWS CDK and constructs dependencies
npm install aws-cdk-lib constructs
```

### Deployment
``` bash
export AWS_PROFILE=cloudStack1
aws deploy
# check user
aws sts get-caller-identity

# Add cdk.json to project root

npm run build
# add tsconfig.json, app.ts
npx cdk synth
# generates manifest.json

# add permissions to IAM policy to allow
cdk bootstrap

# ...

# deploy
cdk deploy CloudStack
```

### Clean-up
``` bash
# Manual deletion of stack
cdk destroy
# or use CloudFormation
aws cloudformation delete-stack --stack-name CloudStack
```
or use Automated deletion: add a destruction Lambda function or script after processes conclude

check if S3 bucket in us-west-2 needs to be deleted.