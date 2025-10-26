"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Clock, Laptop, ExternalLink, Server, Database, Code, Cloud } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Internship() {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="space-y-12 pb-12">

      {/* ========================================================= */}
      {/* SECTION 1: HERO/OVERVIEW CARD (Enhanced Shadow & Hover)   */}
      {/* ========================================================= */}
      <section className="p-6 md:p-10 rounded-2xl shadow-2xl bg-white/70 backdrop-blur-sm transition duration-500 hover:shadow-primary/40">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-start gap-4 mb-2">
              <h1 className="text-1l md:text-4xl font-extrabold text-primary leading-tight">
                Women in Cloud Certified Internship UG/PG 2024
              </h1>
              <div className="relative h-16 w-16 flex-shrink-0">
                {/* Ensure /images/wic-logo-white.png exists or use a local component */}
                <Image src="/images/wic-logo-white.png" alt="Women in Cloud Logo" fill className="object-contain" />
              </div>
            </div>
            <p className="text-lg text-gray-700 border-l-4 border-accent pl-4 italic">
              Become a <strong>Cloud & DevOps infrastructure design expert</strong>. Gain hands-on experience through real-world, industry-certified projects.
            </p>

            {/* Key Information Badges */}
            <div className="flex flex-wrap gap-3 text-sm text-gray-600 pt-2">
              <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 border border-blue-200">
                <Clock size={14} className="text-blue-600" /> 4-8 Weeks Program
              </span>
              <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 border border-blue-200">
                <Laptop size={14} className="text-blue-600" /> UG/PG Engineering Students
              </span>
              <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 border border-blue-200">
                <Cloud size={14} className="text-blue-600" /> Cloud & DevOps Focus
              </span>
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              <Button asChild className="shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-[1.02]">
                <a href="https://pages.razorpay.com/pl_OnpBI0F6P6HSGj/view" target="_blank" rel="noopener noreferrer">
                  Apply Now
                </a>
              </Button>
              <Button variant="outline" className="flex items-center gap-2 shadow-md hover:shadow-lg transition duration-300 transform hover:translate-y-[-2px]" asChild>
                <a href="/documents/WiC Internships.pdf" download="WiC Internships.pdf">
                  <Download size={16} /> Download Syllabus
                </a>
              </Button>
            </div>
          </div>

          <div className="relative h-[250px] md:h-[300px] rounded-lg overflow-hidden shadow-2xl bg-gray-100 lg:col-span-1">
            {/* Placeholder image needs to be replaced with actual image */}
            <Image src="/placeholder.svg?height=300&width=500" alt="Cloud and DevOps" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* --- */}

      {/* ========================================================= */}
      {/* SECTION 2: REGISTRATION PROCESS (3D Lift/Shadows)         */}
      {/* ========================================================= */}
      <section className="p-6">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">Registration Process</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* STEP 1 */}
          <Card className="border-t-4 border-primary/50 shadow-lg hover:shadow-xl transition duration-500 transform hover:scale-[1.02] hover:-translate-y-1 ease-in-out">
            <CardContent className="p-6">
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-xl ring-4 ring-primary/20">
                  1
                </div>
              </div>
              <h3 className="font-bold text-xl text-center mb-2 text-primary">Submit Application</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Complete your registration and payment using the Razorpay link provided ahead.</li>
              </ul>
            </CardContent>
          </Card>

          {/* STEP 2 */}
          <Card className="border-t-4 border-accent/50 shadow-lg hover:shadow-xl transition duration-500 transform hover:scale-[1.02] hover:-translate-y-1 ease-in-out">
            <CardContent className="p-6">
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-white font-bold text-xl ring-4 ring-accent/20">
                  2
                </div>
              </div>
              <h3 className="font-bold text-xl text-center mb-2 text-accent">Training Period</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Undergo intensive training sessions and gain hands-on experience in M1 & M2 modules.</li>
              </ul>
            </CardContent>
          </Card>

          {/* STEP 3 */}
          <Card className="border-t-4 border-primary/50 shadow-lg hover:shadow-xl transition duration-500 transform hover:scale-[1.02] hover:-translate-y-1 ease-in-out">
            <CardContent className="p-6">
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-xl ring-4 ring-primary/20">
                  3
                </div>
              </div>
              <h3 className="font-bold text-xl text-center mb-2 text-primary">Internship & Certification</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Select projects after training and begin the internship within 1-2 weeks for final certification.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* --- */}

      {/* ========================================================= */}
      {/* SECTION 3: SKILLS COVERED (Clean separation, good padding)*/}
      {/* ========================================================= */}
      <section className="p-6 rounded-2xl bg-gray-50 shadow-inner">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">In-Depth Skills Covered</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md border-t-4 border-primary hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center gap-3">
              <Cloud size={24} className="text-primary" /> M1. Cloud Native DevOps
            </h3>
            <ul className="list-disc pl-8 space-y-2 text-gray-700">
              <li>Application development & <strong>GitHub </strong>workflow</li>
              <li><strong>Docker </strong>(Containerization, Registries, Static hosting)</li>
              <li><strong>Kubernetes </strong> (Objects, Deployment, Helm Chart Manager)</li>
              <li><strong>Azure Cloud </strong>hosting of dynamic applications</li>
            </ul>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md border-t-4 border-accent hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-semibold text-accent mb-4 flex items-center gap-3">
              <Code size={24} className="text-accent" /> M2. DevSecOps
            </h3>
            <ul className="list-disc pl-8 space-y-2 text-gray-700">
              <li>Application testing using <strong>open source tools </strong>(Jenkins/SonarQube/GitLab)</li>
              <li>Security integration in <strong>CI/CD pipeline</strong></li>
              <li>Automated <strong>Cloud Security Testing</strong> with Metasploit</li>
              <li>Exploring Security of Cloud-Based <strong>Containers</strong></li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- */}

      {/* ========================================================= */}
      {/* SECTION 4: FACILITY & INFRASTRUCTURE (Fixed BG)           */}
      {/* ========================================================= */}
      <section className="rounded-2xl overflow-hidden shadow-2xl">
        {/* Background is now a light shade, giving contrast to the blue section below */}
        <div className="bg-gray-50 p-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary border-b-2 border-primary/20 pb-2">Facility and Infrastructure</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {/* Infra Card 1 */}
            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.05] border-t-4 border-primary">
              <div className="mx-auto w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-4 ring-2 ring-primary/20">
                {/* Icon Color: text-primary */}
                <Cloud size={24} className="text-primary" />
              </div>
              <h3 className="font-extrabold mb-1 text-lg text-primary">Cloud Platforms</h3>
              <p className="text-sm text-gray-600">Microsoft Azure, IBM Cloud</p>
            </div>

            {/* Infra Card 2 */}
            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.05] border-t-4 border-accent">
              <div className="mx-auto w-12 h-12 flex items-center justify-center bg-accent/10 rounded-full mb-4 ring-2 ring-accent/20">
                {/* Icon Color: text-accent */}
                <Database size={24} className="text-accent" />
              </div>
              <h3 className="font-extrabold mb-1 text-lg text-accent">Databases</h3>
              <p className="text-sm text-gray-600">MongoDB, ELK Cloud</p>
            </div>

            {/* Infra Card 3 */}
            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.05] border-t-4 border-primary">
              <div className="mx-auto w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-4 ring-2 ring-primary/20">
                {/* Icon Color: text-primary */}
                <Code size={24} className="text-primary" />
              </div>
              <h3 className="font-extrabold mb-1 text-lg text-primary">Development</h3>
              <p className="text-sm text-gray-600">Docker, Python Flask, GitHub</p>
            </div>

            {/* Infra Card 4 */}
            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.05] border-t-4 border-accent">
              <div className="mx-auto w-12 h-12 flex items-center justify-center bg-accent/10 rounded-full mb-4 ring-2 ring-accent/20">
                {/* Icon Color: text-accent */}
                <Server size={24} className="text-accent" />
              </div>
              <h3 className="font-extrabold mb-1 text-lg text-accent">Hardware</h3>
              <p className="text-sm text-gray-600">Data Center Rack Server</p>
            </div>
          </div>

          <div className="mt-10 text-center max-w-3xl mx-auto">
            <p className="text-gray-700 italic text-lg border-t border-gray-300 pt-4">
              Our state-of-the-art infrastructure provides students with hands-on experience using industry-standard tools and technologies.
            </p>
          </div>
        </div>
      </section>
      {/* --- */}

      {/* ========================================================= */}
      {/* SECTION 5: PROGRAM FEES (Vibrant Gradient and Focus)      */}
      {/* ========================================================= */}
      <section className="bg-gradient-to-r from-accent to-primary text-white rounded-2xl p-8 shadow-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Program Fees</h2>

        <div className="bg-white/10 p-6 rounded-xl border border-white/30 shadow-inner max-w-md mx-auto mb-6">
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li className="font-bold flex justify-between">
              <span>Total Fee (Training + Internship):</span>
              <span className="text-yellow-300">Rs 3000</span>
            </li>
            <li className="font-bold flex justify-between border-t border-white/20 pt-2">
              <span>Total Payable (incl. 18% GST):</span>
              <span className="text-l text-white">Rs. 3540/-</span>
            </li>
          </ul>
        </div>

        <p className="mb-6 text-center text-white/90 max-w-3xl mx-auto">
          This fee includes access to all the training sessions, project and internship completion, and the official<strong> Women in Cloud certification</strong> upon successful completion.
        </p>

        <div className="text-center">
          <Link
            href="https://pages.razorpay.com/pl_OnpBI0F6P6HSGj/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-yellow-400 text-gray-900 font-bold text-lg px-8 py-3 shadow-xl hover:bg-yellow-300 transition duration-300 transform hover:scale-105">
              Secure Your Spot Now <ExternalLink size={18} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}