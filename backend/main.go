package main

import (
	"log"
	"react-go-api/controllers"
)

func main() {
	// controllers パッケージから StartWebServer を呼び出す
	err := controllers.StartWebServer()
	if err != nil {
		log.Fatal(err)
	}
}