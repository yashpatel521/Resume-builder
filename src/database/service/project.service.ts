import { ProjectDocument } from "@/type";
import { connectDB } from "../mongodb";
import Project from "../models/project";

export async function createProject(project: ProjectDocument) {
  await connectDB();
  return await Project.create(project);
}

export async function getProjectsByUserId(userId: string) {
  await connectDB();
  return await Project.find({ userId }).sort({ formNumber: 1 });
}

export async function getProjectById(id: string) {
  await connectDB();
  return await Project.findById(id);
}

export async function updateProjectById(
  id: string,
  updatedProject: ProjectDocument
) {
  await connectDB();
  return await Project.findByIdAndUpdate(id, updatedProject, { new: true });
}

export async function deleteProjectById(id: string) {
  await connectDB();
  return await Project.findByIdAndDelete(id);
}
