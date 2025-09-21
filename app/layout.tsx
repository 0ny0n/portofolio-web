import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
   title: { default: "Owen Siau", template: "%s | Owen Siau" },
   description:
    "Undergraduate Computer Science Student at Bina Nusantara",
    openGraph: {
      url: "https://onyons.vercel.app",
      title: "Owen Siau - IT Developer Portfolio",
      description: "Undergrad CS student at Binus University",
      images: [{ url: "/brunbrun.JPG", 
                width: 4000, height: 6000, alt: "Owen Siau" }]
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased dark`}>
      <body>{children}</body>
    </html>
  )
}
