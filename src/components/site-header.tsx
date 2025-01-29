"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { HeartIcon, ShoppingBagIcon, SearchIcon, Menu } from "lucide-react";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCart } from "@/lib/cart-context";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
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
  ); // Calculate total item count

  return (
    <header className="w-full">
      <div className="container flex h-8 items-center justify-between space-x-4 text-sm bg-gray-100">
        <div className="flex justify-start p-6">
          <Image
            src="/icon.png"
            alt="Nike"
            width={60} // Explicit width
            height={60}
            className="mx-auto"
          />
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

      <div className="border-b">
        <div className="container flex h-16 items-center justify-between p-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/Frame.png"
              alt="Nike"
              width={60} // Explicit width
              height={60}
              className="h-[60px] w-[60px]"
            />
          </Link>
          {!isMobile && (
            <nav className="flex items-center space-x-6 text-sm font-medium">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="hover:text-gray-900"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          )}
          <div className="flex items-center space-x-4">
            {!isMobile && (
              <div className="relative">
                <SearchIcon className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search"
                  className="w-[180px] pl-8 rounded-full bg-gray-100"
                />
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
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="ml-2">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col space-y-4 mt-8">
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
                  <div className="mt-8">
                    <div className="relative mb-4">
                      <SearchIcon className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Search"
                        className="w-full pl-8 rounded-full bg-gray-100"
                      />
                    </div>
                    <Button variant="outline" className="w-full mb-2">
                      Find a Store
                    </Button>
                    <Button variant="outline" className="w-full mb-2">
                      Join Us
                    </Button>
                    <Button variant="outline" className="w-full">
                      Help
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
