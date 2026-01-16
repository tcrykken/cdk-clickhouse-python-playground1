# IAM Set-up for EG CDK deploy 

## Go to AWS IAM console
## create user for this (cloudStack1User)
## create access key id, secret access key
## configure AWS to run under your account

## AWS Console IAM group permission policy creation
# Go to IAM > User groups in the AWS Console
# Create a new group or select an existing one
# Click Add permissions > Create inline policy (cdk-deploy-user-policy)
# Paste the policy from cdk-deploy-user-policy.json
# Add your user to the group