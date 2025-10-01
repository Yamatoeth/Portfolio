import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/yamatoeth', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/simon-lechevalier-5ba743198', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:simon.lechevalier@hotmail.fr', label: 'Email' }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-display font-bold text-gradient mb-4">
                Simon
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                Passionate Web3 & Full-Stack Developer creating innovative digital experiences 
                that bridge traditional development with blockchain technology.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : '_self'}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      aria-label={link.label}
                      className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-soft"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
                    >
                      {link.label}
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Get in Touch</h4>
              <div className="space-y-3">
                <p className="text-muted-foreground text-sm">
                  Ready to start your project?
                </p>
                <a
                  href="mailto:simon.lechevalier@hotmail.fr"
                  className="text-primary hover:text-primary-glow transition-colors duration-300 text-sm font-medium"
                >
                  simon.lechevalier@hotmail.fr
                </a>
                <Button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  size="sm"
                  className="btn-hero mt-4"
                >
                  Let's Work Together
                </Button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border my-8"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2025 Portfolio</span>
            </div>

            <div className="flex items-center gap-4">
              <Button
                onClick={scrollToTop}
                variant="outline"
                size="sm"
                className="btn-ghost group"
              >
                Back to Top
                <ArrowUp className="ml-2 h-4 w-4 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Legal */}
          <div className="mt-6 pt-6 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
              <div className="flex gap-6">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-primary transition-colors">Cookies</a>
              </div>
              <div>
                <span>All rights reserved. Built with React, TypeScript & Tailwind CSS.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;