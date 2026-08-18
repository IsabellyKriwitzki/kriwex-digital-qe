# Kriwex Digital QE Automation Framework

![Playwright](https://img.shields.io/badge/Playwright-Test%20Automation-2EAD33)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![CI/CD](https://img.shields.io/badge/GitHub%20Actions-CI%2FCD-blue)

## Overview

Kriwex Digital QE Automation Framework is an enterprise-style Quality Engineering project created to demonstrate modern software testing practices across multiple layers.

The project simulates a digital authentication platform and validates application quality through:

- API Testing
- UI Automation
- End-to-End Testing
- Database Validation
- Security Testing
- Contract Testing
- Continuous Integration

The goal is to demonstrate a complete QA automation ecosystem similar to real-world software engineering environments.

---

# Architecture
                User Interface
                     |
                     |
             Playwright UI Tests
                     |
                     |
                REST API
                     |
                     |
          Express Authentication API
                     |
                     |
              Service Layer
                     |
                     |
            Repository Pattern
                     |
                     |
                SQLite Database



---

# Technology Stack

## Test Automation

- Playwright
- TypeScript
- Node.js

## Backend

- Express.js
- TypeScript
- SQLite
- Better-SQLite3

## Quality Engineering

- API Testing
- UI Testing
- E2E Testing
- Database Testing
- Security Testing
- Contract Testing

## CI/CD

- GitHub Actions
- Automated test execution
- Test reports
- Artifact collection


---

# Project Architecture
## Project Architecture

```text
kriwex-digital-qe/
│
├── application/
│   ├── backend/
│   │   └── src/
│   │       ├── controllers/        # Request handling layer
│   │       ├── database/           # Database connection and schema
│   │       ├── models/             # Data models
│   │       ├── repositories/       # Data access layer
│   │       ├── routes/             # API routes
│   │       ├── services/           # Business logic layer
│   │       └── server.ts           # Backend entry point
│   │
│   └── frontend/
│       ├── public/                 # Static frontend assets
│       └── src/                    # Frontend application source
│
├── tests/
│   ├── api/
│   │   ├── authentication/         # Authentication API tests
│   │   ├── clients/                # API client helpers
│   │   ├── contracts/              # API contract validation
│   │   └── security/               # Security testing scenarios
│   │
│   ├── ui/
│   │   └── authentication/         # UI authentication tests
│   │
│   ├── e2e/
│   │   └── authentication/         # End-to-end user flows
│   │
│   ├── database/
│   │   └── clients/                # Database validation helpers
│   │
│   ├── fixtures/                   # Test fixtures and reusable setup
│   │
│   └── pages/                      # Page Object Model classes
│
├── data/
│   └── authenticationData.ts       # Test data management
│
├── api/
│   └── AuthApi.ts                  # API abstraction layer
│
├── utils/
│   └── api/
│       └── contractValidator.ts    # API schema validation utilities
│
├── playwright.config.ts             # Playwright configuration
├── package.json                     # Project dependencies
├── package-lock.json
│
└── .github/
    └── workflows/
        └── playwright.yml           # CI/CD pipeline with GitHub Actions
```
# Test Coverage

Current automated coverage:

| Area | Status |
|---|---|
| Authentication API | ✅ |
| API Validation | ✅ |
| UI Authentication | ✅ |
| End-to-End Authentication | ✅ |
| Database Validation | ✅ |
| Contract Testing | ✅ |
| Security Testing | ✅ |
| CI/CD Pipeline | ✅ |


Current execution:
30 tests passed



---


# API Testing


Implemented scenarios:


## Successful Authentication


Valid user credentials:



customer@kriwex.com
Kriwex123!



Validation:


- HTTP 200
- Token generated
- User data returned




---


## Invalid Password


Scenario:



Valid email
Invalid password



Expected:



401 Unauthorized



Response:


```json
{
 "message": "Invalid credentials"
}
Unknown User

Scenario:

User does not exist

Expected:

401 Unauthorized
Locked Account

Scenario:

locked@kriwex.com

Expected:

403 Forbidden
Database Testing

Database validation implemented using SQLite.

Example validation:

SELECT id, email, password, role, locked
FROM users
WHERE email = ?

The project uses parameterized SQL queries.

Benefits:

Prevents SQL injection through query manipulation
Separates SQL commands from user input
Improves database security
Security Testing

Security scenarios implemented:

SQL Injection Protection

Example payload:

' OR 1=1 --

Expected:

400 Invalid email format

The application rejects malicious input before authentication.

XSS Payload Validation

Example:

<script>alert('xss')</script>

Expected:

400 Bad Request
Empty Credentials

Scenario:

email=""
password=""

Expected:

{
 "message": "Email and password are required"
}
Sensitive Information Exposure

Validation:

The API must not expose:

passwords
database information
internal implementation details
End-to-End Testing

Implemented cross-layer scenario:

UI Login
    |
    |
API Authentication
    |~~~~
    |
Database Verification

Validated:

User can login through UI
API returns correct authentication response
Database contains correct user state
CI/CD Pipeline

GitHub Actions automatically executes:

Checkout Repository


        ↓


Install Dependencies


        ↓


Install Playwright Browsers


        ↓


Start Backend


        ↓


Health Check


        ↓


Run Test Suite


        ↓


Upload Reports


        ↓


Upload Logs

Generated artifacts:

Playwright HTML Report
Test Results
Backend Logs
Running Locally

Install dependencies:

npm install

Run all tests:

npm test

Run API tests:

npx playwright test --project=api

Run UI tests:

npx playwright test --project=chromium

Open report:

npx playwright show-report
Test Design Approach

The project follows:

Page Object Model (POM)
Test Fixtures
Separation of test data
API clients
Database clients
Layered architecture

Example:

Test Layer


↓


API Client / Page Object


↓


Application Layer


↓


Database
Future Improvements

Planned improvements:

Security
JWT authentication
Token expiration testing
Role-based authorization testing
Brute-force protection testing
Backend
Password hashing with bcrypt
Environment configuration
Centralized error handling
Logging
Infrastructure
Docker support
Test containers
Environment-based execution
Author
Isabelly Kriwitzki

QA Engineer | Quality Engineering | Test Automation

Skills demonstrated:

Playwright
TypeScript
API Testing
UI Automation
SQL
CI/CD
Agile Testing
Security Testing
