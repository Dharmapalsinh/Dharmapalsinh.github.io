/**
 * Mobile Developer Portfolio - Core JavaScript
 * Featuring: Interactive Smartphone Sandbox, Spotlight Glow, 
 * Interactive Terminal, and Instant Configuration.
 */

// ==========================================
// 1. USER CONFIGURATION (Easily customize here!)
// ==========================================
const USER_CONFIG = {
  name: "Alex Chen",
  title: "Mobile Application Developer",
  specialization: "Flutter & Kotlin Native",
  email: "alex.chen.dev@example.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  location: "Worldwide / Remote",
  experienceYears: "4+",
  appsShipped: "18+",
  downloads: "150k+",
  crashFree: "99.8%"
};

// ==========================================
// 2. APPS DATA FOR THE INTERACTIVE SIMULATOR
// ==========================================
const APPS = {
  fintech: {
    name: "ApexPay",
    badge: "Flutter 3.x • BLoC Architecture",
    type: "Cross-Platform",
    accent: "from-cyan-500 to-blue-600",
    render: () => `
      <div class="h-full flex flex-col justify-between py-1">
        <!-- App Bar -->
        <div class="flex items-center justify-between pb-2">
          <div class="flex items-center gap-1.5">
            <div class="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs font-bold font-mono">
              AP
            </div>
            <span class="text-xs font-bold text-white tracking-wide">ApexPay</span>
          </div>
          <span class="text-[9px] font-mono text-cyan-400 bg-cyan-950/80 px-1.5 py-0.5 rounded border border-cyan-800/60">LIVE</span>
        </div>

        <!-- Virtual Card -->
        <div class="rounded-2xl bg-gradient-to-tr from-cyan-600 via-blue-700 to-slate-900 p-3 shadow-lg relative overflow-hidden text-white border border-cyan-400/20">
          <div class="flex justify-between items-start mb-2">
            <span class="text-[9px] uppercase font-mono tracking-widest text-cyan-200">Total Balance</span>
            <span class="text-[9px] font-mono bg-white/20 px-1 rounded">VISA</span>
          </div>
          <div class="text-lg font-bold font-mono tracking-tight">$24,850.40</div>
          <div class="flex justify-between items-end mt-2 text-[8px] font-mono text-cyan-100">
            <span>•••• 8492</span>
            <span>09/28</span>
          </div>
        </div>

        <!-- Quick Action Buttons -->
        <div class="grid grid-cols-3 gap-1.5 my-2">
          <button onclick="phoneFeedback('Sent $50 to Liam')" class="p-1.5 rounded-xl bg-white/[0.05] border border-white/[0.08] text-center hover:bg-cyan-500/20 transition-colors">
            <div class="text-[10px] text-cyan-400 font-bold">↑ Send</div>
          </button>
          <button onclick="phoneFeedback('QR Code generated')" class="p-1.5 rounded-xl bg-white/[0.05] border border-white/[0.08] text-center hover:bg-cyan-500/20 transition-colors">
            <div class="text-[10px] text-cyan-400 font-bold">↓ Receive</div>
          </button>
          <button onclick="phoneFeedback('Crypto portfolio loaded')" class="p-1.5 rounded-xl bg-white/[0.05] border border-white/[0.08] text-center hover:bg-cyan-500/20 transition-colors">
            <div class="text-[10px] text-cyan-400 font-bold">◈ Invest</div>
          </button>
        </div>

        <!-- Recent Transactions -->
        <div class="space-y-1.5 flex-1">
          <span class="text-[9px] font-mono text-zinc-400 uppercase tracking-wider block">Recent Activity</span>
          
          <div class="p-1.5 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-between">
            <div class="flex items-center gap-1.5">
              <div class="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] flex items-center justify-center font-bold">☕</div>
              <div>
                <div class="text-[10px] font-medium text-white leading-tight">Starbucks Reserve</div>
                <div class="text-[8px] text-zinc-500">Today, 8:42 AM</div>
              </div>
            </div>
            <span class="text-[10px] font-mono text-zinc-200">-$6.40</span>
          </div>

          <div class="p-1.5 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-between">
            <div class="flex items-center gap-1.5">
              <div class="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 text-[10px] flex items-center justify-center font-bold">💻</div>
              <div>
                <div class="text-[10px] font-medium text-white leading-tight">Client Direct Deposit</div>
                <div class="text-[8px] text-zinc-500">Yesterday</div>
              </div>
            </div>
            <span class="text-[10px] font-mono text-emerald-400">+$3,400.00</span>
          </div>
        </div>

        <!-- Interactive Notice -->
        <div id="phone-feedback" class="text-center text-[9px] font-mono text-cyan-400 py-0.5">
          Tap buttons above to interact
        </div>
      </div>
    `
  },

  fitness: {
    name: "PulseFit",
    badge: "Kotlin Native • Jetpack Compose + Room",
    type: "Android Native",
    accent: "from-purple-500 to-pink-600",
    render: () => `
      <div class="h-full flex flex-col justify-between py-1">
        <!-- App Bar -->
        <div class="flex items-center justify-between pb-2">
          <div class="flex items-center gap-1.5">
            <div class="w-6 h-6 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs font-bold font-mono">
              PF
            </div>
            <span class="text-xs font-bold text-white tracking-wide">PulseFit</span>
          </div>
          <span class="text-[9px] font-mono text-purple-400 bg-purple-950/80 px-1.5 py-0.5 rounded border border-purple-800/60">SYNCED</span>
        </div>

        <!-- Activity Ring Card -->
        <div class="rounded-2xl bg-gradient-to-tr from-purple-900/60 via-slate-900 to-dark-950 p-3 border border-purple-500/30 text-white">
          <div class="flex items-center justify-between">
            <div>
              <span class="text-[9px] font-mono text-purple-300 block uppercase">Daily Goal</span>
              <div class="text-base font-bold font-mono">8,420 <span class="text-[10px] text-zinc-400 font-normal">/ 10,000 steps</span></div>
            </div>
            <!-- Radial mini indicator -->
            <div class="relative w-10 h-10 flex items-center justify-center rounded-full bg-purple-500/10 border-2 border-purple-500 text-purple-300 font-mono text-[10px] font-bold">
              84%
            </div>
          </div>
          <!-- Progress bar -->
          <div class="w-full bg-zinc-800 h-1.5 rounded-full mt-2.5 overflow-hidden">
            <div class="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full" style="width: 84%"></div>
          </div>
        </div>

        <!-- Live Heart Rate Card -->
        <div class="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between my-1.5">
          <div class="flex items-center gap-2">
            <div class="w-7 h-7 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center text-xs font-bold animate-pulse">
              ♥
            </div>
            <div>
              <div class="text-[10px] font-bold text-white">Heart Rate</div>
              <div class="text-[8px] font-mono text-zinc-400">Resting: 62 BPM</div>
            </div>
          </div>
          <div class="text-right">
            <span class="text-sm font-bold font-mono text-rose-400">74</span>
            <span class="text-[8px] text-zinc-500 block">BPM</span>
          </div>
        </div>

        <!-- Workout Sessions mini -->
        <div class="space-y-1">
          <span class="text-[9px] font-mono text-zinc-400 uppercase tracking-wider block">Today's Session</span>
          <div class="p-2 rounded-xl bg-white/[0.02] border border-white/[0.04] flex justify-between items-center">
            <div>
              <div class="text-[10px] font-medium text-white">Outdoor 5K Run</div>
              <div class="text-[8px] text-zinc-500">Pace: 4'52" /km • 320 kcal</div>
            </div>
            <button onclick="phoneFeedback('Run route GPS exported')" class="text-[9px] font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20 hover:bg-purple-500/20">
              View GPS
            </button>
          </div>
        </div>

        <!-- Interactive Notice -->
        <div id="phone-feedback" class="text-center text-[9px] font-mono text-purple-400 py-0.5">
          Room DB local caching active
        </div>
      </div>
    `
  },

  music: {
    name: "ZenStream",
    badge: "Flutter • Audio Services & Custom Shaders",
    type: "Cross-Platform",
    accent: "from-emerald-500 to-teal-600",
    render: () => `
      <div class="h-full flex flex-col justify-between py-1">
        <!-- App Bar -->
        <div class="flex items-center justify-between pb-2">
          <div class="flex items-center gap-1.5">
            <div class="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold font-mono">
              ZS
            </div>
            <span class="text-xs font-bold text-white tracking-wide">ZenStream</span>
          </div>
          <span class="text-[9px] font-mono text-emerald-400 bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-800/60">FLAC 24-bit</span>
        </div>

        <!-- Album Artwork Preview -->
        <div class="rounded-2xl bg-gradient-to-tr from-emerald-900/60 via-zinc-900 to-slate-900 p-3 border border-emerald-500/30 text-center relative overflow-hidden">
          <div class="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-teal-400 via-emerald-500 to-blue-600 flex items-center justify-center shadow-lg shadow-emerald-500/20 mb-2">
            <span class="text-xl">🎧</span>
          </div>
          <div class="text-xs font-bold text-white leading-tight">Midnight Cyberpunk</div>
          <div class="text-[9px] font-mono text-emerald-300 mt-0.5">Synthwave Collective</div>
          
          <!-- Waveform Simulation -->
          <div class="flex items-center justify-center gap-1 mt-2.5 h-4">
            <div class="w-1 bg-emerald-400 rounded-full h-3 animate-pulse"></div>
            <div class="w-1 bg-emerald-400 rounded-full h-4 animate-pulse" style="animation-delay: 0.1s"></div>
            <div class="w-1 bg-emerald-400 rounded-full h-2 animate-pulse" style="animation-delay: 0.2s"></div>
            <div class="w-1 bg-emerald-400 rounded-full h-4 animate-pulse" style="animation-delay: 0.3s"></div>
            <div class="w-1 bg-emerald-400 rounded-full h-2.5 animate-pulse" style="animation-delay: 0.4s"></div>
          </div>
        </div>

        <!-- Playback Controller -->
        <div class="flex items-center justify-center gap-4 py-1">
          <button onclick="phoneFeedback('Previous track')" class="text-zinc-400 hover:text-white text-xs">⏮</button>
          <button onclick="phoneFeedback('Toggled Play / Pause')" class="w-8 h-8 rounded-full bg-emerald-500 text-dark-950 flex items-center justify-center font-bold shadow-lg shadow-emerald-500/30 text-xs">
            ▶
          </button>
          <button onclick="phoneFeedback('Next track')" class="text-zinc-400 hover:text-white text-xs">⏭</button>
        </div>

        <!-- Up Next Playlist -->
        <div class="p-1.5 rounded-xl bg-white/[0.02] border border-white/[0.04] flex justify-between items-center">
          <div class="text-[9px] text-zinc-300">Up Next: <span class="text-emerald-400 font-medium">Digital Horizon</span></div>
          <span class="text-[8px] font-mono text-zinc-500">3:42</span>
        </div>

        <!-- Interactive Notice -->
        <div id="phone-feedback" class="text-center text-[9px] font-mono text-emerald-400 py-0.5">
          Tap ▶ to toggle audio stream
        </div>
      </div>
    `
  }
};

let currentAppKey = "fintech";

function renderCurrentApp() {
  const container = document.getElementById("phone-screen-content");
  const badgeInfo = document.getElementById("app-badge-info");
  const currentApp = APPS[currentAppKey];

  if (!container || !currentApp) return;

  container.innerHTML = currentApp.render();
  if (badgeInfo) {
    const dotColor = currentAppKey === 'fintech' ? 'bg-cyan-400' : currentAppKey === 'fitness' ? 'bg-purple-400' : 'bg-emerald-400';
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
    }, 1500);
  }
}

// Make accessible to window
window.selectAppTab = selectAppTab;
window.phoneFeedback = phoneFeedback;

// ==========================================
// 3. MOUSE SPOTLIGHT ON CARDS (Linear / Apple aesthetic)
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
// 4. INTERACTIVE TERMINAL
// ==========================================
const COMMANDS = {
  help: () => `
    Available commands:
    - <span class="text-cyan-400 font-bold">apps</span>       : List featured production applications
    - <span class="text-purple-400 font-bold">skills</span>     : Show core mobile engineering competencies
    - <span class="text-emerald-400 font-bold">contact</span>    : Display direct contact & social channels
    - <span class="text-amber-400 font-bold">flutter</span>    : Check Flutter engine version & features
    - <span class="text-rose-400 font-bold">kotlin</span>     : Check Kotlin & Compose compiler capabilities
    - <span class="text-zinc-400 font-bold">clear</span>      : Clear the terminal screen
  `,
  apps: () => `
    <span class="text-white font-bold">Featured Shipped Applications:</span><br>
    1. <span class="text-cyan-400 font-semibold">ApexPay</span>: FinTech Crypto & Fiat Wallet (Flutter 3.x, BLoC, AES encryption)<br>
    2. <span class="text-purple-400 font-semibold">PulseFit</span>: Health & Activity Monitor (Kotlin Native, Jetpack Compose, Room DB)<br>
    3. <span class="text-emerald-400 font-semibold">ZenStream</span>: High-fidelity Audio & Podcast Streaming (Flutter, Clean Architecture)
  `,
  skills: () => `
    <span class="text-white font-bold">Technical Arsenal:</span><br>
    - <span class="text-cyan-400">Languages:</span> Dart, Kotlin, Java, Swift (Basic), TypeScript<br>
    - <span class="text-purple-400">Frameworks:</span> Flutter, Jetpack Compose, Android SDK, Material 3<br>
    - <span class="text-emerald-400">State & Arch:</span> BLoC, Riverpod, MVVM, MVI, Clean Architecture<br>
    - <span class="text-amber-400">Database & Network:</span> Room, SQLite, Hive, Ktor, Retrofit, Firebase
  `,
  contact: () => `
    <span class="text-white font-bold">Get In Touch:</span><br>
    - Email: <span class="text-cyan-400">${USER_CONFIG.email}</span><br>
    - GitHub: <a href="${USER_CONFIG.github}" target="_blank" class="text-purple-400 underline">${USER_CONFIG.github}</a><br>
    - LinkedIn: <a href="${USER_CONFIG.linkedin}" target="_blank" class="text-cyan-400 underline">${USER_CONFIG.linkedin}</a>
  `,
  flutter: () => `
    <span class="text-cyan-400">[✓] Flutter Engine 3.24+</span><br>
    - Impeller rendering engine enabled (vulkan / metal)<br>
    - Zero jank 60/120Hz smooth scrolling<br>
    - Multi-platform compilation (iOS, Android, Web, macOS)
  `,
  kotlin: () => `
    <span class="text-purple-400">[✓] Kotlin 2.0+ & Jetpack Compose</span><br>
    - Strong skipping mode enabled for optimized recomposition<br>
    - Coroutines & Kotlin StateFlow reactive streams<br>
    - Android 15 & edge-to-edge support ready
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
    responseDiv.innerHTML = `<span class="text-rose-400">Command not recognized: '${escapeHtml(rawCmd)}'. Type <span class="text-cyan-400 underline cursor-pointer" onclick="runCommand('help')">help</span> for available commands.</span>`;
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
    showToast(`Email copied: ${email}`);
  }).catch(() => {
    showToast(`Email: ${email}`);
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
  // Update name in DOM
  const navName = document.getElementById("nav-author-name");
  const heroName = document.getElementById("hero-name");
  const emailText = document.getElementById("copy-email-text");

  if (navName) navName.childNodes[0].nodeValue = USER_CONFIG.name + " ";
  if (heroName) heroName.innerText = USER_CONFIG.name;
  if (emailText) emailText.innerText = USER_CONFIG.email;

  // Initialize interactive features
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

  // Copy email listeners
  const copyNavBtn = document.getElementById("copy-email-nav-btn");
  const copyBottomBtn = document.getElementById("copy-email-bottom-btn");
  if (copyNavBtn) copyNavBtn.addEventListener("click", copyEmail);
  if (copyBottomBtn) copyBottomBtn.addEventListener("click", copyEmail);

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
