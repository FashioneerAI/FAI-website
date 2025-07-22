"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Play, ArrowRight, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { Badge } from "@/components/atoms/Badge";
import { cn, fadeInUp, staggerChildren } from "@/lib/utils";
import { socialProof } from "@/lib/config";

interface HeroProps {
  className?: string;
}

export function Hero({ className }: HeroProps) {
  const [videoOpen, setVideoOpen] = React.useState(false);

  return (
    <section className={cn("relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20", className)}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:60px_60px]" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl" />
      
      <div className="container relative">
        <motion.div
          className="mx-auto max-w-4xl text-center pt-20 pb-16 md:pt-32 md:pb-24"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          {/* Announcement Badge */}
          <motion.div variants={fadeInUp} className="mb-8">
            <Badge variant="gradient" size="lg" className="mb-4">
              <Sparkles className="mr-2 h-4 w-4" />
              Now in Beta - Join the Fashion Revolution
            </Badge>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={fadeInUp}
            className="font-display text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-6"
          >
            Pioneering the{" "}
            <span className="gradient-text">Future</span>
            <br />
            of Personal Style
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0"
          >
            Empower your style with AI-powered fashion assistance, 3D virtual try-on, 
            and voice-cloned storytelling. Discover, preview, and perfect outfits like never before.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 px-4 sm:px-0"
          >
            <Button size="lg" className="group w-full sm:w-auto">
              Get Early Access
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => setVideoOpen(true)}
              className="group w-full sm:w-auto"
            >
              <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border"
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground">
                {socialProof.userCount}
              </div>
              <div className="text-sm text-muted-foreground">Fashion Enthusiasts</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground">
                {socialProof.outfitsGenerated}
              </div>
              <div className="text-sm text-muted-foreground">Outfits Generated</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground">
                {socialProof.brandPartners}
              </div>
              <div className="text-sm text-muted-foreground">Brand Partners</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground flex items-center justify-center">
                {socialProof.averageRating}
                <span className="text-accent ml-1">★</span>
              </div>
              <div className="text-sm text-muted-foreground">User Rating</div>
            </div>
          </motion.div>

          {/* Hero Features */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">AI-Powered Styling</h3>
              <p className="text-muted-foreground text-sm">
                Get personalized outfit recommendations powered by advanced AI
              </p>
            </div>
            
            <div className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">3D Virtual Try-On</h3>
              <p className="text-muted-foreground text-sm">
                See how clothes look on your personalized 3D avatar
              </p>
            </div>
            
            <div className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl">
                <Play className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Voice Fashion Stories</h3>
              <p className="text-muted-foreground text-sm">
                Experience fashion through engaging voice-cloned narratives
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Video Modal */}
      {videoOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setVideoOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative w-full max-w-4xl mx-4 aspect-video bg-black rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="flex items-center justify-center h-full bg-gradient-to-br from-primary/20 to-accent/20">
              <div className="text-center text-white">
                <Play className="h-16 w-16 mx-auto mb-4 opacity-80" />
                <p className="text-lg">Demo video coming soon!</p>
                <p className="text-sm opacity-70">Experience the future of fashion technology</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}