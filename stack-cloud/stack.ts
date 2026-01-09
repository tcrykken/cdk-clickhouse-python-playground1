import * as cdk from 'aws-cdk-lib';

export class CloudStack extends cdk.Stack{
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props)
    }
}