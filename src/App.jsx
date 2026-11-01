import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import AuthLandingScreen from './components/AuthLandingScreen.jsx';
import AuthModal from './components/AuthModal.jsx';
import LegalRightsBanner from './components/LegalRightsBanner.jsx';
import ScamReportForm from './components/ScamReportForm.jsx';
import DeliveryWizard from './components/DeliveryWizard.jsx';
import ScamAnalyzer from './components/ScamAnalyzer.jsx';
import CommunityFeed from './components/CommunityFeed.jsx';
import CourierDirectory from './components/CourierDirectory.jsx';
import MLArchitecture from './components/MLArchitecture.jsx';
import { ShieldCheck, Phone, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('report'); // 'report' | 'ml_engine' | 'wizard' | 'analyzer' | 'feed' | 'directory'
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  // Require Sign In landing page FIRST if user is not authenticated
  if (!user) {
    return <AuthLandingScreen onLogin={handleLogin} />;
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Background Hacking Matrix Grid */}
      <div className="cyber-matrix-bg"></div>

      {/* Header Navigation */}
      <Navbar 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        user={user}
        onOpenAuth={() => setIsAuthModalOpen(true)}
        onLogout={handleLogout}
      />

      {/* Main Content Area */}
      <main style={{ flex: 1, maxWidth: '1280px', width: '100%', margin: '0 auto', padding: '1.5rem 1.25rem' }}>
        {/* Core Guarantee Banner */}
        <LegalRightsBanner />

        {/* Tab Switcher Body */}
        {activeTab === 'report' && (
          <ScamReportForm 
            user={user} 
            onOpenAuth={() => setIsAuthModalOpen(true)} 
          />
        )}

        {activeTab === 'ml_engine' && (
          <MLArchitecture />
        )}

        {activeTab === 'wizard' && (
          <DeliveryWizard />
        )}

        {activeTab === 'analyzer' && (
          <ScamAnalyzer />
        )}

        {activeTab === 'feed' && (
          <CommunityFeed 
            onSelectReport={(report) => {
              setActiveTab('analyzer');
            }}
          />
        )}

        {activeTab === 'directory' && (
          <CourierDirectory />
        )}
      </main>

      {/* Auth Modal for Switching User */}
      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLogin={handleLogin}
      />

      {/* Footer */}
      <footer style={{
        marginTop: '3rem',
        background: 'rgba(5, 8, 15, 0.95)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '2rem 1.25rem',
        fontSize: '0.85rem',
        color: '#64748b'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.25rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ffffff', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.3rem' }}>
              <ShieldCheck size={20} style={{ color: '#00f2fe' }} /> COD CyberGuard Initiative
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.8rem' }}>
              Protecting citizens against Cash-on-Delivery logistics scams & fake shopping portals. Powered by Machine Learning.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#00f2fe' }}>
              <Phone size={15} /> Cyber Helpline: <strong>1930</strong>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#00e676' }}>
              <CheckCircle2 size={15} /> Consumer Helpline: <strong>1915</strong>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
