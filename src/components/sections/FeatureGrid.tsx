import React from 'react';
import { Shield, Zap, Lock, Code, Cpu, BookOpen, HeartHandshake } from 'lucide-react';
import { Feature } from '../Feature';
import { FadeIn } from '../animations/FadeIn';

const features = [
  {
    icon: Shield,
    title: "Advanced Protection",
    description: "State-of-the-art anti-detection system with 87% success rate"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized execution engine for minimal performance impact"
  },
  {
    icon: Lock,
    title: "Secure Updates",
    description: "Automatic, encrypted updates to stay ahead of detection"
  },
  {
    icon: Code,
    title: "Debug Console",
    description: "Professional debugging tools for script development"
  },
  {
    icon: Cpu,
    title: "Memory Scanner",
    description: "Advanced memory manipulation and scanning capabilities"
  },
  {
    icon: BookOpen,
    title: "Script Library",
    description: "Access to premium, verified scripts and regular updates"
  },
  {
    icon: HeartHandshake,
    title: "24/7 Support",
    description: "Dedicated support team for technical assistance"
  }
];

export function FeatureGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <FadeIn key={feature.title} delay={index * 100}>
          <Feature {...feature} />
        </FadeIn>
      ))}
    </div>
  );
}