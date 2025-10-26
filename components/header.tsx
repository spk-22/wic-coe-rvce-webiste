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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 shadow-md backdrop-blur-md" : "bg-white"
        }`}
    >
      <div className="container mx-auto px-4">
        {/* Main Header Row */}
        <div className="flex items-center justify-between gap-2 flex-nowrap py-2 md:h-24 md:py-0">
          {/* RVCE Logo */}
          <div className="relative h-10 w-10 sm:h-12 sm:w-12 md:h-20 md:w-20 rounded-full overflow-hidden shadow-sm flex-shrink-0">
            <Image
              src="/images/rvce-logo.png"
              alt="RVCE Logo"
              fill
              className="object-contain"
            />
          </div>

          {/* Central Title */}
          <div className="text-center flex-grow min-w-0 mx-2 md:mx-auto">
            <h2 className="hidden sm:block text-[0.6rem] md:text-m font-bold text-gray-800 leading-tight truncate">
              Rashtreeya Sikshana Samithi Trust
            </h2>
            <h2 className="text-[0.65rem] sm:text-xs md:text-m font-bold text-gray-800 leading-tight truncate">
              RV College of Engineering
            </h2>
            <h1 className="text-xs sm:text-base md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mt-0 sm:mt-0.5 md:mt-1 leading-tight">
              Women in Cloud COE in India
            </h1>
          </div>

          {/* Right Side: Logos + Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Accessory Logos */}
            <div className="relative h-8 w-8 sm:h-10 sm:w-10 md:h-20 md:w-20 rounded-full overflow-hidden shadow-sm flex-shrink-0">
              <Image
                src="/images/insider-circle-logo.jpeg"
                alt="RVCE WIC Insider Circle Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative h-8 w-8 sm:h-10 sm:w-10 md:h-20 md:w-20 rounded-full overflow-hidden shadow-sm flex-shrink-0">
              <Image
                src="/images/wic-logo.jpeg"
                alt="Women in Cloud Logo"
                fill
                className="object-contain"
              />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden ml-2 flex-shrink-0">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full z-50 bg-white/90 backdrop-blur-md shadow-sm border border-gray-200 hover:bg-gray-50 h-9 w-9"
                  >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>

                <SheetContent side="left" className="border-r-accent/20 w-[80vw] max-w-xs">
                  <div className="py-6 px-4">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="relative h-10 w-10 rounded-full overflow-hidden">
                        <Image
                          src="/images/rvce-logo.png"
                          alt="RVCE Logo"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <h2 className="text-lg font-semibold gradient-heading">RVCE WIC</h2>
                    </div>
                    <nav className="flex flex-col">
                      <Link
                        href="/"
                        className="text-gray-700 hover:text-primary transition-colors py-2 px-4 border-b border-gray-100"
                      >
                        Home
                      </Link>
                      <Link
                        href="/wic-rvce"
                        className="text-gray-700 hover:text-primary transition-colors py-2 px-4 border-b border-gray-100"
                      >
                        WIC RVCE
                      </Link>
                      <Link
                        href="/women-in-cloud"
                        className="text-gray-700 hover:text-primary transition-colors py-2 px-4 border-b border-gray-100"
                      >
                        Women in Cloud
                      </Link>
                      <Link
                        href="/wic-coe-india"
                        className="text-gray-700 hover:text-primary transition-colors py-2 px-4 border-b border-gray-100"
                      >
                        WIC COE India
                      </Link>
                      <Link
                        href="/events"
                        className="text-gray-700 hover:text-primary transition-colors py-2 px-4 border-b border-gray-100"
                      >
                        Events
                      </Link>
                      <Link
                        href="/insider-circle"
                        className="text-gray-700 hover:text-primary transition-colors py-2 px-4 border-b border-gray-100"
                      >
                        WIC Insider Circle
                      </Link>
                      <Link
                        href="/internship"
                        className="text-gray-700 hover:text-primary transition-colors py-2 px-4 border-b border-gray-100"
                      >
                        WIC COE Program - Internship
                      </Link>
                      <Link
                        href="/contact"
                        className="text-gray-700 hover:text-primary transition-colors py-2 px-4 border-b border-gray-100"
                      >
                        Contact us
                      </Link>
                      <Link
                        href="/support"
                        className="text-gray-700 hover:text-primary transition-colors py-2 px-4"
                      >
                        Support - FAQ's
                      </Link>
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="bg-gradient-to-r from-primary to-accent text-white py-1 px-4">
        <MarqueeText direction="rtl" />
      </div>
    </header>
  )
}
