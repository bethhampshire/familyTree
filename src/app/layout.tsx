import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hampshire family tree",
  description: "Hampshire family tree",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header appName="Hampshire family tree"
         homeHref="/"
          membersHref="/members"
          treeHref="/tree"/>
        <div>
        {children}
        </div>
      </body>
    </html>
  );
}
