import Script from "next/script";

export default function ProjectPage() {
  return (
    <div
      data-page="projects"
      className="mesh-bg relative min-h-screen overflow-x-hidden"
    >
      <div
        className="pointer-events-none fixed inset-0 noise opacity-60"
        aria-hidden="true"
      ></div>
      <div
        className="pointer-events-none fixed -end-24 top-10 h-72 w-72 animate-orb-a rounded-full bg-harbor-300/30 blur-3xl"
        aria-hidden="true"
      ></div>
      <div
        className="pointer-events-none fixed -start-16 bottom-10 h-80 w-80 animate-orb-b rounded-full bg-ember-300/25 blur-3xl"
        aria-hidden="true"
      ></div>

      <div className="relative z-10 flex min-h-screen">
        <aside
          id="sidebar"
          className="fixed inset-y-0 start-0 z-40 flex w-[272px] translate-x-full flex-col border-e border-white/60 bg-white/80 px-4 py-5 shadow-soft backdrop-blur-xl transition-transform duration-500 ease-out lg:static lg:translate-x-0"
        >
          <div className="mb-8 flex items-center justify-between px-2">
            <a href="./dashboard" className="group flex items-center gap-3">
              <span className="brand-mark relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-harbor-600 text-white shadow-lg shadow-harbor-600/30">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 14c2.5-1.5 4.5-5 8-5s5.5 3.5 8 5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 9V5M8.5 19h7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <circle cx="12" cy="16" r="1.6" fill="currentColor" />
                </svg>
              </span>
              <span>
                <span className="block text-xl font-bold tracking-tight text-ink-950">
                  لنگر
                </span>
                <span className="text-[11px] font-medium text-ink-400">
                  فضای کاری
                </span>
              </span>
            </a>
            <button
              id="closeSidebar"
              className="grid h-9 w-9 place-items-center rounded-lg text-ink-500 transition hover:bg-ink-100 lg:hidden"
              aria-label="بستن منو"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
          <nav
            className="flex flex-1 flex-col gap-1"
            data-shell-nav
            aria-label="منوی اصلی"
          ></nav>
          <div className="mt-4 overflow-hidden rounded-2xl border border-harbor-100 bg-gradient-to-br from-harbor-50 to-ember-50 p-4">
            <p className="text-sm font-bold text-ink-900">
              ارتقا به لنگر حرفه‌ای
            </p>
            <p className="mt-1 text-xs leading-relaxed text-ink-500">
              تحلیل پیشرفته و پشتیبانی اولویت‌دار.
            </p>
            <a
              href="./billing"
              className="btn-primary magnetic mt-3 w-full text-xs"
            >
              مشاهده پلن‌ها
            </a>
          </div>
        </aside>

        <div
          id="sidebarOverlay"
          className="fixed inset-0 z-30 hidden bg-ink-950/30 backdrop-blur-sm lg:hidden"
        ></div>

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-20 border-b border-white/50 bg-white/65 px-4 py-3 backdrop-blur-xl sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <button
                id="openSidebar"
                className="grid h-10 w-10 place-items-center rounded-xl border border-ink-200/70 bg-white text-ink-600 transition hover:border-harbor-300 hover:text-harbor-700 lg:hidden"
                aria-label="باز کردن منو"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 7h16M4 12h16M4 17h10"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <div className="relative min-w-0 flex-1 max-w-xl">
                <svg
                  className="pointer-events-none absolute start-3 top-2/3 -translate-y-1/2 text-ink-400"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    cx="11"
                    cy="11"
                    r="7"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                  <path
                    d="m20 20-3.5-3.5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                </svg>
                <input
                  type="search"
                  placeholder="جستجو در لنگر…"
                  className="w-full rounded-xl border border-ink-200/70 bg-white/80 py-2.5 ps-10 pe-4 text-sm text-ink-800 outline-none transition placeholder:text-ink-400 focus:border-harbor-400 focus:shadow-glow"
                />
              </div>
              <div className="relative ms-auto flex items-center gap-2 sm:gap-3">
                <button
                  id="notifBtn"
                  className="relative grid h-10 w-10 place-items-center rounded-xl border border-ink-200/70 bg-white text-ink-600 transition hover:border-harbor-300 hover:text-harbor-700"
                  aria-label="اعلان‌ها"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6 17h12l-1.2-1.8a5.8 5.8 0 0 1-.9-3.1V10a3.9 3.9 0 1 0-7.8 0v2.1c0 1.1-.3 2.2-.9 3.1L6 17Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 19a2 2 0 0 0 4 0"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute end-2 top-2 h-2 w-2 rounded-full bg-ember-500 ring-2 ring-white"></span>
                </button>
                <div id="notifPanel" className="notif-panel">
                  <div className="border-b border-ink-100 px-4 py-3">
                    <p className="text-sm font-bold text-ink-900">اعلان‌ها</p>
                  </div>
                  <div className="notif-item">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-harbor-100 text-xs font-bold text-harbor-700">
                      م
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink-900">
                        مریم فایل جدید گذاشت
                      </p>
                      <p className="text-xs text-ink-400">۲ دقیقه پیش</p>
                    </div>
                  </div>
                  <div className="notif-item">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-ember-100 text-xs font-bold text-ember-700">
                      ف
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink-900">
                        فاکتور پرداخت شد
                      </p>
                      <p className="text-xs text-ink-400">۱۸ دقیقه پیش</p>
                    </div>
                  </div>
                  <div className="notif-item">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-ink-100 text-xs font-bold text-ink-700">
                      س
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink-900">
                        سامان به تیم پیوست
                      </p>
                      <p className="text-xs text-ink-400">۱ ساعت پیش</p>
                    </div>
                  </div>
                </div>
                <a
                  href="./settings"
                  className="hidden items-center gap-3 rounded-2xl border border-ink-200/70 bg-white/80 py-1.5 pe-3 ps-1.5 sm:flex"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-harbor-500 to-harbor-700 text-xs font-bold text-white">
                    سم
                  </span>
                  <div className="leading-tight">
                    <p className="text-sm font-semibold text-ink-900">
                      سارا محمدی
                    </p>
                    <p className="text-[11px] text-ink-400">مدیر</p>
                  </div>
                </a>
                <button
                  id="logoutBtn"
                  className="hidden rounded-xl border border-ink-200/70 bg-white px-3 py-2 text-xs font-bold text-ink-600 hover:border-ember-300 hover:text-ember-700 sm:inline-flex"
                >
                  خروج
                </button>
              </div>
            </div>
          </header>
          <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
            <section className="reveal mb-7 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="mb-2 text-xs font-semibold text-harbor-600">
                  مدیریت کارها
                </p>
                <h1 className="text-3xl font-bold text-ink-950 sm:text-4xl">
                  پروژه‌ها و تخته کانبان
                </h1>
                <p className="mt-2 text-sm text-ink-500">
                  کارت‌ها را بکشید، فیلتر کنید و پروژه جدید بسازید.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  className="filter-chip is-active"
                  data-project-filter="all"
                >
                  همه
                </button>
                <button className="filter-chip" data-project-filter="progress">
                  در حال انجام
                </button>
                <button className="filter-chip" data-project-filter="review">
                  بازبینی
                </button>
                <button className="filter-chip" data-project-filter="done">
                  تمام‌شده
                </button>
                <button id="openProjectModal" className="btn-primary magnetic">
                  پروژه جدید
                </button>
              </div>
            </section>

            <section className="mb-6 grid gap-4 stagger-children sm:grid-cols-2 xl:grid-cols-3">
              <article
                className="project-card glass-panel reveal rounded-2xl border border-white/80 p-5"
                data-status="progress"
                data-name="مسیر آشنایی"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="status-pill bg-harbor-50 text-harbor-700">
                    در حال انجام
                  </span>
                  <span className="text-xs text-ink-400">۸۰٪</span>
                </div>
                <h3 className="text-lg font-bold text-ink-950">
                  مسیر آشنایی کاربر
                </h3>
                <p className="mt-1 text-sm text-ink-500">
                  داخلی · موعد ۶ مرداد
                </p>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-ink-100">
                  <div
                    className="progress-bar h-full rounded-full bg-harbor-500"
                    data-width="80%"
                  ></div>
                </div>
              </article>
              <article
                className="project-card glass-panel reveal rounded-2xl border border-white/80 p-5"
                data-status="review"
                data-name="بازطراحی آذرنگ"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="status-pill bg-ember-50 text-ember-700">
                    بازبینی
                  </span>
                  <span className="text-xs text-ink-400">۶۴٪</span>
                </div>
                <h3 className="text-lg font-bold text-ink-950">
                  بازطراحی آذرنگ
                </h3>
                <p className="mt-1 text-sm text-ink-500">
                  شرکت آذرنگ · موعد ۱۱ مرداد
                </p>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-ink-100">
                  <div
                    className="progress-bar h-full rounded-full bg-ember-500"
                    data-width="64%"
                  ></div>
                </div>
              </article>
              <article
                className="project-card glass-panel reveal rounded-2xl border border-white/80 p-5"
                data-status="progress"
                data-name="پورتال صورتحساب"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="status-pill bg-harbor-50 text-harbor-700">
                    در حال انجام
                  </span>
                  <span className="text-xs text-ink-400">۴۲٪</span>
                </div>
                <h3 className="text-lg font-bold text-ink-950">
                  پورتال صورتحساب
                </h3>
                <p className="mt-1 text-sm text-ink-500">
                  شرکت نوآوران · موعد ۱۹ مرداد
                </p>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-ink-100">
                  <div
                    className="progress-bar h-full rounded-full bg-harbor-500"
                    data-width="42%"
                  ></div>
                </div>
              </article>
              <article
                className="project-card glass-panel reveal rounded-2xl border border-white/80 p-5"
                data-status="done"
                data-name="هویت بصری"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="status-pill bg-ink-100 text-ink-700">
                    تمام‌شده
                  </span>
                  <span className="text-xs text-ink-400">۱۰۰٪</span>
                </div>
                <h3 className="text-lg font-bold text-ink-950">
                  هویت بصری لنگر
                </h3>
                <p className="mt-1 text-sm text-ink-500">داخلی · تکمیل‌شده</p>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-ink-100">
                  <div
                    className="progress-bar h-full rounded-full bg-harbor-600"
                    data-width="100%"
                  ></div>
                </div>
              </article>
            </section>

            <section
              id="kanban"
              className="reveal grid gap-4 lg:grid-cols-3"
              style={{ "--d": ".2s" } as React.CSSProperties}
            >
              <div
                className="kanban-col glass-panel rounded-2xl p-4"
                data-title="برای انجام"
              >
                <h3 className="mb-3 text-sm font-bold text-ink-700">
                  برای انجام
                </h3>
                <div className="space-y-3" data-list>
                  <article className="kanban-card rounded-xl border border-ink-100 bg-white p-3 shadow-soft">
                    <p className="text-sm font-semibold">نوشتن متن صفحه قیمت</p>
                    <p className="mt-1 text-xs text-ink-400">سارا</p>
                  </article>
                  <article className="kanban-card rounded-xl border border-ink-100 bg-white p-3 shadow-soft">
                    <p className="text-sm font-semibold">آیکون‌های موبایل</p>
                    <p className="mt-1 text-xs text-ink-400">مریم</p>
                  </article>
                </div>
              </div>
              <div
                className="kanban-col glass-panel rounded-2xl p-4"
                data-title="در حال انجام"
              >
                <h3 className="mb-3 text-sm font-bold text-ink-700">
                  در حال انجام
                </h3>
                <div className="space-y-3" data-list>
                  <article className="kanban-card rounded-xl border border-ink-100 bg-white p-3 shadow-soft">
                    <p className="text-sm font-semibold">انیمیشن ورود</p>
                    <p className="mt-1 text-xs text-ink-400">سامان</p>
                  </article>
                </div>
              </div>
              <div
                className="kanban-col glass-panel rounded-2xl p-4"
                data-title="انجام‌شده"
              >
                <h3 className="mb-3 text-sm font-bold text-ink-700">
                  انجام‌شده
                </h3>
                <div className="space-y-3" data-list>
                  <article className="kanban-card rounded-xl border border-ink-100 bg-white p-3 shadow-soft">
                    <p className="text-sm font-semibold">چیدمان داشبورد</p>
                    <p className="mt-1 text-xs text-ink-400">سارا</p>
                  </article>
                </div>
              </div>
            </section>

            <div id="projectModal" className="modal-backdrop">
              <div className="modal-panel">
                <h3 className="text-lg font-bold text-ink-950">پروژه جدید</h3>
                <form id="createProjectForm" className="mt-4 space-y-3">
                  <div>
                    <label className="field-label" htmlFor="newProjectName">
                      نام پروژه
                    </label>
                    <input
                      id="newProjectName"
                      className="field-input"
                      placeholder="مثلاً کمپین نوروز"
                    />
                  </div>
                  <div className="flex gap-2 pt-2">
                    <button
                      type="button"
                      id="closeProjectModal"
                      className="btn-ghost flex-1"
                    >
                      انصراف
                    </button>
                    <button className="btn-primary flex-1" type="submit">
                      ایجاد
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Script src="./js/shell.js" strategy="afterInteractive" />
      <Script src="./js/pages.js" strategy="afterInteractive" />
    </div>
  );
}
