package main

import "log"

func checkError(err error, message string) {
	if err != nil {
		log.Fatalln(err, message)
	}
}
