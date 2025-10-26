"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import MarqueeText from "./marquee-text"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      // SYNTAX FIX: Changed outer quotes from "" to backticks ``
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 shadow-md backdrop-blur-md" : "bg-white"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          <div className="relative h-20 w-20 rounded-full overflow-hidden shadow-sm">
            <Image src="/images/rvce-logo.png" alt="RVCE Logo" fill className="object-contain" />
          </div>

          <div className="text-center mx-auto">
            <h2 className="text-m font-bold text-gray-800">Rashtreeya Sikshana Samithi Trust</h2>
            <h2 className="text-m font-bold text-gray-800">RV College of Engineering</h2>
            <h1 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mt-1">
              Women in Cloud Center of Excellence in India
            </h1>

          </div>

          <div className="flex items-center gap-4">
            <div className="relative h-20 w-20 rounded-full overflow-hidden shadow-sm">
              <Image
                src="/images/insider-circle-logo.jpeg"
                alt="RVCE WIC Insider Circle Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative h-20 w-20 rounded-full overflow-hidden shadow-sm">
              <Image src="/images/wic-logo.jpeg" alt="Women in Cloud Logo" fill className="object-contain" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary to-accent text-white py-2 px-4">
        <MarqueeText direction="rtl" />
      </div>

      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="fixed top-4 right-4 rounded-full z-50">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="border-r-accent/20">
            <div className="py-6">
              <div className="flex items-center gap-2 mb-6">
                <div className="relative h-10 w-10 rounded-full overflow-hidden">
                  <Image src="/images/rvce-logo.png" alt="RVCE Logo" fill className="object-contain" />
                </div>
                <h2 className="text-lg font-semibold gradient-heading">RVCE WIC</h2>
              </div>
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-primary transition-colors py-2 border-b border-gray-100"
                >
                  Home
                </Link>
                <Link
                  href="/wic-rvce"
                  className="text-gray-700 hover:text-primary transition-colors py-2 border-b border-gray-100"
                >
                  WIC RVCE
                </Link>
                <Link
                  href="/women-in-cloud"
                  className="text-gray-700 hover:text-primary transition-colors py-2 border-b border-gray-100"
                >
                  Women in Cloud
                </Link>
                <Link
                  href="/wic-coe-india"
                  className="text-gray-700 hover:text-primary transition-colors py-2 border-b border-gray-100"
                >
                  WIC COE India
                </Link>
                <Link
                  href="/events"
                  className="text-gray-700 hover:text-primary transition-colors py-2 border-b border-gray-100"
                >
                  Events
                </Link>
                <Link
                  href="/insider-circle"
                  className="text-gray-700 hover:text-primary transition-colors py-2 border-b border-gray-100"
                >
                  WIC Insider Circle
                </Link>
                <Link
                  href="/internship"
                  className="text-gray-700 hover:text-primary transition-colors py-2 border-b border-gray-100"
                >
                  WIC COE Program - Internship
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-primary transition-colors py-2 border-b border-gray-100"
                >
                  Contact us
                </Link>
                <Link href="/support" className="text-gray-700 hover:text-primary transition-colors py-2">
                  Support - FAQ's
                </Link>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header >
  )
}