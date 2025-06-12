import React from 'react';
import { X } from 'lucide-react';
import { NavLinks } from './NavLinks';
import { cn } from '../utils/cn';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div
        className={cn(
          "fixed right-0 top-0 h-full w-3/4 bg-navy-900/95 p-6 shadow-xl z-50 md:hidden",
          "transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-end mb-8">
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-gray-400" />
          </button>
        </div>

        <div className="flex flex-col space-y-2">
          <NavLinks className="flex-col space-y-2" />
        </div>
      </div>
    </>
  );
}