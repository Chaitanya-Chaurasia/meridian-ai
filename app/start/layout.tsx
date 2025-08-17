
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "@/app/globals.css";
import { Header } from "@/components/app/header";
import { Footer } from "@/components/app/footer";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Meridian.ai",
  description: "Your AI Travel Companion",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} ${GeistSans.className} antialiased`}
      >
        <Suspense fallback={<div></div>}>
          <Header />
        </Suspense>
        {children}
        <Footer />
      </body>
    </html>
  );
}