'use client';

import { useState, useRef, useEffect } from 'react';
import ProjectCard from './ProjectCard';

const MobileProjectSwiper = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef(null);
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    
    // Snap to nearest card
    const container = containerRef.current;
    const cardWidth = container.children[0]?.offsetWidth || 0;
    const newIndex = Math.round(container.scrollLeft / cardWidth);
    setCurrentIndex(Math.max(0, Math.min(newIndex, projects.length - 1)));
    
    // Smooth scroll to the snapped position
    container.scrollTo({
      left: newIndex * cardWidth,
      behavior: 'smooth'
    });
  };

  const scrollToIndex = (index) => {
    const container = containerRef.current;
    const cardWidth = container.children[0]?.offsetWidth || 0;
    container.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth'
    });
    setCurrentIndex(index);
  };

  return (
    <div className="block md:hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 px-4">
        <h3 className="text-lg font-semibold text-gray-900">
          {t('home.featuredTitle')}
        </h3>
        <span className="text-sm text-gray-500">
          {currentIndex + 1} / {projects.length}
        </span>
      </div>

      {/* Swiper Container */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="flex-none w-80 px-2 snap-center first:pl-4 last:pr-4"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-4">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? 'bg-blue-600 w-6'
                : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileProjectSwiper;
