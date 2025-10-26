"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Download, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function InternshipSyllabus() {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="space-y-8">
      <section className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-primary">Industry Certified Internship</h1>
          <Button variant="outline" className="flex items-center gap-2" asChild>
            <a href="/documents/wic-internship-syllabus.pdf" download>
              <Download size={16} /> Download Syllabus
            </a>
          </Button>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-primary mb-4">Women in Cloud Center of Excellence in India</h2>
          <p className="text-gray-700 mb-4">Internship Modules for Engineering students</p>
        </div>

        <Card className="mb-8">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-primary mb-4">M1. Cloud Native DevOps</h3>
            <ul className="list-disc pl-8 space-y-2">
              <li>Application development</li>
              <li>GitHub push and pull request</li>
              <li>Docker - Docker hub</li>
              <li>Building a Container</li>
              <li>Container Registries</li>
              <li>Containerization of application</li>
              <li>Static application hosting using docker</li>
              <li>Working with Kubernetes Objects</li>
              <li>A Kubernetes Package Manager- Installing Helm, Helm Chart, Listing Helm Releases</li>
              <li>Kubernetes tool- creating CI/CD pipelines or deployment</li>
              <li>Azure Cloud hosting of dynamic application</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-primary mb-4">M2. DevSecOps</h3>
            <ul className="list-disc pl-8 space-y-2">
              <li>Application testing using open source tools in cloud (Jenkins/SonarQube/GitLab etc)</li>
              <li>Security in CI/CD pipeline</li>
              <li>Automated Cloud Security Testing with Metasploit</li>
              <li>Cloud-Based Network Security Testing</li>
              <li>Exploring Security of Cloud-Based Containers</li>
            </ul>
          </CardContent>
        </Card>

        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <p className="text-gray-700 font-medium mb-2">Note:</p>
          <p className="text-gray-700">
            Students have to carry out projects/do paper publications based on the technical knowledge gained on above
            topics mandatorily. For Project topic selection flexibility is given.
          </p>
        </div>
      </section>

      <section className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-primary mb-4">For Further Information</h2>
        <div className="space-y-2">
          <p className="font-medium">Dr. Mamatha G S</p>
          <p>Professor and Associate Dean – PG Studies</p>
          <p>Department of Information Science and Engineering</p>
          <p>Email id: mamathags@rvce.edu.in</p>
          <p>Mob: 9886311120</p>
        </div>
      </section>

      <div className="flex justify-start">
        <Button variant="outline" asChild>
          <Link href="/internship" className="flex items-center gap-2">
            <ArrowLeft size={16} /> Back to Internship
          </Link>
        </Button>
      </div>
    </div>
  )
}
