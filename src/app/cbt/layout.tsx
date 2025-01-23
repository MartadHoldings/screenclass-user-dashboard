"use client";

import React from "react";
import { Header, SideNav, UserSidenav } from "@/components/cbt/nav-bar";
import { useParams } from "next/navigation";

const layout = ({ children }: { children: React.ReactNode }) => {
  const params = useParams<{ id: string }>();
  const questionNo = parseInt(params?.id);
  return (
    <div className="bg- min-h-screen w-full bg-SC-Bland">
      <Header />
      <main className="grid h-[calc(100dvh-50px)] w-full place-items-center py-4">
        <div className="flex h-full w-[80vw] space-x-4">
          <aside>
            <SideNav />
          </aside>
          <div className="w-full">{children}</div>
          <aside>
            <UserSidenav questionNo={questionNo} timeRemaining="00:30:00" />
          </aside>
        </div>
      </main>
    </div>
  );
};

export default layout;
