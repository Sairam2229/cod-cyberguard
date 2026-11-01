import React, { useState } from 'react';
import { 
  ShieldCheck, Lock, Phone, User, Mail, CheckCircle2, ArrowRight, 
  AlertTriangle, Scale, Zap, ShieldAlert, Sparkles, Building
} from 'lucide-react';

export default function AuthLandingScreen({ onLogin }) {
  const [mode, setMode] = useState('phone'); // 'phone' | 'otp'
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    otp: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (!formData.phone || formData.phone.length < 10) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setMode('otp');
    }, 500);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLogin({
        id: 'USER-' + Math.floor(100000 + Math.random() * 900000),
        name: formData.name || 'Victim Reporter (' + formData.phone.slice(-4) + ')',
        phone: formData.phone,
        email: formData.email || 'reporter@cyberguard.org',
        authenticated: true
      });
    }, 500);
  };

  const handleGuestAccess = () => {
    onLogin({
      id: 'GUEST-' + Math.floor(1000 + Math.random() * 9000),
      name: 'Anonymous Victim / Guest',
      phone: '+91 99999 00000',
      email: 'guest@cyberguard.org',
      authenticated: true,
      isGuest: true
    });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem 1.25rem' }}>
      {/* Background Matrix Effect Overlay */}
      <div className="cyber-matrix-bg"></div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
        {/* Top Header Identity */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.85rem' }}>
            <span className="badge badge-cyber" style={{ fontSize: '0.82rem', padding: '0.4rem 1rem' }}>
              <ShieldCheck size={14} /> National Cyber Protection Portal
            </span>
            <span className="badge badge-emerald" style={{ fontSize: '0.82rem', padding: '0.4rem 1rem' }}>
              Cybercell 1930 & NCH 1915 Initiative
            </span>
          </div>

          <h1 style={{ fontSize: '2.6rem', fontWeight: 800, marginBottom: '0.5rem', lineHeight: 1.2 }}>
            COD <span className="text-gradient">CyberGuard</span> Portal
          </h1>

          <p style={{ color: '#94a3b8', fontSize: '1.05rem', maxWidth: '680px', margin: '0 auto' }}>
            Official Anti-Cash-On-Delivery Courier Scam & Fraud Reporting Platform. Sign in to access your digital evidence locker & legal notice generator.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'center' }}>
          
          {/* LEFT PANEL: Sign In Card */}
          <div className="glass-panel" style={{ padding: '2.25rem', borderColor: 'rgba(0, 242, 254, 0.35)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #00f2fe 0%, #00b4db 100%)',
                color: '#050811',
                display: 'flex',
                alignItems: 'center',
                justify: 'center',
                boxShadow: '0 0 20px rgba(0, 242, 254, 0.4)'
              }}>
                <Lock size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem' }}>Victim Sign In / Register</h3>
                <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Secure Authentication Required</p>
              </div>
            </div>

            {mode === 'phone' ? (
              <form onSubmit={handleSendOtp}>
                <div className="form-group">
                  <label className="form-label">Full Name (Complainant Name)</label>
                  <div style={{ position: 'relative' }}>
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="e.g. Sairam P." 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{ paddingLeft: '2.5rem' }}
                    />
                    <User size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Mobile Number (For Cybercell OTP & Filing) *</label>
                  <div style={{ position: 'relative' }}>
                    <input 
                      type="tel" 
                      className="form-control" 
                      placeholder="e.g. 9876543210" 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      style={{ paddingLeft: '2.5rem' }}
                    />
                    <Phone size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address (Optional)</label>
                  <div style={{ position: 'relative' }}>
                    <input 
                      type="email" 
                      className="form-control" 
                      placeholder="e.g. sairam@example.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{ paddingLeft: '2.5rem' }}
                    />
                    <Mail size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  disabled={loading}
                  style={{ width: '100%', padding: '0.9rem', fontSize: '1rem', marginTop: '0.5rem' }}
                >
                  {loading ? 'Securing Authentication...' : 'Sign In & Access Features'}
                  <ArrowRight size={18} />
                </button>
              </form>
            ) : (
              <form onSubmit={handleVerifyOtp}>
                <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
                  <div className="badge badge-emerald" style={{ marginBottom: '0.5rem' }}>
                    OTP Sent to +91 {formData.phone}
                  </div>
                  <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                    Enter verification code below (Test Code: <strong>123456</strong>)
                  </p>
                </div>

                <div className="form-group">
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter 6-digit OTP" 
                    maxLength={6}
                    value={formData.otp}
                    onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                    style={{ textAlign: 'center', fontSize: '1.4rem', letterSpacing: '0.3em', fontWeight: 700 }}
                    required
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn btn-emerald" 
                  disabled={loading}
                  style={{ width: '100%', padding: '0.9rem', fontSize: '1rem', marginTop: '0.5rem' }}
                >
                  {loading ? 'Authenticating...' : 'Verify OTP & Unlock Features'}
                  <CheckCircle2 size={18} />
                </button>

                <button 
                  type="button" 
                  onClick={() => setMode('phone')}
                  style={{ width: '100%', background: 'none', border: 'none', color: '#64748b', fontSize: '0.82rem', marginTop: '0.75rem', cursor: 'pointer' }}
                >
                  Change Mobile Number
                </button>
              </form>
            )}

            <div style={{ display: 'flex', alignItems: 'center', margin: '1.5rem 0', gap: '1rem' }}>
              <div style={{ flex: 1, height: '1px', background: 'rgba(255, 255, 255, 0.08)' }}></div>
              <span style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase' }}>Or Emergency Filing</span>
              <div style={{ flex: 1, height: '1px', background: 'rgba(255, 255, 255, 0.08)' }}></div>
            </div>

            <button 
              onClick={handleGuestAccess}
              className="btn btn-secondary"
              style={{ width: '100%', padding: '0.8rem', fontSize: '0.9rem' }}
            >
              <Zap size={16} style={{ color: '#ffab00' }} />
              <span>Continue as Anonymous Guest (Instant Access)</span>
            </button>
          </div>

          {/* RIGHT PANEL: Features Showcase */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div className="glass-panel" style={{ padding: '1.5rem', background: 'rgba(0, 230, 118, 0.04)', borderColor: 'rgba(0, 230, 118, 0.25)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                <Scale size={28} style={{ color: '#00e676', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: '#ffffff', marginBottom: '0.2rem' }}>
                    Zero Minimum Fraud Amount Limit
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.5 }}>
                    Under Indian Consumer Protection Act & Cyber Helpline 1930, you can file a complaint even for ₹10 or ₹500. Aggregating complaints freezes scammer merchant accounts!
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-panel" style={{ padding: '1.5rem', background: 'rgba(0, 242, 254, 0.04)', borderColor: 'rgba(0, 242, 254, 0.25)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                <ShieldAlert size={28} style={{ color: '#00f2fe', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: '#ffffff', marginBottom: '0.2rem' }}>
                    DTDC & Courier Merchant Payout Freeze Notice
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.5 }}>
                    Generate 1-click legal demands to DTDC, Delhivery, and BlueDart fraud desks to withhold Cash-on-Delivery settlements to fraudulent shippers.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-panel" style={{ padding: '1.5rem', background: 'rgba(255, 171, 0, 0.04)', borderColor: 'rgba(255, 171, 0, 0.25)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                <Building size={28} style={{ color: '#ffab00', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: '#ffffff', marginBottom: '0.2rem' }}>
                    Amazon & Flipkart Trust Verifier
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.5 }}>
                    Instantly verify genuine platforms (Amazon / Flipkart) vs high-risk suspicious fraud stores before making payments.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
