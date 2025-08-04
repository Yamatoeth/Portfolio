'use client';

import { useState, useEffect } from 'react';
import { FadeIn, Container } from './animations';
import { useTranslation } from 'react-i18next';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const AnimatedCounter = ({ end, duration = 2000, suffix = '', prefix = '' }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) {
      let startTime: number;
      const startCount = 0;

      const updateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        setCount(Math.floor(progress * (end - startCount) + startCount));
        
        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          setHasAnimated(true);
        }
      };

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            requestAnimationFrame(updateCount);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      const element = document.getElementById(`counter-${end}`);
      if (element) observer.observe(element);

      return () => observer.disconnect();
    }
  }, [end, duration, hasAnimated]);

  return (
    <span id={`counter-${end}`} className="text-4xl md:text-5xl font-bold text-blue-600">
      {prefix}{count}{suffix}
    </span>
  );
};

const ProjectStats = () => {
  const { t } = useTranslation();

  const stats = [
    {
      number: 5,
      suffix: '+',
      label: t('stats.projects', 'Projets Réalisés'),
      icon: '🚀'
    },
    {
      number: 10,
      suffix: '+',
      label: t('stats.technologies', 'Technologies Maîtrisées'),
      icon: '⚡'
    },
    {
      number: 100,
      suffix: '%',
      label: t('stats.satisfaction', 'Satisfaction Client'),
      icon: '⭐'
    },
    {
      number: 3,
      suffix: '',
      label: t('stats.web3Projects', 'Projets Web3'),
      icon: '🔗'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('stats.title', 'En Chiffres')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('stats.subtitle', 'Quelques statistiques sur mon parcours')}
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <AnimatedCounter 
                  end={stat.number} 
                  suffix={stat.suffix}
                  duration={2000 + index * 200}
                />
                <p className="text-gray-600 mt-2 font-medium">
                  {stat.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProjectStats;
