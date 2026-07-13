import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/ThemeToggle';
import { getCaseStudyById } from '@/data/caseStudies';

const CaseStudy = () => {
  const { id } = useParams();
  const study = id ? getCaseStudyById(id) : undefined;

  if (!study) {
    return (
      <main className="min-h-screen bg-background px-6 py-16">
        <ThemeToggle />
        <div className="mx-auto max-w-3xl">
          <Button asChild variant="outline" className="btn-secondary mb-8">
            <Link to="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
              Back to Projects
            </Link>
          </Button>
          <h1 className="text-section-title text-gradient">Case Study Not Found</h1>
          <p className="text-muted-foreground">The requested project detail page is not available.</p>
        </div>
      </main>
    );
  }

  const { project } = study;

  return (
    <main className="min-h-screen bg-background">
      <ThemeToggle />
      <section className="px-6 py-10 lg:py-16 bg-gradient-hero">
        <div className="mx-auto max-w-6xl">
          <Button asChild variant="outline" className="btn-secondary mb-10">
            <Link to="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
              Back to Projects
            </Link>
          </Button>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                {study.eyebrow}
              </p>
              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight text-gradient text-pretty">
                {study.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                {study.summary}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.link && (
                  <Button asChild className="btn-hero">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" aria-hidden="true" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.githubLink && (
                  <Button asChild variant="outline" className="btn-secondary">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" aria-hidden="true" />
                      Code
                    </a>
                  </Button>
                )}
              </div>
            </div>

            <div className="overflow-hidden rounded-lg border border-border bg-card shadow-card">
              <img
                src={project.image}
                alt={`${study.title} screenshot`}
                width={960}
                height={640}
                fetchPriority="high"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="space-y-6">
            <div className="card-service">
              <h2 className="text-card-title">Role</h2>
              <p className="text-muted-foreground leading-relaxed">{study.role}</p>
            </div>

            <div className="card-service">
              <h2 className="text-card-title">Project Facts</h2>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="font-semibold text-foreground">Timeline</dt>
                  <dd className="text-muted-foreground">{study.timeline}</dd>
                </div>
                {study.metrics.map((metric) => (
                  <div key={metric.label}>
                    <dt className="font-semibold text-foreground">{metric.label}</dt>
                    <dd className="text-muted-foreground">{metric.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="card-service">
              <h2 className="text-card-title">Stack</h2>
              <div className="flex flex-wrap gap-2">
                {study.stack.map((item) => (
                  <span key={item} className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full border border-border">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          <article className="space-y-8">
            {study.demo && (
              <section className="border-b border-border pb-8">
                <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Demo</p>
                    <h2 className="text-3xl font-display font-semibold text-gradient">{study.demo.title}</h2>
                  </div>
                  <a
                    href={study.demo.watchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-primary hover:text-primary-glow"
                  >
                    Open on YouTube
                  </a>
                </div>
                <div className={`mx-auto overflow-hidden rounded-lg border border-border bg-card shadow-card ${
                  study.demo.aspectRatio === 'short' ? 'max-w-sm aspect-[9/16]' : 'aspect-video'
                }`}>
                  <iframe
                    src={study.demo.embedUrl}
                    title={study.demo.title}
                    className="h-full w-full"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </section>
            )}

            {study.sections.map((section) => (
              <section key={section.title} className="border-b border-border pb-8 last:border-b-0">
                <h2 className="text-3xl font-display font-semibold text-gradient">{section.title}</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{section.body}</p>
              </section>
            ))}
          </article>
        </div>
      </section>
    </main>
  );
};

export default CaseStudy;
