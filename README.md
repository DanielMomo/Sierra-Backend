# Sierra-Backend
Sierra Backend Screening

## Real Estate Listing API

This is a simple Express API for managing real estate listings, built with TypeScript. The API provides endpoints to add new listings, retrieve all listings, and delete a listing.

Installation

Clone the repository:

    
```bash
git clone https://github.com/DanielMomo/Sierra-Backend.git
cd sierra-backend
```

Install the dependencies:

```bash
npm install
```

Compile the TypeScript files:

```bash
npm run build
```
Usage

To start the server in development mode using ts-node:

```bash
npm start
```

The server will run on http://localhost:3000.
API Endpoints
Add a New Listing

    URL: /listings
    Method: POST
    Body: JSON object matching the Listing interface
    Response:
        201 Created with the newly created listing object
        400 Bad Request if required fields are missing or invalid

Example:

```bash
curl -X POST http://localhost:3000/listings -H "Content-Type: application/json" -d '{
  "title": "Modern Apartment",
  "price": 150000,
  "description": "A modern apartment in the city center"
}'
```

Retrieve All Listings

    URL: /listings
    Method: GET
    Response:
        200 OK with an array of all listings

Example:

```bash
curl http://localhost:3000/listings
```

Delete a Listing

    URL: /listings/:id
    Method: DELETE
    Response:
        204 No Content if the listing is successfully deleted
        404 Not Found if the listing does not exist

Example:

```bash
curl -X DELETE http://localhost:3000/listings/<listing-id> 
```

## Testing

To run the tests, use the following command:

```bash
npm test
```

Project Structure

```lua
project-root/
├── src/
│   ├── routes/
│   │   └── listings.ts
│   ├── app.ts
│   ├── server.ts
│   └── app.test.ts
├── package.json
├── tsconfig.json
└── jest.config.js
```
    src/routes/listings.ts: Contains the routes for managing listings.
    src/app.ts: Configures the Express application.
    src/server.ts: Starts the Express server.
    src/app.test.ts: Contains the test cases for the API endpoints.
