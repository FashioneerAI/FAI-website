"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Shirt, Share2, ArrowRight } from "lucide-react";
import { cn, fadeInUp, staggerChildren } from "@/lib/utils";

interface HowItWorksProps {
  className?: string;
}

const steps = [
  {
    id: 1,
    icon: MessageSquare,
    title: "Chat with AI Stylist",
    description: "Tell our AI about your style preferences, occasion, and body type. Get personalized recommendations in seconds.",
    color: "from-blue-500 to-purple-500",
  },
  {
    id: 2,
    icon: Shirt,
    title: "Virtual Try-On",
    description: "See how outfits look on your personalized 3D avatar. Adjust fit, color, and style with realistic visualization.",
    color: "from-primary to-pink-500",
  },
  {
    id: 3,
    icon: Share2,
    title: "Share & Purchase",
    description: "Share your looks with friends, get feedback, and purchase directly from our partner brands with confidence.",
    color: "from-green-500 to-emerald-500",
  },
];

export function HowItWorks({ className }: HowItWorksProps) {
  return (
    <section className={cn("py-20 bg-background", className)}>
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
            How It Works
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Three simple steps to transform your fashion experience with AI-powered technology
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-primary to-green-500 -translate-y-1/2" />
          
          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                variants={fadeInUp}
                className="relative"
              >
                {/* Step Card */}
                <div className="group relative bg-card border border-border rounded-3xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    {step.id}
                  </div>
                  
                  {/* Icon */}
                  <div className={cn(
                    "mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r",
                    step.color
                  )}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Arrow (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 -translate-y-1/2 text-muted-foreground">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Interactive Demo Section */}
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
              Join thousands of fashion enthusiasts who are already using Fashioneer.ai to discover their perfect style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors">
                Start Your Journey
              </button>
              <button className="px-8 py-3 border border-border rounded-xl font-semibold hover:bg-accent transition-colors">
                Watch Live Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}