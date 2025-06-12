import React from 'react';
import { DeviceIcon } from './icons/DeviceIcon';
import { FadeIn } from './animations/FadeIn';

export function DeviceList() {
  const devices = [
    { type: 'windows' as const, label: 'Windows' },
    { type: 'ios' as const, label: 'iOS' },
    { type: 'android' as const, label: 'Android' }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
      {devices.map((device, index) => (
        <FadeIn key={device.type} delay={index * 200}>
          <span className="flex items-center px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300">
            <DeviceIcon type={device.type} className="mr-2" />
            {device.label}
          </span>
        </FadeIn>
      ))}
    </div>
  );
}