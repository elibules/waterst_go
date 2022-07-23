package main

import (
	"net/http"
)

func spa(responseWriter http.ResponseWriter, request *http.Request) {
	http.ServeFile(responseWriter, request, "./spa/build/index.html")
}
