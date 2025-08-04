'use client';

import Layout from '../../../components/Layout';
import ContactForm from '../../../components/ContactForm';
import { FadeIn, SlideInLeft, Container } from '../../../components/animations';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  return (
    <Layout>
      <div className="min-h-screen bg-background py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {t('contact.title')}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                {t('contact.subtitle')}
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
              <ContactForm />
            </Container>
          </div>
        </div>
      </div>
    </Layout>
  );
}
