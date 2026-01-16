import * as cdk from 'aws-cdk-lib';
import { CloudStack } from './stack';

const app = new cdk.App();
new CloudStack(app, 'CloudStack');