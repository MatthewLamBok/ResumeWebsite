export interface Project {
  name: string;
  tech: string;
  responsibilities: string[];
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  companyUrl?: string;
  logo?: string;
  projects?: Project[];
  responsibilities?: string[];
}

export interface Education {
  id: number;
  degree: string;
  school: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  thesis?: string;
  additionalInfo?: string[];
}

export interface ProjectItem {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  date: string;
  image?: string;
  github?: string;
  live?: string;
  highlights?: string[];
  images?: string[];
  pdfs?: { name: string; url: string }[];
  notes?: string;
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  issuerURL?: string;
  date: string;
  description?: string;
}

export interface GalleryCollection {
  id: number;
  title: string;
  description: string;
  coverImage: string;
  images: string[];
  date?: string;
}
