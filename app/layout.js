import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { navItems } from "@/utils/Data";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Analytics } from "@vercel/analytics/react"
import { ReactLenis } from "@/lib/lenis"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aniket's Portfolio",
  description: "Generated by create next app",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
        <body
          className={`${geistSans.variable} ${geistMono.variable}  antialiased dark  flex flex-col items-start bg-background w-full px-2 sm:px-8 lg:px-[19%]`}
        >
          <FloatingNav navItems={navItems} />
          <Analytics />
      {/* <ReactLenis > */}
          {children}
      {/* </ReactLenis> */}
        </body>
    </html>
  );
}
