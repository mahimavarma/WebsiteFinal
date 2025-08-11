import { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import ParallaxScrollPage from "./components/ParallaxScrollPage";
import InfiniteSlider from "./components/InfiniteSlider";
import Commitment from "./components/Commitment";
import AnimatedPortfolioSections from "./components/AnimatedPortfolioSections";
import ProcessTimeline from "./components/ProcessTimeline";
import LoadingPage from "./components/Loading";
import TestimonialsSection from "./components/Testimonials";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import FadeIn from "./FadeIn";
import { MessageCircle } from 'lucide-react';
import Refer from './components/Refer';
import Background from "./components/Background";

// Floating WhatsApp Button Component
const FloatingWhatsAppButton = () => {
  const whatsappNumbers = ['917028411589', '919823751351'];
  
  const whatsappMessage = encodeURIComponent(
    "Hi team Axelon,I'm working on something and could use your expertise. Let's talk?"
  );
  
  const handleWhatsAppClick = () => {
    const primaryNumber = whatsappNumbers[0];
    const whatsappUrl = `https://wa.me/${primaryNumber}?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <button
        onClick={handleWhatsAppClick}
        className="w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 relative group"
        title="Chat with us on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"></div>
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" style={{ animationDelay: '0.5s' }}></div>
      </button>
      
      <div className="absolute bottom-20 right-0 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
        💬 Chat with us on WhatsApp
        <div className="absolute top-full right-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
      </div>
    </div>
  );
};

function App() {
  // const [isLoading, setIsLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false); // Commented out loading page
  const [activeSection, setActiveSection] = useState("");

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 5200);
  //   return () => clearTimeout(timer);
  // }, []);

  const handleSectionChange = (section) => {
    console.log("App.jsx: handleSectionChange called with section:", section);
    setActiveSection(section);
  };

  console.log("App.jsx: Current activeSection:", activeSection);

  return (
    <div className="relative min-h-screen bg-black">
      {isLoading ? (
        <LoadingPage />
      ) : (
        // <Background>
        <>
          <Navbar onSectionChange={handleSectionChange} />
          
          {activeSection === "refer-earn" ? (
            <section id="refer-earn" style={{ minHeight: "100vh", position: "relative", zIndex: 10 }}>
              {console.log("App.jsx: Rendering Refer component")}
              <FadeIn>
                <Refer />
              </FadeIn>
            </section>
          ) : (
            <>
              <section id="home">
                <FadeIn>
                  <ParallaxScrollPage />
                </FadeIn>
              </section>

              <section id="clientele">
                <FadeIn delay={0.1}>
                  <InfiniteSlider />
                </FadeIn>
              </section>

              <section id="about">
                <FadeIn delay={0.2}>
                  <Commitment />
                </FadeIn>
              </section>

              <section id="services">
                <FadeIn delay={0.3}>
                  <AnimatedPortfolioSections />
                </FadeIn>
              </section>

              <section id="process">
                <FadeIn delay={0.4}>
                  <ProcessTimeline />
                </FadeIn>
              </section>

              <section id="testimonials">
                <FadeIn delay={0.5}>
                  <TestimonialsSection />
                </FadeIn>
              </section>

              <section id="faqs">
                <FadeIn delay={0.6}>
                  <FaqSection />
                </FadeIn>
              </section>

              {/* Simple footer replacement to prevent white space */}
              <section id="footer" className="bg-black min-h-[50px] w-full">
                <div className="bg-black w-full h-full min-h-[50px] flex items-center justify-center">
                  <span className="text-slate-500 text-xs">© 2025 Axelon Tech</span>
                </div>
              </section>

              {/* <section id="footer">
                <FadeIn delay={0.4}>
                  <Footer />
                </FadeIn>
              </section> */}
            </>
          )}

          <FloatingWhatsAppButton />
        {/* </Background> */}
        </>
      )}
    </div>
  );
}

export default App;