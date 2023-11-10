"use client";

import Nav from "@/commons/nav";
import Header from "@/components/header";
import { ReactNode } from "react";

function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-full">
      <Header />
      <Nav />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  );
}

export default MainLayout;
