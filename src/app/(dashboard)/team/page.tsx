import Script from "next/script";

export default function TeamPage() {
  return (
    <div
      data-page="team"
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
            <a
              href="./dashboard.html"
              className="group flex items-center gap-3"
            >
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
              href="./billing.html"
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
                  className="pointer-events-none absolute start-3 top-1/2 -translate-y-1/2 text-ink-400"
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
                  href="./settings.html"
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
                  همکاران
                </p>
                <h1 className="text-3xl font-bold text-ink-950 sm:text-4xl">
                  تیم لنگر
                </h1>
                <p className="mt-2 text-sm text-ink-500">
                  نقش‌ها را عوض کنید، پیام بفرستید یا عضو جدید دعوت کنید.
                </p>
              </div>
              <button id="openInvite" className="btn-primary magnetic">
                دعوت عضو جدید
              </button>
            </section>

            <section className="grid gap-4 stagger-children sm:grid-cols-2 xl:grid-cols-3">
              <article
                className="member-card glass-panel rounded-2xl p-5"
                data-member="سارا محمدی"
              >
                <div className="flex items-start gap-3">
                  <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-harbor-500 to-harbor-700 text-sm font-bold text-white">
                    سم
                    <span className="absolute -bottom-0.5 -end-0.5 h-3 w-3 rounded-full bg-harbor-500 ring-2 ring-white"></span>
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-bold text-ink-950">سارا محمدی</p>
                    <p className="text-xs text-ink-400">مدیر</p>
                  </div>
                </div>
                <div className="mt-4">
                  <label className="mb-1 block text-xs font-semibold text-ink-500">
                    نقش
                  </label>
                  <select
                    defaultValue="مدیر"
                    data-role
                    className="field-input py-2"
                  >
                    <option>مدیر</option>
                    <option>طراح</option>
                    <option>توسعه‌دهنده</option>
                    <option>بازاریاب</option>
                  </select>
                </div>
                <button
                  data-message="سارا محمدی"
                  className="btn-ghost magnetic mt-3 w-full text-xs"
                >
                  ارسال پیام
                </button>
              </article>
              <article
                className="member-card glass-panel rounded-2xl p-5"
                data-member="مریم احمدی"
              >
                <div className="flex items-start gap-3">
                  <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-ember-400 to-ember-600 text-sm font-bold text-white">
                    ما
                    <span className="absolute -bottom-0.5 -end-0.5 h-3 w-3 rounded-full bg-harbor-500 ring-2 ring-white"></span>
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-bold text-ink-950">مریم احمدی</p>
                    <p className="text-xs text-ink-400">طراح</p>
                  </div>
                </div>
                <div className="mt-4">
                  <label className="mb-1 block text-xs font-semibold text-ink-500">
                    نقش
                  </label>
                  <select
                    defaultValue="طراح"
                    data-role
                    className="field-input py-2"
                  >
                    <option>مدیر</option>
                    <option>طراح</option>
                    <option>توسعه‌دهنده</option>
                    <option>بازاریاب</option>
                  </select>
                </div>
                <button
                  data-message="مریم احمدی"
                  className="btn-ghost magnetic mt-3 w-full text-xs"
                >
                  ارسال پیام
                </button>
              </article>
              <article
                className="member-card glass-panel rounded-2xl p-5"
                data-member="سامان کریمی"
              >
                <div className="flex items-start gap-3">
                  <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-ink-500 to-ink-700 text-sm font-bold text-white">
                    سا
                    <span className="absolute -bottom-0.5 -end-0.5 h-3 w-3 rounded-full bg-ink-300 ring-2 ring-white"></span>
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-bold text-ink-950">سامان کریمی</p>
                    <p className="text-xs text-ink-400">توسعه‌دهنده</p>
                  </div>
                </div>
                <div className="mt-4">
                  <label className="mb-1 block text-xs font-semibold text-ink-500">
                    نقش
                  </label>
                  <select
                    defaultValue="توسعه‌دهنده"
                    data-role
                    className="field-input py-2"
                  >
                    <option>مدیر</option>
                    <option>طراح</option>
                    <option>توسعه‌دهنده</option>
                    <option>بازاریاب</option>
                  </select>
                </div>
                <button
                  data-message="سامان کریمی"
                  className="btn-ghost magnetic mt-3 w-full text-xs"
                >
                  ارسال پیام
                </button>
              </article>
              <article
                className="member-card glass-panel rounded-2xl p-5"
                data-member="نیلوفر رضایی"
              >
                <div className="flex items-start gap-3">
                  <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-harbor-400 to-ember-500 text-sm font-bold text-white">
                    نر
                    <span className="absolute -bottom-0.5 -end-0.5 h-3 w-3 rounded-full bg-harbor-500 ring-2 ring-white"></span>
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-bold text-ink-950">نیلوفر رضایی</p>
                    <p className="text-xs text-ink-400">بازاریاب</p>
                  </div>
                </div>
                <div className="mt-4">
                  <label className="mb-1 block text-xs font-semibold text-ink-500">
                    نقش
                  </label>
                  <select
                    defaultValue="بازاریاب"
                    data-role
                    className="field-input py-2"
                  >
                    <option>مدیر</option>
                    <option>طراح</option>
                    <option>توسعه‌دهنده</option>
                    <option>بازاریاب</option>
                  </select>
                </div>
                <button
                  data-message="نیلوفر رضایی"
                  className="btn-ghost magnetic mt-3 w-full text-xs"
                >
                  ارسال پیام
                </button>
              </article>
              <article
                className="member-card glass-panel rounded-2xl p-5"
                data-member="پارسا موسوی"
              >
                <div className="flex items-start gap-3">
                  <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-harbor-600 to-ink-700 text-sm font-bold text-white">
                    پم
                    <span className="absolute -bottom-0.5 -end-0.5 h-3 w-3 rounded-full bg-harbor-500 ring-2 ring-white"></span>
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-bold text-ink-950">پارسا موسوی</p>
                    <p className="text-xs text-ink-400">توسعه‌دهنده</p>
                  </div>
                </div>
                <div className="mt-4">
                  <label className="mb-1 block text-xs font-semibold text-ink-500">
                    نقش
                  </label>
                  <select
                    defaultValue="توسعه‌دهنده"
                    data-role
                    className="field-input py-2"
                  >
                    <option>مدیر</option>
                    <option>طراح</option>
                    <option>توسعه‌دهنده</option>
                    <option>بازاریاب</option>
                  </select>
                </div>
                <button
                  data-message="پارسا موسوی"
                  className="btn-ghost magnetic mt-3 w-full text-xs"
                >
                  ارسال پیام
                </button>
              </article>
              <article
                className="member-card glass-panel rounded-2xl p-5"
                data-member="هستی اکبری"
              >
                <div className="flex items-start gap-3">
                  <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-ember-500 to-harbor-600 text-sm font-bold text-white">
                    ها
                    <span className="absolute -bottom-0.5 -end-0.5 h-3 w-3 rounded-full bg-ink-300 ring-2 ring-white"></span>
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-bold text-ink-950">هستی اکبری</p>
                    <p className="text-xs text-ink-400">طراح</p>
                  </div>
                </div>
                <div className="mt-4">
                  <label className="mb-1 block text-xs font-semibold text-ink-500">
                    نقش
                  </label>
                  <select
                    defaultValue="طراح"
                    data-role
                    className="field-input py-2"
                  >
                    <option>مدیر</option>
                    <option>طراح</option>
                    <option>توسعه‌دهنده</option>
                    <option>بازاریاب</option>
                  </select>
                </div>
                <button
                  data-message="هستی اکبری"
                  className="btn-ghost magnetic mt-3 w-full text-xs"
                >
                  ارسال پیام
                </button>
              </article>
            </section>

            <div id="inviteModal" className="modal-backdrop">
              <div className="modal-panel">
                <h3 className="text-lg font-bold">دعوت به تیم</h3>
                <form id="inviteForm" className="mt-4 space-y-3">
                  <div>
                    <label className="field-label" htmlFor="inviteEmail">
                      ایمیل
                    </label>
                    <input
                      id="inviteEmail"
                      type="email"
                      className="field-input"
                      placeholder="sara@company.ir"
                      dir="ltr"
                    />
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      id="closeInvite"
                      className="btn-ghost flex-1"
                    >
                      انصراف
                    </button>
                    <button className="btn-primary flex-1" type="submit">
                      ارسال دعوت
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
