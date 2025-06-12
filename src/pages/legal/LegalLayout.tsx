import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { FadeIn } from '../../components/animations/FadeIn';

interface LegalLayoutProps {
  children: ReactNode;
  title: string;
}

export function LegalLayout({ children, title }: LegalLayoutProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" />
            Back
          </button>

          <div className="bg-navy-800/30 rounded-2xl p-8 backdrop-blur-sm border border-white/5">
            <h1 className="text-3xl font-bold mb-8">{title}</h1>
            {children}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}