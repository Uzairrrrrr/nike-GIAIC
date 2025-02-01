import Link from "next/link";
import { Twitter, Facebook, Youtube, Instagram } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="w-full container py-12 px-4">
        <div className="px-40 grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="font-bold uppercase">Find a Store</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  BECOME A MEMBER
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  SIGN UP FOR EMAIL
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  STUDENT DISCOUNTS
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Send Us Feedback
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold uppercase">Get Help</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  Order Status
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Delivery
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Payment Options
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold uppercase">About Nike</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  News
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Investors
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex space-x-4 justify-center md:justify-end">
            <Link
              href="#"
              className="rounded-full bg-gray-800 p-4 hover:bg-blue-600 transition-colors"
            >
              <Twitter className="h-6 w-6 text-white" />
            </Link>
            <Link
              href="#"
              className="rounded-full bg-gray-800 p-4 hover:bg-blue-600 transition-colors"
            >
              <Facebook className="h-6 w-6 text-white" />
            </Link>
            <Link
              href="#"
              className="rounded-full bg-gray-800 p-4 hover:bg-red-600 transition-colors"
            >
              <Youtube className="h-6 w-6 text-white" />
            </Link>
            <Link
              href="#"
              className="rounded-full bg-gray-800 p-4 hover:bg-pink-600 transition-colors"
            >
              <Instagram className="h-6 w-6 text-white" />
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 w-full">
        <div className="w-full container flex flex-col justify-between py-4 text-xs text-gray-400 md:flex-row">
          <div className="flex items-center space-x-4">
            <span>© 2025 Nike, Inc. All Rights Reserved</span>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="#" className="hover:text-white">
              Guides
            </Link>
            <Link href="#" className="hover:text-white">
              Terms of Sale
            </Link>
            <Link href="#" className="hover:text-white">
              Terms of Use
            </Link>
            <Link href="#" className="hover:text-white">
              Nike Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
