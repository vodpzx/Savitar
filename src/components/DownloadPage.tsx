import React from 'react';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import { Monitor, Smartphone, Apple, Chrome } from 'lucide-react';
import { DownloadButton } from './DownloadButton';
import { FadeIn } from './animations/FadeIn';
import { DeviceType } from '../utils/deviceDetection';

function DeviceDownload() {
  const { device } = useParams<{ device: DeviceType }>();
  const deviceInfo = downloadOptions.find(opt => opt.type === device);

  if (!deviceInfo) {
    return <Navigate to="/download" replace />;
  }

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="bg-navy-800/30 rounded-2xl p-8 border border-white/5">
            <div className="mb-6">{deviceInfo.icon}</div>
            <h1 className="text-3xl font-bold mb-4">{deviceInfo.title}</h1>
            <p className="text-gray-400 mb-6">{deviceInfo.description}</p>
            
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4">System Requirements</h2>
              <ul className="space-y-2">
                {deviceInfo.requirements.map((req, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <span className="mr-2">•</span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4">Installation Instructions</h2>
              <ol className="space-y-2">
                {deviceInfo.instructions.map((instruction, i) => (
                  <li key={i} className="flex gap-2 text-gray-300">
                    <span>{i + 1}.</span>
                    {instruction}
                  </li>
                ))}
              </ol>
            </div>

            <DownloadButton deviceType={deviceInfo.type} className="w-full" />
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

const downloadOptions = [
  {
    type: 'windows',
    title: 'Download for Windows',
    description: 'Get the full-featured Windows version of Enqro',
    icon: <Monitor className="w-12 h-12 text-blue-400" />,
    requirements: [
      'Windows 10 or later',
      '4GB RAM minimum',
      'Administrator privileges',
      'DirectX 11 compatible graphics'
    ],
    instructions: [
      'Download the installer',
      'Run as administrator',
      'Follow installation wizard',
      'Launch Enqro from desktop shortcut'
    ]
  },
  {
    type: 'ios',
    title: 'Download for iOS',
    description: 'Install Enqro on your iPhone or iPad',
    icon: (
      <div className="relative">
        <Smartphone className="w-12 h-12 text-gray-200" />
        <Apple className="w-6 h-6 absolute -bottom-1 -right-1 text-gray-300" />
      </div>
    ),
    requirements: [
      'iOS 14.0 or later',
      'Jailbreak required',
      'Minimum 2GB free space',
      'Compatible with iPhone & iPad'
    ],
    instructions: [
      'Download IPA file',
      'Install via AltStore or similar',
      'Trust developer certificate',
      'Launch from home screen'
    ]
  },
  {
    type: 'android',
    title: 'Download for Android',
    description: 'Get Enqro on your Android device',
    icon: (
      <div className="relative">
        <Smartphone className="w-12 h-12 text-green-400" />
        <Chrome className="w-6 h-6 absolute -bottom-1 -right-1 text-green-500" />
      </div>
    ),
    requirements: [
      'Android 8.0 or later',
      'Root access recommended',
      'ARM64 processor',
      'Minimum 3GB RAM'
    ],
    instructions: [
      'Download APK file',
      'Enable unknown sources',
      'Install APK',
      'Grant required permissions'
    ]
  }
];

export function DownloadPage() {
  return (
    <Routes>
      <Route path=":device" element={<DeviceDownload />} />
      <Route path="/" element={<Navigate to="/download/windows" replace />} />
    </Routes>
  );
}