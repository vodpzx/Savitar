import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ScriptCard } from '../scripts/ScriptCard';
import { scripts } from '../../data/scripts';

export function ScriptLibrary() {
  const navigate = useNavigate();

  return (
    <section className="py-24">
      <div className="bg-navy-800/30 rounded-2xl p-8">
        <h3 className="text-2xl font-bold mb-6">Script Library</h3>
        <div className="grid gap-4">
          {scripts.map((script) => (
            <ScriptCard
              key={script.id}
              script={script}
              onClick={() => navigate(`/script/${script.id}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}