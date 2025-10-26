"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Calendar, Users, Award } from "lucide-react"
import ImageCarousel from "@/components/image-carousel"

export default function WomenInCloud() {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Sample images for carousel
  const carouselImages = [
    { src: "/images/wic1.jpeg", alt: "Women in Cloud Skills Ready Challenge" },
    { src: "/images/wic2.jpeg", alt: "Women in Cloud Brand Ambassadors" },
    { src: "/images/wic3.jpeg", alt: "Women in Cloud ICONS Documentary" },
  ]

  return (
    <div className="space-y-10">
      <section className="section-container p-8 animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold gradient-heading mb-8 text-center">Women in Cloud</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">Our Mission</h2>
            <p className="text-gray-700">
              Women In Cloud is a global network of 100,000 women tech leaders and allies from 67 countries, working to
              drive inclusive innovation in the tech ecosystem.
            </p>
            <p className="text-gray-700">
              Through events and partnerships, they focus on workforce development, entrepreneurship, and policy
              advocacy, aiming to unlock $1B in new economic opportunities by 2030.
            </p>
            <p className="text-gray-700">
              Their initiatives align with ESG and UN Sustainable Development Goals, promoting diversity,
              sustainability, and technology innovation.
            </p>
            <Button variant="outline" asChild className="mt-2">
              <Link href="https://womenincloud.com/" target="_blank" rel="noopener noreferrer" className="gap-2">
                Visit Official Website <ExternalLink size={16} />
              </Link>
            </Button>
          </div>

          <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
            <ImageCarousel images={carouselImages} />
          </div>
        </div>
      </section >

      <section className="section-container p-8 animate-fade-in animate-delay-100">
        <h2 className="text-2xl md:text-3xl font-bold gradient-heading mb-8 text-center">Founding Members</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <Card className="card-hover border-primary/10">
            <CardContent className="p-6 text-center">
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/10 shadow-md">
                <Image src="/images/gretchen-ohara.jpeg" alt="Gretchen O'Hara" fill className="object-cover" />
              </div>
              <h3 className="font-semibold text-lg text-primary mb-2">Gretchen O'Hara</h3>
              <p className="text-sm text-gray-600">
                Splunk | Channel Chief, Vice President Worldwide Channels & Alliances
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover border-primary/10">
            <CardContent className="p-6 text-center">
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/10 shadow-md">
                <Image
                  src="/images/chaitra-vedullapalli.webp"
                  alt="Chaitra Vedullapalli"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg text-primary mb-2">Chaitra Vedullapalli</h3>
              <p className="text-sm text-gray-600">Women in Cloud | Co-Founder | President</p>
            </CardContent>
          </Card>

          <Card className="card-hover border-primary/10">
            <CardContent className="p-6 text-center">
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/10 shadow-md">
                <Image src="/images/karen-fassio.jpeg" alt="Karen Fassio" fill className="object-cover" />
              </div>
              <h3 className="font-semibold text-lg text-primary mb-2">Karen Fassio</h3>
              <p className="text-sm text-gray-600">Ex-Microsoft | WIC Cofounder</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="section-container p-8 animate-fade-in animate-delay-200">
        <h2 className="text-2xl md:text-3xl font-bold gradient-heading mb-8 text-center">Events</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="card-hover border-primary/10">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Calendar size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg">WIC x INDIA Activations</h3>
              </div>
              <p className="text-gray-700">
                Over 1000 women getting ready for DevSecOps Roles, 100+ women ready as executive leaders.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="text-sm text-gray-500">Starts November</span>
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover border-primary/10">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Users size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg">WIC x Annual Tour</h3>
              </div>
              <p className="text-gray-700">
                The event theme, "Collective Contribution," reflects a dynamic shift toward creating a more inclusive
                and equitable technology industry by uniting Cloud and AI leadership for global equity.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="text-sm text-gray-500">Starts October</span>
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover border-primary/10">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Award size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg">WIC x Inspire</h3>
              </div>
              <p className="text-gray-700">
                A transformative AI-Fueled Go-To-Market Summit for tech founders and leaders to explore advanced GTM
                strategies, accelerate momentum with cloud hyperscalers, and forge impactful partnerships.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="text-sm text-gray-500">Starts September</span>
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover border-primary/10">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Calendar size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg">WIC x ESG</h3>
              </div>
              <p className="text-gray-700">
                Unleashing ESG Leadership, AI Powered Innovation, and Unlocking Community Partnerships. From boardrooms
                to shopping carts, stakeholders are prioritizing ESG criteria to guide their investment decisions.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="text-sm text-gray-500">Starts December</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="section-container p-8 animate-fade-in animate-delay-400">
        <h2 className="text-2xl md:text-3xl font-bold gradient-heading mb-8 text-center">Community Partners</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          <div className="text-center card-hover p-4 rounded-xl">
            <div className="relative w-32 h-24 mx-auto mb-4 overflow-hidden border border-primary/10 shadow-sm">
              <Image src="/images/cp1.png" alt="Voices For Innovation" fill className="object-contain" />
            </div>
            <p className="text-sm font-medium text-primary">Voices For Innovation</p>
          </div>

          <div className="text-center card-hover p-4 rounded-xl">
            <div className="relative w-32 h-24 mx-auto mb-4 overflow-hidden border border-primary/10 shadow-sm">
              <Image src="/images/cp2.png" alt="Microsoft Alumni Network" fill className="object-contain" />
            </div>
            <p className="text-sm font-medium text-primary">Microsoft Alumni Network</p>
          </div>

          <div className="text-center card-hover p-4 rounded-xl">
            <div className="relative w-32 h-24 mx-auto mb-4 overflow-hidden border border-primary/10 shadow-sm">
              <Image src="/images/cp3.png" alt="Women In Alliances" fill className="object-contain" />
            </div>
            <p className="text-sm font-medium text-primary">Women In Alliances</p>
          </div>

          <div className="text-center card-hover p-4 rounded-xl">
            <div className="relative w-32 h-24 mx-auto mb-4 overflow-hidden border border-primary/10 shadow-sm">
              <Image src="/images/cp4.png" alt="Women Of The Channel" fill className="object-contain" />
            </div>
            <p className="text-sm font-medium text-primary">Women Of The Channel</p>
          </div>

          <div className="text-center card-hover p-4 rounded-xl">
            <div className="relative w-32 h-24 mx-auto mb-4 overflow-hidden border border-primary/10 shadow-sm">
              <Image src="/images/cp5.png" alt="Invest Ottawa" fill className="object-contain" />
            </div>
            <p className="text-sm font-medium text-primary">Invest Ottawa</p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-primary to-accent text-white rounded-xl p-8 shadow-lg text-center animate-fade-in animate-delay-500">
        <h2 className="text-2xl font-semibold mb-4">More about Women in Cloud</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          To learn more about Women in Cloud, or to be a part of its Insider Circle, visit the official website:
        </p>
        <Button variant="secondary" size="lg" asChild>
          <Link href="https://womenincloud.com/" target="_blank" rel="noopener noreferrer" className="gap-2">
            Women in Cloud <ExternalLink size={16} />
          </Link>
        </Button>
      </section>
    </div >
  )
}
