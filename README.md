# 📱 Mobile Developer Portfolio (Flutter & Kotlin)

A sleek, Apple/Linear-inspired Bento Grid personal portfolio designed specifically for **Mobile Application Developers** specializing in **Flutter** and **Kotlin (Jetpack Compose)**.

Features:
- 📱 **Interactive Smartphone Device Sandbox**: Visitors can switch between live simulated app showcases (*ApexPay* FinTech, *PulseFit* Health, *ZenStream* Audio) and interact with buttons directly on screen!
- ⚡ **Linear-Style Spotlight Glow**: Ambient cursor-following spotlight and frosted glassmorphism borders.
- 💻 **Interactive Developer Terminal**: Fully functional shell emulator where visitors can type `apps`, `skills`, `contact`, `flutter`, `kotlin`, etc.
- 📋 **1-Click Copy Email & Direct Reach**: Animated toast feedback and direct contact integration.
- 🚀 **100% Free GitHub Pages Deployment Ready**: Zero build pipelines or complex frameworks required. Pure static modern web architecture that works instantly on GitHub Pages!

---

## ⚡ How to Deploy to GitHub Pages for Free (2 Minutes)

GitHub Pages provides **100% free hosting** with an SSL certificate and custom domain support.

### Option A: Your Personal Primary Domain (`https://<username>.github.io`)

1. Go to [GitHub.com](https://github.com) and click **New Repository**.
2. Name the repository exactly: `<your-github-username>.github.io` (e.g. `john-doe.github.io`).
3. Set the repository to **Public**.
4. In your local terminal inside this folder (`mobile-dev-portfolio`):
   ```bash
   git init
   git add .
   git commit -m "Initial commit of mobile developer portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-github-username>/<your-github-username>.github.io.git
   git push -u origin main
   ```
5. Go to your repository **Settings** → **Pages** on GitHub. Under **Build and deployment**, ensure the source is set to **Deploy from a branch** (`main` / root `/`).
6. Within 60 seconds, your portfolio will be live at `https://<your-github-username>.github.io`!

---

### Option B: As a Project Subpath (`https://<username>.github.io/portfolio`)

If you already have a root site or want it named `portfolio`:
1. Create a public repository named `portfolio`.
2. Push your files:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-github-username>/portfolio.git
   git push -u origin main
   ```
3. In repository **Settings** → **Pages**, select branch `main` and folder `/ (root)`. Click **Save**.
4. Your site will be live at `https://<your-github-username>.github.io/portfolio`!

---

## 🛠️ How to Customize Your Info

All essential profile data is centralized at the top of `app.js` and in `index.html`:

1. **Personal Information (`app.js`)**:
   Open [app.js](file:///C:/Users/Admin%201/.gemini/antigravity/scratch/mobile-dev-portfolio/app.js) and edit `USER_CONFIG`:
   ```javascript
   const USER_CONFIG = {
     name: "Your Name",
     title: "Mobile Application Developer",
     specialization: "Flutter & Kotlin Native",
     email: "your.email@example.com",
     github: "https://github.com/yourhandle",
     linkedin: "https://linkedin.com/in/yourhandle",
     location: "Your City / Remote",
     experienceYears: "3+",
     appsShipped: "12+",
     downloads: "50k+",
     crashFree: "99.9%"
   };
   ```

2. **Apps in the Interactive Smartphone Simulator (`app.js`)**:
   In `APPS` object inside `app.js`, you can adjust the names, badges, descriptions, or add your own apps.

3. **Bio and Details (`index.html`)**:
   Open [index.html](file:///C:/Users/Admin%201/.gemini/antigravity/scratch/mobile-dev-portfolio/index.html) to tweak any specific text or resume download links.

---

## 💻 Local Preview

You can preview it immediately in your browser:
- Simply double-click `index.html` to open it in Chrome, Edge, or Firefox.
- Or use any simple local server:
  ```bash
  npx serve .
  # or
  python -m http.server 8000
  ```
