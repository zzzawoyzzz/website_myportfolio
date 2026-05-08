# Witchaya Morakotsriwan - Data Engineer Portfolio

visit my website here : https://awoy.me

This is my online portfolio showcasing my experience and skills as a Data Engineer.

## About Me

Hi! I'm Witchaya Morakotsriwan, but you can call me Awoy. I'm a Data Engineer with 3 years of experience working in a global consulting firm in Thailand. I've had the opportunity to collaborate with clients across various industries, including banking, material construction, and oil and gas. 

My passion lies in building ETL pipelines using the latest technologies and best practices to deliver solutions that meet client needs. I'm proficient in Python, SQL, and cloud platforms like Azure, GCP, and AWS. Additionally, I have hands-on experience with Databricks.

## My Portfolio Website

This is a personal portfolio website built with Go (Gin framework) and deployed on Google App Engine.

---

## Project Structure

This project follows Go best practices with a clean separation of concerns.

```text
website_myportfolio/
├── main.go              # Application entry point
├── app.yaml             # App Engine configuration
├── cloudbuild.yaml      # Cloud Build CI/CD configuration
├── deploy.sh            # Automated deployment script
├── go.mod               # Go module dependencies
├── go.sum               # Dependency checksums
├── readme.md            # This file
├── .env                 # Environment variables (not in git)
├── .gcloudignore        # Exclude files from GCP deployment
├── .gitignore           # Exclude files from Git repository
├── .github/             # GitHub configuration directory
├── handlers/            # HTTP request handlers
│   ├── home_handler.go
│   └── resume_handler.go
├── routes/              # Route definitions
│   └── routes.go
├── static/              # Static assets (CSS, JS)
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── script.js
├── templates/           # HTML templates
│   └── index.html
├── image/               # Image assets
└── file/                # Resume PDF files for deployment
```

## Architecture

### main.go
- Entry point of the application (16 lines, clean and simple)
- Initializes the Gin router
- Calls route setup
- Starts the server on port 8081

### handlers/
Contains all HTTP request handlers. Each handler is responsible for:
- Processing requests
- Business logic
- Returning responses

**Current handlers:**
- `home_handler.go` - Renders the home page
- `resume_handler.go` - Handles resume download with proper headers to force download

### routes/
Centralized route configuration. Benefits:
- Single place to view all routes
- Easy to maintain and update
- Clean separation from business logic

**routes.go:**
- Configures static file serving (`/static`, `/image`)
- Loads HTML templates
- Maps URLs to handlers

## Features

- ✅ Responsive design with smooth scroll animations
- ✅ Resume download with automatic file download (not browser preview)
- ✅ Professional sections: Home, Skills, Experience, Certificates, Achievements, Contact
- ✅ Integration with Google Cloud Storage for resume hosting
- ✅ Automated deployment script with resume upload

---

## Running Locally

```bash
go run main.go
```

Server will start on `http://localhost:8081`

---

## Deployment Instructions

### Prerequisites

1. **Install Google Cloud SDK**
   - Download and install from https://cloud.google.com/sdk/docs/install

2. **Authenticate with Google Cloud**
   ```bash
   gcloud auth login
   ```

### Setup

1. **Create a `.env` file** in the project root:
   ```bash
   ACCOUNT_ID=your-google-account@example.com
   PROJECT_ID=your-gcp-project-id
   RESUME_BUCKET_NAME=my-resume-for-download
   ```

2. **Place your resume PDF** in the `./file/` directory:
   ```bash
   cp your-resume.pdf file/
   ```

### Deploy

Run the deployment script:
```bash
./deploy.sh
```

The script will automatically:
1. Load environment variables from `.env`
2. Set the active GCP account and project
3. Find and upload the PDF from `./file/` to Google Cloud Storage
4. Remove old resume files from the bucket
5. Set public read permissions on the new resume
6. Deploy the app to App Engine
7. Open the deployed app in your browser

---

## Adding New Features

### 1. Add a new handler
Create a new file in `handlers/`:
```go
package handlers

import "github.com/gin-gonic/gin"

func YourNewHandler(c *gin.Context) {
    // Your logic here
}
```

### 2. Register the route
Add to `routes/routes.go`:
```go
r.GET("/your-path", handlers.YourNewHandler)
```

---

## Technology Stack

- **Backend**: Go (Gin framework)
- **Frontend**: HTML, CSS, Vanilla JavaScript
- **Deployment**: Google App Engine
- **Storage**: Google Cloud Storage (for resume hosting)
- **Styling**: Custom CSS with animations

---

## Best Practices Used

1. **Separation of Concerns**: Handlers, routes, and main logic are separated
2. **Modularity**: Easy to add/remove features
3. **Maintainability**: Clear structure makes code easy to understand
4. **Scalability**: Can easily add more handlers and routes as needed
5. **Clean Code**: Main.go is minimal and focused

---

## Notes

- `.env` file is required and should not be committed to git
- Resume PDF should be placed in `./file/` directory before deployment
- The deployment script automatically handles resume uploads to GCS
- For code changes, commit and push using git after deployment
- App Engine will automatically scale based on traffic

---

## Contact

- **LinkedIn**: [linkedin.com/in/witchaya-m](https://linkedin.com/in/witchaya-m)
- **Medium**: [My Articles](https://medium.com/@awoy.witchaya)
- **YouTube**: [@awoystorage9936](https://www.youtube.com/@awoystorage9936)
