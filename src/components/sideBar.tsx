import Script from "next/script";

export const SideBar = () => {
  return (
    <>
      <aside
        id="sidebar"
        className="fixed inset-y-0 inset-s-0 z-40 flex w-68 translate-x-full flex-col border-e border-white/60 bg-white/80 px-4 py-5 shadow-soft backdrop-blur-xl transition-transform duration-500 ease-out lg:translate-x-0"
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
                پنل مدیریت
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

        <div className="mt-4 overflow-hidden rounded-2xl border border-harbor-100 bg-linear-to-br from-harbor-50 to-ember-50 p-4">
          <p className="text-sm font-bold text-ink-900">ارتقا به پنل حرفه‌ای</p>
          <p className="mt-1 text-xs leading-relaxed text-ink-500">
            تحلیل پیشرفته، نقش‌های سفارشی و پشتیبانی اولویت‌دار را فعال کنید.
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
      <Script src="/Js/shell.js" strategy="afterInteractive" />
    </>
  );
};
