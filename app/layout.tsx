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
  title: "Chem Flashcards",
  description:
    "Study the main-group elements with interactive chemistry flashcards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="chemflash">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-base-200 text-base-content antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
