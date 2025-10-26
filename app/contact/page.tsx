"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Contact() {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="space-y-10">
      <section className="section-container p-8 animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold gradient-heading mb-8 text-center">
          Contact For Further Information
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="card-hover border-primary/10 overflow-hidden">
            <div className="bg-gradient-to-r from-primary to-accent h-2" />
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-primary/10 shadow-md mb-4">
                  <Image src="/images/mamatha.png" alt="Dr. Mamatha G S" fill className="object-cover" />
                </div>
                <h2 className="text-xl font-semibold text-primary">Dr. Mamatha G S</h2>
                <p className="text-gray-500">Head of Department of ISE & Professor</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="mt-1 flex-shrink-0 text-primary" />
                  <p className="text-gray-700">Department of Information Science and Engineering</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={20} className="flex-shrink-0 text-primary" />
                  <p className="text-primary">mamathags@rvce.edu.in</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={20} className="flex-shrink-0 text-primary" />
                  <a href="tel:+919886311120" className="text-primary hover:underline transition-colors">
                    +91 9886311120
                  </a>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                <Link
                  href="https://rvce.edu.in/ise-mamatha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  View Faculty Profile <ExternalLink size={14} />
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover border-primary/10 overflow-hidden">
            <div className="bg-gradient-to-r from-primary to-accent h-2" />
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-primary/10 shadow-md mb-4">
                  <Image src="/images/sagar.png" alt="Dr. B M Sagar" fill className="object-cover" />
                </div>
                <h2 className="text-xl font-semibold text-primary">Dr. B M Sagar</h2>
                <p className="text-gray-500">Dean Student Affairs and Professor</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="mt-1 flex-shrink-0 text-primary" />
                  <p className="text-gray-700">Department of Information Science and Engineering</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={20} className="flex-shrink-0 text-primary" />
                  <p className="text-primary">sagarbm@rvce.edu.in</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={20} className="flex-shrink-0 text-primary" />
                  <a href="tel:+919886332226" className="text-primary hover:underline transition-colors">
                    +91 9886332226
                  </a>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                <Link
                  href="https://rvce.edu.in/ise-sagar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  View Faculty Profile <ExternalLink size={14} />
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* NEW CONTACT LINE ADDED HERE */}
        <div className="mt-10 p-6 bg-primary/5 rounded-xl text-center shadow-inner">
          <p className="text-gray-800 text-lg">
            You can contact us directly at our official email address:
            <a href="mailto:wic_rvinsidercircle@rvce.edu.in" className="text-primary font-bold hover:underline ml-1">
              wic_rvinsidercircle@rvce.edu.in
            </a>
            . We'd love to hear from you!
          </p>
        </div>

      </section>

      <section className="section-container p-8 animate-fade-in animate-delay-100">
        <h2 className="text-2xl font-semibold gradient-heading mb-6 text-center">Visit Us</h2>

        <div className="bg-gray-100 rounded-xl overflow-hidden h-[400px] relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0057626773!2d77.49692731482133!3d12.92399019088697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3ee159ba3729%3A0x75a3463d510e7536!2sRV%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-4">
            <div className="flex items-start gap-3">
              <MapPin size={20} className="mt-1 flex-shrink-0 text-primary" />
              <div>
                <p className="font-medium">R V College of Engineering</p>
                <p className="text-gray-700">RV Vidyaniketan Post, Bengaluru-560059, Karnataka, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}