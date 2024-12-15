# Short URL Project

A simple URL shortening service built with Express.js, MongoDB, and Mongoose. This project allows users to shorten URLs and track visit analytics.

## Features
- **Shorten URLs**: Generate a shortened URL for any given long URL.
- **Redirect**: Redirect users to the original URL when they visit a shortened URL.
- **Analytics**: Track the visit history and analytics for each shortened URL.

## Installation

### Prerequisites
- Node.js (version 14 or higher)
- MongoDB (local or remote instance)

### Steps to Run Locally

1. Clone the repository:
     ```bash
   git clone https://github.com/yourusername/short-url.git
2.	Navigate to the project directory:
       ```bash
       cd short-url
4.	Install dependencies:
       ```bash
       npm install
6.	Set up MongoDB (ensure MongoDB is running locally or configure a remote MongoDB URL):
	•	Update the MongoDB URL in the connectMongoDb.js file if using a remote instance.
7. Run the project:
   ```bash
   npm start
9. The server will be running on http://localhost:3000.

## Endpoints

- **POST `/`**: Generate a new shortened URL.
  - Request Body: 
    ```json
    { "redirectUrl": "https://example.com" }
    ```
  - Response:
    ```json
    { "shortId": "abcd123", "redirectUrl": "https://example.com" }
    ```

- **GET `/:shortId`**: Redirect to the original URL for the given `shortId`.

- **GET `/analytics/:shortId`**: Get analytics (visit history) for a specific shortened URL.
  - Response:
    ```json
    {
      "shortId": "abcd123",
      "redirectUrl": "https://example.com",
      "visitCount": 10,
      "visitHistory": [ { "timestamp": 1634572800000 }, ... ]
    }
    ```

## Technologies Used
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing URLs and visit data.
- **Mongoose**: ODM (Object Document Mapper) for MongoDB.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add feature'`).
5. Push to the branch (`git push origin feature-name`).
6. Create a new pull request.

   
