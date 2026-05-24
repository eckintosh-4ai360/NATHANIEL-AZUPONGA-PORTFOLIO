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

 
      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Experience & Education</h2>
          
          {/* Work Experience */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-8 text-accent">Work Experience</h3>
            <div className="space-y-8">
              {[
                {
                  role: 'Senior Software System Analyst',
                  company: 'Spagad Technologies Limited',
                  period: '2026 - Present',
                  location: 'Ghana',
                  description: 'Design and develop software applications supporting core business operations. Manage user incidents, configure systems for optimal performance, and lead system administration and security initiatives.',
                },
                {
                  role: 'AI Data Trainer',
                  company: 'Invisible Technology Inc',
                  period: '2024 - 2026',
                  location: 'Remote',
                  description: 'Trained large language models through annotation, labeling, and RLHF. Designed argumentation schemes and evaluated conversational AI systems for accuracy and alignment.',
                },
                {
                  role: 'Software Engineer II',
                  company: 'Turntabl Ghana Limited',
                  period: '2021 - 2026',
                  location: 'Ghana',
                  description: 'Developed scalable risk management applications using Scala and C#. Built distributed microservices with Akka and Kafka, automated workflows with Python/Airflow (60% manual workload reduction), and designed RESTful APIs.',
                },
              ].map((job, idx) => (
                <div key={idx} className="flex gap-6 pb-8 border-b border-border last:border-b-0 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-accent mt-2"></div>
                    {idx < 2 && <div className="w-0.5 h-24 bg-border mt-2"></div>}
                  </div>
                  <div className="pb-4">
                    <h4 className="text-lg font-semibold">{job.role}</h4>
                    <p className="text-accent text-sm">{job.company}</p>
                    <p className="text-muted-foreground text-xs">{job.period} • {job.location}</p>
                    <p className="text-foreground/80 text-sm mt-2 leading-relaxed">{job.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xl font-semibold mb-8 text-accent">Education</h3>
            <div className="space-y-8">
              {[
                {
                  degree: 'MSc Computer Science',
                  school: 'University of Ghana',
                  period: 'August 2024',
                  gpa: '3.67/4.00',
                  thesis: 'Multi-attention ResUNet and modified U-Net for liver tumor segmentation',
                  courses: 'Computer Vision, Data Structures & Algorithms, Research Methods',
                },
                {
                  degree: 'BSc Biomedical Engineering',
                  school: 'University of Ghana',
                  period: 'July 2020',
                  gpa: '3.76/4.00',
                  thesis: 'Medical device for effective blood loss prevention in women',
                  courses: 'Medical Imaging, Statistics, Tissue Engineering, Biomechanics',
                },
              ].map((edu, idx) => (
                <div key={idx} className="flex gap-6 pb-8 border-b border-border last:border-b-0 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-accent mt-2"></div>
                    {idx === 0 && <div className="w-0.5 h-32 bg-border mt-2"></div>}
                  </div>
                  <div className="pb-4">
                    <h4 className="text-lg font-semibold">{edu.degree}</h4>
                    <p className="text-accent text-sm">{edu.school}</p>
                    <p className="text-muted-foreground text-xs">{edu.period} • GPA: {edu.gpa}</p>
                    <p className="text-foreground/80 text-sm mt-2"><strong>Thesis:</strong> {edu.thesis}</p>
                    <p className="text-foreground/80 text-sm"><strong>Key Courses:</strong> {edu.courses}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      
      {/* Research & Projects Section */}
      <section id="research" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Research & Projects</h2>

          {/* Featured Research */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-8 text-accent">Featured Research</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Multi-attention Framework for Liver Tumor Segmentation',
                  journal: 'Applied Computational and Soft Computing (2024)',
                  description: 'Developed hybrid ResUNet architecture with self-attention mechanisms for improved liver tumor segmentation accuracy.',
                  impact: 'Published in peer-reviewed journal',
                },
                {
                  title: 'Heart Disease Prediction using BPSO-PSO Optimization',
                  journal: 'ICICC-2026 Conference',
                  description: 'Created optimized multilayer perceptron framework combining particle swarm optimization for enhanced predictive accuracy.',
                  impact: 'Accepted for presentation',
                },
              ].map((paper, idx) => (
                <div key={idx} className="p-6 bg-background rounded-lg border border-border hover:border-accent transition-colors">
                  <h4 className="text-lg font-semibold mb-2">{paper.title}</h4>
                  <p className="text-accent text-sm mb-3">{paper.journal}</p>
                  <p className="text-foreground/80 text-sm mb-3 leading-relaxed">{paper.description}</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                    {paper.impact}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Notable Projects */}
          <div>
            <h3 className="text-xl font-semibold mb-8 text-accent">Notable Projects</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Gemini Factuality Evaluations',
                  description: 'Developed methodologies to evaluate and enhance factual correctness of LLM outputs using decomposition and grounding benchmarks.',
                  tech: ['Python', 'LLMs', 'Evaluation Metrics'],
                },
                {
                  title: 'Risk Management System',
                  description: 'Designed and managed distributed risk management systems using Scala, Python, and Java with event-driven architecture.',
                  tech: ['Scala', 'Python', 'Kafka', 'Akka'],
                },
                {
                  title: 'Medical Device for Postpartum Hemorrhage',
                  description: 'Designed assistive medical device with detailed 3D models and biocompatibility analysis for emergency healthcare.',
                  tech: ['Solid Edge', 'Biomedical Engineering'],
                },
                {
                  title: 'Assistive Tool for Vision-Impaired',
                  description: 'Developed technology solution to help visually impaired persons manage medication schedules effectively.',
                  tech: ['IoT', 'Hardware Integration'],
                },
              ].map((project, idx) => (
                <div key={idx} className="p-6 bg-background rounded-lg border border-border hover:border-accent transition-colors">
                  <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                  <p className="text-foreground/80 text-sm mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded border border-accent/50">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

            {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Let&apos;s Connect</h2>
          <p className="text-lg text-foreground/80 mb-12 leading-relaxed">
            I&apos;m always interested in collaborating on research, discussing AI applications in healthcare, or exploring new opportunities. Feel free to reach out!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a 
              href="mailto:nathanael.azuponga@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg transition-colors font-medium"
            >
              <Mail size={18} />
              nathanael.azuponga@gmail.com
            </a>
            <a 
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:bg-secondary rounded-lg transition-colors"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a 
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:bg-secondary rounded-lg transition-colors"
            >
              <Github size={18} />
              GitHub
            </a>
          </div>

          <div className="p-6 bg-secondary rounded-lg border border-border">
            <p className="text-sm text-secondary-foreground mb-4">Additional Information</p>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-accent">6+</p>
                <p className="text-xs text-secondary-foreground">Years Experience</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent">2</p>
                <p className="text-xs text-secondary-foreground">Publications</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent">10+</p>
                <p className="text-xs text-secondary-foreground">Students Mentored</p>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* Footer */}
      <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Nathanael Azuponga. All rights reserved. 
          </p>
        </div>
      </footer>

    </div>
  );
}
