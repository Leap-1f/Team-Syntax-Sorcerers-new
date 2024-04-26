import { model, models, Schema } from "mongoose";
import { COLLECTIONS } from "../constant";
const OrderSchema = new Schema(
  {
    userId: { type: [Schema.Types.ObjectId], ref: COLLECTIONS.USER },
    orderNumber: { type: Number, required: true },
    product: { type: [Schema.Types.ObjectId], ref: COLLECTIONS.PRODUCT },
    totalPrice: { type: Number, required: true },
    status: {
      type: String,
      enum: ["Hurgegdsen", "Hurgegdeegui", "HurgeltendGarsan"],
    },
    locationId: { type: [Schema.Types.ObjectId], ref: COLLECTIONS.LOCATION },
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
