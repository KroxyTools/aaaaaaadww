# X-CHANGE PRO 🚀 | Real-Time Currency Exchange & Calculator Web App

A high-performance, eye-catching, responsive Currency Exchange Web Application built with pure **HTML5, Modern CSS3, and Vanilla JavaScript**. Designed for both PC and Mobile with sleek fintech glassmorphism aesthetics.

Powered by the **open.er-api.com** live exchange rate engine with built-in **Owner Profit Margin / Commission Calculator**.

---

## ✨ Features & Architecture

1. **Animated Loading / Splash Screen**:
   - Modern glowing pulse ring with progress bar and real-time API status check.
   - Smooth transition out as soon as market data is ready.

2. **Dashboard / Home Interface (Mobile + PC)**:
   - **Floating Glass Title Bar**: Glassmorphism blurred navbar with live market indicator and quick settings shortcut.
   - **Exchange Money Hero Banner**: Live ticker strip showcasing popular pairs (USD ➔ BDT, SAR ➔ BDT, AED ➔ BDT, EUR ➔ BDT, etc.) with real-time timestamps.
   - **Feature Section**:
     - **Main Feature App Card**: **"Exchange"** with vibrant 3D dual-currency icon ($ and ৳). Clicking directly opens the Exchange sub-screen.
     - **Settings Card**: Configure your personal exchange profit percentage (%) and calculation mode.
     - **Live Rate Board**: Complete real-time table of 160+ world currencies against USD/BDT/SAR/EUR.

3. **Exchange Sub-Screen (Rate Calculator Desk)**:
   - Dedicated floating title bar featuring **"Rate"** with back navigation and a live animated **Refresh Icon** on the right.
   - **Option 1 ("Client Mujhe Dega" / Client Gives)**: Currency selector + amount input with quick increment chips (+10, +50, +100, +500, +1000).
   - **Interactive Swap Button**: 1-click animated reverse swap (e.g., USD ↔ BDT or SAR ↔ BDT).
   - **Option 2 ("Client Ko Milega" / Client Receives)**: Instant real-time payout calculation with high-contrast glowing green typography.
   - **Full Calculation Breakdown**:
     - Official Live Market Rate (via `open.er-api.com`)
     - Owner Profit Margin percentage applied
     - Effective Client Rate
     - Net Client Payout & Your Profit Margin Earned
   - **Quick Action Bar**:
     - Copy Client Receipt formatted for WhatsApp/SMS.
     - View & Print Transaction Slip with unique Transaction ID.

4. **Settings Modal (Business Profit Margin)**:
   - Drag slider (0.0% to 10.0%) or type exact percentage.
   - Quick margin preset buttons (0% Market, 1%, 1.5%, 2%, 3%, 5%).
   - Calculation mode: Deduct profit from client rate (standard exchange practice) or add surcharge markup.
   - Saves automatically in browser `localStorage`.

---

## 🌐 Deploy to Vercel or Netlify (100% Free & Fast)

Because this app is pure static frontend (HTML, CSS, JS), you can deploy it in less than 60 seconds with zero server configuration.

### Deploy to Netlify (Drag & Drop):
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Simply drag and drop this `currency-exchange-app` folder directly into the browser window.
3. Your app is live instantly with an SSL HTTPS link!

### Deploy to Vercel:
1. Go to [vercel.com](https://vercel.com) and log in.
2. Click **"Add New Project"** and upload this folder or import via GitHub.
3. Click **Deploy**.

---

## 💻 Running Locally
Simply double-click `index.html` or right click -> open with your favorite browser (Chrome, Edge, Firefox).
