"use client"

import * as React from "react"
import { useState } from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Image from "next/image"

export default function JoinForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    country: "india",
    gender: "",
    emailSubscription: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className="mx-auto max-w-[380px] px-6 py-12">
      <div className="text-center">
        <Image
          src="/Frame.png?height=60&width=60"
          alt="Nike"
          className="mx-auto mb-6 h-[60px] w-[60px]"
        />
        <h1 className="mb-4 text-xl font-bold">BECOME A NIKE MEMBER</h1>
        <p className="mb-8 text-sm text-gray-600">
          Create your Nike Member profile and get first access to the very best of Nike
          products, inspiration and community.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Input
            type="email"
            placeholder="Email address"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="h-12"
          />
        </div>
        <div className="space-y-2">
          <Input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
            className="h-12"
          />
        </div>
        <div className="space-y-2">
          <Input
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            required
            className="h-12"
          />
        </div>
        <div className="space-y-2">
          <Input
            type="text"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            required
            className="h-12"
          />
        </div>
        <div className="space-y-2">
          <Input
            type="date"
            value={formData.dateOfBirth}
            onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
            required
            className="h-12"
          />
          <p className="text-xs text-gray-500">
            Get a Nike Member Reward every year on your Birthday.
          </p>
        </div>
        <div className="space-y-2">
          <Select
            value={formData.country}
            onValueChange={(value) => setFormData({ ...formData, country: value })}
          >
            <SelectTrigger className="h-12">
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="india">India</SelectItem>
              <SelectItem value="usa">United States</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              {/* Add more countries as needed */}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <RadioGroup
            value={formData.gender}
            onValueChange={(value) => setFormData({ ...formData, gender: value })}
            className="flex space-x-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="male" />
              <Label htmlFor="male">Male</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="female" />
              <Label htmlFor="female">Female</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="space-y-4">
          <div className="flex items-start space-x-2">
            <Checkbox
              id="emailSubscription"
              checked={formData.emailSubscription}
              onCheckedChange={(checked) =>
                setFormData({ ...formData, emailSubscription: checked as boolean })
              }
              className="mt-1"
            />
            <Label htmlFor="emailSubscription" className="text-sm text-gray-600">
              Sign up for emails to get updates from Nike on products, offers and your
              Member benefits
            </Label>
          </div>
          <p className="text-xs text-gray-500">
            By creating an account, you agree to Nike&apos;s{" "}
            <Link href="#" className="underline hover:text-gray-800">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="#" className="underline hover:text-gray-800">
              Terms of Use
            </Link>
            .
          </p>
        </div>
        <Button type="submit" className="w-full h-12 bg-black text-white hover:bg-gray-800">
          JOIN US
        </Button>
        <p className="text-center text-sm">
          Already a Member?{" "}
          <Link href="#" className="text-gray-500 hover:text-gray-800">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  )
}

