import React from 'react';
import { BookOpen, Star, Clock } from 'lucide-react';
import type { Script } from '../../data/scripts';

interface ScriptCardProps {
  script: Script;
  onClick: () => void;
}

export function ScriptCard({ script, onClick }: ScriptCardProps) {
  return (
    <div 
      onClick={onClick}
      className="flex items-center justify-between p-4 bg-navy-800/50 rounded-lg hover:bg-navy-800/70 transition-all duration-300 cursor-pointer transform hover:scale-[1.02] hover:shadow-xl"
    >
      <div className="flex items-center gap-3">
        <BookOpen className="w-5 h-5 text-indigo-400" />
        <span>{script.name}</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-400" />
          <span className="text-sm">{script.rating}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4 text-gray-400" />
          <span className="text-sm">{script.downloads}</span>
        </div>
      </div>
    </div>
  );
}