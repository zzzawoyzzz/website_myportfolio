package main

import (
	"my_awoy_portfolio_2025/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	// Setup all routes
	routes.SetupRoutes(r)

	// Start server
	r.Run(":8081")
}
