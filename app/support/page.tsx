"use client"

import { useEffect } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export default function Support() {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="space-y-10">
      <section className="section-container p-8 animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold gradient-heading mb-8 text-center">Frequently Asked Questions</h1>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border border-primary/10 rounded-lg mb-4 overflow-hidden shadow-sm">
            <AccordionTrigger className="text-lg font-medium px-6 py-4 hover:bg-primary/5 transition-colors">
              What is the Women in Cloud community?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 px-6 py-4 bg-primary/5">
              <p>
                The Women in Cloud community is a global network of women professionals in the tech industry that aims
                to support, mentor, and empower women through various initiatives, events, and opportunities.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border border-primary/10 rounded-lg mb-4 overflow-hidden shadow-sm">
            <AccordionTrigger className="text-lg font-medium px-6 py-4 hover:bg-primary/5 transition-colors">
              How can I join the Women in Cloud community?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 px-6 py-4 bg-primary/5">
              <p>
                You can join the Women in Cloud community by visiting their official website at womenincloud.com and
                signing up for membership. There are various membership options available depending on your interests
                and goals.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border border-primary/10 rounded-lg mb-4 overflow-hidden shadow-sm">
            <AccordionTrigger className="text-lg font-medium px-6 py-4 hover:bg-primary/5 transition-colors">
              What benefits do I receive as a member of the Women in Cloud community?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 px-6 py-4 bg-primary/5">
              <p>
                Members gain access to mentorship programs, networking opportunities, professional development
                resources, exclusive events, and a supportive community of like-minded women in tech.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border border-primary/10 rounded-lg mb-4 overflow-hidden shadow-sm">
            <AccordionTrigger className="text-lg font-medium px-6 py-4 hover:bg-primary/5 transition-colors">
              How to contact Women in Cloud?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 px-6 py-4 bg-primary/5">
              <p>
                You can contact us directly at our official email address:{" "}
                <span className="font-medium text-primary">wic_rvinsidercircle@rvce.edu.in</span>. We'd love to hear
                from you!
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border border-primary/10 rounded-lg mb-4 overflow-hidden shadow-sm">
            <AccordionTrigger className="text-lg font-medium px-6 py-4 hover:bg-primary/5 transition-colors">
              What is the WIC COE Program?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 px-6 py-4 bg-primary/5">
              <p>
                The WIC COE (Center of Excellence) Program is a specialized internship program designed to provide
                hands-on training in cloud computing and DevOps technologies. It aims to equip participants with
                industry-relevant skills and practical experience.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="border border-primary/10 rounded-lg mb-4 overflow-hidden shadow-sm">
            <AccordionTrigger className="text-lg font-medium px-6 py-4 hover:bg-primary/5 transition-colors">
              How long is the internship program?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 px-6 py-4 bg-primary/5">
              <p>
                The internship program typically runs for 4-6 weeks, with a combination of training sessions and
                hands-on project work.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="border border-primary/10 rounded-lg mb-4 overflow-hidden shadow-sm">
            <AccordionTrigger className="text-lg font-medium px-6 py-4 hover:bg-primary/5 transition-colors">
              What are the eligibility criteria for the internship?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 px-6 py-4 bg-primary/5">
              <p>
                The internship is open to undergraduate and postgraduate engineering students with an interest in cloud
                computing and DevOps. Basic programming knowledge is recommended but not mandatory.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8" className="border border-primary/10 rounded-lg mb-4 overflow-hidden shadow-sm">
            <AccordionTrigger className="text-lg font-medium px-6 py-4 hover:bg-primary/5 transition-colors">
              Will I receive a certificate after completing the internship?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 px-6 py-4 bg-primary/5">
              <p>
                Yes, upon successful completion of the internship program, participants will receive an
                industry-recognized certificate that validates their skills and experience in cloud computing and
                DevOps.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section className="bg-gradient-to-r from-primary to-accent text-white rounded-xl p-8 shadow-lg animate-fade-in animate-delay-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Still Have Questions?</h2>
          <p className="mb-6">
            If you couldn't find the answer to your question in our FAQ section, please feel free to contact us
            directly. Our team is always ready to help!
          </p>

          {/* CORRECTED: Combined text and icon for proper horizontal display */}
          <div className="inline-flex flex-col sm:flex-row items-center justify-center p-3 sm:px-6 bg-white/20 rounded-lg border-2 border-white/50 mx-auto text-center sm:text-left space-y-2 sm:space-y-0 sm:space-x-3">
            {/* Icon */}
            <Mail size={20} className="text-white flex-shrink-0" />

            {/* Text */}
            <p className="text-sm sm:text-base break-words">
              Contact:{" "}
              <a
                href="mailto:wic_rvinsidercircle@rvce.edu.in"
                className="hover:underline italic"
              >
                wic_rvinsidercircle@rvce.edu.in
              </a>
            </p>
          </div>
        </div>
      </section >
    </div >
  )
}
