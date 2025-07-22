"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import { cn, fadeInUp, staggerChildren } from "@/lib/utils";

const featuredArticles = [
  {
    title: "The Future of Fashion: How AI is Changing the Game",
    description: "Explore the ways artificial intelligence is revolutionizing the fashion industry, from design to personal styling.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80",
    date: "July 22, 2025",
    readingTime: "5 min read",
  },
  {
    title: "Virtual Try-On: The New Way to Shop",
    description: "Discover how 3D virtual try-on technology is changing the online shopping experience for the better.",
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80",
    date: "July 15, 2025",
    readingTime: "7 min read",
  },
  {
    title: "Sustainable Style: How AI Can Help",
    description: "Learn how AI can help you make more sustainable fashion choices and build a wardrobe that lasts.",
    image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80",
    date: "July 8, 2025",
    readingTime: "6 min read",
  },
];

export default function BlogPage() {
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
              The <span className="gradient-text">Fashioneer.ai</span> Blog
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Insights, trends, and stories from the forefront of fashion and technology.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Articles */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <motion.div
                key={index}
                className="bg-card border border-border rounded-2xl overflow-hidden"
                variants={fadeInUp}
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <span>{article.date}</span>
                    <span className="mx-2">•</span>
                    <span>{article.readingTime}</span>
                  </div>
                  <h2 className="font-semibold text-lg mb-2">{article.title}</h2>
                  <p className="text-muted-foreground text-sm mb-4">
                    {article.description}
                  </p>
                  <Button variant="link" className="p-0">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-background to-secondary/10">
        <div className="container">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12 text-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Stay in the Loop
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter to get the latest updates on new features, fashion trends, and exclusive offers.
            </p>
            <form className="max-w-md mx-auto flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
                required
              />
              <Button type="submit">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
