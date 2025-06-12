import React from 'react';
import { FadeIn } from '../animations/FadeIn';
import { FeatureGrid } from './FeatureGrid';

export function Features() {
  return (
    <section id="features" className="py-24 bg-navy-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Enqro?</h2>
          <FeatureGrid />
        </FadeIn>
      </div>
    </section>
  );
}