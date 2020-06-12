#!/usr/bin/env bash

set -e

stackName=
repository=

while [ $# -gt 0 ]; do
  if [[ $1 == *"--"* ]]; then
    param="${1/--/}"
    declare $param="$2"
  fi

  shift
done

if [ -z "$AWS_PROD_ACCOUNT_ID" ]; then echo "[ERROR] AWS_PROD_ACCOUNT_ID variable not set"; exit 1; fi
if [ -z "$stackName" ]; then echo "[ERROR] Please pass a stack name with --stackName"; exit 1; fi
if [ -z "$repository" ]; then echo "[ERROR] Please pass a repository with --repository"; exit 1; fi

echo $stackName $repository

echo "Verifying pipeline cloudformation template for $stackName"
aws cloudformation validate-template \
  --template-body file://./devops/cloudformation/pipeline.yml \
  --profile xilution-shared

echo "Deploying pipeline stack $stackName"
aws cloudformation deploy --stack-name $stackName \
  --template-file devops/cloudformation/pipeline.yml \
  --parameter-overrides XilutionProdAccountId="$AWS_PROD_ACCOUNT_ID" \
    Repository="$repository" \
  --profile xilution-shared \
  --no-fail-on-empty-changeset
