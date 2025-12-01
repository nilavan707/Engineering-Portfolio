
export enum ExperienceType {
  ACADEMIC = 'ACADEMIC',
  CAREER = 'CAREER',
  RESEARCH = 'RESEARCH',
  LEADERSHIP = 'LEADERSHIP',
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  type: ExperienceType;
  technologies?: string[];
  bullets?: string[];
  resumeTags?: ('thermal' | 'ml')[];
  excludeFromAbout?: boolean;
}

export interface CategorizedSkills {
  languages: string[];
  software: string[];
  hardware: string[];
}

export type ProjectCategory = 'UW' | 'Blue Origin' | 'UMD' | 'USDA' | 'Personal' | 'Other';

export interface ProjectItem {
  id: string;
  title: string;
  subheader: string;
  description?: string;
  technologies: string[];
  category: ProjectCategory;
  tags: string[];
  link?: string;
  github?: string;
}

export interface PublicationItem {
  id: string;
  title: string;
  venue?: string;
  status: string;
  description: string;
  link?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  iconName: string; 
}