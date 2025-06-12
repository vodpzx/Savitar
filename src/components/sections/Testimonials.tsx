import React from 'react';
import { Star, User } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

export function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "xWinne0x",
      role: "User",
      content: "Best executor I've used. The undetected rate is good ngl",
      rating: 5
    },
    {
      name: "Clix",
      role: "Developer",
      content: "The script hub that was built in is really good.",
      rating: 5
    },
    {
      name: "Mixos",
      role: "Content Creator",
      content: "Regular updates is a lie but still good and undetected.",
      rating: 3
    }
  ];

  return (
    <section className="py-24">
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <FadeIn key={testimonial.name} delay={index * 200}>
            <div className="bg-navy-800/30 rounded-2xl p-6 relative backdrop-blur-sm border border-white/5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center">
                  <User className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-400">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-600'}`}
                    fill={i < testimonial.rating ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
              <p className="text-gray-300 text-sm">{testimonial.content}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}