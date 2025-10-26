"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Calendar, Award, Users, Lightbulb, Flag, Sparkles, Podcast, Code, ChevronLeft, ChevronRight } from "lucide-react"

// --- Updated EventImageCarousel Component ---
interface EventImageCarouselProps {
  imageSrcs: string[]
  altText: string
}

const EventImageCarousel: React.FC<EventImageCarouselProps> = ({ imageSrcs, altText }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!imageSrcs || imageSrcs.length === 0) {
    return (
      <div className="relative h-[200px] md:h-full bg-gray-100 flex items-center justify-center text-gray-400 text-center p-4">
        No images available for this event.
      </div>
    )
  }

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imageSrcs.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imageSrcs.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    // Set a distinct background color (bg-blue-200) so you don't see white space if the images fail.
    <div className="relative h-[200px] md:h-auto overflow-hidden group bg-blue-200">
      <Image
        // IMPORTANT: I'm now using a single static placeholder path for all images. 
        // You MUST replace this path ('/placeholder-image-for-carousel.png') 
        // with the actual paths to your event images for this to work properly.
        src={imageSrcs[currentImageIndex]}
        alt={`${altText} - Image ${currentImageIndex + 1}`}
        fill
        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        // Add unoptimized prop for development if you're hitting issues with image optimization
        unoptimized
        onError={(e) => {
          // Fallback log in case the static image also fails.
          console.error(`Image failed to load at index ${currentImageIndex}: ${imageSrcs[currentImageIndex]}`);
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

      {/* 🌟 VISUAL CONFIRMATION TEXT OVERLAY 🌟 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-center z-10 p-4 rounded-lg bg-black/40">
        <p className="text-xl">{altText}</p>
        <p className="text-sm mt-1">
          Image {currentImageIndex + 1} of {imageSrcs.length}
        </p>
        <p className="text-xs mt-1">
          (Click arrows to cycle)
        </p>
      </div>

      {imageSrcs.length > 1 && (
        <>
          {/* Navigation Arrows (Highly visible) */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary text-white z-20 hover:bg-primary/80 transition-all duration-300"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary text-white z-20 hover:bg-primary/80 transition-all duration-300"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>

          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-1 z-20">
            {imageSrcs.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`h-2.5 w-2.5 rounded-full ${idx === currentImageIndex ? 'bg-white' : 'bg-gray-400/70'
                  } transition-colors duration-300`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
// --- End Updated EventImageCarousel Component ---


export default function Events() {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // --- Image Data for each event ---
  // NOTE: I'm using unique placeholder names to ensure the browser treats them as different images, 
  // which helps confirm the carousel is changing slides. 
  // Replace these with your actual image paths!
  const eventImages = {
    salutingHeroes: [
      "/images/events/saluting-heroes-1.jpg",
      "/images/events/saluting-heroes-2.jpg",
      "/images/events/saluting-heroes-3.jpg",
    ],
    echoesOfImpact: [
      "/images/events/podcast-1.jpg",
      "/images/events/podcast-2.jpg",
    ],
    thinkSprint: [
      "/images/events/thinksprint-1.jpg",
      "/images/events/thinksprint-2.jpg",
      "/images/events/thinksprint-3.jpg",
      "/images/events/thinksprint-4.jpg",
    ],
    womenAchievers: [
      "/images/events/women-achievers-1.jpg",
      "/images/events/women-achievers-2.jpg",
    ],
    catalyst: [
      "/images/events/catalyst-1.jpg",
      "/images/events/catalyst-2.jpg",
      "/images/events/catalyst-3.jpg",
    ],
    codeWithCoffee: [
      "/images/events/code-coffee-1.jpg",
      "/images/events/code-coffee-2.jpg",
    ],
    clubShowcase: [
      "/images/events/showcase-1.jpg",
      "/images/events/showcase-2.jpg",
      "/images/events/showcase-3.jpg",
    ],
    digitalSkills: [
      "/images/events/skills-1.jpg",
      "/images/events/skills-2.jpg",
      "/images/events/skills-3.jpg",
    ],
  }
  // --- End Image Data ---


  return (
    <div className="space-y-10">
      <section className="section-container p-8 animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold gradient-heading mb-8 text-center">Our Events</h1>
        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-10">
          Explore the impactful events organized by RVCE Women in Cloud, designed to inspire, educate, and empower our
          community through innovation, outreach, and skill development.
        </p>

        {/* 1. Saluting Our Heroes – A Tribute to the Armed Forces */}
        <Card className="mb-10 overflow-hidden card-hover border-primary/10 animate-fade-in animate-delay-100">
          <div className="bg-gradient-to-r from-primary to-accent h-1.5" />
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="relative h-[200px] md:h-auto">
                <EventImageCarousel
                  imageSrcs={eventImages.salutingHeroes}
                  altText="Saluting Our Heroes"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 text-sm font-medium text-primary flex items-center gap-1.5 z-20">
                  <Calendar size={14} />
                  <span>November 2024</span>
                </div>
              </div>

              <div className="col-span-2 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Flag size={20} className="text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold text-primary">
                    Saluting Our Heroes – A Tribute to the Armed Forces
                  </h2>
                </div>

                <p className="text-gray-700 mb-4">
                  Excited to share highlights from our first event on <strong>November 5, 2024</strong>! We had the privilege of engaging with young minds at <strong>Radhakrishna School</strong>, offering insights into the diverse and impactful career opportunities within the <strong>Indian Armed Forces</strong>.
                </p>

                <p className="text-gray-700">
                  The energy in the room was inspiring as students explored the paths they can pursue to serve and protect our nation. We wrapped up the session on a truly patriotic note, leaving everyone with a sense of pride and purpose. Here’s to sparking dreams and nurturing future leaders! 🇮🇳
                </p>
                <div className="mt-4 text-sm text-gray-500">
                  <strong className="text-gray-800">Topics:</strong> <span className="text-gray-800">Inspiration</span> | <span className="text-gray-800">Indian Armed Forces</span> | <span className="text-gray-800">Youth Empowerment</span> | <span className="text-gray-800">Patriotism</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 2. The Echoes of Impact Podcast is Live! */}
        <Card className="mb-10 overflow-hidden card-hover border-primary/10 animate-fade-in animate-delay-200">
          <div className="bg-gradient-to-r from-primary to-accent h-1.5" />
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="relative h-[200px] md:h-auto">
                <EventImageCarousel
                  imageSrcs={eventImages.echoesOfImpact}
                  altText="Echoes of Impact Podcast"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 text-sm font-medium text-primary flex items-center gap-1.5 z-20">
                  <Calendar size={14} />
                  <span>Latest Release</span>
                </div>
              </div>

              <div className="col-span-2 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Podcast size={20} className="text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold text-primary">
                    The Echoes of Impact Podcast is Live! 🎙️
                  </h2>
                </div>

                <p className="text-gray-700 mb-4">
                  We are thrilled to announce the launch of <strong>The Echoes of Impact Podcast</strong>—a dynamic platform dedicated to exploring <strong>stories, ideas, and insights that spark innovation and empower changemakers</strong> within the cloud and tech communities.
                </p>

                <p className="text-gray-700 mb-6">
                  The inaugural episode features <strong>Chaitra Vedullapalli</strong>, Co-Founder of Women in Cloud, USA, where we delve into her inspiring journey, the transformative power of technology for social impact, and global strategies for empowering women entrepreneurs. The <strong>RVCE WiC Insider Circle</strong> is committed to fostering a community of curious minds, connecting with thought leaders, and sharing knowledge that makes a global impact.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 bg-primary/5 p-3 rounded-lg">
                    <a
                      href="https://www.youtube.com/watch?v=6rQAdS7tNo8&t=12s"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-primary hover:underline font-medium"
                    >
                      {/* Placeholder for a YouTube icon/image */}
                      <Image
                        src="/images/youtube.svg"
                        alt="YouTube"
                        width={20}
                        height={20}
                        className="mr-2"
                      />
                      Watch the full episode on YouTube
                    </a>
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-500">
                  <strong className="text-gray-800">Topics:</strong> <span className="text-gray-800">WiC</span> | <span className="text-gray-800">Podcast</span> | <span className="text-gray-800">Tech Talk</span> | <span className="text-gray-800">Women In Cloud</span> | <span className="text-gray-800">Innovation</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 3. ThinkSprint'24 – Igniting Innovation (Merged Content) */}
        <Card className="mb-10 overflow-hidden card-hover border-primary/10 animate-fade-in animate-delay-300">
          <div className="bg-gradient-to-r from-primary to-accent h-1.5" />
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="relative h-[200px] md:h-auto">
                <EventImageCarousel
                  imageSrcs={eventImages.thinkSprint}
                  altText="ThinkSprint'24"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 text-sm font-medium text-primary flex items-center gap-1.5 z-20">
                  <Calendar size={14} />
                  <span>March 2024</span>
                </div>
              </div>

              <div className="col-span-2 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Lightbulb size={20} className="text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold text-primary">
                    ThinkSprint&apos;24 – Igniting Innovation, One Idea at a Time
                  </h2>
                </div>

                <p className="text-gray-700 mb-4">
                  <strong>THINKSPRINT&apos;24</strong> was a milestone moment as we proudly launched the <strong>RVCE Women in Cloud Insider Circle&apos;s first ever technical event!</strong> Our participants stole the spotlight with their innovative ideas, dynamic brainstorming, and a spirit of collaboration that truly embodies the essence of this ideation event. This inaugural event was more than just a beginning – it was a celebration of creativity, technology, and empowerment.
                </p>

                <p className="text-gray-700 mb-6">
                  The event was a celebration of visionary thinking, creativity, and next-gen problem-solving. With thought-provoking themes such as <strong>Space Tech, Computational Biology, Gamification, Neurotech</strong>, and more, participants were encouraged to step beyond the bounds of conventional ideas and craft impactful, future-ready solutions. After two dynamic rounds—comprising idea submissions and live presentations—the event concluded with a panel of esteemed judges recognizing the top two teams for their exceptional innovation and collaboration.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 bg-primary/5 p-3 rounded-lg">
                    <Award size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">First Place: Team Minions</p>
                      <p className="text-gray-700">
                        Theme: <strong>Neurotech & Robotics</strong> - impressed with a Machine Learning and AI-driven solution.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-primary/5 p-3 rounded-lg">
                    <Award size={20} className="text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Second Place: Team Array of Sunshine</p>
                      <p className="text-gray-700">
                        Theme: <strong>Computational Bio & Neurotech</strong> - presented an IoT and Embedded Systems-based approach with
                        strong real-world potential.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-500">
                  <strong className="text-gray-800">Topics:</strong> <span className="text-gray-800">THINKSPRINT24</span> | <span className="text-gray-800">Ideathon</span> | <span className="text-gray-800">Innovation</span> | <span className="text-gray-800">RVCE WiC</span> | <span className="text-gray-800">Tech Leadership</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 4. Celebrating Women Achievers in Science and Engineering */}
        <Card className="mb-10 overflow-hidden card-hover border-primary/10 animate-fade-in animate-delay-400">
          <div className="bg-gradient-to-r from-primary to-accent h-1.5" />
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="relative h-[200px] md:h-auto">
                <EventImageCarousel
                  imageSrcs={eventImages.womenAchievers}
                  altText="Celebrating Women Achievers"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 text-sm font-medium text-primary flex items-center gap-1.5 z-20">
                  <Calendar size={14} />
                  <span>March 2024</span>
                </div>
              </div>

              <div className="col-span-2 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Users size={20} className="text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold text-primary">
                    Celebrating Women Achievers in Science and Engineering
                  </h2>
                </div>

                <p className="text-gray-700 mb-4">
                  In celebration of <strong>Women&apos;s Day</strong>, the RVCE Women in Cloud Insider Circle hosted an inspiring event
                  focused on <strong>Women Achievers in Science and Engineering</strong>, honoring the contributions of both teaching and
                  technical staff. The session spotlighted the incredible accomplishments of women across various
                  domains, sparking motivation and admiration among attendees.
                </p>

                <p className="text-gray-700">
                  To make the session more interactive and enjoyable, a lively quiz round was conducted, where
                  participants who answered correctly were rewarded with chocolates. This engaging activity not only
                  celebrated women&apos;s impact in fields like science, art, sports, and culture, but also created a
                  vibrant and inclusive environment that promoted learning, appreciation, and recognition of
                  women&apos;s achievements.
                </p>
                <div className="mt-4 text-sm text-gray-500">
                  <strong className="text-gray-800">Topics:</strong> <span className="text-gray-800">Women&apos;s Day</span> | <span className="text-gray-800">STEM</span> | <span className="text-gray-800">Achievers</span> | <span className="text-gray-800">Gender Equality</span> | <span className="text-gray-800">Empowerment</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 5. CATALYST – Cultivating Attitude... */}
        <Card className="mb-10 overflow-hidden card-hover border-primary/10 animate-fade-in animate-delay-500">
          <div className="bg-gradient-to-r from-primary to-accent h-1.5" />
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="relative h-[200px] md:h-auto">
                <EventImageCarousel
                  imageSrcs={eventImages.catalyst}
                  altText="CATALYST"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 text-sm font-medium text-primary flex items-center gap-1.5 z-20">
                  <Calendar size={14} />
                  <span>January 2024</span>
                </div>
              </div>

              <div className="col-span-2 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Sparkles size={20} className="text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold text-primary">
                    CATALYST – Cultivating Attitude, Teamwork, Articulation, Leadership, and Your Soft Skills
                    Transformation
                  </h2>
                </div>

                <p className="text-gray-700 mb-4">
                  Organized by the <strong>Women in Cloud CoE in India</strong> and the <strong>RVCE Women in Cloud Insider Circle</strong>, <strong>CATALYST</strong> was
                  an empowering session aimed at strengthening essential soft skills for academic and professional
                  success.
                </p>

                <p className="text-gray-700 mb-4">
                  The event featured <strong>Amrita Mukherjee</strong>, a corporate communication expert, and <strong>Shubha Girish</strong>, a seasoned
                  technology field expert. Participants gained valuable insights into mastering professional
                  communication, enhancing interview skills, improving presentation techniques, and understanding proper
                  email etiquette.
                </p>

                <p className="text-gray-700">
                  This interactive and impactful session provided attendees with the tools and confidence to make a
                  lasting impression in their future endeavors.
                </p>
                <div className="mt-4 text-sm text-gray-500">
                  <strong className="text-gray-800">Topics:</strong> <span className="text-gray-800">Soft Skills</span> | <span className="text-gray-800">Leadership</span> | <span className="text-gray-800">Communication</span> | <span className="text-gray-800">Career Development</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 6. Code with Coffee: Brewing Logic, One Line at a Time! */}
        <Card className="mb-10 overflow-hidden card-hover border-primary/10 animate-fade-in animate-delay-600">
          <div className="bg-gradient-to-r from-primary to-accent h-1.5" />
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="relative h-[200px] md:h-auto bg-gray-100 flex items-center justify-center">
                <EventImageCarousel
                  imageSrcs={eventImages.codeWithCoffee}
                  altText="Code with Coffee"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 text-sm font-medium text-primary flex items-center gap-1.5 z-20">
                  <Calendar size={14} />
                  <span>Ongoing Session</span>
                </div>
              </div>

              <div className="col-span-2 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Code size={20} className="text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold text-primary">
                    Code with Coffee: Brewing Logic, One Line at a Time! ☕
                  </h2>
                </div>

                <p className="text-gray-700 mb-4">
                  Last week, we hosted our first-ever <strong>Code with Coffee</strong> session as part of the <strong>RVCE Women in Cloud Insider Circle</strong>, and what a fantastic morning it was!
                </p>

                <p className="text-gray-700 mb-4">
                  With a warm cup in hand and curious minds at work, we dived into <strong>DSA concepts</strong>, solved challenging problems from platforms like <strong>LeetCode, Codeforces, and CodeChef</strong>, and had some truly insightful discussions around problem-solving strategies and optimizing solutions.
                </p>

                <p className="text-gray-700">
                  What made it special? Collaborative learning, real-time code debugging, an inclusive atmosphere for everyone—from beginners to seasoned coders—and of course, coffee-fueled enthusiasm! Big thanks to everyone who joined in and contributed to the vibrant energy of the room. This is just the beginning—many more such sessions are brewing!
                </p>
                <div className="mt-4 text-sm text-gray-500">
                  <strong className="text-gray-800">Topics:</strong> <span className="text-gray-800">Code With Coffee</span> | <span className="text-gray-800">DSA</span> | <span className="text-gray-800">Tech Events</span> | <span className="text-gray-800">Peer Learning</span> | <span className="text-gray-800">Coffee And Code</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 7. A glimpse into our Club Showcase 2025 */}
        <Card className="mb-10 overflow-hidden card-hover border-primary/10 animate-fade-in animate-delay-700">
          <div className="bg-gradient-to-r from-primary to-accent h-1.5" />
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="relative h-[200px] md:h-auto">
                <EventImageCarousel
                  imageSrcs={eventImages.clubShowcase}
                  altText="Club Showcase 2025"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 text-sm font-medium text-primary flex items-center gap-1.5 z-20">
                  <Calendar size={14} />
                  <span>August 2025</span>
                </div>
              </div>

              <div className="col-span-2 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Users size={20} className="text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold text-primary">
                    A glimpse into our Club Showcase 2025 ✨
                  </h2>
                </div>

                <p className="text-gray-700 mb-4">
                  On <strong>28th August</strong>, we welcomed the freshers’ batch with an exciting line-up of sessions designed to inspire, upskill, and spark collaboration. 🚀
                </p>

                <p className="text-gray-700 mb-4 font-semibold">Our showcase featured:</p>
                <ul className="text-gray-700 list-disc list-inside ml-4 space-y-1 mb-6">
                  <li><strong>Networking Nexus with LinkedIn 101</strong> – building professional presence early</li>
                  <li><strong>Introduction to Cloud & Internships</strong> – unlocking opportunities in tech and beyond</li>
                  <li><strong>Vision Board Creation (2025–2029)</strong> – mapping out future goals together</li>
                  <li><strong>From Pen to Publish</strong> – guiding students to take their first step into research</li>
                </ul>

                <p className="text-gray-700">
                  The energy, curiosity, and enthusiasm from our freshers were incredible! This is just the beginning — we’re excited to build a vibrant space for learning, innovation, and growth in the years ahead.
                </p>
                <div className="mt-4 text-sm text-gray-500">
                  <strong className="text-gray-800">Topics:</strong> <span className="text-gray-800">Club Showcase</span> | <span className="text-gray-800">Networking</span> | <span className="text-gray-800">Cloud Computing</span> | <span className="text-gray-800">Internships</span> | <span className="text-gray-800">RVCE</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 8. Digital Skills & Networking Outreach */}
        <Card className="overflow-hidden card-hover border-primary/10 animate-fade-in animate-delay-800">
          <div className="bg-gradient-to-r from-primary to-accent h-1.5" />
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="relative h-[200px] md:h-auto">
                <EventImageCarousel
                  imageSrcs={eventImages.digitalSkills}
                  altText="Digital Skills Outreach"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 text-sm font-medium text-primary flex items-center gap-1.5 z-20">
                  <Calendar size={14} />
                  <span>Outreach</span>
                </div>
              </div>

              <div className="col-span-2 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Lightbulb size={20} className="text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold text-primary">
                    Digital Skills and Computer Networking Outreach
                  </h2>
                </div>

                <p className="text-gray-700 mb-4">
                  As part of <strong>Women In Cloud Centre of Excellence’s</strong> societal initiatives at <strong>RV College Of Engineering</strong>, we had the opportunity to conduct engaging sessions at <strong>Vivekananda Vidyashala, Bank Colony, Bangalore</strong>.
                </p>

                <p className="text-gray-700 mb-4 font-semibold">Our sessions focused on two key areas:</p>
                <ul className="text-gray-700 list-disc list-inside ml-4 space-y-1 mb-6">
                  <li><strong>Digital Skills</strong> – empowering high school students with the knowledge to navigate today’s technology-driven world.</li>
                  <li><strong>Computer Networking & Connectivity</strong> – building foundational understanding of how technology connects us all.</li>
                </ul>

                <p className="text-gray-700">
                  It was inspiring to see the curiosity, enthusiasm, and eagerness to learn among the students. Moments like these reaffirm the impact of sharing knowledge and creating access to digital literacy. A big thank thank you to the school management and students for their warmth and active participation.
                </p>
                <div className="mt-4 text-sm text-gray-500">
                  <strong className="text-gray-800">Topics:</strong> <span className="text-gray-800">WiC CoE</span> | <span className="text-gray-800">Digital Skills</span> | <span className="text-gray-800">Tech For Good</span> | <span className="text-gray-800">Community Engagement</span> | <span className="text-gray-800">Youth Empowerment</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

      </section>
    </div>
  )
}