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
