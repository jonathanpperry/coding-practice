package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type Movie struct {
	ID    int    `json:"id"`
	Title string `json:"title"`
	Year  int    `json:"year"`
}

var movies = []Movie{
	{ID: 1, Title: "Alien", Year: 1979},
	{ID: 2, Title: "The Matrix", Year: 1999},
	{ID: 3, Title: "Arrival", Year: 2016},
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

func moviesHandler(w http.ResponseWriter, r *http.Request) {

	// Set Content-Type to application/json
	w.Header().Set("Content-Type", "application/json")

	if err := json.NewEncoder(w).Encode(movies); err != nil {
		http.Error(w, "failed to encode movies", http.StatusInternalServerError)
		return
	}

}

func main() {
	http.HandleFunc("/health", healthHandler)
	http.HandleFunc("/movies", moviesHandler)

	fmt.Println("Movie service listening on http://localhost:8080")

	if err := http.ListenAndServe(":8080", nil); err != nil {
		fmt.Println("server error:", err)
	}
}
