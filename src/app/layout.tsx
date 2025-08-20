import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import AnimatedBackground from "@/components/AnimatedBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Full Stack Engineer - Vishnu Prasad PN",
  description: "My personnel website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          geistSans.variable +
          " min-h-screen bg-no-repeat bg-fixed"
        }
        style={{
          background: `
            radial-gradient(ellipse at 60% 40%, rgba(36,44,62,0.92) 0%, rgba(24,26,36,0.98) 80%, #181824 100%),
            linear-gradient(120deg, #23233a 0%, #181824 100%)
          `,
          backgroundBlendMode: "overlay",
        }}
      >
        {children}
      </body>
    </html>
  );
}
