import { NavBar } from "@/components/navBar";
import { SideBar } from "@/components/sideBar";
import Script from "next/script";

export default function DashboardPage() {
  return (
    <div
      data-page="dashboard"
      className="mesh-bg relative min-h-screen overflow-x-hidden"
    >
      <div
        className="pointer-events-none fixed inset-0 noise opacity-60"
        aria-hidden="true"
      ></div>
      <div
        className="pointer-events-none fixed -inset-e-24 top-10 h-72 w-72 animate-orb-a rounded-full bg-harbor-300/30 blur-3xl"
        aria-hidden="true"
      ></div>
      <div
        className="pointer-events-none fixed -inset-s-16 bottom-10 h-80 w-80 animate-orb-b rounded-full bg-ember-300/25 blur-3xl"
        aria-hidden="true"
      ></div>

      <div className="relative z-10 flex min-h-screen">
        {/* Sidebar  */}
        <SideBar />

        {/* Main */}
        <div className="flex min-w-0 flex-1 flex-col lg:mr-68">
          <NavBar />

          <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
            <section className="reveal mb-7 flex flex-col gap-4 lg:mb-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="mb-2 text-xs font-semibold text-harbor-600">
                  عصر بخیر، سارا
                </p>
                <h1 className="text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">
                  نگاهی سریع به فضای کاری شما
                </h1>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-500 sm:text-base">
                  درآمد، پروژه‌های فعال و حرکت تیم را یکجا ببینید و با تمرکز
                  بیشتر پیش بروید.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <a href="./projects" className="btn-ghost magnetic">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 5v14M5 12h14"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                  پروژه جدید
                </a>
                <a href="./team" className="btn-primary magnetic">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M8 12h8M12 8v8"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                  </svg>
                  دعوت هم‌تیمی
                </a>
              </div>
            </section>

            <section className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <article
                className="stat-card tilt-card reveal"
                style={{ "--d": "0.05s" } as React.CSSProperties}
              >
                <div className="mb-4 flex items-start justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-harbor-50 text-harbor-700">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M4 18V6M4 18h16M8 14l3-3 2.5 2.5L18 8"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="chip bg-harbor-50 text-harbor-700" dir="ltr">
                    +۱۲٫۴٪
                  </span>
                </div>
                <p className="text-sm text-ink-500">درآمد ماهانه</p>
                <p className="mt-1 text-3xl font-bold tracking-tight text-ink-950">
                  <span data-count="482">0</span>
                  <span className="text-base font-semibold text-ink-500">
                    میلیون تومان
                  </span>
                </p>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-ink-100">
                  <div
                    className="progress-bar h-full w-0 rounded-full bg-harbor-500"
                    data-width="78%"
                  ></div>
                </div>
              </article>

              <article
                className="stat-card tilt-card reveal"
                style={{ "--d": "0.12s" } as React.CSSProperties}
              >
                <div className="mb-4 flex items-start justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-ember-50 text-ember-700">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M7 8h10M7 12h6M5 5h14a1 1 0 0 1 1 1v12l-4-2.5L12 18l-4-2.5L4 18V6a1 1 0 0 1 1-1Z"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="chip bg-ember-50 text-ember-700" dir="ltr">
                    +۸
                  </span>
                </div>
                <p className="text-sm text-ink-500">پروژه‌های فعال</p>
                <p className="mt-1 text-3xl font-bold tracking-tight text-ink-950">
                  <span data-count="24">0</span>
                </p>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-ink-100">
                  <div
                    className="progress-bar h-full w-0 rounded-full bg-ember-500"
                    data-width="62%"
                  ></div>
                </div>
              </article>

              <article
                className="stat-card tilt-card reveal"
                style={{ "--d": "0.19s" } as React.CSSProperties}
              >
                <div className="mb-4 flex items-start justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-ink-100 text-ink-700">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <circle
                        cx="9"
                        cy="8"
                        r="3"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />
                      <circle
                        cx="16.5"
                        cy="9.5"
                        r="2.5"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />
                      <path
                        d="M3.5 19c.6-3 2.8-4.5 5.5-4.5s4.9 1.5 5.5 4.5M13.5 14.2c1.7-.3 3.5.4 4.5 2.3"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <span className="chip bg-ink-100 text-ink-700" dir="ltr">
                    +۳
                  </span>
                </div>
                <p className="text-sm text-ink-500">اعضای تیم</p>
                <p className="mt-1 text-3xl font-bold tracking-tight text-ink-950">
                  <span data-count="18">0</span>
                </p>
                <div className="mt-4 flex -space-x-2 space-x-reverse">
                  <span className="avatar-dot bg-harbor-500">آ</span>
                  <span className="avatar-dot bg-ember-500">م</span>
                  <span className="avatar-dot bg-ink-600">س</span>
                  <span className="avatar-dot bg-harbor-700" dir="ltr">
                    +۱۵
                  </span>
                </div>
              </article>

              <article
                className="stat-card tilt-card reveal"
                style={{ "--d": "0.26s" } as React.CSSProperties}
              >
                <div className="mb-4 flex items-start justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-harbor-100 text-harbor-800">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 3v18M7 8c1.5-2 3-3 5-3s3.5 1 5 3M7 16c1.5 2 3 3 5 3s3.5-1 5-3"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <span className="chip bg-harbor-50 text-harbor-700" dir="ltr">
                    ۹۹٫۲٪
                  </span>
                </div>
                <p className="text-sm text-ink-500">پایداری سرویس این ماه</p>
                <p
                  className="mt-1 text-3xl font-bold tracking-tight text-ink-950"
                  dir="ltr"
                >
                  <span data-count="99.2" data-decimals="1">
                    0
                  </span>
                  %
                </p>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-ink-100">
                  <div
                    className="progress-bar h-full w-0 rounded-full bg-harbor-600"
                    data-width="99%"
                  ></div>
                </div>
              </article>
            </section>

            <section className="grid gap-4 xl:grid-cols-12">
              <article
                className="glass-panel spotlight reveal rounded-2xl p-5 shadow-soft sm:p-6 xl:col-span-8"
                style={{ "--d": "0.32s" } as React.CSSProperties}
              >
                <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="text-lg font-bold text-ink-950">
                      نبض درآمد
                    </h2>
                    <p className="text-sm text-ink-500">
                      ۷ روز اخیر در مقایسه با هفته قبل
                    </p>
                  </div>
                  <div className="flex gap-2" dir="ltr">
                    <button className="range-btn active" data-range="7d">
                      ۷ روز
                    </button>
                    <button className="range-btn" data-range="30d">
                      ۳۰ روز
                    </button>
                    <button className="range-btn" data-range="90d">
                      ۹۰ روز
                    </button>
                  </div>
                </div>

                <div className="relative h-64 sm:h-72">
                  <svg
                    id="revenueChart"
                    className="h-full w-full"
                    viewBox="0 0 640 260"
                    preserveAspectRatio="none"
                    role="img"
                    aria-label="نمودار درآمد"
                  >
                    <defs>
                      <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="0%"
                          stopColor="#3fb5a2"
                          stopOpacity="0.35"
                        />
                        <stop
                          offset="100%"
                          stopColor="#3fb5a2"
                          stopOpacity="0"
                        />
                      </linearGradient>
                      <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#1a7a6d" />
                        <stop offset="100%" stopColor="#f9853c" />
                      </linearGradient>
                    </defs>
                    <g id="gridLines" className="chart-grid"></g>
                    <path
                      id="areaPath"
                      fill="url(#areaFill)"
                      opacity="0"
                    ></path>
                    <path
                      id="linePath"
                      fill="none"
                      stroke="url(#lineGrad)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <g id="chartDots"></g>
                  </svg>
                  <div
                    id="chartTooltip"
                    className="pointer-events-none absolute hidden rounded-lg border border-white/80 bg-ink-950 px-3 py-2 text-xs text-white shadow-lg"
                    dir="rtl"
                  ></div>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-ink-500">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-harbor-500"></span>
                    این هفته · ۴۸۲ میلیون تومان
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-ember-400"></span>
                    اوج روز · پنجشنبه
                  </span>
                </div>
              </article>

              <article
                className="glass-panel reveal rounded-2xl p-5 shadow-soft sm:p-6 xl:col-span-4"
                style={{ "--d": "0.4s" } as React.CSSProperties}
              >
                <div className="mb-5 flex items-center justify-between">
                  <h2 className="text-lg font-bold text-ink-950">
                    فعالیت زنده
                  </h2>
                  <span className="chip bg-harbor-50 text-harbor-700">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-harbor-500"></span>
                    زنده
                  </span>
                </div>
                <ul id="activityList" className="space-y-3"></ul>
              </article>

              <article
                className="glass-panel reveal overflow-hidden rounded-2xl shadow-soft xl:col-span-7"
                style={{ "--d": "0.48s" } as React.CSSProperties}
              >
                <div className="flex items-center justify-between border-b border-ink-100/80 px-5 py-4 sm:px-6">
                  <div>
                    <h2 className="text-lg font-bold text-ink-950">
                      پروژه‌های فعال
                    </h2>
                    <p className="text-sm text-ink-500">
                      مرتب‌شده بر اساس آخرین فعالیت
                    </p>
                  </div>
                  <button className="btn-ghost text-xs">مشاهده همه</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-130 text-start text-sm">
                    <thead className="bg-ink-50/70 text-xs text-ink-400">
                      <tr>
                        <th className="px-5 py-3 font-semibold sm:px-6">
                          پروژه
                        </th>
                        <th className="px-3 py-3 font-semibold">وضعیت</th>
                        <th className="px-3 py-3 font-semibold">پیشرفت</th>
                        <th className="px-5 py-3 font-semibold sm:px-6">
                          موعد
                        </th>
                      </tr>
                    </thead>
                    <tbody
                      id="projectsBody"
                      className="divide-y divide-ink-100/80"
                    ></tbody>
                  </table>
                </div>
              </article>

              <article
                className="glass-panel reveal rounded-2xl p-5 shadow-soft sm:p-6 xl:col-span-5"
                style={{ "--d": "0.56s" } as React.CSSProperties}
              >
                <h2 className="text-lg font-bold text-ink-950">تمرکز امروز</h2>
                <p className="mt-1 text-sm text-ink-500">
                  سه اولویت برای حفظ سرعت کار.
                </p>

                <ul className="mt-5 space-y-3" id="focusList"></ul>

                <div className="mt-6 overflow-hidden rounded-2xl bg-linear-to-br from-harbor-700 via-harbor-600 to-ember-500 p-5 text-white">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold text-white/70">
                        هدف هفتگی
                      </p>
                      <p className="mt-1 text-2xl font-bold">
                        انتشار مسیر آشنایی کاربر
                      </p>
                      <p className="mt-1 text-sm text-white/80">
                        ۴ از ۵ مرحله تکمیل شده
                      </p>
                    </div>
                    <div className="relative grid h-14 w-14 place-items-center rounded-full border border-white/30">
                      <svg
                        className="absolute inset-0 h-full w-full -rotate-90"
                        viewBox="0 0 36 36"
                      >
                        <circle
                          cx="18"
                          cy="18"
                          r="15.5"
                          fill="none"
                          stroke="rgba(255,255,255,0.2)"
                          strokeWidth="3"
                        />
                        <circle
                          id="goalRing"
                          cx="18"
                          cy="18"
                          r="15.5"
                          fill="none"
                          stroke="white"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeDasharray="97.4"
                          strokeDashoffset="97.4"
                        />
                      </svg>
                      <span className="text-xs font-bold" dir="ltr">
                        ۸۰٪
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </section>
          </main>
        </div>
      </div>
      <Script src="/Js/dashboard.js" strategy="afterInteractive" />
    </div>
  );
}
