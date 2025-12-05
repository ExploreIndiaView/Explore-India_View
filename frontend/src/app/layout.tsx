
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import { Toaster } from "sonner";
import AppWrapper from "@/components/shared/AppWrapper";
import Footer from "@/components/shared/Footer";
import ChatBotPopover from "@/components/shared/ChatBot";
import { AuthProvider } from "@/context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Explore India View",
  description: "A Online Platform that helps you to Explore India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-[2000px] mx-auto`}
      >
        <AuthProvider>
        <AppWrapper>
          <Header />
          <ChatBotPopover />
          {children}
          <Toaster />
          <Footer />
        </AppWrapper>
        </AuthProvider>
      </body>
    </html>
  );
}
