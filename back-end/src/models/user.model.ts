import { model, models, Schema } from "mongoose";
import { COLLECTIONS } from "../constant";
const UserShema = new Schema(
  {
    name: { type: String, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    orders: { type: [Schema.Types.ObjectId], ref: COLLECTIONS.ORDER },
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
const UserModel = models.user || model("user", UserShema);
export default UserModel;
