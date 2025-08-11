import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export default function TestimonialsCarousel() {
  const testimonials = [
    {
      id: 1,
      name: "Shivraj Vichare",
      position: "Product Manager",
      company: "QuickNexus, Washington DC",
      testimonial:
        "Axelon Tech brought strong AI expertise and a clear problem-solving approach to our platform. They quickly understood complex systems and provided practical, research-backed solutions. The collaboration was smooth, professional, and impactful. We're very satisfied with the results and would gladly recommend Axelon Tech for any AI or tech-driven initiative.",
      rating: 5,
      highlight: "AI Expertise & Practical Solutions",
    },
    {
      id: 2,
      name: "Max",
      position: "Founder",
      company: "Bossmaker Tradelines, USA",
      testimonial:
        "Working with Axelon Tech was an excellent experience. They communicated clearly, worked seamlessly within our team, and delivered on every commitment. Technically sharp and reliable, they brought real value to our project. I highly recommend them for anyone needing a competent and trustworthy tech partner.",
      rating: 5,
      highlight: "Team Player & Communicator",
    },
    {
      id: 3,
      name: "Farhan",
      position: "Founder & CEO",
      company: "Zaydu,Canada",
      testimonial:
        "Axelon Tech played a crucial role in building our analytics dashboards. They consistently turned complex data into clear, actionable insights and delivered scalable, user-friendly solutions. Their proactive, quality-focused approach made a major impact on our analytics strategy. We truly value the partnership.",
      rating: 5,
      highlight: "Data-Driven & Scalable Dashboards",
    },
    {
      id: 4,
      name: "Fabrice Kaeppeli",
      position: "",
      company: "Switzerland",
      testimonial:
        "It was a smooth and highly efficient collaboration with Axelon Tech. They were responsive, clear in communication, and delivered excellent results. I'm very pleased with the outcome and would confidently recommend Axelon Tech to anyone looking for reliable tech services.",
      rating: 5,
      highlight: "Efficient & Reliable",
    },
    {
      id: 5,
      name: "Dhruv Gala",
      position: "Founder",
      company: "Roaders, India",
      testimonial:
        "Axelon Tech helped turn our app concept into a fully developed solution with exceptional professionalism. They understood our vision, kept timelines on track, managed the development process efficiently, and resolved challenges quickly. The final product exceeded expectations. A dedicated and reliable tech partner we would gladly work with again.",
      rating: 5,
      highlight: "Visionary Execution & Dedication",
    },
    {
      id: 6,
      name: "Katina",
      position: "COO",
      company: "Stride Africa",
      testimonial:
        "Axelon Tech delivered excellent work with strong communication and innovative thinking. Their approach was solution-driven, and the entire process ran smoothly. Their professionalism and attention to detail were impressive. A great partner for businesses seeking dependable tech execution",
      rating: 5,
      highlight: "Innovative & Communicative",
    },
    {
      id: 7,
      name: "Suraj Pal Singh",
      position: "COO",
      company: "Trading Kulture",
      testimonial:
        "Our experience with Axelon Tech was truly outstanding. They worked through tight deadlines with complete focus, even overnight when needed. Their team quickly understood our requirements, communicated clearly, and delivered high-quality results with zero stress. We're extremely happy with the outcome.",
      rating: 5,
      highlight: "Committed & Clear Communicator",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval) // Cleanup on unmount
  }, [testimonials.length])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="min-h-screen py-16 px-4 flex items-center justify-center">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What our clients say
          </h2>
          <p className="text-gray-300 text-lg">
            Trusted by businesses worldwide
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-[#2D99BA] hover:bg-[#236B80] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-[#2D99BA] hover:bg-[#236B80] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>

          {/* Testimonial Card with Animation */}
          <div
            key={currentTestimonial.id}
            className="bg-slate-800 rounded-2xl p-8 md:p-12 shadow-2xl border border-slate-700"
            style={{
              animation: 'fadeInUp 0.6s ease-out',
              transform: 'translateY(0)',
              opacity: 1,
            }}
          >
            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star 
                  key={i} 
                  className="w-6 h-6 text-[#2D99BA] fill-current" 
                  style={{
                    animation: `starGlow 0.8s ease-out ${i * 0.1}s`,
                    animationFillMode: 'both'
                  }}
                />
              ))}
            </div>

            {/* Highlight Badge */}
            <div className="text-center mb-6">
              <span 
                className="inline-block bg-[#2D99BA] text-white px-4 py-2 rounded-full text-sm font-medium"
                style={{
                  animation: 'slideInFromTop 0.7s ease-out 0.2s',
                  animationFillMode: 'both'
                }}
              >
                {currentTestimonial.highlight}
              </span>
            </div>

            {/* Testimonial Text */}
            <blockquote 
              className="text-gray-200 text-lg md:text-xl leading-relaxed text-center mb-8 italic"
              style={{
                animation: 'fadeIn 0.8s ease-out 0.3s',
                animationFillMode: 'both'
              }}
            >
              "{currentTestimonial.testimonial}"
            </blockquote>

            {/* Client Info */}
            <div 
              className="text-center"
              style={{
                animation: 'slideInFromBottom 0.7s ease-out 0.4s',
                animationFillMode: 'both'
              }}
            >
              <h4 className="text-white text-xl font-semibold mb-1">
                {currentTestimonial.name}
              </h4>
              {currentTestimonial.position && (
                <p className="text-[#2D99BA] font-medium mb-1">
                  {currentTestimonial.position}
                </p>
              )}
              {currentTestimonial.company && (
                <p className="text-gray-400">{currentTestimonial.company}</p>
              )}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#2D99BA] scale-125"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Inline CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes starGlow {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInFromBottom {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}