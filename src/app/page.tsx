'use client';

import Layout from '../../components/Layout';
import ProjectCard from '../../components/ProjectCard';
import { FadeIn, SlideInLeft, SlideInRight, Container, ListItem, AnimatedButton } from '../../components/animations';
import { getFeaturedProjects } from '../../data/projects';
import Link from 'next/link';

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <SlideInLeft>
                <div>
                  <FadeIn delay={0.2}>
                    <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                      Développeur
                      <span className="text-blue-600"> Full Stack</span>
                    </h1>
                  </FadeIn>
                  
                  <FadeIn delay={0.4}>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                      Passionné par la création d&apos;expériences web modernes et performantes. 
                      Je transforme vos idées en applications web innovantes avec les dernières technologies.
                    </p>
                  </FadeIn>

                  <FadeIn delay={0.6}>
                    <div className="flex flex-wrap gap-4">
                      <Link href="/projects">
                        <AnimatedButton className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                          Voir mes projets
                        </AnimatedButton>
                      </Link>
                      <Link href="/contact">
                        <AnimatedButton className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors font-medium">
                          Me contacter
                        </AnimatedButton>
                      </Link>
                    </div>
                  </FadeIn>
                </div>
              </SlideInLeft>

              <SlideInRight delay={0.3}>
                <div className="relative">
                  <div className="w-full h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-6xl mb-4">👨‍💻</div>
                      <p className="text-xl font-semibold">Code & Create</p>
                    </div>
                  </div>
                </div>
              </SlideInRight>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
                Technologies maîtrisées
              </h2>
            </FadeIn>
            
            <Container className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: 'React', icon: '⚛️' },
                { name: 'Next.js', icon: '🔺' },
                { name: 'TypeScript', icon: '📘' },
                { name: 'Node.js', icon: '🟢' },
                { name: 'MongoDB', icon: '🍃' },
                { name: 'Tailwind', icon: '🎨' }
              ].map((tech) => (
                <ListItem key={tech.name}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                    <div className="text-3xl mb-2">{tech.icon}</div>
                    <p className="font-medium text-foreground">{tech.name}</p>
                  </div>
                </ListItem>
              ))}
            </Container>
          </div>
        </section>

        {/* Featured Projects Section */}
        {featuredProjects.length > 0 && (
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <FadeIn>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    Projets vedettes
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-400">
                    Découvrez quelques-unes de mes réalisations
                  </p>
                </div>
              </FadeIn>

              <Container className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredProjects.map((project) => (
                  <ListItem key={project.id}>
                    <ProjectCard project={project} />
                  </ListItem>
                ))}
              </Container>

              <FadeIn delay={0.5}>
                <div className="text-center mt-12">
                  <Link href="/projects">
                    <AnimatedButton className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                      Voir tous les projets
                    </AnimatedButton>
                  </Link>
                </div>
              </FadeIn>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 px-4 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold text-white mb-6">
                Prêt à donner vie à votre projet ?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Collaborons ensemble pour créer quelque chose d&apos;extraordinaire
              </p>
              <Link href="/contact">
                <AnimatedButton className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                  Commençons à discuter
                </AnimatedButton>
              </Link>
            </FadeIn>
          </div>
        </section>
      </div>
    </Layout>
  );
}
