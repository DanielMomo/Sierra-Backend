# Sierra-Backend
Sierra Backend Screening

Exercise Overview:
You are tasked with creating a simple RESTful API using TypeScript and Node.js. This API will manage a small database of real estate listings, enabling users to add a new listing, retrieve all listings, and delete a listing.
Technology Stack:
TypeScript
Node.js
Express.js (or any similar framework you're comfortable with)
Exercise Breakdown:

## Setup ##
Initialize a new Node.js project by creating a package.json file. You can do this by running `npm init -y` in your terminal.
Install the necessary packages. You'll at least need typescript, express, and @types/express. Install these by running `npm install typescript express @types/express`.
Setup TypeScript for the project. Create a tsconfig.json file by running tsc --init and adjust the configurations if needed for your project setup.
## Define the Data Model ##
Define a TypeScript interface for a real estate listing. In your main working file (e.g., app.ts), define an interface named Listing with the following properties:
`id`: a unique identifier for the listing (string)
`title`: the title of the real estate listing (string)
`price`: the price of the listing (number)
`description`: a brief description of the listing (string)
## Implement the API Endpoints ##
#### Add a New Listing: ####
- Create a `POST` endpoint `/listings` that allows users to add a new listing. This endpoint should accept JSON data matching the Listing interface and add it to an in-memory store (e.g., an array).
#### Retrieve All Listings: ####
- Create a `GET` endpoint `/listings` that retrieves all current listings from the in-memory store.
#### Delete a Listing: ####
- Create a `DELETE` endpoint `/listings/:id` where `:id` is the unique identifier of the listing to be deleted. This endpoint should remove the specified listing from the in-memory store.

## Testing ##
Demonstrate the functionality of your API. You can use any API testing tool like Postman or a simple curl command in your terminal. Ensure you can add a listing, retrieve all listings, and delete a listing successfully.
If you prefer writing a quick test script instead of using a tool, that's also acceptable. Ensure your script tests all three functionalities.
Instructions for the Candidate:
You will be evaluated based on code quality, adherence to the exercise requirements, and your approach to solving the task.
Please think aloud as you work through the problem. Explain your reasoning and the steps you're taking.
You may use online resources for syntax references or to troubleshoot issues, but ensure the logic and implementation are your own.
Focus on the core functionality. If time permits, you can refine your solution, but it's more important to have a working API that meets the basic requirements.
After completing the exercise, be prepared to walk through your code, discuss your design choices, and possibly extend the functionality if asked.

Submission Requirements:
* Follow GitHub repository structure best practices.
* Include a README.md with project instructions and overview.
