'use client';

import Layout from '../../components/Layout';
import ProjectCard from '../../components/ProjectCard';
import MobileProjectSwiper from '../../components/MobileProjectSwiper';
import MobileOptimizations from '../../components/MobileOptimizations';
import Testimonials from '../../components/Testimonials';
import { FadeIn, SlideInLeft, SlideInRight, Container, ListItem, AnimatedButton } from '../../components/animations';
import { getFeaturedProjects } from '../../data/projectsTranslated';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

export default function Home() {
  const { t, i18n } = useTranslation();
  const featuredProjects = getFeaturedProjects(i18n.language);

  return (
    <Layout>
      <MobileOptimizations />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-12 sm:py-20 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <SlideInLeft>
                <div className="text-center lg:text-left">
                  <FadeIn delay={0.2}>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
                      {t('home.title')}
                      <span className="text-blue-600"> {t('home.titleHighlight')}</span>
                    </h1>
                  </FadeIn>
                  
                  <FadeIn delay={0.4}>
                    <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                      {t('home.subtitle')}
                    </p>
                  </FadeIn>

                  <FadeIn delay={0.6}>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                      <Link href="/projects">
                        <AnimatedButton className="w-full sm:w-auto bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-blue-700 active:scale-95 transition-all duration-200 font-medium text-center">
                          {t('home.viewProjects')}
                        </AnimatedButton>
                      </Link>
                      <Link href="/contact">
                        <AnimatedButton className="w-full sm:w-auto border border-blue-600 text-blue-600 px-6 sm:px-8 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 active:scale-95 transition-all duration-200 font-medium text-center">
                          {t('home.contactMe')}
                        </AnimatedButton>
                      </Link>
                    </div>
                  </FadeIn>
                </div>
              </SlideInLeft>

              <SlideInRight delay={0.3}>
                <div className="relative">
                  <div className="w-full h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
                    <div className="text-white text-center">
                      <div className="text-4xl sm:text-5xl lg:text-6xl mb-4">👨‍💻</div>
                      <p className="text-lg sm:text-xl font-semibold">{t('home.codeCreate')}</p>
                    </div>
                  </div>
                </div>
              </SlideInRight>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-12 sm:py-16 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 sm:mb-12 text-center">
                {t('home.techTitle')}
              </h2>
            </FadeIn>
            
            <Container className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-4 sm:gap-6">
              {[
                { name: t('technologies.html'), icon: '🌐' },
                { name: t('technologies.css'), icon: '🎨' },
                { name: t('technologies.javascript'), icon: '💛' },
                { name: t('technologies.react'), icon: '⚛️' },
                { name: t('technologies.nextjs'), icon: '🔺' },
                { name: t('technologies.typescript'), icon: '📘' },
                { name: t('technologies.nodejs'), icon: '🟢' },
                { name: t('technologies.mongodb'), icon: '🍃' },
                { name: t('technologies.tailwind'), icon: '💨' },
                { name: t('technologies.solidity'), icon: '💎' },
                { name: t('technologies.rust'), icon: '🦀' },
                { name: t('technologies.ethers'), icon: '⚡' }
              ].map((tech) => (
                <ListItem key={tech.name}>
                  <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md text-center hover:shadow-lg active:scale-95 sm:active:scale-100 transition-all duration-200 cursor-pointer">
                    <div className="text-2xl sm:text-3xl mb-2">{tech.icon}</div>
                    <p className="font-medium text-foreground text-sm sm:text-base">{tech.name}</p>
                  </div>
                </ListItem>
              ))}
            </Container>
          </div>
        </section>

        {/* Featured Projects Section */}
                {/* Featured Projects Section */}
        {featuredProjects.length > 0 && (
          <section className="py-12 sm:py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <FadeIn>
                <div className="text-center mb-8 sm:mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                    {t('home.featuredTitle')}
                  </h2>
                  <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                    {t('home.featuredSubtitle')}
                  </p>
                </div>
              </FadeIn>

              {/* Mobile Swiper - visible uniquement sur mobile */}
              <div className="block md:hidden">
                <MobileProjectSwiper projects={featuredProjects} />
              </div>

              {/* Desktop Grid - visible uniquement sur desktop */}
              <div className="hidden md:block">
                <Container className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                  {featuredProjects.map((project: any) => (
                    <ListItem key={project.id}>
                      <ProjectCard project={project} />
                    </ListItem>
                  ))}
                </Container>
              </div>

              <FadeIn delay={0.5}>
                <div className="text-center mt-8 sm:mt-12">
                  <Link href="/projects">
                    <AnimatedButton className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-blue-700 active:scale-95 sm:active:scale-100 transition-all duration-200 font-medium">
                      {t('home.viewAllProjects')}
                    </AnimatedButton>
                  </Link>
                </div>
              </FadeIn>
            </div>
          </section>
        )}

        {/* Testimonials Section */}
        <Testimonials />

        {/* CTA Section */}
        <section className="py-12 sm:py-16 px-4 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
                {t('home.ctaTitle')}
              </h2>
              <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
                {t('home.ctaSubtitle')}
              </p>
              <Link href="/contact">
                <AnimatedButton className="bg-white text-blue-600 px-6 sm:px-8 py-3 rounded-lg hover:bg-gray-100 active:scale-95 transition-all duration-200 font-medium">
                  {t('home.ctaButton')}
                </AnimatedButton>
              </Link>
            </FadeIn>
          </div>
        </section>
      </div>
    </Layout>
  );
}
