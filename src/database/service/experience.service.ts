import { ExperienceDocument } from "@/type";
import { connectDB } from "../mongodb";
import Experience from "../models/Experience";

export async function createExperience(experience: ExperienceDocument) {
  // Implement database connection and insert experience
  await connectDB();
  return await Experience.create(experience);
}

export async function getExperiencesByUserId(userId: string) {
  await connectDB();
  return await Experience.find({ userId }).sort({ formNumber: 1 });
}

export async function deleteExperienceById(id: string) {
  await connectDB();
  return await Experience.findByIdAndDelete(id);
}

export async function updateExperienceById(
  id: string,
  experience: Partial<ExperienceDocument>
) {
  await connectDB();
  return await Experience.findByIdAndUpdate(id, experience, { new: true });
}
