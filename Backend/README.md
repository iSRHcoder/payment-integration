# payment-gateway-api
<<<<<<< HEAD

A RESTful API built with Node.js, Express, and TypeScript for seamless payment gateway integration. Features MongoDB for data persistence, dotenv for secure environment configuration, and a scalable MVC architecture.

---

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB (Mongoose)
- **Environment**: dotenv
- **Dev Tools**: tsx, nodemon

---

## Project Structure

```
Backend/
├── src/
│   ├── config/
│   │   └── db.ts               # MongoDB connection
│   ├── controllers/            # Route handler logic
│   ├── middlewares/            # Custom middleware (auth, error, etc.)
│   ├── models/                 # Mongoose schemas
│   ├── routes/                 # Express route definitions
│   ├── types/
│   │   └── express.d.ts        # Custom type declarations
│   └── server.ts               # App entry point
├── dist/                       # Compiled JS output (auto-generated)
├── .env                        # Environment variables (never commit)
├── .gitignore
├── package.json
└── tsconfig.json
```

---

## Getting Started

### Prerequisites

- Node.js >= 18.x
- MongoDB Atlas account or local MongoDB instance
- npm >= 9.x

### Installation

```bash
# Clone the repository
git clone https://github.com/iSRHcoder/payment-gateway-api.git

# Navigate to the project directory
cd payment-gateway-api

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
PORT=8080
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.od2feir.mongodb.net/payment_gateway
```

### Running the Project

```bash
# Development (auto-restart on file changes)
npm run dev

# Production build
npm run build

# Start production server
npm start
```

---

## Scripts

| Script  | Command                   | Description                      |
| ------- | ------------------------- | -------------------------------- |
| `dev`   | `tsx watch src/server.ts` | Development with hot reload      |
| `build` | `tsc`                     | Compile TypeScript to JavaScript |
| `start` | `node dist/server.js`     | Run compiled production build    |

---

## API Endpoints

### Health Check

```
GET /
```

**Response:**

```json
{
  "success": true,
  "message": "Payment Gateway API is running!"
}
```

> More endpoints will be documented here as the project grows.

---

## Environment Configuration

| Variable    | Description               | Example             |
| ----------- | ------------------------- | ------------------- |
| `PORT`      | Server port               | `8080`              |
| `MONGO_URI` | MongoDB connection string | `mongodb+srv://...` |

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## Author

**Sunil** — [GitHub](https://github.com/iSRHcoder)

---

## License

This project is licensed under the ISC License.
=======
A RESTful API built with Node.js, Express, and TypeScript for seamless payment gateway integration. Features MongoDB for data persistence, dotenv for secure environment configuration, and a scalable MVC architecture.
>>>>>>> f90dd59d9f0016eb7f6eb9f44611046544cceeb5
