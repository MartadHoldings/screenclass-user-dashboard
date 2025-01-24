import SideNav from "@/components/shared/sidenav";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-row">
      <div className="xl:w-[256px] flex-none">
        <SideNav />
      </div>
      <div className="flex-grow overflow-y-auto">{children}</div>
    </div>
  );
}
