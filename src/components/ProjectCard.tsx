import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Project } from '@/data/projects';
import { getCaseStudyByProjectId } from '@/data/caseStudies';

interface ProjectCardProps {
  project: Project;
  isActive?: boolean;
}

const ProjectCard = ({ project, isActive = false }: ProjectCardProps) => {
  const caseStudy = getCaseStudyByProjectId(project.id);
  const hasActions = Boolean(project.link || project.githubLink || caseStudy);

  return (
    <article
      className={`card-project group ${isActive ? 'scale-105 shadow-medium' : ''} flex flex-col h-full`}
    >
      {/* Project Image */}
      <div className="relative overflow-visible">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="block w-full h-auto transition-transform duration-500 group-hover:scale-110"
            width={640}
            height={420}
            loading="lazy"
          />
        ) : (
          <div className="project-placeholder flex aspect-[16/10] w-full flex-col justify-end p-6">
            <span className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Demo Available
            </span>
            <span className="text-2xl font-display font-semibold text-foreground">
              Visual coming soon
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Overlay Content */}
        {hasActions && (
        <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          <div className="flex gap-2 mb-4">
            {project.link && (
              <Button size="sm" className="btn-hero text-xs" asChild>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-3 w-3 mr-1" aria-hidden="true" />
                  Live Demo
                </a>
              </Button>
            )}
            {project.githubLink && (
              <Button variant="outline" size="sm" className="btn-secondary text-xs" asChild>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <Github className="h-3 w-3 mr-1" aria-hidden="true" />
                  Code
                </a>
              </Button>
            )}
          </div>
        </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-card-title group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
          {project.description}
        </p>

        {(project.problem || project.role || project.outcome) && (
          <dl className="space-y-3 mb-5 text-sm">
            {project.problem && (
              <div>
                <dt className="font-semibold text-foreground">Problem</dt>
                <dd className="text-muted-foreground leading-relaxed">{project.problem}</dd>
              </div>
            )}
            {project.role && (
              <div>
                <dt className="font-semibold text-foreground">Role</dt>
                <dd className="text-muted-foreground leading-relaxed">{project.role}</dd>
              </div>
            )}
            {project.outcome && (
              <div>
                <dt className="font-semibold text-foreground">Outcome</dt>
                <dd className="text-muted-foreground leading-relaxed">{project.outcome}</dd>
              </div>
            )}
          </dl>
        )}

        {hasActions && (
          <div className="flex flex-wrap gap-2 mb-5">
            {caseStudy && (
              <Button size="sm" className="btn-hero text-xs" asChild>
                <Link to={`/projects/${caseStudy.id}`}>
                  Case Study
                </Link>
              </Button>
            )}
            {project.link && (
              <Button variant="outline" size="sm" className="btn-secondary text-xs" asChild>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-3 w-3 mr-1" aria-hidden="true" />
                  Live Demo
                </a>
              </Button>
            )}
            {project.githubLink && (
              <Button variant="outline" size="sm" className="btn-secondary text-xs" asChild>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <Github className="h-3 w-3 mr-1" aria-hidden="true" />
                  Code
                </a>
              </Button>
            )}
          </div>
        )}
        
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
    </article>
  );
};

export default ProjectCard;
