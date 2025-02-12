"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

const slides = [
  {
    id: 1,
    image: "/placeholder.svg?height=523&width=980",
    title: "Cinematic Journey",
    description: "A visual exploration through time and space",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=523&width=980",
    title: "Urban Landscapes",
    description: "Modern architecture meets natural elements",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=523&width=980",
    title: "Digital Dreams",
    description: "Where technology meets imagination",
  },
  {
    id: 4,
    image: "/placeholder.svg?height=523&width=980",
    title: "Abstract Realities",
    description: "Breaking boundaries of conventional design",
  },
  {
    id: 5,
    image: "/placeholder.svg?height=523&width=980",
    title: "Future Forward",
    description: "Innovation at the speed of thought",
  },
  {
    id: 6,
    image: "/placeholder.svg?height=523&width=980",
    title: "Minimal Moments",
    description: "Finding beauty in simplicity",
  },
  {
    id: 7,
    image: "/placeholder.svg?height=523&width=980",
    title: "Creative Confluence",
    description: "Where different styles merge and evolve",
  },
  {
    id: 8,
    image: "/placeholder.svg?height=523&width=980",
    title: "Dynamic Dimensions",
    description: "Exploring depth and perspective",
  },
  {
    id: 9,
    image: "/placeholder.svg?height=523&width=980",
    title: "Ethereal Expressions",
    description: "Capturing moments of pure inspiration",
  },
  {
    id: 10,
    image: "/placeholder.svg?height=523&width=980",
    title: "Visual Velocity",
    description: "Motion and emotion in perfect harmony",
  },
]

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [autoSlide, setAutoSlide] = useState(true)
  const sliderRef = useRef<HTMLDivElement>(null)

  const totalSlides = slides.length
  const extendedSlides = [slides[totalSlides - 1], ...slides, slides[0]]

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null
    if (autoSlide) {
      timer = setInterval(() => {
        handleNextSlide()
      }, 5000) // 5 seconds interval
    }
    return () => {
      if (timer) clearInterval(timer)
    }
  }, [autoSlide])

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false)
        if (currentSlide === 0) {
          setCurrentSlide(totalSlides)
        } else if (currentSlide === totalSlides + 1) {
          setCurrentSlide(1)
        }
      }, 500) // Match this to your transition duration

      return () => clearTimeout(timer)
    }
  }, [isTransitioning, currentSlide, totalSlides])

  const handleNextSlide = () => {
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev + 1) % (totalSlides + 2))
  }

  const getSlideStyle = (index: number) => {
    const isCurrent = index === currentSlide
    const isPrev = index === currentSlide - 1 || (currentSlide === 1 && index === totalSlides + 1)
    const isNext = index === currentSlide + 1 || (currentSlide === totalSlides && index === 0)

    return {
      width: "980px",
      height: "523.15px",
      filter: isCurrent ? "none" : "brightness(0.4)",
      transition: isTransitioning ? "none" : "filter 0.5s ease-in-out",
      opacity: isPrev || isNext || isCurrent ? 1 : 0,
    }
  }

  return (
    <div className="relative w-full overflow-hidden bg-black">
      <div className="relative flex items-center justify-center py-8">
        <div
          ref={sliderRef}
          className="flex gap-[7.5px]"
          style={{
            transform: `translateX(calc(-${currentSlide * (980 + 7.5)}px + ${(window.innerWidth - 980) / 2}px))`,
            transition: isTransitioning ? "none" : "transform 0.5s ease-in-out",
          }}
        >
          {extendedSlides.map((slide, index) => (
            <div key={`${slide.id}-${index}`} className="relative flex-shrink-0" style={getSlideStyle(index)}>
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === currentSlide}
              />
              {index === currentSlide && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                  <h3 className="text-white text-3xl font-bold mb-2">{slide.title}</h3>
                  <p className="text-white/90">{slide.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true)
              setCurrentSlide(index + 1)
              setAutoSlide(false)
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index + 1 === currentSlide ? "bg-white w-4" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

