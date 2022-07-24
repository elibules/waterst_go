package main

func getItems() *[]item_struct {
	rows, err := db.Query("select item_id, title, artist, release_date, price, image, quality_name, format_name, category_name from inventory as i join qualities as q on q.quality_id = i.quality_id join formats as f on f.format_id = i.format_id join categories as c on c.category_id = i.category_id")

	checkError(err, "Query failed")

	items := []item_struct{}
	for rows.Next() {
		var r item_struct
		err = rows.Scan(&r.Item_id, &r.Title, &r.Artist, &r.Release_date, &r.Price, &r.Image, &r.Quality, &r.Format, &r.Category)
		checkError(err, "No items were found.")
		items = append(items, r)
	}

	return &items
}

func getItem(item_id string) *item_struct {
	rows, err := db.Query("select item_id, title, artist, release_date, price, image, quality_name, format_name, category_name from inventory as i join qualities as q on q.quality_id = i.quality_id join formats as f on f.format_id = i.format_id join categories as c on c.category_id = i.category_id where item_id = ?", item_id)

	checkError(err, "Query failed")

	r := item_struct{}
	for rows.Next() {
		err = rows.Scan(&r.Item_id, &r.Title, &r.Artist, &r.Release_date, &r.Price, &r.Image, &r.Quality, &r.Format, &r.Category)
		checkError(err, "No items were found.")
	}
	// fmt.Printf("%+v\n", r)

	return &r
}

func storeOrder(orderInfo string) {
	_, err := db.Query("INSERT INTO `orders`(`order_info`, `user_id`, `fulfilled`) VALUES (?,4,0)", orderInfo)

	println(orderInfo)

	checkError(err, "Query failed")
}

func storeMessage(m message) {
	_, err := db.Query(`INSERT INTO messages(name, email, message_body) VALUES ('` + m.Name + `','` + m.Email + `','` + m.Message_body + `')`)

	checkError(err, "Query failed")
}

func getMessages() *[]messageRequest {
	rows, err := db.Query("select name, email, message_body, timestamp from messages")

	checkError(err, "Query failed")

	messages := []messageRequest{}
	for rows.Next() {
		var r messageRequest
		err = rows.Scan(&r.Name, &r.Email, &r.Message_body, &r.Timestamp)
		checkError(err, "No items were found.")
		messages = append(messages, r)
	}

	return &messages
}
