import Script from "next/script";

export default function LoginPage() {
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
                  <form
                    id="loginForm"
                    className="form-view is-active space-y-4"
                    noValidate
                  >
                    <div>
                      <h2 className="text-2xl font-bold text-ink-950 sm:text-3xl">
                        خوش آمدید
                      </h2>
                      <p className="mt-1.5 text-sm text-ink-500">
                        برای ادامه وارد حساب پنل شوید.
                      </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <button
                        type="button"
                        className="social-btn"
                        data-social="google"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fill="#EA4335"
                            d="M12 10.2v3.9h5.5c-.2 1.3-1.6 3.8-5.5 3.8A6.4 6.4 0 1 1 12 5.6c1.8 0 3 .8 3.7 1.4l2.5-2.4A10.2 10.2 0 0 0 12 2a10 10 0 1 0 0 20c5.8 0 9.6-4.1 9.6-9.8 0-.7-.1-1.2-.2-1.7H12z"
                          />
                        </svg>
                        گوگل
                      </button>
                      <button
                        type="button"
                        className="social-btn"
                        data-social="github"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.4-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.6.4-1.1.7-1.3-2.2-.3-4.6-1.1-4.6-5a3.9 3.9 0 0 1 1-2.7 3.6 3.6 0 0 1 .1-2.7s.8-.3 2.8 1a9.5 9.5 0 0 1 5 0c2-1.3 2.8-1 2.8-1a3.6 3.6 0 0 1 .1 2.7 3.9 3.9 0 0 1 1 2.7c0 3.9-2.3 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2z" />
                        </svg>
                        گیت‌هاب
                      </button>
                    </div>

                    <div className="divider">یا با ایمیل</div>

                    <div>
                      <label className="field-label" htmlFor="loginEmail">
                        ایمیل
                      </label>
                      <input
                        id="loginEmail"
                        name="email"
                        type="email"
                        className="field-input"
                        placeholder="ایمیل خود را وارد کنید"
                        autoComplete="email"
                      />
                      <p
                        className="field-error hidden"
                        data-error-htmlfor="loginEmail"
                      ></p>
                    </div>

                    <div>
                      <div className="mb-1.5 flex items-center justify-between gap-3">
                        <label
                          className="field-label mb-0"
                          htmlFor="loginPassword"
                        >
                          رمز عبور
                        </label>
                        <button
                          type="button"
                          className="text-xs font-semibold text-harbor-700 hover:text-harbor-800"
                          id="forgotBtn"
                        >
                          فراموشی رمز؟
                        </button>
                      </div>
                      <div className="password-field">
                        <input
                          id="loginPassword"
                          name="password"
                          type="password"
                          className="field-input password-input"
                          placeholder="رمز عبور خود را وارد کنید"
                          autoComplete="current-password"
                        />
                        <button
                          type="button"
                          className="password-toggle"
                          data-toggle-htmlfor="loginPassword"
                          aria-label="نمایش رمز"
                        >
                          <svg
                            className="icon-eye"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"
                              stroke="currentColor"
                              strokeWidth="1.7"
                            />
                            <circle
                              cx="12"
                              cy="12"
                              r="3"
                              stroke="currentColor"
                              strokeWidth="1.7"
                            />
                          </svg>
                        </button>
                      </div>
                      <p
                        className="field-error hidden"
                        data-error-htmlfor="loginPassword"
                      ></p>
                    </div>

                    <label className="check-row">
                      <input type="checkbox" id="rememberMe" />
                      <span>مرا برای ۳۰ روز به خاطر بسپار</span>
                    </label>

                    <button
                      type="submit"
                      className="btn-primary relative w-full py-3"
                      id="loginSubmit"
                    >
                      <span className="btn-label">ورود به پنل</span>
                    </button>

                    <p className="text-center text-sm text-ink-500">
                      حساب ندارید؟
                      <button
                        type="button"
                        className="font-bold text-harbor-700 hover:text-harbor-800"
                        data-switch="signup"
                      >
                        ثبت‌نام کنید
                      </button>
                    </p>
                  </form>

                  {/* Signup */}
                  <form
                    id="signupForm"
                    className="form-view space-y-4"
                    noValidate
                  >
                    <div>
                      <h2 className="text-2xl font-bold text-ink-950 sm:text-3xl">
                        ساخت حساب
                      </h2>
                      <p className="mt-1.5 text-sm text-ink-500">
                        در کمتر از یک دقیقه فضای کاری‌تان را بسازید.
                      </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="field-label" htmlFor="signupName">
                          نام کامل
                        </label>
                        <input
                          id="signupName"
                          name="name"
                          type="text"
                          className="field-input"
                          placeholder="مثلاً حسین خلیلی"
                          autoComplete="name"
                        />
                        <p
                          className="field-error hidden"
                          data-error-htmlfor="signupName"
                        ></p>
                      </div>
                      <div>
                        <label className="field-label" htmlFor="signupCompany">
                          نام تیم / شرکت
                        </label>
                        <input
                          id="signupCompany"
                          name="company"
                          type="text"
                          className="field-input"
                          placeholder="مثلاً استودیو آذرنگ"
                          autoComplete="organization"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="field-label" htmlFor="signupEmail">
                        ایمیل کاری
                      </label>
                      <input
                        id="signupEmail"
                        name="email"
                        type="email"
                        className="field-input"
                        placeholder="ایمیل کاری خود را وارد کنید"
                        autoComplete="email"
                      />
                      <p
                        className="field-error hidden"
                        data-error-htmlfor="signupEmail"
                      ></p>
                    </div>

                    <div>
                      <label className="field-label" htmlFor="signupPassword">
                        رمز عبور
                      </label>
                      <div className="password-field">
                        <input
                          id="signupPassword"
                          name="password"
                          type="password"
                          className="field-input password-input"
                          placeholder="حداقل ۸ کاراکتر"
                          autoComplete="new-password"
                        />
                        <button
                          type="button"
                          className="password-toggle"
                          data-toggle-htmlfor="signupPassword"
                          aria-label="نمایش رمز"
                        >
                          <svg
                            className="icon-eye"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"
                              stroke="currentColor"
                              strokeWidth="1.7"
                            />
                            <circle
                              cx="12"
                              cy="12"
                              r="3"
                              stroke="currentColor"
                              strokeWidth="1.7"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="mt-2 flex items-center gap-3">
                        <div className="strength-bar flex-1">
                          <div
                            className="strength-bar__fill"
                            id="strengthFill"
                          ></div>
                        </div>
                        <span
                          className="text-xs font-semibold text-ink-500"
                          id="strengthLabel"
                        >
                          ضعیف
                        </span>
                      </div>
                      <p
                        className="field-error hidden"
                        data-error-htmlfor="signupPassword"
                      ></p>
                    </div>

                    <label className="check-row">
                      <input type="checkbox" id="acceptTerms" />
                      <span>
                        با
                        <a
                          href="#"
                          className="font-semibold text-harbor-700 hover:underline"
                        >
                          شرایط استفاده
                        </a>
                        و
                        <a
                          href="#"
                          className="font-semibold text-harbor-700 hover:underline"
                        >
                          حریم خصوصی
                        </a>
                        موافقم.
                      </span>
                    </label>
                    <p
                      className="field-error hidden"
                      data-error-htmlfor="acceptTerms"
                    ></p>

                    <button
                      type="submit"
                      className="btn-primary relative w-full py-3"
                      id="signupSubmit"
                    >
                      <span className="btn-label">ایجاد حساب رایگان</span>
                    </button>

                    <p className="text-center text-sm text-ink-500">
                      قبلاً حساب دارید؟
                      <button
                        type="button"
                        className="font-bold text-harbor-700 hover:text-harbor-800"
                        data-switch="login"
                      >
                        وارد شوید
                      </button>
                    </p>
                  </form>
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
}
