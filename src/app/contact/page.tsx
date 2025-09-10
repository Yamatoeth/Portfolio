'use client';

import Layout from '../../../components/Layout';
import ContactForm from '../../../components/ContactForm';
import { FadeIn, SlideInLeft, Container } from '../../../components/animations';

export default function Contact() {
  return (
    <Layout>
      <div className="min-h-screen bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h1>
              <p className="text-xl text-gray-600">
                Have a question or want to work together? I'd love to hear from you!
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <SlideInLeft>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 text-xl">📧</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Email</h3>
                      <a 
                        href="mailto:yamatocontact@proton.me" 
                        className="text-blue-600 hover:text-blue-700"
                      >
                        yamatocontact@proton.me
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 text-xl">🐙</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Social Media</h3>
                      <div className="flex space-x-4 mt-2">
                        <a 
                          href="https://twitter.com/yamatoeth" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-blue-500"
                        >
                          Twitter
                        </a>
                        <a 
                          href="https://github.com/yamatoeth" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          GitHub
                        </a>
                        <a 
                          href="https://linkedin.com/in/simon-lechevalier-5ba743198" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-blue-700"
                        >
                          LinkedIn
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                    <h3 className="font-medium text-gray-900">Availability</h3>
                    <p className="text-gray-600">
                      I'm currently available for freelance opportunities. Feel free to reach out to discuss your project!
                    </p>
                  </div>
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
