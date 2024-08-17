import { connectDB } from "@/database/mongodb";
import User from "../models/User";
import { getExperiencesByUserId } from "./experience.service";
import { getEducationByUserId } from "./education.service";
import { getProjectsByUserId } from "./project.service";
import { getSkillsByUserId } from "./skills.service";

export async function getUserByEmail(email: string) {
  await connectDB();
  const user = await User.findOne({ email });
  return user;
}

export async function getUserById(id: string) {
  await connectDB();
  const user = await User.findById(id);
  return user;
}
export async function updateUserById(
  id: string,
  updatedUser: Partial<typeof User>
) {
  try {
    await connectDB();

    const updated = await User.findByIdAndUpdate(id, updatedUser, {
      new: true, // Return the updated document
      runValidators: true, // Ensure that the update respects the schema validation
    });

    if (!updated) {
      throw new Error("User not found or could not be updated");
    }

    return updated;
  } catch (error: any) {
    console.error("Failed to update user:", error.message);
    throw new Error(error.message || "Failed to update user");
  }
}

export async function getAllDataByUserId(id: string) {
  const userData = await getUserById(id);
  if (!userData) {
    throw new Error("User not found");
  }
  const experienceData = await getExperiencesByUserId(id);
  const educationData = await getEducationByUserId(id);
  const projectData = await getProjectsByUserId(id);
  const skillsData = await getSkillsByUserId(id);
  return {
    user: userData,
    experiences: experienceData,
    education: educationData,
    projects: projectData,
    skills: skillsData,
  };
}
