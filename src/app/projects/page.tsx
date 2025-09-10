'use client';

import Layout from '../../../components/Layout';
import ProjectCard from '../../../components/ProjectCard';
import ProjectSearch from '../../../components/ProjectSearch';

import { FadeIn, Container, ListItem, AnimatedButton } from '../../../components/animations';
import { projects } from '../../../data/projects';
import { useState, useEffect } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  client: string;
  category: string;
  etherscanUrl?: string;
}

export default function Projects() {
  const [allProjects] = useState<Project[]>(projects);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  useEffect(() => {
    setFilteredProjects(projects);
  }, []);

  const handleProjectsFilter = (filtered: Project[]) => {
    setFilteredProjects(filtered);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-white py-12 sm:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                My Projects
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                A collection of my recent work and contributions
              </p>
            </div>
          </FadeIn>

          {/* Project Stats */}
          

          {/* Project Search and Filter */}
          <ProjectSearch 
            projects={allProjects} 
            onProjectsFiltered={handleProjectsFilter}
          />

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <Container className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
              {filteredProjects.map((project: Project) => (
                <ListItem key={project.id}>
                  <ProjectCard project={project} />
                </ListItem>
              ))}
            </Container>
          ) : (
            <FadeIn delay={0.3}>
              <div className="text-center py-12 sm:py-16">
                <div className="text-4xl sm:text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-medium text-gray-500 mb-6">
                  No projects found matching your criteria.
                </h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  Sorry, it seems like we couldn&apos;t find any projects that match your search criteria. Try searching again or filtering by technology.
                </p>
                <AnimatedButton
                  onClick={() => setFilteredProjects(allProjects)}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 active:scale-95 transition-all duration-200"
                >
                  View All Projects
                </AnimatedButton>
              </div>
            </FadeIn>
          )}

          {/* CTA Section */}
          <FadeIn delay={0.5}>
            <div className="text-center mt-16 p-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl text-white">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Filter Projects
              </h2>
              <p className="text-xl mb-6 opacity-90">
                Take a look at my recent projects and contributions. You can filter by technology to find something that interests you.
              </p>
              <AnimatedButton className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                <a href="/contact">Get in Touch</a>
              </AnimatedButton>
            </div>
          </FadeIn>
        </div>
      </div>
    </Layout>
  );
}
