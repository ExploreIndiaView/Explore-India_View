// context/AuthContext.tsx
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type UserType = {
  id?: string;
  fullname: string;
  isoCode?: string;
  mobile?: string;
  CashbackAmount?: number;
  [k: string]: any;
};

type AuthContextType = {
  user: UserType | null;
  token: string | null;
  login: (user: UserType, token: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    try {
      const rawUser = localStorage.getItem("user");
      const rawToken = localStorage.getItem("token");
      if (rawUser) setUser(JSON.parse(rawUser));
      if (rawToken) setToken(rawToken);
    } catch (err) {
      console.warn("Auth init error", err);
    }
  }, []);

  const login = (u: UserType, t: string) => {
    setUser(u);
    setToken(t);
    localStorage.setItem("user", JSON.stringify(u));
    localStorage.setItem("token", t);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    // optionally: redirect to login or home — keep UI code responsibility
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};
