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
    const preventDoubleTapZoom = (event: TouchEvent) => {
      const now = (new Date()).getTime();
      if (now - lastTouchEnd <= 300) {
        event.preventDefault();
      }
      lastTouchEnd = now;
    };

    // Smooth scroll pour iOS
    const enableSmoothScroll = () => {
      document.documentElement.style.scrollBehavior = 'smooth';
      // Propriété webkit omise car non standard en TypeScript
    };

    // Prévenir le pull-to-refresh sur mobile - DÉSACTIVÉ car peut bloquer le scroll
    // const preventPullToRefresh = (e: TouchEvent) => {
    //   if (e.touches.length !== 1) return;
    //   const touch = e.touches[0];
    //   if (touch.clientY > 20 && window.scrollY === 0) {
    //     e.preventDefault();
    //   }
    // };

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
    // document.addEventListener('touchstart', preventPullToRefresh, { passive: false }); // DÉSACTIVÉ
    window.addEventListener('scroll', optimizeScroll, true);

    // Initialisation
    handleViewportHeight();
    enableSmoothScroll();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleViewportHeight);
      window.removeEventListener('orientationchange', handleViewportHeight);
      document.removeEventListener('touchend', preventDoubleTapZoom, false);
      // document.removeEventListener('touchstart', preventPullToRefresh, { passive: false }); // DÉSACTIVÉ
      window.removeEventListener('scroll', optimizeScroll, true);
    };
  }, []);

  return null; // Ce composant n'affiche rien
};

export default MobileOptimizations;
