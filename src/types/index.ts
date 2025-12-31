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
  gpa: string;
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
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  description?: string;
}
