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

// DownloadSC2Hotkeys handles the SC2 hotkeys download with proper headers to force download
func DownloadSC2Hotkeys(c *gin.Context) {
	sc2HotkeysURL := "https://drive.google.com/file/d/1DayJkEIBNS6tHhjRX03CopEV5IS5knc1/view?usp=sharing"

	// Fetch the file from Google Cloud Storage
	resp, err := http.Get(sc2HotkeysURL)
	if err != nil {
		c.String(http.StatusInternalServerError, "Failed to download SC2 hotkeys")
		return
	}
	defer resp.Body.Close()

	// Set headers to force download
	c.Header("Content-Description", "File Transfer")
	c.Header("Content-Type", "application/octet-stream")
	c.Header("Content-Disposition", "attachment; filename=\"standard awoii.SC2Hotkeys\"")
	c.Header("Content-Transfer-Encoding", "binary")
	c.Header("Expires", "0")
	c.Header("Cache-Control", "must-revalidate")
	c.Header("Pragma", "public")

	// Copy the file content to response
	io.Copy(c.Writer, resp.Body)
}
