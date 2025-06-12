import React from 'react';
import { Link } from 'react-router-dom';

interface FooterLink {
  name: string;
  href: string;
}

interface FooterSectionProps {
  title: string;
  links: FooterLink[];
}

export function FooterSection({ title, links }: FooterSectionProps) {
  return (
    <div>
      <h3 className="font-semibold mb-4 text-white">{title}</h3>
      <ul className="space-y-2">
        {links.map(link => (
          <li key={link.name}>
            {link.href.startsWith('http') ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ) : (
              <Link
                to={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}