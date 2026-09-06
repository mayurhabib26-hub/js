export type PageView = 
  | 'home' 
  | 'about' 
  | 'services' 
  | 'projects' 
  | 'process' 
  | 'contact';

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  location: string;
  province: string;
  year: string;
  category: 'Residential' | 'Commercial' | 'Kitchen Design' | 'Interior Renovation';
  area: string;
  heroImage: string;
  gallery: string[];
  overview: string;
  challenge: string;
  approach: string;
  materialsUsed: string[];
  beforeImage?: string;
  afterImage?: string;
  clientReview?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface Service {
  id: string;
  number: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  deliverables: string[];
  timeline: string;
  idealFor: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  client: string;
  role: string;
  location: string;
  projectType: string;
  year: string;
  image: string;
}

export interface MaterialItem {
  id: string;
  name: string;
  category: string;
  origin: string;
  texture: string;
  description: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Living Rooms' | 'Kitchens' | 'Bedrooms' | 'Bathrooms' | 'Offices' | 'Commercial' | 'Details';
  location: string;
  image: string;
  aspect: 'portrait' | 'landscape' | 'square';
}
