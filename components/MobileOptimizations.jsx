'use client';

import { useEffect } from 'react';

const MobileOptimizations = () => {
  useEffect(() => {
    // Optimisation pour iOS Safari
    const handleViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // Empêcher le zoom sur double tap
    let lastTouchEnd = 0;
    const preventDoubleTapZoom = (event) => {
      const now = (new Date()).getTime();
      if (now - lastTouchEnd <= 300) {
        event.preventDefault();
      }
      lastTouchEnd = now;
    };

    // Smooth scroll pour iOS
    const enableSmoothScroll = () => {
      document.documentElement.style.scrollBehavior = 'smooth';
      document.body.style.webkitOverflowScrolling = 'touch';
    };

    // Prévenir le pull-to-refresh sur mobile
    const preventPullToRefresh = (e) => {
      if (e.touches.length !== 1) return;
      const touch = e.touches[0];
      if (touch.clientY > 20 && window.scrollY === 0) {
        e.preventDefault();
      }
    };

    // Optimisation des performances de scroll
    let ticking = false;
    const optimizeScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Optimisations lors du scroll
          ticking = false;
        });
        ticking = true;
      }
    };

    // Event listeners
    window.addEventListener('resize', handleViewportHeight);
    window.addEventListener('orientationchange', handleViewportHeight);
    document.addEventListener('touchend', preventDoubleTapZoom, false);
    document.addEventListener('touchstart', preventPullToRefresh, { passive: false });
    window.addEventListener('scroll', optimizeScroll, { passive: true });

    // Initialisation
    handleViewportHeight();
    enableSmoothScroll();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleViewportHeight);
      window.removeEventListener('orientationchange', handleViewportHeight);
      document.removeEventListener('touchend', preventDoubleTapZoom);
      document.removeEventListener('touchstart', preventPullToRefresh);
      window.removeEventListener('scroll', optimizeScroll);
    };
  }, []);

  return null; // Ce composant n'affiche rien
};

export default MobileOptimizations;
