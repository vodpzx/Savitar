import React from 'react';
import { FadeIn } from '../components/animations/FadeIn';
import { VersionEntry } from '../components/changelog/VersionEntry';
import { changelog } from '../data/changelog';

export function ChangelogPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="bg-navy-800/30 rounded-2xl p-8 backdrop-blur-sm border border-white/5">
            <h1 className="text-3xl font-bold mb-8">Changelog</h1>
            <div className="space-y-12">
              {changelog.map((entry) => (
                <VersionEntry key={entry.version} entry={entry} />
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}