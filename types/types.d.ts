export interface navLinkTypes {
  id: number;
  name: string;
  link: string;
}

export interface categoryTypes {
  id: number;
  heading: string;
  numbers: string;
  image: string;
  bgColor: string;
}

export interface memberTableDataTypes {
  id: number;
  name: string;
  role: string;
  grade?: string;
  availability?: string;
  Tag: string;
}

export interface permissionsTableDataTypes {
  id: number;
  name: string;
  permission: string;
  decision: string;
  Tag: string;
}

export interface discountTableDataTypes {
  id: number;
  name: string;
  discountPurpose: string;
  couponCode: string;
  percentage: string;
  decision: string;
}

export interface addSuperAdminTypes {
  email: string;
  password: string;
  name: string;
  role: string;
}

export interface registerTutorTypes {
  idNumber: string;
  firstName: string;
  lastName: string;
  streetAddress: string;
  streetAddressOptional?: string;
  pincode: string;
  city: string;
  country: string;
  canTeachDisabled?: string;
}

export interface addTutorTypes {
  name: string;
  email: string;
  password: string;
  cpassword: string;
  idNumber: string;
  address: string;
  forDisabled: boolean;
  profilePicture: string;
  about?: string;
  experience?: string;
  speciality?: string;
  education?: string;
  linkedInUrl?: string;
  twitterUrl?: string;
  instagramUrl?: string;
  verified?: Boolean;
}

export interface allUsersInterface {
  id: number;
  name: string | null;
  email: string | null;
  role: string | null;
  verified?: boolean | null;
  grade?: string | null;
  availability?: string | null;
}

export interface adminInterface {
  id: number;
  name: string | null;
  email: string | null;
  role: string | null;
  availability?: string | null;
  createdAt?: Date;
}

export interface categoriesInterface {
  id: number;
  name: string;
  type: number;
}

export interface addCoursesInterface {
  title: string;
  description: string;
  category: string;
  price: number;
  image: string;
  level: string;
  requirements: string;
  objectives: string;
}
export interface getCoursesInterface {
  id: number;
  title?: string;
  description?: string;
  category?: number;
  price?: number;
  tutor?: number;
  image?: string;
  createdAt?: Date;
  level?: string;
  requirements?: string;
  objectives?: string;
  isVerified?: boolean;
}

export interface getCourseModulesInterface {
  id: number;
  name: string | null;
  description: string | null;
  courseId: number;
  createdAt: Date;
  published: boolean;
}

export interface getModuleLessonsInterface {
  id: number;
  name: string | null;
  description: string | null;
  courseSectionsId: number;
  createdAt: Date;
  type: string;
}

export interface LessonDetailsInterface {
  lessonTitle: string;
  lessonDescription: string;
  lessonType: string;
  titleError: string;
  descriptionError: string;
  lessonFile: string;
}
