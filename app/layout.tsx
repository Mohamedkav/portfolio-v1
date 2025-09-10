import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Mohamed - Full Stack Developer Portfolio",
  description:
    "Professional portfolio of Mohamed, a passionate full-stack developer specializing in React, Node.js, Python, and modern web technologies.",
  generator: "v0.app",
  keywords: ["Full Stack Developer", "React", "Node.js", "Python", "Web Development", "Portfolio"],
  authors: [{ name: "Mohamed" }],
  openGraph: {
    title: "Mohamed - Full Stack Developer Portfolio",
    description: "Professional portfolio showcasing modern web development projects and skills",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script src="https://code.iconify.design/iconify-icon/2.0.0/iconify-icon.min.js" async></script>
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
