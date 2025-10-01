import { useState } from 'react';
import { Clock, ArrowRight, Star, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getProjectsByCategory } from '@/data/projects';

const OngoingProjects = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const ongoingProjects = getProjectsByCategory('ongoing');

  return (
    <section id="ongoing" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-primary animate-pulse" />
              <h2 className="text-section-title text-gradient">
                Ongoing Projects
              </h2>
              <Sparkles className="h-6 w-6 text-primary animate-pulse" />
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Currently in development: cutting-edge projects that will revolutionize 
              how we interact with technology. Stay tuned for these exciting launches!
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {ongoingProjects.map((project, index) => (
              <div 
                key={project.id}
                className="card-premium group hover-glow relative overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold border border-primary/20 backdrop-blur-sm">
                    <Clock className="h-3 w-3 animate-spin" />
                    In Development
                  </div>
                </div>

                {/* Featured Badge for Special Projects */}
                {project.id === 'ongoing-1' && (
                  <div className="absolute top-4 left-4 z-10">
                    <div className="flex items-center gap-1 px-3 py-1 bg-yellow-500/10 text-yellow-600 rounded-full text-xs font-semibold border border-yellow-500/20 backdrop-blur-sm">
                      <Star className="h-3 w-3" />
                      Featured
                    </div>
                  </div>
                )}

                {/* Project Image */}
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Progress Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="bg-card/80 backdrop-blur-sm rounded-lg p-3 border border-border/50">
                      <div className="flex justify-between items-center text-xs text-muted-foreground mb-2">
                        <span>Progress</span>
                        <span>{project.id === 'ongoing-1' ? '75%' : '60%'}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: project.id === 'ongoing-1' ? '75%' : '60%',
                            animationDelay: `${index * 0.5}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  <h3 className="text-card-title group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full border border-border group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className={`transition-all duration-300 ${
                    hoveredId === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  }`}>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="btn-secondary group/btn"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Coming Soon Teaser */}
          <div className="text-center p-8 rounded-xl bg-gradient-hero border border-border">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-display font-semibold text-gradient mb-4">
                More Exciting Projects Coming Soon
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm constantly working on new innovations. Follow my journey to be the first 
                to know about upcoming releases and beta access opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-hero">
                  Get Notified
                </Button>
                <Button variant="outline" className="btn-secondary">
                  View Roadmap
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OngoingProjects;