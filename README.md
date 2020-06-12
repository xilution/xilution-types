# xilution-types

Xilution specific types that can be used across projects

## Getting Started

### CI/CD Pipeline

1. Push this code to the master branch of your repository
1. Make sure you've updated your local xilution aws-cli credentials
1. Run the script `devops/scripts/deploy-pipeline.sh`
   1. with your `AWS_PROD_ACCOUNT_ID` env var set
   1. with your repository `--repository <your repo>`
   1. with your deployed stack name `--stackName <your stackname>`
1. The pipeline should build and deploy your code to npm
