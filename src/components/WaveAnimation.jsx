import React from "react";

const WaveAnimation = () => {
  const waveStyles = {
    body: {
      margin: 0,
      padding: 0,
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      fontFamily: "Arial, sans-serif",
    },
    modernWave: {
      position: "relative",
      width: "100%",
      maxWidth: "800px",
      height: "200px",
      background: "rgba(255, 255, 255, 0.05)",
      borderRadius: "20px",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      overflow: "hidden",
    },
    waveSvg: {
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
    },
    floatingParticle: {
      position: "absolute",
      borderRadius: "50%",
    },
  };

  const AnimatedWave = ({ delay = 0, opacity = 0.1, yOffset = 150 }) => (
    <path
      d={`M0,${yOffset} Q100,${
        yOffset - 50
      } 200,${yOffset} T400,${yOffset} T600,${yOffset} T800,${yOffset} T1000,${yOffset} T1200,${yOffset} V200 H0 Z`}
      fill={`rgba(255, 255, 255, ${opacity})`}
      style={{
        animation: `wave-morph 4s ease-in-out infinite ${delay}s`,
      }}
    />
  );

  const FloatingParticle = ({ size, top, left, delay = 0 }) => (
    <div
      style={{
        ...waveStyles.floatingParticle,
        width: `${size}px`,
        height: `${size}px`,
        background: `rgba(255, 255, 255, ${0.4 + size * 0.1})`,
        top: `${top}%`,
        left: `${left}%`,
        animation: `float ${3 + delay}s ease-in-out infinite ${-delay}s`,
      }}
    />
  );

  return (
    <div style={waveStyles.body}>
      <style>
        {`
          @keyframes wave-morph {
            0%, 100% {
              d: path("M0,150 Q100,100 200,150 T400,150 T600,150 T800,150 T1000,150 T1200,150 V200 H0 Z");
            }
            25% {
              d: path("M0,150 Q100,120 200,100 T400,120 T600,100 T800,120 T1000,100 T1200,150 V200 H0 Z");
            }
            50% {
              d: path("M0,150 Q100,80 200,120 T400,80 T600,120 T800,80 T1000,120 T1200,80 V200 H0 Z");
            }
            75% {
              d: path("M0,150 Q100,120 200,140 T400,120 T600,140 T800,120 T1000,140 T1200,120 V200 H0 Z");
            }
          }
          
          @keyframes float {
            0%, 100% { 
              transform: translateY(0px) rotate(0deg); 
              opacity: 1; 
            }
            50% { 
              transform: translateY(-20px) rotate(180deg); 
              opacity: 0.5; 
            }
          }
        `}
      </style>

      <div style={waveStyles.modernWave}>
        <svg
          style={waveStyles.waveSvg}
          viewBox="0 0 1200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <AnimatedWave delay={0} opacity={0.1} yOffset={150} />
          <AnimatedWave delay={-1} opacity={0.08} yOffset={160} />
          <AnimatedWave delay={-2} opacity={0.06} yOffset={170} />
        </svg>

        <FloatingParticle size={4} top={30} left={20} delay={0} />
        <FloatingParticle size={3} top={60} left={70} delay={1} />
        <FloatingParticle size={2} top={40} left={50} delay={2} />
        <FloatingParticle size={3} top={20} left={80} delay={1.5} />
        <FloatingParticle size={2} top={70} left={30} delay={0.5} />
      </div>
    </div>
  );
};

export default WaveAnimation;
