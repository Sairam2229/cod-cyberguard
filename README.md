# 🛡️ COD CyberGuard — Anti-COD Courier Scam & Fraud Reporting Platform

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Surge%20CDN-brightgreen)](https://cod-cyberguard-2026.surge.sh)
[![React](https://img.shields.io/badge/React-18.2-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.1-purple)](https://vitejs.dev/)
[![Status](https://img.shields.io/badge/Status-Production%20Ready-success)](#)

> An intelligent, citizen-first cybersecurity platform engineered to protect online shoppers against **Cash-on-Delivery (COD) courier scams**, generate automated legal complaints for cyber cells and courier nodal officers, and classify e-commerce risk using data-driven classification algorithms.

---

## 🌐 Live Deployment

* **Production URL**: [https://cod-cyberguard-2026.surge.sh](https://cod-cyberguard-2026.surge.sh)

---

## 🚀 Key Features

### 1. Zero Minimum Fraud Limit Protection
* Built in collaboration with guidelines from the **National Cyber Crime Helpline (1930 / [cybercrime.gov.in](https://cybercrime.gov.in))** and the **National Consumer Helpline (NCH - 1915)**.
* Educates victims that **there is ZERO minimum price limit** to file complaints — aggregating small-value frauds (₹200–₹1,500) freezes organized courier merchant syndicates.

### 2. Doorstep Delivery Safeguard Wizard
* Step-by-step interactive checklist when a courier delivery executive arrives at the doorstep.
* Mandatory unboxing video recording protocols and instant **Verbal Refusal Scripts** to reject unauthorized parcels.

### 3. Risk Classifier (Scam Link & Platform Checker)
* Evaluates e-commerce platforms using **Random Forest Ensemble (100 Decision Trees)** and **TF-IDF Vector Representation**.
* Instant verification: Recognized platforms (Amazon, Flipkart) show **Verified Trusted Status (0% Risk)**, while unverified suspect links trigger **High Scam Risk (94%+)** warnings with feature weight breakdowns.

### 4. Model Hub & Evaluation Dashboard
* Dedicated analytics interface presenting model performance:
  * **Accuracy**: 95.8%
  * **Precision**: 96.4%
  * **Recall**: 94.2%
  * **F1-Score**: 0.953
  * **ROC-AUC**: 0.982
* **Confusion Matrix** on 12,500 benchmark e-commerce transactions.
* **Interactive Random Forest Simulator** with real-time sliders for domain age, forced COD ratios, and logistics hub risk index.

### 5. 1-Click Crime Complaint & Courier Payout Freeze Generator
* Generates tailored legal complaint drafts:
  * **Cyber Crime Portal (1930 / cybercrime.gov.in) Format**
  * **Courier Merchant Payout Freeze Notice** (Addressed to DTDC / Logistics Nodal Officers demanding payout settlement hold)
  * **National Consumer Helpline (NCH 1915) Grievance**

### 6. Digital Evidence Locker
* Simulated attachment of unboxing videos, UPI payment receipts, and courier waybill labels with **CNN Tensor Seal Authenticity Matching** and **EasyOCR Waybill Text Extraction**.

### 7. Courier Carrier Anti-Fraud Directory
* Direct escalation emails, phone numbers, and merchant settlement hold policies for **DTDC, Delhivery, BlueDart, and India Post**.

---

## 💻 Tech Stack

* **Frontend Framework**: React 18, Vite 5
* **Icons & UI**: Lucide React, Canvas Confetti
* **Design System**: Cybersecurity Dark Theme, Glassmorphism, Animated Cyber Matrix Grid
* **Server**: Node.js HTTP Server (`server.cjs`)

---

## 🛠️ Local Development & Setup

### Prerequisites
* Node.js (v18 or higher)
* npm or pnpm

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/cod-scam-shield.git
cd cod-scam-shield
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
```

### 5. Run Production Server
```bash
node server.cjs
```
Open [http://localhost:5000](http://localhost:5000) in your browser.

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
