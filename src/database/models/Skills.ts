import { SkillsDocument } from "@/type";
import mongoose, { Schema, model } from "mongoose";

const SkillsSchema = new Schema<SkillsDocument>(
  {
    skills: [
      {
        name: { type: String, required: true },
        proficiency: { type: String, required: true },
        percentage: { type: Number, required: true },
      },
    ],

    userId: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Skills =
  mongoose.models?.Skills || model<SkillsDocument>("Skills", SkillsSchema);
export default Skills;
