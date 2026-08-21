(() => {
  "use strict";

  const tabs = document.getElementById("modeTabs");
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");
  const toast = document.getElementById("toast");
  const strengthFill = document.getElementById("strengthFill");
  const strengthLabel = document.getElementById("strengthLabel");

  const strengthWords = ["خیلی ضعیف", "ضعیف", "متوسط", "خوب", "عالی"];

  /* ---------- Reveal ---------- */
  requestAnimationFrame(() => {
    document
      .querySelectorAll(".auth-reveal")
      .forEach((el) => el.classList.add("is-visible"));
  });
  /* ---------- Mode switch ---------- */
  function setMode(mode) {
    if (!tabs) return;
    tabs.dataset.mode = mode;
    loginForm?.classList.toggle("is-active", mode === "login");
    signupForm?.classList.toggle("is-active", mode === "signup");
    clearErrors(loginForm);
    clearErrors(signupForm);
  }

  tabs?.querySelectorAll(".mode-tab").forEach((btn) => {
    btn.addEventListener("click", () => setMode(btn.dataset.mode));
  });

  document.querySelectorAll("[data-switch]").forEach((btn) => {
    btn.addEventListener("click", () => setMode(btn.dataset.switch));
  });

  const params = new URLSearchParams(window.location.search);
  if (params.get("mode") === "signup") setMode("signup");

  /* ---------- Password toggle ---------- */
  document.querySelectorAll("[data-toggle-for]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const input = document.getElementById(btn.dataset.toggleFor);
      if (!input) return;
      const show = input.type === "password";
      input.type = show ? "text" : "password";
      btn.setAttribute("aria-label", show ? "مخفی کردن رمز" : "نمایش رمز");
      btn.classList.toggle("text-harbor-700", show);
    });
  });

  /* ---------- Strength meter ---------- */
  function scorePassword(value) {
    let score = 0;
    if (!value) return 0;
    if (value.length >= 8) score += 1;
    if (/[A-Z]/.test(value) && /[a-z]/.test(value)) score += 1;
    if (/\d/.test(value)) score += 1;
    if (/[^A-Za-z0-9]/.test(value)) score += 1;
    return score;
  }

  document.getElementById("signupPassword")?.addEventListener("input", (e) => {
    const score = scorePassword(e.target.value);
    strengthFill.className = "strength-bar__fill";
    if (score > 0) strengthFill.classList.add(`level-${score}`);
    strengthLabel.textContent = strengthWords[score] || "ضعیف";
    strengthLabel.className =
      "text-xs font-semibold " +
      (score >= 3
        ? "text-harbor-700"
        : score === 2
          ? "text-ember-600"
          : "text-ink-500");
  });

  /* ---------- Validation helpers ---------- */
  function clearErrors(form) {
    if (!form) return;
    form.querySelectorAll(".field-error").forEach((el) => {
      el.textContent = "";
      el.classList.add("hidden");
    });
    form
      .querySelectorAll(".field-input")
      .forEach((el) => el.classList.remove("is-invalid"));
  }

  function showError(id, message) {
    const input = document.getElementById(id);
    const error = document.querySelector(`[data-error-for="${id}"]`);
    input?.classList.add("is-invalid");
    if (error) {
      error.textContent = message;
      error.classList.remove("hidden");
    }
  }

  function isEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-shown");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toast.classList.remove("is-shown"), 2600);
  }

  function setLoading(btn, loading) {
    if (!btn) return;
    btn.classList.toggle("btn-loading", loading);
    const spinner = btn.querySelector(".btn-spinner");
    if (loading && !spinner) {
      const s = document.createElement("span");
      s.className = "btn-spinner";
      s.setAttribute("aria-hidden", "true");
      btn.appendChild(s);
    } else if (!loading && spinner) {
      spinner.remove();
    }
  }

  /* ---------- Login submit ---------- */
  loginForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    clearErrors(loginForm);

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;
    let ok = true;

    if (!email) {
      showError("loginEmail", "ایمیل را وارد کنید.");
      ok = false;
    } else if (!isEmail(email)) {
      showError("loginEmail", "فرمت ایمیل معتبر نیست.");
      ok = false;
    }

    if (!password) {
      showError("loginPassword", "رمز عبور را وارد کنید.");
      ok = false;
    } else if (password.length < 6) {
      showError("loginPassword", "رمز عبور حداقل ۶ کاراکتر باشد.");
      ok = false;
    }

    if (!ok) {
      loginForm.classList.remove("shake");
      void loginForm.offsetWidth;
      loginForm.classList.add("shake");
      return;
    }

    const btn = document.getElementById("loginSubmit");
    setLoading(btn, true);
    showToast("در حال ورود…");

    setTimeout(() => {
      setLoading(btn, false);
      showToast("ورود موفق — خوش آمدید!");
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 700);
    }, 1100);
  });

  /* ---------- Signup submit ---------- */
  signupForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    clearErrors(signupForm);

    const name = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value;
    const terms = document.getElementById("acceptTerms").checked;
    let ok = true;

    if (!name || name.length < 2) {
      showError("signupName", "نام کامل را وارد کنید.");
      ok = false;
    }

    if (!email) {
      showError("signupEmail", "ایمیل کاری را وارد کنید.");
      ok = false;
    } else if (!isEmail(email)) {
      showError("signupEmail", "فرمت ایمیل معتبر نیست.");
      ok = false;
    }

    const score = scorePassword(password);
    if (!password) {
      showError("signupPassword", "رمز عبور را وارد کنید.");
      ok = false;
    } else if (password.length < 8) {
      showError("signupPassword", "رمز عبور حداقل ۸ کاراکتر باشد.");
      ok = false;
    } else if (score < 2) {
      showError("signupPassword", "رمز قوی‌تری انتخاب کنید (حرف و عدد).");
      ok = false;
    }

    if (!terms) {
      showError("acceptTerms", "برای ادامه باید شرایط را بپذیرید.");
      ok = false;
    }

    if (!ok) {
      signupForm.classList.remove("shake");
      void signupForm.offsetWidth;
      signupForm.classList.add("shake");
      return;
    }

    const btn = document.getElementById("signupSubmit");
    setLoading(btn, true);
    showToast("در حال ساخت حساب…");

    setTimeout(() => {
      setLoading(btn, false);
      showToast("حساب ساخته شد — به داشبورد می‌روید.");
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 800);
    }, 1300);
  });

  /* ---------- Extra UX ---------- */
  document.getElementById("forgotBtn")?.addEventListener("click", () => {
    showToast("لینک بازیابی به‌زودی به ایمیلتان ارسال می‌شود.");
  });

  document.querySelectorAll("[data-social]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const map = { google: "گوگل", github: "گیت‌هاب" };
      showToast(
        `ورود با ${map[btn.dataset.social] || "سرویس خارجی"} به‌زودی فعال می‌شود.`,
      );
    });
  });

  document.querySelectorAll('a[href="#"]').forEach((a) => {
    a.addEventListener("click", (e) => e.preventDefault());
  });
})();
