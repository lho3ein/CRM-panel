(() => {
  "use strict";

  const page = document.querySelector("[data-page]")?.dataset.page;

  /* ===================== Analytics ===================== */
  if (page === "analytics") {
    const bars = document.querySelectorAll(".bar-chart-bar");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            bars.forEach((b, i) => {
              setTimeout(() => b.classList.add("is-in"), i * 70);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 },
    );
    const chart = document.getElementById("barChart");
    if (chart) observer.observe(chart);

    document.querySelectorAll("[data-filter]").forEach((chip) => {
      chip.addEventListener("click", () => {
        document
          .querySelectorAll("[data-filter]")
          .forEach((c) => c.classList.remove("is-active"));
        chip.classList.add("is-active");
        bars.forEach((b) => b.classList.remove("is-in"));
        requestAnimationFrame(() => {
          bars.forEach((b, i) => {
            const base = Number(b.dataset.h);
            const jitter = 0.7 + Math.random() * 0.5;
            b.style.height = `${Math.min(100, base * jitter)}%`;
            setTimeout(() => b.classList.add("is-in"), i * 60);
          });
        });
        HarborToast(`بازه «${chip.textContent.trim()}» اعمال شد`);
      });
    });

    document.querySelectorAll(".donut-seg").forEach((seg) => {
      seg.addEventListener("pointerenter", () => {
        document.getElementById("donutLabel").textContent = seg.dataset.label;
        document.getElementById("donutValue").textContent = seg.dataset.value;
        seg.style.opacity = "1";
        document.querySelectorAll(".donut-seg").forEach((s) => {
          if (s !== seg) s.style.opacity = "0.35";
        });
      });
      seg.addEventListener("pointerleave", () => {
        document.getElementById("donutLabel").textContent = "کل ترافیک";
        document.getElementById("donutValue").textContent = "۱۲۴ هزار";
        document.querySelectorAll(".donut-seg").forEach((s) => {
          s.style.opacity = "1";
        });
      });
    });
  }

  /* ===================== Projects ===================== */
  if (page === "projects") {
    console.log(
      "filteeerrr",
      document.querySelectorAll("[data-project-filter]").length,
    );

    const board = document.getElementById("kanban");
    let dragEl = null;

    document.querySelectorAll(".kanban-card").forEach((card) => {
      card.draggable = true;
      card.addEventListener("dragstart", () => {
        dragEl = card;
        card.classList.add("is-dragging");
      });
      card.addEventListener("dragend", () => {
        card.classList.remove("is-dragging");
        document
          .querySelectorAll(".kanban-col")
          .forEach((c) => c.classList.remove("is-drop"));
        dragEl = null;
      });
    });

    document.querySelectorAll(".kanban-col").forEach((col) => {
      col.addEventListener("dragover", (e) => {
        e.preventDefault();
        col.classList.add("is-drop");
      });
      col.addEventListener("dragleave", () => col.classList.remove("is-drop"));
      col.addEventListener("drop", (e) => {
        e.preventDefault();
        col.classList.remove("is-drop");
        const list = col.querySelector("[data-list]");
        if (dragEl && list) {
          list.appendChild(dragEl);
          HarborToast(`کارت به «${col.dataset.title}» منتقل شد`);
        }
      });
    });

    document.querySelectorAll("[data-project-filter]").forEach((chip) => {
      chip.addEventListener("click", () => {
        document
          .querySelectorAll("[data-project-filter]")
          .forEach((c) => c.classList.remove("is-active"));
        chip.classList.add("is-active");
        const key = chip.dataset.projectFilter;
        document.querySelectorAll("[data-status]").forEach((card) => {
          const show = key === "all" || card.dataset.status === key;
          card.style.display = show ? "" : "none";
          if (show) {
            card.classList.remove("is-visible");
            requestAnimationFrame(() => card.classList.add("is-visible"));
          }
        });
      });
    });

    const modal = document.getElementById("projectModal");
    document
      .getElementById("openProjectModal")
      ?.addEventListener("click", () => {
        modal?.classList.add("is-open");
      });
    document
      .getElementById("closeProjectModal")
      ?.addEventListener("click", () => {
        modal?.classList.remove("is-open");
      });
    modal?.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("is-open");
    });
    document
      .getElementById("createProjectForm")
      ?.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("newProjectName").value.trim();
        if (!name) {
          HarborToast("نام پروژه را وارد کنید");
          return;
        }
        modal.classList.remove("is-open");
        HarborToast(`پروژه «${name}» ساخته شد`);
        e.target.reset();
      });

    board?.addEventListener("click", (e) => {
      const card = e.target.closest(".project-card");
      if (!card) return;
      card.classList.add("ring-2", "ring-harbor-400");
      setTimeout(() => card.classList.remove("ring-2", "ring-harbor-400"), 700);
      HarborToast(`پروژه «${card.dataset.name}» باز شد`);
    });
  }

  /* ===================== Team ===================== */
  if (page === "team") {
    document.querySelectorAll("[data-role]").forEach((select) => {
      select.addEventListener("change", () => {
        const name = select.closest("[data-member]")?.dataset.member || "عضو";
        HarborToast(
          `نقش ${name} به «${select.options[select.selectedIndex].text}» تغییر کرد`,
        );
      });
    });

    document.querySelectorAll("[data-message]").forEach((btn) => {
      btn.addEventListener("click", () => {
        HarborToast(`پیام برای ${btn.dataset.message} آماده شد`);
        btn.classList.add("scale-95");
        setTimeout(() => btn.classList.remove("scale-95"), 180);
      });
    });

    const inviteModal = document.getElementById("inviteModal");
    document.getElementById("openInvite")?.addEventListener("click", () => {
      inviteModal?.classList.add("is-open");
    });
    document.getElementById("closeInvite")?.addEventListener("click", () => {
      inviteModal?.classList.remove("is-open");
    });
    inviteModal?.addEventListener("click", (e) => {
      if (e.target === inviteModal) inviteModal.classList.remove("is-open");
    });
    document.getElementById("inviteForm")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("inviteEmail").value.trim();
      if (!email) return HarborToast("ایمیل را وارد کنید");
      inviteModal.classList.remove("is-open");
      HarborToast(`دعوت برای ${email} ارسال شد`);
      e.target.reset();
    });
  }

  /* ===================== Billing ===================== */
  if (page === "billing") {
    document.querySelectorAll(".plan-card").forEach((card) => {
      card.addEventListener("click", (e) => {
        if (e.target.closest("button")) return;
        document
          .querySelectorAll(".plan-card")
          .forEach((c) => c.classList.remove("is-selected"));
        card.classList.add("is-selected");
        HarborToast(`پلن «${card.dataset.plan}» انتخاب شد`);
      });
    });

    document.querySelectorAll(".plan-card button").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const card = btn.closest(".plan-card");
        if (!card) return;
        document
          .querySelectorAll(".plan-card")
          .forEach((c) => c.classList.remove("is-selected"));
        card.classList.add("is-selected");
        if (!btn.hasAttribute("data-pay")) {
          HarborToast(`پلن «${card.dataset.plan}» انتخاب شد`);
        }
      });
    });

    document.querySelectorAll("[data-pay]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        btn.classList.add("btn-loading");
        const spin = document.createElement("span");
        spin.className = "btn-spinner";
        btn.appendChild(spin);
        setTimeout(() => {
          btn.classList.remove("btn-loading");
          spin.remove();
          HarborToast("پرداخت آزمایشی با موفقیت ثبت شد");
        }, 1000);
      });
    });

    document.querySelectorAll("[data-invoice]").forEach((row) => {
      row.addEventListener("click", () => {
        HarborToast(`فاکتور ${row.dataset.invoice} دانلود شد`);
      });
    });
  }

  /* ===================== Settings ===================== */
  //-------------remove shavad code tabdil shode
  if (page === "settings") {
    document.querySelectorAll(".toggle-switch").forEach((tog) => {
      tog.addEventListener("click", () => {
        tog.classList.toggle("is-on");
        const on = tog.classList.contains("is-on");
        tog.setAttribute("aria-checked", on ? "true" : "false");
        HarborToast(`${tog.dataset.label} ${on ? "فعال" : "غیرفعال"} شد`);
      });
    });
    //------------------------

    document.getElementById("settingsForm")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const btn = document.getElementById("saveSettings");
      btn?.classList.add("btn-loading");
      const spin = document.createElement("span");
      spin.className = "btn-spinner";
      btn?.appendChild(spin);
      setTimeout(() => {
        btn?.classList.remove("btn-loading");
        spin.remove();
        HarborToast("تنظیمات ذخیره شد");
      }, 900);
    });

    //-------------remove shavad code tabdil shode
    document.querySelectorAll("[data-tab]").forEach((tab) => {
      tab.addEventListener("click", () => {
        document
          .querySelectorAll("[data-tab]")
          .forEach((t) => t.classList.remove("is-active"));
        tab.classList.add("is-active");
        document.querySelectorAll("[data-panel]").forEach((p) => {
          p.classList.toggle("hidden", p.dataset.panel !== tab.dataset.tab);
        });
      });
    });
    //------------------------
  }
})();
