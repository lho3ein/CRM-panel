import type { Metadata } from "next";
import "./globals.css";
import "./main.css";
import "../fonts/fonts.css";

export const metadata: Metadata = {
  title: "پنل مدیریت حسین خلیلی",
  description: "یک پروژه پنل مدیریت ساخته شده با Next.js و Tailwind CSS",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html dir="rtl" lang="en" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
