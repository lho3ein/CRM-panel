(() => {
  "use strict";

  const chartData = {
    "7d": [32, 40, 36, 48, 52, 45, 58],
    "30d": [28, 30, 34, 33, 38, 42, 40, 45, 48, 46, 50, 55, 52, 58, 60, 57, 62, 65, 63, 68, 70, 66, 72, 75, 73, 78, 80, 76, 82, 85],
    "90d": [20, 24, 22, 28, 30, 27, 35, 38, 36, 42, 40, 45, 48, 46, 50, 55, 52, 58, 60, 62, 58, 65, 68, 66, 70, 74, 72, 78, 80, 76],
  };

  const dayLabels = {
    "7d": ["دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه", "یکشنبه"],
  };

  const activities = [
    {
      title: "مریم فایل‌های برند را بارگذاری کرد",
      meta: "بازطراحی آذرنگ · ۲ دقیقه پیش",
      tone: "harbor",
      initial: "م",
    },
    {
      title: "فاکتور ۱۸۴۲ پرداخت شد",
      meta: "شرکت نوآوران · ۲۴ میلیون تومان · ۱۸ دقیقه پیش",
      tone: "ember",
      initial: "ف",
    },
    {
      title: "سامان به لنگر پیوست",
      meta: "طراحی محصول · ۱ ساعت پیش",
      tone: "ink",
      initial: "س",
    },
    {
      title: "انتشار نسخه با موفقیت انجام شد",
      meta: "وب‌سایت لنگر · محیط اصلی · ۳ ساعت پیش",
      tone: "harbor",
      initial: "ن",
    },
    {
      title: "نظر روی مسیر آشنایی کاربر",
      meta: "سارا · «خیلی تمیز شده» · ۵ ساعت پیش",
      tone: "ember",
      initial: "س",
    },
  ];

  const projects = [
    {
      name: "بازنویسی مسیر آشنایی",
      client: "داخلی",
      status: "در حال انجام",
      statusClass: "bg-harbor-50 text-harbor-700",
      progress: 80,
      due: "۶ مرداد",
    },
    {
      name: "بازطراحی آذرنگ",
      client: "شرکت آذرنگ",
      status: "بازبینی",
      statusClass: "bg-ember-50 text-ember-700",
      progress: 64,
      due: "۱۱ مرداد",
    },
    {
      name: "پورتال صورتحساب",
      client: "شرکت نوآوران",
      status: "در حال انجام",
      statusClass: "bg-harbor-50 text-harbor-700",
      progress: 42,
      due: "۱۹ مرداد",
    },
    {
      name: "بهینه‌سازی نسخه موبایل",
      client: "اپلیکیشن لنگر",
      status: "متوقف",
      statusClass: "bg-ink-100 text-ink-700",
      progress: 28,
      due: "۲۴ مرداد",
    },
  ];

  const focusItems = [
    { id: 1, text: "نهایی کردن حالت‌های خالی ورود و ثبت‌نام", done: false },
    { id: 2, text: "بازبینی جزئیات پویانمایی پروژه آذرنگ", done: true },
    { id: 3, text: "ارسال گزارش هفتگی درآمد", done: false },
  ];

  const activityList = document.getElementById("activityList");
  const toneMap = {
    harbor: "bg-harbor-100 text-harbor-700",
    ember: "bg-ember-100 text-ember-700",
    ink: "bg-ink-100 text-ink-700",
  };

  if (activityList) {
    activityList.innerHTML = activities
      .map(
        (a, i) => `
      <li class="activity-item" style="animation: fade-up 0.6s cubic-bezier(0.22,1,0.36,1) ${0.45 + i * 0.08}s both">
        <span class="grid h-9 w-9 shrink-0 place-items-center rounded-xl text-xs font-bold ${toneMap[a.tone]}">${a.initial}</span>
        <div class="min-w-0">
          <p class="truncate text-sm font-semibold text-ink-900">${a.title}</p>
          <p class="truncate text-xs text-ink-400">${a.meta}</p>
        </div>
      </li>`
      )
      .join("");
  }

  const projectsBody = document.getElementById("projectsBody");
  if (projectsBody) {
    projectsBody.innerHTML = projects
      .map(
        (p) => `
      <tr class="project-row">
        <td class="px-5 py-4 sm:px-6">
          <p class="font-semibold text-ink-900">${p.name}</p>
          <p class="text-xs text-ink-400">${p.client}</p>
        </td>
        <td class="px-3 py-4">
          <span class="status-pill ${p.statusClass}">${p.status}</span>
        </td>
        <td class="px-3 py-4">
          <div class="flex items-center gap-2">
            <div class="h-1.5 w-20 overflow-hidden rounded-full bg-ink-100 sm:w-28">
              <div class="progress-bar h-full rounded-full bg-harbor-500" data-width="${p.progress}%" style="width:0"></div>
            </div>
            <span class="text-xs font-semibold text-ink-500" dir="ltr">${p.progress.toLocaleString("fa-IR")}٪</span>
          </div>
        </td>
        <td class="px-5 py-4 text-ink-500 sm:px-6">${p.due}</td>
      </tr>`
      )
      .join("");

    requestAnimationFrame(() => {
      projectsBody.querySelectorAll(".progress-bar").forEach((bar) => {
        bar.style.width = bar.dataset.width;
      });
    });
  }

  const focusList = document.getElementById("focusList");
  let focusState = [...focusItems];

  function renderFocus() {
    if (!focusList) return;
    focusList.innerHTML = focusState
      .map(
        (item) => `
      <li class="focus-item ${item.done ? "done" : ""}" data-id="${item.id}">
        <span class="focus-check">${item.done ? "✓" : ""}</span>
        <span class="text-sm font-medium text-ink-800 ${item.done ? "line-through" : ""}">${item.text}</span>
      </li>`
      )
      .join("");
  }

  renderFocus();

  focusList?.addEventListener("click", (e) => {
    const row = e.target.closest(".focus-item");
    if (!row) return;
    const id = Number(row.dataset.id);
    focusState = focusState.map((f) => (f.id === id ? { ...f, done: !f.done } : f));
    renderFocus();
    const item = focusState.find((f) => f.id === id);
    if (item && window.HarborToast) {
      HarborToast(item.done ? "کار انجام شد ✓" : "کار دوباره باز شد");
    }
  });

  const goalRing = document.getElementById("goalRing");
  if (goalRing) {
    const circumference = 2 * Math.PI * 15.5;
    goalRing.style.strokeDasharray = String(circumference);
    goalRing.style.strokeDashoffset = String(circumference);
    requestAnimationFrame(() => {
      goalRing.style.transition = "stroke-dashoffset 1.4s cubic-bezier(0.22, 1, 0.36, 1)";
      goalRing.style.strokeDashoffset = String(circumference * (1 - 0.8));
    });
  }

  const linePath = document.getElementById("linePath");
  const areaPath = document.getElementById("areaPath");
  const chartDots = document.getElementById("chartDots");
  const gridLines = document.getElementById("gridLines");
  const tooltip = document.getElementById("chartTooltip");
  const chartSvg = document.getElementById("revenueChart");
  let currentRange = "7d";

  function buildPoints(values) {
    const w = 640;
    const h = 260;
    const padX = 16;
    const padY = 24;
    const max = Math.max(...values) * 1.15;
    const min = Math.min(...values) * 0.75;
    return values.map((v, i) => {
      const x = padX + (i * (w - padX * 2)) / Math.max(values.length - 1, 1);
      const y = h - padY - ((v - min) / (max - min)) * (h - padY * 2);
      return { x, y, v };
    });
  }

  function toSmoothPath(points) {
    if (!points.length) return "";
    let d = `M ${points[0].x},${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i === 0 ? i : i - 1];
      const p1 = points[i];
      const p2 = points[i + 1];
      const p3 = points[i + 2] || p2;
      const cp1x = p1.x + (p2.x - p0.x) / 6;
      const cp1y = p1.y + (p2.y - p0.y) / 6;
      const cp2x = p2.x - (p3.x - p1.x) / 6;
      const cp2y = p2.y - (p3.y - p1.y) / 6;
      d += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${p2.x},${p2.y}`;
    }
    return d;
  }

  function renderChart(range) {
    if (!linePath || !areaPath || !chartDots) return;
    const values = chartData[range] || chartData["7d"];
    const sample =
      values.length > 12
        ? values.filter((_, i) => i % Math.ceil(values.length / 12) === 0)
        : values;
    const points = buildPoints(sample);
    const line = toSmoothPath(points);
    const area = `${line} L ${points[points.length - 1].x},260 L ${points[0].x},260 Z`;

    if (gridLines) {
      gridLines.innerHTML = [65, 130, 195]
        .map((y) => `<line x1="0" y1="${y}" x2="640" y2="${y}"></line>`)
        .join("");
    }

    linePath.classList.remove("is-drawn");
    areaPath.classList.remove("is-drawn");
    void linePath.getBoundingClientRect();

    linePath.setAttribute("d", line);
    areaPath.setAttribute("d", area);
    areaPath.setAttribute("opacity", "0");

    chartDots.innerHTML = points
      .map(
        (p, i) =>
          `<circle class="chart-dot" cx="${p.x}" cy="${p.y}" r="4.5" fill="#fff" stroke="#1a7a6d" stroke-width="2.5" data-value="${p.v}" data-index="${i}" style="animation-delay:${0.55 + i * 0.05}s"></circle>`
      )
      .join("");

    requestAnimationFrame(() => {
      linePath.classList.add("is-drawn");
      areaPath.classList.add("is-drawn");
      chartDots.querySelectorAll(".chart-dot").forEach((d) => d.classList.add("is-shown"));
    });

    chartDots.querySelectorAll(".chart-dot").forEach((dot) => {
      dot.addEventListener("mouseenter", (e) => {
        const value = e.target.dataset.value;
        const idx = Number(e.target.dataset.index);
        const label =
          range === "7d"
            ? dayLabels["7d"][idx] || `روز ${(idx + 1).toLocaleString("fa-IR")}`
            : `نقطه ${(idx + 1).toLocaleString("fa-IR")}`;
        tooltip.textContent = `${label} · ${Number(value).toLocaleString("fa-IR", {
          maximumFractionDigits: 1,
        })} میلیون تومان`;
        tooltip.classList.remove("hidden");
        const rect = chartSvg.getBoundingClientRect();
        const cx = (Number(e.target.getAttribute("cx")) / 640) * rect.width;
        const cy = (Number(e.target.getAttribute("cy")) / 260) * rect.height;
        tooltip.style.left = `${Math.max(8, Math.min(cx - 40, rect.width - 110))}px`;
        tooltip.style.top = `${Math.max(8, cy - 40)}px`;
        e.target.setAttribute("r", "6.5");
      });
      dot.addEventListener("mouseleave", (e) => {
        tooltip.classList.add("hidden");
        e.target.setAttribute("r", "4.5");
      });
    });
  }

  document.querySelectorAll(".range-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".range-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentRange = btn.dataset.range;
      renderChart(currentRange);
      if (window.HarborToast) HarborToast(`بازه ${btn.textContent.trim()} انتخاب شد`);
    });
  });

  renderChart(currentRange);

  document.querySelector(".btn-ghost.text-xs")?.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "./projects.html";
  });
})();
