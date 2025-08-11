import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Why choose Axelon Tech?",
      answer: "Because we deliver. No fluff, no delays, no excuses. Just sharp execution, clear communication, and results that speak for themselves. If you’re serious about building—we’re your team."
    },
    {
      question: "How do I get started with Axelon Tech?",
      answer: "Shoot us an email, DM on LinkedIn, or fill out the form—but the best way? Just hit the \"Book Call\" button (yep, the one up top)."
    },
    {
      question: "What makes Axelon Tech different from other agencies?",
      answer: "We don't just write code—we solve problems. Our team blends technical depth with business clarity. We move fast, stay lean, and focus on building systems that work and scale—not vanity portfolios."
    },
    {
      question: "Do you offer custom solutions or pre-packaged services?",
      answer: "Everything we do is custom. Your product, your stack, your goals. We build around you—not the other way around."
    },
    {
      question: "How do you manage projects and communication?",
      answer: "We mostly use Slack or Microsoft Teams—but we're flexible and can hop wherever you are. Expect real-time updates, shared workspaces, and clear timelines."
    },
    {
      question: "Can you take over or improve an existing product/system?",
      answer: "Yes—and we're really good at it. Whether it's a half-baked MVP, a black-burnt development system, or a growing tech mess—we audit, fix, scale, or rebuild as needed."
    },
    {
      question: "What does your pricing model look like?",
      answer: "Flexible. Transparent. No hidden charges. We work on fixed quotes, monthly retainers—whatever fits your scope and speed."
    },
    {
      question: "Do you sign NDAs and formal contracts?",
      answer: "Always. Your data stays protected. Your roadmap stays confidential. Your trust stays intact."
    },
    {
      question: "Where's your team based?",
      answer: "We're remote-first and timezone-fluid—mostly working wherever the client needs us. Agile, adaptable, and always online."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Absolutely. We don't ghost after delivery. We offer maintenance plans, technical support, SEO audits, and performance monitoring—tailored to your product and growth."
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes. India, U.S., Canada, UAE, Africa, Southeast Asia—you name it. We're timezone-agnostic and outcome-obsessed."
    },
    {
      question: "What tech stacks do you specialize in?",
      answer: "React, Node.js, WordPress, Python, Firebase, PostgreSQL, Figma, Canva, Power BI, Selenium, Wix—and a lot more. We expand our toolkit daily, so this list is just the surface."
    },
    {
      question: "Do you offer handover and training after project delivery?",
      answer: "Absolutely. You get clean documentation, screen-share walkthroughs, and live handover sessions so you're fully in control from Day 1."
    },
    {
      question: "Do you provide performance reporting?",
      answer: "Yes. You'll get weekly status reports on your development progress, SEO metrics, automation health, and anything else we're helping you build and grow."
    },
    {
      question: "Do you offer consulting for ongoing or upcoming projects?",
      answer: "Definitely. Whether you're stuck, scaling, or starting something big—we'll bring strategic clarity, tech direction, and execution advice that moves the needle."
    },
    {
      question: "What does your team look like?",
      answer: "We're a lean, agile crew of 10–15 professionals—full-time team members, elite contractors, and driven interns. Built for speed, designed to scale."
    },
    {
      question: "What kind of businesses do you work with?",
      answer: "From bootstrapped startups to enterprise giants—we've worked with them all. If you're building something ambitious, we're already interested."
    }
  ];

  const renderFAQItem = (item, index) => (
    <div
      key={index}
      className={`
        relative bg-slate-800/70 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden
        transition-all duration-300 hover:border-[#2D99BA] hover:-translate-y-1 group
        ${openIndex === index ? 'border-[#2D99BA]' : ''}
      `}
      style={{
        minHeight: '120px',
        boxShadow: openIndex === index 
          ? '0 0 30px rgba(45, 153, 186, 0.3)' 
          : '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}
    >
      {/* Glow Effect */}
      <div 
        className={`
          absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300
          ${openIndex === index ? 'opacity-20' : 'hover:opacity-10'}
        `}
        style={{
          background: 'linear-gradient(45deg, #2D99BA, #60a5fa, #2D99BA)',
          filter: 'blur(1px)',
          clipPath: 'inset(0 0 0 0)'
        }}
      />
      
      {/* Shimmer Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#2D99BA]/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
          style={{ clipPath: 'inset(0 0 0 0)' }}
        />
      </div>
      
      {/* Question */}
      <div
        className={`
          relative p-4 sm:p-6 cursor-pointer flex justify-between items-center
          bg-gradient-to-r from-[#2D99BA]/10 to-slate-800/10
          hover:from-[#2D99BA]/20 hover:to-slate-800/20
          transition-all duration-300
        `}
        style={{ minHeight: '120px' }}
        onClick={() => toggleAnswer(index)}
      >
        <h3 className={`
          text-base sm:text-lg font-semibold transition-all duration-300 relative z-10 pr-4
          ${openIndex === index ? 'text-[#2D99BA]' : 'text-slate-200 group-hover:text-[#2D99BA]'}
        `}
        >
          {item.question}
        </h3>
        
        <ChevronDown
          className={`
            w-5 sm:w-6 h-5 sm:h-6 text-[#2D99BA] transition-all duration-300 relative z-10 flex-shrink-0
            ${openIndex === index ? 'rotate-180' : ''}
          `}
          style={{
            filter: 'drop-shadow(0 0 5px rgba(45, 153, 186, 0.5))'
          }}
        />
      </div>
      
      {/* Answer */}
      <div
        className={`
          overflow-hidden transition-all duration-400 ease-in-out
          ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="p-4 sm:p-6 bg-slate-900/50 border-t border-slate-700/50">
          <p 
            className={`
              text-sm sm:text-base text-slate-300 leading-relaxed transition-all duration-300
              ${openIndex === index ? 'transform translate-y-0 opacity-100' : 'transform translate-y-2 opacity-0'}
            `}
            style={{ transitionDelay: openIndex === index ? '100ms' : '0ms' }}
          >
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen p-4 sm:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
            style={{
              color: '#FFFFFF',
            }}
          >
            Frequently Asked Questions
          </h1>
        </div>

        {/* First FAQ - Full Width */}
        <div className="mb-6 sm:mb-8">
          {renderFAQItem(faqData[0], 0)}
        </div>

        {/* Remaining FAQs - Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {/* Left Column - FAQs 1 to 8 */}
          <div className="space-y-4 sm:space-y-6">
            {faqData.slice(1, 9).map((item, index) => (
              <div key={index + 1} className="md:min-h-[140px]">
                {renderFAQItem(item, index + 1)}
              </div>
            ))}
          </div>
          
          {/* Right Column - FAQs 9 to 16 */}
          <div className="space-y-4 sm:space-y-6">
            {faqData.slice(9, 17).map((item, index) => (
              <div key={index + 9} className="md:min-h-[140px]">
                {renderFAQItem(item, index + 9)}
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div 
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-5"
            style={{
              background: 'radial-gradient(circle, #2D99BA 0%, transparent 70%)',
              filter: 'blur(40px)'
            }}
          />
          <div 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-5"
            style={{
              background: 'radial-gradient(circle, #60a5fa 0%, transparent 70%)',
              filter: 'blur(40px)'
            }}
          />
        </div>
      </div>
      
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default FAQSection;