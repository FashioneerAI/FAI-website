"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Check, Star, Zap } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { Badge } from "@/components/atoms/Badge";
import { cn, fadeInUp, staggerChildren } from "@/lib/utils";
import { pricingTiers } from "@/lib/config";

interface PricingSectionProps {
  className?: string;
}

export function PricingSection({ className }: PricingSectionProps) {
  const [isYearly, setIsYearly] = React.useState(false);

  return (
    <section className={cn("py-20 bg-gradient-to-br from-background to-secondary/10", className)}>
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
            Choose Your Style Journey
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Start free and upgrade as your fashion AI needs grow. All plans include our core styling features.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center bg-muted rounded-xl p-1"
          >
            <button
              onClick={() => setIsYearly(false)}
              className={cn(
                "px-6 py-2 rounded-lg text-sm font-medium transition-all",
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
                "px-6 py-2 rounded-lg text-sm font-medium transition-all relative",
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

        <motion.div
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto"
        >
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              variants={fadeInUp}
              className={cn(
                "relative bg-card border rounded-3xl p-8 hover:shadow-lg transition-all duration-300",
                tier.popular 
                  ? "border-primary shadow-brand scale-105" 
                  : "border-border hover:border-primary/50"
              )}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge variant="gradient" className="px-4 py-1">
                    <Star className="mr-1 h-3 w-3" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="font-semibold text-xl mb-2">{tier.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{tier.description}</p>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold">
                    ${isYearly ? tier.price.yearly : tier.price.monthly}
                  </span>
                  {tier.price.monthly > 0 && (
                    <span className="text-muted-foreground">
                      /{isYearly ? "year" : "month"}
                    </span>
                  )}
                </div>

                {isYearly && tier.price.monthly > 0 && (
                  <p className="text-sm text-green-600">
                    Save ${(tier.price.monthly * 12) - tier.price.yearly} per year
                  </p>
                )}
              </div>

              <Button 
                className="w-full mb-6" 
                variant={tier.popular ? "default" : "outline"}
                size="lg"
              >
                {tier.cta}
              </Button>

              <div className="space-y-3">
                {tier.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
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
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12">
            <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Need Something Custom?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Looking for enterprise solutions, custom integrations, or white-label options? 
              Let's discuss how we can tailor Fashioneer.ai to your specific needs.
            </p>
            <Button size="lg" variant="outline">
              Contact Sales Team
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}