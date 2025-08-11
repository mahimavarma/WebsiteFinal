"use client"

import { useState, useEffect, useRef } from "react"
import { Instagram, Facebook, Linkedin, Clock, Users, Globe, MapPin, Mail, Phone, User } from "lucide-react"
import { getCalApi } from "@calcom/embed-react"
import Form from "./form"

function useCounter(end, duration = 2000, trigger = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!trigger) return

    let startTime

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration, trigger])

  return count
}

export default function Commitment() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    domain: '',
    message: '',
  })

  const statsRef = useRef(null)

  const responseTimeCount = useCounter(12, 2000, isVisible)
  const clientsCount = useCounter(100, 2000, isVisible)
  const timeZonesCount = useCounter(24, 2000, isVisible)
  const countriesCount = useCounter(10, 2000, isVisible)

  // Cal.com integration
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"welcome"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])

  const handleGetStartedClick = () => {
    // Trigger the Cal.com booking widget using the correct API method
    const calElement = document.querySelector('[data-cal-link="axelon-tech/welcome"]');
    if (calElement) {
      calElement.click();
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
    }
  }, [])

  const handleMouseMove = (e) => {
    if (statsRef.current) {
      const rect = statsRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
      setMousePosition({ x, y })
    }
  }

  const handleMouseEnter = () => setIsHovering(true)
  const handleMouseLeave = () => {
    setIsHovering(false)
    setMousePosition({ x: 0, y: 0 })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handlePhoneChange = (phone) => {
    setFormData(prev => ({ ...prev, phone }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section data-section="commitment" className="relative min-h-screen overflow-hidden pt-20 pb-30">
      <style jsx>{`
        @keyframes glow {
          0% { box-shadow: 0 0 10px rgba(45, 153, 186, 0.5); }
          50% { box-shadow: 0 0 20px rgba(45, 153, 186, 0.7); }
          100% { box-shadow: 0 0 10px rgba(45, 153, 186, 0.5); }
        }
        .form-glow {
          animation: glow 2s ease-in-out infinite;
        }
        .form-glow:hover {
          box-shadow: 0 0 30px rgba(45, 153, 186, 0.9);
        }
        .custom-phone-input {
          background: #2d3748 !important;
          border: 1px solid #4b5563 !important;
          border-radius: 0.5rem !important;
          transition: all 0.3s ease !important;
          width: 100% !important;
        }
        .custom-phone-input:focus-within {
          border-color: #2D99BA !important;
          box-shadow: 0 0 0 2px rgba(45, 153, 186, 0.3) !important;
        }
        .custom-phone-input input {
          background: transparent !important;
          border: none !important;
          color: #dee2e6 !important;
          height: 48px !important;
          padding: 0 12px !important;
          font-size: 14px !important;
          width: 100% !important;
        }
        .custom-phone-input input::placeholder {
          color: #9ca3af !important;
        }
        select {
          background: rgb(189, 189, 189,0.1) !important;
          border: 1px solid #4b5563 !important;
          border-radius: 0.5rem !important;
          transition: all 0.3s ease !important;
          width: 100% !important;
          color: rgb(189, 189, 189) !important;
          height: 48px !important;
          padding: 0 12px !important;
          font-size: 15px !important;
        }
        select:focus {
          border-color: #2D99BA !important;
          box-shadow: 0 0 0 2px rgba(45, 153, 186, 0.3) !important;
          outline: none;
        }
        select option {
          background: #2d3748 !important;
          color: white !important;
        }
      `}</style>
      
      {/* Cal.com button for initialization */}
      <button 
        data-cal-namespace="welcome"
        data-cal-link="axelon-tech/welcome"
        data-cal-config='{"layout":"month_view"}'
        style={{ position: 'absolute', left: '-9999px', visibility: 'hidden' }}
      />

      {/* Main Container */}
      <div className="relative z-10 container mx-auto px-6 lg:px-20">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-none">
            <span className="text-white block">We're</span>
            <span className="text-white hidden lg:inline">Committed To </span>
            <span className="text-white block lg:hidden -mt-2">Committed To</span>
            <span className="text-[#2D99BA] lg:inline block -mt-2 lg:mt-0">Quality</span>
          </h1>
        </div>

        {/* Commented Form Section */}
        {/* <div className="flex justify-center">
          <div className="w-full max-w-md">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-2xl form-glow">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="w-6 h-6 text-[#2D99BA]" />
                  <h2 className="text-2xl font-bold text-white">Ask Your Query</h2>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-[#2D99BA] focus:border-transparent transition-all duration-300"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-[#2D99BA] focus:border-transparent transition-all duration-300"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Phone Number
                  </label>
                  <Form
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    name="phone"
                    required={false}
                    className="custom-phone-input"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-[#2D99BA] focus:border-transparent transition-all duration-300"
                    placeholder="Your Company Name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Domain
                  </label>
                  <select
                    name="domain"
                    value={formData.domain}
                    onChange={handleInputChange}
                    className="w-full"
                    required
                  >
                    <option value="" disabled>Select Domain</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="IT">IT</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Finance">Finance</option>
                    <option value="Education">Education</option>
                    <option value="Retail">Retail</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Your Query
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    maxLength={1000}
                    className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-[#2D99BA] focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Enter your query (1000 characters max)"
                    required
                  />
                </div>

                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full px-8 py-3 bg-gradient-to-r from-[#2D99BA] to-[#00b8e6] text-white font-semibold rounded-lg hover:from-[#00b8e6] hover:to-[#2D99BA] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#2D99BA] focus:ring-offset-2 focus:ring-offset-slate-800"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div> */}

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Section */}
          <div className="space-y-8">
            <p className="text-lg text-gray-300 leading-relaxed">
              We're not your grandma's web dev agency.
              We're AI-infused, automation-driven, startup-native builders who code like it's 2050.
              From design systems to data pipelines, chatbots to custom SaaS— we don't just ship projects, we engineer {" "}
              <span className="text-[#2D99BA] font-semibold">momentum.</span>
            </p>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={handleGetStartedClick}
                className="px-8 py-3 bg-[#2D99BA] text-white font-semibold rounded-lg hover:bg-[#00b8e6] transition-colors duration-300"
              >
                Get Started
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-2 items-center">
              <span className="text-white text-xl">
                Check out our latest updates on{" "}
                <a
                  href="https://in.linkedin.com/company/axelontech"
                  className="text-[#2D99BA] font-xl hover:underline transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  LinkedIn
                </a>
              </span>
            </div>
          </div>

          {/* Right Section - Stats Cards */}
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <div
                ref={statsRef}
                className="grid grid-cols-2 gap-4"
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {[
                  { value: responseTimeCount, suffix: "", label: "Average Response Time", icon: Clock, color: "#2D99BA", displayValue: `${responseTimeCount}` },
                  { value: clientsCount, suffix: "%", label: "Clients Use Us Like In-House Team", icon: Users, color: "#2D99BA", displayValue: clientsCount },
                  { value: timeZonesCount, suffix: "", label: "Time Zones We Work Across - Daily", icon: Globe, color: "#2D99BA", displayValue: timeZonesCount },
                  { value: countriesCount, suffix: "+", label: "Countries Served Remotely", icon: MapPin, color: "#2D99BA", displayValue: countriesCount },
                ].map(({ value, suffix, label, icon: Icon, color, displayValue }) => (
                  <div
                    key={label}
                    className="space-y-3 p-4 w-full rounded-lg bg-slate-800/30 border border-slate-700/50 hover:border-slate-600 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex justify-start">
                      <Icon className="w-6 h-6 text-gray-400" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-2xl font-bold" style={{ color }}>
                        {label === "Average Response Time" ? `<${displayValue}` : displayValue}{suffix}
                        {label === "Average Response Time" ? " hours" : ""}
                      </div>
                      <p className="text-xs text-gray-400 font-medium uppercase tracking-wider leading-tight">{label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}