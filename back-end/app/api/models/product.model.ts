import { model, models, Schema } from "mongoose";
const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    image: { type: Array, required: true },
    color: { type: String, required: true },
    brand: { type: String, required: true },
    gender: { type: String, enum: ["male", "female"], required: true },
    price: { type: Number, required: true },
    discount: { type: String, required: true },
    rest: { type: Number, required: true },
    size: { type: Number, required: true },
    status: { type: String, required: true },
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
const ProductModel = models.product || model("product", ProductSchema);
export default ProductModel;
