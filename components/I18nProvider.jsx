'use client';

import { useEffect } from 'react';
import '../lib/i18n';

const I18nProvider = ({ children }) => {
  useEffect(() => {
    // Forcer le re-render après l'initialisation d'i18n
  }, []);

  return children;
};

export default I18nProvider;
