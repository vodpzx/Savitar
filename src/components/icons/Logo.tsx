import React from 'react';
import { Terminal, Shield, Zap } from 'lucide-react';

export function Logo() {
  return (
    <div className="relative w-8 h-8">
      <Terminal className="w-8 h-8 text-indigo-400 absolute" />
      <Shield className="w-4 h-4 text-purple-400 absolute bottom-0 right-0" />
      <Zap className="w-3 h-3 text-white absolute top-1 right-1" />
    </div>
  );
}