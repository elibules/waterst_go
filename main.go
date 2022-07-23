package main

import (
	"net/http"
)

func main() {

	fs := http.FileServer(http.Dir("./spa/build"))
	http.Handle("/static/", fs)

	routes()

	http.ListenAndServe(":8080", nil)
}
