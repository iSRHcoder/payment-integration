import Razorpay from "razorpay";

export const createRazorpayInstance = (): Razorpay => {
  return new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID as string,
    key_secret: process.env.RAZORPAY_KEY_SECRET as string,
  });
};