package routes

import (
	"my_awoy_portfolio_2025/handlers"

	"github.com/gin-gonic/gin"
)

// SetupRoutes configures all application routes
func SetupRoutes(r *gin.Engine) {
	// Static files
	r.Static("/static", "./static")
	r.Static("/image", "./image")

	// HTML templates
	r.LoadHTMLGlob("templates/*")

	// Routes
	r.GET("/", handlers.Home)
	r.GET("/download-resume", handlers.DownloadResume)
	r.GET("/sc2", handlers.DownloadSC2Hotkeys)
}
