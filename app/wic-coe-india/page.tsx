"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

export default function WicCoeIndia() {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="space-y-10">
      <section className="section-container p-8 animate-fade-in">
        <h1 className="text-3xl md:text-3xl font-bold gradient-heading mb-8 text-center">
          WIC Center of Excellence India
        </h1>

        <div className="bg-white rounded-lg p-6 shadow-md mb-10">
          <p className="text-gray-700 mb-4">
            The Women in Cloud Center of Excellence in India at RV College of Engineering® in association with Women in
            Cloud (WIC), USA extends the benefits of the CoE to beneficiaries across Karnataka state. The objectives
            align with Engineering (R&D) policy 2021, including innovation lab programs to encourage open innovation,
            boost the Engineering R&D ecosystem, and provide recruitment assistance.
          </p>
          <p className="text-gray-700">
            WIC is a community-led economic development organization taking action to generate $1B in net new global
            economic access for women entrepreneurs by 2030 through partnerships with corporations, community leaders,
            and policymakers.
          </p>
        </div>

        <div className="space-y-12">
          {/* Core Team Section */}
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-6 text-center">Core Team of Women in Cloud India</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Dr. G S Mamatha */}
              <Card className="overflow-hidden border-primary/10">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 sm:grid-cols-3">
                    <div className="relative h-[150px] sm:h-full">
                      <Image src="/images/mamatha-gs-new2.png" alt="Dr. G S Mamatha" fill className="object-cover" />
                    </div>
                    <div className="col-span-2 p-4">
                      <h3 className="font-semibold text-md text-primary mb-1">Dr. G S Mamatha</h3>
                      <p className="text-xs text-gray-500 mb-3">mamathags@rvce.edu.in</p>
                      <div className="space-y-2">
                        <p className="font-medium text-primary text-sm">Main Coordinator</p>
                        <p className="text-gray-700 text-sm">Professor & Associate Dean (PG Studies), ISE</p>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <Link
                          href="https://rvce.edu.in/ise-mamatha"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline inline-flex items-center gap-1 text-sm"
                        >
                          Faculty Profile <ExternalLink size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Dr. B M Sagar */}
              <Card className="overflow-hidden border-primary/10">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 sm:grid-cols-3">
                    <div className="relative h-[150px] sm:h-full">
                      <Image src="/images/bm-sagar-new2.jpeg" alt="Dr. B M Sagar" fill className="object-cover" />
                    </div>
                    <div className="col-span-2 p-4">
                      <h3 className="font-semibold text-md text-primary mb-1">Dr. B M Sagar</h3>
                      <p className="text-xs text-gray-500 mb-3">sagarbm@rvce.edu.in</p>
                      <div className="space-y-2">
                        <p className="font-medium text-primary text-sm">Faculty Coordinator</p>
                        <p className="text-gray-700 text-sm">Professor & HoD, ISE</p>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <Link
                          href="https://rvce.edu.in/ise-sagar"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline inline-flex items-center gap-1 text-sm"
                        >
                          Faculty Profile <ExternalLink size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Dr. Usha J */}
              <Card className="overflow-hidden border-primary/10">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 sm:grid-cols-3">
                    <div className="relative h-[150px] sm:h-full">
                      <Image src="/images/usha-j-new.jpeg" alt="Dr. Usha J" fill className="object-cover" />
                    </div>
                    <div className="col-span-2 p-4">
                      <h3 className="font-semibold text-md text-primary mb-1">Dr. Usha J</h3>
                      <p className="text-xs text-gray-500 mb-3">ushaj@rvce.edu.in</p>
                      <div className="space-y-2">
                        <p className="font-medium text-primary text-sm">Faculty Coordinator</p>
                        <p className="text-gray-700 text-sm">Professor, MCA</p>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <Link
                          href="https://rvce.edu.in/mca-faculty-uj"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline inline-flex items-center gap-1 text-sm"
                        >
                          Faculty Profile <ExternalLink size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {/* Prof. Rashmi R */}
              <Card className=" w-[280px] overflow-hidden border-primary/10 max-w-sm mx-auto">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 sm:grid-cols-3">
                    <div className="relative h-[100px] sm:h-full">
                      <Image src="/images/rashmi-r-new.png" alt="Prof. Rashmi R" fill className="object-cover" />
                    </div>
                    <div className="col-span-2 p-2">
                      <h3 className="font-semibold text-xs text-primary mb-1">Prof. Rashmi R</h3>
                      <p className="text-xs text-gray-500 mb-2">rashmir@rvce.edu.in</p>
                      <div className="space-y-1">
                        <p className="font-medium text-primary text-xs">Faculty Coordinator</p>
                        <p className="text-gray-700 text-xs">Assistant Professor, ISE</p>
                      </div>
                      <div className="mt-2 pt-2 border-t border-gray-100">
                        <Link
                          href="https://rvce.edu.in/ise-rr-se"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline inline-flex items-center gap-1 text-xs"
                        >
                          Faculty Profile <ExternalLink size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Dr. Ashwini K.B */}
              <Card className="w-[280px] overflow-hidden border-primary/10 max-w-sm mx-auto">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 sm:grid-cols-3">
                    <div className="relative h-[100px] sm:h-full">
                      <Image src="/images/ashwini-kb.png" alt="Dr. Ashwini K.B" fill className="object-cover" />
                    </div>
                    <div className="col-span-2 p-2">
                      <h3 className="font-semibold text-xs text-primary mb-1">Dr. Ashwini K.B</h3>
                      <p className="text-xs text-gray-500 mb-2">ashwinikb@rvce.edu.in</p>
                      <div className="space-y-1">
                        <p className="font-medium text-primary text-xs">Faculty Coordinator</p>
                        <p className="text-gray-700 text-xs">Associate Professor, ISE</p>
                      </div>
                      <div className="mt-2 pt-2 border-t border-gray-100">
                        <Link
                          href="https://rvce.edu.in/ise-faculty-akb"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline inline-flex items-center gap-1 text-xs"
                        >
                          Faculty Profile <ExternalLink size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* B K Srinivas */}
              <Card className="w-[280px] overflow-hidden border-primary/10 max-w-sm mx-auto">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 sm:grid-cols-3">
                    <div className="relative h-[100px] sm:h-full">
                      <Image src="/images/bk-srinivas-new.png" alt="B K Srinivas" fill className="object-cover" />
                    </div>
                    <div className="col-span-2 p-2">
                      <h3 className="font-semibold text-xs text-primary mb-1">B K Srinivas</h3>
                      <p className="text-xs text-gray-500 mb-2">bksrinivas@rvce.edu.in</p>
                      <div className="space-y-1">
                        <p className="font-medium text-primary text-xs">Faculty Coordinator</p>
                        <p className="text-gray-700 text-xs">Assistant Professor, ISE</p>
                      </div>
                      <div className="mt-2 pt-2 border-t border-gray-100">
                        <Link
                          href="https://rvce.edu.in/ise-bks"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline inline-flex items-center gap-1 text-xs"
                        >
                          Faculty Profile <ExternalLink size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Dr. Ashok Kumar A R */}
              <Card className="w-[280px] overflow-hidden border-primary/10 max-w-sm mx-auto">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 sm:grid-cols-3">
                    <div className="relative h-[100px] sm:h-full">
                      <Image
                        src="/images/ashok-kumar-new.jpeg"
                        alt="Dr. Ashok Kumar A R"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="col-span-2 p-2">
                      <h3 className="font-semibold text-xs text-primary mb-1">Dr. Ashok Kumar A R</h3>
                      <p className="text-xs text-gray-500 mb-2">ashokkumarar@rvce.edu.in</p>
                      <div className="space-y-1">
                        <p className="font-medium text-primary text-xs">Faculty Coordinator</p>
                        <p className="text-gray-700 text-xs">Associate Professor, CSE</p>
                      </div>
                      <div className="mt-2 pt-2 border-t border-gray-100">
                        <Link
                          href="https://www.rvce.edu.in/cs-ashokkumar"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline inline-flex items-center gap-1 text-xs"
                        >
                          Faculty Profile <ExternalLink size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Support Team Section */}
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-6 text-center">
              Support Team of Women in Cloud India
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-primary to-accent text-white">
                    <th className="border border-primary/20 p-3 text-left">Name</th>
                    <th className="border border-primary/20 p-3 text-left">Designation</th>
                    <th className="border border-primary/20 p-3 text-left">Email</th>
                    <th className="border border-primary/20 p-3 text-left">Profile</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-primary/5 transition-colors">
                    <td className="border border-primary/20 p-3 font-medium">Dr. K N Subramanya</td>
                    <td className="border border-primary/20 p-3">Principal</td>
                    <td className="border border-primary/20 p-3">principal@rvce.edu.in</td>
                    <td className="border border-primary/20 p-3">
                      <Link
                        href="https://rvce.edu.in/im-knsubramanya"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline inline-flex items-center gap-1 text-sm"
                      >
                        View Profile <ExternalLink size={14} />
                      </Link>
                    </td>
                  </tr>
                  <tr className="bg-primary/5 hover:bg-primary/10 transition-colors">
                    <td className="border border-primary/20 p-3 font-medium">Dr. Geetha K S</td>
                    <td className="border border-primary/20 p-3">Vice Principal</td>
                    <td className="border border-primary/20 p-3">geethaks@rvce.edu.in</td>
                    <td className="border border-primary/20 p-3">
                      <Link
                        href="https://rvce.edu.in/ec-geetha"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline inline-flex items-center gap-1 text-sm"
                      >
                        View Profile <ExternalLink size={14} />
                      </Link>
                    </td>
                  </tr>
                  <tr className="hover:bg-primary/5 transition-colors">
                    <td className="border border-primary/20 p-3 font-medium">Dr. Ramakanth Kumar P</td>
                    <td className="border border-primary/20 p-3">Professor & HoD, CSE</td>
                    <td className="border border-primary/20 p-3">ramakanthkp@rvce.edu.in</td>
                    <td className="border border-primary/20 p-3">
                      <Link
                        href="https://rvce.edu.in/ise-rmp-it"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline inline-flex items-center gap-1 text-sm"
                      >
                        View Profile <ExternalLink size={14} />
                      </Link>
                    </td>
                  </tr>
                  <tr className="bg-primary/5 hover:bg-primary/10 transition-colors">
                    <td className="border border-primary/20 p-3 font-medium">Dr. Andhe Dharani</td>
                    <td className="border border-primary/20 p-3">Professor & HoD, MCA</td>
                    <td className="border border-primary/20 p-3">andhedharani@rvce.edu.in</td>
                    <td className="border border-primary/20 p-3">
                      <Link
                        href="https://rvce.edu.in/mca-faculty-ad"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline inline-flex items-center gap-1 text-sm"
                      >
                        View Profile <ExternalLink size={14} />
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}