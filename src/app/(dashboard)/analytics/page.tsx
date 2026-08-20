import { NavBar } from "@/components/navBar";
import { SideBar } from "@/components/sideBar";
import Script from "next/script";
import React from "react";

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
        className="pointer-events-none fixed -inset-e-24 top-10 h-72 w-72 animate-orb-a rounded-full bg-harbor-300/30 blur-3xl"
        aria-hidden="true"
      ></div>
      <div
        className="pointer-events-none fixed -inset-s-16 bottom-10 h-80 w-80 animate-orb-b rounded-full bg-ember-300/25 blur-3xl"
        aria-hidden="true"
      ></div>

      <div className="relative z-10 flex min-h-screen">
        <SideBar />

        <div className="flex min-w-0 flex-1 flex-col lg:mr-68">
          <NavBar />

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
                        className="bar-chart-bar w-full max-w-10 rounded-t-lg bg-linear-to-t from-harbor-700 to-harbor-400 shadow-lg shadow-harbor-600/20 transition group-hover:from-ember-600 group-hover:to-ember-400"
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
                        className="bar-chart-bar w-full max-w-10 rounded-t-lg bg-linear-to-t from-harbor-700 to-harbor-400 shadow-lg shadow-harbor-600/20 transition group-hover:from-ember-600 group-hover:to-ember-400"
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
                        className="bar-chart-bar w-full max-w-10 rounded-t-lg bg-linear-to-t from-harbor-700 to-harbor-400 shadow-lg shadow-harbor-600/20 transition group-hover:from-ember-600 group-hover:to-ember-400"
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
                        className="bar-chart-bar w-full max-w-10 rounded-t-lg bg-linear-to-t from-harbor-700 to-harbor-400 shadow-lg shadow-harbor-600/20 transition group-hover:from-ember-600 group-hover:to-ember-400"
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
                        className="bar-chart-bar w-full max-w-10 rounded-t-lg bg-linear-to-t from-harbor-700 to-harbor-400 shadow-lg shadow-harbor-600/20 transition group-hover:from-ember-600 group-hover:to-ember-400"
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
                        className="bar-chart-bar w-full max-w-10 rounded-t-lg bg-linear-to-t from-harbor-700 to-harbor-400 shadow-lg shadow-harbor-600/20 transition group-hover:from-ember-600 group-hover:to-ember-400"
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
                        className="bar-chart-bar w-full max-w-10 rounded-t-lg bg-linear-to-t from-harbor-700 to-harbor-400 shadow-lg shadow-harbor-600/20 transition group-hover:from-ember-600 group-hover:to-ember-400"
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
                style={{ "--d": "0.4s" } as React.CSSProperties}
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
      <Script src="/Js/pages.js" strategy="afterInteractive" />
    </div>
  );
}
