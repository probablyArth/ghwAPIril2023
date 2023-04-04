package main

import (
	"math/rand"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

type Stuff struct {
		Type string `json:"type"`
		Name string `json:"name"`
		Id string `json:"id"`
}

var stuffs = []Stuff{ {Name: "This is so funny", Type: "funny", Id: uuid.NewString()} }

func main() {
	r := gin.Default()

	r.GET("/:id", func(c *gin.Context) {
		
		for _, s := range stuffs {
			if s.Id == c.Param("id") {
				c.JSON(http.StatusOK, s)
				return
			}
		}
		c.JSON(http.StatusNotFound, gin.H{"message": "stuff with id " + c.Param("id") + " not found"})
	})

	r.GET("/random", func (c *gin.Context) {
		if (len(stuffs) == 0) {
			c.JSON(http.StatusOK, gin.H{"message": "No stuff found"})
			return;
		}
		randomNo := rand.Intn(len(stuffs))
		c.JSON(http.StatusOK, stuffs[randomNo])
	})

	r.POST("/:type", func(c *gin.Context) {
		Type := c.Param("type")
		body := struct{Name string `json:"name"`}{}
		if err := c.BindJSON(&body); err != nil {
			c.AbortWithError(http.StatusBadRequest, err)
			return
		}
		stuffs = append(stuffs, Stuff{Type: Type, Name: body.Name, Id: uuid.NewString()})
		c.JSON(http.StatusCreated, &body)
	})
	
	r.GET("/random/:type", func(c *gin.Context) {
		Type := c.Param("type")
		typeArr := []Stuff{}
		for _, stuff := range stuffs {
			if (stuff.Type == Type) {
				typeArr = append(typeArr, stuff)
			}
		}
		if len(typeArr) == 0 {
			c.JSON(http.StatusOK, gin.H{"message": "no stuff for type " + Type + " found"})
			return
		}
		randomNo := rand.Intn(len(typeArr))
		c.JSON(http.StatusOK, typeArr[randomNo])
	})

	r.Run()
}