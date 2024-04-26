import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const MONGO_URI =
  "mongodb+srv://mygmar090:vZSG6yTfO4eHR6y9@leap-test.q3ptkvy.mongodb.net/test?retryWrites=true&w=majority";
const cached: {
  connection?: typeof mongoose;
  promise?: Promise<typeof mongoose>;
} = {};
async function connectMongo() {
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
      // bufferCommands: false,
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
// const connectDB = async () => {
//   try {
//     await mongoose.connect(MONGO_URI, {
//       bufferCommands: false,
//     });
//     console.log("connected to db");
//   } catch (error) {
//     console.log("error:", error);
//   }
// };
// export default connectDB;
