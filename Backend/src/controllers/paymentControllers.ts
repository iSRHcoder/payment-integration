import type { Request, Response } from "express";

import crypto from "crypto";
import { createRazorpayInstance } from "../config/razorpay.js";


interface CreateOrderBody {
  itemId: string;
  itemPrice: number;
}

interface VerifyPaymentBody {
  order_id: string;
  payment_id: string;
  signature: string;
}

export const createOrder = async (req: Request<{}, {}, CreateOrderBody>, res: Response): Promise<void> => {
 
  const { itemId, itemPrice } = req.body;

  const options = {
    amount: itemPrice * 100,
    currency: "INR",
    receipt: `receipt_${itemId}_${Date.now()}`,
  };

  try {
    const razorpayInstance = createRazorpayInstance();

    razorpayInstance.orders.create(options, (err, order) => {
      if (err) {
        console.error("Razorpay Error:", err);

        res.status(500).json({
          success: false,
          message: "Something went wrong while creating order",
        });
        return;
      }
      res.status(200).json(order);
    });
  } catch (error) {
    console.error("Create Order Error:", error);

    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const verifyPayment = async (req: Request<{}, {}, VerifyPaymentBody>, res: Response): Promise<void> => {
  try {
    const { order_id, payment_id, signature } = req.body;

    if (!order_id || !payment_id || !signature) {
      res.status(400).json({
        success: false,
        message: "Missing payment details",
      });
      return;
    }

    const secret = process.env.RAZORPAY_KEY_SECRET as string;

    const hmac = crypto.createHmac("sha256", secret);
    hmac.update(`${order_id}|${payment_id}`);
    const generatedSignature = hmac.digest("hex");

    if (generatedSignature === signature) {
      res.status(200).json({
        success: true,
        message: "Payment verified",
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Payment verification failed",
      });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};