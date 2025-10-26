import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SideNav from "@/components/side-nav"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
})

export const metadata: Metadata = {
  title: "RVCE Women in Cloud",
  description: "RV College of Engineering Women in Cloud chapter",
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="min-h-screen flex flex-col bg-gradient-to-br from-background to-background/80">
            <Header />
            <div className="flex flex-col md:flex-row flex-1 pt-[140px]">
              <SideNav />
              <main className="flex-1 px-4 md:px-6 pb-8 pt-4 md:ml-[220px] max-w-7xl w-full">{children}</main>
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
