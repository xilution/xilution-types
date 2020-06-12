#!/usr/bin/env bash

set -e

stackName=xilution-webhooks-pipeline

echo "Deleting pipeline stack $stackName"
aws cloudformation delete-stack \
  --stack-name $stackName \
  --profile xilution-shared
