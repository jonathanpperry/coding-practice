# Go Backend Practice

Hands-on Go exercises focused on building practical backend engineering skills.

## Goals

- Build fluency with Go syntax and idioms
- Practice structs, functions, methods, and error handling
- Work with JSON and HTTP handlers
- Write table-driven tests
- Use context, timeouts, and focused concurrency
- Build a small Go HTTP service
- Prepare the service to run locally in Kubernetes

## Structure

```text
go-backend-practice/
├── README.md
├── go.mod
├── week-1_go-basics/
│   └── movie-validation/
├── week-2_http-json/
├── week-3_testing/
└── movie-service/
```

### Practice folders

The `week-*` directories contain small, focused exercises for learning individual Go concepts.

### movie-service

`movie-service/` is the cumulative backend project.

Concepts practiced in the smaller exercises can be incorporated into this service as the project develops.

The eventual goal is to:

1. Build a small HTTP API in Go
2. Add validation and JSON handling
3. Add automated tests
4. Add context and timeout handling
5. Containerize the service
6. Run and inspect it in a local Kubernetes cluster

## Running Go Code

From the repository or appropriate exercise directory:

```powershell
go run .
```

Format Go code:

```powershell
gofmt -w .
```

Run static checks:

```powershell
go vet ./...
```

Run tests:

```powershell
go test ./...
```

## Practice Philosophy

Exercises should stay small enough to complete in a focused session while emphasizing code that resembles real backend work.

An exercise is only considered complete after the code or command output has been verified.
