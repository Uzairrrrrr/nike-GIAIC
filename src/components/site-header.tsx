"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { HeartIcon, ShoppingBagIcon, SearchIcon, Menu, X } from "lucide-react";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useCart } from "@/lib/cart-context";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });
  const { state } = useCart();

  const navItems = [
    { href: "products", label: "New & Featured" },
    { href: "products", label: "Men" },
    { href: "products", label: "Women" },
    { href: "products", label: "Kids" },
    { href: "products", label: "Sale" },
    { href: "products", label: "SNKRS" },
  ];

  const cartItemCount = state.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="w-full max-w-none">
      <div className="w-full bg-gray-100 text-sm flex h-8 items-center justify-between px-6">
        <div className="flex justify-start">
          <Image src="/icon.png" alt="Nike" width={30} height={40} />
        </div>
        <div className="flex justify-end space-x-4">
          <Link href="products" className="text-gray-600 hover:text-gray-900">
            Find a Store
          </Link>
          <span className="text-gray-300">|</span>
          <Link href="get-help" className="text-gray-600 hover:text-gray-900">
            Help
          </Link>
          <span className="text-gray-300">|</span>
          <Link href="join-us" className="text-gray-600 hover:text-gray-900">
            Join Us
          </Link>
          <span className="text-gray-300">|</span>
          <Link href="sign-in" className="text-gray-600 hover:text-gray-900">
            Sign In
          </Link>
        </div>
      </div>

      <div className="border-b w-full">
        <div className="flex h-16 items-center justify-between px-6 w-full">
          <Link href="/" className="flex items-center">
            <Image src="/Frame.png" alt="Nike" width={60} height={60} />
          </Link>
          {!isMobile && (
            <nav className="flex items-center space-x-6 text-sm font-medium">
              {navItems.map((item) => (
                <Link key={item.label} href={item.href} className="hover:text-gray-900">
                  {item.label}
                </Link>
              ))}
            </nav>
          )}
          <div className="flex items-center space-x-4">
            {!isMobile && (
              <div className="relative">
                <SearchIcon className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                <Input placeholder="Search" className="w-[180px] pl-8 rounded-full bg-gray-100" />
              </div>
            )}
            <button className="hover:text-gray-900">
              <HeartIcon className="h-6 w-6" />
            </button>
            <Link href="/cart" className="relative">
              <ShoppingBagIcon className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 inline-block h-4 w-4 text-xs font-semibold text-white bg-red-500 rounded-full flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
            {isMobile && (
              <button onClick={() => setIsOpen(!isOpen)} className="ml-2 hover:text-gray-900">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 p-6 flex flex-col space-y-4 shadow-lg">
          <button onClick={() => setIsOpen(false)} className="self-end text-gray-600 hover:text-gray-900">
            <X className="h-6 w-6" />
          </button>
          <nav className="flex flex-col space-y-4 mt-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-lg font-medium hover:text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
