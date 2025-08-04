'use client';

import { FadeIn, Container, ListItem } from './animations';
import { useTranslation } from 'react-i18next';

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
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      {/* Rating Stars */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Testimonial Text */}
      <blockquote className="text-gray-600 dark:text-gray-400 mb-6 italic">
        "{text}"
      </blockquote>

      {/* Author Info */}
      <div className="flex items-center">
        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
          {avatar ? (
            <img src={avatar} alt={author} className="w-12 h-12 rounded-full object-cover" />
          ) : (
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-lg">
              {author.charAt(0)}
            </span>
          )}
        </div>
        <div>
          <p className="font-semibold text-foreground">{author}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{role} • {company}</p>
          {project && (
            <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">
              Projet: {project}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const { t } = useTranslation();

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

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <Container>
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t('testimonials.title', 'Ce que disent mes clients')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t('testimonials.subtitle', 'Retours et témoignages de clients satisfaits sur mes différents projets')}
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <ListItem key={index}>
              <TestimonialCard {...testimonial} />
            </ListItem>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
