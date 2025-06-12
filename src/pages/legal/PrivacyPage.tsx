import React from 'react';
import { LegalLayout } from './LegalLayout';

export function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy">
      <h2 className="text-xl font-semibold mb-4">1. Information Collection</h2>
      <p className="mb-6 text-gray-300">
        We collect minimal information necessary for the operation of Enqro. This includes technical data such as device information and usage statistics.
      </p>

      <h2 className="text-xl font-semibold mb-4">2. Data Usage</h2>
      <p className="mb-6 text-gray-300">
        Collected data is used solely for improving Enqro's performance and user experience. We do not sell or share your data with third parties.
      </p>

      <h2 className="text-xl font-semibold mb-4">3. Security</h2>
      <p className="mb-6 text-gray-300">
        We implement industry-standard security measures to protect your data from unauthorized access or disclosure.
      </p>

      <h2 className="text-xl font-semibold mb-4">4. Updates</h2>
      <p className="text-gray-300">
        This privacy policy may be updated periodically. Users will be notified of any significant changes.
      </p>
    </LegalLayout>
  );
}