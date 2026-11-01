import React from 'react';
import { Mail, Phone, ShieldCheck, ExternalLink, Building } from 'lucide-react';

const couriers = [
  {
    name: 'DTDC Express Courier',
    nodalEmail: 'nodalofficer@dtdc.com',
    fraudEscalation: 'customersupport@dtdc.com',
    phone: '080-25365032 / 080-69288888',
    policy: 'DTDC has a zero-tolerance policy for fraudulent merchant shippers. Sending written notice with Cybercrime 1930 reference triggers immediate merchant payout hold.',
    website: 'https://www.dtdc.in'
  },
  {
    name: 'Delhivery Logistics',
    nodalEmail: 'nodalofficer@delhivery.com',
    fraudEscalation: 'customer.support@delhivery.com',
    phone: '0124-6719500',
    policy: 'Merchant COD settlements are processed on T+2 cycle. Early reporting blocks payout before money leaves Delhivery escrow account.',
    website: 'https://www.delhivery.com'
  },
  {
    name: 'BlueDart Express',
    nodalEmail: 'customerservice@bluedart.com',
    fraudEscalation: 'nodal.officer@bluedart.com',
    phone: '1860-233-1234',
    policy: 'Requires unboxing video proof & Cybercrime acknowledgment number to freeze shipper account.',
    website: 'https://www.bluedart.com'
  },
  {
    name: 'India Post (Speed Post COD)',
    nodalEmail: 'pg.indiapost@gov.in',
    fraudEscalation: 'cpgrams-postal@gov.in',
    phone: '1800-266-6868',
    policy: 'Governed under Central Postal Rules. Fraudulent COD money orders can be stopped at destination Head Post Office.',
    website: 'https://www.indiapost.gov.in'
  }
];

export default function CourierDirectory() {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <div className="glass-panel" style={{ padding: '2rem' }}>
        <div style={{ marginBottom: '1.75rem' }}>
          <span className="badge badge-cyber" style={{ marginBottom: '0.4rem' }}>
            Official Escalation Contacts
          </span>
          <h2 style={{ fontSize: '1.6rem' }}>Courier Carrier Anti-Fraud Nodal Directory</h2>
          <p style={{ color: '#94a3b8', fontSize: '0.88rem' }}>
            Direct emails and phone numbers for logistics fraud desks to request merchant COD payout holds.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
          {couriers.map((courier, idx) => (
            <div key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', color: '#00f2fe', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Building size={18} /> {courier.name}
                </h3>

                <p style={{ fontSize: '0.82rem', color: '#cbd5e1', marginBottom: '1rem', lineHeight: 1.5 }}>
                  {courier.policy}
                </p>

                <div style={{ fontSize: '0.85rem', color: '#94a3b8', display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Mail size={15} style={{ color: '#00f5a0' }} />
                    <span>Nodal: <strong style={{ color: '#ffffff' }}>{courier.nodalEmail}</strong></span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Phone size={15} style={{ color: '#ffb703' }} />
                    <span>Helpdesk: <strong style={{ color: '#ffffff' }}>{courier.phone}</strong></span>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <a 
                  href={`mailto:${courier.nodalEmail}?subject=URGENT: Merchant COD Payout Freeze Demand`} 
                  className="btn btn-outline-cyan" 
                  style={{ fontSize: '0.78rem', flex: 1 }}
                >
                  <Mail size={13} /> Email Nodal Team
                </a>
                <a 
                  href={courier.website} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn btn-secondary" 
                  style={{ padding: '0.5rem 0.75rem' }}
                >
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
