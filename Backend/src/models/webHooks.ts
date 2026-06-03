import mongoose, { Document, Schema } from "mongoose";

export interface IWebhookLog extends Document {
  event: string; // e.g. "payment.captured"
  razorpayPaymentId: string;
  razorpayOrderId: string;
  payload: Record<string, unknown>; // full raw body
  verified: boolean; // was the signature valid?
  processedAt: Date;
}

const webhookLogSchema = new Schema<IWebhookLog>(
  {
    event: { type: String, required: true, index: true },
    razorpayPaymentId: { type: String, required: true },
    razorpayOrderId: { type: String, required: true, index: true },
    payload: { type: Schema.Types.Mixed, required: true },
    verified: { type: Boolean, required: true },
    processedAt: { type: Date, default: Date.now, index: true },
  },
  {
    timestamps: false, // processedAt is enough
    versionKey: false, // no __v needed on logs
  },
);

// Append-only — never allow updates
webhookLogSchema.pre("findOneAndUpdate", function () {
  throw new Error("WebhookLog is append-only");
});

export default mongoose.model<IWebhookLog>("WebhookLog", webhookLogSchema);
