import { NavBar } from "@/components/navBar";
import { SideBar } from "@/components/sideBar";
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
            <section className="reveal mb-7 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="mb-2 text-xs font-semibold text-harbor-600">
                  همکاران
                </p>
                <h1 className="text-3xl font-bold text-ink-950 sm:text-4xl">
                  تیم پیشفرض
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
                data-member="حسین خلیلی"
              >
                <div className="flex items-start gap-3">
                  <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-linear-to-br from-harbor-500 to-harbor-700 text-sm font-bold text-white">
                    سم
                    <span className="absolute -bottom-0.5 -inset-e-0.5 h-3 w-3 rounded-full bg-harbor-500 ring-2 ring-white"></span>
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-bold text-ink-950">حسین خلیلی</p>
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
                  data-message="حسین خلیلی"
                  className="btn-ghost magnetic mt-3 w-full text-xs"
                >
                  ارسال پیام
                </button>
              </article>
              <article
                className="member-card glass-panel rounded-2xl p-5"
                data-member="نگین فولادوند"
              >
                <div className="flex items-start gap-3">
                  <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-linear-to-br from-ember-400 to-ember-600 text-sm font-bold text-white">
                    ما
                    <span className="absolute -bottom-0.5 -inset-e-0.5 h-3 w-3 rounded-full bg-harbor-500 ring-2 ring-white"></span>
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-bold text-ink-950">نگین فولادوند</p>
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
                  data-message="نگین فولادوند"
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
                  <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-linear-to-br from-ink-500 to-ink-700 text-sm font-bold text-white">
                    سا
                    <span className="absolute -bottom-0.5 -inset-e-0.5 h-3 w-3 rounded-full bg-ink-300 ring-2 ring-white"></span>
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
                  <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-linear-to-br from-harbor-400 to-ember-500 text-sm font-bold text-white">
                    نر
                    <span className="absolute -bottom-0.5 -inset-e-0.5 h-3 w-3 rounded-full bg-harbor-500 ring-2 ring-white"></span>
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
                  <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-linear-to-br from-harbor-600 to-ink-700 text-sm font-bold text-white">
                    پم
                    <span className="absolute -bottom-0.5 -inset-e-0.5 h-3 w-3 rounded-full bg-harbor-500 ring-2 ring-white"></span>
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
                  <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-linear-to-br from-ember-500 to-harbor-600 text-sm font-bold text-white">
                    ها
                    <span className="absolute -bottom-0.5 -inset-e-0.5 h-3 w-3 rounded-full bg-ink-300 ring-2 ring-white"></span>
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
      <Script src="/Js/pages.js" strategy="afterInteractive" />
    </div>
  );
}
