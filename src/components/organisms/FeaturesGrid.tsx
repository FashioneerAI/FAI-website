"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { 
  Brain, 
  Shirt, 
  Mic, 
  Users, 
  Sparkles, 
  Zap, 
  Eye, 
  Heart,
  TrendingUp,
  Palette,
  Camera,
  ShoppingBag
} from "lucide-react";
import { cn, fadeInUp, staggerChildren } from "@/lib/utils";

interface FeaturesGridProps {
  className?: string;
}

const features = [
  {
    icon: Brain,
    title: "AI Personal Stylist",
    description: "Get personalized outfit recommendations powered by advanced AI that learns your style preferences.",
    gradient: "from-blue-500 to-purple-500",
  },
  {
    icon: Shirt,
    title: "3D Virtual Try-On",
    description: "See how clothes look on your personalized 3D avatar with realistic fit and movement simulation.",
    gradient: "from-primary to-pink-500",
  },
  {
    icon: Mic,
    title: "Voice Fashion Stories",
    description: "Experience fashion through engaging voice-cloned narratives that bring your outfits to life.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Users,
    title: "Community Fashion Feed",
    description: "Discover trending styles, get inspired by community looks, and share your fashion journey.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Eye,
    title: "Style Analytics",
    description: "Get insights into your fashion choices with detailed analytics and style trend predictions.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Heart,
    title: "Wishlist & Favorites",
    description: "Save your favorite outfits and pieces, create wishlists, and track price changes.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: TrendingUp,
    title: "Trend Forecasting",
    description: "Stay ahead of fashion trends with AI-powered predictions and seasonal recommendations.",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Palette,
    title: "Color Coordination",
    description: "Perfect color matching and coordination suggestions based on color theory and personal preferences.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Camera,
    title: "Outfit Photo Analysis",
    description: "Upload photos of your existing clothes and get styling suggestions for your wardrobe.",
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    icon: ShoppingBag,
    title: "Smart Shopping",
    description: "Find the best deals from partner brands and get notified about sales on your favorite items.",
    gradient: "from-green-500 to-teal-500",
  },
  {
    icon: Sparkles,
    title: "Occasion Styling",
    description: "Get perfect outfit suggestions for any occasion - from casual to formal, work to weekend.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Instant Recommendations",
    description: "Get lightning-fast styling suggestions with our optimized AI engine and real-time processing.",
    gradient: "from-yellow-500 to-red-500",
  },
];

export function FeaturesGrid({ className }: FeaturesGridProps) {
  return (
    <section className={cn("py-20 bg-gradient-to-br from-background to-secondary/20", className)}>
      <div className="container">
        <motion.div
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-display text-3xl md:text-5xl font-bold mb-4"
          >
            Powerful Features
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Discover the comprehensive suite of AI-powered tools designed to revolutionize your fashion experience
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              className="group relative"
            >
              <div className="relative bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg h-full">
                {/* Icon */}
                <div className={cn(
                  "mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r",
                  feature.gradient
                )}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Experience All Features
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Ready to transform your fashion journey? Start your free trial today and discover the power of AI-driven style.
            </p>
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors shadow-brand">
              Start Free Trial
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
