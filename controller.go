package main

import (
	"net/http"
)

func spa(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)
	http.ServeFile(w, r, "./spa/build/index.html")
}
