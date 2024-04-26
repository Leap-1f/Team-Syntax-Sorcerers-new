// import connectDB from "../database/database";
import connectMongo from "../database/database";

export async function register() {
  await connectMongo();
}
