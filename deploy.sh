#!/bin/bash
if [ -f .env ]; then
  source .env
else
  echo ".env file not found!"
  exit 1
fi


gcloud config set account $ACCOUNT_ID
gcloud config set project $PROJECT_ID



gcloud app deploy app.yaml  --project=$PROJECT_ID
gcloud app browse