import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { NavLinks } from './NavLinks';
import { MobileMenu } from './MobileMenu';
import { Logo } from './icons/Logo';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-6">
        <nav className="max-w-7xl mx-auto bg-navy-900/80 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg shadow-black/10">
          <div className="px-4 sm:px-6">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-2">
                <Logo />
                <span className="text-indigo-400 text-xl font-bold">Enqro</span>
              </div>
              <div className="hidden md:block">
                <NavLinks />
              </div>
              <button 
                className="md:hidden p-2 hover:bg-white/10 rounded-lg text-gray-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </nav>
      </div>
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
}