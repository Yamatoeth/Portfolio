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
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                Portfolio
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/projects"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Projects
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <AnimatedButton
                onClick={toggleMenu}
                className="text-gray-700 hover:text-blue-600 inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-transform duration-200"
                style={{
                  transform: isMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)'
                }}
              >
                <span className="sr-only">Open menu</span>
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
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-4 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 shadow-lg">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 block px-3 py-3 rounded-md text-base font-medium transition-all duration-200 active:scale-95"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="flex items-center">
                <span className="mr-2">🏠</span>
                Home
              </span>
            </Link>
            <Link
              href="/projects"
              className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 block px-3 py-3 rounded-md text-base font-medium transition-all duration-200 active:scale-95"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="flex items-center">
                <span className="mr-2">💼</span>
                Projects
              </span>
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 block px-3 py-3 rounded-md text-base font-medium transition-all duration-200 active:scale-95"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="flex items-center">
                <span className="mr-2">📧</span>
                Contact
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </NavAnimation>
  );
};

export default Navbar;
