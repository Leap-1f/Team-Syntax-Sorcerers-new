import { model, Schema } from "mongoose";
import { COLLECTIONS } from "../constant/const";
const ReviewSchema = new Schema({
  productId: { type: String, required: true },
  stars: {
    type: Number,
    star1: "",
    star2: "",
    star3: "",
    star4: "",
    star5: "",
  },
  comments: { type: String, comments: COLLECTIONS.COMMENT },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const ReviewModel = model("review", ReviewSchema);
