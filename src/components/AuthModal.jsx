import React, { useState } from 'react';
import { X, ShieldCheck, Lock, Phone, Mail, User, CheckCircle2, ArrowRight, Zap } from 'lucide-react';

export default function AuthModal({ isOpen, onClose, onLogin }) {
  const [mode, setMode] = useState('phone'); // 'phone' | 'otp' | 'guest'
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    otp: ''
  });
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (!formData.phone || formData.phone.length < 10) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOtpSent(true);
      setMode('otp');
    }, 600);
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
        city: formData.city || 'Hyderabad / Local City',
        authenticated: true
      });
      onClose();
    }, 600);
  };

  const handleGuestLogin = () => {
    onLogin({
      id: 'GUEST-' + Math.floor(1000 + Math.random() * 9000),
      name: 'Anonymous Victim / Guest',
      phone: '+91 99999 00000',
      email: 'guest@cyberguard.org',
      city: 'India',
      authenticated: false,
      isGuest: true
    });
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'rgba(0, 242, 254, 0.12)',
              color: '#00f2fe',
              display: 'flex',
              alignItems: 'center',
              justify: 'center'
            }}>
              <ShieldCheck size={22} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem' }}>Victim Authentication</h3>
              <p style={{ fontSize: '0.78rem', color: '#94a3b8' }}>Secure Login for Cybercell & Courier Escalation</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#64748b',
              cursor: 'pointer',
              padding: '0.2rem'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Info Banner */}
        <div className="glass-card" style={{ background: 'rgba(0, 242, 254, 0.04)', borderColor: 'rgba(0, 242, 254, 0.15)', marginBottom: '1.5rem' }}>
          <div style={{ fontSize: '0.82rem', color: '#e2e8f0', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
            <Lock size={16} style={{ color: '#00f2fe', flexShrink: 0, marginTop: '2px' }} />
            <span>
              Signing in binds your digital evidence locker & unboxing proofs to an official Cybercrime Case ID.
            </span>
          </div>
        </div>

        {mode === 'phone' && (
          <form onSubmit={handleSendOtp}>
            <div className="form-group">
              <label className="form-label">Full Name (Victim / Complainant)</label>
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
              <label className="form-label">Mobile Number (For Cybercell OTP & Case Updates) *</label>
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
              <label className="form-label">Email Address (For Courier Nodal Notice Copy)</label>
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
              style={{ width: '100%', padding: '0.85rem', marginTop: '0.5rem' }}
            >
              {loading ? 'Generating Security OTP...' : 'Send Secure OTP'}
              <ArrowRight size={16} />
            </button>
          </form>
        )}

        {mode === 'otp' && (
          <form onSubmit={handleVerifyOtp}>
            <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
              <div className="badge badge-emerald" style={{ marginBottom: '0.5rem' }}>
                OTP Sent to +91 {formData.phone}
              </div>
              <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                Enter verification code below (Use test code: <strong>123456</strong>)
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
              style={{ width: '100%', padding: '0.85rem', marginTop: '0.5rem' }}
            >
              {loading ? 'Verifying Cyber Session...' : 'Verify & Access Scam Portal'}
              <CheckCircle2 size={16} />
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

        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', margin: '1.5rem 0', gap: '1rem' }}>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255, 255, 255, 0.08)' }}></div>
          <span style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase' }}>Or Emergency Option</span>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255, 255, 255, 0.08)' }}></div>
        </div>

        {/* Guest Mode */}
        <button 
          onClick={handleGuestLogin}
          className="btn btn-secondary"
          style={{ width: '100%', padding: '0.75rem', fontSize: '0.88rem' }}
        >
          <Zap size={16} style={{ color: '#ffb703' }} />
          <span>Continue as Anonymous Guest (Fast File)</span>
        </button>
      </div>
    </div>
  );
}
