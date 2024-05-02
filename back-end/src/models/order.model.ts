import { model, models, Schema } from "mongoose";
import { COLLECTIONS } from "../constant";
const OrderSchema = new Schema(
  {
    userId: { type: [Schema.Types.ObjectId], ref: COLLECTIONS.USER },
    orderNumber: { type: Number, required: true },
    status: {
      type: String,
      enum: ["Zahialsan", "Hurgegdsen", "Hurgelted garsan "],
      default: "Zahialsan",
    },
    location: { type: [Schema.Types.ObjectId], ref: COLLECTIONS.LOCATION },
    orderItem: [],
  },
  {
    timestamps: true,

    toJSON: {
      versionKey: false,

      virtuals: true,

      transform: (_, ret) => {
        delete ret._id;
      },
    },
  }
);
const OrderModel = models.order || model("order", OrderSchema);
export default OrderModel;
