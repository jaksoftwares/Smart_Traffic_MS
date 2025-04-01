"use client"; // Required for interactive components in Next.js App Router

import { Dispatch, SetStateAction } from "react";
import { Home, Users, Settings, LogOut, Menu } from "lucide-react";
import Link from "next/link";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  return (
    <aside
      className={`fixed left-0 top-0 h-full w-72 bg-gray-900 text-white shadow-lg transition-transform duration-300 ease-in-out ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-5 border-b border-gray-700">
        <h1 className="text-xl font-bold">SmartTraffic -AI</h1>
        <button className="lg:hidden text-gray-400 hover:text-white" onClick={() => setSidebarOpen(false)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="mt-6">
        <ul className="space-y-2">
          <SidebarItem href="/admin" icon={<Home />} label="Dashboard" />
          <SidebarItem href="/admin/users" icon={<Users />} label="Users" />
          <SidebarItem href="/admin/settings" icon={<Settings />} label="Settings" />
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="absolute bottom-6 w-full px-5">
        <button className="w-full flex items-center text-red-500 bg-gray-800 hover:bg-gray-700 px-4 py-3 rounded-lg">
          <LogOut className="w-5 h-5 mr-3" />
          Logout
        </button>
      </div>
    </aside>
  );
}

/** Sidebar Item Component */
const SidebarItem = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <li>
    <Link
      href={href}
      className="flex items-center px-5 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition duration-200"
    >
      <span className="w-5 h-5 mr-3">{icon}</span>
      {label}
    </Link>
  </li>
);
