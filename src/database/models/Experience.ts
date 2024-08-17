import { ExperienceDocument } from "@/type";
import mongoose, { Schema, model } from "mongoose";

const ExperienceSchema = new Schema<ExperienceDocument>(
  {
    company: { type: String, required: true },
    position: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    location: { type: String, required: true },
    responsibilities: { type: [String] },
    description: { type: String, required: true },
    projects: { type: [String] },
    userId: { type: String, required: true },
    formNumber: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Experience =
  mongoose.models?.Experience ||
  model<ExperienceDocument>("Experience", ExperienceSchema);
export default Experience;
