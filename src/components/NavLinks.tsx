import React from 'react';
import { Home, Monitor, Smartphone, Apple, Chrome } from 'lucide-react';
import { cn } from '../utils/cn';
import { NavLink } from './NavLink';

interface NavLinksProps {
  className?: string;
}

export function NavLinks({ className }: NavLinksProps) {
  return (
    <div className={cn('flex items-center space-x-1', className)}>
      <NavLink to="/" icon={<Home size={18} />}>
        Home
      </NavLink>
      <NavLink to="/download/windows" icon={<Monitor size={18} className="text-blue-400" />}>
        Windows
      </NavLink>
      <NavLink to="/download/ios" icon={
        <div className="relative">
          <Smartphone size={18} className="text-gray-200" />
          <Apple size={12} className="absolute -bottom-1 -right-1 text-gray-300" />
        </div>
      }>
        iOS
      </NavLink>
      <NavLink to="/download/android" icon={
        <div className="relative">
          <Smartphone size={18} className="text-green-400" />
          <Chrome size={12} className="absolute -bottom-1 -right-1 text-green-500" />
        </div>
      }>
        Android
      </NavLink>
    </div>
  );
}