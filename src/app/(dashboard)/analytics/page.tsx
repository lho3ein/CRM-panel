import Script from "next/script";

export default function analytics() {
  return (
    <div
      data-page="analytics"
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
                  تحلیل عملکرد
                </p>
                <h1 className="text-3xl font-bold text-ink-950 sm:text-4xl">
                  نگاهی عمیق به داده‌ها
                </h1>
                <p className="mt-2 max-w-xl text-sm text-ink-500">
                  روی نمودارها حرکت کنید، بازه را عوض کنید و روند را حس کنید.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button className="filter-chip is-active" data-filter="7">
                  ۷ روز
                </button>
                <button className="filter-chip" data-filter="30">
                  ۳۰ روز
                </button>
                <button className="filter-chip" data-filter="90">
                  ۹۰ روز
                </button>
              </div>
            </section>

            <section className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <article
                className="stat-card tilt-card reveal"
                style={{ "--d": ".05s" } as React.CSSProperties}
              >
                <p className="text-sm text-ink-500">بازدید</p>
                <p className="mt-1 text-3xl font-bold">
                  <span data-count="12400">0</span>
                </p>
                <p className="mt-2 text-xs font-semibold text-harbor-700">
                  +۱۸٪ نسبت به قبل
                </p>
              </article>
              <article
                className="stat-card tilt-card reveal"
                style={{ "--d": ".12s" } as React.CSSProperties}
              >
                <p className="text-sm text-ink-500">نرخ تبدیل</p>
                <p className="mt-1 text-3xl font-bold" dir="ltr">
                  <span data-count="4.8" data-decimals="1">
                    0
                  </span>
                  %
                </p>
                <p className="mt-2 text-xs font-semibold text-ember-700">
                  +۰٫۶ واحد
                </p>
              </article>
              <article
                className="stat-card tilt-card reveal"
                style={{ "--d": ".19s" } as React.CSSProperties}
              >
                <p className="text-sm text-ink-500">میانگین جلسه</p>
                <p className="mt-1 text-3xl font-bold">
                  <span data-count="6">0</span>:<span data-count="42">0</span>
                </p>
                <p className="mt-2 text-xs font-semibold text-harbor-700">
                  پایدار و خوب
                </p>
              </article>
              <article
                className="stat-card tilt-card reveal"
                style={{ "--d": ".26s" } as React.CSSProperties}
              >
                <p className="text-sm text-ink-500">درآمد نسبت‌داده</p>
                <p className="mt-1 text-3xl font-bold">
                  <span data-count="186">0</span>{" "}
                  <span className="text-base text-ink-500">میلیون</span>
                </p>
                <p className="mt-2 text-xs font-semibold text-harbor-700">
                  اوج در پنجشنبه
                </p>
              </article>
            </section>

            <section className="grid gap-4 xl:grid-cols-12">
              <article
                id="barChart"
                className="glass-panel spotlight reveal rounded-2xl p-5 shadow-soft sm:p-6 xl:col-span-8"
                style={{ "--d": ".32s" } as React.CSSProperties}
              >
                <h2 className="mb-1 text-lg font-bold text-ink-950">
                  روند بازدید هفتگی
                </h2>
                <p className="mb-6 text-sm text-ink-500">
                  برای حس کردن رشد، روی ستون‌ها مکث کنید
                </p>
                <div className="flex h-56 items-end gap-2 sm:gap-3">
                  <div className="group flex flex-1 flex-col items-center gap-2">
                    <div className="relative flex h-48 w-full items-end justify-center rounded-xl bg-ink-50/80 px-1">
                      <div
                        className="bar-chart-bar w-full max-w-[2.5rem] rounded-t-lg bg-gradient-to-t from-harbor-700 to-harbor-400 shadow-lg shadow-harbor-600/20 transition group-hover:from-ember-600 group-hover:to-ember-400"
                        data-h="45"
                        style={{ height: "45%" } as React.CSSProperties}
                      ></div>
                    </div>
                    <span className="text-[11px] font-semibold text-ink-400">
                      ش
                    </span>
                  </div>
                  <div className="group flex flex-1 flex-col items-center gap-2">
                    <div className="relative flex h-48 w-full items-end justify-center rounded-xl bg-ink-50/80 px-1">
                      <div
                        className="bar-chart-bar w-full max-w-[2.5rem] rounded-t-lg bg-gradient-to-t from-harbor-700 to-harbor-400 shadow-lg shadow-harbor-600/20 transition group-hover:from-ember-600 group-hover:to-ember-400"
                        data-h="62"
                        style={{ height: "62%" } as React.CSSProperties}
                      ></div>
                    </div>
                    <span className="text-[11px] font-semibold text-ink-400">
                      ی
                    </span>
                  </div>
                  <div className="group flex flex-1 flex-col items-center gap-2">
                    <div className="relative flex h-48 w-full items-end justify-center rounded-xl bg-ink-50/80 px-1">
                      <div
                        className="bar-chart-bar w-full max-w-[2.5rem] rounded-t-lg bg-gradient-to-t from-harbor-700 to-harbor-400 shadow-lg shadow-harbor-600/20 transition group-hover:from-ember-600 group-hover:to-ember-400"
                        data-h="55"
                        style={{ height: "55%" } as React.CSSProperties}
                      ></div>
                    </div>
                    <span className="text-[11px] font-semibold text-ink-400">
                      د
                    </span>
                  </div>
                  <div className="group flex flex-1 flex-col items-center gap-2">
                    <div className="relative flex h-48 w-full items-end justify-center rounded-xl bg-ink-50/80 px-1">
                      <div
                        className="bar-chart-bar w-full max-w-[2.5rem] rounded-t-lg bg-gradient-to-t from-harbor-700 to-harbor-400 shadow-lg shadow-harbor-600/20 transition group-hover:from-ember-600 group-hover:to-ember-400"
                        data-h="78"
                        style={{ height: "78%" } as React.CSSProperties}
                      ></div>
                    </div>
                    <span className="text-[11px] font-semibold text-ink-400">
                      س
                    </span>
                  </div>
                  <div className="group flex flex-1 flex-col items-center gap-2">
                    <div className="relative flex h-48 w-full items-end justify-center rounded-xl bg-ink-50/80 px-1">
                      <div
                        className="bar-chart-bar w-full max-w-[2.5rem] rounded-t-lg bg-gradient-to-t from-harbor-700 to-harbor-400 shadow-lg shadow-harbor-600/20 transition group-hover:from-ember-600 group-hover:to-ember-400"
                        data-h="70"
                        style={{ height: "70%" } as React.CSSProperties}
                      ></div>
                    </div>
                    <span className="text-[11px] font-semibold text-ink-400">
                      چ
                    </span>
                  </div>
                  <div className="group flex flex-1 flex-col items-center gap-2">
                    <div className="relative flex h-48 w-full items-end justify-center rounded-xl bg-ink-50/80 px-1">
                      <div
                        className="bar-chart-bar w-full max-w-[2.5rem] rounded-t-lg bg-gradient-to-t from-harbor-700 to-harbor-400 shadow-lg shadow-harbor-600/20 transition group-hover:from-ember-600 group-hover:to-ember-400"
                        data-h="92"
                        style={{ height: "92%" } as React.CSSProperties}
                      ></div>
                    </div>
                    <span className="text-[11px] font-semibold text-ink-400">
                      پ
                    </span>
                  </div>
                  <div className="group flex flex-1 flex-col items-center gap-2">
                    <div className="relative flex h-48 w-full items-end justify-center rounded-xl bg-ink-50/80 px-1">
                      <div
                        className="bar-chart-bar w-full max-w-[2.5rem] rounded-t-lg bg-gradient-to-t from-harbor-700 to-harbor-400 shadow-lg shadow-harbor-600/20 transition group-hover:from-ember-600 group-hover:to-ember-400"
                        data-h="66"
                        style={{ height: "66%" } as React.CSSProperties}
                      ></div>
                    </div>
                    <span className="text-[11px] font-semibold text-ink-400">
                      ج
                    </span>
                  </div>
                </div>
              </article>

              <article
                className="glass-panel reveal rounded-2xl p-5 shadow-soft sm:p-6 xl:col-span-4"
                style={{ "--d": ".4s" } as React.CSSProperties}
              >
                <h2 className="mb-1 text-lg font-bold text-ink-950">
                  منابع ترافیک
                </h2>
                <p className="mb-4 text-sm text-ink-500">
                  روی بخش‌های دونات ببرید
                </p>
                <div className="relative mx-auto grid h-52 w-52 place-items-center">
                  <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
                    <circle
                      cx="18"
                      cy="18"
                      r="15.5"
                      fill="none"
                      stroke="#eceef2"
                      strokeWidth="4"
                    />
                    <circle
                      className="donut-seg cursor-pointer transition"
                      data-label="جستجو"
                      data-value="۴۸٪"
                      cx="18"
                      cy="18"
                      r="15.5"
                      fill="none"
                      stroke="#1a7a6d"
                      strokeWidth="4"
                      strokeDasharray="48 100"
                      strokeDashoffset="0"
                      strokeLinecap="round"
                    />
                    <circle
                      className="donut-seg cursor-pointer transition"
                      data-label="مستقیم"
                      data-value="۲۷٪"
                      cx="18"
                      cy="18"
                      r="15.5"
                      fill="none"
                      stroke="#3fb5a2"
                      strokeWidth="4"
                      strokeDasharray="27 100"
                      strokeDashoffset="-48"
                      strokeLinecap="round"
                    />
                    <circle
                      className="donut-seg cursor-pointer transition"
                      data-label="شبکه‌ها"
                      data-value="۱۵٪"
                      cx="18"
                      cy="18"
                      r="15.5"
                      fill="none"
                      stroke="#f9853c"
                      strokeWidth="4"
                      strokeDasharray="15 100"
                      strokeDashoffset="-75"
                      strokeLinecap="round"
                    />
                    <circle
                      className="donut-seg cursor-pointer transition"
                      data-label="ایمیل"
                      data-value="۱۰٪"
                      cx="18"
                      cy="18"
                      r="15.5"
                      fill="none"
                      stroke="#8593ae"
                      strokeWidth="4"
                      strokeDasharray="10 100"
                      strokeDashoffset="-90"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute text-center">
                    <p
                      id="donutValue"
                      className="text-xl font-bold text-ink-950"
                    >
                      ۱۲۴ هزار
                    </p>
                    <p id="donutLabel" className="text-xs text-ink-500">
                      کل ترافیک
                    </p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span className="text-ink-500">جستجو</span>
                    <span className="font-bold">۴۸٪</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-ink-500">مستقیم</span>
                    <span className="font-bold">۲۷٪</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-ink-500">شبکه‌ها</span>
                    <span className="font-bold">۱۵٪</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-ink-500">ایمیل</span>
                    <span className="font-bold">۱۰٪</span>
                  </li>
                </ul>
              </article>
            </section>
          </main>
        </div>
      </div>
      <Script src="./js/shell.js" strategy="afterInteractive" />
      <Script src="./js/pages.js" strategy="afterInteractive" />
    </div>
  );
}
