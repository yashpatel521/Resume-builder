import { UserDocument } from "@/type";
import mongoose, { Schema, model } from "mongoose";

const UserSchema = new Schema<UserDocument>(
  {
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Email is invalid",
      ],
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: [true, "First Name is required"],
    },
    lastName: {
      type: String,
      required: [true, "Last Name is required"],
    },
    majorSkill: {
      type: String,
      required: false,
      default: "",
    },
    phoneNumber: {
      type: String,
      required: false,
      default: "",
    },
    address: {
      type: String,
      required: false,
      default: "",
    },
    postalCode: {
      type: String,
      required: false,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models?.User || model<UserDocument>("User", UserSchema);
export default User;
