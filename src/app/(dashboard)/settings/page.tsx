import Script from "next/script";

export default function SettingsPage() {
  return (
    <div
      data-page="settings"
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
            <section className="reveal mb-7">
              <p className="mb-2 text-xs font-semibold text-harbor-600">
                حساب کاربری
              </p>
              <h1 className="text-3xl font-bold text-ink-950 sm:text-4xl">
                تنظیمات
              </h1>
              <p className="mt-2 max-w-xl text-sm text-ink-500">
                پروفایل، اعلان‌ها و امنیت حساب را با یک نگاه مدیریت کنید.
              </p>
            </section>

            <div
              className="settings-layout reveal"
              style={{ "--d": "0.1s" } as React.CSSProperties}
            >
              <aside className="settings-nav glass-panel rounded-3xl p-3 shadow-soft">
                <button
                  data-tab="profile"
                  className="settings-nav__item is-active"
                >
                  <span className="settings-nav__icon">پ</span>
                  <span>
                    <span className="block text-sm font-bold">پروفایل</span>
                    <span className="block text-[11px] text-ink-400">
                      اطلاعات شخصی و تیم
                    </span>
                  </span>
                </button>
                <button data-tab="notify" className="settings-nav__item">
                  <span className="settings-nav__icon">ا</span>
                  <span>
                    <span className="block text-sm font-bold">اعلان‌ها</span>
                    <span className="block text-[11px] text-ink-400">
                      ایمیل و مرورگر
                    </span>
                  </span>
                </button>
                <button data-tab="security" className="settings-nav__item">
                  <span className="settings-nav__icon">س</span>
                  <span>
                    <span className="block text-sm font-bold">امنیت</span>
                    <span className="block text-[11px] text-ink-400">
                      رمز و نشست‌ها
                    </span>
                  </span>
                </button>
              </aside>

              <div className="min-w-0">
                <section
                  data-panel="profile"
                  className="glass-panel spotlight rounded-3xl p-5 shadow-soft sm:p-7"
                >
                  <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center">
                    <div className="avatar-upload">
                      <span className="text-xl font-bold text-white">سم</span>
                      <button
                        type="button"
                        className="avatar-upload__btn"
                        // onClick={() => HarborToast("آپلود تصویر به‌زودی")}
                      >
                        تغییر
                      </button>
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-ink-950">
                        سارا محمدی
                      </h2>
                      <p className="text-sm text-ink-500">
                        مدیر · استودیو لنگر
                      </p>
                    </div>
                  </div>
                  <form id="settingsForm" className="grid gap-4 sm:grid-cols-2">
                    <div className="sm:col-span-1">
                      <label className="field-label" htmlFor="setName">
                        نام کامل
                      </label>
                      <input
                        id="setName"
                        className="field-input"
                        value="سارا محمدی"
                      />
                    </div>
                    <div className="sm:col-span-1">
                      <label className="field-label" htmlFor="setTeam">
                        نام تیم
                      </label>
                      <input
                        id="setTeam"
                        className="field-input"
                        value="استودیو لنگر"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="field-label" htmlFor="setEmail">
                        ایمیل
                      </label>
                      <input
                        id="setEmail"
                        className="field-input"
                        type="email"
                        placeholder="ایمیل کاری خود را وارد کنید"
                        dir="ltr"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="field-label" htmlFor="setBio">
                        بیوگرافی کوتاه
                      </label>
                      <textarea
                        id="setBio"
                        className="field-input min-h-[96px] resize-none"
                        rows={3}
                        placeholder="یک معرفی کوتاه از خودتان بنویسید"
                      >
                        طراح محصول و مدیر استودیو لنگر
                      </textarea>
                    </div>
                    <div className="sm:col-span-2 flex flex-wrap gap-2 pt-1">
                      <button
                        id="saveSettings"
                        className="btn-primary magnetic relative px-6"
                        type="submit"
                      >
                        <span className="btn-label">ذخیره تغییرات</span>
                      </button>
                      <button
                        type="button"
                        className="btn-ghost"
                        // onClick={() => HarborToast("تغییرات لغو شد")}
                      >
                        انصراف
                      </button>
                    </div>
                  </form>
                </section>

                <section
                  data-panel="notify"
                  className="glass-panel hidden rounded-3xl p-5 shadow-soft sm:p-7"
                >
                  <h2 className="text-xl font-bold text-ink-950">
                    ترجیحات اعلان
                  </h2>
                  <p className="mt-1 text-sm text-ink-500">
                    مشخص کنید چه پیام‌هایی برایتان بیاید.
                  </p>
                  <div className="mt-6 space-y-3">
                    <div className="settings-row">
                      <div className="settings-row__icon bg-harbor-50 text-harbor-700">
                        ای
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-ink-900">
                          اعلان ایمیلی
                        </p>
                        <p className="text-xs text-ink-400">
                          خلاصه هفتگی فعالیت‌ها و گزارش‌ها
                        </p>
                      </div>
                      <button
                        className="toggle-switch is-on"
                        data-label="اعلان ایمیلی"
                        role="switch"
                        aria-checked="true"
                      ></button>
                    </div>
                    <div className="settings-row">
                      <div className="settings-row__icon bg-ember-50 text-ember-700">
                        م
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-ink-900">
                          اعلان مرورگر
                        </p>
                        <p className="text-xs text-ink-400">
                          هشدار لحظه‌ای کارها و کامنت‌ها
                        </p>
                      </div>
                      <button
                        className="toggle-switch"
                        data-label="اعلان مرورگر"
                        role="switch"
                        aria-checked="false"
                      ></button>
                    </div>
                    <div className="settings-row">
                      <div className="settings-row__icon bg-ink-100 text-ink-700">
                        ی
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-ink-900">
                          یادآور موعد پروژه
                        </p>
                        <p className="text-xs text-ink-400">
                          ۲۴ ساعت قبل از سررسید
                        </p>
                      </div>
                      <button
                        className="toggle-switch is-on"
                        data-label="یادآور موعد"
                        role="switch"
                        aria-checked="true"
                      ></button>
                    </div>
                    <div className="settings-row">
                      <div className="settings-row__icon bg-harbor-100 text-harbor-800">
                        ف
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-ink-900">
                          اعلان فاکتور
                        </p>
                        <p className="text-xs text-ink-400">
                          یادآوری تمدید اشتراک
                        </p>
                      </div>
                      <button
                        className="toggle-switch is-on"
                        data-label="اعلان فاکتور"
                        role="switch"
                        aria-checked="true"
                      ></button>
                    </div>
                  </div>
                </section>

                <section
                  data-panel="security"
                  className="glass-panel hidden rounded-3xl p-5 shadow-soft sm:p-7"
                >
                  <h2 className="text-xl font-bold text-ink-950">امنیت حساب</h2>
                  <p className="mt-1 text-sm text-ink-500">
                    رمز عبور، ورود دومرحله‌ای و دستگاه‌های فعال.
                  </p>

                  <div className="mt-6 space-y-3">
                    <div className="settings-row">
                      <div className="settings-row__icon bg-harbor-50 text-harbor-700">
                        ۲
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-ink-900">
                          ورود دومرحله‌ای
                        </p>
                        <p className="text-xs text-ink-400">
                          کد یک‌بارمصرف روی گوشی
                        </p>
                      </div>
                      <button
                        className="toggle-switch"
                        data-label="ورود دومرحله‌ای"
                        role="switch"
                        aria-checked="false"
                      ></button>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="field-label" htmlFor="passCurrent">
                        رمز فعلی
                      </label>
                      <input
                        id="passCurrent"
                        type="password"
                        className="field-input"
                        placeholder="••••••••"
                      />
                    </div>
                    <div>
                      <label className="field-label" htmlFor="passNew">
                        رمز جدید
                      </label>
                      <input
                        id="passNew"
                        type="password"
                        className="field-input"
                        placeholder="حداقل ۸ کاراکتر"
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn-primary magnetic mt-4"
                    // onClick={() => HarborToast("رمز عبور به‌روزرسانی شد")}
                  >
                    به‌روزرسانی رمز
                  </button>

                  <h3 className="mt-8 mb-3 text-sm font-bold text-ink-800">
                    نشست‌های فعال
                  </h3>
                  <div className="space-y-3">
                    <div className="session-card">
                      <div>
                        <p className="font-semibold text-ink-900">
                          مک‌بوک · تهران
                        </p>
                        <p className="text-xs text-ink-400">
                          همین دستگاه · آنلاین الان
                        </p>
                      </div>
                      <span className="status-pill bg-harbor-50 text-harbor-700">
                        فعلی
                      </span>
                    </div>
                    <div className="session-card">
                      <div>
                        <p className="font-semibold text-ink-900">
                          آیفون · تهران
                        </p>
                        <p className="text-xs text-ink-400">
                          آخرین فعالیت · دیروز
                        </p>
                      </div>
                      <button
                        type="button"
                        className="btn-ghost text-xs"
                        // onClick={() => HarborToast("نشست آیفون بسته شد")}
                      >
                        خروج
                      </button>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2 border-t border-ink-100 pt-5">
                    <button
                      type="button"
                      className="btn-ghost text-xs"
                      //   onClick="HarborToast('نشست‌های دیگر خارج شدند')"
                    >
                      خروج از همه دستگاه‌ها
                    </button>
                    <a
                      href="./index.html"
                      className="btn-ghost text-xs text-ember-700"
                    >
                      خروج از حساب
                    </a>
                  </div>
                </section>
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
