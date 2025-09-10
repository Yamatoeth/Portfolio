'use client';

import { FadeIn } from './animations';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getFeaturedProjects } from '../data/projects';
// Custom SVG icons to avoid heroicons compatibility issues
const EyeIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

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
  color?: string;
  logo?: string;
  etherscanUrl?: string;
}

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
  color?: string;
  logo?: string;
  etherscanUrl?: string;
}

export default function FeaturedProjects() {
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);
  
  useEffect(() => {
    const loadProjects = async () => {
      try {
        const projects = getFeaturedProjects();
        setFeaturedProjects(projects);
      } catch (error) {
        console.error('Error loading projects:', error);
        setFeaturedProjects([]);
      }
    };
    
    loadProjects();
  }, []);

  const handleProjectClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Featured Projects
            </h2>
          </FadeIn>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`
                ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}
                opacity-0 translate-y-8
              `}
              style={{
                animation: `slideInUp 0.8s ease-out ${index * 0.2}s forwards`
              }}
            >
              <div 
                className={`
                  relative group cursor-pointer h-64 rounded-2xl 
                  bg-gradient-to-br ${project.color}
                  transform transition-all duration-300 
                  hover:scale-105 hover:shadow-2xl
                  overflow-hidden
                `}
                onClick={() => handleProjectClick(project.liveUrl)}
              >
                {/* Image illustrative du projet */}
                <div className="relative w-full h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain z-0 opacity-80"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ pointerEvents: 'none' }}
                  />
                </div>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-black/20"></div>
                  {/* Subtle geometric pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                  {/* Logo/Title */}
                  <div>
                    <h3 className="text-white font-bold text-2xl mb-2 group-hover:scale-105 transition-transform">
                      {project.logo ? (
                        project.logo.length <= 3 ? (
                          <span className="text-4xl">{project.logo}</span>
                        ) : (
                          project.logo
                        )
                      ) : (
                        project.title
                      )}
                    </h3>
                    <p className="text-white/90 text-sm font-medium">
                      {project.category}
                    </p>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <EyeIcon className="w-12 h-12 text-white mx-auto" />
                      <p className="text-white font-medium">
                        View Project
                      </p>
                    </div>
                  </div>

                  {/* Technologies badge */}
                  <div className="self-end">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                      <p className="text-white text-xs font-medium">
                        {project.technologies.slice(0, 2).join(' • ')}
                      </p>
                    </div>
                  </div>
                </div>

                {/* External link icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>

              {/* Project info below card */}
              <div className="mt-4 px-2">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <FadeIn delay={0.8}>
          <div className="mt-12 text-center">
            <a
              href="/projects"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              View All Projects
            </a>
          </div>
        </FadeIn>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
