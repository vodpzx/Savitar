import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Copy, Check, Star, Download, Calendar, User } from 'lucide-react';
import { scripts } from '../data/scripts';
import { Button } from '../components/Button';
import { FadeIn } from '../components/animations/FadeIn';

export function ScriptDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const script = scripts.find(s => s.id === id);

  if (!script) {
    return null;
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(script.loadstring);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" />
            Back to Library
          </button>

          <div className="bg-navy-800/30 rounded-2xl p-8 backdrop-blur-sm border border-white/5">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold">{script.name}</h1>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-lg font-semibold">{script.rating}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-2 text-gray-400">
                <Download className="w-4 h-4" />
                {script.downloads} downloads
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <User className="w-4 h-4" />
                By {script.author}
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar className="w-4 h-4" />
                Updated {script.lastUpdated}
              </div>
            </div>

            <p className="text-gray-300 mb-8">{script.description}</p>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Features</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {script.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-300">
                    <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-navy-900 rounded-xl p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Loadstring</h2>
                <Button
                  onClick={handleCopy}
                  variant="secondary"
                  className="flex items-center gap-2"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy
                    </>
                  )}
                </Button>
              </div>
              <pre className="text-sm font-mono text-gray-300 overflow-x-auto p-4 bg-navy-950 rounded-lg">
                {script.loadstring}
              </pre>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}