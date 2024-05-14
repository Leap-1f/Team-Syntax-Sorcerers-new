import { model, models, Schema } from "mongoose";

const BlogSchema = new Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
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
const BlogModel = models.blog || model("blog", BlogSchema);
export default BlogModel;
