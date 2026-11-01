import React, { useState } from 'react';
import { AlertTriangle, MapPin, Calendar, ShieldAlert, ThumbsUp, Search } from 'lucide-react';

const mockReports = [
  {
    id: 1,
    title: 'Surat COD Scam Hub - Soap bar in electronic parcel',
    courier: 'DTDC Courier',
    dtdcAddress: 'DTDC Hub, Katargam, Surat, Gujarat',
    loss: '₹1,299',
    scammerLink: 'trendy-techdeals.shop',
    date: '2 hours ago',
    city: 'Hyderabad',
    upvotes: 42
  },
  {
    id: 2,
    title: 'Unsolicited Shoe parcel delivered via Speed Post COD',
    courier: 'India Post COD',
    dtdcAddress: 'GPO Hub, Delhi North',
    loss: '₹899',
    scammerLink: 'Instagram @kickz_super_sale',
    date: '5 hours ago',
    city: 'Vijayawada',
    upvotes: 29
  },
  {
    id: 3,
    title: 'Smartwatch box contained plastic stone piece',
    courier: 'Delhivery',
    dtdcAddress: 'Delhivery Sort Hub, Sector 18, Gurugram',
    loss: '₹1,999',
    scammerLink: 'luxe-chronos.in',
    date: '1 day ago',
    city: 'Bengaluru',
    upvotes: 85
  }
];

export default function CommunityFeed({ onSelectReport }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = mockReports.filter(r => 
    r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.courier.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.dtdcAddress.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <div className="glass-panel" style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span className="badge badge-gold" style={{ marginBottom: '0.4rem' }}>
              Live Threat Intelligence
            </span>
            <h2 style={{ fontSize: '1.6rem' }}>Community Scam Alert Feed</h2>
            <p style={{ color: '#94a3b8', fontSize: '0.88rem' }}>
              Real-time reports submitted by victims across India to warn fellow buyers.
            </p>
          </div>

          <div style={{ position: 'relative', width: '260px' }}>
            <input 
              type="text" 
              className="form-control"
              placeholder="Search courier, city or URL..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ paddingLeft: '2.2rem', fontSize: '0.85rem' }}
            />
            <Search size={14} style={{ position: 'absolute', left: '0.8rem', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {filtered.map(report => (
            <div key={report.id} className="glass-card" style={{ borderLeft: '4px solid #ff4d4d' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                    <span className="badge badge-danger" style={{ fontSize: '0.7rem' }}>
                      <AlertTriangle size={11} /> {report.courier}
                    </span>
                    <span style={{ fontSize: '0.78rem', color: '#64748b' }}>{report.date}</span>
                    <span style={{ fontSize: '0.78rem', color: '#00f2fe', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                      <MapPin size={12} /> {report.city}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.4rem', color: '#ffffff' }}>
                    {report.title}
                  </h3>

                  <div style={{ fontSize: '0.83rem', color: '#cbd5e1', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                    <div>
                      Courier Hub: <strong style={{ color: '#ffb703' }}>{report.dtdcAddress}</strong>
                    </div>
                    <div>
                      Scammer Link: <strong style={{ color: '#00f2fe' }}>{report.scammerLink}</strong>
                    </div>
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ff4d4d', fontFamily: 'var(--font-heading)' }}>
                    Loss: {report.loss}
                  </div>
                  <button className="btn btn-secondary" style={{ padding: '0.3rem 0.65rem', fontSize: '0.75rem', marginTop: '0.4rem' }}>
                    <ThumbsUp size={12} /> {report.upvotes} Flagged
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
