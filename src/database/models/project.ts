import { ProjectDocument } from "@/type";
import mongoose, { Schema, model } from "mongoose";

const ProjectSchema = new Schema<ProjectDocument>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    technologies: { type: [String], required: true },
    url: { type: String, required: false, default: "" },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    userId: { type: String, required: true },
    formNumber: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Project =
  mongoose.models?.Project || model<ProjectDocument>("Project", ProjectSchema);
export default Project;
