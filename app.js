/**
 * Dharmapalsinh Vaghela - Mobile Application Developer Portfolio
 * Specialized in Flutter (iOS & Android) & Kotlin
 */

// ==========================================
// 1. REAL USER PROFILE CONFIGURATION
// ==========================================
const USER_CONFIG = {
  name: "Dharmapalsinh Vaghela",
  shortName: "Dharmapalsinh",
  initials: "DV",
  title: "Flutter Developer",
  specialization: "Production Flutter (iOS & Android) & Kotlin Native",
  email: "dharmapalsinhvaghela99099@gmail.com",
  phone: "+91 99099 32330",
  location: "Vadodara, Gujarat, India",
  github: "https://github.com/Dharmapalsinh",
  linkedin: "https://linkedin.com/in/dharmapalsinh-vaghela-8971b922a",
  currentRole: "Flutter Developer at Gatetouch",
  experienceYears: "4+",
  appsShipped: "10+",
  downloads: "10k+",
  crashFree: "99.8%",
  education: "BCA Hons. (CGPA: 8.2/10) - MSU Baroda"
};

// ==========================================
// 2. REAL PUBLISHED APPS IN SMARTPHONE SIMULATOR
// ==========================================
const APPS = {
  spotiz: {
    name: "Spotiz",
    badge: "10k+ Downloads • Flutter & BLoC • Google Maps",
    type: "Production App",
    accent: "from-cyan-500 to-blue-600",
    render: () => `
      <div class="h-full flex flex-col justify-between py-1">
        <!-- App Bar -->
        <div class="flex items-center justify-between pb-2">
          <div class="flex items-center gap-1.5">
            <div class="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs font-bold font-mono">
              SZ
            </div>
            <div>
              <span class="text-xs font-bold text-white tracking-wide block leading-none">Spotiz</span>
              <span class="text-[8px] text-cyan-400 font-mono">10,000+ Downloads</span>
            </div>
          </div>
          <span class="text-[9px] font-mono text-emerald-400 bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-800/60">GPS ACTIVE</span>
        </div>

        <!-- Simulated Map View Card -->
        <div class="rounded-2xl bg-gradient-to-tr from-slate-900 via-blue-950 to-dark-950 p-2.5 border border-cyan-500/30 text-white relative overflow-hidden shadow-lg">
          <!-- Background Grid / Road lines -->
          <div class="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:12px_12px]"></div>
          
          <div class="relative z-10">
            <div class="flex justify-between items-center text-[9px] font-mono text-cyan-300 mb-1.5">
              <span class="flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span> Real-Time Stream</span>
              <span class="bg-cyan-500/20 px-1 rounded text-cyan-200">5Hz Polling</span>
            </div>

            <!-- Route Info Container -->
            <div class="bg-black/50 backdrop-blur rounded-xl p-2 border border-white/[0.08]">
              <div class="flex items-center justify-between">
                <div>
                  <div class="text-[8px] text-zinc-400 uppercase font-mono">Geofence Status</div>
                  <div class="text-[11px] font-bold text-emerald-400 flex items-center gap-1">
                    <span>Inside Safe Zone (Zone A)</span>
                  </div>
                </div>
                <div class="text-right">
                  <div class="text-[8px] text-zinc-400 uppercase font-mono">Accuracy</div>
                  <div class="text-[10px] font-mono text-cyan-300">± 2.4m</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Quick Map Interactive Triggers -->
        <div class="grid grid-cols-3 gap-1.5 my-2">
          <button onclick="phoneFeedback('Geofence boundary refreshed')" class="p-1.5 rounded-xl bg-white/[0.05] border border-white/[0.08] text-center hover:bg-cyan-500/20 transition-colors">
            <div class="text-[9px] text-cyan-300 font-bold font-mono">📍 Geofence</div>
          </button>
          <button onclick="phoneFeedback('Live route optimized: 12 mins')" class="p-1.5 rounded-xl bg-white/[0.05] border border-white/[0.08] text-center hover:bg-cyan-500/20 transition-colors">
            <div class="text-[9px] text-cyan-300 font-bold font-mono">🛣 Route</div>
          </button>
          <button onclick="phoneFeedback('Background sync pinged Firestore')" class="p-1.5 rounded-xl bg-white/[0.05] border border-white/[0.08] text-center hover:bg-cyan-500/20 transition-colors">
            <div class="text-[9px] text-cyan-300 font-bold font-mono">☁ Sync</div>
          </button>
        </div>

        <!-- App Architecture & Specs -->
        <div class="space-y-1.5 flex-1">
          <span class="text-[8px] font-mono text-zinc-400 uppercase tracking-wider block">Production Stack</span>
          
          <div class="p-1.5 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-between text-[10px]">
            <span class="text-zinc-300 font-mono">State Management</span>
            <span class="text-cyan-400 font-semibold font-mono">BLoC & Cubit</span>
          </div>

          <div class="p-1.5 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-between text-[10px]">
            <span class="text-zinc-300 font-mono">Dependency Injection</span>
            <span class="text-purple-400 font-semibold font-mono">GetIt + Injectable</span>
          </div>
        </div>

        <!-- Interactive Notice -->
        <div id="phone-feedback" class="text-center text-[9px] font-mono text-cyan-400 py-0.5">
          Tap buttons to simulate live location events
        </div>
      </div>
    `
  },

  digitalUpleta: {
    name: "Digital Upleta",
    badge: "1k+ Downloads • Flutter & Provider • FCM & Firestore",
    type: "Civic Portal",
    accent: "from-purple-500 to-pink-600",
    render: () => `
      <div class="h-full flex flex-col justify-between py-1">
        <!-- App Bar -->
        <div class="flex items-center justify-between pb-2">
          <div class="flex items-center gap-1.5">
            <div class="w-6 h-6 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs font-bold font-mono">
              DU
            </div>
            <div>
              <span class="text-xs font-bold text-white tracking-wide block leading-none">Digital Upleta</span>
              <span class="text-[8px] text-purple-300 font-mono">1,000+ Downloads</span>
            </div>
          </div>
          <span class="text-[9px] font-mono text-purple-400 bg-purple-950/80 px-1.5 py-0.5 rounded border border-purple-800/60">FCM READY</span>
        </div>

        <!-- Live Announcement Banner -->
        <div class="rounded-2xl bg-gradient-to-tr from-purple-900/60 via-slate-900 to-dark-950 p-2.5 border border-purple-500/30 text-white">
          <div class="flex items-center justify-between mb-1">
            <span class="text-[8px] font-mono uppercase text-purple-300 flex items-center gap-1">
              <span class="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
              City Notification Broadcast
            </span>
            <span class="text-[8px] font-mono text-zinc-400">Just now</span>
          </div>
          <div class="text-[11px] font-semibold text-white">Ward 4 Water Supply Update</div>
          <p class="text-[9px] text-zinc-300 mt-0.5 line-clamp-1">Maintenance scheduled 9 AM to 1 PM. Normal service resumes by 2 PM.</p>
        </div>

        <!-- Citizen Services Grid -->
        <div class="grid grid-cols-2 gap-1.5 my-2">
          <div onclick="phoneFeedback('Civic request submitted to Firestore')" class="p-2 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.08] cursor-pointer">
            <div class="text-base mb-0.5">🏛</div>
            <div class="text-[10px] font-bold text-white">Civic Requests</div>
            <div class="text-[8px] text-zinc-400">Track complaints</div>
          </div>
          <div onclick="phoneFeedback('Dialing Emergency Helpline: 112')" class="p-2 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.08] cursor-pointer">
            <div class="text-base mb-0.5">🚨</div>
            <div class="text-[10px] font-bold text-white">Emergency</div>
            <div class="text-[8px] text-zinc-400">24/7 Helpline</div>
          </div>
        </div>

        <!-- Sync Architecture Info -->
        <div class="p-2 rounded-xl bg-white/[0.02] border border-white/[0.04] space-y-1">
          <div class="flex justify-between items-center text-[9px] font-mono">
            <span class="text-zinc-400">Cloud Sync:</span>
            <span class="text-purple-300">Firebase Firestore</span>
          </div>
          <div class="flex justify-between items-center text-[9px] font-mono">
            <span class="text-zinc-400">Push Notifications:</span>
            <span class="text-emerald-400">FCM (Cloud Messaging)</span>
          </div>
        </div>

        <!-- Interactive Notice -->
        <div id="phone-feedback" class="text-center text-[9px] font-mono text-purple-400 py-0.5">
          Live Firestore listener active
        </div>
      </div>
    `
  },

  payments: {
    name: "Payments & Auth",
    badge: "Razorpay & Stripe • Encrypted Checkout",
    type: "FinTech Module",
    accent: "from-emerald-500 to-teal-600",
    render: () => `
      <div class="h-full flex flex-col justify-between py-1">
        <!-- App Bar -->
        <div class="flex items-center justify-between pb-2">
          <div class="flex items-center gap-1.5">
            <div class="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold font-mono">
              ₹
            </div>
            <div>
              <span class="text-xs font-bold text-white tracking-wide block leading-none">Gateway Module</span>
              <span class="text-[8px] text-emerald-400 font-mono">Razorpay & Stripe</span>
            </div>
          </div>
          <span class="text-[9px] font-mono text-emerald-400 bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-800/60">256-BIT SSL</span>
        </div>

        <!-- Payment Card Simulation -->
        <div class="rounded-2xl bg-gradient-to-tr from-emerald-950/60 via-zinc-900 to-slate-900 p-3 border border-emerald-500/30 text-white relative">
          <div class="flex justify-between items-center text-[9px] font-mono text-zinc-400 mb-1">
            <span>INVOICE #GT-2024</span>
            <span class="text-emerald-400 font-bold">VERIFIED</span>
          </div>
          <div class="text-lg font-bold font-mono text-white">₹ 4,999.00</div>
          <div class="text-[9px] text-emerald-300 mt-0.5">Encrypted token transaction</div>
        </div>

        <!-- Payment Mode Selectors -->
        <div class="space-y-1.5 my-2">
          <button onclick="phoneFeedback('Razorpay Checkout Sheet Launched')" class="w-full p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:bg-emerald-500/20 flex items-center justify-between text-left transition-colors">
            <div class="flex items-center gap-2">
              <span class="text-sm">💳</span>
              <div>
                <div class="text-[10px] font-bold text-white">Razorpay (UPI / Cards / NetBanking)</div>
                <div class="text-[8px] text-zinc-400">Zero-latency webhook callback</div>
              </div>
            </div>
            <span class="text-[10px] font-mono text-cyan-400">Test ›</span>
          </button>

          <button onclick="phoneFeedback('Stripe PaymentSheet Ready')" class="w-full p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:bg-purple-500/20 flex items-center justify-between text-left transition-colors">
            <div class="flex items-center gap-2">
              <span class="text-sm">🌍</span>
              <div>
                <div class="text-[10px] font-bold text-white">Stripe International Cards</div>
                <div class="text-[8px] text-zinc-400">3D Secure (3DS2) Auth</div>
              </div>
            </div>
            <span class="text-[10px] font-mono text-purple-400">Test ›</span>
          </button>
        </div>

        <!-- Interactive Notice -->
        <div id="phone-feedback" class="text-center text-[9px] font-mono text-emerald-400 py-0.5">
          Tap gateway to trigger mock checkout
        </div>
      </div>
    `
  }
};

let currentAppKey = "spotiz";

function renderCurrentApp() {
  const container = document.getElementById("phone-screen-content");
  const badgeInfo = document.getElementById("app-badge-info");
  const currentApp = APPS[currentAppKey];

  if (!container || !currentApp) return;

  container.innerHTML = currentApp.render();
  if (badgeInfo) {
    const dotColor = currentAppKey === 'spotiz' ? 'bg-cyan-400' : currentAppKey === 'digitalUpleta' ? 'bg-purple-400' : 'bg-emerald-400';
    badgeInfo.innerHTML = `
      <span class="w-2 h-2 rounded-full ${dotColor}"></span>
      <span>${currentApp.badge}</span>
    `;
  }
}

function selectAppTab(appKey) {
  if (!APPS[appKey]) return;
  currentAppKey = appKey;

  // Update tabs active class
  document.querySelectorAll(".app-tab").forEach(tab => {
    if (tab.getAttribute("data-app") === appKey) {
      tab.classList.add("active");
      tab.classList.remove("text-zinc-400");
      tab.classList.add("text-zinc-300");
    } else {
      tab.classList.remove("active");
      tab.classList.remove("text-zinc-300");
      tab.classList.add("text-zinc-400");
    }
  });

  renderCurrentApp();
}

function phoneFeedback(msg) {
  const feedbackEl = document.getElementById("phone-feedback");
  if (feedbackEl) {
    feedbackEl.innerText = msg;
    feedbackEl.classList.add("text-white");
    setTimeout(() => {
      feedbackEl.classList.remove("text-white");
    }, 1800);
  }
}

window.selectAppTab = selectAppTab;
window.phoneFeedback = phoneFeedback;

// ==========================================
// 3. MOUSE SPOTLIGHT (Linear / Apple style)
// ==========================================
function initSpotlight() {
  const spotlight = document.getElementById("mouse-spotlight");
  const cards = document.querySelectorAll(".bento-card");

  window.addEventListener("mousemove", (e) => {
    if (spotlight) {
      spotlight.style.setProperty("--cursor-x", `${e.clientX}px`);
      spotlight.style.setProperty("--cursor-y", `${e.clientY}px`);
      spotlight.style.opacity = "1";
    }

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  });

  window.addEventListener("mouseleave", () => {
    if (spotlight) spotlight.style.opacity = "0";
  });
}

// ==========================================
// 4. INTERACTIVE TERMINAL FOR DHARMAPALSINH
// ==========================================
const COMMANDS = {
  help: () => `
    Available commands:
    - <span class="text-cyan-400 font-bold">experience</span> : Current & past engineering roles (Gatetouch, Dots and Coms)
    - <span class="text-purple-400 font-bold">apps</span>       : Production apps published on Google Play Store
    - <span class="text-emerald-400 font-bold">skills</span>     : Core Flutter, Kotlin, State & Architecture skills
    - <span class="text-amber-400 font-bold">education</span>  : Degree & MSU Baroda details
    - <span class="text-pink-400 font-bold">contact</span>    : Direct email, phone (+91 99099 32330), LinkedIn
    - <span class="text-zinc-400 font-bold">clear</span>      : Clear the screen
  `,
  experience: () => `
    <span class="text-white font-bold">Work Experience:</span><br>
    1. <span class="text-cyan-400 font-semibold">Flutter Developer @ Gatetouch</span> (Sep 2022 – Present | Vadodara)<br>
       - Architecting cross-platform Flutter apps scaling <span class="text-emerald-400 font-semibold">10K+ Play Store downloads</span>.<br>
       - BLoC, Provider, GetIt, Injectable, Clean Architecture.<br>
       - Real-time Google Maps geofencing, background GPS tracking, and route optimization.<br>
       - Firebase (Auth, Firestore, FCM, Crashlytics) & Payments (Razorpay, Stripe).<br><br>
    2. <span class="text-purple-400 font-semibold">Mobile App Developer Intern @ Dots and Coms</span> (May 2022 – Jul 2022)<br>
       - Native Android development with Kotlin & Jetpack Compose.<br>
       - Dagger/Hilt Dependency Injection & RESTful API integration.
  `,
  apps: () => `
    <span class="text-white font-bold">Published Google Play Store Apps:</span><br>
    1. <span class="text-cyan-400 font-bold">Spotiz (10,000+ Downloads)</span><br>
       - Real-time location streaming, Google Maps optimization, BLoC state isolation, Firebase backend.<br>
    2. <span class="text-purple-400 font-bold">Digital Upleta (1,000+ Downloads)</span><br>
       - Citizen-focused city services app with FCM push notifications, cached REST APIs, and Firestore listeners.
  `,
  skills: () => `
    <span class="text-white font-bold">Technical Arsenal:</span><br>
    - <span class="text-cyan-400">Languages:</span> Dart, Kotlin, Java, SQL<br>
    - <span class="text-purple-400">Frameworks:</span> Flutter (iOS & Android), Android SDK, Jetpack Compose<br>
    - <span class="text-emerald-400">State & DI:</span> BLoC, Provider, GetIt, Injectable, Dagger/Hilt<br>
    - <span class="text-amber-400">Architecture:</span> Clean Architecture, MVVM, Repository Pattern<br>
    - <span class="text-rose-400">APIs & Cloud:</span> Firebase (Auth, Firestore, FCM, Crashlytics), REST APIs<br>
    - <span class="text-indigo-400">Payments & Maps:</span> Razorpay, Stripe, Google Maps API, Geofencing
  `,
  education: () => `
    <span class="text-white font-bold">Education:</span><br>
    - <span class="text-cyan-400">Bachelor of Computer Applications (BCA Hons.)</span> (2019 – 2022)<br>
    - The Maharaja Sayajirao University of Baroda (MSU Baroda), Vadodara, Gujarat<br>
    - <span class="text-emerald-400 font-semibold">CGPA: 8.2 / 10</span>
  `,
  contact: () => `
    <span class="text-white font-bold">Contact Dharmapalsinh Vaghela:</span><br>
    - Email: <a href="mailto:${USER_CONFIG.email}" class="text-cyan-400 underline">${USER_CONFIG.email}</a><br>
    - Phone: <span class="text-emerald-400 font-semibold">${USER_CONFIG.phone}</span><br>
    - Location: ${USER_CONFIG.location}<br>
    - LinkedIn: <a href="${USER_CONFIG.linkedin}" target="_blank" class="text-purple-400 underline">linkedin.com/in/dharmapalsinh-vaghela</a><br>
    - GitHub: <a href="${USER_CONFIG.github}" target="_blank" class="text-cyan-400 underline">github.com/Dharmapalsinh</a>
  `,
  clear: () => "CLEAR"
};

function runCommand(cmdString) {
  const terminalOutput = document.getElementById("terminal-output");
  if (!terminalOutput) return;

  const rawCmd = (cmdString || "").trim().toLowerCase();
  if (!rawCmd) return;

  if (rawCmd === "clear") {
    terminalOutput.innerHTML = `<div class="text-zinc-500">// Terminal cleared. Type 'help' for commands.</div>`;
    return;
  }

  // Add input line
  const cmdLine = document.createElement("div");
  cmdLine.innerHTML = `<span class="text-emerald-400">&gt;</span> <span class="text-zinc-200">${escapeHtml(cmdString)}</span>`;
  terminalOutput.appendChild(cmdLine);

  // Add response
  const responseDiv = document.createElement("div");
  responseDiv.className = "pl-3 text-zinc-300";

  if (COMMANDS[rawCmd]) {
    responseDiv.innerHTML = COMMANDS[rawCmd]();
  } else {
    responseDiv.innerHTML = `<span class="text-rose-400">Command '${escapeHtml(rawCmd)}' not found. Type <span class="text-cyan-400 underline cursor-pointer" onclick="runCommand('help')">help</span> for options.</span>`;
  }

  terminalOutput.appendChild(responseDiv);
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

window.runCommand = runCommand;

function escapeHtml(string) {
  return String(string).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ==========================================
// 5. TOAST NOTIFICATION & CLIPBOARD COPY
// ==========================================
function showToast(message) {
  const toast = document.getElementById("toast");
  const msgEl = document.getElementById("toast-message");
  if (!toast) return;

  if (msgEl) msgEl.innerText = message;
  toast.classList.remove("translate-y-20", "opacity-0", "pointer-events-none");
  toast.classList.add("translate-y-0", "opacity-100");

  setTimeout(() => {
    toast.classList.remove("translate-y-0", "opacity-100");
    toast.classList.add("translate-y-20", "opacity-0", "pointer-events-none");
  }, 2500);
}

function copyEmail() {
  const email = USER_CONFIG.email;
  navigator.clipboard.writeText(email).then(() => {
    showToast(`Copied: ${email}`);
  }).catch(() => {
    showToast(`Email: ${email}`);
  });
}

function copyPhone() {
  const phone = USER_CONFIG.phone;
  navigator.clipboard.writeText(phone).then(() => {
    showToast(`Copied Phone: ${phone}`);
  }).catch(() => {
    showToast(`Phone: ${phone}`);
  });
}

// ==========================================
// 6. LIVE PHONE CLOCK
// ==========================================
function updatePhoneClock() {
  const clock = document.getElementById("phone-clock");
  if (!clock) return;
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  clock.innerText = `${hours}:${minutes}`;
}

// ==========================================
// 7. INITIALIZATION ON DOM READY
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initSpotlight();
  renderCurrentApp();
  updatePhoneClock();
  setInterval(updatePhoneClock, 30000);

  // App tab click listeners
  document.querySelectorAll(".app-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      selectAppTab(tab.getAttribute("data-app"));
    });
  });

  // Copy email & phone listeners
  const copyNavBtn = document.getElementById("copy-email-nav-btn");
  const copyBottomBtn = document.getElementById("copy-email-bottom-btn");
  const copyPhoneBtn = document.getElementById("copy-phone-btn");

  if (copyNavBtn) copyNavBtn.addEventListener("click", copyEmail);
  if (copyBottomBtn) copyBottomBtn.addEventListener("click", copyEmail);
  if (copyPhoneBtn) copyPhoneBtn.addEventListener("click", copyPhone);

  // Terminal input listener
  const termInput = document.getElementById("terminal-input");
  const termBtn = document.getElementById("terminal-submit-btn");

  if (termInput) {
    termInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        runCommand(termInput.value);
        termInput.value = "";
      }
    });
  }

  if (termBtn && termInput) {
    termBtn.addEventListener("click", () => {
      runCommand(termInput.value);
      termInput.value = "";
    });
  }
});
