/**
 * MUHAMMAD ZAEEM - PORTFOLIO INTERACTIVITY ENGINE
 * Features: 3D Tilt, Mouse Radial Spotlight, Scroll Progress,
 * Reveal Observer, Interactive Case Studies, Dynamic Contact Routing & Clipboard Toasts
 */

// Project Case Study Details Data
const CASE_STUDIES = {
  attendance: {
    title: "Network-Fenced & Router-Geofenced Academic Attendance System",
    category: "University of Sahiwal · Enterprise Intranet",
    badge: "100% Offline Biometric Intranet",
    overview: "Built a high-security, zero-trust academic attendance system running completely offline inside the University of Sahiwal campus intranet. Solved off-campus spoofing and proxy attendance through an innovative 2-tier network fencing architecture and passwordless biometric validation.",
    architecture: [
      "Tier-1: Campus CIDR Subnet validation blocking all incoming external traffic.",
      "Tier-2: Classroom Wi-Fi router BSSID, MAC and local IP address fingerprinting preventing classroom-hopping proxies.",
      "W3C WebAuthn Integration: Leverages hardware-backed native smartphone biometrics (Face ID / Fingerprint sensor) eliminating the need for expensive physical fingerprint hardware machines.",
      "Automated Late-Lock Engine: ±15 minute strict dynamic lock with cryptographic HOD override audit logs.",
      "Real-Time Stream: Socket.io bidirectional connection for live classroom attendance rosters and instant multi-format (CSV, PDF, DOCX) bulk roster importing for 1,000+ students."
    ],
    tech: ["React.js", "Node.js", "Express.js", "Prisma ORM", "SQLite / PostgreSQL", "Socket.io", "Tailwind CSS", "WebAuthn API"],
    github: "https://github.com/zaeemstack",
    status: "Production Deployment (University Intranet)"
  },
  booking: {
    title: "University VC Appointment & Executive Booking Portal",
    category: "University of Sahiwal · Executive Scheduling",
    badge: "ACID Concurrency & Executive Scheduling",
    overview: "Engineered an on-premise executive meeting scheduling platform for the University of Sahiwal, digitizing and replacing manual paper coordination between faculty, department heads, and the Vice Chancellor's Secretariat.",
    architecture: [
      "Real-Time Slot Engine: 30-minute granular slot availability with millisecond conflict detection.",
      "Concurrency Control: Database-level ACID transaction isolation ensuring zero double-booking during peak reservation windows.",
      "VC Executive Dashboard: One-click approval, rejection with reason, custom slot blackouts, and complete CSV audit trail export.",
      "Automated Notification Queue: node-cron scheduled background workers paired with an SMTP email queue featuring 3x exponential retry resilience.",
      "Security: Role-Based Access Control (RBAC) with tokenized self-cancellation links."
    ],
    tech: ["React 18", "TypeScript", "Node.js", "Express.js", "Prisma ORM", "SQLite / PostgreSQL", "Tailwind CSS", "Docker"],
    github: "https://github.com/zaeemstack",
    status: "Production / Active System"
  },
  fieldshift: {
    title: "Field Shift – Climate-Resilient Agro-Intelligence Platform",
    category: "NASA Space Apps Challenge 2026",
    badge: "NASA MERRA-2 Satellite Analytics",
    overview: "Designed and built an edge-first, client-side agro-intelligence platform for the NASA Space Apps Challenge 2026. Tailored specifically for rural drylands and low-bandwidth mobile devices in arid climate zones.",
    architecture: [
      "NASA POWER API Pipeline: Ingested, transformed and normalized over 2 years (670+ daily records) of NASA MERRA-2 meteorological data (T2M, GWETTOP, PRECTOTCORR) across 4 high-risk zones in Niger.",
      "Decision Support Algorithms: Real-time calculation of Growing Degree Days (GDD), critical sowing trigger thresholds (>= 20 mm precipitation over 3 consecutive days), and post-monsoon soil moisture decay curves.",
      "Crop Rotation Logic: Multi-factor algorithms suggesting climate-hardy cereal-legume rotations (Millet + Cowpea) to cut agricultural water demand by 60% and naturally replenish soil nitrogen.",
      "Performance: Client-side compute architecture with zero server latency and offline data caching."
    ],
    tech: ["React 18", "JavaScript (ES6+)", "Tailwind CSS", "Vite", "NASA POWER REST API", "Git"],
    github: "https://github.com/zaeemstack/field-shift",
    status: "NASA Space Apps Challenge 2026"
  },
  ragdoctor: {
    title: "RAG Doctor – Autonomous LLM Diagnosis & Auto-Tuning Agent",
    category: "NVIDIA x Nebius Hackathon",
    badge: "Autonomous LLM Judging & RAG Optimization",
    overview: "Developed for the NVIDIA x Nebius Hackathon, RAG Doctor is an automated diagnostics, evaluation, and hyperparameter tuning agent for Retrieval-Augmented Generation (RAG) pipelines.",
    architecture: [
      "Automated Pipeline Inspection: Analyzes embedding drift, chunking chunk-size efficacy, retrieval recall, and context hallucination rates.",
      "LLM-as-a-Judge Evaluation: Multi-metric benchmarking measuring faithfulness, answer relevancy, and context precision.",
      "Auto-Tuning Feedback Loop: Automatically recommends and tests optimal top-k retrieval parameters, reranking thresholds, and system prompts.",
      "Interactive Telemetry Dashboard: Real-time latency waterfall charts and evaluation trace logs."
    ],
    tech: ["JavaScript", "Node.js", "LLM APIs", "Vector DBs", "RAG Triad Metrics", "Express.js"],
    github: "https://github.com/zaeemstack/rag-doctor",
    status: "NVIDIA x Nebius Hackathon Submission"
  },
  nexusscan: {
    title: "NexusScan AI – Campus Security & Attendance System",
    category: "Bano Qabil AI Hackathon",
    badge: "Computer Vision & Liveness Detection",
    overview: "An AI-integrated campus physical security and attendance ecosystem developed during the Bano Qabil AI Hackathon. Combines edge computer vision with multi-tier role-based access control.",
    architecture: [
      "Edge Face Recognition: High-accuracy facial feature extraction directly in the browser via Face API.",
      "Anti-Spoofing Liveness Detection: Real-time blink detection and eye-aspect-ratio (EAR) tracking preventing photo/video playback spoof attacks.",
      "Automated Alerting: WhatsApp automation via whatsapp-web.js sending instant visitor approvals and unauthorized access alerts.",
      "Security Architecture: Role-based JWT authentication (Admin, Faculty, Security Guard), MongoDB persistence, and encrypted audit logs."
    ],
    tech: ["JavaScript", "Node.js", "Express.js", "MongoDB", "Face API", "whatsapp-web.js", "JWT", "Tailwind CSS"],
    github: "https://github.com/zaeemstack/NexusScan-Ai",
    status: "Hackathon Project & Live Codebase"
  },
  whatsapp: {
    title: "AI-Powered Face Recognition & WhatsApp Alert Pipeline",
    category: "International Client Project",
    badge: "Python OpenCV & WhatsApp Automation",
    overview: "Client-server computer vision solution integrating a Python OpenCV facial recognition engine with a Node.js/Express real-time communication pipeline.",
    architecture: [
      "Computer Vision Module: Python OpenCV face extraction connecting via high-throughput REST APIs to a Node.js backend.",
      "Automated Notification Dispatch: whatsapp-web.js integration with multi-device session persistence sending automated arrival alerts to parents of 100+ students.",
      "Concurrency Resilience: Resolved server concurrency bottlenecks and queue mapping to guarantee zero duplicate or dropped alerts."
    ],
    tech: ["Python", "OpenCV", "Node.js", "Express.js", "whatsapp-web.js", "REST APIs", "MySQL"],
    github: "https://github.com/zaeemstack",
    status: "Delivered to International Client"
  }
};

document.addEventListener("DOMContentLoaded", () => {
  init3DTilt();
  initScrollProgress();
  initRevealAnimations();
  initMobileMenu();
  initInquiryRouter();
  initContactForm();
  initCaseStudyModal();
  initStatCounters();
});

/**
 * 1. 3D Card Tilt & Mouse Radial Spotlight
 */
function init3DTilt() {
  const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!isFinePointer || isReducedMotion) return;

  const tiltCards = document.querySelectorAll("[data-tilt]");

  tiltCards.forEach(card => {
    card.addEventListener("pointermove", e => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      const maxTilt = 6.5; // degrees
      const rx = (-y * maxTilt).toFixed(2);
      const ry = (x * maxTilt).toFixed(2);

      const gx = ((x + 0.5) * 100).toFixed(1);
      const gy = ((y + 0.5) * 100).toFixed(1);

      card.style.setProperty("--rx", `${rx}deg`);
      card.style.setProperty("--ry", `${ry}deg`);
      card.style.setProperty("--gx", `${gx}%`);
      card.style.setProperty("--gy", `${gy}%`);
    });

    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--rx", "0deg");
      card.style.setProperty("--ry", "0deg");
      card.style.setProperty("--gx", "50%");
      card.style.setProperty("--gy", "50%");
    });
  });
}

/**
 * 2. Scroll Progress Bar
 */
function initScrollProgress() {
  const progressBar = document.querySelector("[data-progress]");
  if (!progressBar) return;

  const updateProgress = () => {
    const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollTotal > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollTotal)) : 0;
    progressBar.style.transform = `scaleX(${progress})`;
  };

  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
  updateProgress();
}

/**
 * 3. Reveal Animations via IntersectionObserver
 */
function initRevealAnimations() {
  const reveals = document.querySelectorAll("[data-reveal]");
  if (!reveals.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    reveals.forEach(el => el.classList.add("is-in"));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-in");
        obs.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: "0px 0px -8% 0px",
    threshold: 0.1
  });

  reveals.forEach(el => observer.observe(el));
}

/**
 * 4. Mobile Navigation Drawer
 */
function initMobileMenu() {
  const menuBtn = document.querySelector("[data-menu-btn]");
  const nav = document.querySelector("[data-nav]");
  if (!menuBtn || !nav) return;

  const toggleNav = (open) => {
    menuBtn.setAttribute("aria-expanded", String(open));
    nav.setAttribute("data-open", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  };

  menuBtn.addEventListener("click", () => {
    const isOpen = menuBtn.getAttribute("aria-expanded") === "true";
    toggleNav(!isOpen);
  });

  nav.addEventListener("click", e => {
    if (e.target.closest("a")) {
      toggleNav(false);
    }
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && menuBtn.getAttribute("aria-expanded") === "true") {
      toggleNav(false);
      menuBtn.focus();
    }
  });

  // Active navigation highlight on scroll
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav a[href^='#']");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  }, { passive: true });
}

/**
 * 5. Inquiry Router (Pre-populates Contact Form)
 */
function initInquiryRouter() {
  const select = document.getElementById("cf-type");
  const form = document.getElementById("contact-form");
  const nameInput = document.getElementById("cf-name");

  document.querySelectorAll("[data-inquiry]").forEach(btn => {
    btn.addEventListener("click", e => {
      const routeVal = btn.dataset.inquiry;
      if (select && routeVal) {
        select.value = routeVal;
      }
      if (form) {
        form.scrollIntoView({ behavior: "smooth", block: "center" });
        if (nameInput) {
          setTimeout(() => nameInput.focus({ preventScroll: true }), 400);
        }
      }
    });
  });
}

/**
 * 6. Contact Form Dispatch
 */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const statusEl = form.querySelector("[data-status]");
  const submitBtn = form.querySelector("[data-submit]");

  form.addEventListener("submit", e => {
    e.preventDefault();

    const type = document.getElementById("cf-type")?.value || "General Inquiry";
    const name = document.getElementById("cf-name")?.value.trim();
    const email = document.getElementById("cf-email")?.value.trim();
    const message = document.getElementById("cf-message")?.value.trim();

    if (!name || !email || !message) {
      if (statusEl) {
        statusEl.dataset.state = "error";
        statusEl.textContent = "Please fill in all required fields.";
      }
      return;
    }

    if (submitBtn) submitBtn.disabled = true;
    if (statusEl) {
      statusEl.dataset.state = "pending";
      statusEl.textContent = "Preparing message...";
    }

    // Build mailto fallback / direct action
    const subject = encodeURIComponent(`[${type}] Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Hello Zaeem,\n\nName: ${name}\nEmail: ${email}\nInquiry Type: ${type}\n\nMessage:\n${message}\n\nSent from your portfolio website.`
    );
    const mailtoUrl = `mailto:zaeemstack@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      // Trigger mail client
      window.location.href = mailtoUrl;

      if (statusEl) {
        statusEl.dataset.state = "success";
        statusEl.textContent = "Message client opened! You can also email me directly at zaeemstack@gmail.com";
      }
      if (submitBtn) submitBtn.disabled = false;
      form.reset();
      showToast("Email draft opened! Looking forward to connecting.");
    }, 600);
  });
}

/**
 * 7. Case Study Modal Engine
 */
function initCaseStudyModal() {
  const modalOverlay = document.getElementById("case-study-modal");
  if (!modalOverlay) return;

  const closeBtn = modalOverlay.querySelector(".modal-close");
  const modalTitle = document.getElementById("modal-project-title");
  const modalCategory = document.getElementById("modal-project-category");
  const modalBadge = document.getElementById("modal-project-badge");
  const modalOverview = document.getElementById("modal-project-overview");
  const modalArchList = document.getElementById("modal-project-arch");
  const modalTechList = document.getElementById("modal-project-tech");
  const modalGithubLink = document.getElementById("modal-github-link");

  const openModal = (key) => {
    const data = CASE_STUDIES[key];
    if (!data) return;

    modalTitle.textContent = data.title;
    modalCategory.textContent = data.category;
    modalBadge.textContent = data.badge;
    modalOverview.textContent = data.overview;

    // Architecture items
    modalArchList.innerHTML = "";
    data.architecture.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      modalArchList.appendChild(li);
    });

    // Tech tags
    modalTechList.innerHTML = "";
    data.tech.forEach(t => {
      const pill = document.createElement("span");
      pill.className = "pill";
      pill.textContent = t;
      modalTechList.appendChild(pill);
    });

    // GitHub link
    if (modalGithubLink) {
      modalGithubLink.href = data.github;
    }

    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "";
  };

  document.querySelectorAll("[data-case-study]").forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      openModal(btn.dataset.caseStudy);
    });
  });

  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  modalOverlay.addEventListener("click", e => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
      closeModal();
    }
  });
}

/**
 * 8. Stat Counters Animation
 */
function initStatCounters() {
  const stats = document.querySelectorAll(".stat dd");
  if (!stats.length) return;

  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        stats.forEach(counter => {
          const targetText = counter.textContent.trim();
          const match = targetText.match(/^([0-9.]+)(.*)$/);
          if (!match) return;

          const endVal = parseFloat(match[1]);
          const suffix = match[2];
          const duration = 1200; // ms
          const startTime = performance.now();

          const updateNumber = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(1, elapsed / duration);
            // Ease out cubic
            const currentVal = Math.floor(endVal * (1 - Math.pow(1 - progress, 3)));
            counter.textContent = `${currentVal}${suffix}`;

            if (progress < 1) {
              requestAnimationFrame(updateNumber);
            } else {
              counter.textContent = targetText;
            }
          };

          requestAnimationFrame(updateNumber);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.querySelector(".stats");
  if (statsSection) observer.observe(statsSection);
}

/**
 * 9. Toast Notification & Copy to Clipboard
 */
window.copyToClipboard = function(text, label = "Item") {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`Copied ${label} to clipboard!`);
    }).catch(() => {
      fallbackCopy(text, label);
    });
  } else {
    fallbackCopy(text, label);
  }
};

function fallbackCopy(text, label) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  document.execCommand("copy");
  document.body.removeChild(ta);
  showToast(`Copied ${label} to clipboard!`);
}

function showToast(message) {
  let toast = document.getElementById("site-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "site-toast";
    toast.className = "toast";
    toast.innerHTML = `<span class="toast-dot"></span><span id="toast-text"></span>`;
    document.body.appendChild(toast);
  }

  const toastText = document.getElementById("toast-text");
  if (toastText) toastText.textContent = message;

  toast.classList.add("show");
  clearTimeout(window._toastTimeout);
  window._toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}
