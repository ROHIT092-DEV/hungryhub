"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

const navItems = [
  { name: "Analytics", href: "/admin/analytics" },
  { name: "Products", href: "/admin/product" },
  { name: "Category", href: "/admin/category" },
];

export default function AdminHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
         <Link
        href="/"
        className="flex items-center space-x-3 group transition-all duration-300"
      >
        {/* Logo Image */}
        <div className="relative">
          <img
            src="https://tse4.mm.bing.net/th/id/OIP.SpbzB7fUnj1hQAqz-tIFsgAAAA?pid=Api&P=0&h=180"
            alt="Hungry-Hub Logo"
            className="w-12 h-12 rounded-full shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300"
          />
          {/* Glow Effect */}
          <span className="absolute inset-0 rounded-full bg-red-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></span>
        </div>

        {/* Brand Name */}
        <span className="text-lg md:text-2xl font-extrabold bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
          Hungry-Hub
        </span>
      </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={clsx(
                    "px-3 py-2 rounded-md text-sm font-medium",
                    active
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-800 border-t dark:border-gray-700">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  active
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                )}
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
