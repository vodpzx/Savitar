import React from 'react';
import { cn } from '../../utils/cn';

interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
}

export function FloatingElement({ children, className, duration = 3 }: FloatingElementProps) {
  return (
    <div
      className={cn("animate-floating", className)}
      style={{ animationDuration: `${duration}s` }}
    >
      {children}
    </div>
  );
}