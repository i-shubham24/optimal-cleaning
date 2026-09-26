import React from 'react';

export function SparkleStar({ className = "", filled = false }) {
  const hasWidth = className.includes('w-');
  const hasHeight = className.includes('h-');
  const sizeClasses = `${hasWidth ? '' : 'w-5'} ${hasHeight ? '' : 'h-5'}`;

  return (
    <svg 
      className={`${sizeClasses} ${className}`} 
      viewBox="0 0 24 24" 
      fill={filled ? "currentColor" : "none"} 
      stroke="currentColor" 
      strokeWidth={filled ? "0" : "1.5"}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path 
        d="M12 2 C12 7.5, 7.5 12, 2 12 C7.5 12, 12 16.5, 12 22 C12 16.5, 16.5 12, 22 12 C16.5 12, 12 7.5, 12 2 Z" 
        strokeLinejoin="round" 
      />
    </svg>
  );
}

export function MiniSparkle({ className = "" }) {
  const hasWidth = className.includes('w-');
  const hasHeight = className.includes('h-');
  const sizeClasses = `${hasWidth ? '' : 'w-4'} ${hasHeight ? '' : 'h-4'}`;

  return (
    <svg 
      className={`${sizeClasses} ${className}`} 
      viewBox="0 0 16 16" 
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M8 0L9.5 6.5L16 8L9.5 9.5L8 16L6.5 9.5L0 8L6.5 6.5L8 0Z" />
    </svg>
  );
}

export function DotCluster({ className = "" }) {
  const hasWidth = className.includes('w-');
  const hasHeight = className.includes('h-');
  const sizeClasses = `${hasWidth ? '' : 'w-6'} ${hasHeight ? '' : 'h-6'}`;

  return (
    <svg 
      className={`${sizeClasses} ${className}`} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="4" cy="4" r="1.5" />
      <circle cx="12" cy="4" r="1.5" />
      <circle cx="20" cy="4" r="1.5" />
      <circle cx="4" cy="12" r="1.5" />
      <circle cx="12" cy="12" r="1.5" />
      <circle cx="20" cy="12" r="1.5" />
      <circle cx="4" cy="20" r="1.5" />
      <circle cx="12" cy="20" r="1.5" />
      <circle cx="20" cy="20" r="1.5" />
    </svg>
  );
}

export function CleaningSprayIcon({ className = "w-6 h-6", color = "currentColor" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 32 32" 
      fill="none" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M11 14 H21 L20 28 A2 2 0 0 1 18 30 H14 A2 2 0 0 1 12 28 Z" fill="currentColor" fillOpacity="0.08" />
      <path d="M14 9 V14 H18 V9" />
      <path d="M14 9 H22 L20 6 H14 Z" fill="currentColor" fillOpacity="0.2" />
      <path d="M11 6 H14" />
      <path d="M19 9 L22 13" />
      <circle cx="7" cy="5" r="1" fill="currentColor" />
      <circle cx="4" cy="8" r="1.2" fill="currentColor" />
      <circle cx="8" cy="9" r="1" fill="currentColor" />
    </svg>
  );
}

export function BubblesIcon({ className = "w-6 h-6", color = "currentColor" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 32 32" 
      fill="none" 
      stroke={color} 
      strokeWidth="1.8" 
      strokeLinecap="round"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="13" cy="18" r="9" fill="currentColor" fillOpacity="0.06" />
      <path d="M9 13 A5 5 0 0 1 15 11" strokeWidth="1.5" />
      <circle cx="23" cy="10" r="5" fill="currentColor" fillOpacity="0.06" />
      <path d="M21 7 A2.5 2.5 0 0 1 24 6" strokeWidth="1.2" />
      <circle cx="24" cy="22" r="3" fill="currentColor" fillOpacity="0.06" />
    </svg>
  );
}

export function SqueegeeIcon({ className = "w-6 h-6", color = "currentColor" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 32 32" 
      fill="none" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M6 8 L26 8" strokeWidth="3" />
      <path d="M16 8 L16 13 L13 15 L19 15 L16 13" />
      <path d="M16 15 L16 26" strokeWidth="2.5" />
      <line x1="8" y1="14" x2="11" y2="17" strokeWidth="1.5" strokeDasharray="1 3" />
      <line x1="21" y1="14" x2="24" y2="17" strokeWidth="1.5" strokeDasharray="1 3" />
    </svg>
  );
}

export function StarBurst({ className = "w-6 h-6", color = "currentColor" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 0L13.5 8.5L22 10L14.5 13.5L16 22L11 15L4 19L7.5 12L0 10.5L8.5 9L12 0Z" opacity="0.85" />
    </svg>
  );
}
