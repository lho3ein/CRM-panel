"use client";
import { NavBar } from "@/components/navBar";
import { SideBar } from "@/components/sideBar";
import Script from "next/script";
import { useState } from "react";
type stateActive = "profile" | "notify" | "security";

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState<stateActive>("profile");

  // ------------------------------------------profile state
  const [name, setName] = useState("حسین خلیلی");
  const [teamName, setTeamName] = useState("استودیو تست");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("طراح محصول و مدیر استودیو تست");
  // -------------------------------------------notify state
  const [emailToggle, setEmailToggle] = useState(true);
  const [browserToggle, setBrowserToggle] = useState(false);
  const [reminderToggle, setReminderToggle] = useState(true);
  const [factorToggle, setFactorToggle] = useState(true);
  // --------------------------------------------security state
  const [twoFactorToggle, setTwoFactorToggle] = useState(false);

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
                {/* btn profile */}
                <button
                  onClick={() => setActiveSection("profile")}
                  className={`settings-nav__item ${activeSection === "profile" && "is-active"}`}
                >
                  <span className="settings-nav__icon">پ</span>
                  <span>
                    <span className="block text-sm font-bold">پروفایل</span>
                    <span className="block text-[11px] text-ink-400">
                      اطلاعات شخصی و تیم
                    </span>
                  </span>
                </button>

                {/* btn notify */}
                <button
                  onClick={() => setActiveSection("notify")}
                  className={`settings-nav__item ${activeSection === "notify" && "is-active"}`}
                >
                  <span className="settings-nav__icon">ا</span>
                  <span>
                    <span className="block text-sm font-bold">اعلان‌ها</span>
                    <span className="block text-[11px] text-ink-400">
                      ایمیل و مرورگر
                    </span>
                  </span>
                </button>

                {/* btn security */}
                <button
                  onClick={() => setActiveSection("security")}
                  className={`settings-nav__item ${activeSection === "security" && "is-active"}`}
                >
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
                {/* profile */}
                <section
                  className={`${activeSection == "profile" ? "block" : "hidden"} glass-panel spotlight rounded-3xl p-5 shadow-soft sm:p-7`}
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
                        حسین خلیلی
                      </h2>
                      <p className="text-sm text-ink-500">مدیر · استودیو تست</p>
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
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="sm:col-span-1">
                      <label className="field-label" htmlFor="setTeam">
                        نام تیم
                      </label>
                      <input
                        id="setTeam"
                        className="field-input"
                        value={teamName}
                        onChange={(e) => setTeamName(e.target.value)}
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="field-label" htmlFor="setBio">
                        بیوگرافی کوتاه
                      </label>
                      <textarea
                        id="setBio"
                        className="field-input min-h-24 resize-none"
                        rows={3}
                        placeholder="یک معرفی کوتاه از خودتان بنویسید"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                      ></textarea>
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

                {/* notify */}
                <section
                  className={`${activeSection == "notify" ? "block" : "hidden"} glass-panel rounded-3xl p-5 shadow-soft sm:p-7`}
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
                        className={`toggle-switch ${emailToggle && "is-on"}`}
                        data-label="اعلان ایمیلی"
                        onClick={() => setEmailToggle(!emailToggle)}
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
                        className={`toggle-switch ${browserToggle && "is-on"}`}
                        data-label="اعلان مرورگر"
                        onClick={() => setBrowserToggle(!browserToggle)}
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
                        className={`toggle-switch ${reminderToggle && "is-on"}`}
                        data-label="یادآور موعد"
                        onClick={() => setReminderToggle(!reminderToggle)}
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
                        className={`toggle-switch ${factorToggle && "is-on"}`}
                        data-label="اعلان فاکتور"
                        onClick={() => setFactorToggle(!factorToggle)}
                      ></button>
                    </div>
                  </div>
                </section>

                {/* security */}
                <section
                  className={`${activeSection == "security" ? "block" : "hidden"} glass-panel rounded-3xl p-5 shadow-soft sm:p-7`}
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
                        className={`toggle-switch ${twoFactorToggle && "is-on"}`}
                        data-label="ورود دومرحله‌ای"
                        onClick={() => setTwoFactorToggle(!twoFactorToggle)}
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
                      href="./auth"
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
      <Script src="/Js/pages.js" strategy="afterInteractive" />
    </div>
  );
}
