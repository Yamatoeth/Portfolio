'use client';

import Layout from '../../../components/Layout';
import { FadeIn, SlideInLeft, Container, AnimatedButton } from '../../../components/animations';

export default function Contact() {
  return (
    <Layout>
      <div className="min-h-screen bg-background py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Contactez-moi
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Discutons de votre prochain projet ensemble
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <SlideInLeft>
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Informations de contact
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 text-xl">📧</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Email</h3>
                      <a 
                        href="mailto:hello@monportfolio.com" 
                        className="text-blue-600 hover:text-blue-700"
                      >
                        yamatocontact@proton.me
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 text-xl">🐙</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">GitHub</h3>
                      <a 
                        href="https://github.com/yamatoeth" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700"
                      >
                        github.com/yamatoeth
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 text-xl">🐦</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Twitter</h3>
                      <a 
                        href="https://twitter.com/yamatoeth" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700"
                      >
                        @yamatoeth
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3">
                    Disponibilité
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Je suis actuellement disponible pour de nouveaux projets. 
                    N&apos;hésitez pas à me contacter pour discuter de vos besoins !
                  </p>
                </div>
              </div>
            </SlideInLeft>

            <Container>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Envoyez-moi un message
                </h2>
                
                <form action="mailto:hello@monportfolio.com" method="post" encType="text/plain">
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                        placeholder="Votre nom"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                        placeholder="votre@email.com"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Sujet
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground"
                        placeholder="Sujet de votre message"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-foreground resize-none"
                        placeholder="Décrivez votre projet ou votre demande..."
                        required
                      ></textarea>
                    </div>

                    <AnimatedButton 
                      type="submit"
                      className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      Envoyer le message
                    </AnimatedButton>
                  </div>
                </form>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </Layout>
  );
}
