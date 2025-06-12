import React from 'react';
import { Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';
import { detectDevice, DeviceType } from '../utils/deviceDetection';

interface DownloadButtonProps {
  deviceType?: DeviceType;
  className?: string;
}

export function DownloadButton({ deviceType, className }: DownloadButtonProps) {
  const navigate = useNavigate();

  const handleDownload = () => {
    const device = deviceType || detectDevice();
    navigate(`/download/${device}`);
  };

  return (
    <Button onClick={handleDownload} className={className}>
      <Download className="w-4 h-4 mr-2 inline animate-bounce" />
      Download Now
    </Button>
  );
}