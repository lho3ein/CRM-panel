import { AuthWrapper } from "./authWrapper";

export const SignupForm = () => {
  return (
    <AuthWrapper authMode="signup">
      <form id="signupForm" className="form-view space-y-4" noValidate>
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
            dir="ltr"
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
              <div className="strength-bar__fill" id="strengthFill"></div>
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
        <p className="field-error hidden" data-error-htmlfor="acceptTerms"></p>

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
    </AuthWrapper>
  );
};
