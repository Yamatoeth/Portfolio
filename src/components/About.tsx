import { useRef } from 'react';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import KnowledgeGraph from './KnowledgeGraph';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    // Animate Header
    gsap.fromTo('.about-header-animate',
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-header-animate',
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      }
    );

    // Animate Stats
    gsap.fromTo('.stat-card-animate',
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.stats-grid-animate',
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section id="about" className="py-20 px-6" ref={containerRef}>
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 about-header-animate">
            <h2 className="text-section-title text-gradient mb-6">
              About Me
            </h2>
            {/* <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm a passionate developer who bridges the gap between traditional web development and 
              blockchain innovation. With a keen eye for user experience and a deep understanding of 
              modern technologies, I create digital solutions that not only work flawlessly but also 
              delight users and drive business growth.
            </p> */}
          </div>

          {/* Skills Graph */}
          <div className="mb-20 skills-grid-animate p-1 card-service">
            <KnowledgeGraph />
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-2 lg:grid-cols-3 gap-8 stats-grid-animate">
            {[
              { number: '20+', label: 'Projects Completed' },
              { number: '3+', label: 'Years Experience' },
              { number: '12+', label: 'Technologies Mastered' },
            ].map((stat) => (
              <div 
                key={stat.label}
                className="text-center bg-card/50 backdrop-blur-sm stat-card-animate card-service"
              >
                <div className="text-3xl lg:text-4xl font-display font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;