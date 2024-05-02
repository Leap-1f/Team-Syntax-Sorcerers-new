import { model, models, Schema } from "mongoose";

const LocationSchema = new Schema({
  district: { type: String, required: true },
  khoroo: { type: String, required: true },
  apartment: { type: String, required: true },
});

const LocationModel = models.location || model("location", LocationSchema);

export default LocationModel;
