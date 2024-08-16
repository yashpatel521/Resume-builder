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
  phoneNumber: string;
  image: string;
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

export interface Education {
  degree: string;
  major: string;
  institution: string;
  graduationYear: string;
}

export interface ExperienceDocument {
  company: string;
  position: string;
  startDate: Date;
  endDate: Date;
  location: string;
  responsibilities: string[];
  projects: string[];
  userId: string;
  formNumber: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface EducationDocument {
  institution: string;
  degree: string;
  startDate: Date;
  endDate: Date;
  userId: string;
  formNumber: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  url: string;
  screenshot: string;
}

export interface SocialMedia {
  linkedIn: string;
  github: string;
}

export interface Certification {
  title: string;
  institution: string;
  date: string;
}

export interface Skill {
  name: string;
  proficiency: string;
}

export interface UserDataType {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  education: Education[];
  // experience: Experience[];
  projects: Project[];
  socialMedia: SocialMedia;
  hobbies: string[];
  interests: string[];
  languages: string[];
  certifications: Certification[];
  skills: Skill[];
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
}

export interface educationFormType {
  _id: "";
  institution: string;
  degree: string;
  startDate: Date;
  endDate: Date;
  userId: string;
  formNumber: number;
}
