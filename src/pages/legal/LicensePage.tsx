import React from 'react';
import { LegalLayout } from './LegalLayout';

export function LicensePage() {
  return (
    <LegalLayout title="License Agreement">
      <h2 className="text-xl font-semibold mb-4">1. Grant of License</h2>
      <p className="mb-6 text-gray-300">
        Subject to these terms, Enqro grants you a limited, non-exclusive license to use the software.
      </p>

      <h2 className="text-xl font-semibold mb-4">2. Restrictions</h2>
      <p className="mb-6 text-gray-300">
        You may not reverse engineer, decompile, or attempt to extract the source code of Enqro.
      </p>

      <h2 className="text-xl font-semibold mb-4">3. Updates</h2>
      <p className="mb-6 text-gray-300">
        Enqro may automatically download and install updates. These updates are part of the software and subject to this license.
      </p>

      <h2 className="text-xl font-semibold mb-4">4. Ownership</h2>
      <p className="text-gray-300">
        All rights, title, and interest in Enqro remain with us. This license does not grant you any rights to patents, copyrights, or other intellectual property.
      </p>
    </LegalLayout>
  );
}