import React from 'react';
import { Change } from '../../types/changelog';
import { ChangeTypeIcon } from './ChangeTypeIcon';

interface ChangeEntryProps {
  change: Change;
}

export function ChangeEntry({ change }: ChangeEntryProps) {
  return (
    <div className="flex items-start gap-3 p-3 bg-navy-900/50 rounded-lg">
      <ChangeTypeIcon type={change.type} />
      <div>
        <span className="text-sm font-medium capitalize text-gray-400">
          {change.type}
        </span>
        <p className="text-gray-300">{change.description}</p>
      </div>
    </div>
  );
}