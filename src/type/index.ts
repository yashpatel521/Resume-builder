export interface ResponseType {
  success: boolean;
  message?: string;
  data?: any;
}

export interface UserDocument {
  _id: string;
  email: string;
  password: string;
  name: string;
  phone: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface NavItemType {
  title: string;
  href: string;
  icon: string;
}
