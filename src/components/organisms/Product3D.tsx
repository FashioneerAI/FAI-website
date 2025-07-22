"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { 
  RotateCcw, 
  ZoomIn, 
  ZoomOut, 
  Play, 
  Pause,
  Volume2,
  VolumeX,
  Settings,
  Eye,
  Shirt,
  Palette
} from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { Badge } from "@/components/atoms/Badge";
import { cn, fadeInUp, staggerChildren } from "@/lib/utils";

interface Product3DProps {
  className?: string;
}

export function Product3D({ className }: Product3DProps) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(false);
  const [selectedOutfit, setSelectedOutfit] = React.useState(0);

  const outfits = [
    { id: 0, name: "Casual Chic", color: "Blue Denim", category: "Casual" },
    { id: 1, name: "Business Professional", color: "Navy Blue", category: "Formal" },
    { id: 2, name: "Evening Elegance", color: "Black", category: "Evening" },
    { id: 3, name: "Summer Vibes", color: "Floral Print", category: "Summer" }
  ];

  return (
    <section className={cn("py-20 bg-gradient-to-br from-background to-secondary/20", className)}>
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
            Interactive 3D Experience
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Experience our revolutionary 3D try-on technology that lets you see exactly how clothes will look and fit
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 3D Viewer */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="relative bg-gradient-to-br from-muted/50 to-muted/20 rounded-3xl p-8 min-h-[600px] border border-border">
              {/* 3D Viewer Placeholder */}
              <div className="relative w-full h-full flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-dashed border-primary/30">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shirt className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">3D Avatar & Try-On</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Interactive 3D model will be displayed here
                  </p>
                  <Badge variant="gradient">Coming Soon</Badge>
                </div>
              </div>

              {/* 3D Controls */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-background/90 backdrop-blur-sm rounded-2xl p-4 border border-border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="icon">
                        <RotateCcw className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <ZoomIn className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <ZoomOut className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsPlaying(!isPlaying)}
                      >
                        {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsMuted(!isMuted)}
                      >
                        {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Controls Panel */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Outfit Selection */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-4 flex items-center">
                <Shirt className="h-5 w-5 mr-2 text-primary" />
                Try Different Outfits
              </h3>
              <div className="space-y-3">
                {outfits.map((outfit) => (
                  <button
                    key={outfit.id}
                    onClick={() => setSelectedOutfit(outfit.id)}
                    className={cn(
                      "w-full p-3 rounded-xl border transition-all text-left",
                      selectedOutfit === outfit.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50 hover:bg-accent"
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-sm">{outfit.name}</div>
                        <div className="text-xs text-muted-foreground">{outfit.color}</div>
                      </div>
                      <Badge variant="outline" size="sm">{outfit.category}</Badge>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Avatar Customization */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-4 flex items-center">
                <Eye className="h-5 w-5 mr-2 text-primary" />
                Customize Avatar
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Body Type</label>
                  <select className="w-full p-2 rounded-lg border border-border bg-background">
                    <option>Athletic</option>
                    <option>Slim</option>
                    <option>Curvy</option>
                    <option>Plus Size</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Height</label>
                  <select className="w-full p-2 rounded-lg border border-border bg-background">
                    <option>5'2" - 5'4"</option>
                    <option>5'5" - 5'7"</option>
                    <option>5'8" - 5'10"</option>
                    <option>5'11" - 6'1"</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Skin Tone</label>
                  <div className="flex space-x-2">
                    {['#F5DEB3', '#DEB887', '#D2B48C', '#CD853F', '#A0522D', '#8B4513'].map((color, index) => (
                      <button
                        key={index}
                        className="w-8 h-8 rounded-full border-2 border-border hover:border-primary transition-colors"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Color Options */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-4 flex items-center">
                <Palette className="h-5 w-5 mr-2 text-primary" />
                Color Variations
              </h3>
              <div className="grid grid-cols-4 gap-2">
                {['#000000', '#FFFFFF', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD'].map((color, index) => (
                  <button
                    key={index}
                    className="w-12 h-12 rounded-xl border-2 border-border hover:border-primary transition-colors"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full">
                Save This Look
              </Button>
              <Button variant="outline" className="w-full">
                Share with Friends
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <motion.div variants={fadeInUp} className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Eye className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Realistic Visualization</h3>
            <p className="text-muted-foreground text-sm">
              See exactly how clothes will look with physics-based rendering and realistic lighting
            </p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-center">
            <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shirt className="h-8 w-8 text-green-500" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Perfect Fit Simulation</h3>
            <p className="text-muted-foreground text-sm">
              Advanced algorithms simulate how fabrics drape and move on your unique body shape
            </p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-center">
            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Palette className="h-8 w-8 text-blue-500" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Instant Customization</h3>
            <p className="text-muted-foreground text-sm">
              Change colors, patterns, and styles instantly to find your perfect look
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}