'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              NA
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('about')} className="text-sm hover:text-accent transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-sm hover:text-accent transition-colors">
                Experience
              </button>
              <button onClick={() => scrollToSection('research')} className="text-sm hover:text-accent transition-colors">
                Research
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-sm hover:text-accent transition-colors">
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4 border-t border-border pt-4">
              <button onClick={() => scrollToSection('about')} className="block text-sm hover:text-accent transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('experience')} className="block text-sm hover:text-accent transition-colors">
                Experience
              </button>
              <button onClick={() => scrollToSection('research')} className="block text-sm hover:text-accent transition-colors">
                Research
              </button>
              <button onClick={() => scrollToSection('contact')} className="block text-sm hover:text-accent transition-colors">
                Contact
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="space-y-6">
          <div className="space-y-3">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-balance">
              Nathanael Azuponga
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground font-light">
              AI Researcher & Software Engineer
            </p>
          </div>
          <p className="text-lg text-foreground/80 max-w-2xl leading-relaxed">
            Exploring generative AI for medical diagnosis and disease prevention. Building scalable systems that combine deep learning with practical engineering. Currently advancing AI research at Data Intelligence Lab, University of Ghana.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Get in Touch
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-2 border border-border rounded-lg hover:bg-secondary transition-colors">
              <Github size={18} />
              GitHub
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
