import { AuthWrapper } from "./authWrapper";

export const LoginForm = () => {
  return (
    <AuthWrapper authMode="login">
      <form id="loginForm" className="form-view is-active space-y-4" noValidate>
        <div>
          <h2 className="text-2xl font-bold text-ink-950 sm:text-3xl">
            خوش آمدید
          </h2>
          <p className="mt-1.5 text-sm text-ink-500">
            برای ادامه وارد حساب لنگر شوید.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <button type="button" className="social-btn" data-social="google">
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="#EA4335"
                d="M12 10.2v3.9h5.5c-.2 1.3-1.6 3.8-5.5 3.8A6.4 6.4 0 1 1 12 5.6c1.8 0 3 .8 3.7 1.4l2.5-2.4A10.2 10.2 0 0 0 12 2a10 10 0 1 0 0 20c5.8 0 9.6-4.1 9.6-9.8 0-.7-.1-1.2-.2-1.7H12z"
              />
            </svg>
            گوگل
          </button>
          <button type="button" className="social-btn" data-social="github">
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
            dir="ltr"
          />
          <p className="field-error hidden" data-error-htmlfor="loginEmail"></p>
        </div>

        <div>
          <div className="mb-1.5 flex items-center justify-between gap-3">
            <label className="field-label mb-0" htmlFor="loginPassword">
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
          <span className="btn-label">ورود به لنگر</span>
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
    </AuthWrapper>
  );
};
