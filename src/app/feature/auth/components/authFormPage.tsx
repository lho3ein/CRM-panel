import Script from "next/script";
import { LoginForm } from "./loginForm";
import { SignUpForm } from "./signupForm";

export const AuthFormPage = () => {
  return (
    <>
      <div className="mesh-bg relative min-h-screen overflow-x-hidden">
        <div
          className="pointer-events-none fixed inset-0 noise opacity-50"
          aria-hidden="true"
        ></div>
        <div
          className="pointer-events-none fixed -inset-e-20 top-0 h-72 w-72 animate-orb-a rounded-full bg-harbor-300/25 blur-3xl"
          aria-hidden="true"
        ></div>
        <div
          className="pointer-events-none fixed -inset-s-16 bottom-0 h-80 w-80 animate-orb-b rounded-full bg-ember-300/20 blur-3xl"
          aria-hidden="true"
        ></div>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-stretch p-4 sm:p-6 lg:p-8">
          <div className="grid w-full overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/55 shadow-soft backdrop-blur-xl lg:grid-cols-2">
            {/* Brand panel  */}
            <section className="brand-panel relative hidden min-h-135 overflow-hidden p-8 text-white lg:flex lg:flex-col lg:justify-between xl:p-10">
              <div
                className="pointer-events-none absolute inset-0 opacity-40"
                aria-hidden="true"
              >
                <div className="absolute inset-s-10 top-16 h-40 w-40 rounded-full bg-white/10 blur-2xl"></div>
                <div className="absolute bottom-24 inset-e-8 h-48 w-48 rounded-full bg-ember-400/30 blur-3xl"></div>
              </div>

              <svg
                className="brand-wave"
                viewBox="0 0 600 220"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M0 120 C80 80, 140 160, 220 110 S380 40, 460 90 S560 170, 600 130" />
                <path d="M0 150 C100 110, 180 190, 260 140 S420 70, 500 120 S570 190, 600 160" />
                <path d="M0 180 C90 150, 160 210, 250 170 S400 110, 490 150 S560 200, 600 180" />
              </svg>

              <div
                className="auth-reveal relative z-10"
                style={{ "--d": "0.05s" } as React.CSSProperties}
              >
                <a href="./auth" className="inline-flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/15 text-white ring-1 ring-white/25 backdrop-blur">
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
                    <span className="block text-2xl font-bold tracking-tight">
                      پنل
                    </span>
                    <span className="text-xs text-white/70">
                      فضای کاری آرام برای تیم‌های جدی
                    </span>
                  </span>
                </a>
              </div>

              <div
                className="auth-reveal relative z-10 my-10"
                style={{ "--d": "0.18s" } as React.CSSProperties}
              >
                <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-white/65">
                  پنل
                </p>
                <h1 className="max-w-md text-4xl font-bold leading-tight tracking-tight xl:text-5xl">
                  جایی که تمرکز، جریان کار می‌شود
                </h1>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/75 xl:text-base">
                  ورود امن، ثبت‌نام سریع و شروع کار در چند ثانیه — طراحی‌شده
                  برای تیم‌های ایرانی.
                </p>
              </div>

              <div
                className="auth-reveal relative z-10 space-y-3"
                style={{ "--d": "0.3s" } as React.CSSProperties}
              >
                <div className="float-card flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-3 backdrop-blur-md">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-harbor-400/30 text-sm font-bold">
                    ۹۹٪
                  </span>
                  <div>
                    <p className="text-sm font-semibold">پایداری ماهانه</p>
                    <p className="text-xs text-white/65">
                      زیرساخت پایدار برای تیم شما
                    </p>
                  </div>
                </div>
                <div className="float-card ms-8 flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-3 backdrop-blur-md">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-ember-400/35 text-sm font-bold">
                    ۲۴
                  </span>
                  <div>
                    <p className="text-sm font-semibold">پروژه فعال</p>
                    <p className="text-xs text-white/65">
                      همه‌چیز در یک داشبورد شفاف
                    </p>
                  </div>
                </div>
                <div className="float-card flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-3 backdrop-blur-md">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/20 text-sm font-bold">
                    ۱۸
                  </span>
                  <div>
                    <p className="text-sm font-semibold">عضو تیم</p>
                    <p className="text-xs text-white/65">همکاری بدون اصطکاک</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Form panel */}
            <section className="relative flex flex-col justify-center px-5 py-8 sm:px-8 sm:py-10 lg:px-10 xl:px-12">
              <div
                className="auth-reveal mb-7 flex items-center justify-between lg:hidden"
                style={{ "--d": "0.05s" } as React.CSSProperties}
              >
                <a href="./login" className="inline-flex items-center gap-2.5">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-harbor-600 text-white shadow-lg shadow-harbor-600/25">
                    <svg
                      width="20"
                      height="20"
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
                  <span className="text-xl font-bold text-ink-950">پنل</span>
                </a>
              </div>

              <div
                className="auth-reveal mx-auto w-full max-w-md"
                style={{ "--d": "0.12s" } as React.CSSProperties}
              >
                <div className="mode-tabs mb-7" id="modeTabs" data-mode="login">
                  <span className="mode-tabs__thumb" aria-hidden="true"></span>
                  <button type="button" className="mode-tab" data-mode="login">
                    ورود
                  </button>
                  <button type="button" className="mode-tab" data-mode="signup">
                    ثبت‌نام
                  </button>
                </div>

                <div className="form-panel">
                  {/* Login  */}
                  <LoginForm />

                  {/* Signup */}
                  <SignUpForm />
                </div>
              </div>

              <p
                className="auth-reveal mt-8 text-center text-xs text-ink-400"
                style={{ "--d": "0.35s" } as React.CSSProperties}
              >
                با ادامه، تأیید می‌کنید که سیاست امنیت پنل را خوانده‌اید.
              </p>
            </section>
          </div>
        </div>

        <div
          id="toast"
          className="toast"
          role="status"
          aria-live="polite"
        ></div>
      </div>
      <Script src="/Js/auth.js" strategy="afterInteractive" />
    </>
  );
};
