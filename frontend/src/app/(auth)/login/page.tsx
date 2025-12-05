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
import Link from "next/link";
import { useAuthStore } from "@/store/auth.store";
import { Loader, Smartphone, Lock, Eye, EyeOff } from "lucide-react";
import { db } from "@/firebase/config";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useRouter } from "next/navigation";
function Login() {
  const router = useRouter();

  const [input, setinput] = useState({
    isoCode: "",
    mobile: "",
    password: "",
  });
  const [loading, setloading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { login, error } = useAuthStore();

  const countries = getCountries();
  
  const handleCountryChange = (country: any) => {
    if (country) {
      setinput({ ...input, isoCode: `+${getCountryCallingCode(country)}` });
    } else {
      setinput({ ...input, isoCode: "" });
    }
  };

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setloading(true);

  try {
    // Query Firestore for matching user
    const q = query(
      collection(db, "users"),
      where("mobile", "==", input.mobile),
      where("password", "==", input.password)
    );

    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0].data();

      // Save to localStorage
      localStorage.setItem("user", JSON.stringify({
        fullname: userDoc.fullname,
        isoCode: userDoc.isoCode,
        mobile: userDoc.mobile,
        CashbackAmount: userDoc.CashbackAmount || 0,
      }));
      localStorage.setItem("token", "loggedin");
      localStorage.setItem("isAdmin", userDoc.isAdmin ? "true" : "false");

      // Dispatch custom event to notify Header
      window.dispatchEvent(new Event("storageChanged"));

      // Redirect to home
      router.replace("/");
    } else {
      alert("Invalid mobile number or password");
    }
  } catch (error) {
    console.log(error);
    alert("Login failed");
  } finally {
    setloading(false);
  }
};

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-7rem)] bg-gradient-to-br from-slate-300 via-cyan-800/40 to-cyan-900/80 px-4">
      <div className="w-full max-w-md bg-white/95 backdrop-blur-xl shadow-2xl rounded-3xl p-8 border border-slate-200/80">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-lg mx-auto mb-4 flex items-center justify-center">
            <Lock className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-br from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Welcome Back
          </h1>
          <p className="text-slate-500 text-sm mt-2 font-light">
            Sign in to your account to continue
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl text-center font-medium shadow-sm">
              {error}
            </div>
          )}

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
                      <SelectItem 
                        key={country} 
                        value={country}
                        className="rounded-lg focus:bg-slate-50"
                      >
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
                  onChange={(e) => setinput({ ...input, mobile: e.target.value })}
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
                value={input.password}
                onChange={(e) => setinput({ ...input, password: e.target.value })}
                placeholder="Enter your password"
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
          </div>

          {/* Login Button */}
          <Button
            className="w-full h-12 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 disabled:transform-none disabled:hover:shadow-lg"
            disabled={loading}
            type="submit"
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <Loader className="animate-spin w-4 h-4" />
                <span>Signing in...</span>
              </div>
            ) : (
              "Sign In"
            )}
          </Button>
        </form>

        {/* Sign Up Link */}
        <div className="mt-8 pt-6 border-t border-slate-200/60">
          <p className="text-center text-sm text-slate-600 font-light">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="font-semibold text-cyan-600 hover:text-cyan-700 transition-colors duration-200 hover:underline"
            >
              Create account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;