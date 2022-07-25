package main

import (
	"log"
	"net/http"
)

func checkError(err error, message string) {
	if err != nil {
		log.Fatalln(err, message)
	}
}

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
}
