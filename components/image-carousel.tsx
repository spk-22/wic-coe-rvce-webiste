"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ImageCarouselProps {
  images: {
    src: string
    alt: string
  }[]
  autoPlay?: boolean
  interval?: number
  height?: string
  width?: string
}

export default function ImageCarousel({
  images,
  autoPlay = true,
  interval = 5000,
  height = "h-[300px]",
  width = "max-w-3xl mx-auto",
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  useEffect(() => {
    if (!autoPlay || isHovering) return

    const startTimer = () => {
      timerRef.current = setTimeout(() => {
        nextSlide()
      }, interval)
    }

    startTimer()

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [autoPlay, interval, currentIndex, isHovering])

  if (!images.length) return null

  return (
    <div
      className={`relative ${width} ${height} overflow-hidden rounded-xl border-2 border-primary/20 shadow-lg`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent z-10 pointer-events-none" />

      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-700 ${
            index === currentIndex ? "opacity-100 transform-none" : "opacity-0 transform scale-105"
          }`}
        >
          <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-contain" />
        </div>
      ))}

      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white/90 rounded-full shadow-md backdrop-blur-sm"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white/90 rounded-full shadow-md backdrop-blur-sm"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-white w-6" : "bg-white/50 hover:bg-white/80"
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
