"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { cn } from "@/lib/utils";
import { navConfig } from "@/lib/config";

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLink = ({ href, title, className: linkClassName }: { href: string; title: string; className?: string }) => {
    const isActive = pathname === href;
    
    return (
      <Link
        href={href}
        className={cn(
          "relative px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
          isActive ? "text-primary" : "text-muted-foreground",
          linkClassName
        )}
        onClick={() => setIsOpen(false)}
      >
        {title}
        {isActive && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
            layoutId="activeTab"
            initial={false}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        )}
      </Link>
    );
  };

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300",
        scrolled && "bg-background/80 shadow-md",
        className
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/FAI_logo.png"
            alt="Fashioneer.ai Logo"
            width={128}
            height={32}
            className="h-8"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navConfig.mainNav.map((item) => (
            <NavLink key={item.href} href={item.href} title={item.title} />
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/app">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="sm">Get Early Access</Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur"
          >
            <div className="container py-4">
              <nav className="flex flex-col space-y-2">
                {navConfig.mainNav.map((item) => (
                  <NavLink
                    key={item.href}
                    href={item.href}
                    title={item.title}
                    className="block px-3 py-2 text-base"
                  />
                ))}
              </nav>
              <div className="mt-4 flex flex-col space-y-2">
                <Link href="/app">
                  <Button variant="outline" size="sm" className="w-full">
                    Sign In
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="sm" className="w-full">
                    Get Early Access
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
