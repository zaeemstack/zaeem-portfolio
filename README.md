# Muhammad Zaeem – AI Integrated Developer & Full-Stack Portfolio

A modern, high-performance, responsive portfolio website built for **Muhammad Zaeem**, inspired by the visual design, high-contrast dark aesthetic, 3D card tilt, and interaction patterns of [codebyumar.com](https://codebyumar.com).

---

## 🚀 Key Highlights & Design System

- **Aesthetic**: Deep Obsidian & Charcoal (`#090a08`, `#0f100e`) with Electric Cyber Lime (`#c8f31d`) accents.
- **Glassmorphism & 3D Tilt**: Interactive cards with realistic depth, perspective tilt (`--rx`, `--ry`), and dynamic radial spotlight (`--gx`, `--gy`) following the cursor.
- **Typography**: Google Font `Instrument Sans` combined with `JetBrains Mono` for engineering metrics.
- **Micro-Interactions**:
  - Top scroll progress indicator bar.
  - Infinite Marquee ticker tape of tech skills.
  - Alternating left/right featured systems showcase (`01`, `02`, `03`...).
  - Interactive System Architecture Schematics & Terminal telemetry previews.
  - **Interactive Case Study Modal**: Deep architectural breakdown for every project.
  - **Dynamic Inquiry Routing**: Clicking project tracks automatically configures the contact form.
  - **One-Click Clipboard**: Instant copy with animated toast notification.
  - Live "Available for work" pulsing beacon.
  - Giant hollow outline footer branding (`MUHAMMAD ZAEEM`).

---

## 🛠️ Content & Projects Included

All details sourced directly from Muhammad Zaeem's CV, GitHub (`zaeemstack`), and LinkedIn:

1. **Network-Fenced & Router-Geofenced Academic Attendance System** (University of Sahiwal - Ongoing)
   - 100% Offline Campus Intranet, 2-tier network fencing (CIDR + Wi-Fi router BSSID/MAC), W3C WebAuthn API smartphone biometrics, ±15 min late-lock engine, Socket.io live stream, 1,000+ roster management.
2. **University VC Appointment & Executive Booking Portal** (University of Sahiwal)
   - Real-time 30-min slot booking, VC Secretariat dashboard, database-level ACID transactions, node-cron background queues, SMTP retry resilience.
3. **Field Shift – Climate-Resilient Agro-Platform** (NASA Space Apps Challenge 2026)
   - Ingested 2 years (670+ records) of NASA POWER MERRA-2 satellite data, Growing Degree Days (GDD), sowing triggers, crop rotation logic.
4. **RAG Doctor – Autonomous LLM Diagnostician** (NVIDIA x Nebius Hackathon)
   - Pipeline evaluation, LLM-as-a-judge benchmarking, auto-tuning RAG triad hyperparameters.
5. **NexusScan AI – Campus Security & Attendance System** (Bano Qabil AI Hackathon)
   - Browser facial recognition, blink liveness detection (EAR), WhatsApp threat alerts, JWT RBAC.
6. **AI-Powered Face Recognition & WhatsApp Notification Engine** (International Clients)
   - Python OpenCV connected to Node.js backend, automated parent attendance alerts via WhatsApp for 100+ students.
7. **Full Career & Education Timeline**:
   - University of Sahiwal (AI Integrated Developer)
   - Sertech Software (Web & Business Developer Intern)
   - International Freelance Web Developer
   - BS Computer Science (University of Sahiwal 2025–2029)

---

## 🌐 How to Preview & Deploy

### Option 1: Instant Local Preview
Simply open `index.html` in any web browser (Chrome, Edge, Firefox, Brave) or run:
```bash
npx serve .
# or
python -m http.server 3000
```

### Option 2: Deploy to Netlify (Recommended)
You already have your existing profile on Netlify (`mzaeem-profile.netlify.app`):
1. Push this folder to a GitHub repository (`github.com/zaeemstack/portfolio`).
2. In Netlify, click **Add new site** → **Import an existing project** → select your repo.
3. Publish directory: `.` (root).
4. Click **Deploy Site**!

### Option 3: Deploy to GitHub Pages
1. Push to GitHub.
2. Go to **Settings** → **Pages** → Source: `Deploy from branch` (`main` / root).
3. Your portfolio will be live at `https://zaeemstack.github.io/portfolio/`.
