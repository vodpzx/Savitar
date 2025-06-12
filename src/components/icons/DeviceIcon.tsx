import React from 'react';
import { Monitor, Smartphone, Laptop, Apple, Chrome } from 'lucide-react';
import { cn } from '../../utils/cn';

type DeviceType = 'windows' | 'ios' | 'android';

interface DeviceIconProps {
  type: DeviceType;
  className?: string;
}

export function DeviceIcon({ type, className }: DeviceIconProps) {
  const iconClass = "w-5 h-5 transition-transform duration-300 group-hover:scale-110";
  const smallIconClass = "w-3 h-3 absolute -bottom-1 -right-1";
  
  switch (type) {
    case 'windows':
      return (
        <div className={cn("relative group", className)}>
          <Monitor className={cn(iconClass, "text-blue-400")} />
          <Laptop className={cn(iconClass, "absolute top-0 left-0 opacity-0 group-hover:opacity-100")} />
        </div>
      );
    case 'ios':
      return (
        <div className={cn("relative group", className)}>
          <Smartphone className={cn(iconClass, "text-gray-200")} />
          <Apple className={cn(smallIconClass, "text-gray-300")} />
        </div>
      );
    case 'android':
      return (
        <div className={cn("relative group", className)}>
          <Smartphone className={cn(iconClass, "text-green-400")} />
          <Chrome className={cn(smallIconClass, "text-green-500")} />
        </div>
      );
    default:
      return null;
  }
}