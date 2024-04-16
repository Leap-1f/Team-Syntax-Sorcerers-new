import { model, Schema } from "mongoose";

const OrderSchema = new Schema({
  orderNumber: { type: String, required: true },
  status: {
    type: String,
    enum: ["Ordered", "PreparingToShip", "Shipped", "Delivered"],
    required: true,
  },
  phoneNumber: { type: Number, required: true },
  deliveryDate: { type: Date, default: Date.now },
  coupon: { type: String, required: true },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const OrderModel = model("order", OrderSchema);
