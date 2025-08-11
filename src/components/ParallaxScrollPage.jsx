"use client"

import { useState, useEffect, useCallback, useMemo, useRef } from "react"

export default function ParallaxScrollPage() {
  const [scrollY, setScrollY] = useState(0)
  const [showCarousels, setShowCarousels] = useState(false)
  const [carouselProgress, setCarouselProgress] = useState(0)
  const [allowFurtherScroll, setAllowFurtherScroll] = useState(false)
  const [hoveredImage, setHoveredImage] = useState(null)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [selectedImages, setSelectedImages] = useState([])
  const [selectedServices, setSelectedServices] = useState([])
  const [allCarouselImages, setAllCarouselImages] = useState([])
  const [allCarouselServices, setAllCarouselServices] = useState([])

  // Define all available images (1.png to 12.png)
  const imageServicePairs = [
    { image: 1, service: "Google & Meta Ads" },
    { image: 2, service: "App Development" },
    { image: 3, service: " Data Analytics & Business Intelligence" },
    { image: 4, service: " Maintenance & Support" },
    { image: 5, service: " QA & Software Testing" },
    { image: 6, service: " Custom SaaS Development" },
    { image: 7, service: "Consulting (SEO & Development)" },
    { image: 8, service: "Social Media Management" },
    { image: 9, service: "Website Development" },
    { image: 10, service: "AI and Automation" },
    { image: 11, service: "Website Engagement (Blog Management)" },
    { image: 12, service: " Project Management & Hiring" }
  ]

  // Initialize images on mount
  useEffect(() => {
    const allNumbers = Array.from({ length: 12 }, (_, i) => i + 1)
    const shuffled = allNumbers.sort(() => Math.random() - 0.5)
    const selectedNumbers = shuffled.slice(0, 6)
    
    const heroImages = selectedNumbers.map(num => `/ServiceImage/${num}.png`)
    const heroServices = selectedNumbers.map(num => imageServicePairs.find(pair => pair.image === num)?.service || `Service ${num}`)
    const allImages = allNumbers.map(num => `/ServiceImage/${num}.png`)
    const allServices = allNumbers.map(num => imageServicePairs.find(pair => pair.image === num)?.service || `Service ${num}`)
    
    setSelectedImages(heroImages)
    setSelectedServices(heroServices)
    setAllCarouselImages(allImages)
    setAllCarouselServices(allServices)
  }, [])

  const typingTexts = ["AI Consulting & Automation", "Full Stack Development", "Data Engineering & Analytics", "SEO Analytics", "Digital Marketing"]

  const imageRotations = useMemo(() => selectedImages.map(() => ({ rotateX: Math.random() * 8 - 4, rotateY: Math.random() * 8 - 4 })), [selectedImages.length])

  // Simplified scroll handling
  useEffect(() => {
    let ticking = false
    let virtualScrollPosition = 0
    const carouselStartY = 800, carouselVirtualHeight = 2000

    const updateScrollY = () => {
      const currentScrollY = window.pageYOffset
      
      if (currentScrollY >= carouselStartY && !allowFurtherScroll) {
        setShowCarousels(true)
        window.scrollTo(0, carouselStartY)
        setScrollY(carouselStartY)
        return
      } else if (currentScrollY < carouselStartY) {
        setScrollY(currentScrollY)
        setShowCarousels(false)
        setCarouselProgress(0)
        setAllowFurtherScroll(false)
        virtualScrollPosition = 0
      } else if (allowFurtherScroll) {
        setScrollY(currentScrollY)
        setShowCarousels(true)
        setCarouselProgress(1)
      }
      ticking = false
    }

    const handleWheelScroll = (e) => {
      if (showCarousels && !allowFurtherScroll) {
        e.preventDefault()
        const delta = e.deltaY
        virtualScrollPosition = Math.max(0, Math.min(carouselVirtualHeight, virtualScrollPosition + delta))
        const progress = virtualScrollPosition / carouselVirtualHeight
        setCarouselProgress(progress)
        if (progress >= 0.95) {
          setAllowFurtherScroll(true)
          window.scrollTo(0, carouselStartY + 100)
        }
      }
    }

    const requestTick = () => { if (!ticking) { requestAnimationFrame(updateScrollY); ticking = true } }
    const handleSmoothScroll = () => requestTick()

    window.addEventListener("scroll", handleSmoothScroll, { passive: true })
    window.addEventListener("wheel", handleWheelScroll, { passive: false })
    
    return () => {
      window.removeEventListener("scroll", handleSmoothScroll)
      window.removeEventListener("wheel", handleWheelScroll)
    }
  }, [showCarousels, allowFurtherScroll])

  useEffect(() => {
    const currentText = typingTexts[currentTextIndex]
    let timeoutId

    if (isTyping) {
      if (displayText.length < currentText.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1))
        }, 100)
      } else {
        timeoutId = setTimeout(() => {
          setIsTyping(false)
        }, 2000)
      }
    } else {
      if (displayText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 50)
      } else {
        setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length)
        setIsTyping(true)
      }
    }

    return () => clearTimeout(timeoutId)
  }, [displayText, isTyping, currentTextIndex, typingTexts])

  const scrollProgress = Math.min(scrollY / 1200, 1)
  
  // New rotation values based on the provided logic
  const rotateX = Math.ceil(Math.max(0, 15 - Math.floor(scrollY / 10)))
  const rotateZ = Math.ceil(Math.max(0, 20 - Math.floor(scrollY / 10)))
  
  // New translateY calculation: normal scroll until 500px, then reverse
  const translateY = scrollY <= 500 ? scrollY : 500 - (scrollY - 500)
  
  const scale = 0.9 + 0.1 * scrollProgress
  const imageOpacity = 0.2 + 0.4 * scrollProgress

  // Card straightening transition calculations
  const transitionStartY = 600 // Start straightening cards
  const transitionEndY = 800   // Complete transition before carousel
  const transitionProgress = Math.max(0, Math.min(1, (scrollY - transitionStartY) / (transitionEndY - transitionStartY)))
  
  // Calculate individual card straightening
  const cardStraightenProgress = transitionProgress

  // Calculate carousel movement based on carousel progress
  const maxCarouselMovement = 2000
  const carouselMovement = carouselProgress * maxCarouselMovement
  
  // Synchronize both carousels to end at the same time
  // Top row has 6 cards, bottom row has 6 cards - same count for equal timing
  const topRowCardWidth = 280 + 16 // Card width + gap (mobile)
  const topRowCardWidthMd = 420 + 64 // Card width + gap (desktop)
  
  // Calculate movement distances to show all cards in both rows
  const topRowMovementDistance = topRowCardWidth * 3 // Move 3 card widths to show all 6 cards
  const bottomRowMovementDistance = topRowCardWidth * 3 // Same distance for bottom row
  
  // Synchronized movement - both rows move proportionally to show all cards
  const firstRowTranslateX = carouselMovement * 0.6 // Move right (positive)
  const secondRowTranslateX = -(carouselMovement * 0.6) // Move left (negative)

  const handleImageClick = (index) => {
    if (scrollY > 200) {
      setClickedImages((prev) => {
        const newSet = new Set(prev)
        if (newSet.has(index)) {
          newSet.delete(index)
        } else {
          newSet.add(index)
        }
        return newSet
      })
    }
  }

  const handleImageHover = (rowKey, index) => {
    setHoveredImage(`${rowKey}-${index}`)
  }

  const handleImageLeave = () => {
    setHoveredImage(null)
  }

  const renderServiceOverlay = (serviceTitle, isHovered) => (
    <div 
      className={`absolute inset-0 bg-black/60 backdrop-blur-sm rounded-2xl transition-all duration-300 ease-out flex flex-col justify-center items-center text-center ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <h3 className="text-white text-lg md:text-2xl lg:text-3xl font-bold glow-text-blue px-2">
        {serviceTitle}
      </h3>
    </div>
  )

  const renderImageGrid = () => {
    // Calculate fade out as we approach carousel
    const fadeOutStart = 750
    const fadeOutEnd = 800
    const fadeProgress = Math.max(0, Math.min(1, (scrollY - fadeOutStart) / (fadeOutEnd - fadeOutStart)))
    const gridOpacity = 1 - fadeProgress
    
    return (
      <div
        className="absolute top-0 left-0 w-full h-screen transition-transform duration-300 ease-out"
        style={{
          transform: `translateY(${translateY}px) rotateX(${rotateX}deg) rotateZ(${rotateZ}deg) scale(${scale})`,
          transformStyle: "preserve-3d",
          perspective: "1000px",
          zIndex: scrollY > 200 ? 30 : 10,
          pointerEvents: "auto",
          opacity: gridOpacity,
        }}
      >
        {/* Fixed grid container with proper spacing */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {selectedImages.map((src, index) => {
            // Calculate individual card rotation with straightening transition
            const originalRotateX = imageRotations[index].rotateX
            const originalRotateY = imageRotations[index].rotateY
            
            // Smoothly transition from tilted to straight
            const currentRotateX = originalRotateX * (1 - cardStraightenProgress)
            const currentRotateY = originalRotateY * (1 - cardStraightenProgress)
            
            // Add subtle scale effect during transition
            const transitionScale = 1 + (cardStraightenProgress * 0.05)
            
            return (
              <div
                key={index}
                className="relative w-full aspect-[16/9] cursor-pointer group"
                style={{
                  transform: `rotateX(${currentRotateX}deg) rotateY(${currentRotateY}deg) scale(${transitionScale})`,
                  opacity: imageOpacity,
                  transition: cardStraightenProgress > 0 ? "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)" : "all 0.4s ease-out",
                  maxWidth: "550px",
                  margin: "0 auto"
                }}
                onClick={() => handleImageClick(index)}
                onMouseEnter={() => handleImageHover("grid", index)}
                onMouseLeave={handleImageLeave}
              >
                <div className="relative w-full h-full bg-slate-800/20 backdrop-blur-sm rounded-3xl border border-slate-700/30 overflow-hidden transition-all duration-300 group-hover:border-[#2D99BA]/40 group-hover:shadow-[0_8px_32px_rgba(45,153,186,0.15)]">
                  <img
                    src={src}
                    alt={`Design ${index + 1}`}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {renderServiceOverlay(selectedServices[index], hoveredImage === `grid-${index}`)}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  const renderHeroText = () => (
  <div
    className="absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center text-center px-4 md:px-6 pointer-events-none mt-10 md:mt-30"
    style={{
      transform: `translateY(${-scrollY * 0.8}px)`,
      zIndex: scrollY > 200 ? 10 : 30,
    }}
  >
    <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-extrabold max-w-4xl mb-8 md:mb-12 tracking-tight leading-tight">
      <span className="">We're not just about</span>
      <br />
      <span className="text-[#2D99BA] glow-text-blue">
        {displayText}
        <span className="custom-cursor">|</span>
      </span>
      <br />
        <span className="text-gray-200 ">We're all of the above</span>
    </h1>
  </div>
)

  const renderCarouselRow = (images, services, offsetX, rowKeyPrefix, isInfinite = false) => {
    const displayImages = isInfinite ? [...images, ...images, ...images, ...images] : images
    const displayServices = isInfinite ? [...services, ...services, ...services, ...services] : services
    
    return (
      <div className="overflow-hidden px-4">
        <div
          className="flex space-x-4 md:space-x-16 transition-none"
          style={{
            transform: `translateX(${offsetX}px)`,
            width: "max-content",
          }}
        >
          {displayImages.map((src, index) => {
            const serviceTitle = displayServices[index]
            const isHovered = hoveredImage === `${rowKeyPrefix}-${index}`
            
            return (
              <div
                key={`${rowKeyPrefix}-${index}`}
                className="relative group flex-shrink-0 w-[250px] md:w-[420px] h-[180px] md:h-[280px] cursor-pointer"
                onMouseEnter={() => handleImageHover(rowKeyPrefix, index)}
                onMouseLeave={handleImageLeave}
              >
                <div className="relative w-full h-full bg-slate-800/20 backdrop-blur-sm rounded-3xl border border-slate-700/30 overflow-hidden transition-all duration-300 group-hover:border-[#2D99BA]/40 group-hover:shadow-[0_12px_40px_rgba(45,153,186,0.2)] group-hover:-translate-y-2">
                  <img
                    src={src}
                    alt={`Project ${index + 1}`}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {renderServiceOverlay(serviceTitle, isHovered)}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  return (
  <div className="min-h-[200vh] relative overflow-hidden">
    <style jsx>{`
      .glow-text {
        text-shadow: 
          0 0 10px rgba(255, 255, 255, 0.3),
          0 0 20px rgba(255, 255, 255, 0.2),
          0 0 30px rgba(255, 255, 255, 0.1);
      }
      
      .glow-text-blue {
        text-shadow: 
          0 0 10px rgba(45, 153, 186, 0.5),
          0 0 20px rgba(45, 153, 186, 0.4),
          0 0 30px rgba(45, 153, 186, 0.3),
          0 0 40px rgba(45, 153, 186, 0.2);
      }
      
      .custom-cursor {
        color: #2D99BA;
        font-size: 1.2em;
        font-weight: bold;
        text-shadow: 
          0 0 10px rgba(45, 153, 186, 0.8),
          0 0 20px rgba(45, 153, 186, 0.6),
          0 0 30px rgba(45, 153, 186, 0.4);
        animation: cursor-blink 1s infinite;
        display: inline-block;
        width: 0.1em;
        height: 1.2em;
        margin-left: 2px;
        vertical-align: middle;
        line-height: 1;
      }
      
      @keyframes cursor-blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
      }

      /* Mobile-specific styles */
      @media (max-width: 768px) {
        .custom-cursor {
          font-size: 1em;
          height: 1em;
          margin-left: 1px;
          vertical-align: middle;
        }
        h1 {
          line-height: 1.2;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .text-[#2D99BA] {
          display: inline-flex;
          align-items: center;
        }
      }

      /* Tablet-specific grid fixes */
      @media (min-width: 640px) and (max-width: 1023px) {
        .grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1.5rem;
          max-width: 800px;
          margin: 0 auto;
        }
      }
    `}</style>

    {(!showCarousels || scrollY < 800) && (
      <>
        {renderHeroText()}
        {selectedImages.length > 0 && renderImageGrid()}
      </>
    )}

    <div className="relative z-20 min-h-screen flex flex-col justify-center items-center text-center px-4 md:px-6" />

    {showCarousels && allCarouselImages.length > 0 && (
      <div 
        className="relative z-30 min-h-screen flex flex-col justify-center items-center py-10 md:py-20 overflow-hidden transition-opacity duration-500 ease-out"
        style={{
          opacity: scrollY >= 780 ? 1 : 0,
        }}
      >
        {/* Top carousel - static row with proper spacing */}
        <div className="mb-16 md:mb-24">
          {renderCarouselRow(allCarouselImages.slice(0, 6), allCarouselServices.slice(0, 6), firstRowTranslateX, "row1", false)}
        </div>
        
        {/* Bottom carousel - static row with proper spacing */}
        <div>
          {renderCarouselRow(
            allCarouselImages.slice(6, 12), 
            allCarouselServices.slice(6, 12), 
            secondRowTranslateX, 
            "row2", 
            false
          )}
        </div>
      </div>
    )}
  </div>
)
}