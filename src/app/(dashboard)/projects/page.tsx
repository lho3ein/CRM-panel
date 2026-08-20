import { NavBar } from "@/components/navBar";
import { SideBar } from "@/components/sideBar";
import Script from "next/script";

export default function ProjectPage() {
  return (
    <div
      data-page="projects"
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
                  مدیریت کارها
                </p>
                <h1 className="text-3xl font-bold text-ink-950 sm:text-4xl">
                  پروژه‌ها و تخته کانبان
                </h1>
                <p className="mt-2 text-sm text-ink-500">
                  کارت‌ها را بکشید، فیلتر کنید و پروژه جدید بسازید.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  className="filter-chip is-active"
                  data-project-filter="all"
                >
                  همه
                </button>
                <button className="filter-chip" data-project-filter="progress">
                  در حال انجام
                </button>
                <button className="filter-chip" data-project-filter="review">
                  بازبینی
                </button>
                <button className="filter-chip" data-project-filter="done">
                  تمام‌شده
                </button>
                <button id="openProjectModal" className="btn-primary magnetic">
                  پروژه جدید
                </button>
              </div>
            </section>

            <section className="mb-6 grid gap-4 stagger-children sm:grid-cols-2 xl:grid-cols-3">
              <article
                className="project-card glass-panel reveal rounded-2xl border border-white/80 p-5"
                data-status="progress"
                data-name="مسیر آشنایی"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="status-pill bg-harbor-50 text-harbor-700">
                    در حال انجام
                  </span>
                  <span className="text-xs text-ink-400">۸۰٪</span>
                </div>
                <h3 className="text-lg font-bold text-ink-950">
                  مسیر آشنایی کاربر
                </h3>
                <p className="mt-1 text-sm text-ink-500">
                  داخلی · موعد ۶ مرداد
                </p>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-ink-100">
                  <div
                    className="progress-bar h-full rounded-full bg-harbor-500"
                    data-width="80%"
                  ></div>
                </div>
              </article>
              <article
                className="project-card glass-panel reveal rounded-2xl border border-white/80 p-5"
                data-status="review"
                data-name="بازطراحی آذرنگ"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="status-pill bg-ember-50 text-ember-700">
                    بازبینی
                  </span>
                  <span className="text-xs text-ink-400">۶۴٪</span>
                </div>
                <h3 className="text-lg font-bold text-ink-950">
                  بازطراحی آذرنگ
                </h3>
                <p className="mt-1 text-sm text-ink-500">
                  شرکت آذرنگ · موعد ۱۱ مرداد
                </p>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-ink-100">
                  <div
                    className="progress-bar h-full rounded-full bg-ember-500"
                    data-width="64%"
                  ></div>
                </div>
              </article>
              <article
                className="project-card glass-panel reveal rounded-2xl border border-white/80 p-5"
                data-status="progress"
                data-name="پورتال صورتحساب"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="status-pill bg-harbor-50 text-harbor-700">
                    در حال انجام
                  </span>
                  <span className="text-xs text-ink-400">۴۲٪</span>
                </div>
                <h3 className="text-lg font-bold text-ink-950">
                  پورتال صورتحساب
                </h3>
                <p className="mt-1 text-sm text-ink-500">
                  شرکت نوآوران · موعد ۱۹ مرداد
                </p>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-ink-100">
                  <div
                    className="progress-bar h-full rounded-full bg-harbor-500"
                    data-width="42%"
                  ></div>
                </div>
              </article>
              <article
                className="project-card glass-panel reveal rounded-2xl border border-white/80 p-5"
                data-status="done"
                data-name="هویت بصری"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="status-pill bg-ink-100 text-ink-700">
                    تمام‌شده
                  </span>
                  <span className="text-xs text-ink-400">۱۰۰٪</span>
                </div>
                <h3 className="text-lg font-bold text-ink-950">
                  هویت بصری پنل
                </h3>
                <p className="mt-1 text-sm text-ink-500">داخلی · تکمیل‌شده</p>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-ink-100">
                  <div
                    className="progress-bar h-full rounded-full bg-harbor-600"
                    data-width="100%"
                  ></div>
                </div>
              </article>
            </section>

            <section
              id="kanban"
              className="reveal grid gap-4 lg:grid-cols-3"
              style={{ "--d": ".2s" } as React.CSSProperties}
            >
              <div
                className="kanban-col glass-panel rounded-2xl p-4"
                data-title="برای انجام"
              >
                <h3 className="mb-3 text-sm font-bold text-ink-700">
                  برای انجام
                </h3>
                <div className="space-y-3" data-list>
                  <article className="kanban-card rounded-xl border border-ink-100 bg-white p-3 shadow-soft">
                    <p className="text-sm font-semibold">نوشتن متن صفحه قیمت</p>
                    <p className="mt-1 text-xs text-ink-400">سارا</p>
                  </article>
                  <article className="kanban-card rounded-xl border border-ink-100 bg-white p-3 shadow-soft">
                    <p className="text-sm font-semibold">آیکون‌های موبایل</p>
                    <p className="mt-1 text-xs text-ink-400">نگین</p>
                  </article>
                </div>
              </div>
              <div
                className="kanban-col glass-panel rounded-2xl p-4"
                data-title="در حال انجام"
              >
                <h3 className="mb-3 text-sm font-bold text-ink-700">
                  در حال انجام
                </h3>
                <div className="space-y-3" data-list>
                  <article className="kanban-card rounded-xl border border-ink-100 bg-white p-3 shadow-soft">
                    <p className="text-sm font-semibold">انیمیشن ورود</p>
                    <p className="mt-1 text-xs text-ink-400">سامان</p>
                  </article>
                </div>
              </div>
              <div
                className="kanban-col glass-panel rounded-2xl p-4"
                data-title="انجام‌شده"
              >
                <h3 className="mb-3 text-sm font-bold text-ink-700">
                  انجام‌شده
                </h3>
                <div className="space-y-3" data-list>
                  <article className="kanban-card rounded-xl border border-ink-100 bg-white p-3 shadow-soft">
                    <p className="text-sm font-semibold">چیدمان داشبورد</p>
                    <p className="mt-1 text-xs text-ink-400">سارا</p>
                  </article>
                </div>
              </div>
            </section>

            <div id="projectModal" className="modal-backdrop">
              <div className="modal-panel">
                <h3 className="text-lg font-bold text-ink-950">پروژه جدید</h3>
                <form id="createProjectForm" className="mt-4 space-y-3">
                  <div>
                    <label className="field-label" htmlFor="newProjectName">
                      نام پروژه
                    </label>
                    <input
                      id="newProjectName"
                      className="field-input"
                      placeholder="مثلاً کمپین نوروز"
                    />
                  </div>
                  <div className="flex gap-2 pt-2">
                    <button
                      type="button"
                      id="closeProjectModal"
                      className="btn-ghost flex-1"
                    >
                      انصراف
                    </button>
                    <button className="btn-primary flex-1" type="submit">
                      ایجاد
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
