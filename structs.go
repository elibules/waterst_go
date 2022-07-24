package main

import "time"

type item_struct struct {
	Item_id      int
	Title        string
	Artist       string
	Release_date string
	Price        float32
	Image        string
	Quality      string
	Format       string
	Category     string
}

type message struct {
	Name         string `json:"contactName"`
	Email        string `json:"contactEmail"`
	Message_body string `json:"contactMessage"`
}

type messageRequest struct {
	Name         string `json:"contactName"`
	Email        string `json:"contactEmail"`
	Message_body string `json:"contactMessage"`
	Timestamp    string `json:"timestamp"`
}

type order struct {
	ID            string `json:"id"`
	Intent        string `json:"intent"`
	Status        string `json:"status"`
	PurchaseUnits []struct {
		ReferenceID string `json:"reference_id"`
		Amount      struct {
			CurrencyCode string `json:"currency_code"`
			Value        string `json:"value"`
			Breakdown    struct {
				ItemTotal struct {
					CurrencyCode string `json:"currency_code"`
					Value        string `json:"value"`
				} `json:"item_total"`
				Shipping struct {
					CurrencyCode string `json:"currency_code"`
					Value        string `json:"value"`
				} `json:"shipping"`
				Handling struct {
					CurrencyCode string `json:"currency_code"`
					Value        string `json:"value"`
				} `json:"handling"`
				Insurance struct {
					CurrencyCode string `json:"currency_code"`
					Value        string `json:"value"`
				} `json:"insurance"`
				ShippingDiscount struct {
					CurrencyCode string `json:"currency_code"`
					Value        string `json:"value"`
				} `json:"shipping_discount"`
			} `json:"breakdown"`
		} `json:"amount"`
		Payee struct {
			EmailAddress string `json:"email_address"`
			MerchantID   string `json:"merchant_id"`
		} `json:"payee"`
		Description string `json:"description"`
		Items       []struct {
			Name       string `json:"name"`
			UnitAmount struct {
				CurrencyCode string `json:"currency_code"`
				Value        string `json:"value"`
			} `json:"unit_amount"`
			Tax struct {
				CurrencyCode string `json:"currency_code"`
				Value        string `json:"value"`
			} `json:"tax"`
			Quantity string `json:"quantity"`
		} `json:"items"`
		Shipping struct {
			Name struct {
				FullName string `json:"full_name"`
			} `json:"name"`
			Address struct {
				AddressLine1 string `json:"address_line_1"`
				AdminArea2   string `json:"admin_area_2"`
				AdminArea1   string `json:"admin_area_1"`
				PostalCode   string `json:"postal_code"`
				CountryCode  string `json:"country_code"`
			} `json:"address"`
		} `json:"shipping"`
		Payments struct {
			Captures []struct {
				ID     string `json:"id"`
				Status string `json:"status"`
				Amount struct {
					CurrencyCode string `json:"currency_code"`
					Value        string `json:"value"`
				} `json:"amount"`
				FinalCapture     bool `json:"final_capture"`
				SellerProtection struct {
					Status            string   `json:"status"`
					DisputeCategories []string `json:"dispute_categories"`
				} `json:"seller_protection"`
				CreateTime time.Time `json:"create_time"`
				UpdateTime time.Time `json:"update_time"`
			} `json:"captures"`
		} `json:"payments"`
	} `json:"purchase_units"`
	Payer struct {
		Name struct {
			GivenName string `json:"given_name"`
			Surname   string `json:"surname"`
		} `json:"name"`
		EmailAddress string `json:"email_address"`
		PayerID      string `json:"payer_id"`
		Address      struct {
			AddressLine1 string `json:"address_line_1"`
			AdminArea2   string `json:"admin_area_2"`
			AdminArea1   string `json:"admin_area_1"`
			PostalCode   string `json:"postal_code"`
			CountryCode  string `json:"country_code"`
		} `json:"address"`
	} `json:"payer"`
	CreateTime time.Time `json:"create_time"`
	UpdateTime time.Time `json:"update_time"`
	Links      []struct {
		Href   string `json:"href"`
		Rel    string `json:"rel"`
		Method string `json:"method"`
	} `json:"links"`
}
