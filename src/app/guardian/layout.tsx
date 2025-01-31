// import SideNav from "@/components/shared/sidenav";
import { GuardianSideNavBar } from "@/components/guardian/side-navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-row bg-main-bg bg-cover bg-center bg-no-repeat">
      <div className="hidden flex-none p-6 xl:block xl:w-[300px]">
        <GuardianSideNavBar />
      </div>
      <div className="flex-grow overflow-y-auto">{children}</div>
    </div>
  );
}
