"use client";

import { Authenticated, AuthLoading, Unauthenticated } from "convex/react";
import {  Loader2, LogIn, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { SignInButton, UserButton } from "@clerk/clerk-react";


function Header() {




  return (
    <div className="py-4 flex justify-between px-2 max-w-7xl mx-auto">
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

      {/* dashboard and Profile*/}

      <div className="flex space-x-1 items-center">
        <Link href={"/dashboard"} className="flex space-x-1 items-center">
          <ShoppingBag size={18}/>
      
        </Link>

        {/* User Profile */}

        <AuthLoading>
          <Button variant={"outline"}>
            <Loader2 className="size-5 animate-spin text-muted-foreground" />
            <span className="sr-only">Loading...</span>
          </Button>
        </AuthLoading>

        <Unauthenticated>
          <SignInButton mode="modal">
            <Button className="outline">
              <LogIn className="size-4" />
              <span className="sr-only md:not-sr-only md:ml-2">SignIn</span>
            </Button>
          </SignInButton>
        </Unauthenticated>

        <Authenticated>
          <Button variant={"ghost"}>
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: "size-8",
                },
              }}
            />
          </Button>
        </Authenticated>
      </div>
    </div>
  );
}

export default Header;
