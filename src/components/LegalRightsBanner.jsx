import React, { useState } from 'react';
import { ShieldAlert, CheckCircle2, ChevronRight, Scale, Info, HelpCircle } from 'lucide-react';

export default function LegalRightsBanner() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="glass-panel" style={{
      background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(20, 30, 55, 0.95) 100%)',
      borderColor: 'rgba(0, 242, 254, 0.25)',
      padding: '1.25rem 1.5rem',
      marginBottom: '2rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: '-40px',
        right: '-40px',
        width: '160px',
        height: '160px',
        background: 'radial-gradient(circle, rgba(0, 242, 254, 0.15) 0%, transparent 70%)',
        pointerEvents: 'none'
      }}></div>

      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1.25rem', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '280px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
            <span className="badge badge-emerald">
              <CheckCircle2 size={13} /> Legal Fact Check
            </span>
            <span style={{ fontSize: '0.8rem', color: '#ffb703', fontWeight: 600 }}>
              Indian Consumer Protection Act 2019 & Cyber Cell Protocol
            </span>
          </div>

          <h2 style={{ fontSize: '1.35rem', color: '#ffffff', marginBottom: '0.4rem', lineHeight: 1.3 }}>
            Is there a minimum price required to file a Cybercrime or COD Scam complaint?
          </h2>

          <p style={{ color: '#00f5a0', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.6rem' }}>
            NO! There is ZERO Minimum Limit. Whether ₹50 or ₹50,000 — You have the legal right to report!
          </p>

          <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.5 }}>
            Fraudsters intentionally target hard-working citizens with small COD charges (₹399 – ₹1,999) calculated on the assumption that you will deem it too small to report. <strong>Don't let them walk away!</strong> Aggregating small complaints allows cyber police and courier nodal officers to freeze the scammer's bank accounts & courier merchant agreements.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', alignSelf: 'center' }}>
          <button 
            onClick={() => setExpanded(!expanded)}
            className="btn btn-outline-cyan"
            style={{ padding: '0.6rem 1rem', fontSize: '0.85rem' }}
          >
            <Scale size={16} />
            <span>{expanded ? 'Hide Legal Rights' : 'Read Your Legal Rights'}</span>
            <ChevronRight size={15} style={{ transform: expanded ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s ease' }} />
          </button>
        </div>
      </div>

      {expanded && (
        <div style={{
          marginTop: '1.25rem',
          paddingTop: '1.25rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1rem'
        }}>
          <div className="glass-card">
            <h4 style={{ color: '#00f2fe', fontSize: '0.95rem', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <ShieldAlert size={16} /> Helpline 1930 Policy
            </h4>
            <p style={{ fontSize: '0.83rem', color: '#cbd5e1' }}>
              National Cyber Crime Portal explicitly accepts financial fraud reports of any value. Filing early enables 24-hour instant UPI freeze.
            </p>
          </div>

          <div className="glass-card">
            <h4 style={{ color: '#00f5a0', fontSize: '0.95rem', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={16} /> Courier Carrier Liability
            </h4>
            <p style={{ fontSize: '0.83rem', color: '#cbd5e1' }}>
              Under courier merchant KYC regulations, logistics partners like DTDC, Delhivery, etc., are legally obligated to withhold COD payouts to suspected scammer accounts.
            </p>
          </div>

          <div className="glass-card">
            <h4 style={{ color: '#ffb703', fontSize: '0.95rem', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <HelpCircle size={16} /> Open-Box Rights
            </h4>
            <p style={{ fontSize: '0.83rem', color: '#cbd5e1' }}>
              If a COD parcel is unexpected or suspicious, you have the full legal right to <strong>Refuse Delivery</strong> at your doorstep without paying a single rupee.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
