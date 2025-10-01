import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  isActive?: boolean;
  onClick?: () => void;
}

const ProjectCard = ({ project, isActive = false, onClick }: ProjectCardProps) => {
  return (
    <div 
      className={`card-project cursor-pointer group ${isActive ? 'scale-105 shadow-medium' : ''} flex flex-col h-full`}
      onClick={onClick}
    >
      {/* Project Image */}
      <div className="relative overflow-visible">
        <img 
          src={project.image} 
          alt={project.title}
          className="block transition-transform duration-500 group-hover:scale-110"
          style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Overlay Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          <div className="flex gap-2 mb-4">
            <Button 
              size="sm" 
              className="btn-hero text-xs"
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.link, '_blank');
              }}
            >
              <ExternalLink className="h-3 w-3 mr-1" />
              Live Demo
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="btn-secondary text-xs"
              onClick={(e) => {
                e.stopPropagation();
                // Could link to GitHub if available
              }}
            >
              <Github className="h-3 w-3 mr-1" />
              Code
            </Button>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-card-title group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full border border-border group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;