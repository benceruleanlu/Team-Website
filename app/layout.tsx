import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Absolute Robotics",
  description:
    "Absolute Robotics, Team 4308, is a high school robotics team based in Ontario, Canada. We bring students together from the Woodlands Secondary School to compete in the FIRST Robotics Competition.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#050505] text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
