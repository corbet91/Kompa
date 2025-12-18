import Header from "@/components/header";
import Providers from "@/providers/providers";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "What's Hot on Social Vietnam",
  description:
    "Chỉ số xu hướng mạng xã hội theo thời gian thực · Powered by Kompa.ai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="box-border m-0 border-0 block">
      <body
        className={` ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <div className="bg-background flex min-h-svh flex-col w-full">
            <Header />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
