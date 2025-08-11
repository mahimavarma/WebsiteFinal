import React from 'react';

const CybersecurityBackground = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Main gradient background */}
      <div 
        className="fixed inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse at bottom left, rgba(32, 53, 70, 0.55) 0%, transparent 50%),
            radial-gradient(ellipse at center right, rgba(25, 37, 49, 0.5) 0%, transparent 40%),
            radial-gradient(ellipse at top right, rgba(255, 255, 255, 0.05) 0%, transparent 30%),
            linear-gradient(180deg, 
              #111717 0%, 
              #111717 30%, 
              #111717 60%, 
              #111717 100%
            )
          `
        }}
      />
      
      {/* Hexagonal pattern overlay */}
      <div 
        className="fixed inset-0 -z-10 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25px 25px, rgba(59, 130, 246, 0.3) 2px, transparent 2px),
            radial-gradient(circle at 75px 75px, rgba(16, 185, 129, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 50px 50px'
        }}
      />
      
      {/* Grid pattern */}
      <div 
        className="fixed inset-0 -z-10 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Diagonal lines */}
      <div 
        className="fixed inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 50px,
              rgba(59, 130, 246, 0.1) 50px,
              rgba(59, 130, 246, 0.1) 51px
            )
          `
        }}
      />
      
      {/* Floating geometric shapes */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Large circle - top right */}
        <div 
          className="absolute -top-32 -right-32 w-64 h-64 rounded-full opacity-18"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, transparent 70%)'
          }}
        />
        
        {/* Medium circle - bottom left */}
        <div 
          className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full opacity-25"
          style={{
            background: 'radial-gradient(circle, rgba(32, 53, 70, 0.5) 0%, transparent 70%)'
          }}
        />
      </div>
      
      {/* Subtle glow effects */}
      <div className="fixed inset-0 -z-10">
        {/* Left side glows */}
        <div 
          className="absolute top-1/4 left-0 w-96 h-96 opacity-50"
          style={{
            background: 'radial-gradient(ellipse, rgba(59, 130, 246, 0.6) 0%, transparent 70%)',
            filter: 'blur(40px)'
          }}
        />
        <div 
          className="absolute top-2/3 left-0 w-112 h-112 opacity-40"
          style={{
            background: 'radial-gradient(ellipse, rgba(32, 53, 70, 0.7) 0%, transparent 70%)',
            filter: 'blur(50px)'
          }}
        />
        <div 
          className="absolute bottom-1/4 left-0 w-80 h-80 opacity-45"
          style={{
            background: 'radial-gradient(ellipse, rgba(25, 37, 49, 0.6) 0%, transparent 70%)',
            filter: 'blur(45px)'
          }}
        />
        
        {/* Right side glows */}
        <div 
          className="absolute top-1/3 right-0 w-88 h-88 opacity-48"
          style={{
            background: 'radial-gradient(ellipse, rgba(59, 130, 246, 0.5) 0%, transparent 70%)',
            filter: 'blur(35px)'
          }}
        />
        <div 
          className="absolute bottom-1/3 right-0 w-72 h-72 opacity-50"
          style={{
            background: 'radial-gradient(ellipse, rgba(255, 255, 255, 0.15) 0%, transparent 60%)',
            filter: 'blur(40px)'
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default CybersecurityBackground;