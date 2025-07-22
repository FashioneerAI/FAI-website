"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { 
  Brain, 
  Shirt, 
  Mic, 
  Camera, 
  Palette, 
  TrendingUp,
  Zap,
  Users,
  ShoppingBag,
  Heart,
  Eye,
  Sparkles,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { Badge } from "@/components/atoms/Badge";
import { cn, fadeInUp, staggerChildren } from "@/lib/utils";

interface ProductFeaturesProps {
  className?: string;
}

const mainFeatures = [
  {
    id: "ai-stylist",
    icon: Brain,
    title: "AI Personal Stylist",
    description: "Get personalized outfit recommendations powered by advanced AI that learns your style preferences, body type, and lifestyle needs.",
    benefits: [
      "Learns from your style preferences",
      "Adapts to your body type and measurements",
      "Considers occasion, weather, and season",
      "Improves recommendations over time"
    ],
    gradient: "from-blue-500 to-purple-500",
    comingSoon: false
  },
  {
    id: "3d-tryon",
    icon: Shirt,
    title: "3D Virtual Try-On",
    description: "See how clothes look on your personalized 3D avatar with realistic fit simulation and movement dynamics.",
    benefits: [
      "Photorealistic 3D avatar creation",
      "Accurate fit simulation",
      "Multiple angle viewing",
      "Physics-based fabric movement"
    ],
    gradient: "from-primary to-pink-500",
    comingSoon: false
  },
  {
    id: "voice-stories",
    icon: Mic,
    title: "Voice Fashion Stories",
    description: "Experience fashion through engaging voice-cloned narratives that bring your outfits to life with immersive storytelling.",
    benefits: [
      "Personalized voice cloning",
      "Interactive fashion narratives",
      "Outfit context and history",
      "Social sharing capabilities"
    ],
    gradient: "from-green-500 to-emerald-500",
    comingSoon: false
  }
];

const additionalFeatures = [
  {
    icon: Camera,
    title: "Smart Photo Analysis",
    description: "Upload photos of your existing wardrobe and get instant styling suggestions."
  },
  {
    icon: Palette,
    title: "Color Coordination",
    description: "AI-powered color matching based on color theory and personal preferences."
  },
  {
    icon: TrendingUp,
    title: "Trend Forecasting",
    description: "Stay ahead with AI-powered trend predictions and seasonal recommendations."
  },
  {
    icon: Users,
    title: "Community Features",
    description: "Connect with fashion enthusiasts and share your style journey."
  },
  {
    icon: ShoppingBag,
    title: "Smart Shopping",
    description: "Find the best deals and get notified about sales on your favorite items."
  },
  {
    icon: Heart,
    title: "Wishlist Management",
    description: "Save favorites, create wishlists, and track price changes."
  }
];

export function ProductFeatures({ className }: ProductFeaturesProps) {
  return (
    <section className={cn("py-20 bg-background", className)}>
      <div className="container">
        {/* Section Header */}
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
            Core Features
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Explore the revolutionary features that make Fashioneer.ai the most advanced fashion platform
          </motion.p>
        </motion.div>

        {/* Main Features */}
        <motion.div
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-20"
        >
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              variants={fadeInUp}
              className={cn(
                "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                index % 2 === 1 && "lg:grid-flow-col-dense"
              )}
            >
              {/* Content */}
              <div className={cn(index % 2 === 1 && "lg:col-start-2")}>
                <div className={cn(
                  "mb-4 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r",
                  feature.gradient
                )}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Benefits */}
                <div className="space-y-3 mb-6">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <Button className="group">
                  Try This Feature
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              
              {/* Visual Placeholder */}
              <div className={cn(
                "relative bg-gradient-to-br from-muted to-muted/50 rounded-3xl p-8 min-h-[400px] flex items-center justify-center",
                index % 2 === 1 && "lg:col-start-1"
              )}>
                <div className="text-center">
                  <feature.icon className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
                  <p className="text-muted-foreground text-sm">Interactive Demo</p>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-primary/20 rounded-full" />
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-accent/20 rounded-full" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Features Grid */}
        <motion.div
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-24"
        >
          <motion.h3
            variants={fadeInUp}
            className="font-display text-2xl md:text-3xl font-bold text-center mb-12"
          >
            Additional Features
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-muted rounded-xl group-hover:bg-primary/10 transition-colors">
                  <feature.icon className="h-6 w-6 text-foreground group-hover:text-primary transition-colors" />
                </div>
                
                <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h4>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Style?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Experience all these powerful features in action. Start your free trial today and discover the future of fashion technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                Schedule Demo
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}