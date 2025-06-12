export type DeviceType = 'windows' | 'ios' | 'android';

export const downloadLinks = {
  windows: 'https://example.com/downloads/enqro-windows.exe',
  ios: 'https://example.com/downloads/enqro-ios.ipa',
  android: 'https://example.com/downloads/enqro-android.apk'
};

export function detectDevice(): DeviceType {
  const userAgent = navigator.userAgent.toLowerCase();
  
  if (userAgent.includes('windows')) return 'windows';
  if (userAgent.includes('iphone') || userAgent.includes('ipad')) return 'ios';
  if (userAgent.includes('android')) return 'android';
  
  return 'windows'; // Default to Windows if unable to detect
}