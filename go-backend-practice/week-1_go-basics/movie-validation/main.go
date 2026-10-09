package main

import (
	"fmt"
)

type Movie struct {
	ID    int    `json:"id"`
	Title string `json:"title"`
	Year  int    `json:"year"`
}

func (m Movie) Validate() error {

	// - Title must not be empty
	if m.Title == "" {
		return fmt.Errorf("Title is required")
	}

	// - Year must be between 1888 and 2100, inclusive.
	if m.Year < 1888 || m.Year > 2100 {
		return fmt.Errorf("Year must be between 1888 and 2100, inclusive")
	}

	// - Return nil when valid.
	return nil
}

func main() {
	movies := []Movie{
		{ID: 1, Title: "Alien", Year: 1979},
		{ID: 2, Title: "", Year: 1999},
		{ID: 3, Title: "Future", Year: 2200},
	}

	for _, movie := range movies {
		if err := movie.Validate(); err != nil {
			fmt.Printf("%d: %v\n", movie.ID, err)
		} else {
			fmt.Printf("%d: ok\n", movie.ID)
		}
	}
}