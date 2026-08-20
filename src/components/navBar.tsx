"use client";
import Link from "next/link";
import { useState } from "react";

export const NavBar = () => {
  const [search, setSearch] = useState("");
  return (
    <>
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
              className="pointer-events-none absolute inset-s-3 top-2/3 -translate-y-1/2 text-ink-400"
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
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="جستجوی پروژه، افراد، فاکتور…"
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
              <span className="absolute inset-e-2 top-2 h-2 w-2 rounded-full bg-ember-500 ring-2 ring-white"></span>
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
                    حسین فایل جدید گذاشت
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
            </div>

            <a
              href="./settings"
              className="hidden items-center gap-3 rounded-2xl border border-ink-200/70 bg-white/80 py-1.5 pe-3 ps-1.5 sm:flex"
            >
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-linear-to-br from-harbor-500 to-harbor-700 text-xs font-bold text-white">
                ح
              </span>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-ink-900">حسین خلیلی</p>
                <p className="text-[11px] text-ink-400">مدیر</p>
              </div>
            </a>
            <button
              id="logoutBtn"
              className="hidden rounded-xl border border-ink-200/70 bg-white px-3 py-2 text-xs font-bold text-ink-600 hover:border-ember-300 hover:text-ember-700 sm:inline-flex"
            >
              <Link href="./auth">خروج</Link>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
