import { connectDB } from "@/database/mongodb";
import User from "../models/User";

export async function getUserByEmail(email: string) {
  await connectDB();
  const user = await User.findOne({ email });
  return user;
}
