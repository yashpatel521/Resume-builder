import { connectDB } from "@/database/mongodb";
import User from "../models/User";

export async function getUserByEmail(email: string) {
  await connectDB();
  const user = await User.findOne({ email });
  return user;
}

export async function getUserById(id: string) {
  await connectDB();
  const user = await User.findById(id);
  return user;
}
export async function updateUserById(
  id: string,
  updatedUser: Partial<typeof User>
) {
  try {
    await connectDB();

    const updated = await User.findByIdAndUpdate(id, updatedUser, {
      new: true, // Return the updated document
      runValidators: true, // Ensure that the update respects the schema validation
    });

    if (!updated) {
      throw new Error("User not found or could not be updated");
    }

    return updated;
  } catch (error: any) {
    console.error("Failed to update user:", error.message);
    throw new Error(error.message || "Failed to update user");
  }
}
