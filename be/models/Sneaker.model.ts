import { model, Schema } from "mongoose";

const SneakerSchema = new Schema({
  price: { type: Number, required: true },
  categgoryId: { type: String, required: true },
  name: { type: String, required: true },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true },
  description: { type: String, required: true },
  color: { type: String, enum: ["black", "white", "red"], required: true },
  brend: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  coupon: { type: String, required: true },
});

export const SneakerModel = model("sneaker", SneakerSchema);
