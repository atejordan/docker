# Docker - Vote App

## Introduction

Welcome to the documentation of our voting website

## Containers
- [Vote](#vote)
- [Result](#result)
- [Worker](#worker)

## Vote

### Service
Vote

### Objective
The vote service aims to provide a user-friendly interface for users to participate in real-time voting. It serves as the front-end for the questionnaire.

### Language(s) Used
- HTML
- CSS
- Python

### External Services
- **Flask:** 2.3.2
  - Lightweight web framework for Python.
- **Redis:** 4.6.0
  - In-memory key-value database system, used to store real-time voting results.

### Identifiers
N/A

## Result

### Service
Result

### Objective
The result service aims to provide a user-friendly interface for users to view the real-time voting results. It serves as the front-end for the questionnaire.

### Language(s) Used
- HTML
- CSS
- Java

### External Services
- **async:** 3.1.0

- **body-parser:** 1.19.0

- **cookie-parser:** 1.4.4

- **express:** 4.17.1

- **method-override:** 3.0.0

- **pg:** 8.8.0

- **socket.io:** 2.5.0

- **stoppable:** 1.1.0

### Identifiers

- DBHOST: db
- DBNAME: postgres
- DBUSER: postgres
- DBPASS: postgres

## Worker

### Service
Worker

### Objective
The worker service aims to act as a link between the two backends (Redis & PostgreSQL). It serves as the front-end for the questionnaire.

### Language(s) Used
- C#

### External Services

- **System**

- **System.Data.Common**

- **System.Linq**

- **System.Net**

- **System.Net.Sockets**

- **System.Threading**

- **Newtonsoft.Json**

- **Npgsql**

- **StackExchange.Redis**

### Identifiers
N/A


## Traefik

### Service
Traefik

### Objective
Traefik is a reverse proxy designed for Docker, simplifying the management of HTTP requests between services and ensuring an equitable distribution of requests to be processed.

### Language(s) Used
- YAML

### External Services

- **Vote**

- **Result**

- **Worker**

- **Redis**

- **Postgres**

### Identifiers
N/A