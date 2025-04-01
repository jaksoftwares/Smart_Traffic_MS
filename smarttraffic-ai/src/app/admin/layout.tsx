"use client";

import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import "@/styles/globals.css";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <html lang="en">
      <body className="h-screen bg-gray-100">
        <div className="flex h-screen">
          {/* Sidebar */}
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          {/* Main Content - Added left margin to prevent overlapping */}
          <div className="flex flex-col flex-1 lg:ml-64 transition-all duration-300">
            {/* Header */}
            <Header />

            {/* Page Content */}
            <main className="flex-1 p-6 overflow-auto">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
