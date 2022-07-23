package main

import "net/http"

func routes() {
	http.HandleFunc("/", spa)
	// http.HandleFunc("/*", assets)
}
