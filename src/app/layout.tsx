import { DM_Sans, Roboto } from "next/font/google"

import "./globals.css"

import { cn } from "@/shared/lib/utils"

import { Providers } from "./_providers"

import { Metadata } from "next"

const robotoHeading = Roboto({ subsets: ["latin"], variable: "--font-heading" })

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "RGB",
  description: "Test task for rgb web-studios",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("font-sans", dmSans.variable, robotoHeading.variable)}
    >
      <body>
        <Providers>
          <main className="min-h-screen bg-zinc-50">
            <div className="mx-auto max-w-6xl px-4 py-10">{children}</div>
          </main>
        </Providers>
      </body>
    </html>
  )
}
