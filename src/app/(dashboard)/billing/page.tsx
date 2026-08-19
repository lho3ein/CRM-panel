import Script from "next/script";

export default function BillingPage() {
  return (
    <div
      data-page="billing"
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
                  مالی و اشتراک
                </p>
                <h1 className="text-3xl font-bold text-ink-950 sm:text-4xl">
                  صورتحساب
                </h1>
                <p className="mt-2 max-w-xl text-sm text-ink-500">
                  وضعیت اشتراک، مصرف منابع و فاکتورهای پرداخت‌شده را اینجا
                  مدیریت کنید.
                </p>
              </div>
              <button data-pay className="btn-primary magnetic relative">
                <span className="btn-label">تمدید اشتراک فعلی</span>
              </button>
            </section>

            <section
              className="reveal mb-6 grid gap-4 lg:grid-cols-12"
              style={{ "--d": "0.08s" } as React.CSSProperties}
            >
              <article className="billing-hero relative overflow-hidden rounded-3xl p-6 text-white lg:col-span-7 xl:col-span-8">
                <div className="pointer-events-none absolute -start-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl"></div>
                <div className="pointer-events-none absolute -bottom-16 end-0 h-48 w-48 rounded-full bg-ember-400/30 blur-3xl"></div>
                <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <span className="chip bg-white/15 text-white">
                      اشتراک فعال
                    </span>
                    <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                      پلن حرفه‌ای
                    </h2>
                    <p className="mt-2 max-w-md text-sm text-white/75">
                      تا ۱ شهریور ۱۴۰۴ معتبر است · تمدید خودکار روشن
                    </p>
                    <div className="mt-5 flex flex-wrap gap-3 text-sm">
                      <span className="rounded-xl bg-white/10 px-3 py-2 backdrop-blur">
                        ۴۹۰ هزار تومان / ماه
                      </span>
                      <span className="rounded-xl bg-white/10 px-3 py-2 backdrop-blur">
                        ۱۸ عضو تیم
                      </span>
                    </div>
                  </div>
                  <div className="grid h-28 w-28 place-items-center self-start rounded-3xl border border-white/20 bg-white/10 backdrop-blur">
                    <div className="text-center">
                      <p className="text-3xl font-bold">۲۴</p>
                      <p className="text-[11px] text-white/70">روز مانده</p>
                    </div>
                  </div>
                </div>
              </article>

              <article className="glass-panel tilt-card rounded-3xl p-5 shadow-soft lg:col-span-5 xl:col-span-4">
                <h3 className="text-sm font-bold text-ink-900">مصرف این ماه</h3>
                <div className="mt-5 space-y-4">
                  <div>
                    <div className="mb-1.5 flex justify-between text-xs">
                      <span className="text-ink-500">فضای ذخیره‌سازی</span>
                      <span className="font-bold text-ink-800">
                        ۳۲ از ۵۰ گیگ
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-ink-100">
                      <div
                        className="progress-bar h-full rounded-full bg-harbor-500"
                        data-width="64%"
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1.5 flex justify-between text-xs">
                      <span className="text-ink-500">پروژه‌های فعال</span>
                      <span className="font-bold text-ink-800">
                        ۲۴ از نامحدود
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-ink-100">
                      <div
                        className="progress-bar h-full rounded-full bg-ember-500"
                        data-width="48%"
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1.5 flex justify-between text-xs">
                      <span className="text-ink-500">صندلی‌های تیم</span>
                      <span className="font-bold text-ink-800">۱۸ از ۲۵</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-ink-100">
                      <div
                        className="progress-bar h-full rounded-full bg-harbor-600"
                        data-width="72%"
                      ></div>
                    </div>
                  </div>
                </div>
              </article>
            </section>

            <section className="mb-2">
              <h2
                className="reveal mb-4 text-lg font-bold text-ink-950"
                style={{ "--d": "0.12s" } as React.CSSProperties}
              >
                انتخاب پلن
              </h2>
              <div className="grid gap-4 stagger-children lg:grid-cols-3">
                <article
                  className="plan-card plan-card--rich glass-panel rounded-3xl p-6"
                  data-plan="شروع"
                >
                  <p className="text-sm font-bold text-ink-500">شروع</p>
                  <p className="mt-3 text-4xl font-bold tracking-tight text-ink-950">
                    رایگان
                  </p>
                  <p className="mt-1 text-xs text-ink-400">
                    برای تست و تیم‌های خیلی کوچک
                  </p>
                  <ul className="plan-pros mt-6 space-y-3 text-sm text-ink-600">
                    <li>تا ۳ پروژه همزمان</li>
                    <li>۱ گیگابایت فضا</li>
                    <li>پشتیبانی ایمیلی</li>
                    <li>۱ عضو تیم</li>
                  </ul>
                  <button type="button" className="btn-ghost mt-6 w-full">
                    انتخاب پلن
                  </button>
                </article>

                <article
                  className="plan-card plan-card--rich plan-card--featured is-selected rounded-3xl p-6"
                  data-plan="حرفه‌ای"
                >
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-bold text-harbor-100">حرفه‌ای</p>
                    <span className="rounded-full bg-ember-400 px-2.5 py-1 text-[11px] font-bold text-ink-950">
                      محبوب
                    </span>
                  </div>
                  <p className="mt-3 text-4xl font-bold tracking-tight text-white">
                    ۴۹۰
                    <span className="ms-1 text-base font-semibold text-white/70">
                      هزار تومان
                    </span>
                  </p>
                  <p className="mt-1 text-xs text-white/65">
                    ماهانه · مناسب تیم‌های در حال رشد
                  </p>
                  <ul className="plan-pros plan-pros--light mt-6 space-y-3 text-sm text-white/90">
                    <li>پروژه نامحدود</li>
                    <li>۵۰ گیگابایت فضا</li>
                    <li>تحلیل پیشرفته</li>
                    <li>تا ۲۵ عضو تیم</li>
                  </ul>
                  <button
                    type="button"
                    data-pay
                    className="relative mt-6 w-full rounded-xl bg-white py-2.5 text-sm font-bold text-harbor-800 shadow-lg transition hover:-translate-y-0.5"
                  >
                    <span className="btn-label">ادامه با حرفه‌ای</span>
                  </button>
                </article>

                <article
                  className="plan-card plan-card--rich glass-panel rounded-3xl p-6"
                  data-plan="سازمانی"
                >
                  <p className="text-sm font-bold text-ink-500">سازمانی</p>
                  <p className="mt-3 text-4xl font-bold tracking-tight text-ink-950">
                    سفارشی
                  </p>
                  <p className="mt-1 text-xs text-ink-400">
                    برای شرکت‌ها و امنیت سطح بالا
                  </p>
                  <ul className="plan-pros mt-6 space-y-3 text-sm text-ink-600">
                    <li>نقش‌های سفارشی</li>
                    <li>امنیت و SSO</li>
                    <li>مدیر موفقیت اختصاصی</li>
                    <li>قرارداد و فاکتور رسمی</li>
                  </ul>
                  <button type="button" className="btn-ghost mt-6 w-full">
                    درخواست مشاوره
                  </button>
                </article>
              </div>
            </section>

            <section
              className="reveal mt-6 grid gap-4 xl:grid-cols-12"
              style={{ "--d": "0.2s" } as React.CSSProperties}
            >
              <article className="glass-panel spotlight rounded-3xl p-5 shadow-soft sm:p-6 xl:col-span-4">
                <h3 className="text-lg font-bold text-ink-950">روش پرداخت</h3>
                <p className="mt-1 text-sm text-ink-500">
                  کارت پیش‌فرض برای تمدید خودکار
                </p>
                <div className="mt-5 rounded-2xl bg-gradient-to-br from-ink-900 to-harbor-800 p-5 text-white shadow-lift">
                  <p className="text-xs text-white/60">کارت بانکی</p>
                  <p
                    className="mt-3 font-mono text-lg tracking-[0.2em]"
                    dir="ltr"
                  >
                    •••• •••• •••• ۶۲۴۱
                  </p>
                  <div className="mt-4 flex items-end justify-between text-sm">
                    <span>سارا محمدی</span>
                    <span className="text-white/70">۰۸ / ۲۸</span>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn-ghost magnetic mt-4 w-full text-xs"
                  style={{ "--d": "0.2s" } as React.CSSProperties}
                  //   onClick={() => HarborToast('فرم تغییر کارت باز شد')}
                >
                  تغییر روش پرداخت
                </button>
              </article>

              <article className="glass-panel overflow-hidden rounded-3xl shadow-soft xl:col-span-8">
                <div className="flex items-center justify-between border-b border-ink-100/80 px-5 py-4 sm:px-6">
                  <div>
                    <h3 className="text-lg font-bold text-ink-950">
                      فاکتورهای اخیر
                    </h3>
                    <p className="text-sm text-ink-500">
                      برای دانلود روی هر ردیف کلیک کنید
                    </p>
                  </div>
                </div>
                <div className="divide-y divide-ink-100/80">
                  <button
                    data-invoice="۱۴۰۴-۱۸۴۲"
                    className="invoice-row group"
                  >
                    <span className="invoice-icon">ف</span>
                    <span className="min-w-0 flex-1 text-start">
                      <p className="font-semibold text-ink-900 group-hover:text-harbor-800">
                        فاکتور ۱۴۰۴-۱۸۴۲
                      </p>
                      <p className="text-xs text-ink-400">
                        ۱ مرداد ۱۴۰۴ · پلن حرفه‌ای
                      </p>
                    </span>
                    <span className="status-pill bg-harbor-50 text-harbor-700">
                      پرداخت‌شده
                    </span>
                    <span className="hidden text-sm font-bold text-ink-800 sm:block">
                      ۴۹۰ هزار تومان
                    </span>
                  </button>
                  <button
                    data-invoice="۱۴۰۴-۱۷۹۰"
                    className="invoice-row group"
                  >
                    <span className="invoice-icon">ف</span>
                    <span className="min-w-0 flex-1 text-start">
                      <p className="font-semibold text-ink-900 group-hover:text-harbor-800">
                        فاکتور ۱۴۰۴-۱۷۹۰
                      </p>
                      <p className="text-xs text-ink-400">
                        ۱ تیر ۱۴۰۴ · پلن حرفه‌ای
                      </p>
                    </span>
                    <span className="status-pill bg-harbor-50 text-harbor-700">
                      پرداخت‌شده
                    </span>
                    <span className="hidden text-sm font-bold text-ink-800 sm:block">
                      ۴۹۰ هزار تومان
                    </span>
                  </button>
                  <button
                    data-invoice="۱۴۰۴-۱۷۱۱"
                    className="invoice-row group"
                  >
                    <span className="invoice-icon">ف</span>
                    <span className="min-w-0 flex-1 text-start">
                      <p className="font-semibold text-ink-900 group-hover:text-harbor-800">
                        فاکتور ۱۴۰۴-۱۷۱۱
                      </p>
                      <p className="text-xs text-ink-400">
                        ۱ خرداد ۱۴۰۴ · پلن حرفه‌ای
                      </p>
                    </span>
                    <span className="status-pill bg-harbor-50 text-harbor-700">
                      پرداخت‌شده
                    </span>
                    <span className="hidden text-sm font-bold text-ink-800 sm:block">
                      ۴۹۰ هزار تومان
                    </span>
                  </button>
                </div>
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
