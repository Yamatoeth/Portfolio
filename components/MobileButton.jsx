'use client';

import { useState } from 'react';

const MobileButton = ({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary',
  disabled = false,
  ...props 
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const baseClasses = "relative inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 active:scale-95 select-none";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800",
    secondary: "border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 active:bg-blue-100 dark:active:bg-blue-900/30",
    ghost: "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 active:bg-gray-100 dark:active:bg-gray-700"
  };

  const sizeClasses = "px-6 py-3 text-sm sm:text-base";
  
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer";

  const handleTouchStart = () => {
    if (!disabled) {
      setIsPressed(true);
    }
  };

  const handleTouchEnd = () => {
    setIsPressed(false);
  };

  const handleClick = (e) => {
    if (!disabled && onClick) {
      // Haptic feedback sur les appareils compatibles
      if (navigator.vibrate) {
        navigator.vibrate(10);
      }
      onClick(e);
    }
  };

  return (
    <button
      className={`
        ${baseClasses}
        ${variants[variant]}
        ${sizeClasses}
        ${disabledClasses}
        ${isPressed ? 'scale-95' : ''}
        ${className}
      `}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseLeave={handleTouchEnd}
      onClick={handleClick}
      disabled={disabled}
      {...props}
    >
      {/* Ripple effect overlay */}
      <span className="absolute inset-0 rounded-lg overflow-hidden">
        <span 
          className={`absolute inset-0 bg-white/20 rounded-lg transform transition-transform duration-200 ${
            isPressed ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}
        />
      </span>
      
      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};

export default MobileButton;
