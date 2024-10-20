package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	// Serve static files from the "static" directory (for CSS and JS)
	r.Static("/static", "./static")

	// Serve static files from the "image" directory for images
	r.Static("/image", "./image")

	// Load HTML templates from the "templates" directory
	r.LoadHTMLGlob("templates/*") // Change the path if necessary

	// Route for rendering index.html
	r.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", nil)
	})

	// Start the server on port 8080
	r.Run(":8080") // listen and serve on port 8080
}
