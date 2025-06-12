import React from 'react';

export function Background() {
  return (
    <>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/95 to-navy-950" />
      <div className="absolute inset-0 bg-grid-white/[0.02]" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='white' d='M0 0h32v32H0z' fill-opacity='0.05'/%3E%3C/svg%3E")`,
        maskImage: 'linear-gradient(to bottom, transparent, black)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black)'
      }} />
    </>
  );
}