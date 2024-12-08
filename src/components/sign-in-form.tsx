"use client";

import { useState } from "react";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from 'next/image';

export function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="mx-auto max-w-[380px] px-6 py-12 text-center">
      <Image
        src="/placeholder.svg?height=60&width=60"
        alt="Nike"
        className="mx-auto mb-6 h-[60px] w-[60px]"
      />
      <h1 className="mb-1 text-xl font-bold">YOUR ACCOUNT</h1>
      <h2 className="mb-8 text-xl font-bold">FOR EVERYTHING NIKE</h2>
      <form className="space-y-4">
        <Input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-12"
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="h-12"
        />
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <Checkbox id="keep-signed" />
            <label htmlFor="keep-signed">Keep me signed in</label>
          </div>
          <Link href="#" className="text-gray-500 hover:text-gray-800">
            Forgotten your password?
          </Link>
        </div>
        <p className="text-xs text-gray-500">
          By signing in, you agree to Nike&apos;s{" "}
          <Link href="#" className="underline hover:text-gray-800">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="#" className="underline hover:text-gray-800">
            Terms of Use
          </Link>
          .
        </p>
        <Button className="w-full h-12 bg-black text-white hover:bg-gray-800">
          SIGN IN
        </Button>
        <p className="text-sm">
          Not a Member?{" "}
          <Link href="join-us" className="text-gray-500 hover:text-gray-800">
            Join Us
          </Link>
        </p>
      </form>
    </div>
  );
}
