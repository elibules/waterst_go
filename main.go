package main

import (
	"log"
	"net/http"
)

func main() {

	fs := http.FileServer(http.Dir("./spa/build"))
	http.Handle("/static/", fs)

	routes()

	log.Print("Started server at http://localhost:8080/")
	http.ListenAndServe(":8080", nil)
}
