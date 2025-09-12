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
    <AnimatedCard className={`bg-white rounded-lg shadow-md hover:shadow-lg active:scale-[0.98] transition-all duration-300 overflow-hidden ${featured ? 'ring-2 ring-blue-500' : ''} cursor-pointer group h-full flex flex-col`}>
      {/* Image du projet */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden flex-shrink-0">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            priority={featured}
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center group-hover:bg-gray-300 transition-colors duration-300">
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
              View Project
            </span>
          </div>
        )}
      </div>

      {/* Contenu de la carte */}
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        {/* Titre */}
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
          {title}
        </h3>

        {/* Client et Catégorie */}
        {(client || category) && (
          <div className="flex flex-wrap gap-2 mb-3">
            {client && (
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full flex items-center">
                <span className="mr-1">👤</span>
                <span className="truncate max-w-20 sm:max-w-none">{client}</span>
              </span>
            )}
            {category && (
              <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full flex items-center">
                <span className="mr-1">📁</span>
                <span className="truncate max-w-24 sm:max-w-none">{category}</span>
              </span>
            )}
          </div>
        )}

        {/* Description */}
        <p className="text-gray-600 mb-4 text-sm sm:text-base line-clamp-3 leading-relaxed flex-grow">
          {description}
        </p>

        {/* Technologies */}
        {technologies && technologies.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {technologies.slice(0, 4).map((tech, index) => (
                <span
                  key={index}
                  className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full whitespace-nowrap"
                >
                  {tech}
                </span>
              ))}
              {technologies.length > 4 && (
                <span className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                  +{technologies.length - 4}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-auto pt-2">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 active:scale-95 transition-all duration-200 text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View Code
            </a>
          )}
          
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 active:scale-95 transition-all duration-200 text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              View Demo
            </a>
          )}

          {etherscanUrl && (
            <a
              href={etherscanUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 bg-orange-600 text-white rounded-md hover:bg-orange-700 active:scale-95 transition-all duration-200 text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              View on Etherscan
            </a>
          )}
        </div>
      </div>
    </AnimatedCard>
  );
};

export default ProjectCard;
