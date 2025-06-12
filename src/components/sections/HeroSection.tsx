import React, { ReactNode } from 'react';
import { FadeIn } from '../animations/FadeIn';
import { FloatingElement } from '../animations/FloatingElement';
import { DeviceList } from '../DeviceList';

interface HeroSectionProps {
  actionButtons: ReactNode;
}

export function HeroSection({ actionButtons }: HeroSectionProps) {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn delay={300}>
          <FloatingElement>
            <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Enqro
            </h1>
          </FloatingElement>
        </FadeIn>
        
        <FadeIn delay={600}>
          <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Advanced Roblox Executor with 87% Undetected Rate
          </p>
        </FadeIn>

        <FadeIn delay={900}>
          {actionButtons}
        </FadeIn>

        <FadeIn delay={1200}>
          <DeviceList />
        </FadeIn>
      </div>
    </section>
  );
}