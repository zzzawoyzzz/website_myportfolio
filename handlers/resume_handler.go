package handlers

import (
	"io"
	"net/http"

	"github.com/gin-gonic/gin"
)

// DownloadResume handles the resume download with proper headers to force download
func DownloadResume(c *gin.Context) {
	resumeURL := "https://storage.googleapis.com/my-resume-for-download/Witchaya_Morakotsriwan_Resume_2026.pdf"

	// Fetch the file from Google Cloud Storage
	resp, err := http.Get(resumeURL)
	if err != nil {
		c.String(http.StatusInternalServerError, "Failed to download resume")
		return
	}
	defer resp.Body.Close()

	// Set headers to force download
	c.Header("Content-Description", "File Transfer")
	c.Header("Content-Type", "application/pdf")
	c.Header("Content-Disposition", "attachment; filename=Witchaya_Morakotsriwan_Resume_2026.pdf")
	c.Header("Content-Transfer-Encoding", "binary")
	c.Header("Expires", "0")
	c.Header("Cache-Control", "must-revalidate")
	c.Header("Pragma", "public")

	// Copy the file content to response
	io.Copy(c.Writer, resp.Body)
}
