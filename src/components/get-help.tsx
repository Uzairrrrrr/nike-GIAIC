"use client"

import { useState } from "react"
import { Search, Phone, MessageSquare, Mail, MapPin, ChevronDown, ThumbsUp, ThumbsDown } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function GetHelp() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="mb-8 text-2xl font-bold text-center">GET HELP</h1>
      
      {/* Search Bar */}
      <div className="relative mb-12 max-w-2xl mx-auto">
        <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <Input
          type="text"
          placeholder="What can we help you with?"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 h-12 text-lg"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-6">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h2>
          <p className="text-gray-600 mb-4">
            We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:
          </p>
          <ul className="mb-4 text-gray-600">
            <li>Visa, Mastercard, Debit Card, Discover, American Express, Visa Electron, Maestro</li>
          </ul>
          <p className="text-gray-600 mb-6">
            If you enter your EMI information at checkout, you'll be able to pay for your order with PayTM or a local credit or debit card.
          </p>
          <p className="text-gray-600 mb-6">Apple Pay</p>
          <p className="text-gray-600 mb-6">
            Nike Members can store multiple debit or credit cards in their profile for faster checkout. If you're not already a Member,{" "}
            <Button variant="link" className="text-black p-0 h-auto font-normal underline">
              join us today
            </Button>
          </p>
          <div className="flex gap-4">
            <Button className="bg-black text-white hover:bg-gray-800">JOIN US</Button>
            <Button variant="outline">SHOP NIKE</Button>
          </div>

          {/* FAQs Section */}
          <div className="mt-12">
            <h2 className="text-xl font-bold mb-6">FAQs</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-4">
                <AccordionTrigger className="text-left">
                  Does my card need international purchases enabled?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border rounded-lg px-4">
                <AccordionTrigger className="text-left">
                  Can I pay for my order with multiple methods?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  No, payment for Nike orders can't be split between multiple payment methods.
                </AccordionContent>
              </AccordionItem>
              {/* Add more FAQ items as needed */}
            </Accordion>
          </div>

          {/* Related Questions */}
          <div className="mt-12">
            <h3 className="text-sm font-bold mb-4">RELATED</h3>
            <ul className="space-y-2">
              <li>
                <Button variant="link" className="text-gray-600 p-0 h-auto hover:text-black">
                  WHAT ARE NIKE'S DELIVERY OPTIONS?
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-gray-600 p-0 h-auto hover:text-black">
                  HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
                </Button>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div className="border rounded-lg p-6">
            <h2 className="font-bold mb-6">CONTACT US</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6" />
                <div>
                  <p className="font-bold">000 800 919 0566</p>
                  <p className="text-sm text-gray-600">Products & Orders: 24 hours a day, 7 days a week</p>
                  <p className="text-sm text-gray-600">Company Info & Enquiries: 07:30 - 16:30, Monday - Friday</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MessageSquare className="h-6 w-6" />
                <div>
                  <p className="font-bold">24 hours a day</p>
                  <p className="text-sm text-gray-600">7 days a week</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6" />
                <div>
                  <p className="font-bold">We'll reply within</p>
                  <p className="text-sm text-gray-600">five business days</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border rounded-lg p-6">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6" />
              <div>
                <h2 className="font-bold mb-2">STORE LOCATOR</h2>
                <p className="text-sm text-gray-600">Find Nike retail stores near you</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

