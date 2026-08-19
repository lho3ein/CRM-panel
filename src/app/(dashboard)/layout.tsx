import "./dashboard.css";
export default function NavigationLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}
