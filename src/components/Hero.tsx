import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-glow/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl animate-glow"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Responsive layout: mobile column (image above text), desktop row (text left, image right) */}
        <div className="max-w-5xl mx-auto flex flex-col gap-4 lg:flex-row items-center justify-between gap-10">
          {/* Text Column */}
          <div className="order-2 lg:order-1 w-full lg:w-1/2 text-center lg:text-left">
            {/* Main Hero Content */}
            <div className="animate-fade-in">
              <h1 className="text-hero text-gradient mb-6">
                Simon
              </h1>
              <p className="text-2xl lg:text-3xl font-display font-medium text-muted-foreground mb-4">
                Web3 & Full-Stack Developer
              </p>
              <p className="text-lg lg:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                Crafting innovative digital experiences that bridge traditional web development 
                with cutting-edge blockchain technology. Building the future, one line of code at a time.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-16 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <Button 
                onClick={scrollToProjects}
                className="btn-hero group"
              >
                View My Work
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button 
                onClick={scrollToContact}
                variant="outline"
                className="btn-secondary"
              >
                Let's Connect
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <a 
                href="https://github.com/yamatoeth" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:bg-card hover:scale-110 transition-all duration-300 hover:shadow-soft"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/simon-lechevalier-5ba743198" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:bg-card hover:scale-110 transition-all duration-300 hover:shadow-soft"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:simon.lechevalier@hotmail.fr"
                className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:bg-card hover:scale-110 transition-all duration-300 hover:shadow-soft"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Image Column */}
          <div className="order-1 lg:order-2 w-full lg:w-auto flex justify-center lg:justify-end">
            <img 
              src="/pfpirl.png" 
              alt="Profile photo"
              className="w-40 h-40 lg:w-[450px] lg:h-[450px] rounded-full border-4 border-card shadow-lg object-cover"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;