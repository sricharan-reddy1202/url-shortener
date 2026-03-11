# URL Shortener API

A backend service that converts long URLs into short links and tracks usage analytics.

## Features

- Generate short URLs
- Redirect to original URLs
- Track click count
- Analytics API
- Input validation

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- NanoID

## API Endpoints

### Create Short URL

POST /shorten

Body:
{
"url": "https://example.com"
}

Response:
{
"shortUrl": "http://localhost:5000/abc123"
}

### Redirect URL

GET /:shortId

Redirects user to the original URL.

### Analytics

GET /analytics/:shortId

Response:
{
"originalUrl": "...",
"clicks": 10,
"createdAt": "..."
}

## Installation

Clone the repository:

git clone https://github.com/sricharan-reddy1202/url-shortener.git

Install dependencies:

npm install

Run server:

node server.js