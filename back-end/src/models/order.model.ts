import { model, models, Schema } from "mongoose";
import { COLLECTIONS } from "../constant";
const orderItemsSChema = new Schema({
  product: { type: [Schema.Types.ObjectId], ref: COLLECTIONS.PRODUCT },
  count: { type: Number, required: true },
});
const OrderSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: COLLECTIONS.USER },
    status: {
      type: String,
      enum: ["Zahialsan", "Hurgegdsen", "Hurgelted garsan "],
      default: "Zahialsan",
    },

    location: { type: Schema.Types.ObjectId, ref: COLLECTIONS.LOCATION },
    orderItems: [orderItemsSChema],
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
