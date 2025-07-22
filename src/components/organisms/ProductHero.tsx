"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Play, ArrowRight, Sparkles, Zap, Eye } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { Badge } from "@/components/atoms/Badge";
import { cn, fadeInUp, staggerChildren } from "@/lib/utils";

interface ProductHeroProps {
  className?: string;
}

export function ProductHero({ className }: ProductHeroProps) {
  return (
    <section className={cn("relative overflow-hidden bg-gradient-to-br from-background via-background to-powder-pink/20 pt-16", className)}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:60px_60px]" />
      <div className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-l from-primary/20 to-warning-gold/20 rounded-full blur-3xl" />
      
      <div className="container relative">
        <motion.div
          className="mx-auto max-w-6xl text-center pt-20 pb-16 md:pt-32 md:pb-24"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="mb-8">
            <Badge variant="gradient" size="lg" className="mb-4">
              <Sparkles className="mr-2 h-4 w-4" />
              Product Features - Revolutionary Fashion Technology
            </Badge>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={fadeInUp}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            Experience the Future of{" "}
            <span className="gradient-text">Fashion Technology</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Discover how our cutting-edge AI, 3D visualization, and voice technology 
            combine to create the most advanced fashion platform ever built.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button size="xl" className="group">
              Try Interactive Demo
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button variant="outline" size="xl" className="group">
              <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Watch Product Tour
            </Button>
          </motion.div>

          {/* Product Stats */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-border"
          >
            <div className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-blue-500/10 rounded-xl">
                <Zap className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="font-semibold text-lg mb-2">AI-Powered Analysis</h3>
              <p className="text-muted-foreground text-sm">
                Advanced machine learning algorithms analyze your style preferences and body type for perfect recommendations
              </p>
            </div>
            
            <div className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Realistic 3D Visualization</h3>
              <p className="text-muted-foreground text-sm">
                See how clothes truly fit and move on your personalized avatar with physics-based rendering
              </p>
            </div>
            
            <div className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-green-500/10 rounded-xl">
                <Sparkles className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Voice-Driven Stories</h3>
              <p className="text-muted-foreground text-sm">
                Immersive fashion narratives powered by voice cloning technology that brings your style to life
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}