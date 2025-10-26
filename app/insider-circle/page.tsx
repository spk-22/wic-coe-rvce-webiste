"use client"
import { Eye, Target } from 'lucide-react';
// OR import { Eye, Target } from 'lucide'; depending on your setup
import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function InsiderCircle() {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="space-y-8">
      {/* MODIFIED: Section is now implicitly white (no explicit background color), but retains padding and shadow */}
      <section className="rounded-xl p-8 shadow-xl animate-fade-in">
        {/* Changed heading color to primary for visual punch against the white background */}
        <h1 className="text-3xl font-bold text-primary mb-10 text-center border-b border-primary/40 pb-4">RV WiC INSIDER CIRCLE</h1>

        {/* Content grid with a focus on visual separation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 divide-x divide-primary/40">

          {/* === 1. OUR VISION (Left Side) === */}
          {/* MODIFIED: Added gradient border and frosted glass effect */}
          <div className="flex flex-col items-center p-6 rounded-r-xl 
                        bg-gradient-to-l from-accent/5 to-accent/10 
                        backdrop-blur-sm border-l border-accent/20 
                        text-gray-800 h-full">

            <Eye size={48} className="text-primary mb-4" />
            <h2 className="text-2xl font-bold text-primary mb-4 text-center">Our Vision</h2>

            <p className="mb-4 text-center text-gray-700">
              The Women in Cloud Network-Student Chapter at RVCE strives to:
            </p>

            <ul className="list-disc pl-5 space-y-3 text-left w-full max-w-sm">
              <li>Empower women in cloud technology through mentorship, education, and networking.</li>
              <li>
                Foster inclusivity and professional growth while integrating a strong social vertical to enhance
                community impact.
              </li>
            </ul>
          </div>

          {/* === 2. OUR MISSION (Right Side) === */}
          {/* MODIFIED: Added gradient border and frosted glass effect */}
          <div className="flex flex-col items-center p-6 rounded-r-xl 
                        bg-gradient-to-l from-accent/5 to-accent/10 
                        backdrop-blur-sm border-l border-accent/20 
                        text-gray-800 h-full">

            <Target size={48} className="text-primary mb-4" />
            <h2 className="text-2xl font-bold text-primary mb-4 text-center">Our Mission</h2>

            <p className="mb-4 text-center text-gray-700">
              To advance women's roles in shaping the future of tech industry.
            </p>

            <ul className="list-disc pl-5 space-y-3 text-left w-full max-w-sm">
              <li>
                To equip women with the skills, knowledge through a supportive community that encourages
                innovation, leadership.
              </li>
              <li>
                To promote entrepreneurship among women by mentoring to showcase their ideas and
                products, and raise awareness for the use of technology as a tool for empowerment.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-container p-8 animate-fade-in animate-delay-100">
        <h2 className="text-2xl md:text-3xl font-bold gradient-heading mb-8 text-center">Faculty Coordinators</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Faculty Coordinators */}
          <Card className="card-hover border-primary/10 overflow-hidden">
            <div className="bg-gradient-to-r from-primary to-accent h-1.5" />
            <CardContent className="p-6 text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/10 shadow-md">
                <Image src="/images/mamatha-gs-new.png" alt="Dr. Mamatha G S" fill className="object-cover" />
              </div>
              <h3 className="font-semibold text-lg text-primary mb-1">Dr. Mamatha G S</h3>
              <p className="text-sm text-gray-600 mb-2">Faculty Coordinator</p>
              <p className="text-sm text-gray-700">Head of Department of ISE & Professor</p>
            </CardContent>
          </Card>

          <Card className="card-hover border-primary/10 overflow-hidden">
            <div className="bg-gradient-to-r from-primary to-accent h-1.5" />
            <CardContent className="p-6 text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/10 shadow-md">
                <Image src="/images/bm-sagar-new.png" alt="Dr. B M Sagar" fill className="object-cover" />
              </div>
              <h3 className="font-semibold text-lg text-primary mb-1">Dr. B M Sagar</h3>
              <p className="text-sm text-gray-600 mb-2">Faculty Coordinator</p>
              <p className="text-sm text-gray-700">Dean Student Affairs and Professor</p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-semibold text-primary mt-12 mb-8 text-center">Core Team 2024-2025</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {/* Core Team Members */}
          <Card className="card-hover border-primary/10 overflow-hidden">
            <CardContent className="p-4 text-center">
              <div className="relative w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-2 border-primary/10 shadow-md">
                <Image src="/images/lekha-bagalkot.png" alt="Lekha Bagalkot" fill className="object-cover" />
              </div>
              <h3 className="font-semibold text-primary">Lekha Bagalkot</h3>
              <p className="text-xs text-gray-600">President</p>
            </CardContent>
          </Card>

          <Card className="card-hover border-primary/10 overflow-hidden">
            <CardContent className="p-4 text-center">
              <div className="relative w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-2 border-primary/10 shadow-md">
                <Image src="/images/varsha-hegde.png" alt="Varsha Hegde" fill className="object-cover" />
              </div>
              <h3 className="font-semibold text-primary">Varsha Hegde</h3>
              <p className="text-xs text-gray-600">Secretary</p>
            </CardContent>
          </Card>

          <Card className="card-hover border-primary/10 overflow-hidden">
            <CardContent className="p-4 text-center">
              <div className="relative w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-2 border-primary/10 shadow-md">
                <Image src="/images/nikita-kapini.png" alt="Nikita S Raj Kapini" fill className="object-cover" />
              </div>
              <h3 className="font-semibold text-primary">Nikita S Raj Kapini</h3>
              <p className="text-xs text-gray-600">Secretary</p>
            </CardContent>
          </Card>

          <Card className="card-hover border-primary/10 overflow-hidden">
            <CardContent className="p-4 text-center">
              <div className="relative w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-2 border-primary/10 shadow-md">
                <Image src="/images/muktha-p.png" alt="Muktha P" fill className="object-cover" />
              </div>
              <h3 className="font-semibold text-primary">Muktha P</h3>
              <p className="text-xs text-gray-600">Marketing Head</p>
            </CardContent>
          </Card>

          <Card className="card-hover border-primary/10 overflow-hidden">
            <CardContent className="p-4 text-center">
              <div className="relative w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-2 border-primary/10 shadow-md">
                <Image src="/images/nidhi-kulkarni.png" alt="Nidhi Kulkarni" fill className="object-cover" />
              </div>
              <h3 className="font-semibold text-primary">Nidhi Kulkarni</h3>
              <p className="text-xs text-gray-600">Corporate Partnerships Head</p>
            </CardContent>
          </Card>

          <Card className="card-hover border-primary/10 overflow-hidden">
            <CardContent className="p-4 text-center">
              <div className="relative w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-2 border-primary/10 shadow-md">
                <Image src="/images/nitya-mohare.png" alt="Nitya P Mohare" fill className="object-cover" />
              </div>
              <h3 className="font-semibold text-primary">Nitya P Mohare</h3>
              <p className="text-xs text-gray-600">Media Head</p>
            </CardContent>
          </Card>

          <Card className="card-hover border-primary/10 overflow-hidden">
            <CardContent className="p-4 text-center">
              <div className="relative w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-2 border-primary/10 shadow-md">
                <Image
                  src="/images/nithyashree-subramanian.png"
                  alt="Nithyashree Subramanian"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold text-primary">Nithyashree Subramanian</h3>
              <p className="text-xs text-gray-600">Media Head</p>
            </CardContent>
          </Card>

          <Card className="card-hover border-primary/10 overflow-hidden">
            <CardContent className="p-4 text-center">
              <div className="relative w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-2 border-primary/10 shadow-md">
                <Image src="/images/deeksha-hegde.png" alt="Deeksha Hegde" fill className="object-cover" />
              </div>
              <h3 className="font-semibold text-primary">Deeksha Hegde</h3>
              <p className="text-xs text-gray-600">Design and Content Head</p>
            </CardContent>
          </Card>

          <Card className="card-hover border-primary/10 overflow-hidden">
            <CardContent className="p-4 text-center">
              <div className="relative w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-2 border-primary/10 shadow-md">
                <Image src="/images/prarthana-kulkarni.png" alt="Prarthana Kulkarni" fill className="object-cover" />
              </div>
              <h3 className="font-semibold text-primary">Prarthana Kulkarni</h3>
              <p className="text-xs text-gray-600">Social Event Head</p>
            </CardContent>
          </Card>

          <Card className="card-hover border-primary/10 overflow-hidden">
            <CardContent className="p-4 text-center">
              <div className="relative w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-2 border-primary/10 shadow-md">
                <Image src="/images/supriya-s.png" alt="Supriya S" fill className="object-cover" />
              </div>
              <h3 className="font-semibold text-primary">Supriya S</h3>
              <p className="text-xs text-gray-600">Technical Event Head</p>
            </CardContent>
          </Card>
        </div>

        <h3 className="text-xl font-semibold text-primary mt-12 mb-6 text-center">Coordinators</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card className="card-hover border-primary/10 overflow-hidden">
            <CardContent className="p-4 text-center">
              <div className="relative w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-2 border-primary/10 shadow-md">
                <Image src="/images/gayathri-nambiar.png" alt="Gayathri Nambiar" fill className="object-cover" />
              </div>
              <h3 className="font-semibold text-primary">Gayathri Nambiar</h3>
              <p className="text-xs text-gray-600">Coordinator</p>
            </CardContent>
          </Card>

          <Card className="card-hover border-primary/10 overflow-hidden">
            <CardContent className="p-4 text-center">
              <div className="relative w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-2 border-primary/10 shadow-md">
                <Image src="/images/trisha-bhattacharya.png" alt="Trisha Bhattacharya" fill className="object-cover" />
              </div>
              <h3 className="font-semibold text-primary">Trisha Bhattacharya</h3>
              <p className="text-xs text-gray-600">Coordinator</p>
            </CardContent>
          </Card>

          <Card className="card-hover border-primary/10 overflow-hidden">
            <CardContent className="p-4 text-center">
              <div className="relative w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-2 border-primary/10 shadow-md">
                <Image src="/images/khushi-gaonkar.png" alt="Khushi Gaonkar" fill className="object-cover" />
              </div>
              <h3 className="font-semibold text-primary">Khushi Gaonkar</h3>
              <p className="text-xs text-gray-600">Coordinator</p>
            </CardContent>
          </Card>

          <Card className="card-hover border-primary/10 overflow-hidden">
            <CardContent className="p-4 text-center">
              <div className="relative w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-2 border-primary/10 shadow-md">
                <Image src="/images/priyanka-tr.png" alt="Priyanka T R" fill className="object-cover" />
              </div>
              <h3 className="font-semibold text-primary">Priyanka T R</h3>
              <p className="text-xs text-gray-600">Coordinator</p>
            </CardContent>
          </Card>

          <Card className="card-hover border-primary/10 overflow-hidden">
            <CardContent className="p-4 text-center">
              <div className="relative w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-2 border-primary/10 shadow-md">
                <Image src="/images/yukta-ashok.png" alt="Yukta Ashok" fill className="object-cover" />
              </div>
              <h3 className="font-semibold text-primary">Yukta Ashok</h3>
              <p className="text-xs text-gray-600">Coordinator</p>
            </CardContent>
          </Card>

          <Card className="card-hover border-primary/10 overflow-hidden">
            <CardContent className="p-4 text-center">
              <div className="relative w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-2 border-primary/10 shadow-md">
                <Image src="/images/vani-mittal.png" alt="Vani Mittal" fill className="object-cover" />
              </div>
              <h3 className="font-semibold text-primary">Vani Mittal</h3>
              <p className="text-xs text-gray-600">Coordinator</p>
            </CardContent>
          </Card>
        </div>

        <h3 className="text-xl font-semibold text-primary mt-12 mb-6 text-center">Website Team</h3>

        {/* MODIFIED: Changed the grid classes to sm:grid-cols-2 and then explicitly set max-width */}
        {/* to center the 2-column layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg mx-auto">

          <Card className="card-hover border-primary/10 overflow-hidden justify-center">
            <CardContent className="p-4 text-center">
              <div className="relative w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-2 border-primary/10 shadow-md">
                <Image src="/images/siya-pk.jpg" alt="Siya P Kurandwad" fill className="object-cover" />
              </div>
              <h3 className="font-semibold text-primary">Siya P Kurandwad</h3>
              <p className="text-xs text-gray-600">Website Team Head</p>
            </CardContent>
          </Card>

          <Card className="card-hover border-primary/10 overflow-hidden justify-center">
            <CardContent className="p-4 text-center">
              <div className="relative w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-2 border-primary/10 shadow-md">
                <Image src="/images/spoorthi-r.jpg" alt="Spoorthi Ravi Pratap" fill className="object-cover" />
              </div>
              <h3 className="font-semibold text-primary">Spoorthi Ravi Pratap</h3>
              <p className="text-xs text-gray-600">Website Team Head</p>
            </CardContent>
          </Card>

        </div>
      </section>


      {/* ========================================================= */}
      {/* SECTION 2: SOCIAL WING (Community-Focused Design)         */}
      {/* ========================================================= */}
      <section className="section-container p-8 animate-fade-in animate-delay-400">
        <h2 className="text-3xl font-bold text-primary mb-6 text-center border-b-2 border-primary/20 pb-2">SOCIAL WING</h2>

        <p className="mb-8 text-lg text-gray-700 max-w-4xl mx-auto text-center">
          Focuses on empowering women through community-driven initiatives in holistic development. This includes
          workshops for artisans to leverage tech, digital skilling for underprivileged students.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

          {/* CARD 1: Women Empowerment Workshops */}
          <Card className="bg-primary/5 border-l-4 border-accent shadow-md hover:bg-primary/10 transition duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                {/* SVG ICON: Users/Community Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent flex-shrink-0">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <h3 className="text-xl text-accent">Women Empowerment Workshops</h3>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  Hold workshops and informative sessions of artisans, bakers and small business owners to enable them
                  to leverage tech to enhance their business and outreach.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* CARD 2: Digital Skilling for the underprivileged */}
          <Card className="bg-primary/5 border-l-4 border-accent shadow-md hover:bg-primary/10 transition duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                {/* SVG ICON: Heart/Hand Icon for Charity/Skilling */}
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent flex-shrink-0">
                  <rect x="2" y="3" width="20" height="15" rx="2" ry="2" />
                  <line x1="1" y1="19" x2="23" y2="19" />
                  <line x1="7" y1="23" x2="17" y2="23" />
                  <line x1="12" y1="19" x2="12" y2="23" />
                </svg>
                <h3 className="text-xl text-accent">
                  Digital Skilling for the underprivileged
                </h3>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  Conduct workshops for middle school and high school students related to Computer science and the tech
                  world.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section >

      <section className="section-container p-8 animate-fade-in animate-delay-300">
        <h2 className="text-3xl font-bold text-primary mb-6 text-center border-b-2 border-primary/20 pb-2">TECHNICAL WING</h2>

        <p className="mb-8 text-lg text-gray-700 max-w-4xl mx-auto text-center">
          Focuses more on gaining practical insights, connecting with industry professionals and peers and receive
          personalized feedback. Includes exploring and experiencing various roles in corporate sector such as
          marketing, finance and IT.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* CARD 1: JOB SIMULATION */}
          <Card className="border-t-4 border-primary shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-1 ease-in-out">
            <CardContent className="p-6">
              {/* SVG ICON: Briefcase/Job Icon */}
              <div className="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4 text-center">JOB SIMULATION</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Diverse Role exposure</li>
                <li>Skill Enhancement</li>
                <li>Career Exploration</li>
              </ul>
            </CardContent>
          </Card>

          {/* CARD 2: CODE OVER COFFEE */}
          <Card className="border-t-4 border-primary shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-1 ease-in-out">
            <CardContent className="p-6">
              {/* SVG ICON: Code/Development Icon */}
              <div className="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4 text-center">CODE OVER COFFEE</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>A tech-summit</li>
                <li>Share ideas and projects in tech and cloud</li>
                <li>Best idea gets an award</li>
                <li>Inclusion of Company collaborations</li>
              </ul>
            </CardContent>
          </Card>

          {/* CARD 3: MONTHLY TECH TALK SERIES */}
          <Card className="border-t-4 border-primary shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-1 ease-in-out">
            <CardContent className="p-6">
              {/* SVG ICON: Calendar/Schedule Icon */}
              <div className="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4 text-center">MONTHLY TECH TALK SERIES</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  Invite notable women from the tech industry along with successful alumni from RVCE to give keynote
                  speeches.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div >
  )
}
