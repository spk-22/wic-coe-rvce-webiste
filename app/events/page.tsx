"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Award, Users, Lightbulb, Flag, Sparkles, Podcast, Code } from "lucide-react"
// Ensure this path is correct for your project structure
import ImageCarousel from "@/components/image-carousel"

// ----------------------------------------------------------------
// --- CONSTANT DATA ---
// ----------------------------------------------------------------
const EVENT_IMAGES = {
  salutingHeroes: [
    { src: "/images/radhakrishna-school/1.jpg", alt: "Students and faculty at Saluting Heroes event" },
    { src: "/images/radhakrishna-school/2.jpg", alt: "Armed Forces tribute session with students" },
    { src: "/images/radhakrishna-school/3.jpg", alt: "Group photo with Radhakrishna School students" },
  ],
  echoesOfImpact: [
    { src: "/images/podcast/1.jpg", alt: "Ep 1 of Echoes of Impact Podcast" },
    { src: "/images/podcast/2.jpg", alt: "ep 1 in Session" },
  ],
  thinkSprint: [
    { src: "/images/thinksprint/1.jpg", alt: "Participants brainstorming during ThinkSprint'24" },
    { src: "/images/thinksprint/2.jpg", alt: "ThinkSprint judging panel reviewing ideas" },
    { src: "/images/thinksprint/3.jpg", alt: "Team presenting their solution at ThinkSprint" },
    { src: "/images/thinksprint/4.jpg", alt: "ThinkSprint event attendees listening to presentations" },
    { src: "/images/thinksprint/5.jpg", alt: "Winners being awarded at ThinkSprint event" },
  ],
  womenAchievers: [
    { src: "/images/women/1.jpg", alt: "Faculty and staff celebrating Women Achievers Day" },
    { src: "/images/women/2.jpg", alt: "Interactive quiz session during Women Achievers event" },
    { src: "/images/women/3.jpg", alt: "Meditation during Women Achievers event" },
  ],
  catalyst: [
    { src: "/images/catalyst/1.jpg", alt: "Speakers presenting at the CATALYST soft skills workshop" },
    { src: "/images/catalyst/2.jpg", alt: "Students engaging in a CATALYST workshop activity" },
    { src: "/images/catalyst/3.jpg", alt: "CATALYST event audience and presenters" },
    { src: "/images/catalyst/4.jpg", alt: "Speakers posing with participants at CATALYST" },
  ],
  codeWithCoffee: [
    { src: "/images/code-with-coffee/1.jpg", alt: "Students coding together at the Code with Coffee session" },
    { src: "/images/code-with-coffee/2.jpg", alt: "Collaborative coding and debugging session" },
    { src: "/images/code-with-coffee/3.jpg", alt: "Students focused on problem-solving during Code with Coffee" },
  ],
  clubShowcase: [
    { src: "/images/club-showcase/1.jpg", alt: "Freshers at the Club Showcase booth" },
    { src: "/images/club-showcase/2.jpg", alt: "RVCE WiC team interacting with new students" },
    { src: "/images/club-showcase/3.jpg", alt: "Presentation during the Club Showcase 2025" },
    { src: "/images/club-showcase/4.jpg", alt: "Group discussion at the Club Showcase event" },
  ],
  digitalSkills: [
    { src: "/images/digital-skills/1.jpg", alt: "RVCE team conducting Digital Skills outreach at school" },
    { src: "/images/digital-skills/2.jpg", alt: "Students participating in the Digital Skills workshop" },
    { src: "/images/digital-skills/3.jpg", alt: "Interactive session on Computer Networking" },
    { src: "/images/digital-skills/4.jpg", alt: "Faculty and students at Vivekananda Vidyashala" },
    { src: "/images/digital-skills/5.jpg", alt: "Group discussion during the outreach program" },
    { src: "/images/digital-skills/6.jpg", alt: "Closing ceremony of the Digital Skills outreach" },
  ],
}
// ----------------------------------------------------------------
// --- EVENTS COMPONENT ---
// ----------------------------------------------------------------

export default function Events() {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="space-y-10">
      <section className="section-container p-8 animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold gradient-heading mb-8 text-center">Our Events</h1>
        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-10 text-justify">
          Explore the impactful events organized by RVCE Women in Cloud, designed to inspire, educate, and empower our
          community through innovation, outreach, and skill development.
        </p>

        {/* 1. Saluting Our Heroes – A Tribute to the Armed Forces */}
        {/* 1. Saluting Our Heroes – A Tribute to the Armed Forces */}
        <Card className="mb-10 overflow-hidden card-hover border-primary/10 animate-fade-in animate-delay-100">
          <div className="bg-gradient-to-r from-primary to-accent h-1.5" />
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-3 md:h-[400px] h-auto">

              {/* Image carousel */}
              <div className="relative h-[250px] sm:h-[300px] md:h-full overflow-hidden">
                <ImageCarousel
                  images={EVENT_IMAGES.salutingHeroes}
                  altText="Saluting Our Heroes"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 text-sm font-medium text-primary flex items-center gap-2.5 z-20">
                  <Calendar size={14} />
                  <span>November 2024</span>
                </div>
              </div>

              {/* Text content */}
              <div className="col-span-2 p-5 sm:p-6 md:p-8 flex flex-col justify-between md:h-full md:overflow-y-auto">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Flag size={20} className="text-primary" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-semibold text-primary">
                      Saluting Our Heroes – A Tribute to the Armed Forces
                    </h2>
                  </div>

                  <p className="text-gray-700 mb-3 text-sm sm:text-base">
                    Excited to share highlights from our first event on{" "}
                    <strong>November 5, 2024</strong>! We had the privilege of engaging
                    with young minds at <strong>Radhakrishna School</strong>, offering
                    insights into the diverse and impactful career opportunities within
                    the <strong>Indian Armed Forces</strong>.
                  </p>
                  <p className="text-gray-700 mb-3 text-sm sm:text-base">
                    As a heartfelt tribute to our soldiers, the students participated in a DIY Rakhi-making activity,
                    crafting personalized rakhis as tokens of gratitude and admiration.
                    These rakhis were then sent to the brave hearts guarding our nation,
                    symbolizing respect and solidarity.
                  </p>
                  <p className="text-gray-700 mb-4 text-sm sm:text-base">
                    The energy in the room was inspiring as students explored the paths
                    they can pursue to serve and protect our nation!
                  </p>
                </div>

                <div className="mt-4 text-sm text-gray-500">
                  <strong className="text-gray-800">Topics:</strong>{" "}
                  <span className="text-gray-800">Inspiration</span> |{" "}
                  <span className="text-gray-800">Indian Armed Forces</span> |{" "}
                  <span className="text-gray-800">Youth Empowerment</span> |{" "}
                  <span className="text-gray-800">Patriotism</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>


        {/* 2. The Echoes of Impact Podcast is Live! */}
        <Card className="mb-10 overflow-hidden card-hover border-primary/10 animate-fade-in animate-delay-200">
          <div className="bg-gradient-to-r from-primary to-accent h-1.5" />
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-3 md:h-[400px] h-auto">

              {/* Image carousel */}
              <div className="relative h-[250px] sm:h-[300px] md:h-full overflow-hidden">
                <ImageCarousel
                  images={EVENT_IMAGES.echoesOfImpact}
                  altText="Echoes of Impact Podcast"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 text-sm font-medium text-primary flex items-center gap-2.5 z-20">
                  <Calendar size={14} />
                  <span>November 2024</span>
                </div>
              </div>

              {/* Text content */}
              <div className="col-span-2 p-5 sm:p-6 md:p-8 flex flex-col justify-between md:h-full md:overflow-y-auto">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Podcast size={20} className="text-primary" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-semibold text-primary">
                      The Echoes of Impact Podcast is Live!
                    </h2>
                  </div>

                  <p className="text-gray-700 mb-3 text-sm sm:text-base">
                    We are thrilled to announce the launch of <strong>The Echoes of Impact Podcast</strong>—a dynamic platform dedicated to exploring <strong>stories, ideas, and insights that spark innovation and empower changemakers</strong> within the cloud and tech communities.
                  </p>

                  <p className="text-gray-700 mb-4 text-sm sm:text-base">
                    The inaugural episode features <strong>Chaitra Vedullapalli</strong>, Co-Founder of Women in Cloud, USA, where we delve into her inspiring journey, the transformative power of technology for social impact, and global strategies for empowering women entrepreneurs. The <strong>RVCE WiC Insider Circle</strong> is committed to fostering a community of curious minds, connecting with thought leaders, and sharing knowledge that makes a global impact.
                  </p>

                  <div className="space-y-3">
                    <a
                      href="https://www.youtube.com/watch?v=6rQAdS7tNo8&t=12s"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-primary hover:underline font-medium gap-2 bg-primary/5 p-3 rounded-lg"
                    >
                      <Podcast size={18} className="flex-shrink-0" />
                      Watch the full episode on YouTube
                    </a>
                  </div>
                </div>

                <div className="mt-4 text-sm text-gray-500">
                  <strong className="text-gray-800">Topics:</strong>{" "}
                  <span className="text-gray-800">WiC</span> |{" "}
                  <span className="text-gray-800">Podcast</span> |{" "}
                  <span className="text-gray-800">Tech Talk</span> |{" "}
                  <span className="text-gray-800">Women In Cloud</span> |{" "}
                  <span className="text-gray-800">Innovation</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 3. ThinkSprint'24 – Igniting Innovation (Merged Content) */}
        <Card className="mb-10 overflow-hidden card-hover border-primary/10 animate-fade-in animate-delay-300">
          <div className="bg-gradient-to-r from-primary to-accent h-1.5" />
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-3 md:h-[400px] h-auto">

              {/* Image carousel */}
              <div className="relative h-[250px] sm:h-[300px] md:h-full overflow-hidden">
                <ImageCarousel
                  images={EVENT_IMAGES.thinkSprint}
                  altText="ThinkSprint'24"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 text-sm font-medium text-primary flex items-center gap-2.5 z-20">
                  <Calendar size={14} />
                  <span>March 2024</span>
                </div>
              </div>

              {/* Text content */}
              <div className="col-span-2 p-5 sm:p-6 md:p-8 flex flex-col justify-between md:h-full md:overflow-y-auto">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Lightbulb size={20} className="text-primary" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-semibold text-primary">
                      ThinkSprint&apos;24 – Igniting Innovation, One Idea at a Time
                    </h2>
                  </div>

                  <p className="text-gray-700 mb-3 text-sm sm:text-base">
                    <strong>THINKSPRINT&apos;24</strong> was a milestone moment as we proudly launched the <strong>RVCE Women in Cloud Insider Circle&apos;s first ever technical event!</strong> Participants stole the spotlight with innovative ideas, dynamic brainstorming, and collaborative spirit—celebrating creativity, technology, and empowerment.
                  </p>

                  <p className="text-gray-700 mb-4 text-sm sm:text-base">
                    The event showcased next-gen problem-solving across themes like <strong>Space Tech, Computational Biology, Gamification, Neurotech</strong>. After two dynamic rounds of idea submissions and live presentations, a panel of esteemed judges recognized the top two teams for exceptional innovation.
                  </p>

                  {/* Awards */}
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
                          Theme: <strong>Computational Bio & Neurotech</strong> - presented an IoT and Embedded Systems-based approach with strong real-world potential.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-sm text-gray-500">
                  <strong className="text-gray-800">Topics:</strong>{" "}
                  <span className="text-gray-800">THINKSPRINT24</span> |{" "}
                  <span className="text-gray-800">Ideathon</span> |{" "}
                  <span className="text-gray-800">Innovation</span> |{" "}
                  <span className="text-gray-800">RVCE WiC</span> |{" "}
                  <span className="text-gray-800">Tech Leadership</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>


        {/* 4. Celebrating Women Achievers in Science and Engineering */}
        <Card className="mb-10 overflow-hidden card-hover border-primary/10 animate-fade-in animate-delay-400">
          <div className="bg-gradient-to-r from-primary to-accent h-1.5" />
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-3 md:h-[400px] h-auto">

              {/* Image carousel */}
              <div className="relative h-[250px] sm:h-[300px] md:h-full overflow-hidden">
                <ImageCarousel
                  images={EVENT_IMAGES.womenAchievers}
                  altText="Celebrating Women Achievers"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 text-sm font-medium text-primary flex items-center gap-2.5 z-20">
                  <Calendar size={14} />
                  <span>March 2025</span>
                </div>
              </div>

              {/* Text content */}
              <div className="col-span-2 p-5 sm:p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Users size={20} className="text-primary" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-semibold text-primary">
                      Celebrating Women Achievers in Science and Engineering
                    </h2>
                  </div>

                  <p className="text-gray-700 mb-3 text-sm sm:text-base">
                    In celebration of <strong>Women&apos;s Day</strong>, the RVCE Women in Cloud Insider Circle hosted an inspiring event focused on <strong>Women Achievers in Science and Engineering</strong>, honoring the contributions of both teaching and technical staff. The session spotlighted the incredible accomplishments of women across various domains, sparking motivation and admiration among attendees.
                  </p>

                  <p className="text-gray-700 text-sm sm:text-base">
                    To make the session more interactive and enjoyable, a lively quiz round was conducted, where participants who answered correctly were rewarded with chocolates. This engaging activity not only celebrated women&apos;s impact in fields like science, art, sports, and culture, but also created a vibrant and inclusive environment that promoted learning, appreciation, and recognition of women&apos;s achievements.
                  </p>
                </div>

                <div className="mt-4 text-sm text-gray-500">
                  <strong className="text-gray-800">Topics:</strong>{" "}
                  <span className="text-gray-800">Women&apos;s Day</span> |{" "}
                  <span className="text-gray-800">STEM</span> |{" "}
                  <span className="text-gray-800">Achievers</span> |{" "}
                  <span className="text-gray-800">Gender Equality</span> |{" "}
                  <span className="text-gray-800">Empowerment</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 5. CATALYST – Cultivating Attitude... */}
        <Card className="mb-10 overflow-hidden card-hover border-primary/10 animate-fade-in animate-delay-500">
          <div className="bg-gradient-to-r from-primary to-accent h-1.5" />
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-3 md:h-[400px] h-auto">

              {/* Image carousel */}
              <div className="relative h-[250px] sm:h-[300px] md:h-full overflow-hidden">
                <ImageCarousel
                  images={EVENT_IMAGES.catalyst}
                  altText="CATALYST"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 text-sm font-medium text-primary flex items-center gap-2.5 z-20">
                  <Calendar size={14} />
                  <span>January 2024</span>
                </div>
              </div>

              {/* Text content */}
              <div className="col-span-2 p-5 sm:p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Sparkles size={20} className="text-primary" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-semibold text-primary">
                      CATALYST – Cultivating Attitude, Teamwork, Articulation, Leadership, and Your Soft Skills Transformation
                    </h2>
                  </div>

                  <p className="text-gray-700 mb-3 text-sm sm:text-base">
                    Organized by the <strong>Women in Cloud CoE in India</strong> and the <strong>RVCE Women in Cloud Insider Circle</strong>, <strong>CATALYST</strong> was an empowering session aimed at strengthening essential soft skills for academic and professional success.
                  </p>

                  <p className="text-gray-700 mb-3 text-sm sm:text-base">
                    The event featured <strong>Amrita Mukherjee</strong>, a corporate communication expert, and <strong>Shubha Girish</strong>, a seasoned technology field expert. Participants gained valuable insights into mastering professional communication, enhancing interview skills, improving presentation techniques, and understanding proper email etiquette.
                  </p>

                  <p className="text-gray-700 text-sm sm:text-base">
                    This interactive and impactful session provided attendees with the tools and confidence to make a lasting impression in their future endeavors.
                  </p>
                </div>

                <div className="mt-4 text-sm text-gray-500">
                  <strong className="text-gray-800">Topics:</strong>{" "}
                  <span className="text-gray-800">Soft Skills</span> |{" "}
                  <span className="text-gray-800">Leadership</span> |{" "}
                  <span className="text-gray-800">Communication</span> |{" "}
                  <span className="text-gray-800">Career Development</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 6. Code with Coffee: Brewing Logic, One Line at a Time! */}
        <Card className="mb-10 overflow-hidden card-hover border-primary/10 animate-fade-in animate-delay-600">
          <div className="bg-gradient-to-r from-primary to-accent h-1.5" />
          <CardContent className="p-0">
            {/* Responsive grid: stack on mobile, 3 cols on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-3 md:h-[400px] h-auto">

              {/* Image carousel section */}
              <div className="relative h-[250px] sm:h-[300px] md:h-full overflow-hidden">
                <ImageCarousel
                  images={EVENT_IMAGES.codeWithCoffee}
                  altText="Code with Coffee"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 text-sm font-medium text-primary flex items-center gap-2.5 z-20">
                  <Calendar size={14} />
                  <span>April 2025</span>
                </div>
              </div>

              {/* Text content */}
              <div className="col-span-2 p-5 sm:p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Code size={20} className="text-primary" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-semibold text-primary">
                      Code with Coffee: Brewing Logic, One Line at a Time!
                    </h2>
                  </div>

                  <p className="text-gray-700 mb-3 text-sm sm:text-base">
                    Last week, we hosted our first-ever <strong>Code with Coffee</strong> session as part of the <strong>RVCE Women in Cloud Insider Circle</strong>, and what a fantastic morning it was!
                  </p>

                  <p className="text-gray-700 mb-3 text-sm sm:text-base">
                    With a warm cup in hand and curious minds at work, we dived into <strong>DSA concepts</strong>, solved challenging problems from platforms like <strong>LeetCode, Codeforces, and CodeChef</strong>, and had some truly insightful discussions around problem-solving strategies and optimizing solutions.
                  </p>

                  <p className="text-gray-700 text-sm sm:text-base">
                    What made it special? Collaborative learning, real-time code debugging, an inclusive atmosphere for everyone—from beginners to seasoned coders—and of course, coffee-fueled enthusiasm! This is just the beginning—many more such sessions are brewing!
                  </p>

                </div>

                <div className="mt-4 text-sm text-gray-500">
                  <strong className="text-gray-800">Topics:</strong>{" "}
                  <span className="text-gray-800">Code With Coffee</span> |{" "}
                  <span className="text-gray-800">DSA</span> |{" "}
                  <span className="text-gray-800">Tech Events</span> |{" "}
                  <span className="text-gray-800">Peer Learning</span> |{" "}
                  <span className="text-gray-800">Coffee And Code</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 7. A glimpse into our Club Showcase 2025 */}
        <Card className="mb-10 overflow-hidden card-hover border-primary/10 animate-fade-in animate-delay-700">
          <div className="bg-gradient-to-r from-primary to-accent h-1.5" />
          <CardContent className="p-0">
            {/* Responsive grid: stack on mobile, 3 cols on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-3 md:h-[400px] h-auto">

              {/* Image carousel section */}
              <div className="relative h-[250px] sm:h-[300px] md:h-full overflow-hidden">
                <ImageCarousel
                  images={EVENT_IMAGES.clubShowcase}
                  altText="Club Showcase 2025"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 text-sm font-medium text-primary flex items-center gap-2.5 z-20">
                  <Calendar size={14} />
                  <span>August 2025</span>
                </div>
              </div>

              {/* Text content */}
              <div className="col-span-2 p-5 sm:p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Users size={20} className="text-primary" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-semibold text-primary">
                      A glimpse into our Club Showcase 2025
                    </h2>
                  </div>

                  <p className="text-gray-700 mb-3 text-sm sm:text-base">
                    On <strong>28th August</strong>, we welcomed the freshers’ batch with an exciting line-up of sessions designed to inspire, upskill, and spark collaboration.
                  </p>

                  <p className="text-gray-700 mb-3 font-semibold text-sm sm:text-base">Our showcase featured:</p>
                  <ul className="text-gray-700 list-disc list-inside ml-4 space-y-1 mb-4 text-sm sm:text-base">
                    <li><strong>Networking Nexus with LinkedIn 101</strong> – building professional presence early</li>
                    <li><strong>Introduction to Cloud & Internships</strong> – unlocking opportunities in tech and beyond</li>
                    <li><strong>Vision Board Creation (2025–2029)</strong> – mapping out future goals together</li>
                    <li><strong>From Pen to Publish</strong> – guiding students to take their first step into research</li>
                  </ul>

                  <p className="text-gray-700 text-sm sm:text-base">
                    The energy, curiosity, and enthusiasm from our freshers were incredible! This is just the beginning — we’re excited to build a vibrant space for learning, innovation, and growth in the years ahead.
                  </p>

                </div>

                <div className="mt-4 text-sm text-gray-500">
                  <strong className="text-gray-800">Topics:</strong>{" "}
                  <span className="text-gray-800">Club Showcase</span> |{" "}
                  <span className="text-gray-800">Networking</span> |{" "}
                  <span className="text-gray-800">Cloud Computing</span> |{" "}
                  <span className="text-gray-800">Internships</span> |{" "}
                  <span className="text-gray-800">RVCE</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>


        {/* 8. Digital Skills & Networking Outreach */}
        <Card className="overflow-hidden card-hover border-primary/10 animate-fade-in animate-delay-800">
          <div className="bg-gradient-to-r from-primary to-accent h-1.5" />
          <CardContent className="p-0">
            {/* Responsive grid: stack on mobile, 3 cols on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-3 md:h-[400px] h-auto">

              {/* Image carousel section */}
              <div className="relative h-[250px] sm:h-[300px] md:h-full overflow-hidden">
                <ImageCarousel
                  images={EVENT_IMAGES.digitalSkills}
                  altText="Digital Skills Outreach"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 text-sm font-medium text-primary flex items-center gap-2.5 z-20">
                  <Calendar size={14} />
                  <span>Outreach</span>
                </div>
              </div>

              {/* Text content */}
              <div className="col-span-2 p-5 sm:p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Lightbulb size={20} className="text-primary" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-semibold text-primary">
                      Digital Skills and Computer Networking Outreach
                    </h2>
                  </div>

                  <p className="text-gray-700 mb-3 text-sm sm:text-base">
                    As part of <strong>Women In Cloud Centre of Excellence’s</strong> societal initiatives at <strong>RV College Of Engineering</strong>, we conducted engaging sessions at <strong>Vivekananda Vidyashala, Bank Colony, Bangalore</strong>.
                  </p>

                  <p className="text-gray-700 mb-3 font-semibold text-sm sm:text-base">Our sessions focused on two key areas:</p>
                  <ul className="text-gray-700 list-disc list-inside ml-4 space-y-1 mb-4 text-sm sm:text-base">
                    <li><strong>Digital Skills</strong> – empowering high school students with knowledge to navigate today’s technology-driven world.</li>
                    <li><strong>Computer Networking & Connectivity</strong> – building foundational understanding of how technology connects us all.</li>
                  </ul>

                  <p className="text-gray-700 text-sm sm:text-base">
                    It was inspiring to see the curiosity, enthusiasm, and eagerness to learn among the students. Moments like these reaffirm the impact of sharing knowledge and creating access to digital literacy. A big thank you to the school management and students for their warmth and active participation.
                  </p>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 text-sm font-medium text-primary flex items-center gap-2.5 z-20">
                    <Calendar size={14} />
                    <span>September 2025</span>
                  </div>
                </div>

                <div className="mt-4 text-sm text-gray-500">
                  <strong className="text-gray-800">Topics:</strong>{" "}
                  <span className="text-gray-800">WiC CoE</span> |{" "}
                  <span className="text-gray-800">Digital Skills</span> |{" "}
                  <span className="text-gray-800">Tech For Good</span> |{" "}
                  <span className="text-gray-800">Community Engagement</span> |{" "}
                  <span className="text-gray-800">Youth Empowerment</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

      </section>
    </div>
  )
}