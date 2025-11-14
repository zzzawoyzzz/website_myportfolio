#!/bin/bash

#  login to gcloud first then chose account # gcloud auth login

set -e

if [ -f .env ]; then
  source .env
else
  echo ".env file not found!"
  exit 1
fi

echo "Setting up gcloud configuration..."
gcloud config set account $ACCOUNT_ID
gcloud config set project $PROJECT_ID

# Upload resume from ./file/ to GCS bucket
echo "Uploading resume to Cloud Storage bucket..."
RESUME_FILE=$(ls file/*.pdf | head -n 1)

if [ -z "$RESUME_FILE" ]; then
  echo "Error: No PDF file found in ./file/ directory"
  exit 1
fi

echo "Found resume file: $RESUME_FILE"

# Remove old files from bucket
echo "Removing old files from gs://$RESUME_BUCKET_NAME/..."
gsutil -m rm gs://$RESUME_BUCKET_NAME/*.pdf 2>/dev/null || echo "No old files to remove"

# Upload new resume
echo "Uploading new resume to gs://$RESUME_BUCKET_NAME/..."
gsutil cp "$RESUME_FILE" gs://$RESUME_BUCKET_NAME/

# Make the file publicly readable
echo "Setting public read permissions..."
gsutil acl ch -u AllUsers:R gs://$RESUME_BUCKET_NAME/$(basename "$RESUME_FILE")

echo "Resume uploaded successfully!"

# Deploy to App Engine
echo "Deploying to App Engine..."
gcloud app deploy app.yaml  --project=$PROJECT_ID --quiet

echo "Opening app in browser..."
gcloud app browse

# git add .
# git commit -m "deploy script and update .gitignore to include .env"
# git push
