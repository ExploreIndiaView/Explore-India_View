"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import "react-phone-number-input/style.css";
import { getCountries, getCountryCallingCode } from "react-phone-number-input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader, User, Smartphone, Lock, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { db } from "@/firebase/config";
import { collection, addDoc } from "firebase/firestore";

function SignUp() {
  const [input, setInput] = useState({
    fullname: "",
    isoCode: "",
    mobile: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(""); // Added error state
  const countries = getCountries();
  const router = useRouter();

  const handleCountryChange = (country: any) => {
    if (country) {
      setInput({ ...input, isoCode: `+${getCountryCallingCode(country)}` });
    } else {
      setInput({ ...input, isoCode: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(""); // reset error
    try {
      setLoading(true);

      // Save user in Firestore
      await addDoc(collection(db, "users"), {
        fullname: input.fullname,
        isoCode: input.isoCode,
        mobile: input.mobile,
        password: input.password,
        CashbackAmount: 0,
        createdAt: new Date(),
      });

      // Save user info in localStorage
      // localStorage.setItem("token", "loggedin");
      // localStorage.setItem(
      //   "user",
      //   JSON.stringify({
      //     fullname: input.fullname,
      //     isoCode: input.isoCode,
      //     mobile: input.mobile,
      //     CashbackAmount: 0,
      //   })
      // );
      // localStorage.setItem("isAdmin", "false"); // default to false
      // After successful signup:
localStorage.setItem("user", JSON.stringify({ fullname: input.fullname, isoCode: input.isoCode, mobile: input.mobile, CashbackAmount: 0 }));
localStorage.setItem("token", "loggedin");
localStorage.setItem("isAdmin", "false");

// Dispatch a custom event
window.dispatchEvent(new Event("storageChanged"));


      router.replace("/"); // redirect to home
    } catch (err: any) {
      console.log(err);
      setError("Failed to create account. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-7rem)] bg-gradient-to-br from-slate-300 via-cyan-800/40 to-cyan-900/80 px-4">
      <div className="w-full max-w-md bg-white/95 backdrop-blur-xl shadow-2xl rounded-3xl p-6 border border-slate-200/80 my-10">
        {/* Header Section */}
        <div className="text-center mb-5">
          <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-md mx-auto mb-3 flex items-center justify-center">
            <User className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-br from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Create Account
          </h1>
          <p className="text-slate-500 text-xs mt-1 font-light">Join us today and get started</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl text-center font-medium shadow-sm">
              {error}
            </div>
          )}

          {/* Full Name Field */}
          <div className="space-y-3">
            <Label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <User className="w-4 h-4" />
              Full Name
            </Label>
            <Input
              type="text"
              required
              placeholder="Enter your full name"
              value={input.fullname}
              onChange={(e) => setInput({ ...input, fullname: e.target.value })}
              className="bg-slate-50/80 border-slate-300/70 rounded-xl h-12 pl-4 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
            />
          </div>

          {/* Mobile Number Field */}
          <div className="space-y-3">
            <Label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <Smartphone className="w-4 h-4" />
              Mobile Number
            </Label>
            <div className="flex items-center gap-3">
              <Select onValueChange={handleCountryChange}>
                <SelectTrigger className="w-[140px] bg-slate-50/80 border-slate-300/70 rounded-xl h-12 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200">
                  <SelectValue placeholder="Code" />
                </SelectTrigger>
                <SelectContent className="rounded-xl border-slate-200 shadow-lg">
                  <SelectGroup>
                    <SelectLabel className="text-slate-600 font-medium">Country Code</SelectLabel>
                    {countries.map((country) => (
                      <SelectItem key={country} value={country} className="rounded-lg focus:bg-slate-50">
                        {country} (+{getCountryCallingCode(country)})
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>

              <div className="flex-1 relative">
                <Input
                  type="text"
                  pattern="\d{10}"
                  title="Please enter a valid 10-digit mobile number"
                  required
                  value={input.mobile}
                  onChange={(e) => setInput({ ...input, mobile: e.target.value })}
                  placeholder="Enter mobile number"
                  className="bg-slate-50/80 border-slate-300/70 rounded-xl h-12 pl-4 pr-4 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                />
              </div>
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-3">
            <Label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <Lock className="w-4 h-4" />
              Password
            </Label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                required
                pattern=".{8,}"
                title="Password must be at least 8 characters long"
                value={input.password}
                onChange={(e) => setInput({ ...input, password: e.target.value })}
                placeholder="Create a password (min. 8 characters)"
                className="bg-slate-50/80 border-slate-300/70 rounded-xl h-12 pl-4 pr-12 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors duration-200"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            <p className="text-xs text-slate-500 font-light">Must be at least 8 characters long</p>
          </div>

          {/* Sign Up Button */}
          <Button
            disabled={loading}
            type="submit"
            className="w-full h-12 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 disabled:transform-none disabled:hover:shadow-lg"
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <Loader className="animate-spin w-4 h-4" />
                <span>Creating account...</span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <span>Continue</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            )}
          </Button>
        </form>

        {/* Sign In Link */}
        <div className="mt-8 pt-6 border-t border-slate-200/60">
          <p className="text-center text-sm text-slate-600 font-light">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-200 hover:underline"
            >
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
