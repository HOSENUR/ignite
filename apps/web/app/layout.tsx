import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans"
import { ClerkProvider } from "@clerk/nextjs";


export const metadata: Metadata = {
  title: "Ignite",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={GeistSans.className + ""}>{children}</body>
      </html>
    </ClerkProvider>
  );
}