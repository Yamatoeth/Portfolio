import { useState } from 'react';
import { ArrowLeft, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import ProjectCard from '@/components/ProjectCard';
import ThemeToggle from '@/components/ThemeToggle';
import { getAllProjects, getProjectsByCategory, Project } from '@/data/projects';

const AllProjects = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<'all' | Project['category']>('all');
  
  const allProjects = getAllProjects();
  const displayedProjects = selectedCategory === 'all' 
    ? allProjects 
    : getProjectsByCategory(selectedCategory);

  const categories = [
    { id: 'all', label: 'All Projects', count: allProjects.length },
    { id: 'main', label: 'Featured', count: getProjectsByCategory('main').length },
    { id: 'web3', label: 'Web3', count: getProjectsByCategory('web3').length },
    { id: 'ongoing', label: 'Ongoing', count: getProjectsByCategory('ongoing').length }
  ];

  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                onClick={() => navigate('/')}
                variant="outline"
                size="sm"
                className="btn-secondary"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
              <h1 className="text-2xl font-display font-bold text-gradient">
                All Projects
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-gradient mb-6">
              Complete Portfolio
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore my complete collection of projects spanning Web3 development, 
              full-stack applications, and innovative digital solutions.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id as any)}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`${
                  selectedCategory === category.id 
                    ? 'btn-hero' 
                    : 'btn-secondary'
                } transition-all duration-300`}
              >
                <Filter className="h-4 w-4 mr-2" />
                {category.label}
                <span className="ml-2 px-2 py-1 text-xs bg-primary/20 text-primary rounded-full">
                  {category.count}
                </span>
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {displayedProjects.map((project, index) => (
              <div 
                key={project.id}
                className="animate-scale-in h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard 
                  project={project}
                  onClick={() => window.open(project.link, '_blank')}
                />
              </div>
            ))}
          </div>

          {/* Empty State */}
          {displayedProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
                <Filter className="h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-muted-foreground mb-2">
                No projects found
              </h3>
              <p className="text-muted-foreground">
                Try selecting a different category to see more projects.
              </p>
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <div className="card-premium max-w-2xl mx-auto bg-gradient-hero">
              <h3 className="text-2xl font-display font-semibold text-gradient mb-4">
                Like What You See?
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm always excited to work on new projects and collaborate with innovative teams. 
                Let's discuss how we can bring your ideas to life!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => navigate('/#contact')}
                  className="btn-hero"
                >
                  Start a Project
                </Button>
                <Button 
                  onClick={() => navigate('/')}
                  variant="outline"
                  className="btn-secondary"
                >
                  Learn More About Me
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AllProjects;