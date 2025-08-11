"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Calcom from "./Calcom"

export const Navbar = ({ onSectionChange }) => { // Add onSectionChange prop
  const [activeSection, setActiveSection] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const menuRef = useRef(null)
  const dropdownRef = useRef(null)

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev)
  }, [])

  const toggleDropdown = useCallback(() => {
    setIsDropdownOpen((prev) => !prev)
  }, [])

  const handleClickOutside = useCallback((event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false)
    }
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false)
    }
  }, [])

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [handleClickOutside])

  useEffect(() => {
    const section = document.getElementById("services")
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setActiveSection(entry.isIntersecting ? "services" : "")
      },
      {
        root: null,
        rootMargin: "-100px 0px -60% 0px",
        threshold: 0.3,
      },
    )

    observer.observe(section)
    return () => observer.unobserve(section)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (section) => {
    console.log("🔥 NAVBAR DEBUG: handleNavClick called with:", section);
    setActiveSection(section)
    setIsMenuOpen(false)
    setIsDropdownOpen(false)
    
    // THIS IS THE FIX: Call the onSectionChange prop from App
    if (onSectionChange) {
      console.log("🔥 NAVBAR DEBUG: Calling onSectionChange with:", section);
      onSectionChange(section);
    } else {
      console.log("🔥 NAVBAR DEBUG: ❌ onSectionChange prop is missing!");
    }
  }

  return (
    <>
      <style jsx>{`
        .active-nav-link {
          color: #2D99BA !important;
          border-bottom: 2px solid #2D99BA;
          padding-bottom: 2px;
        }
        .arrow {
          transition: transform 0.3s ease;
        }
      `}</style>

      <nav
        className={`fixed top-0 z-50 bg-gray-900/60 backdrop-blur-lg text-white shadow-md rounded-full border border-[rgb(45,153,186)] transition-all duration-700 pt-4 pb-4 mt-10`}
        style={{
          marginLeft: isScrolled ? "25%" : "2.5rem",
          marginRight: isScrolled ? "25%" : "2.5rem",
          width: isScrolled ? "50%" : "calc(100% - 5rem)",
        }}
      >
        <div className={`w-full flex items-center ${isScrolled ? "px-6" : "px-12 md:px-6 lg:px-16"} justify-between`}>
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 overflow-hidden mr-10${isScrolled ? "pl-2" : "pl-5"}`}>
              <img 
                src="/assets/img/dark_logo_transparent.png" 
                className="w-full h-full object-contain"
                alt="Axelon Tech" 
              />
            </div>
            {!isScrolled && <span className="font-semibold text-xl sm:text-2xl">Axelon Tech</span>}
          </div>

          {/* Desktop Navigation - Show on desktop always, tablet only when not scrolled */}
          <div className={`${isScrolled ? "hidden lg:flex" : "hidden md:flex"} items-center ${isScrolled ? "space-x-4" : "md:space-x-4 lg:space-x-6"}`}>
            <a
              href="#home"
              onClick={() => handleNavClick("home")}
              className={`font-medium hover:text-[#2D99BA] nav-link ${activeSection === "home" ? "active-nav-link" : ""}`}
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => handleNavClick("about")}
              className={`font-medium hover:text-[#2D99BA] nav-link ${activeSection === "about" ? "active-nav-link" : ""}`}
            >
              About
            </a>
            <a
              href="#refer-earn"
              onClick={() => handleNavClick("refer-earn")}
              className={`font-medium hover:text-[#2D99BA] nav-link ${activeSection === "refer-earn" ? "active-nav-link" : ""}`}
            >
              Refer & Earn
            </a>

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="font-medium hover:text-[#2D99BA] flex items-center gap-1 whitespace-nowrap"
              >
                Know More
                <svg className="arrow w-4 h-4" style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute mt-2 right-0 bg-slate-800 text-white shadow-lg rounded-md w-48 py-2 z-50">
                  <a href="#services" onClick={() => handleNavClick("services")} className="block px-4 py-2 hover:bg-slate-700">Services</a>
                  <a href="#process" onClick={() => handleNavClick("process")} className="block px-4 py-2 hover:bg-slate-700">Process</a>
                  <a href="#clientele" onClick={() => handleNavClick("clientele")} className="block px-4 py-2 hover:bg-slate-700">Clientele</a>
                  <a href="#testimonials" onClick={() => handleNavClick("testimonials")} className="block px-4 py-2 hover:bg-slate-700">What our clients say</a>
                  <a href="#faqs" onClick={() => handleNavClick("faqs")} className="block px-4 py-2 hover:bg-slate-700">FAQs</a>
                </div>
              )}
            </div>
          </div>

          {/* CTA Button - Show on desktop always, tablet only when not scrolled */}
          <div className={`${isScrolled ? "hidden lg:flex" : "hidden md:flex md:ml-6 lg:ml-0"} items-center`}>
            <Calcom isScrolled={isScrolled} />
          </div>

          {/* Hamburger Menu - Show on mobile always, tablet only when scrolled */}
          <button
            onClick={toggleMenu}
            className={`${isScrolled ? "md:block lg:hidden" : "md:hidden"} p-2 text-white hover:text-[#2D99BA]`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu (always) & Tablet Menu (when scrolled) */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-64 bg-slate-900 z-50 transform transition-transform duration-300 ${isScrolled ? "md:block lg:hidden" : "md:hidden"} ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-start p-6 mt-14 space-y-4">
          <a href="#home" onClick={() => handleNavClick("home")} className="text-white text-lg font-semibold hover:text-[#2D99BA]">Home</a>
          <a href="#about" onClick={() => handleNavClick("about")} className="text-white text-lg font-semibold hover:text-[#2D99BA]">About</a>
          <a href="#refer-earn" onClick={() => handleNavClick("refer-earn")} className="text-white text-lg font-semibold hover:text-[#2D99BA]">Refer&Earn</a>

          <div className="w-full">
            <button
              onClick={toggleDropdown}
              className="text-white text-lg font-semibold flex items-center justify-between w-full hover:text-[#2D99BA]"
            >
              Know More
              <svg className="arrow w-5 h-5 ml-2" style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="flex flex-col mt-2 space-y-2">
                <a href="#services" onClick={() => handleNavClick("services")} className="block px-4 py-2 text-white text-base hover:bg-slate-700 hover:text-[#2D99BA]">Services</a>
                <a href="#process" onClick={() => handleNavClick("process")} className="block px-4 py-2 text-white text-base hover:bg-slate-700 hover:text-[#2D99BA]">Process</a>
                <a href="#clientele" onClick={() => handleNavClick("clientele")} className="block px-4 py-2 text-white text-base hover:bg-slate-700 hover:text-[#2D99BA]">Clientele</a>
                <a href="#testimonials" onClick={() => handleNavClick("testimonials")} className="block px-4 py-2 text-white text-base hover:bg-slate-700 hover:text-[#2D99BA]">What our clients say</a>
                <a href="#faqs" onClick={() => handleNavClick("faqs")} className="block px-4 py-2 text-white text-base hover:bg-slate-700 hover:text-[#2D99BA]">FAQs</a>
              </div>
            )}
          </div>

          <div className="mt-4">
            <Calcom isScrolled={false} />
          </div>
        </div>
      </div>
    </>
  )
}