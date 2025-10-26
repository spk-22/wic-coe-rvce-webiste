"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Users, Lightbulb, Code } from "lucide-react"
import ImageCarousel from "@/components/image-carousel"

export default function Home() {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Sample images for carousel
  const carouselImages = [
    { src: "/images/partners.jpeg", alt: "Women in Cloud Partners" },
    { src: "/images/wicrv1.jpeg", alt: "WIC Program Components" },
    { src: "/images/wicrv2.jpeg", alt: "WIC Roadmap" },
    { src: "/images/wicrv3.jpeg", alt: "WIC Program Areas" },
    { src: "/images/wicrv4.jpeg", alt: "WIC Focus Areas" },
    { src: "/images/wicrv5.jpeg", alt: "WIC Implementation" },
  ]

  return (
    <div className="space-y-10">
      <div className="w-full max-w-full rounded-xl p-1 bg-gradient-to-r from-blue-900 to-blue-500">
        {/* Inner content */}
        <section className="flex flex-col md:flex-row items-stretch gap-6 w-full rounded-xl bg-white px-4 md:px-8 py-8">

          {/* Text box */}
          <div className="w-full md:w-[35%] px-6 py-8 rounded-xl shadow-lg flex flex-col justify-center h-[400px] md:h-[400px]">
            <h1 className="text-3xl md:text-4xl font-bold gradient-heading mb-4">
              WIC - COE in India
            </h1>
            <p className="text-gray-700 mb-6">
              The Women in Cloud Center of Excellence empowers women with cloud technology skills, fosters innovation through labs, and bridges academic learning with industry job opportunities.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <Button asChild>
                <Link href="/internship" className="gap-2">
                  Join Our Program <ArrowRight size={16} />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/women-in-cloud">Learn More</Link>
              </Button>
            </div>
          </div>

          {/* Carousel */}
          <div className="w-full md:w-[65%] h-[400px] md:h-[400px] relative rounded-xl overflow-hidden">
            <ImageCarousel images={carouselImages} height="h-full" width="w-full" />
          </div>

        </section>
      </div>

      <section className="feature-card animate-fade-in animate-delay-100">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="md:w-1/2 space-y-4 md:ml-6">
            <h2 className="text-2xl md:text-3xl font-bold gradient-heading text-center">Our Mission</h2>
            <p className="text-gray-700 text-lg text-justify">
              Women In Cloud is a global network of 100,000 women tech leaders and allies from 67 countries, working to
              drive inclusive innovation in the tech ecosystem.
            </p>
            <p className="text-gray-700 text-lg text-justify">
              Through events and partnerships, they focus on workforce development, entrepreneurship, and policy
              advocacy, aiming to unlock $1B in new economic opportunities by 2030.
            </p>
            <div className="flex justify-center">
              <Button variant="outline" asChild className="mt-2">
                <Link href="/women-in-cloud" className="gap-2">
                  Discover More <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </div>


          <div className="md:w-1/2 relative h-[300px] rounded-xl overflow-hidden flex items-center justify-center">

            {/* Gradient Border Wrapper - Now controls the size and centers itself */}
            <div className="bg-gradient-to-r from-primary to-accent p-1 rounded-xl w-[300px]">

              {/* Inner container for the image, with a white background */}
              <div className="bg-white rounded-lg flex items-center justify-center">
                <Image
                  src="/images/wic-logo.jpeg"
                  alt="Women in Cloud Logo"
                  width={200}
                  height={50}
                  className="object-contain rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section >

      <section className="bg-gradient-to-r from-primary to-accent text-white rounded-xl p-8 shadow-lg animate-fade-in animate-delay-200">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">RVCE x WIC Collaboration</h2>
        <p className="mb-4 max-w-3xl mx-auto text-center">
          RVCE in collaboration with the Women in Cloud network has established a Center of Excellence with the main
          objective of empowering women on cloud technological skills and accelerating employability options.
        </p>
        <p className="max-w-3xl mx-auto text-center">
          The Women in Cloud Center of Excellence in India at RV College of Engineering® aims to extend the benefits to
          beneficiaries across Karnataka state, in line with Engineering (R & D) policy 2021.
        </p>
        <div className="flex justify-center mt-6">
          <Button variant="secondary" asChild>
            <Link href="/wic-rvce">Learn More About Our Collaboration</Link>
          </Button>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in animate-delay-300">
        <Card className="card-hover border-primary/10">
          <CardContent className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-full">
                <Code size={24} className="text-primary" />
              </div>
              <h2 className="text-xl font-semibold text-primary">Technical Wing</h2>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex flex-col gap-1">
                <div className="flex items-start gap-2">
                  <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="font-medium">Job Simulation</span>
                </div>
                <div className="ml-3.5 bg-blue-50 p-2 rounded-md">
                  <span>Diverse role exposure and skill enhancement</span>
                </div>
              </li>
              <li className="flex flex-col gap-1">
                <div className="flex items-start gap-2">
                  <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="font-medium">Code and Coffee</span>
                </div>
                <div className="ml-3.5 bg-blue-50 p-2 rounded-md">
                  <span>Tech summit to share ideas and projects</span>
                </div>
              </li>
              <li className="flex flex-col gap-1">
                <div className="flex items-start gap-2">
                  <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="font-medium">Monthly Tech Speeches</span>
                </div>
                <div className="ml-3.5 bg-blue-50 p-2 rounded-md">
                  <span>From industry leaders and experts</span>
                </div>
              </li>
            </ul>
            <div className="mt-4 flex justify-center">
              <Link href="/insider-circle">
                <Button variant="outline" className="flex items-center gap-2">
                  Learn More <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover border-primary/10">
          <CardContent className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-full">
                <Users size={24} className="text-primary" />
              </div>
              <h2 className="text-xl font-semibold text-primary">Social Wing</h2>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex flex-col gap-1">
                <div className="flex items-start gap-2">
                  <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="font-medium">Digital Skilling</span>
                </div>
                <div className="ml-3.5 bg-blue-50 p-2 rounded-md">
                  <span>For underprivileged students in computer science</span>
                </div>
              </li>
              <li className="flex flex-col gap-1">
                <div className="flex items-start gap-2">
                  <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="font-medium">Women Empowerment Workshops</span>
                </div>
                <div className="ml-3.5 bg-blue-50 p-2 rounded-md">
                  <span>For artisans and small business owners</span>
                </div>
              </li>
              <li className="flex flex-col gap-1">
                <div className="flex items-start gap-2">
                  <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="font-medium">Community Initiatives</span>
                </div>
                <div className="ml-3.5 bg-blue-50 p-2 rounded-md">
                  <span>For holistic development and growth</span>
                </div>
              </li>
            </ul>
            <div className="mt-4 flex justify-center">
              <Link href="/insider-circle">
                <Button variant="outline" className="flex items-center gap-2">
                  Learn More <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      <section className="section-container p-8 animate-fade-in animate-delay-400">
        <h2 className="text-2xl md:text-3xl font-bold gradient-heading mb-8 text-center">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="card-hover border-primary/10">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Calendar size={20} className="text-primary" />
                <h3 className="font-semibold text-lg">WIC x INDIA 2026</h3>
              </div>
              <p className="text-gray-700">
                Over 1000 women getting ready for DevSecOps Roles, 100+ women ready as executive leaders.
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover border-primary/10">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users size={20} className="text-primary" />
                <h3 className="font-semibold text-lg">WIC x Annual Tour 2026</h3>
              </div>
              <p className="text-gray-700">
                Uniting Cloud and AI Leadership for Global Equity with the theme "Collective Contribution."
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover border-primary/10">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb size={20} className="text-primary" />
                <h3 className="font-semibold text-lg">WIC x Inspire 2026</h3>
              </div>
              <p className="text-gray-700">
                AI-Fueled B2B GTM Summit for tech founders and leaders to explore advanced strategies.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div >
  )
}
