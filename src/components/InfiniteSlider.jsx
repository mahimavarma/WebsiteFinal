import { useEffect, useRef, useState } from "react";

const brands = [
 
  {
    name: "Smart Reviews AI",
    country: "Thailand",
    flag: "https://flagcdn.com/th.svg",
    tagline: "Transform Your Online Presence with Smart AI Reviews"
  },

  {
    name: "Zaydu",
    country: "Canada",
    flag: "https://flagcdn.com/ca.svg",
    tagline: "Delicious Ready-Made Meals Delivered To Your Door"
  },
  {
    name: "Roaders",
    country: "India",
    flag: "https://flagcdn.com/in.svg",
    tagline: "Transforming Transport & Logistics for Businesses and Individuals"
  },
  {
    name: "Stride Africa",
    country: "South Africa",
    flag: "https://flagcdn.com/za.svg",
    tagline: "Finally, Marketing That Makes Sense"
  },
 
 
 
  {
    name: "Bossmaker Tradelines",
    country: "USA",
    flag: "https://flagcdn.com/us.svg",
    tagline: "Unlock Your Credit Potential with Bossmaker Tradelines!"
  },
  {
    name: "Venera Biotech",
    country: "India",
    flag: "https://flagcdn.com/in.svg",
    tagline: "25 years of Inspired Engineering For Mankind."
  },
   {
    name: "Mail Mafia",
    country: "South Africa",
    flag: "https://flagcdn.com/za.svg",
    tagline: "Direct Mail. On-Demand. Delivered Like a Boss."
  },
   {
    name: "QuickNexus",
    country: "USA",
    flag: "https://flagcdn.com/us.svg",
    tagline: "Specializing in ServiceNow Discovery and CMDB Solutions."
  },
  {
    name: "EPL LIMITED",
    country: "Worldwide",
    flag: "/globe.svg",
    tagline: "Leading The Pack Sustainably"
  },
   {
    name: "Gulf Cabinets Florida",
    country: "USA",
    flag: "https://flagcdn.com/us.svg",
    tagline: "The Cabinet Advantage for Commercial Builders"
  },
 
  {
    name: "TRADING KULTURE",
    country: "India",
    flag: "https://flagcdn.com/in.svg",
    tagline: "Unlimited Access To Powerful Institutional Trading Ideas"
  },
    
];

export default function BrandCarousel() {
  const scrollRef = useRef(null);
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (type, index) => {
    setImageErrors((prev) => ({
      ...prev,
      [`${type}-${index}`]: true
    }));
  };

  const getLogoPath = (brandName) => {
    // Map brands to their actual file names and extensions
    const logoMap = {
      "Smart Reviews AI": "Smart Reviews AI.png",
      "Zaydu": "Zaydu.png", 
      "Roaders": "Roaders.png",
      "Stride Africa": "Stride Africa.png",
      "Bossmaker Tradelines": "Bossmaker Tradelines.png",
      "Venera Biotech": "Venera Biotech.png",
      "Mail Mafia": "Mail Mafia.png",
      "QuickNexus": "QuickNexus.iix",
      "EPL LIMITED": "EPL LIMITED.svg",
      "Gulf Cabinets Florida": "Gulf Cabinets Florida.png",
      "TRADING KULTURE": "TRADING KULTURE.jpg"
    };
    
    const fileName = logoMap[brandName] || `${brandName}.png`;
    return `/LogoImages/${fileName}`;
  };

  const getInitials = (name) => {
    return name
      .split(/\s+/)
      .map(word => word.charAt(0))
      .join('')
      .slice(0, 2)
      .toUpperCase();
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId;
    let scrollPosition = 0;
    const scrollSpeed = 1.0;

    const animate = () => {
      scrollPosition += scrollSpeed;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => (animationId = requestAnimationFrame(animate));

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const renderBrandCard = (brand, index, keyPrefix) => (
    <div key={`${keyPrefix}-${index}`} className="flex-shrink-0 flex items-center justify-center w-[160px] sm:w-[180px] md:w-[200px] h-[80px] sm:h-[90px] md:h-[100px]">
      {imageErrors[`logo-${index}`] ? (
        <div className="w-full h-full flex items-center justify-center bg-white/10 rounded-lg">
          <span className="text-sm text-white font-semibold">
            {getInitials(brand.name)}
          </span>
        </div>
      ) : (
        <img
          src={getLogoPath(brand.name)}
          alt={`${brand.name} logo`}
          onError={() => handleImageError("logo", index)}
          className="w-full h-full object-contain hover:opacity-90 transition-opacity duration-300"
          style={{
            filter: brand.name === "EPL LIMITED" 
              ? 'brightness(0) invert(1)' 
              : 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)',
            mixBlendMode: 'normal'
          }}
        />
      )}
    </div>
  );

  return (
    <section className="py-8 sm:py-12 md:py-16 px-2 sm:px-4 md:px-8 lg:px-20 min-h-[40vh] sm:min-h-[50vh] relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-regular text-gray-500 mb-2 px-2">
            Trusted by many brands across the globe
          </h2>
        </div>

        <div className="mx-3 sm:mx-6 md:mx-8">
          <div
            ref={scrollRef}
            className="overflow-hidden whitespace-nowrap"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="inline-flex gap-12 sm:gap-16 md:gap-20 items-center">
              {brands.map((brand, index) => renderBrandCard(brand, index, "first"))}
              {brands.map((brand, index) => renderBrandCard(brand, index, "second"))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .overflow-hidden::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}