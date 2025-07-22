"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Users, Target, Eye } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { cn, fadeInUp, staggerChildren } from "@/lib/utils";

const teamMembers = [
  {
    name: "Alex Chen",
    role: "Founder & CEO",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  },
  {
    name: "Samantha Reed",
    role: "Head of AI Research",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704e",
  },
  {
    name: "David Lee",
    role: "Lead 3D Engineer",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704f",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <motion.section
        className="relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20 pt-32 pb-16"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <div className="container relative">
          <motion.div
            variants={fadeInUp}
            className="mx-auto max-w-4xl text-center"
          >
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              About <span className="gradient-text">Fashioneer.ai</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We are a team of innovators, fashion lovers, and tech enthusiasts dedicated to revolutionizing the way you experience style.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Mission, Vision, and Values */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div variants={fadeInUp}>
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-primary mr-4" />
                <h2 className="font-display text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-muted-foreground">
                To empower individuals to express their unique style with confidence, using cutting-edge AI technology to make fashion accessible, personal, and sustainable.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="flex items-center mb-4">
                <Eye className="h-8 w-8 text-primary mr-4" />
                <h2 className="font-display text-2xl font-bold">Our Vision</h2>
              </div>
              <p className="text-muted-foreground">
                To become the world's most intelligent and intuitive fashion companion, creating a future where personal styling is a seamless and inspiring part of everyday life.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-primary mr-4" />
                <h2 className="font-display text-2xl font-bold">Our Values</h2>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Innovation</li>
                <li>Personalization</li>
                <li>Sustainability</li>
                <li>Inclusivity</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-background to-secondary/10">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2
              variants={fadeInUp}
              className="font-display text-3xl md:text-5xl font-bold mb-4"
            >
              Meet the Team
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              The brilliant minds behind Fashioneer.ai, dedicated to crafting the future of fashion.
            </motion.p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={fadeInUp}
              >
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12 text-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Join Our Journey
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We are always looking for passionate individuals to join our team. If you are excited about the future of fashion and AI, we would love to hear from you.
            </p>
            <Button size="lg">
              View Open Positions
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
