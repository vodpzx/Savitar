import React from 'react';
import { cn } from '../../utils/cn';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function FadeIn({ children, delay = 0, className }: FadeInProps) {
  return (
    <div
      className={cn(
        "animate-fade-in opacity-0",
        className
      )}
      style={{ 
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards' 
      }}
    >
      {children}
    </div>
  );
}