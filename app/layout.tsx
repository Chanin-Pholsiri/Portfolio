import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

const title = "Chanin Pholsiri — Full-Stack Software Engineer";
const description =
  "Full-Stack Software Engineer with 5+ years of experience in React, Next.js, Angular, ASP.NET Core, Docker, and more. Based in Bangkok, Thailand.";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-chaninpholsiri.vercel.app"),
  title,
  description,
  keywords: ["Full-Stack Developer", "React", "Next.js", "TypeScript", "Angular", "Bangkok"],
  authors: [{ name: "Chanin Pholsiri" }],
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Chanin Pholsiri",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${mono.variable} antialiased`}>{children}</body>
    </html>
  );
}
