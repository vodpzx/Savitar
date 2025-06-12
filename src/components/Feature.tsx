import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function Feature({ title, description, icon: Icon }: FeatureProps) {
  return (
    <div className="p-6 bg-navy-800/50 rounded-xl backdrop-blur-sm">
      <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-indigo-400" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}