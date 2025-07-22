"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Badge } from "@/components/atoms/Badge";
import { cn, fadeInUp, staggerChildren } from "@/lib/utils";

interface ContactHeroProps {
  className?: string;
}

export function ContactHero({ className }: ContactHeroProps) {
  return (
    <section className={cn("relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20 pt-16", className)}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:60px_60px]" />
      <div className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-l from-primary/20 to-accent/20 rounded-full blur-3xl" />
      
      <div className="container relative">
        <motion.div
          className="mx-auto max-w-4xl text-center pt-20 pb-16 md:pt-32 md:pb-24"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="mb-8">
            <Badge variant="gradient" size="lg" className="mb-4">
              <Mail className="mr-2 h-4 w-4" />
              Get in Touch - We're Here to Help
            </Badge>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={fadeInUp}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            Let's Talk About Your{" "}
            <span className="gradient-text">Fashion Future</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Whether you're interested in our AI styling platform, need enterprise solutions, 
            or want to explore partnership opportunities, we'd love to hear from you.
          </motion.p>

          {/* Contact Information */}
          <motion.div
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Email Us</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Get in touch via email
              </p>
              <a 
                href="mailto:hello@fashioneer.ai" 
                className="text-primary hover:text-primary/80 transition-colors font-medium"
              >
                hello@fashioneer.ai
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Call Us</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Speak with our team
              </p>
              <a 
                href="tel:+15551234567" 
                className="text-primary hover:text-primary/80 transition-colors font-medium"
              >
                +1 (555) 123-4567
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Our headquarters
              </p>
              <address className="text-primary not-italic">
                San Francisco, CA<br />
                United States
              </address>
            </motion.div>
          </motion.div>

          {/* Business Hours */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 bg-card border border-border rounded-2xl p-6 max-w-md mx-auto"
          >
            <div className="flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-primary mr-2" />
              <h3 className="font-semibold text-lg">Business Hours</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Monday - Friday</span>
                <span>9:00 AM - 6:00 PM PST</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Saturday</span>
                <span>10:00 AM - 4:00 PM PST</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
