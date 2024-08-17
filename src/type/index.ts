export interface ResponseType {
  success: boolean;
  message: string;
  data: any;
}

export interface UserDocument {
  _id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  majorSkill: string;
  phoneNumber: string;
  address: string;
  postalCode: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface NavItemType {
  title: string;
  href: string;
  icon: string;
}

export interface ExperienceDocument {
  _id: string;
  company: string;
  position: string;
  startDate: Date;
  endDate: Date;
  location: string;
  responsibilities: string[];
  projects: string[];
  description: string;
  userId: string;
  formNumber: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface EducationDocument {
  _id: string;
  institution: string;
  degree: string;
  startDate: Date;
  endDate: Date;
  description: string;
  userId: string;
  formNumber: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProjectDocument {
  _id: string;
  title: string;
  description: string;
  technologies: string[];
  url: string;
  screenshot: string;
  startDate: Date;
  endDate: Date;
  userId: string;
  formNumber: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface SkillsDocument {
  _id: string;
  skills: Skill[];
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Skill {
  name: string;
  proficiency: string;
}

export interface userFromType {
  _id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  majorSkill: string;
  phoneNumber: string;
  address: string;
  postalCode: string;
}

export interface experienceFormType {
  _id: "";
  company: string;
  position: string;
  startDate: Date;
  endDate: Date;
  location: string;
  responsibilities: string[];
  projects: string[];
  userId: string;
  formNumber: number;
  description: string;
}

export interface educationFormType {
  _id: "";
  institution: string;
  degree: string;
  startDate: Date;
  endDate: Date;
  userId: string;
  formNumber: number;
  description: string;
}

export interface projectFormType {
  _id: string;
  title: string;
  description: string;
  technologies: string[];
  url: string;
  startDate: Date;
  endDate: Date;
  userId: string;
  formNumber: number;
}
