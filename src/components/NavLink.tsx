import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../utils/cn';

interface NavLinkProps {
  to: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function NavLink({ to, icon, children, className }: NavLinkProps) {
  return (
    <Link
      to={to}
      className={cn(
        "text-gray-300 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg",
        "text-sm font-medium flex items-center gap-2 transition-all duration-200",
        className
      )}
    >
      {icon}
      {children}
    </Link>
  );
}