'use client';

import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useTranslation } from 'react-i18next';
import { AnimatedButton } from './animations';

const ContactForm = () => {
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm("your-formspree-id"); // Remplacer par votre ID Formspree
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleSubmit(e);
    if (state.succeeded) {
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  if (state.succeeded) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
          {t('contact.success.title', 'Message envoyé !')}
        </h3>
        <p className="text-gray-600 mb-6">
          {t('contact.success.message', 'Merci pour votre message. Je vous répondrai dans les plus brefs délais.')}
        </p>
        <AnimatedButton 
          onClick={() => window.location.reload()}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          {t('contact.success.newMessage', 'Envoyer un nouveau message')}
        </AnimatedButton>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        {t('contact.formTitle')}
      </h2>
      
      <form onSubmit={onSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
            {t('contact.form.name')}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900"
            placeholder={t('contact.form.namePlaceholder')}
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
            {t('contact.form.email')}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900"
            placeholder={t('contact.form.emailPlaceholder')}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-900 mb-2">
            {t('contact.form.subject')}
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900"
            placeholder={t('contact.form.subjectPlaceholder')}
          />
          <ValidationError prefix="Subject" field="subject" errors={state.errors} />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
            {t('contact.form.message')}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={5}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 resize-none"
            placeholder={t('contact.form.messagePlaceholder')}
          ></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        <AnimatedButton 
          type="submit"
          disabled={state.submitting}
          className={`w-full py-3 rounded-lg font-medium transition-colors ${
            state.submitting 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-blue-600 hover:bg-blue-700'
          } text-white`}
        >
          {state.submitting 
            ? t('contact.form.sending', 'Envoi en cours...') 
            : t('contact.form.submit')
          }
        </AnimatedButton>
      </form>
    </div>
  );
};

export default ContactForm;
