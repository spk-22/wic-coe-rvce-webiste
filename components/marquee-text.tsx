"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"

interface MarqueeTextProps {
  direction?: "ltr" | "rtl"
}

export default function MarqueeText({ direction = "rtl" }: MarqueeTextProps) {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const marqueeElement = marqueeRef.current
    if (!marqueeElement) return

    let position = direction === "rtl" ? 0 : -marqueeElement.scrollWidth / 2

    const animateMarquee = () => {
      if (!marqueeElement) return

      if (direction === "rtl") {
        // Right to left
        position -= 1
        if (position <= -marqueeElement.scrollWidth / 2) {
          position = 0
        }
      } else {
        // Left to right
        position += 1
        if (position >= 0) {
          position = -marqueeElement.scrollWidth / 2
        }
      }

      marqueeElement.style.transform = `translateX(${position}px)`
      requestAnimationFrame(animateMarquee)
    }

    const animation = requestAnimationFrame(animateMarquee)
    return () => cancelAnimationFrame(animation)
  }, [direction])

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div ref={marqueeRef} className="inline-block" style={{ transition: "transform 0.03s linear" }}>
        <Link href="#" className="mx-4 hover:underline font-medium">
          ✨ Upcoming Events!
        </Link>
        <Link
          href="https://womenincloud.com/"
          className="mx-4 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Women In Cloud
        </Link>
        <Link
          href="https://www.linkedin.com/company/rvce-wic-insider-circle1/posts/?feedView=all"
          className="mx-4 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          RVCE X WIC Insider Circle - LinkedIn Page
        </Link>
        <Link
          href="https://www.instagram.com/rvce_wic_insidercircle/profilecard/?igsh=MWh3b3ZqeXB6cHRtcg=="
          className="mx-4 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          RVCE X WIC Insider Circle - Instagram Page
        </Link>
        <Link href="#" className="mx-4 hover:underline font-medium">
          ✨ Upcoming Events!
        </Link>
        <Link
          href="https://womenincloud.com/"
          className="mx-4 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Women In Cloud
        </Link>
        <Link
          href="https://www.linkedin.com/company/rvce-wic-insider-circle1/posts/?feedView=all"
          className="mx-4 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          RVCE X WIC Insider Circle - LinkedIn Page
        </Link>
        <Link
          href="https://www.instagram.com/rvce_wic_insidercircle/profilecard/?igsh=MWh3b3ZqeXB6cHRtcg=="
          className="mx-4 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          RVCE X WIC Insider Circle - Instagram Page
        </Link>
      </div>
    </div>
  )
}
