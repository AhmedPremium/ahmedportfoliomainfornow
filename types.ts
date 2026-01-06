
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link: string;
  date: string;
  team: string[];
  longDescription?: string;
}

export interface ArchiveItem {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
  colSpan: string;
  rowSpan: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  icon?: string;
  skills: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
