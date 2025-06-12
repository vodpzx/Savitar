import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';
import { DownloadButton } from './DownloadButton';
import { DeviceList } from './DeviceList';
import { Features } from './sections/Features';
import { ScriptLibrary } from './sections/ScriptLibrary';
import { Testimonials } from './sections/Testimonials';
import { HeroSection } from './sections/HeroSection';
import { scrollToElement } from '../utils/scrolling';

export function HomePage() {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    scrollToElement('features');
  };

  return (
    <>
      <HeroSection 
        actionButtons={
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <DownloadButton />
            <Button variant="secondary" onClick={handleLearnMore}>
              Learn More
            </Button>
          </div>
        }
      />

      <Features />
      <ScriptLibrary />
      <Testimonials />
    </>
  );
}