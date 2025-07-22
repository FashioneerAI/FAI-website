"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, User, Mail, Building, MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import { cn, fadeInUp, staggerChildren } from "@/lib/utils";

interface ContactFormProps {
  className?: string;
}

interface FormData {
  name: string;
  email: string;
  company: string;
  useCase: string;
  message: string;
}

export function ContactForm({ className }: ContactFormProps) {
  const [formData, setFormData] = React.useState<FormData>({
    name: "",
    email: "",
    company: "",
    useCase: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        useCase: "",
        message: ""
      });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (isSubmitted) {
    return (
      <section className={cn("py-20 bg-background", className)}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-500" />
            </div>
            <h2 className="font-display text-3xl font-bold mb-4">
              Thanks for reaching out!
            </h2>
            <p className="text-muted-foreground mb-6">
              We've received your message and will get back to you within 24 hours. 
              Our team is excited to discuss how Fashioneer.ai can help transform your fashion experience.
            </p>
            <Button variant="outline" onClick={() => setIsSubmitted(false)}>
              Send Another Message
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className={cn("py-20 bg-background", className)}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <h2 className="font-display text-3xl font-bold mb-4">
                Send us a message
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </motion.div>

            <motion.form onSubmit={handleSubmit} variants={fadeInUp} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  name="name"
                  label="Full Name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleInputChange}
                  leftIcon={<User className="h-4 w-4" />}
                  required
                />
                <Input
                  name="email"
                  label="Email Address"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  leftIcon={<Mail className="h-4 w-4" />}
                  required
                />
              </div>

              <Input
                name="company"
                label="Company (Optional)"
                type="text"
                placeholder="Your company name"
                value={formData.company}
                onChange={handleInputChange}
                leftIcon={<Building className="h-4 w-4" />}
              />

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  How can we help you?
                </label>
                <select
                  name="useCase"
                  value={formData.useCase}
                  onChange={handleInputChange}
                  className="w-full h-12 px-4 py-3 rounded-xl border border-input bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="general">General Inquiry</option>
                  <option value="demo">Schedule a Demo</option>
                  <option value="enterprise">Enterprise Solutions</option>
                  <option value="partnership">Partnership Opportunities</option>
                  <option value="support">Technical Support</option>
                  <option value="press">Press & Media</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="Tell us more about your needs..."
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full group"
                size="lg"
                loading={isSubmitting}
                leftIcon={<Send className="h-4 w-4" />}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp}>
              <h3 className="font-display text-2xl font-bold mb-6">
                Let's start a conversation
              </h3>
              <p className="text-muted-foreground mb-8">
                We're here to help you discover how Fashioneer.ai can transform your fashion experience. 
                Whether you're an individual looking to revolutionize your style or a business seeking 
                innovative fashion solutions, we'd love to hear from you.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Quick Response</h4>
                  <p className="text-muted-foreground text-sm">
                    We typically respond to all inquiries within 24 hours during business days.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Expert Support</h4>
                  <p className="text-muted-foreground text-sm">
                    Our team of fashion tech experts is ready to help you find the perfect solution.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center shrink-0">
                  <Building className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Enterprise Ready</h4>
                  <p className="text-muted-foreground text-sm">
                    Custom solutions, white-label options, and enterprise integrations available.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gradient-to-r from-primary/10 to-warning-gold/10 rounded-2xl p-6">
              <h4 className="font-semibold mb-3">Not sure where to start?</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Book a 15-minute call with our team to discuss your needs and explore how 
                Fashioneer.ai can help you.
              </p>
              <Button variant="outline" size="sm" className="group">
                Schedule a Call
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}