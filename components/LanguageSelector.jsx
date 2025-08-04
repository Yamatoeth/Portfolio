'use client';

import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
      aria-label="Change language"
    >
      <span className="text-lg">
        {i18n.language === 'fr' ? '🇫🇷' : '🇺🇸'}
      </span>
      <span className="text-sm font-medium text-gray-700">
        {i18n.language === 'fr' ? 'FR' : 'EN'}
      </span>
    </button>
  );
};

export default LanguageSelector;
