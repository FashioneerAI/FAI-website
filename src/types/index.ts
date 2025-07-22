// Global Types
export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
    linkedin: string;
    instagram: string;
  };
}

// Navigation Types
export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface NavConfig {
  mainNav: NavItem[];
  sidebarNav: NavItem[];
}

// Feature Types
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  image?: string;
  href?: string;
}

// Pricing Types
export interface PricingTier {
  id: string;
  name: string;
  description: string;
  price: {
    monthly: number;
    yearly: number;
  };
  features: string[];
  popular?: boolean;
  cta: string;
  href: string;
}

// Testimonial Types
export interface Testimonial {
  id: string;
  content: string;
  author: {
    name: string;
    role: string;
    company: string;
    avatar: string;
  };
  rating: number;
}

// Blog Types
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  image: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  category: string;
  tags: string[];
  publishedAt: string;
  readingTime: number;
  featured?: boolean;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string;
}

// Contact Types
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  useCase: string;
  message: string;
}

// Team Types
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

// Integration Types
export interface Integration {
  id: string;
  name: string;
  description: string;
  logo: string;
  category: string;
  status: "available" | "coming-soon" | "beta";
}

// Fashion Types
export interface FashionItem {
  id: string;
  name: string;
  category: string;
  brand: string;
  price: number;
  image: string;
  colors: string[];
  sizes: string[];
  description: string;
  tags: string[];
}

export interface Outfit {
  id: string;
  name: string;
  items: FashionItem[];
  occasion: string;
  season: string;
  style: string;
  image: string;
  createdAt: string;
}

// AI Types
export interface AIStyleRecommendation {
  id: string;
  outfits: Outfit[];
  reasoning: string;
  confidence: number;
  occasion: string;
  weatherConditions?: {
    temperature: number;
    conditions: string;
  };
}

export interface ChatMessage {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: string;
  type?: "text" | "image" | "outfit-recommendation";
  metadata?: Record<string, unknown>;
}

export interface ChatSession {
  id: string;
  messages: ChatMessage[];
  userId?: string;
  createdAt: string;
  updatedAt: string;
}

// 3D Types
export interface Model3D {
  id: string;
  name: string;
  url: string;
  thumbnail: string;
  category: string;
  size: number;
  format: "gltf" | "glb" | "obj";
}

export interface Avatar3D {
  id: string;
  name: string;
  model: Model3D;
  customizations: {
    skinTone: string;
    bodyType: string;
    height: number;
    measurements: {
      chest: number;
      waist: number;
      hips: number;
    };
  };
}

// API Response Types
export interface APIResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> extends APIResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Form Types
export interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "password" | "textarea" | "select" | "checkbox" | "radio";
  placeholder?: string;
  required?: boolean;
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
    message?: string;
  };
  options?: { label: string; value: string }[];
}

// Component Props Types
export interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export type { MotionProps } from "framer-motion";

// Error Types
export interface ErrorInfo {
  message: string;
  code?: string;
  statusCode?: number;
  timestamp: string;
}

// Loading States
export type LoadingState = "idle" | "loading" | "success" | "error";

// Theme Types
export type Theme = "light" | "dark" | "system";

// Device Types
export type DeviceType = "mobile" | "tablet" | "desktop";
export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
