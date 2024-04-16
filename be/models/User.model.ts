import { model, Schema } from "mongoose";

const UserSchema = new Schema({
  userName: { type: String, required: true },
  email: { type: Number, required: true },
  phoneNumber: { type: Number, required: true },
  password: { type: String, required: true },
  address: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const UserModel = model("user", UserSchema);
