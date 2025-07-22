import { SiteConfig, NavConfig, PricingTier } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Fashioneer.ai",
  description: "AI-powered fashion assistant platform with 3D try-on, virtual styling, and voice-cloned fashion storytelling. Discover, preview, and perfect your outfits with cutting-edge technology.",
  url: "https://fashioneer.ai",
  ogImage: "https://fashioneer.ai/og-image.jpg",
  links: {
    twitter: "https://twitter.com/fashioneer_ai",
    github: "https://github.com/fashioneer-ai",
    linkedin: "https://linkedin.com/company/fashioneer-ai",
    instagram: "https://instagram.com/fashioneer.ai",
  },
};

export const navConfig: NavConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Product",
      href: "/product",
    },
    {
      title: "Pricing",
      href: "/pricing",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  sidebarNav: [
    {
      title: "Features",
      href: "/product#features",
    },
    {
      title: "3D Try-On",
      href: "/product#3d-tryon",
    },
    {
      title: "AI Stylist",
      href: "/product#ai-stylist",
    },
    {
      title: "Voice Stories",
      href: "/product#voice-stories",
    },
  ],
};

export const pricingTiers: PricingTier[] = [
  {
    id: "free",
    name: "Free",
    description: "Perfect for individuals exploring AI fashion",
    price: {
      monthly: 0,
      yearly: 0,
    },
    features: [
      "Basic AI styling suggestions",
      "3 virtual try-ons per month",
      "Access to community outfits",
      "Mobile app access",
      "Basic avatar customization",
    ],
    cta: "Get Started Free",
    href: "/signup?plan=free",
  },
  {
    id: "creator",
    name: "Creator",
    description: "For fashion enthusiasts and content creators",
    price: {
      monthly: 29,
      yearly: 290,
    },
    features: [
      "Unlimited AI styling sessions",
      "50 virtual try-ons per month",
      "Advanced avatar customization",
      "Voice-cloned fashion stories",
      "Social sharing features",
      "Priority customer support",
      "Analytics dashboard",
      "Brand collaboration tools",
    ],
    popular: true,
    cta: "Start Creator Plan",
    href: "/signup?plan=creator",
  },
  {
    id: "studio",
    name: "Studio",
    description: "For fashion brands and professional stylists",
    price: {
      monthly: 99,
      yearly: 990,
    },
    features: [
      "Everything in Creator",
      "Unlimited virtual try-ons",
      "White-label solutions",
      "API access",
      "Custom avatar creation",
      "Advanced analytics",
      "Dedicated account manager",
      "Custom integrations",
      "Priority feature requests",
    ],
    cta: "Contact Sales",
    href: "/contact?plan=studio",
  },
];

export const features = [
  {
    id: "ai-stylist",
    title: "AI Personal Stylist",
    description: "Get personalized outfit recommendations powered by advanced AI that understands your style, body type, and preferences.",
    icon: "Brain",
    image: "/images/features/ai-stylist.jpg",
    href: "/product#ai-stylist",
  },
  {
    id: "3d-tryon",
    title: "3D Virtual Try-On",
    description: "See how clothes look on your personalized 3D avatar before you buy. Revolutionary technology that shows fit and style.",
    icon: "Shirt",
    image: "/images/features/3d-tryon.jpg",
    href: "/product#3d-tryon",
  },
  {
    id: "voice-stories",
    title: "Voice Fashion Stories",
    description: "Experience fashion through voice-cloned storytelling that brings your outfits to life with engaging narratives.",
    icon: "Mic",
    image: "/images/features/voice-stories.jpg",
    href: "/product#voice-stories",
  },
  {
    id: "fashion-feeds",
    title: "Smart Fashion Feeds",
    description: "Curated fashion content tailored to your taste, featuring trending styles, brand collaborations, and community looks.",
    icon: "Feed",
    image: "/images/features/fashion-feeds.jpg",
    href: "/product#fashion-feeds",
  },
];

export const testimonials = [
  {
    id: "sarah-chen",
    content: "Fashioneer.ai completely transformed how I shop for clothes. The 3D try-on feature saved me from so many bad purchases, and the AI stylist actually understands my personal style better than I do!",
    author: {
      name: "Sarah Chen",
      role: "Fashion Blogger",
      company: "Style Collective",
      avatar: "/images/testimonials/sarah-chen.jpg",
    },
    rating: 5,
  },
  {
    id: "marcus-rodriguez",
    content: "As a busy professional, I don't have time to think about outfits. The AI stylist creates perfect looks for my meetings, dates, and casual days. It's like having a personal stylist in my pocket.",
    author: {
      name: "Marcus Rodriguez",
      role: "Marketing Director",
      company: "TechFlow Inc",
      avatar: "/images/testimonials/marcus-rodriguez.jpg",
    },
    rating: 5,
  },
  {
    id: "emily-watson",
    content: "The voice fashion stories feature is absolutely genius! It makes getting dressed feel like an experience rather than a chore. My kids love hearing the stories about mommy's outfits.",
    author: {
      name: "Emily Watson",
      role: "Creative Director",
      company: "Design Studio",
      avatar: "/images/testimonials/emily-watson.jpg",
    },
    rating: 5,
  },
];

export const brandPartners = [
  { name: "Nike", logo: "/images/brands/nike.svg" },
  { name: "Adidas", logo: "/images/brands/adidas.svg" },
  { name: "Zara", logo: "/images/brands/zara.svg" },
  { name: "H&M", logo: "/images/brands/hm.svg" },
  { name: "Uniqlo", logo: "/images/brands/uniqlo.svg" },
  { name: "ASOS", logo: "/images/brands/asos.svg" },
];

export const socialProof = {
  userCount: "50,000+",
  outfitsGenerated: "2M+",
  brandPartners: "100+",
  averageRating: 4.8,
  reviewCount: "12,000+"
};

export const companyInfo = {
  founded: "2023",
  headquarters: "San Francisco, CA",
  employees: "25-50",
  funding: "Series A",
  mission: "Empower anyone to discover, preview, and perfect outfits through AI styling, 3D try-on, and voice-cloned fashion storytelling.",
  vision: "To become the world's most trusted AI fashion platform, making personalized style accessible to everyone.",
  values: [
    "Innovation in Fashion Technology",
    "Inclusive and Accessible Design",
    "Sustainable Fashion Choices",
    "User Privacy and Security",
    "Community-Driven Development",
  ],
};