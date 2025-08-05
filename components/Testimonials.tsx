'use client';

import { FadeIn, Container } from './animations';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface TestimonialProps {
  author: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  avatar?: string;
  project?: string;
}

const TestimonialCard = ({ author, role, company, text, rating, avatar, project }: TestimonialProps) => {
  return (
    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg max-w-4xl mx-auto">
      {/* Rating Stars */}
      <div className="flex justify-center mb-6">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-6 h-6 mx-1 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Testimonial Text */}
      <blockquote className="text-gray-600 mb-8 italic text-lg md:text-xl text-center leading-relaxed">
        &ldquo;{text}&rdquo;
      </blockquote>

      {/* Author Info */}
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
          {avatar ? (
            <Image src={avatar} alt={author} width={64} height={64} className="rounded-full object-cover" />
          ) : (
            <span className="text-blue-600 font-semibold text-2xl">
              {author.charAt(0)}
            </span>
          )}
        </div>
        <div>
          <p className="font-semibold text-gray-900 text-lg">{author}</p>
          <p className="text-gray-500 mb-2">{role} • {company}</p>
          {project && (
            <p className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              {project}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      author: "Dr. Marie Dubois",
      role: "Psychologue",
      company: "Cabinet Privé",
      text: "Site web professionnel et moderne qui a transformé ma présence en ligne. Les patients trouvent facilement les informations et prennent rendez-vous plus facilement.",
      rating: 5,
      project: "Site vitrine cabinet psychologie"
    },
    {
      author: "Nguyễn Minh",
      role: "Gérant",
      company: "Boutique Déco Hanoï",
      text: "L'application de gestion de stock a révolutionné notre façon de travailler. Interface intuitive et fonctionnalités parfaitement adaptées à nos besoins.",
      rating: 5,
      project: "App gestion de stock"
    },
    {
      author: "Alex Chen",
      role: "Community Manager",
      company: "Crypto Collective",
      text: "Excellent travail sur le smart contract NFT. Code propre, sécurisé et déploiement sans problème. Recommande vivement pour les projets Web3.",
      rating: 5,
      project: "Smart contract NFT"
    },
    {
      author: "Sarah Johnson",
      role: "Product Manager",
      company: "DeFi Startup",
      text: "Protocole DeFi impressionnant avec intégration Chainlink impeccable. L'expertise blockchain est évidente dans chaque ligne de code.",
      rating: 5,
      project: "Plateforme DeFi Lending"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('testimonials.title', 'Ce que disent mes clients')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('testimonials.subtitle', 'Retours et témoignages de clients satisfaits sur mes différents projets')}
            </p>
          </div>
        </FadeIn>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group"
            aria-label="Témoignage précédent"
          >
            <svg className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group"
            aria-label="Témoignage suivant"
          >
            <svg className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonial Card */}
          <div className="px-16">
            <div 
              className="transition-all duration-500 ease-in-out"
              key={currentIndex}
            >
              <TestimonialCard {...testimonials[currentIndex]} />
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-12 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-blue-600 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Aller au témoignage ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play indicator */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
          >
            {isAutoPlaying ? '⏸️ Pause' : '▶️ Lecture automatique'}
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
