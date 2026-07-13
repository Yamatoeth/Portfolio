import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProjectCard from './ProjectCard';
import { getFeaturedProjects } from '@/data/projects';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const featuredProjects = getFeaturedProjects();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useGSAP(() => {
    if (!isMobile) {
      const cards = gsap.utils.toArray<HTMLElement>('.project-card-animate');
      cards.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse',
          },
          y: 50,
          opacity: 0,
          duration: 0.6,
          delay: index * 0.1,
          ease: 'power3.out',
        });
      });
    }
  }, { scope: containerRef, dependencies: [isMobile] });

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev === featuredProjects.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? featuredProjects.length - 1 : prev - 1
    );
  };

  const handleTouchStart = useRef<number>(0);
  const handleTouchEnd = useRef<number>(0);

  const onTouchStart = (e: React.TouchEvent) => {
    handleTouchStart.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    handleTouchEnd.current = e.changedTouches[0].clientX;
    const difference = handleTouchStart.current - handleTouchEnd.current;
    
    if (Math.abs(difference) > 50) {
      if (difference > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  const goToAllProjects = () => {
    navigate('/projects');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 0);
  };

  return (
    <section id="projects" className="py-20 px-6 bg-muted/30" ref={containerRef}>
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-section-title text-gradient mb-6">
              Selected Case Studies
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A shorter, recruiter-friendly set of projects showing product delivery, APIs,
              automation, mobile work, CMS architecture, and Web3 integration where it matters.
            </p>
          </div>

          {/* Desktop Grid */}
          {!isMobile && (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
              {featuredProjects.map((project, index) => (
                <div 
                  key={project.id}
                  className="animate-scale-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <ProjectCard 
                    project={project}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Mobile Carousel */}
          {isMobile && (
            <div className="relative mb-12">
              <div 
                ref={carouselRef}
                className="overflow-hidden rounded-xl"
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
              >
                <div 
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {featuredProjects.map((project, index) => (
                    <div key={project.id} className="w-full flex-shrink-0 px-2">
                      <ProjectCard 
                        project={project}
                        isActive={index === currentIndex}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Navigation */}
              <div className="flex justify-between items-center mt-6">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevSlide}
                  className="btn-secondary"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                
                {/* Dots Indicator */}
                <div className="flex space-x-2">
                  {featuredProjects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex 
                          ? 'bg-primary scale-125' 
                          : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                      }`}
                    />
                  ))}
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextSlide}
                  className="btn-secondary"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {/* See All Projects CTA */}
          <div className="text-center">
            <Button 
              onClick={goToAllProjects}
              className="btn-hero group"
            >
              See All Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
