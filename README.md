# Simple CRUD API with Node.js, Express, and MongoDB

This is a basic **CRUD API** built using **Node.js**, **Express**, and **MongoDB** with **Mongoose**.  
It allows you to **Create, Read, Update, and Delete** user records.

---

## Features

- Add a new person (`POST /person`)
- Update an existing person (`PUT /person`)
- Delete a person (`DELETE /person/:id`)
- Basic home route (`GET /`)

---

## Tech Stack

- Node.js
- Express.js
- MongoDB (with Mongoose)
- dotenv for environment variables

---

## Installation

1. **Clone the repository**

```bash
git clone <your-repo-url>
cd <repo-folder>
```

2. **Install dependencies**

```bash
npm install
```

3. **Create a `.env` file** in the root directory:

```
PORT=3000
MONGODB_URI=your-mongodb-uri
```

4. **Run the server**

```bash
npm start
```

Server will run at `http://localhost:3000` (or the port you set in `.env`).

---

## API Routes

### Home Route
```
GET /
```
- Returns: `"Home Route!!"`

### Add User
```
POST /person
```
- Body (JSON):
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 25
}
```
- Response: `"Person Added"`

### Update User
```
PUT /person
```
- Body (JSON):
```json
{
  "id": "<person-id>"
}
```
- Updates the age of the person to 585 (for demo purposes)
- Response: `"Person Updated!!"`

### Delete User
```
DELETE /person/:id
```
- Params:
  - `id` → The MongoDB `_id` of the user
- Response: `"User Deleted!"`

---

## Folder Structure

```
.
├── config/
│   └── db.js          # MongoDB connection
├── models/
│   └── Person.js      # Mongoose schema for Person
├── index.js           # Main server file
├── package.json
├── .env               # Environment variables
└── .gitignore
```

---

## Notes

- Make sure MongoDB is running and your URI is correct in `.env`.
- Use tools like **Postman** to test the API endpoints.
- This is a **demo API**; no authentication or advanced validation is implemented.

---

## License

MIT