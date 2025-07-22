# Fashioneer.ai - AI-Powered Fashion Platform

> **Pioneering the Future of Personal Style**

A comprehensive, professional company landing page for Fashioneer.ai, showcasing cutting-edge AI solutions for the fashion industry. Built with Next.js 14, React 18, and TypeScript.

## 🚀 Features

### **🎨 Brand Identity**
- **Digital Pink (#F15CFF)** as primary brand color
- **Bodoni Moda** display font for elegance
- **Inter** UI font for readability
- Consistent design system with reusable components

### **📱 Complete Page Structure**
- **Homepage**: Hero, How It Works, Features, Pricing, Social Proof
- **Product Page**: Detailed feature showcase with 3D visualization
- **Pricing Page**: Flexible pricing tiers with monthly/yearly toggle
- **Contact Page**: Professional contact form and information
- **Navigation**: Responsive navigation with smooth animations

### **🤖 AI Chat Widget**
- Interactive AI Fashion Stylist
- Real-time conversation interface
- Contextual fashion advice and recommendations
- Minimizable and closeable widget

### **🎯 Key Capabilities**
- **AI Personal Stylist**: Personalized outfit recommendations
- **3D Virtual Try-On**: Realistic avatar-based clothing visualization
- **Voice Fashion Stories**: Immersive fashion narratives
- **Smart Shopping**: Intelligent product discovery

## 🛠️ Technology Stack

### **Frontend**
- **Next.js 14** - React framework with App Router
- **React 18** - Modern React with hooks
- **TypeScript 5.5** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations and transitions

### **Components Architecture**
- **Atoms**: Button, Badge, Input
- **Molecules**: Navigation, Cards
- **Organisms**: Hero, Features, Chat Widget
- **Design System**: Centralized tokens and utilities

### **Styling & Design**
- **CSS Variables** for theme management
- **Responsive Design** (xs, sm, md, lg, xl, 2xl breakpoints)
- **Accessibility** compliant (WCAG AA)
- **Dark/Light Mode** support ready

## 🎯 Pages Overview

### **Homepage (`/`)**
- Hero section with compelling value proposition
- 3-step "How It Works" process
- Comprehensive features grid
- Social proof and testimonials
- Pricing overview

### **Product Page (`/product`)**
- Detailed feature explanations
- Interactive 3D visualization placeholder
- AI styling capabilities showcase
- Benefits and use cases

### **Pricing Page (`/pricing`)**
- Three tiers: Free, Creator ($29/mo), Studio ($99/mo)
- Monthly/yearly billing toggle
- Feature comparison
- Enterprise contact options

### **Contact Page (`/contact`)**
- Professional contact form
- Business information
- Multiple contact methods
- Form validation and success states

## 🚀 Getting Started

### **Prerequisites**
- Node.js 18+ 
- npm or yarn

### **Installation**
```bash
# Clone the repository
git clone https://github.com/fashioneer-ai/fashioneer-web.git

# Navigate to project directory
cd fashioneer-web

# Install dependencies
npm install

# Start development server
npm run dev
```

### **Available Scripts**
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🎨 Design System

### **Colors**
```css
--color-digital-pink: #F15CFF    /* Primary brand color */
--color-powder-pink: #F5D4E8     /* Secondary/accent */
--color-luxe-black: #000000      /* Text/contrast */
--color-platinum: #EDEDED        /* Light backgrounds */
--color-warning-gold: #FFDB4D    /* Interactive highlights */
```

### **Typography**
```css
--font-display: 'Bodoni Moda'    /* Headlines and display text */
--font-ui: 'Inter'               /* UI and body text */
```

### **Component Usage**
```tsx
import { Button, Badge, Input } from '@/components/atoms';
import { Navigation } from '@/components/molecules';
import { Hero, FeaturesGrid } from '@/components/organisms';

// Usage
<Button variant="gradient" size="lg">
  Get Started
</Button>
```

## 📱 Responsive Breakpoints

```css
xs: < 480px     /* Mobile portrait */
sm: ≥ 480px     /* Mobile landscape */
md: ≥ 768px     /* Tablet */
lg: ≥ 1024px    /* Desktop */
xl: ≥ 1280px    /* Large desktop */
2xl: ≥ 1536px   /* Extra large */
```

## 🎭 Animation System

### **Framer Motion Variants**
- `fadeInUp` - Slide up with fade
- `fadeInLeft` - Slide left with fade
- `fadeInRight` - Slide right with fade
- `staggerChildren` - Sequential animations
- `scaleOnHover` - Interactive hover effects

### **Usage Example**
```tsx
<motion.div
  variants={fadeInUp}
  initial="initial"
  animate="animate"
  whileHover="hover"
>
  Content
</motion.div>
```

## 🧩 Component Library

### **Atoms**
- `Button` - Primary CTA component with variants
- `Badge` - Status and notification indicators
- `Input` - Form input with validation states

### **Molecules**
- `Navigation` - Responsive navigation bar
- `TestimonialCard` - Customer testimonial display
- `PricingCard` - Pricing tier showcase

### **Organisms**
- `Hero` - Landing page hero section
- `FeaturesGrid` - Feature showcase grid
- `ChatWidget` - AI assistant interface
- `Footer` - Site footer with links

## 🎯 Key Features Implementation

### **AI Chat Widget**
- Contextual fashion conversations
- Mock AI responses for demonstration
- Persistent chat history
- Minimizable interface

### **3D Visualization**
- Placeholder for Three.js integration
- Avatar customization controls
- Outfit switching interface
- Color variation options

### **Form Handling**
- Contact form with validation
- Success/error states
- Responsive design
- Accessibility compliance

## 🔧 Configuration

### **Environment Variables**
```env
NEXT_PUBLIC_SITE_URL=https://fashioneer.ai
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### **Tailwind Configuration**
Custom theme extensions in `tailwind.config.js` with brand colors and typography.

## 📊 Performance Targets

- **LCP**: < 1.8s (Largest Contentful Paint)
- **FID**: < 100ms (First Input Delay)  
- **CLS**: < 0.1 (Cumulative Layout Shift)
- **Bundle Size**: < 250kb initial JavaScript

## 🌐 SEO Optimization

- **Meta Tags**: Comprehensive OpenGraph and Twitter cards
- **Structured Data**: JSON-LD for organization info
- **Sitemap**: Auto-generated sitemap
- **Robots.txt**: Search engine optimization

## 📧 Contact & Support

- **Email**: hello@fashioneer.ai
- **Website**: https://fashioneer.ai
- **Documentation**: [docs.fashioneer.ai](https://docs.fashioneer.ai)

## 📄 License

Copyright © 2024 Fashioneer.ai. All rights reserved.

---

**Built with ❤️ by the Fashioneer.ai team**

*Pioneering the future of personal style through AI-powered fashion technology.*
