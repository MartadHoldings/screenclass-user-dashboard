import SideNav from "@/components/shared/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#FBFBFB] flex h-screen flex-row">
      <div className="w-[256px] flex-none">
        <SideNav />
      </div>
      <div className="flex-grow overflow-y-auto ml-14">{children}</div>
    </div>
  );
}
