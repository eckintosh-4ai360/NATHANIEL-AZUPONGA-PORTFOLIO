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
            Exploring generative AI for medical diagnosis and disease prevention. Building scalable systems that combine deep learning with practical engineering.
             Currently advancing Software Develo, University of Ghana.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Get in Touch
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <a href="#" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-2 border border-border rounded-lg hover:bg-secondary transition-colors">
              <Github size={18} />
              GitHub
            </a>
          </div>
        </div>
      </section>

       {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">About</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-foreground/80 leading-relaxed">
                I&apos;m a research-driven engineer passionate about leveraging artificial intelligence to solve real-world problems in healthcare. My work bridges the gap between cutting-edge AI research and practical software engineering.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                With a background in both biomedical engineering and computer science, I bring a unique perspective to AI development. My research focuses on deep learning for medical image analysis, particularly liver tumor segmentation using multi-attention architectures.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Beyond research, I have solid industry experience developing scalable microservices, event-driven systems, and RESTful APIs in languages like Scala, C#, and Python. I&apos;m committed to clean code, collaborative development, and continuous learning.
              </p>
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-secondary rounded-lg border border-border">
                <h3 className="font-semibold mb-4 flex items-center gap-2 text-secondary-foreground">
                  <span className="w-1 h-6 bg-accent rounded-full"></span>
                  Research Interests
                </h3>
                <ul className="space-y-2 text-sm text-secondary-foreground">
                  <li>• Generative AI for Disease Diagnosis</li>
                  <li>• Medical Image Analysis & Segmentation</li>
                  <li>• Computer-Aided Diagnosis Systems</li>
                  <li>• Deep Learning Architectures</li>
                  <li>• Health Informatics</li>
                </ul>
              </div>
              <div className="p-6 bg-secondary rounded-lg border border-border">
                <h3 className="font-semibold mb-4 flex items-center gap-2 text-secondary-foreground">
                  <span className="w-1 h-6 bg-accent rounded-full"></span>
                  Technical Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Scala', 'C#', 'Java', 'TensorFlow', 'Keras', 'OpenCV', 'FastAPI', 'Docker', 'AWS', 'Git'].map((skill) => (
                    <span key={skill} className="text-xs bg-accent text-accent-foreground px-3 py-1 rounded-full border border-accent/50">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
