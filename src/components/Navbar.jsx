import React from 'react';
import { ShieldCheck, Lock, UserCheck, AlertTriangle, FileText, CheckCircle2, User, LogOut, Cpu } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, user, onOpenAuth, onLogout }) {
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100 }}>
      {/* Official Cyber Collaboration Bar */}
      <div style={{
        background: 'linear-gradient(90deg, #070b16 0%, #111a30 50%, #070b16 100%)',
        borderBottom: '1px solid rgba(0, 242, 254, 0.25)',
        padding: '0.4rem 1rem',
        fontSize: '0.8rem',
        color: '#94a3b8'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span className="badge badge-cyber" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
              <ShieldCheck size={13} /> Official Cyber Initiative
            </span>
            <span style={{ color: '#e2e8f0', fontWeight: 500 }}>
              Cyber Crime Helpline <strong style={{ color: '#00f2fe' }}>1930</strong> & NCH <strong style={{ color: '#00e676' }}>1915</strong> Integration
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.78rem' }}>
            <span style={{ color: '#00e676', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
              <Cpu size={13} /> Random Forest Engine Active
            </span>
            <span style={{ color: '#ffab00', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
              <AlertTriangle size={13} /> Anti-COD Taskforce
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="glass-panel" style={{
        borderRadius: 0,
        borderLeft: 'none',
        borderRight: 'none',
        borderTop: 'none',
        background: 'rgba(5, 8, 17, 0.92)'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0.85rem 1.25rem',
          display: 'flex',
          alignItems: 'center',
          justify: 'space-between',
          gap: '1rem'
        }}>
          {/* Logo */}
          <div 
            onClick={() => setActiveTab('report')}
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}
          >
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #00f2fe 0%, #3a7bd5 100%)',
              display: 'flex',
              alignItems: 'center',
              justify: 'center',
              boxShadow: '0 0 20px rgba(0, 242, 254, 0.4)',
              color: '#050811'
            }}>
              <ShieldCheck size={26} strokeWidth={2.4} />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.25rem', lineHeight: 1.1 }}>
                COD<span style={{ color: '#00f2fe' }}>CyberGuard</span> <span style={{ fontSize: '0.7rem', verticalAlign: 'super', color: '#00e676', background: 'rgba(0,230,118,0.15)', padding: '2px 6px', borderRadius: '4px', border: '1px solid rgba(0,230,118,0.3)' }}>v2.4</span>
              </div>
              <div style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Advanced Scam Defense Platform
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', flexWrap: 'wrap' }}>
            {[
              { id: 'report', label: 'File Cyber Report', icon: FileText, highlight: true },
              { id: 'ml_engine', label: 'Model Hub', icon: Cpu, isMl: true },
              { id: 'wizard', label: 'Doorstep Safeguard', icon: ShieldCheck },
              { id: 'analyzer', label: 'Risk Classifier', icon: AlertTriangle },
              { id: 'feed', label: 'Community Feed', icon: UserCheck },
              { id: 'directory', label: 'Courier Nodal Directory', icon: Lock }
            ].map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.55rem 0.85rem',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? '#00f2fe' : item.isMl ? '#00e676' : item.highlight ? '#ffffff' : '#94a3b8',
                    background: isActive 
                      ? 'rgba(0, 242, 254, 0.14)' 
                      : item.isMl ? 'rgba(0, 230, 118, 0.08)' : item.highlight ? 'rgba(0, 242, 254, 0.06)' : 'transparent',
                    border: isActive 
                      ? '1px solid rgba(0, 242, 254, 0.4)' 
                      : item.isMl ? '1px solid rgba(0, 230, 118, 0.25)' : '1px solid transparent',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <Icon size={15} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* User Auth Action */}
          <div>
            {user ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div className="badge badge-emerald" style={{ padding: '0.4rem 0.75rem', textTransform: 'none' }}>
                  <User size={14} />
                  <span>{user.name || user.phone || 'Verified User'}</span>
                </div>
                <button 
                  onClick={onLogout}
                  className="btn btn-secondary"
                  title="Sign Out"
                  style={{ padding: '0.45rem 0.65rem' }}
                >
                  <LogOut size={16} />
                </button>
              </div>
            ) : (
              <button 
                onClick={onOpenAuth}
                className="btn btn-primary"
                style={{ padding: '0.55rem 1.1rem', fontSize: '0.88rem' }}
              >
                <User size={16} />
                <span>Sign In / Register</span>
              </button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
