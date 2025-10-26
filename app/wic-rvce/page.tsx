"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Clock, Laptop, CheckCircle2, Target } from "lucide-react"
import ImageCarousel from "@/components/image-carousel"

export default function WicRvce() {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Sample images for carousel


  const galleryImages = [
    { src: "/images/wic-rvce-g1.jpg", alt: "WIC-RVCE g1" },
    { src: "/images/wic-rvce-g2.jpg", alt: "WIC-RVCE g2" },
    { src: "/images/wic-rvce-g3.jpg", alt: "WIC-RVCE g3" },
    { src: "/images/wic-rvce-g4.jpg", alt: "WIC-RVCE g4" },
    { src: "/images/wic-rvce-g5.jpg", alt: "WIC-RVCE g5" },

  ]

  return (
    <div className="space-y-8">

      <section className="feature-card">
        <h2 className="text-2xl font-semibold text-primary mb-6 text-center">WIC - RVCE Collaboration</h2>
        <p className="text-gray-700 mb-4">
          Women in Cloud is a community-led economic development organization taking action to generate $1B in net new
          global economic access for women entrepreneurs by 2030 through partnerships with corporations, community
          leaders, and policymakers.
        </p>
        <p className="text-gray-700">
          RVCE in collaboration with the Women in Cloud network has established a Center of Excellence with the main
          objective of empowering women on cloud technological skills and accelerating employability options.
        </p>
      </section>

      {/* Vision and Mission Section with creative design */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 1. Our Vision Card (Primary Gradient Background) */}
        <Card className="overflow-hidden bg-gradient-to-r from-primary to-accent text-white shadow-lg">
          {/* MODIFIED: Changed p-6 to px-6 py-4 to reduce vertical padding */}
          <CardContent className="px-6 py-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-white/20 rounded-full">
                <Target size={24} className="text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Our Vision</h2>
            </div>
            {/* MODIFIED: Removed pl-10 */}
            <div className="flex justify-center">
              <p
                // MODIFIED: Added text-center, max-w-md, and mx-auto 
                // mx-auto centers the block, max-w-md constrains its width.
                className="text-white/90 text-lg mb-4 italic text-center max-w-md mx-auto"
              >
                "Accelerating women empowerment in digital technologies for sustainable partnership and inclusive
                development."
              </p>
            </div>
          </CardContent>
        </Card>

        {/* 2. Our Mission Card */}
        <Card className="overflow-hidden bg-gradient-to-r from-primary to-accent text-white shadow-lg">
          {/* MODIFIED: Changed p-6 to px-6 py-4 to reduce vertical padding */}
          <CardContent className="px-6 py-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-white/20 rounded-full">
                <CheckCircle2 size={24} className="text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Our Mission</h2>
            </div>
            <ul className="list-none pl-10 space-y-3">
              {[
                "To train and empower women in cloud technological skills and employability.",
                "To promote internship and applied research in academic program.",
                "To coordinate with government and private organizations for digital skilling, sustainable partnerships and substantial opportunity.",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-white flex-shrink-0" />
                  {/* MODIFIED: Added text-sm to reduce the font size */}
                  <p className="text-white/90 text-sm">{item}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>


      {/* About Us with creative design */}
      <section className="feature-card">
        <h2 className="text-2xl font-semibold text-primary mb-6 text-center">About Us</h2>

        {/* MOVED STYLES from inner div to outer section for a clean look */}
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm">
          <p className="text-gray-700 mb-4">
            Women in Cloud Center of Excellence in India at RV College of Engineering® in association with Women in
            Cloud (WIC), USA would like to extend the benefits of the CoE to the beneficiaries across Karnataka state.
          </p>
          <p className="text-gray-700 mb-4">
            The objectives are in line with Engineering (R & D) policy 2021 and include innovation lab programs to
            encourage open innovation, boost the Engineering R&D ecosystem, and recruitment assistance.
          </p>
          <p className="text-gray-700">
            WIC is a community-led economic development organization taking action to generate $1B in net new global
            economic access for women entrepreneurs by 2030 through partnerships with corporations, community leaders,
            and policymakers.
          </p>
        </div>
      </section>


      <section className="bg-gradient-to-r from-primary to-accent text-white rounded-xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold mb-8 text-center">Internship Program</h2>

        {/* Two-column layout for the combined Info + CTA blocks */}
        {/* MODIFIED: Using grid-cols-2 and space-y to stack content inside each column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

          {/* === LEFT BLOCK: Program Duration & Details Download === */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 space-y-4 flex flex-col items-center text-center">

            {/* Info Block */}
            <Clock size={32} className="text-white" />
            <div className="space-y-1">
              {/* CORRECTED: text-2l to text-2xl */}
              <p className="text-xl font-bold">4-6 Weeks</p>
              <p className="text-white/80 text-base">Program Duration</p>
            </div>

            {/* Download Button for Program Details */}
            <a
              href="/documents/WiC Prog Details.pdf"
              download
              className="mt-4 text-sm h-10 inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-gray-100 transition duration-200 px-4 rounded-md shadow-md"
            >
              <Download size={16} /> Download Program Details
            </a>
          </div>


          {/* === RIGHT BLOCK: Learning Format & Internship Topics Download === */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 space-y-4 flex flex-col items-center text-center">

            {/* Info Block */}
            <Laptop size={32} className="text-white" />
            <div className="space-y-1">
              {/* CORRECTED: text-2l to text-2xl */}
              <p className="text-xl font-bold">Online Session</p>
              <p className="text-white/80 text-base">Learning Format</p>
            </div>

            {/* Download Button for Internship Topics */}
            <a
              href="/documents/WiC Internships.pdf"
              download
              className="mt-4 text-sm h-10 inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-gray-100 transition duration-200 px-4 rounded-md shadow-md"
            >
              <Download size={16} /> Download Internship Topics
            </a>
          </div>
        </div>
      </section>

      <h2 className="text-2xl font-semibold text-primary mb-6 text-center">Gallery</h2>
      <div className="h-[300px] relative">
        <ImageCarousel images={galleryImages} height="h-[300px]" width="max-w-xl mx-auto" />
      </div>

    </div>
  )
}