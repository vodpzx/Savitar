import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Background } from './components/Background';
import { HomePage } from './components/HomePage';
import { DownloadPage } from './components/DownloadPage';
import { ScriptDetailsPage } from './pages/ScriptDetailsPage';
import { StatusPage } from './pages/StatusPage';
import { ChangelogPage } from './pages/ChangelogPage';
import { PrivacyPage } from './pages/legal/PrivacyPage';
import { TermsPage } from './pages/legal/TermsPage';
import { LicensePage } from './pages/legal/LicensePage';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-navy-950 text-white relative">
      <Background />
      <div className="relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/download/*" element={<DownloadPage />} />
          <Route path="/script/:id" element={<ScriptDetailsPage />} />
          <Route path="/status" element={<StatusPage />} />
          <Route path="/changelog" element={<ChangelogPage />} />
          <Route path="/legal/privacy" element={<PrivacyPage />} />
          <Route path="/legal/terms" element={<TermsPage />} />
          <Route path="/legal/license" element={<LicensePage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}