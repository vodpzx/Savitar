import React from 'react';
import { Heart } from 'lucide-react';
import { Logo } from './icons/Logo';
import { FooterSection } from './footer/FooterSection';
import { SocialLinks } from './footer/SocialLinks';

const footerLinks = {
  product: [
    { name: 'Download', href: '/download/windows' },
    { name: 'Features', href: '/#features' },
    { name: 'Script Library', href: '/#scripts' },
    { name: 'Status', href: '/status' },
    { name: 'Changelog', href: '/changelog' }
  ],
  legal: [
    { name: 'Privacy', href: '/legal/privacy' },
    { name: 'Terms', href: '/legal/terms' },
    { name: 'License', href: '/legal/license' }
  ]
};

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy-900/50 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Logo />
              <span className="text-xl font-bold text-indigo-400">Enqro</span>
            </div>
            <p className="text-sm text-gray-400 mb-6">
              Advanced Roblox Executor with industry-leading undetected rate.
              Join our community of over 50,000 users.
            </p>
            <SocialLinks />
          </div>
          
          {/* Navigation Sections */}
          <FooterSection title="Product" links={footerLinks.product} />
          <FooterSection title="Legal" links={footerLinks.legal} />
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-400">
            <span>© {currentYear} Enqro. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span>Made with <Heart className="w-4 h-4 text-red-400 inline mx-1" /> by the Enqro Team</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 px-3 py-1 bg-green-500/10 rounded-full">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-blue-400">All Systems Under Maintenance</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
