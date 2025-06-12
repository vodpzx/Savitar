import React from 'react';
import { Shield, Zap, Bug, Sparkles } from 'lucide-react';
import { ChangeType } from '../../types/changelog';

export function ChangeTypeIcon({ type }: { type: ChangeType }) {
  switch (type) {
    case 'feature':
      return <Sparkles className="w-4 h-4 text-purple-400" />;
    case 'security':
      return <Shield className="w-4 h-4 text-green-400" />;
    case 'performance':
      return <Zap className="w-4 h-4 text-yellow-400" />;
    case 'fix':
      return <Bug className="w-4 h-4 text-red-400" />;
    case 'improvement':
      return <Sparkles className="w-4 h-4 text-blue-400" />;
  }
}