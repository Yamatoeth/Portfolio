import { useState, useRef } from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { experiences } from '@/data/experience';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const items = gsap.utils.toArray('.experience-item-animate');
    items.forEach((item: any) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
        },
        x: item.classList.contains('md:flex-row') ? -50 : 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
    });
  }, { scope: containerRef });

  return (
    <section id="experience" className="py-20 px-6" ref={containerRef}>
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-section-title text-gradient mb-6">
              Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              My professional journey through web development and blockchain technology.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Central Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary-glow to-primary transform md:-translate-x-1/2"></div>

            {/* Experience Items */}
            <div className="relative mt-24">
              {experiences.slice().reverse().map((exp, index) => (
                <div 
                  key={exp.id}
                  className={`relative flex items-center experience-item-animate z-[${experiences.length - index}] -mt-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background transform md:-translate-x-1/2 z-10 animate-pulse shadow-lg">
                    <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}>
                    <div 
                      className="card-premium hover-glow group relative overflow-hidden"
                      onMouseEnter={() => setHoveredId(exp.id)}
                      onMouseLeave={() => setHoveredId(null)}
                    >
                      {/* Year Badge */}
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                          <Calendar className="h-3 w-3" />
                          {exp.year}
                        </div>
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-card-title group-hover:text-primary transition-colors mb-2">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-1 text-muted-foreground mb-4">
                        <MapPin className="h-4 w-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Hover Content Wrapper */}
                      <div className={`overflow-hidden transition-all duration-500 ${hoveredId === exp.id ? 'max-h-96' : 'max-h-0'}`}>
                        {/* Detailed Description (on hover) */}
                        <p className="text-sm text-muted-foreground/80 leading-relaxed mb-4 border-t border-border pt-4">
                          {exp.details}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span 
                              key={tech}
                              className="px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded border border-border transition-all duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;