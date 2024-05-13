import mongoose from "mongoose";
import "../models/location.model";
import "../models/order.model";
import "../models/product.model";
import "../models/user.model";
const MONGO_URI =
  "mongodb+srv://mygmar090:vZSG6yTfO4eHR6y9@leap-test.q3ptkvy.mongodb.net/test?retryWrites=true&w=majority";

const cached: {
  connection?: typeof mongoose;
  promise?: Promise<typeof mongoose>;
} = {};

async function connectMongo() {
  console.log("connect to mongo db");
  if (!MONGO_URI) {
    throw new Error(
      "Please define the MONGO_URI environment variable inside .env.local"
    );
  }
  if (cached.connection) {
    return cached.connection;
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
    cached.promise = mongoose.connect(MONGO_URI, opts);
  }
  try {
    cached.connection = await cached.promise;
  } catch (e) {
    cached.promise = undefined;
    throw e;
  }
  return cached.connection;
}
export default connectMongo;
