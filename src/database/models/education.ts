import { EducationDocument } from "@/type";
import mongoose, { Schema, model } from "mongoose";

const EducationSchema = new Schema<EducationDocument>(
  {
    institution: { type: String, required: true },
    degree: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    userId: { type: String, required: true },
    formNumber: { type: Number, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Education =
  mongoose.models?.Education ||
  model<EducationDocument>("Education", EducationSchema);
export default Education;
