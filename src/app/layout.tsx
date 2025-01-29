import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CartProvider } from "@/lib/cart-context";
import { ToastProvider } from "@/components/ui/use-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nike Store",
  description: "Nike store for splendid shoes",
  // icons: {
  //   icon: "/icon.png",
  //   width: 60,
  //   height: 60,
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <SiteHeader />
          <ToastProvider>
            {children}
          </ToastProvider>
        </CartProvider>
        <SiteFooter />
      </body>
    </html>
  );
}
