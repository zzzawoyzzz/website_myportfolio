package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// Home renders the home page
func Home(c *gin.Context) {
	c.HTML(http.StatusOK, "index.html", nil)
}
