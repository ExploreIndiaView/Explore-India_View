"use client";
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { DoorOpen, Menu } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

function Header() {
  const [user, setUser] = useState<any>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  // Load from localStorage on mount
 useEffect(() => {
  const updateUser = () => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");
    const storedIsAdmin = localStorage.getItem("isAdmin");

    setUser(storedUser ? JSON.parse(storedUser) : null);
    setToken(storedToken);
    setIsAdmin(storedIsAdmin === "true");
  };

  // 🔥 Load user immediately when page loads
  updateUser();

  // 🔥 Listen for login/logout events
  window.addEventListener("storageChanged", updateUser);

  return () => window.removeEventListener("storageChanged", updateUser);
}, []);



  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    setUser(null);
    setToken(null);
    setIsAdmin(false);
     window.dispatchEvent(new Event("storageChanged")); // 🔥 important
  };


  return (
    <div className="flex items-center justify-between p-2 px-6 border-b-2 w-full mx-auto sticky top-0 z-20 bg-white/10 backdrop-blur-md">

      {/* Left: Logo */}
      <div className="flex items-center">
        <Link href={"/"} className="flex items-center gap-2">
          <Image
            priority
            src="/images/logo.png"
            width={200}
            height={150}
            alt="logo"
          />
        </Link>
      </div>

      {/* Center: Nav Links */}
      <div className="absolute left-1/2 transform -translate-x-1/2 lg:flex items-center gap-8 hidden">
        <Link href="/" className="text-xl font-bold px-4 py-2 rounded-xl transition-all duration-300 ease-in-out hover:bg-grey-200 hover:scale-105">
          Home
        </Link>
        <Link href="/about" className="text-xl font-bold px-4 py-2 rounded-xl transition-all duration-300 ease-in-out hover:bg-grey-200 hover:scale-105">
          About
        </Link>
        <Link href="/package" className="text-xl font-bold px-4 py-2 rounded-xl transition-all duration-300 ease-in-out hover:bg-grey-200 hover:scale-105">
          Package
        </Link>
        <Link href="/hotels" className="text-xl font-bold px-4 py-2 rounded-xl transition-all duration-300 ease-in-out hover:bg-grey-200 hover:scale-105">
          Hotels
        </Link>
        <Link href="/services" className="text-xl font-bold px-4 py-2 rounded-xl transition-all duration-300 ease-in-out hover:bg-grey-200 hover:scale-105">
          Services
        </Link>
      </div>

      {/* Right: Login/Signup or User Menu */}
      <div className="hidden lg:flex items-center gap-6">
        {user && token ? (
          <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer">
              <Avatar className="size-10">
                <AvatarImage src="/images/user-profile.png" />
                <AvatarFallback>
                  {user.fullname[0] + (user.fullname.split(" ")[1]?.[0] || "")}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <div className="flex items-center gap-2 px-3 py-2">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/images/user-profile.png" />
                  <AvatarFallback>
                    {user.fullname[0] + (user.fullname.split(" ")[1]?.[0] || "")}
                  </AvatarFallback>
                </Avatar>
                <span className="text-lg font-semibold">{user.fullname}</span>
              </div>
              <DropdownMenuLabel className="font-bold text-lg flex items-center justify-between">
                <span>My Wallet</span>
                <span>₹{user.CashbackAmount}</span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="font-bold text-lg">
                <Link href={"/bookings"}>Bookings</Link>
              </DropdownMenuItem>
              {isAdmin && (
                <DropdownMenuItem className="font-bold text-lg">
                  <Link href={"/admin"}>Admin</Link>
                </DropdownMenuItem>
              )}
              <DropdownMenuItem
                onClick={logout}
                className="text-red-600 font-bold text-lg flex items-center gap-2"
              >
                Logout <DoorOpen className="size-4" color="red" />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <>
            <Link href={"/login"} className="text-xl font-semibold text-black px-5 py-2 border border-white bg-[#c2c9d1] hover:bg-[#01091230] transition-all duration-200">
              Login
            </Link>
            <Link href={"/signup"} className="text-xl font-semibold text-black px-5 py-2 border border-white bg-[#c2c9d1] hover:bg-[#01091230] transition-all duration-200">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;


      {/* Mobile View */}
      {/* <div className="lg:hidden block">
        <Sheet>
          <SheetTrigger className="cursor-pointer">
            {user ? (
              <Avatar className="size-10">
                <AvatarImage src="/images/user-profile.png" />
                <AvatarFallback>
                  {user.fullname[0] +
                    (user.fullname.split(" ")[1]?.[0] || "")}
                </AvatarFallback>
              </Avatar>
            ) : (
              <Menu />
            )}
          </SheetTrigger>

          <SheetContent className="w-72">
            <SheetHeader>
              <SheetTitle className="text-2xl font-bold">
                Explore India View
              </SheetTitle>
              <div className="flex flex-col gap-5 mt-10 font-mono">
                <Link href={"/"} className="text-xl font-semibold">
                  Home
                </Link>
                <Link href={"/about"} className="text-xl font-semibold">
                  About
                </Link>
                <Link href={"/package"} className="text-xl font-semibold">
                  Package
                </Link>
                <Link href={"/hotels"} className="text-xl font-semibold">
                  Hotels
                </Link>
                {!user && !token && (
                  <>
                    <Link
                      href={"/login"}
                      className="text-xl font-semibold text-blue-500 underline underline-offset-2"
                    >
                      Login
                    </Link>
                    <Link
                      href={"/signup"}
                      className="text-xl font-semibold text-blue-500 underline underline-offset-2"
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

export default Header; */}
