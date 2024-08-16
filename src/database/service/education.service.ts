import { EducationDocument } from "@/type";
import { connectDB } from "../mongodb";
import Education from "../models/education";

export async function createEducation(education: EducationDocument) {
  await connectDB();
  const newEducation = new Education(education);
  return await newEducation.save();
}

export async function getEducationByUserId(id: string) {
  await connectDB();
  return await Education.find({ userId: id }).sort({ formNumber: 1 });
}

export async function updateEducationById(
  id: string,
  education: EducationDocument
) {
  await connectDB();
  return await Education.findByIdAndUpdate(id, education, { new: true });
}

export async function deleteEducationById(id: string) {
  await connectDB();
  return await Education.findByIdAndDelete(id);
}
