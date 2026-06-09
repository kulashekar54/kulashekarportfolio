import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kulashekar S — Mobile Application Developer | .NET MAUI Developer",
  description:
    "Mobile Application Developer specializing in .NET MAUI, Xamarin.Forms, Android & iOS. Building scalable cross-platform applications with MVVM architecture.",
  keywords: [
    ".NET MAUI Developer",
    "Xamarin.Forms",
    "Mobile Application Developer",
    "Android iOS Developer",
    "Cross-Platform Development",
    "C# Developer",
    "Kulashekar S",
  ],
  authors: [{ name: "Kulashekar S" }],
  creator: "Kulashekar S",
  openGraph: {
    type: "website",
    title: "Kulashekar S — Mobile Application Developer",
    description: "Building production-ready Android & iOS applications using .NET MAUI",
    siteName: "Kulashekar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kulashekar S — Mobile Application Developer",
    description: "Building production-ready Android & iOS applications using .NET MAUI",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans bg-bg text-slate-200 antialiased`}>
        {children}
      </body>
    </html>
  );
}
