"use server";
import { connectDB } from "@/database/mongodb";
import User from "@/database/models/User";
import bcrypt from "bcryptjs";

export const register = async (formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password") as string;
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  if (!email || !password || !firstName || !lastName) {
    return {
      success: false,
      message: "Please provide both email and password and Name !",
    };
  }

  try {
    await connectDB();
    const userFound = await User.findOne({ email });
    if (userFound) {
      return {
        success: false,
        message: "Email already exists!",
      };
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    await user.save();
    return {
      success: true,
      message: "User registered successfully!",
    };
  } catch (e) {
    return {
      success: false,
      message: "An error occurred while registering user!",
    };
  }
};
