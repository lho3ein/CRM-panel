import "./auth.css";
export default function AuthLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}
