'use client';

import Layout from '../../components/Layout';
import MobileOptimizations from '../../components/MobileOptimizations';
import Testimonials from '../../components/Testimonials';
import FeaturedProjects from '../../components/FeaturedProjects';
import { FadeIn, SlideInLeft, SlideInRight, Container, ListItem, AnimatedButton } from '../../components/animations';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const { t } = useTranslation();

  // Définition des outils pour chaque section
  const skillsData = {
    designer: {
      tools: ["Figma", "Sketch", "Photoshop", "Illustrator"]
    },
    developer: {
      tools: ["VS Code", "GitHub", "Bootstrap", "Tailwind CSS", "Terminal", "Figma", "Chrome DevTools"]  
    },
    web3: {
      tools: ["Solidity", "Ether.js", "Web3.js", "MetaMask", "Hardhat", "IPFS", "Rust"]
    }
  };

  return (
    <Layout>
      <MobileOptimizations />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-12 sm:py-20 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <SlideInLeft>
                <div className="text-center lg:text-left">
                  <FadeIn delay={0.2}>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                      {t('home.title')}
                      <span className="text-blue-600"> {t('home.titleHighlight')}</span>
                    </h1>
                  </FadeIn>
                  
                  <FadeIn delay={0.4}>
                    <div className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                      {t('home.subtitle').split('\n').map((line, index) => (
                        <p key={index} className="mb-2">
                          {line}
                        </p>
                      ))}
                    </div>
                  </FadeIn>

                  <FadeIn delay={0.6}>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                      <Link href="/projects">
                        <AnimatedButton className="w-full sm:w-auto bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-blue-700 active:scale-95 transition-all duration-200 font-medium text-center">
                          {t('home.viewProjects')}
                        </AnimatedButton>
                      </Link>
                      <Link href="/contact">
                        <AnimatedButton className="w-full sm:w-auto border border-blue-600 text-blue-600 px-6 sm:px-8 py-3 rounded-lg hover:bg-blue-50 active:scale-95 transition-all duration-200 font-medium text-center">
                          {t('home.contactMe')}
                        </AnimatedButton>
                      </Link>
                    </div>
                  </FadeIn>
                </div>
              </SlideInLeft>

              <SlideInRight delay={0.3}>
                <div className="relative">
                    <div className="w-full h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden">
                      <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
                        <Image
                          src="/images/profile/yamato-profile.png"
                          alt="Yamato - Web3 Developer"
                          fill
                          className="object-cover rounded-full border-4 border-white/20"
                          priority
                          sizes="(max-width: 640px) 192px, (max-width: 1024px) 224px, 256px"
                        />
                      </div>
                    </div>
                </div>
              </SlideInRight>
            </div>
          </div>
        </section>

        {/* Skills Section - Inspired by the portfolio design */}
        <section className="py-16 sm:py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              
              {/* Designer Column */}
              <FadeIn delay={0.1}>
                <div className="text-center">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {t('home.skills.designer.title')}
                  </h3>
                  <div className="h-24 flex items-center mb-8">
                    <p className="text-gray-600 leading-relaxed">
                      {t('home.skills.designer.description')}
                    </p>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-emerald-600 font-semibold mb-3">
                      {t('home.skills.designer.thingsTitle')}
                    </h4>
                    <p className="text-gray-600 h-12 flex items-center justify-center">
                      {t('home.skills.designer.things')}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-emerald-600 font-semibold mb-3">
                      {t('home.skills.designer.toolsTitle')}
                    </h4>
                    <div className="space-y-1">
                      {skillsData.designer.tools.map((tool, index) => (
                        <div key={index} className="text-gray-600">
                          {tool}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Developer Column */}
              <FadeIn delay={0.2}>
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {t('home.skills.developer.title')}
                  </h3>
                  <div className="h-24 flex items-center mb-8">
                    <p className="text-gray-600 leading-relaxed">
                      {t('home.skills.developer.description')}
                    </p>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-blue-600 font-semibold mb-3">
                      {t('home.skills.developer.languagesTitle')}
                    </h4>
                    <p className="text-gray-600 h-12 flex items-center justify-center">
                      {t('home.skills.developer.languages')}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-blue-600 font-semibold mb-3">
                      {t('home.skills.developer.toolsTitle')}
                    </h4>
                    <div className="space-y-1">
                      {skillsData.developer.tools.map((tool, index) => (
                        <div key={index} className="text-gray-600">
                          {tool}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Web3 Column */}
              <FadeIn delay={0.3}>
                <div className="text-center">
                  <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {t('home.skills.web3.title')}
                  </h3>
                  <div className="h-24 flex items-center mb-8">
                    <p className="text-gray-600 leading-relaxed">
                      {t('home.skills.web3.description')}
                    </p>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-purple-600 font-semibold mb-3">
                      {t('home.skills.web3.experienceTitle')}
                    </h4>
                    <p className="text-gray-600 h-12 flex items-center justify-center">
                      {t('home.skills.web3.experience')}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-purple-600 font-semibold mb-3">
                      {t('home.skills.web3.toolsTitle')}
                    </h4>
                    <div className="space-y-1">
                      {skillsData.web3.tools.map((tool, index) => (
                        <div key={index} className="text-gray-600">
                          {tool}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
              
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-12 sm:py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
                {t('home.techTitle')}
              </h2>
            </FadeIn>

             <Container className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-4 sm:gap-6">
              {[
                  { name: t('technologies.html'), logo: '/images/logos/html.svg' },
                  { name: t('technologies.css'), logo: '/images/logos/css.svg' },
                  { name: t('technologies.javascript'), logo: '/images/logos/javascript.svg' },
                  { name: t('technologies.react'), logo: '/images/logos/react.png' },
                  { name: t('technologies.nextjs'), logo: '/images/logos/nextjs.svg' },
                  { name: t('technologies.typescript'), logo: '/images/logos/typescript.svg' },
                  { name: t('technologies.nodejs'), logo: '/images/logos/nodejs.png' },
                  { name: t('technologies.mongodb'), logo: '/images/logos/mongo.png' },
                  { name: t('technologies.tailwind'), logo: '/images/logos/tailwind.svg' },
                  { name: t('technologies.solidity'), logo: '/images/logos/solidity.svg' },
                  { name: t('technologies.rust'), logo: '/images/logos/rust.svg' },
                  { name: t('technologies.ethers'), logo: '/images/logos/ethereum.svg' }
                ].map((tech) => (
                  <ListItem key={tech.name}>
                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center hover:shadow-lg active:scale-95 sm:active:scale-100 transition-all duration-200 cursor-pointer">
                      <div className="text-2xl sm:text-3xl mb-2">
                        <Image src={tech.logo} alt={tech.name} width={40} height={40} />
                      </div>
                      <p className="font-medium text-gray-900 text-sm sm:text-base">{tech.name}</p>
                    </div>
                  </ListItem>
                ))}
              </Container>
                          
          </div>
        </section>

        {/* Featured Projects Section */}
        <FeaturedProjects />

        {/* Testimonials Section */}
        <Testimonials />
      </div>
    </Layout>
  );
}
