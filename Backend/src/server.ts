import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import paymentRouter from "./routes/paymentRoutes.js";

const app = express();

//console.log(`RAZORPAY_KEY_ID : ${process.env.RAZORPAY_KEY_ID}`);
//console.log(`RAZORPAY_KEY_SECRET : ${process.env.RAZORPAY_KEY_SECRET}`);

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  }),
);

app.use(express.json());

app.use("/api/v1/payment", paymentRouter);

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "payment integration api is working successfully",
  });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

export default app;
