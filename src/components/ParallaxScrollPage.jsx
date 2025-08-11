"use client"

import { useState, useEffect, useMemo } from "react"

export default function ParallaxScrollPage() {
  console.log('🚀 Component starting to render at:', performance.now())

  const [scrollY, setScrollY] = useState(0)
  const [hoveredImage, setHoveredImage] = useState(null)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [selectedImages, setSelectedImages] = useState([])
  const [selectedServices, setSelectedServices] = useState([])
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [criticalImagesLoaded, setCriticalImagesLoaded] = useState(false)

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

  const typingTexts = ["AI Consulting & Automation", "Full Stack Development", "Data Engineering & Analytics", "SEO Analytics", "Digital Marketing"]

  // Initialize images and preload critical ones
  useEffect(() => {
    console.log('📸 Image initialization useEffect started at:', performance.now())
    
    const allNumbers = Array.from({ length: 12 }, (_, i) => i + 1)
    const shuffled = [...allNumbers].sort(() => Math.random() - 0.5)
    const selectedNumbers = shuffled.slice(0, 6)
    
    const heroImages = selectedNumbers.map(num => `/ServiceImage/${num}.png`)
    const heroServices = selectedNumbers.map(num => imageServicePairs.find(pair => pair.image === num)?.service || `Service ${num}`)
    
    setSelectedImages(heroImages)
    setSelectedServices(heroServices)
    
    console.log('📸 Images set at:', performance.now())

    // Preload first 3 critical images
    let loadedCount = 0
    heroImages.slice(0, 3).forEach((src, index) => {
      console.log('🖼️ Starting to preload image:', src, 'at:', performance.now())
      const img = new Image()
      img.onload = () => {
        loadedCount++
        console.log('✅ Image loaded:', src, 'at:', performance.now(), `(${loadedCount}/3)`)
        if (loadedCount === 3) {
          setCriticalImagesLoaded(true)
          console.log('🎉 Critical images loaded at:', performance.now())
        }
      }
      img.onerror = () => {
        console.error('❌ Failed to load image:', src, 'at:', performance.now())
      }
      img.src = src
    })

    // Preload remaining images in background
    setTimeout(() => {
      console.log('⏳ Starting to load remaining images at:', performance.now())
      heroImages.slice(3).forEach(src => {
        const img = new Image()
        img.onload = () => {
          loadedCount++
          console.log('✅ Background image loaded:', src, 'at:', performance.now())
          if (loadedCount === heroImages.length) {
            setImagesLoaded(true)
            console.log('🎊 All images loaded at:', performance.now())
          }
        }
        img.src = src
      })
    }, 500)

  }, [])

  // Start typing animation only after critical content is loaded
  useEffect(() => {
    console.log('⌨️ Typing useEffect triggered, criticalImagesLoaded:', criticalImagesLoaded, 'at:', performance.now())
    
    if (criticalImagesLoaded) {
      const timer = setTimeout(() => {
        console.log('▶️ Starting typing animation at:', performance.now())
        setIsTyping(true)
      }, 200)
      return () => clearTimeout(timer)
    }
  }, [criticalImagesLoaded])

  const imageRotations = useMemo(() => {
    console.log('🔄 Computing image rotations at:', performance.now())
    return selectedImages.map(() => ({ 
      rotateX: Math.random() * 8 - 4, 
      rotateY: Math.random() * 8 - 4 
    }))
  }, [selectedImages.length])

  // Scroll handling
  useEffect(() => {
    console.log('📜 Scroll listener setup at:', performance.now())
    let ticking = false

    const updateScrollY = () => {
      setScrollY(window.pageYOffset)
      ticking = false
    }

    const requestTick = () => { 
      if (!ticking) { 
        requestAnimationFrame(updateScrollY)
        ticking = true 
      } 
    }
    
    const handleSmoothScroll = () => requestTick()

    window.addEventListener("scroll", handleSmoothScroll, { passive: true })
    
    return () => {
      window.removeEventListener("scroll", handleSmoothScroll)
    }
  }, [])

  // Typing animation
  useEffect(() => {
    if (!isTyping) return

    const currentText = typingTexts[currentTextIndex]
    let timeoutId

    if (displayText.length < currentText.length) {
      timeoutId = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length + 1))
      }, 100)
    } else {
      timeoutId = setTimeout(() => {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length)
        }
      }, displayText.length === currentText.length ? 2000 : 50)
    }

    return () => clearTimeout(timeoutId)
  }, [displayText, isTyping, currentTextIndex, typingTexts])

  console.log('🎨 About to render at:', performance.now(), {
    criticalImagesLoaded,
    selectedImagesLength: selectedImages.length,
    isTyping,
    displayText: displayText.slice(0, 10) + '...'
  })

  const scrollProgress = Math.min(scrollY / 1200, 1)
  const rotateX = 15
  const rotateZ = 20
  const translateY = 0
  const scale = 0.9 + 0.1 * scrollProgress
  const imageOpacity = 0.2 + 0.4 * scrollProgress

  const handleImageClick = (index) => {
    if (scrollY > 200) {
      // Handle click logic here
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
    if (!criticalImagesLoaded) {
      console.log('🚫 Not rendering grid - critical images not loaded yet')
      return null
    }

    console.log('✅ Rendering image grid at:', performance.now())

    return (
      <div
        className="absolute top-0 left-0 w-full h-screen transition-transform duration-300 ease-out"
        style={{
          transform: `translateY(${translateY}px) rotateX(${rotateX}deg) rotateZ(${rotateZ}deg) scale(${scale})`,
          transformStyle: "preserve-3d",
          perspective: "1000px",
          zIndex: scrollY > 200 ? 30 : 10,
          pointerEvents: "auto",
        }}
      >
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-32">
          {selectedImages.map((src, index) => {
            const isImageLoaded = index < 3 || imagesLoaded

            return (
              <div
                key={index}
                className="relative w-full aspect-[16/9] cursor-pointer group"
                style={{
                  transform: `rotateX(${imageRotations[index].rotateX}deg) rotateY(${imageRotations[index].rotateY}deg)`,
                  opacity: imageOpacity,
                  transition: "all 0.4s ease-out",
                  maxWidth: typeof window !== 'undefined' && window.innerWidth <= 768 ? "300px" : "550px",
                  margin: "0 auto"
                }}
                onClick={() => handleImageClick(index)}
                onMouseEnter={() => handleImageHover("grid", index)}
                onMouseLeave={handleImageLeave}
              >
                <div className="relative w-full h-full bg-slate-800/20 backdrop-blur-sm rounded-3xl border border-slate-700/30 overflow-hidden transition-all duration-300 group-hover:border-[#2D99BA]/40 group-hover:shadow-[0_8px_32px_rgba(45,153,186,0.15)]">
                  {isImageLoaded ? (
                    <img
                      src={src}
                      alt={`Design ${index + 1}`}
                      className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                      loading={index < 3 ? "eager" : "lazy"}
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-700/30 animate-pulse flex items-center justify-center">
                      <div className="text-slate-400">Loading...</div>
                    </div>
                  )}
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

  const renderHeroText = () => {
    console.log('📝 Rendering hero text at:', performance.now())
    
    return (
      <div
        className="absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center text-center px-4 md:px-6 pointer-events-none mt-10 md:mt-30"
        style={{
          transform: `translateY(${-scrollY * 0.8}px)`,
          zIndex: scrollY > 200 ? 10 : 30,
        }}
      >
        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-extrabold max-w-4xl mb-8 md:mb-12 tracking-tight leading-tight">
          <span>We're not just about</span>
          <br />
          <span className="text-[#2D99BA] glow-text-blue">
            {displayText}
            {isTyping && <span className="custom-cursor">|</span>}
          </span>
          <br />
          <span className="text-gray-200">We're all of the above</span>
        </h1>
      </div>
    )
  }

  console.log('🏁 Component render complete at:', performance.now())

  return (
    <div className="min-h-screen relative overflow-hidden">
      <style>{`
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

        @media (min-width: 640px) and (max-width: 1023px) {
          .grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 1.5rem;
            max-width: 800px;
            margin: 0 auto;
          }
        }
      `}</style>

      {renderHeroText()}
      {selectedImages.length > 0 && renderImageGrid()}
    </div>
  )
}