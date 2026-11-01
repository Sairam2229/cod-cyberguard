import React, { useState } from 'react';
import { ShieldCheck, AlertTriangle, Video, CheckCircle2, ChevronRight, MessageSquare, Volume2 } from 'lucide-react';

export default function DeliveryWizard() {
  const [step, setStep] = useState(1);
  const [didOrder, setDidOrder] = useState(null);
  const [allowOpenBox, setAllowOpenBox] = useState(null);
  const [driverText, setDriverText] = useState('');

  const resetWizard = () => {
    setStep(1);
    setDidOrder(null);
    setAllowOpenBox(null);
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      <div className="glass-panel" style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span className="badge badge-emerald" style={{ marginBottom: '0.4rem' }}>
              Doorstep Emergency Safeguard
            </span>
            <h2 style={{ fontSize: '1.5rem' }}>Courier Delivery Safeguard Wizard</h2>
            <p style={{ color: '#94a3b8', fontSize: '0.88rem' }}>
              Use this when a courier delivery executive arrives at your doorstep with a COD parcel.
            </p>
          </div>

          <button onClick={resetWizard} className="btn btn-secondary" style={{ fontSize: '0.8rem' }}>
            Reset Checklist
          </button>
        </div>

        {/* Progress Bar */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem' }}>
          {[1, 2, 3, 4].map((i) => (
            <div 
              key={i} 
              style={{
                flex: 1,
                height: '6px',
                borderRadius: '3px',
                background: step >= i ? 'var(--primary-cyan)' : 'rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>

        {/* STEP 1: Did you order this? */}
        {step === 1 && (
          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#ffffff' }}>
              Step 1: Did you or your family members order this exact item?
            </h3>
            <p style={{ color: '#cbd5e1', fontSize: '0.92rem', marginBottom: '1.5rem' }}>
              Many scammers send unsolicited COD packages (worth ₹499 - ₹1,499) to random addresses hoping someone pays without checking.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
              <div 
                onClick={() => { setDidOrder(true); setStep(2); }}
                className="glass-card" 
                style={{ cursor: 'pointer', border: '1px solid rgba(0, 242, 254, 0.3)', textAlign: 'center', padding: '1.5rem' }}
              >
                <CheckCircle2 size={32} style={{ color: '#00f2fe', marginBottom: '0.75rem' }} />
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.4rem' }}>Yes, I Ordered This</h4>
                <p style={{ fontSize: '0.82rem', color: '#94a3b8' }}>I have order confirmation on my phone/email.</p>
              </div>

              <div 
                onClick={() => { setDidOrder(false); setStep(4); }}
                className="glass-card" 
                style={{ cursor: 'pointer', border: '1px solid rgba(255, 77, 77, 0.3)', textAlign: 'center', padding: '1.5rem' }}
              >
                <AlertTriangle size={32} style={{ color: '#ff4d4d', marginBottom: '0.75rem' }} />
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.4rem', color: '#ff4d4d' }}>No / Unsure Order</h4>
                <p style={{ fontSize: '0.82rem', color: '#94a3b8' }}>No one in my house remembers ordering this parcel.</p>
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: Open Box Permission */}
        {step === 2 && (
          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#ffffff' }}>
              Step 2: Is the Courier Agent allowing Open-Box Inspection?
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
              <div 
                onClick={() => { setAllowOpenBox(true); setStep(3); }}
                className="glass-card" 
                style={{ cursor: 'pointer', border: '1px solid rgba(0, 245, 160, 0.3)', padding: '1.25rem' }}
              >
                <CheckCircle2 size={28} style={{ color: '#00f5a0', marginBottom: '0.5rem' }} />
                <h4 style={{ fontSize: '1.05rem', color: '#00f5a0' }}>Yes, Open Box Allowed</h4>
                <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>The driver agrees to let me inspect before payment.</p>
              </div>

              <div 
                onClick={() => { setAllowOpenBox(false); setStep(3); }}
                className="glass-card" 
                style={{ cursor: 'pointer', border: '1px solid rgba(255, 183, 3, 0.3)', padding: '1.25rem' }}
              >
                <AlertTriangle size={28} style={{ color: '#ffb703', marginBottom: '0.5rem' }} />
                <h4 style={{ fontSize: '1.05rem', color: '#ffb703' }}>No Open Box ("Pay First")</h4>
                <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Driver says courier policy strictly forbids opening box.</p>
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: Unboxing Protocol & Camera Script */}
        {step === 3 && (
          <div>
            <div className="badge badge-emerald" style={{ marginBottom: '0.75rem' }}>
              <Video size={13} /> Mandatory Evidence Recording Protocol
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#ffffff' }}>
              Step 3: Record Unboxing Video BEFORE Driver Leaves
            </h3>

            <div className="glass-card" style={{ background: 'rgba(0, 242, 254, 0.04)', marginBottom: '1.5rem' }}>
              <h4 style={{ color: '#00f2fe', fontSize: '0.95rem', marginBottom: '0.5rem' }}>Follow these 4 Rules for Valid Unboxing Video:</h4>
              <ol style={{ paddingLeft: '1.25rem', fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.7 }}>
                <li>Show the intact shipping label & AWB tracking number clearly on camera.</li>
                <li>Show 360-degree view of sealed box taped edges.</li>
                <li>Keep camera running continuously (do not cut or pause video) while opening.</li>
                <li>If courier driver is present, ask them to stay in frame while box is opened.</li>
              </ol>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button onClick={() => setStep(4)} className="btn btn-primary" style={{ width: '100%' }}>
                <span>Item is Fake / Damaged? Proceed to Action</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: Immediate Refusal / Legal Statement */}
        {step === 4 && (
          <div>
            <div className="badge badge-danger" style={{ marginBottom: '0.75rem' }}>
              Refusal Rights Protocol
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#ff4d4d' }}>
              Step 4: Read this Statement to the Delivery Executive
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#94a3b8', marginBottom: '1.25rem' }}>
              If you did not order this parcel or suspect fraud, you have the absolute legal right to reject it at your door.
            </p>

            <div className="glass-card" style={{ background: '#0a0f1d', border: '1px solid rgba(255, 77, 77, 0.3)', marginBottom: '1.5rem', padding: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ffb703', fontWeight: 600, marginBottom: '0.5rem' }}>
                <Volume2 size={18} /> Words to Say to the Delivery Driver:
              </div>
              <p style={{ fontSize: '1rem', color: '#ffffff', fontFamily: 'var(--font-heading)', fontStyle: 'italic', lineHeight: 1.5 }}>
                "I am refusing this Cash-on-Delivery delivery under suspicion of fraud. Please mark this AWB on your handheld machine as <strong style={{ color: '#ff4d4d' }}>'Refused by Receiver - Suspected Fraud'</strong> and return it to sender. I will not pay."
              </p>
            </div>

            <button 
              onClick={() => {
                alert('Refusal script copied to clipboard!');
                navigator.clipboard.writeText("Refusal Statement: Marking parcel as Refused by Receiver due to suspected COD scam.");
              }} 
              className="btn btn-outline-cyan"
              style={{ width: '100%' }}
            >
              <MessageSquare size={16} /> Copy Refusal Script for Driver SMS
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
