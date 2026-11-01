import React, { useState } from 'react';
import { 
  FileText, Upload, ShieldAlert, CheckCircle2, Copy, Download, 
  MapPin, Phone, Globe, DollarSign, Camera, Video, AlertCircle, Sparkles, Send
} from 'lucide-react';

export default function ScamReportForm({ user, onOpenAuth }) {
  const [formData, setFormData] = useState({
    scamCategory: 'cod_parcel',
    scammerName: '',
    scammerLink: '',
    scammerPhone: '',
    scammerUpi: '',
    courierName: 'DTDC Courier',
    deliveryAgentPhone: '',
    dtdcHubAddress: '',
    lossAmount: '',
    paymentType: 'cod_upi',
    dateOfIncident: new Date().toISOString().split('T')[0],
    incidentDescription: '',
    unboxingVideo: null,
    paymentScreenshot: null,
    waybillPhoto: null
  });

  const [submittedCase, setSubmittedCase] = useState(null);
  const [activeDraftTab, setActiveDraftTab] = useState('cybercrime'); // 'cybercrime' | 'nch' | 'dtdc_freeze'
  const [copied, setCopied] = useState(false);

  const handleFileSimulate = (field, fileName) => {
    setFormData(prev => ({
      ...prev,
      [field]: { name: fileName, size: '4.2 MB', status: 'Verified & Encrypted' }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      onOpenAuth();
      return;
    }

    if (!formData.lossAmount || !formData.courierName) {
      alert('Please fill in the required fields (Loss amount and Courier name)');
      return;
    }

    const caseId = 'CYBER-COD-' + Math.floor(100000 + Math.random() * 900000);
    const caseData = {
      caseId,
      createdAt: new Date().toLocaleString(),
      user: user.name || 'Complainant',
      userPhone: user.phone || 'N/A',
      userEmail: user.email || 'N/A',
      ...formData
    };

    setSubmittedCase(caseData);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      {!submittedCase ? (
        <div className="glass-panel" style={{ padding: '2rem' }}>
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div>
              <div className="badge badge-cyber" style={{ marginBottom: '0.4rem' }}>
                Official Cybercrime Filing Form
              </div>
              <h2 style={{ fontSize: '1.6rem' }}>Raise Online & COD Shopping Scam Complaint</h2>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
                Fill details below to generate immediate legal notices & Cybercell 1930 filing templates.
              </p>
            </div>

            {!user && (
              <button 
                onClick={onOpenAuth} 
                className="btn btn-outline-cyan"
                style={{ fontSize: '0.85rem' }}
              >
                Sign In to Save Case Progress
              </button>
            )}
          </div>

          <form onSubmit={handleSubmit}>
            {/* Section 1: How got scammed */}
            <div style={{ marginBottom: '1.75rem' }}>
              <h3 style={{ fontSize: '1.1rem', color: '#00f2fe', marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <AlertCircle size={18} /> 1. Scam Category & Platform Details
              </h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">How did you get scammed? *</label>
                  <select 
                    className="form-control"
                    value={formData.scamCategory}
                    onChange={(e) => setFormData({ ...formData, scamCategory: e.target.value })}
                  >
                    <option value="cod_parcel">COD Courier Fake Parcel (No Open Box / Garbage Item)</option>
                    <option value="fake_website">Fake E-Commerce Website Deal</option>
                    <option value="instagram_ad">Instagram / Facebook Sponsored Ad Scam</option>
                    <option value="unsolicited_cod">Unsolicited Courier Delivered to Home (No Order Placed)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Scammer App or Website Name & Link</label>
                  <div style={{ position: 'relative' }}>
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="e.g. SuperDeals App / www.fakeshop-deal.in" 
                      value={formData.scammerLink}
                      onChange={(e) => setFormData({ ...formData, scammerLink: e.target.value })}
                      style={{ paddingLeft: '2.5rem' }}
                    />
                    <Globe size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Scammer Phone / WhatsApp Number (If any)</label>
                  <div style={{ position: 'relative' }}>
                    <input 
                      type="tel" 
                      className="form-control" 
                      placeholder="e.g. +91 98765 00000" 
                      value={formData.scammerPhone}
                      onChange={(e) => setFormData({ ...formData, scammerPhone: e.target.value })}
                      style={{ paddingLeft: '2.5rem' }}
                    />
                    <Phone size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Scammer UPI ID / Payment VPA / Bank Details</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="e.g. merchant-payout@ybl or UPI Ref" 
                    value={formData.scammerUpi}
                    onChange={(e) => setFormData({ ...formData, scammerUpi: e.target.value })}
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Courier & Delivery Details */}
            <div style={{ marginBottom: '1.75rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <h3 style={{ fontSize: '1.1rem', color: '#00f5a0', marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={18} /> 2. Delivery Courier & Local DTDC / Agent Information
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Courier Service Name *</label>
                  <select 
                    className="form-control"
                    value={formData.courierName}
                    onChange={(e) => setFormData({ ...formData, courierName: e.target.value })}
                    required
                  >
                    <option value="DTDC Courier">DTDC Express Courier</option>
                    <option value="Delhivery">Delhivery Logistics</option>
                    <option value="BlueDart">BlueDart Express</option>
                    <option value="India Post">India Post (Speed Post COD)</option>
                    <option value="Shadowfax">Shadowfax Technologies</option>
                    <option value="Xpressbees">Xpressbees Logistics</option>
                    <option value="Ecom Express">Ecom Express</option>
                    <option value="Other Courier">Other Local Courier Agent</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Delivery Agent Phone Number *</label>
                  <div style={{ position: 'relative' }}>
                    <input 
                      type="tel" 
                      className="form-control" 
                      placeholder="e.g. +91 91234 56789 (Driver Phone)" 
                      value={formData.deliveryAgentPhone}
                      onChange={(e) => setFormData({ ...formData, deliveryAgentPhone: e.target.value })}
                      style={{ paddingLeft: '2.5rem' }}
                    />
                    <Phone size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">DTDC Office / Local Courier Center Address</label>
                <div style={{ position: 'relative' }}>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="e.g. DTDC Parcel Office, Main Road Hub, Plot 14, Near City Station" 
                    value={formData.dtdcHubAddress}
                    onChange={(e) => setFormData({ ...formData, dtdcHubAddress: e.target.value })}
                    style={{ paddingLeft: '2.5rem' }}
                  />
                  <MapPin size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
                </div>
              </div>
            </div>

            {/* Section 3: Financial Loss & Payment */}
            <div style={{ marginBottom: '1.75rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <h3 style={{ fontSize: '1.1rem', color: '#ffb703', marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <DollarSign size={18} /> 3. Loss Amount & Payment Method
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Total Amount Lost (₹) *</label>
                  <input 
                    type="number" 
                    className="form-control" 
                    placeholder="e.g. 1299" 
                    value={formData.lossAmount}
                    onChange={(e) => setFormData({ ...formData, lossAmount: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Payment Mode</label>
                  <select 
                    className="form-control"
                    value={formData.paymentType}
                    onChange={(e) => setFormData({ ...formData, paymentType: e.target.value })}
                  >
                    <option value="cod_cash">Cash on Delivery (Paid Cash to Agent)</option>
                    <option value="cod_upi">Cash on Delivery (Paid via UPI QR to Agent)</option>
                    <option value="prepaid_upi">Prepaid (Google Pay / PhonePe / Paytm)</option>
                    <option value="prepaid_card">Prepaid (Credit/Debit Card or NetBanking)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section 4: Evidence Locker (Uploads) */}
            <div style={{ marginBottom: '1.75rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <h3 style={{ fontSize: '1.1rem', color: '#00f2fe', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Camera size={18} /> 4. Digital Evidence Locker (Attach Proofs)
              </h3>
              <p style={{ fontSize: '0.82rem', color: '#94a3b8', marginBottom: '1rem' }}>
                Attaching unboxing videos and payment screenshots creates an ironclad complaint that courier nodal teams cannot reject.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                {/* Upload 1: Video Proof */}
                <div className="glass-card" style={{ textAlign: 'center', padding: '1.25rem' }}>
                  <Video size={24} style={{ color: '#00f2fe', marginBottom: '0.5rem' }} />
                  <div style={{ fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.3rem' }}>
                    Unboxing Video Proof
                  </div>
                  <p style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '0.75rem' }}>
                    CNN Video Tensor & Audio Spectral Analysis
                  </p>
                  
                  {formData.unboxingVideo ? (
                    <div style={{ textAlign: 'center' }}>
                      <div className="badge badge-emerald" style={{ width: '100%', justifyContent: 'center', marginBottom: '0.3rem' }}>
                        <CheckCircle2 size={13} /> {formData.unboxingVideo.name}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: '#00f2fe', fontFamily: 'var(--font-mono)' }}>
                        CNN Tensor Match: 98.4% Authentic Seal
                      </div>
                    </div>
                  ) : (
                    <button 
                      type="button"
                      onClick={() => handleFileSimulate('unboxingVideo', 'unboxing_proof_video.mp4')}
                      className="btn btn-secondary" 
                      style={{ fontSize: '0.78rem', padding: '0.45rem 0.85rem' }}
                    >
                      <Upload size={14} /> Simulate Attach Video
                    </button>
                  )}
                </div>

                {/* Upload 2: Payment Screenshot */}
                <div className="glass-card" style={{ textAlign: 'center', padding: '1.25rem' }}>
                  <Camera size={24} style={{ color: '#00e676', marginBottom: '0.5rem' }} />
                  <div style={{ fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.3rem' }}>
                    UPI / Payment Screenshot
                  </div>
                  <p style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '0.75rem' }}>
                    OCR Text Extraction & Transaction Parser
                  </p>
                  
                  {formData.paymentScreenshot ? (
                    <div style={{ textAlign: 'center' }}>
                      <div className="badge badge-emerald" style={{ width: '100%', justifyContent: 'center', marginBottom: '0.3rem' }}>
                        <CheckCircle2 size={13} /> {formData.paymentScreenshot.name}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: '#00e676', fontFamily: 'var(--font-mono)' }}>
                        OCR Parsed: UPI Ref #98741203498
                      </div>
                    </div>
                  ) : (
                    <button 
                      type="button"
                      onClick={() => handleFileSimulate('paymentScreenshot', 'payment_upi_screenshot.png')}
                      className="btn btn-secondary" 
                      style={{ fontSize: '0.78rem', padding: '0.45rem 0.85rem' }}
                    >
                      <Upload size={14} /> Simulate Attach Receipt
                    </button>
                  )}
                </div>

                {/* Upload 3: Shipping Label / Waybill */}
                <div className="glass-card" style={{ textAlign: 'center', padding: '1.25rem' }}>
                  <FileText size={24} style={{ color: '#ffab00', marginBottom: '0.5rem' }} />
                  <div style={{ fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.3rem' }}>
                    DTDC Label / Waybill Photo
                  </div>
                  <p style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '0.75rem' }}>
                    EasyOCR Bounding Box Waybill Extractor
                  </p>
                  
                  {formData.waybillPhoto ? (
                    <div style={{ textAlign: 'center' }}>
                      <div className="badge badge-emerald" style={{ width: '100%', justifyContent: 'center', marginBottom: '0.3rem' }}>
                        <CheckCircle2 size={13} /> {formData.waybillPhoto.name}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: '#ffab00', fontFamily: 'var(--font-mono)' }}>
                        OCR Label Match: DTDC-HYD-984210
                      </div>
                    </div>
                  ) : (
                    <button 
                      type="button"
                      onClick={() => handleFileSimulate('waybillPhoto', 'dtdc_waybill_label.jpg')}
                      className="btn btn-secondary" 
                      style={{ fontSize: '0.78rem', padding: '0.45rem 0.85rem' }}
                    >
                      <Upload size={14} /> Simulate Attach Label
                    </button>
                  )}
                </div>

              </div>
            </div>

            {/* Description */}
            <div className="form-group" style={{ marginBottom: '1.75rem' }}>
              <label className="form-label">Brief Description of What Happened</label>
              <textarea 
                className="form-control"
                placeholder="Explain what was ordered vs what was received in the box..."
                value={formData.incidentDescription}
                onChange={(e) => setFormData({ ...formData, incidentDescription: e.target.value })}
                rows={3}
              ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="btn btn-primary"
              style={{ width: '100%', padding: '1rem', fontSize: '1.1rem', borderRadius: '12px' }}
            >
              <Sparkles size={20} />
              <span>Generate Cybercrime Case Filing & Courier Freeze Notice</span>
            </button>
          </form>
        </div>
      ) : (
        /* Case Result & Notice Generator Screen */
        <div className="glass-panel" style={{ padding: '2rem' }}>
          {/* Top Success Card */}
          <div className="glass-card" style={{ background: 'rgba(0, 245, 160, 0.05)', borderColor: 'rgba(0, 245, 160, 0.25)', marginBottom: '1.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <div className="badge badge-emerald" style={{ marginBottom: '0.5rem' }}>
                  <CheckCircle2 size={13} /> Case Generated Successfully
                </div>
                <h2 style={{ fontSize: '1.5rem' }}>
                  Official Case ID: <span style={{ color: '#00f5a0', fontFamily: 'var(--font-mono)' }}>{submittedCase.caseId}</span>
                </h2>
                <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                  Loss Amount: <strong style={{ color: '#ffffff' }}>₹{submittedCase.lossAmount}</strong> | Courier: <strong style={{ color: '#ffffff' }}>{submittedCase.courierName}</strong>
                </p>
              </div>

              <button 
                onClick={() => setSubmittedCase(null)} 
                className="btn btn-secondary"
                style={{ fontSize: '0.85rem' }}
              >
                File Another Case
              </button>
            </div>
          </div>

          {/* Action Tabs for Generated Notices */}
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem', overflowX: 'auto', paddingBottom: '0.25rem' }}>
            {[
              { id: 'cybercrime', label: 'Cyber Crime 1930 Portal Format', color: '#00f2fe' },
              { id: 'dtdc_freeze', label: 'Courier Merchant Freeze Notice', color: '#ff4d4d' },
              { id: 'nch', label: 'National Consumer Helpline (NCH)', color: '#00f5a0' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveDraftTab(tab.id)}
                className="btn"
                style={{
                  fontSize: '0.88rem',
                  padding: '0.6rem 1.1rem',
                  background: activeDraftTab === tab.id ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                  border: activeDraftTab === tab.id ? `1px solid ${tab.color}` : '1px solid transparent',
                  color: activeDraftTab === tab.id ? tab.color : '#94a3b8'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Generated Text Box */}
          <div className="glass-card" style={{ background: '#0a0f1a', position: 'relative', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ position: 'absolute', top: '1rem', right: '1rem', display: 'flex', gap: '0.5rem' }}>
              <button 
                onClick={() => {
                  const textToCopy = getNoticeText(activeDraftTab, submittedCase);
                  copyToClipboard(textToCopy);
                }}
                className="btn btn-emerald"
                style={{ padding: '0.45rem 0.85rem', fontSize: '0.8rem' }}
              >
                <Copy size={14} /> {copied ? 'Copied!' : 'Copy Formatted Notice'}
              </button>
            </div>

            <pre style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              color: '#cbd5e1',
              whiteSpace: 'pre-wrap',
              lineHeight: 1.6,
              padding: '1rem',
              maxHeight: '400px',
              overflowY: 'auto'
            }}>
              {getNoticeText(activeDraftTab, submittedCase)}
            </pre>
          </div>

          {/* Next Steps Guide */}
          <div style={{ marginTop: '1.75rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
            <div className="glass-card">
              <h4 style={{ color: '#00f2fe', fontSize: '0.95rem', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Send size={16} /> Step 1: Submit to Cybercrime Portal
              </h4>
              <p style={{ fontSize: '0.82rem', color: '#94a3b8', marginBottom: '0.75rem' }}>
                Go to <strong style={{ color: '#ffffff' }}>cybercrime.gov.in</strong> or call helpline <strong style={{ color: '#00f2fe' }}>1930</strong> and paste the Cyber Crime format text above.
              </p>
              <a 
                href="https://cybercrime.gov.in" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-outline-cyan" 
                style={{ fontSize: '0.78rem', width: '100%' }}
              >
                Open Cyber Crime Portal (1930)
              </a>
            </div>

            <div className="glass-card">
              <h4 style={{ color: '#ff4d4d', fontSize: '0.95rem', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <ShieldAlert size={16} /> Step 2: Email Courier Nodal Officer
              </h4>
              <p style={{ fontSize: '0.82rem', color: '#94a3b8', marginBottom: '0.75rem' }}>
                Email the DTDC / Courier Fraud Cell to hold merchant COD settlement payout immediately.
              </p>
              <button 
                onClick={() => {
                  window.location.href = `mailto:nodalofficer@dtdc.com,fraud-desk@delivery.com?subject=URGENT: COD Payout Freeze Request - Case ${submittedCase.caseId}&body=${encodeURIComponent(getNoticeText('dtdc_freeze', submittedCase))}`;
                }}
                className="btn btn-danger" 
                style={{ fontSize: '0.78rem', width: '100%' }}
              >
                Dispatch Email to Courier Fraud Team
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Helper to format legal texts
function getNoticeText(type, data) {
  if (type === 'cybercrime') {
    return `CYBER CRIME PORTAL (1930 / CYBERCRIME.GOV.IN) FRAUD REPORT
------------------------------------------------------------------
COMPLAINANT DETAILS:
Name: ${data.user}
Phone: ${data.userPhone}
Email: ${data.userEmail}

INCIDENT SUMMARY:
Crime Type: Cash on Delivery (COD) E-Commerce Fraud
Total Financial Loss: ₹${data.lossAmount}
Date of Incident: ${data.dateOfIncident}

FRAUDSTER & LOGISTICS DETAILS:
Scammer App/Website: ${data.scammerLink || 'Unlinked Social Media Ad / COD Box'}
Scammer Phone/WhatsApp: ${data.scammerPhone || 'N/A'}
Scammer UPI / VPA ID: ${data.scammerUpi || 'N/A'}
Courier Carrier: ${data.courierName}
Delivery Agent Contact: ${data.deliveryAgentPhone || 'N/A'}
Local Courier Hub Address: ${data.dtdcHubAddress || 'Local Hub Office'}

INCIDENT STATEMENT:
"I received a Cash-on-Delivery (COD) parcel via ${data.courierName}. The delivery executive insisted on collecting ₹${data.lossAmount} prior to opening the box, stating open-box inspection was not permitted. Upon paying and opening the parcel, the contents were found to be counterfeit/garbage items.

This is a systematically organized COD fraud. I request Cyber Crime Authorities to initiate account freeze on the merchant account linked to this courier shipping label."`;
  }

  if (type === 'dtdc_freeze') {
    return `URGENT DEMAND FOR MERCHANT PAYOUT HOLD & ACCOUNT FREEZE
------------------------------------------------------------------
TO: Fraud Escalation & Nodal Officer, ${data.courierName}
LOCAL HUB ADDRESS: ${data.dtdcHubAddress || 'Destination Delivery Office'}

SUBJECT: Fraudulent COD Parcel Settlement Hold - Case Ref #${data.caseId}

Respected Nodal Officer,

I am writing to notify you of a fraudulent Cash-on-Delivery parcel delivered to me on ${data.dateOfIncident}.

PARCEL & TRANSACTION DETAILS:
1. Loss Amount Collected: ₹${data.lossAmount}
2. Payment Mode: ${data.paymentType}
3. Delivery Agent Contact: ${data.deliveryAgentPhone}
4. Scammer Merchant Name/Link: ${data.scammerLink || 'Flagged COD Shipper'}

STATEMENT OF FRAUD:
The parcel delivered by your logistics network contained useless/counterfeit goods. Under RBI Payment Settlements & Intermediary Fraud Guidelines, couriers providing COD collection services must withhold daily payout settlements to merchant accounts flagged for fraudulent shipments.

I demand:
1. Immediate withholding of the ₹${data.lossAmount} COD settlement payout to the shipper.
2. Freezing of the shipper's merchant shipping account with ${data.courierName}.
3. Reversal of funds back to victim account.

Formal complaints have also been logged on National Cyber Crime Helpline (1930).

Sincerely,
${data.user}
Phone: ${data.userPhone}`;
  }

  if (type === 'nch') {
    return `NATIONAL CONSUMER HELPLINE (NCH 1915) GRIEVANCE
------------------------------------------------------------------
CONSUMER NAME: ${data.user}
CONTACT: ${data.userPhone}

OPPOSITE PARTY DETAILS:
Merchant: ${data.scammerLink || 'Online Shopping COD Vendor'}
Logistics Provider: ${data.courierName} (${data.dtdcHubAddress || 'Local Hub'})

GRIEVANCE DETAILS:
Category: E-Commerce Fraud & Unfair Trade Practice
Amount Involved: ₹${data.lossAmount}

REDRRESSAL SOUGHT:
Full refund of ₹${data.lossAmount} collected under misleading Cash-on-Delivery pre-conditions without open-box verification options.`;
  }
}
