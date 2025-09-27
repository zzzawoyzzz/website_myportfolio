# Witchaya Morakotsriwan - Data Engineer Portfolio

visit my website here : https://awoy.me

This is my online portfolio showcasing my experience and skills as a Data Engineer.

## About Me

Hi! I'm Witchaya Morakotsriwan, but you can call me Awoy. I'm a Data Engineer with 3 years of experience working in a global consulting firm in Thailand. I've had the opportunity to collaborate with clients across various industries, including banking, material construction, and oil and gas. 

My passion lies in building ETL pipelines using the latest technologies and best practices to deliver solutions that meet client needs. I'm proficient in Python, SQL, and cloud platforms like Azure, GCP, and AWS. Additionally, I have hands-on experience with Databricks.

## My Portfolio Website

This is a personal portfolio website built with Go and Google App Engine.


### Project Structure

```
website_myportfolio/
├── app.yaml
├── deploy.sh
├── go.mod
├── go.sum
├── main.go
├── readme.md
├── image/
│   ├── ... (various images)
├── static/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── script.js
├── templates/
│   └── index.html
```

---

## Deployment Instructions

To deploy this website to Google App Engine, follow these steps:

1. **Install Google Cloud SDK**
     - Download and install from https://cloud.google.com/sdk/docs/install

2. **Authenticate with Google Cloud**
     - Run:
         ```bash
         gcloud auth login
         ```
     - Choose your Google account.

3. **Create a `.env` file**
     - In the project root, create a file named `.env` with the following variables:
         ```bash
         ACCOUNT_ID=your-google-account@example.com
         PROJECT_ID=your-gcp-project-id
         ```

4. **Run the deployment script**
     - In your terminal, execute:
         ```bash
         bash deploy.sh
         ```
     - The script will:
         - Load environment variables from `.env`
         - Set the active account and project
         - Deploy the app using `gcloud app deploy`
         - Open the deployed app in your browser

---

## Notes

- Make sure `.env` is present before running the script.
- The script will exit if any command fails (`set -e`).
- For code changes, commit and push using git as shown in the script comments.
