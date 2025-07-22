"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Check, Star, Zap, ArrowRight, DollarSign } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { Badge } from "@/components/atoms/Badge";
import { cn, fadeInUp, staggerChildren } from "@/lib/utils";
import { pricingTiers } from "@/lib/config";

interface PricingHeroProps {
  className?: string;
}

export function PricingHero({ className }: PricingHeroProps) {
  const [isYearly, setIsYearly] = React.useState(false);

  return (
    <section className={cn("relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20 pt-16", className)}>
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
          {/* Badge */}
          <motion.div variants={fadeInUp} className="mb-8">
            <Badge variant="gradient" size="lg" className="mb-4">
              <DollarSign className="mr-2 h-4 w-4" />
              Flexible Pricing - Start Free, Scale as You Grow
            </Badge>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={fadeInUp}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            Choose Your{" "}
            <span className="gradient-text">Style Journey</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Start with our free plan and upgrade as your fashion AI needs grow. 
            All plans include our core styling features with no hidden fees.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center bg-muted rounded-2xl p-1 mb-16"
          >
            <button
              onClick={() => setIsYearly(false)}
              className={cn(
                "px-8 py-3 rounded-xl text-sm font-medium transition-all",
                !isYearly 
                  ? "bg-primary text-primary-foreground shadow-sm" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={cn(
                "px-8 py-3 rounded-xl text-sm font-medium transition-all relative",
                isYearly 
                  ? "bg-primary text-primary-foreground shadow-sm" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Yearly
              <Badge variant="success" size="sm" className="absolute -top-2 -right-2 text-xs">
                Save 20%
              </Badge>
            </button>
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={staggerChildren}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto pb-20"
        >
          {pricingTiers.map((tier) => (
            <motion.div
              key={tier.id}
              variants={fadeInUp}
              className={cn(
                "relative bg-card border rounded-3xl p-8 hover:shadow-xl transition-all duration-300",
                tier.popular 
                  ? "border-primary shadow-brand scale-105 z-10" 
                  : "border-border hover:border-primary/50"
              )}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge variant="gradient" className="px-6 py-2">
                    <Star className="mr-2 h-4 w-4" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="font-display text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{tier.description}</p>
                
                <div className="mb-6">
                  <span className="text-5xl font-bold">
                    ${isYearly ? tier.price.yearly : tier.price.monthly}
                  </span>
                  {tier.price.monthly > 0 && (
                    <span className="text-muted-foreground text-lg">
                      /{isYearly ? "year" : "month"}
                    </span>
                  )}
                </div>

                {isYearly && tier.price.monthly > 0 && (
                  <div className="bg-green-50 text-green-700 px-3 py-2 rounded-lg text-sm mb-6">
                    Save ${(tier.price.monthly * 12) - tier.price.yearly} per year
                  </div>
                )}
              </div>

              <Button 
                className="w-full mb-8" 
                variant={tier.popular ? "default" : "outline"}
                size="lg"
              >
                {tier.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <div className="space-y-4">
                <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                  What's Included:
                </h4>
                {tier.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {tier.popular && (
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 pointer-events-none" />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Enterprise CTA */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="text-center pb-20"
        >
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <Zap className="h-16 w-16 text-primary mx-auto mb-6" />
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Need Something Custom?
            </h3>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Looking for enterprise solutions, custom integrations, white-label options, 
              or volume discounts? Let's discuss how we can tailor Fashioneer.ai to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="group">
                Contact Sales Team
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="ghost">
                Schedule Demo Call
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
