import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const MONGODB_URI = process.env.NEXT_PUBLIC_MONGODB_URI;
const cached: {
  connection?: typeof mongoose;
  promise?: Promise<typeof mongoose>;
} = {};
async function connectMongo() {
  if (!MONGODB_URI) {
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
    cached.promise = mongoose.connect(MONGODB_URI, opts);
  }
  try {
    cached.connection = await cached.promise;
    console.log("Connected to MongoDB");
  } catch (e) {
    cached.promise = undefined;
    console.error("Error connecting to MongoDB:", e);
    throw e;
  }
  return cached.connection;
}
export default connectMongo;
