import React, { useState, useEffect } from 'react';

const AxelonHero = () => {
  const [showLetters, setShowLetters] = useState(false);
  const [showTagline, setShowTagline] = useState(false);
  
  useEffect(() => {
    const letterTimer = setTimeout(() => {
      setShowLetters(true);
    }, 500);
    
    const taglineTimer = setTimeout(() => {
      setShowTagline(true);
    }, 2500);
    
    return () => {
      clearTimeout(letterTimer);
      clearTimeout(taglineTimer);
    };
  }, []);

  // Define different entry directions for each letter
  const letterAnimations = [
    { letter: 'A', direction: 'from-left' },
    { letter: 'X', direction: 'from-top' },
    { letter: 'E', direction: 'from-right' },
    { letter: 'L', direction: 'from-bottom' },
    { letter: 'O', direction: 'from-left' },
    { letter: 'N', direction: 'from-top' },
    { letter: 'T', direction: 'from-right' },
    { letter: 'E', direction: 'from-bottom' },
    { letter: 'C', direction: 'from-left' },
    { letter: 'H', direction: 'from-top' }
  ];

  return (
    <div className="relative min-h-screen bg-slate-900 overflow-hidden">
      {/* Custom Styles */}
      <style jsx>{`
        @keyframes slideFromLeft {
          0% {
            transform: translateX(-100vw);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideFromRight {
          0% {
            transform: translateX(100vw);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideFromTop {
          0% {
            transform: translateY(-100vh);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideFromBottom {
          0% {
            transform: translateY(100vh);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          0% {
            transform: translateY(50px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes textGlow {
          0% {
            text-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          100% {
            text-shadow: 0 0 40px rgba(59, 130, 246, 0.8);
          }
        }

        .from-left {
          animation: slideFromLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .from-right {
          animation: slideFromRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .from-top {
          animation: slideFromTop 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .from-bottom {
          animation: slideFromBottom 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }

        .text-glow {
          animation: textGlow 2s ease-in-out infinite alternate;
        }

        .letter-spacing-wide {
          letter-spacing: 0.1em;
        }
      `}</style>

      {/* Centered Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center px-4">
        
        {/* Main Title - Letters coming from different sides */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-glow letter-spacing-wide">
            {showLetters && (
              <div className="space-y-4">
                {/* AXELON */}
                <div className="flex justify-center items-center gap-1 md:gap-2">
                  {letterAnimations.slice(0, 6).map((item, index) => (
                    <span
                      key={index}
                      className={`inline-block ${item.direction} bg-[#2D99BA] bg-clip-text text-transparent`}
                      style={{ 
                        animationDelay: `${index * 0.1}s`,
                        opacity: 0
                      }}
                    >
                      {item.letter}
                    </span>
                  ))}
                </div>
                
                {/* TECH */}
                <div className="flex justify-center items-center gap-1 md:gap-2">
                  {letterAnimations.slice(6).map((item, index) => (
                    <span
                      key={index + 6}
                      className={`inline-block ${item.direction} text-white`}
                      style={{ 
                        animationDelay: `${(index + 6) * 0.1}s`,
                        opacity: 0
                      }}
                    >
                      {item.letter}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </h1>
        </div>

        {/* Tagline */}
        {showTagline && (
          <div className="fade-in-up">
            <p className="text-xl md:text-2xl text-white font-light letter-spacing-wide">
              Building Intelligent Systems That Drive Real Results
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AxelonHero;