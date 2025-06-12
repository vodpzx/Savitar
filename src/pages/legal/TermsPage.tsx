import React from 'react';
import { LegalLayout } from './LegalLayout';

export function TermsPage() {
  return (
    <LegalLayout title="Terms of Service">
      <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
      <p className="mb-6 text-gray-300">
        By using Enqro, you agree to these terms of service and all applicable laws and regulations.
      </p>

      <h2 className="text-xl font-semibold mb-4">2. Use License</h2>
      <p className="mb-6 text-gray-300">
        Enqro grants you a personal, non-transferable license to use the software for its intended purpose.
      </p>

      <h2 className="text-xl font-semibold mb-4">3. Limitations</h2>
      <p className="mb-6 text-gray-300">
        You may not modify, distribute, or create derivative works based on Enqro without explicit permission.
      </p>

      <h2 className="text-xl font-semibold mb-4">4. Termination</h2>
      <p className="text-gray-300">
        We reserve the right to terminate or suspend access to Enqro without prior notice for violations of these terms.
      </p>
    </LegalLayout>
  );
}