import { SkillsDocument } from "@/type";
import { connectDB } from "../mongodb";
import Skills from "../models/Skills";

export async function createSkills(skills: SkillsDocument) {
  await connectDB();
  return await Skills.create(skills);
}

export async function getSkillsByUserId(userId: string) {
  await connectDB();
  return await Skills.findOne({ userId });
}

export async function updateSkillsById(
  id: string,
  updatedSkills: SkillsDocument
) {
  await connectDB();
  return await Skills.findByIdAndUpdate(id, updatedSkills, { new: true });
}
