import React from 'react';
import { cn } from '../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  className, 
  children, 
  onClick,
  ...props 
}: ButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Add smooth transition effect
    if (onClick) {
      e.preventDefault();
      onClick(e);
    }
  };

  return (
    <button
      className={cn(
        'px-6 py-2 rounded-lg font-medium transition-all duration-300',
        variant === 'primary' 
          ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
          : 'bg-gray-800 text-gray-200 hover:bg-gray-700',
        className
      )}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
}