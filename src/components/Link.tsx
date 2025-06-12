import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export function Link({ href, children, icon }: LinkProps) {
  return (
    <a
      href={href}
      className="text-gray-300 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all duration-200"
    >
      {icon}
      {children}
    </a>
  );
}