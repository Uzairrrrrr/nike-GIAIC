"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { HandThumbUpIcon, HandThumbDownIcon } from "@heroicons/react/20/solid";

export default function GetHelp() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const faqs = [
    {
      id: "1",
      question: "Does my card need international purchases enabled?",
      answer:
        "Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled. Please note, some banks may charge a small transaction fee for international orders.",
    },
    {
      id: "2",
      question: "Can I pay for my order with multiple methods?",
      answer:
        "No, payment for Nike orders can't be split between multiple payment methods.",
    },
    {
      id: "3",
      question: "What payment method is accepted for SNKRS orders?",
      answer:
        "You can use any accepted credit card to pay for your SNKRS order.",
    },
    {
      id: "4",
      question: "Why don't I see Apple Pay as an option?",
      answer:
        "To use Apple Pay as an option in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you'll need to use Safari to use Apple Pay on Nike.com.",
    },
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-8 py-12">
      <h1 className="text-2xl font-bold text-center mb-12">GET HELP</h1>

      {/* Search Bar */}
      <div className="relative max-w-[600px] mx-auto mb-16">
        <Search className="absolute right-4 top-3 h-5 w-5 text-gray-400" />
        <Input
          type="text"
          placeholder="What can we help you with?"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="h-12 text-base border-gray-200 pr-12"
        />
      </div>

      <div className="grid md:grid-cols-[1fr,400px] gap-16">
        <div className="space-y-12">
          <div>
            <h2 className="text-xl font-bold mb-6">
              WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-gray-600">
              <p>
                We want to make buying your favourite Nike shoes and gear online
                fast and easy, and we accept the following payment options:
              </p>
              <p>
                Visa, Mastercard, Debit Card, Discover, American Express, Visa
                Electron, Maestro
              </p>
              <p>
                If you enter your EMI information at checkout, you'll be able to
                pay for your order with PayTM or a local credit or debit card.
              </p>
              <p>Apple Pay</p>
              <p>
                Nike Members can store multiple debit or credit cards in their
                profile for faster checkout. If you're not already a Member,
                join us today
              </p>
              <div className="flex gap-4 pt-4">
                <Button className="bg-black text-white hover:bg-gray-800 rounded">
                  JOIN US
                </Button>
                <Button variant="outline" className="rounded">
                  SHOP NIKE
                </Button>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div>
            <h2 className="text-lg font-bold mb-6">FAQs</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.id} className="border-b border-gray-200 pb-4">
                  <button
                    className="w-full text-left text-sm hover:text-gray-600"
                    onClick={() =>
                      setExpandedFaq(expandedFaq === faq.id ? null : faq.id)
                    }
                  >
                    {faq.question}
                  </button>
                  {expandedFaq === faq.id && (
                    <p className="mt-3 text-sm text-gray-600">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Feedback */}
          <div>
            <p className="text-sm mb-2">Was this answer helpful?</p>
            <div className="flex gap-4">
              <button className="text-gray-500 hover:text-gray-700">
                <HandThumbUpIcon className="h-6 w-6" />
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                <HandThumbDownIcon className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Related */}
          <div>
            <h3 className="text-xs font-bold mb-4">RELATED</h3>
            <div className="space-y-3">
              <Button
                variant="link"
                className="text-sm text-gray-600 p-0 h-auto hover:text-black"
              >
                WHAT ARE NIKE'S DELIVERY OPTIONS?
              </Button>
              <Button
                variant="link"
                className="text-sm text-gray-600 p-0 h-auto hover:text-black block"
              >
                HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-12">
          <h2 className="text-xl font-bold">CONTACT US</h2>
          <div className="space-y-12">
            <div className="flex items-start gap-6">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <div>
                <p className="font-bold">000 800 919 0566</p>
                <p className="text-sm text-gray-600">
                  Products & Orders: 24 hours a day, 7 days a week
                </p>
                <p className="text-sm text-gray-600">
                  Company Info & Enquiries: 07:30 - 16:30, Monday - Friday
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <div>
                <p className="font-bold">24 hours a day</p>
                <p className="text-sm text-gray-600">7 days a week</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <div>
                <p className="font-bold">We'll reply within</p>
                <p className="text-sm text-gray-600">five business days</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                <p className="font-bold">STORE LOCATOR</p>
                <p className="text-sm text-gray-600">
                  Find Nike retail stores near you
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
