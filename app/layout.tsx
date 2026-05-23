import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Chanin Pholsiri — Full-Stack Software Engineer",
  description:
    "Mid-Level Full-Stack Software Engineer with 4–5 years of experience in React, Next.js, Angular, ASP.NET Core, Docker, and more. Based in Bangkok, Thailand.",
  keywords: ["Full-Stack Developer", "React", "Next.js", "TypeScript", "Angular", "Bangkok"],
  authors: [{ name: "Chanin Pholsiri" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
