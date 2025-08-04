'use client';

import Layout from '../../../components/Layout';
import ProjectCard from '../../../components/ProjectCard';
import { FadeIn, Container, ListItem, AnimatedButton } from '../../../components/animations';
import { projects, getFeaturedProjects } from '../../../data/projects';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  client?: string;
  category?: string;
  etherscanUrl?: string;
}

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const { t } = useTranslation();
  const allProjects = projects;
  const featuredProjects = getFeaturedProjects();
  
  const filteredProjects = filter === 'featured' 
    ? featuredProjects 
    : filter === 'all'
    ? allProjects
    : allProjects.filter(project => 
        project.category?.toLowerCase().includes(filter.toLowerCase()) ||
        (filter === 'web3' && (project.category?.includes('Blockchain') || project.category?.includes('DeFi') || project.category?.includes('Web3')))
      );

  const categories = [
    { key: 'all', label: t('projects.filters.all') },
    { key: 'featured', label: t('projects.filters.featured') },
    { key: 'web3', label: t('projects.filters.web3') },
    { key: 'web', label: t('projects.filters.web') },
    { key: 'wordpress', label: t('projects.filters.wordpress') }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {t('projects.title')}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                {t('projects.subtitle')}
              </p>
            </div>
          </FadeIn>

          {/* Filter Buttons */}
          <FadeIn delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <AnimatedButton
                  key={category.key}
                  onClick={() => setFilter(category.key)}
                  className={`px-6 py-2 rounded-full font-medium transition-colors ${
                    filter === category.key
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {category.label}
                </AnimatedButton>
              ))}
            </div>
          </FadeIn>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <Container className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProjects.map((project: Project) => (
                <ListItem key={project.id}>
                  <ProjectCard project={project} />
                </ListItem>
              ))}
            </Container>
          ) : (
            <FadeIn delay={0.3}>
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  Aucun projet trouvé
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Aucun projet ne correspond aux critères sélectionnés.
                </p>
                <AnimatedButton
                  onClick={() => setFilter('all')}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Voir tous les projets
                </AnimatedButton>
              </div>
            </FadeIn>
          )}

          {/* CTA Section */}
          <FadeIn delay={0.5}>
            <div className="text-center mt-16 p-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl text-white">
              <h2 className="text-3xl font-bold mb-4">
                Intéressé par mon travail ?
              </h2>
              <p className="text-xl mb-6 opacity-90">
                Discutons de votre prochain projet ensemble
              </p>
              <AnimatedButton className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                <a href="/contact">Contactez-moi</a>
              </AnimatedButton>
            </div>
          </FadeIn>
        </div>
      </div>
    </Layout>
  );
}
