import React from 'react';
import { Calendar } from 'lucide-react';
import { ChangelogEntry } from '../../types/changelog';
import { ChangeEntry } from './ChangeEntry';

interface VersionEntryProps {
  entry: ChangelogEntry;
}

export function VersionEntry({ entry }: VersionEntryProps) {
  return (
    <div className="relative pl-4 border-l-2 border-indigo-500/30">
      <div className="flex items-center gap-4 mb-4">
        <h2 className="text-xl font-semibold">Version {entry.version}</h2>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Calendar className="w-4 h-4" />
          {entry.date}
        </div>
      </div>

      <div className="space-y-3">
        {entry.changes.map((change, index) => (
          <ChangeEntry key={index} change={change} />
        ))}
      </div>
    </div>
  );
}