'use client';

import Link from 'next/link';
import { useState } from 'react';
import { NavAnimation, AnimatedButton } from './animations';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavAnimation>
      <nav className="bg-background border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-foreground hover:text-blue-600 transition-colors">
                Portfolio
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className="text-foreground hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Accueil
                </Link>
                <Link
                  href="/about"
                  className="text-foreground hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  À propos
                </Link>
                <Link
                  href="/projects"
                  className="text-foreground hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Projets
                </Link>
                <Link
                  href="/contact"
                  className="text-foreground hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <AnimatedButton
                onClick={toggleMenu}
                className="text-foreground hover:text-blue-600 inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                <span className="sr-only">Ouvrir le menu</span>
                {!isMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </AnimatedButton>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-gray-200 dark:border-gray-700">
              <Link
                href="/"
                className="text-foreground hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link
                href="/about"
                className="text-foreground hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </Link>
              <Link
                href="/projects"
                className="text-foreground hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projets
              </Link>
              <Link
                href="/contact"
                className="text-foreground hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </NavAnimation>
  );
};

export default Navbar;
