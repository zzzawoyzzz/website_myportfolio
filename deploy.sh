#!/bin/bash
if [ -f .env ]; then
  source .env
else
  echo ".env file not found!"
  exit 1
fi
gcloud config set account $ACCOUNT_ID
gcloud config set project $PROJECT_ID
gcloud app deploy app.yaml  --project=$PROJECT_ID --quiet
gcloud app browse

# git add .
# git commit -m "deploy script and update .gitignore to include .env"
# git push