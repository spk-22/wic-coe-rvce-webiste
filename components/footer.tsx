import Image from "next/image"
import Link from "next/link"
import { Phone, MapPin, ExternalLink, Linkedin, Instagram } from "lucide-react"
import { Mail } from "lucide-react" // Added Mail icon for the email address

export default function Footer() {
  return (
    <footer className="mt-8 mb-4">
      <div className="mx-4 md:ml-[220px] md:mr-8 rounded-xl overflow-hidden">
        <div className="bg-gradient-to-r from-primary to-accent p-0.5">
          <div className="bg-blue-50 backdrop-blur-sm rounded-lg">
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* 1. RVCE WIC Address/Contact (Updated) */}
                <div className="flex flex-col items-center md:items-start">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative h-16 w-16 rounded-full overflow-hidden shadow-md">
                      <Image src="/images/rvce-logo.png" alt="RVCE Logo" fill className="object-contain" />
                    </div>
                    <h3 className="text-lg font-semibold gradient-heading">RVCE WIC</h3>
                  </div>

                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-start gap-2">
                      <MapPin size={16} className="mt-1 flex-shrink-0 text-primary" />
                      <p>R V College of Engineering, RV Vidyaniketan Post, Bengaluru-560059, Karnataka, India</p>
                    </div>
                    {/* NEW: Replaced Phone with Email */}
                    <div className="flex items-center gap-2">
                      <Mail size={16} className="flex-shrink-0 text-primary" />
                      <a href="mailto:wic_rvinsidercircle@rvce.edu.in" className="hover:text-primary transition-colors">
                        wic_rvinsidercircle@rvce.edu.in
                      </a>
                    </div>
                  </div>
                </div>

                {/* 2. Quick Links (Unchanged) */}
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-lg font-semibold mb-4 gradient-heading">Quick Links</h3>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
                    <Link href="/" className="text-gray-600 hover:text-primary transition-colors">
                      Home
                    </Link>
                    <Link href="/women-in-cloud" className="text-gray-600 hover:text-primary transition-colors">
                      Women in Cloud
                    </Link>
                    <Link href="/wic-rvce" className="text-gray-600 hover:text-primary transition-colors">
                      WIC RVCE
                    </Link>
                    <Link href="/insider-circle" className="text-gray-600 hover:text-primary transition-colors">
                      Insider Circle
                    </Link>
                    <Link href="/internship" className="text-gray-600 hover:text-primary transition-colors">
                      Internship
                    </Link>
                    <Link href="/events" className="text-gray-600 hover:text-primary transition-colors">
                      Events
                    </Link>
                    <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors">
                      Contact
                    </Link>
                    <Link href="/support" className="text-gray-600 hover:text-primary transition-colors">
                      Support
                    </Link>
                  </div>
                </div>

                {/* 3. Connect With Us (Updated) */}
                <div className="flex flex-col items-center md:items-end">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-lg font-semibold gradient-heading">Connect With Us</h3>
                    <div className="relative h-16 w-16 rounded-full overflow-hidden shadow-md">
                      <Image src="/images/wic-logo.jpeg" alt="Women in Cloud Logo" fill className="object-contain" />
                    </div>
                  </div>

                  <div className="flex gap-4 mb-4">
                    <Link
                      href="https://www.linkedin.com/company/rvce-wic-insider-circle1/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary/10 hover:bg-primary/20 text-primary p-2 rounded-full transition-colors"
                    >
                      <Linkedin size={20} />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link
                      href="https://www.instagram.com/rvce_wic_insidercircle/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary/10 hover:bg-primary/20 text-primary p-2 rounded-full transition-colors"
                    >
                      <Instagram size={20} />
                      <span className="sr-only">Instagram</span>
                    </Link>
                    <Link
                      href="https://womenincloud.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary/10 hover:bg-primary/20 text-primary p-2 rounded-full transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span className="sr-only">Website</span>
                    </Link>
                  </div>

                  {/* Contact Information Block (Updated) */}
                  <div className="flex flex-col items-center md:items-end text-sm text-gray-600">
                    <Link
                      href="https://www.rvce.edu.in"
                      className="hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.rvce.edu.in
                    </Link>
                  </div>

                  <p className="italic font-semibold text-sm mt-2 text-center md:text-right gradient-heading">
                    Go, Change the World <sup>&copy;</sup>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}