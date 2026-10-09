package main

import (
	"fmt"
	"net/http"
)

type Movie struct {
	ID    int    `json:"id"`
	Title string `json:"title"`
	Year  int    `json:"year"`
}

func (m Movie) Validate() error {
	if m.Title == "" {
		return fmt.Errorf("title is required")
	}

	if m.Year < 1888 || m.Year > 2100 {
		return fmt.Errorf("year must be between 1888 and 2100")
	}

	return nil
}

func healthHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "ok")
}

func main() {
	http.HandleFunc("/health", healthHandler)

	fmt.Println("Movie service listening on http://localhost:8080")

	if err := http.ListenAndServe(":8080", nil); err != nil {
		fmt.Println("server error:", err)
	}
}
