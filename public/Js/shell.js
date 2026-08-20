(() => {
  "use strict";

  const HIDDEN = "translate-x-full";

  const NAV = [
    {
      id: "/dashboard",
      href: "./dashboard",
      label: "نمای کلی",
      icon: `<path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>`,
    },
    {
      id: "/analytics",
      href: "./analytics",
      label: "تحلیل‌ها",
      icon: `<path d="M4 19V5M4 19h16M8 15l3-3 2.5 2.5L18 9" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>`,
    },
    {
      id: "/projects",
      href: "./projects",
      label: "پروژه‌ها",
      icon: `<path d="M8 7h12M8 12h12M8 17h8M4 7h.01M4 12h.01M4 17h.01" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>`,
    },
    {
      id: "/team",
      href: "./team",
      label: "تیم",
      icon: `<path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><circle cx="9.5" cy="7.5" r="3.5" stroke="currentColor" stroke-width="1.7"/><path d="M19 8v6M16 11h6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>`,
    },
    {
      id: "/billing",
      href: "./billing",
      label: "صورتحساب",
      icon: `<rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.7"/><path d="M3 9h18M8 13h4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>`,
    },
    {
      id: "/settings",
      href: "./settings",
      label: "تنظیمات",
      icon: `<circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.7"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>`,
    },
  ];

  const pageId = window.location.pathname || "dashboard";
  const navMount = document.querySelector("[data-shell-nav]");
  if (navMount) {
    navMount.innerHTML = NAV.map(
      (item) => `
      <a href="${item.href}" class="nav-item ${item.id === pageId ? "active" : ""}" data-nav>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">${item.icon}</svg>
        ${item.label}
      </a>`,
    ).join("");
  }

  /* ---------- Toast ---------- */
  function ensureToast() {
    let el = document.getElementById("toast");
    if (!el) {
      el = document.createElement("div");
      el.id = "toast";
      el.className = "app-toast";
      el.setAttribute("role", "status");
      el.setAttribute("aria-live", "polite");
      document.body.appendChild(el);
    }
    return el;
  }

  window.HarborToast = function (message, ms = 2600) {
    const el = ensureToast();
    el.textContent = message;
    el.classList.add("is-shown");
    clearTimeout(window.HarborToast._t);
    window.HarborToast._t = setTimeout(
      () => el.classList.remove("is-shown"),
      ms,
    );
  };

  /* ---------- Sidebar ---------- */
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebarOverlay");
  const openBtn = document.getElementById("openSidebar");
  const closeBtn = document.getElementById("closeSidebar");

  function openSidebar() {
    if (!sidebar) return;
    sidebar.classList.add("open");
    sidebar.classList.remove(HIDDEN);
    overlay?.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  function closeSidebar() {
    if (!sidebar) return;
    sidebar.classList.remove("open");
    sidebar.classList.add(HIDDEN);
    overlay?.classList.add("hidden");
    document.body.style.overflow = "";
  }

  openBtn?.addEventListener("click", openSidebar);
  closeBtn?.addEventListener("click", closeSidebar);
  overlay?.addEventListener("click", closeSidebar);

  window.addEventListener("resize", () => {
    if (!sidebar) return;
    if (window.innerWidth >= 1024) {
      sidebar.classList.remove(HIDDEN, "open");
      overlay?.classList.add("hidden");
      document.body.style.overflow = "";
    } else if (!sidebar.classList.contains("open")) {
      sidebar.classList.add(HIDDEN);
    }
  });

  /* ---------- Active nav (close on mobile when navigating) ---------- */
  document.querySelectorAll("[data-nav]").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 1024) closeSidebar();
    });
  });

  /* ---------- Reveal ---------- */
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    requestAnimationFrame(() =>
      reveals.forEach((el) => el.classList.add("is-visible")),
    );
  }

  /* ---------- Page enter ---------- */
  document.documentElement.classList.add("page-ready");

  /* ---------- Ripple ---------- */
  document.addEventListener("click", (e) => {
    const target = e.target.closest(
      ".btn-primary, .btn-ghost, .ripple, .nav-item",
    );
    if (!target || target.classList.contains("no-ripple")) return;
    const rect = target.getBoundingClientRect();
    const ripple = document.createElement("span");
    ripple.className = "ripple-ink";
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
    target.classList.add("ripple-host");
    target.appendChild(ripple);
    setTimeout(() => ripple.remove(), 650);
  });

  /* ---------- Magnetic buttons ---------- */
  document.querySelectorAll(".magnetic").forEach((el) => {
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${x * 0.18}px, ${y * 0.22}px)`;
    });
    el.addEventListener("pointerleave", () => {
      el.style.transform = "";
    });
  });

  /* ---------- Tilt cards ---------- */
  document.querySelectorAll(".tilt-card").forEach((card) => {
    card.addEventListener("pointermove", (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      const rx = (py - 0.5) * -10;
      const ry = (px - 0.5) * 12;
      card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
      card.style.setProperty("--spot-x", `${px * 100}%`);
      card.style.setProperty("--spot-y", `${py * 100}%`);
    });
    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });

  /* ---------- Spotlight panels ---------- */
  document.querySelectorAll(".spotlight").forEach((panel) => {
    panel.addEventListener("pointermove", (e) => {
      const r = panel.getBoundingClientRect();
      panel.style.setProperty("--sx", `${e.clientX - r.left}px`);
      panel.style.setProperty("--sy", `${e.clientY - r.top}px`);
    });
  });

  /* ---------- Notifications drawer ---------- */
  const notifBtn = document.getElementById("notifBtn");
  const notifPanel = document.getElementById("notifPanel");
  notifBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    notifPanel?.classList.toggle("is-open");
  });
  document.addEventListener("click", (e) => {
    if (!notifPanel?.classList.contains("is-open")) return;
    if (!e.target.closest("#notifPanel, #notifBtn")) {
      notifPanel.classList.remove("is-open");
    }
  });

  /* ---------- Counter helper ---------- */
  window.HarborCount = function (root = document) {
    root.querySelectorAll("[data-count]").forEach((el) => {
      const target = parseFloat(el.dataset.count);
      const decimals = parseInt(el.dataset.decimals || "0", 10);
      const duration = 1200;
      const start = performance.now();
      function tick(now) {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        const value = target * eased;
        el.textContent = decimals
          ? value.toLocaleString("fa-IR", {
              minimumFractionDigits: decimals,
              maximumFractionDigits: decimals,
            })
          : Math.round(value).toLocaleString("fa-IR");
        if (t < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  };

  window.HarborCount();

  /* ---------- Progress bars ---------- */
  requestAnimationFrame(() => {
    document.querySelectorAll(".progress-bar").forEach((bar) => {
      bar.style.width = bar.dataset.width || "0%";
    });
  });

  /* ---------- Logout ---------- */
  document.getElementById("logoutBtn")?.addEventListener("click", () => {
    HarborToast("در حال خروج…");
    setTimeout(() => {
      window.location.href = "./auth";
    }, 600);
  });
})();
