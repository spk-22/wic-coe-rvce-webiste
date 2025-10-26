"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import {
  Home,
  Cloud,
  Building,
  Users,
  BookOpen,
  Phone,
  HelpCircle,
  Calendar,
  Briefcase,
} from "lucide-react"

export default function SideNav() {
  const pathname = usePathname()
  const [isInternshipOpen, setIsInternshipOpen] = useState(false)

  const isActive = (path: string) => pathname === path

  return (
    <nav className="hidden md:flex fixed left-0 top-[140px] bottom-0 w-[220px] bg-card/80 backdrop-blur-sm border-r border-border/40 shadow-sm">
      {/* Use flex-col with justify-between to fill height */}
      <div className="flex flex-col justify-between w-full h-full py-4">
        <ul className="flex flex-col justify-evenly flex-1 px-4 pl-1">
          <li>
            <Link
              href="/"
              className={`flex items-center gap-3 px-4 py-2 text-sm rounded-lg transition-colors ${isActive("/")
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-gray-700 hover:bg-primary/5 hover:text-primary"
                }`}
            >
              <Home size={18} className={isActive("/") ? "text-primary" : "text-gray-500"} />
              <span className="text-[13px]">Home</span>
            </Link>
          </li>

          <li>
            <Link
              href="/women-in-cloud"
              className={`flex items-center gap-3 px-4 py-2 text-sm rounded-lg transition-colors ${isActive("/women-in-cloud")
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-gray-700 hover:bg-primary/5 hover:text-primary"
                }`}
            >
              <Cloud size={18} className={isActive("/women-in-cloud") ? "text-primary" : "text-gray-500"} />
              <span className="text-[13px]">Women in Cloud</span>
            </Link>
          </li>

          <li>
            <Link
              href="/wic-rvce"
              className={`flex items-center gap-3 px-4 py-2 text-sm rounded-lg transition-colors ${isActive("/wic-rvce")
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-gray-700 hover:bg-primary/5 hover:text-primary"
                }`}
            >
              <Building size={18} className={isActive("/wic-rvce") ? "text-primary" : "text-gray-500"} />
              <span className="text-[13px]">WIC RVCE</span>
            </Link>
          </li>

          <li>
            <Link
              href="/wic-coe-india"
              className={`flex items-center gap-3 px-4 py-2 text-sm rounded-lg transition-colors ${isActive("/wic-coe-india")
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-gray-700 hover:bg-primary/5 hover:text-primary"
                }`}
            >
              <Briefcase size={18} className={isActive("/wic-coe-india") ? "text-primary" : "text-gray-500"} />
              <span className="text-[13px]">WIC COE India</span>
            </Link>
          </li>

          <li>
            <Link
              href="/events"
              className={`flex items-center gap-3 px-4 py-2 text-sm rounded-lg transition-colors ${isActive("/events")
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-gray-700 hover:bg-primary/5 hover:text-primary"
                }`}
            >
              <Calendar size={18} className={isActive("/events") ? "text-primary" : "text-gray-500"} />
              <span className="text-[13px]">Events</span>
            </Link>
          </li>

          <li>
            <Link
              href="/insider-circle"
              className={`flex items-center gap-3 px-4 py-2 text-sm rounded-lg transition-colors ${isActive("/insider-circle")
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-gray-700 hover:bg-primary/5 hover:text-primary"
                }`}
            >
              <Users size={18} className={isActive("/insider-circle") ? "text-primary" : "text-gray-500"} />
              <span className="text-[13px]">WIC X Insider Circle</span>
            </Link>
          </li>

          <li>
            <Link
              href="/internship"
              className={`flex items-center gap-3 px-4 py-2 text-sm rounded-lg transition-colors ${pathname.includes("/internship")
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-gray-700 hover:bg-primary/5 hover:text-primary"
                }`}
            >
              <BookOpen size={18} className={pathname.includes("/internship") ? "text-primary" : "text-gray-500"} />
              <span className="text-[13px]">WIC COE Program</span>
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className={`flex items-center gap-3 px-4 py-2 text-sm rounded-lg transition-colors ${isActive("/contact")
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-gray-700 hover:bg-primary/5 hover:text-primary"
                }`}
            >
              <Phone size={18} className={isActive("/contact") ? "text-primary" : "text-gray-500"} />
              <span className="text-[13px]">Contact us</span>
            </Link>
          </li>

          <li>
            <Link
              href="/support"
              className={`flex items-center gap-3 px-4 py-2 text-sm rounded-lg transition-colors ${isActive("/support")
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-gray-700 hover:bg-primary/5 hover:text-primary"
                }`}
            >
              <HelpCircle size={18} className={isActive("/support") ? "text-primary" : "text-gray-500"} />
              <span className="text-[13px]">Support - FAQ's</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
