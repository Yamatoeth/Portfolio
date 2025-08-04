import Image from 'next/image';
import Link from 'next/link';
import { AnimatedCard, AnimatedButton } from './animations';

const ProjectCard = ({ project }) => {
  const {
    id,
    title,
    description,
    image,
    technologies,
    githubUrl,
    liveUrl,
    featured = false,
    client,
    category,
    etherscanUrl
  } = project;

  return (
    <AnimatedCard className={`bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden ${featured ? 'ring-2 ring-blue-500' : ''}`}>
      {/* Image du projet */}
      <div className="relative h-48 w-full">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <svg
              className="w-12 h-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
          </div>
        )}
        {featured && (
          <div className="absolute top-2 right-2">
            <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              Projet vedette
            </span>
          </div>
        )}
      </div>

      {/* Contenu de la carte */}
      <div className="p-6">
        {/* Titre */}
        <h3 className="text-xl font-semibold text-foreground mb-2">
          {title}
        </h3>

        {/* Client et Catégorie */}
        {(client || category) && (
          <div className="flex flex-wrap gap-2 mb-3">
            {client && (
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full">
                👤 {client}
              </span>
            )}
            {category && (
              <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded-full">
                📁 {category}
              </span>
            )}
          </div>
        )}

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {description}
        </p>

        {/* Technologies */}
        {technologies && technologies.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Boutons d'action */}
        <div className="flex gap-3">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Code
            </a>
          )}
          
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Demo
            </a>
          )}

          {etherscanUrl && (
            <a
              href={etherscanUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              Etherscan
            </a>
          )}
        </div>
      </div>
    </AnimatedCard>
  );
};

export default ProjectCard;
