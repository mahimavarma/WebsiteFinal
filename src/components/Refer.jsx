import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Trophy, Users, Mail, Globe } from 'lucide-react';

export default function AxelonReferralProgram() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [activeStep, setActiveStep] = useState(0);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const steps = [
    {
      number: "01",
      title: "Share Your Referral",
      description: "Introduce your contact via email to welcome@axelontech.com with their details.",
      icon: Users
    },
    {
      number: "02", 
      title: "We Connect & Engage",
      description: "Our team reaches out to your referral and guides them through our services.",
      icon: Mail
    },
    {
      number: "03",
      title: "You Both Win",
      description: "When they sign a contract, you earn 10% of the project value—unlimited potential!",
      icon: Trophy
    }
  ];

  const faqs = [
    {
      question: "What is the Axelon Referral Program?",
      answer: "Refer new clients or brands to Axelon Technologies. When they sign a contract, you receive 10% of the project value—no limits."
    },
    {
      question: "Who can I refer?",
      answer: "Any brand or business that can benefit from our digital, AI, or development expertise. Friends, family, partners, contacts from any professional network—all are welcome."
    },
    {
      question: "How do I receive my reward?",
      answer: "Once your referral signs a contract and the project starts, you'll be contacted for your preferred payment method. Rewards are typically processed within 30 days of project commencement."
    },
    {
      question: "Is there a limit to the referral reward I can earn?",
      answer: "No—your referral reward is 10% of the total project value, no matter how large."
    },
    {
      question: "Can existing clients participate?",
      answer: "Yes! Existing clients can refer new brands and earn. Referring new projects from your own company is not eligible for additional rewards (see Terms & Conditions)."
    },
    {
      question: "How will I track my referral?",
      answer: "You will receive status updates at key milestones (introduction received, project contracted, reward processed). For any queries, contact referral@axelontech.com."
    },
    {
      question: "How soon do I get paid?",
      answer: "Within 30 days of the referral's project contract kickoff."
    },
    {
      question: "Can I refer more than one client?",
      answer: "Absolutely. There's no limit to the number of referrals or the total rewards you can accumulate."
    },
    {
      question: "What if my referral isn't successful?",
      answer: "We'll notify you as soon as a decision is made. If your referral isn't contracted, there's no reward, but you're always welcome to refer more."
    }
  ];

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
      <div className="relative z-10 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3"></div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 mt-20 gradient-shine">
            <span className="gradient-shine-word">Refer.</span>{' '}
            <span className="gradient-shine-word">Inspire.</span>{' '}
            <span className="gradient-shine-word">Earn</span>
            <br />
            <span className="gradient-shine-word">Limitlessly.</span>
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Help us expand our impact—refer a client, and both you and your referral win!
          </p>
          
          {/* Key Benefits */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 bg-gradient-to-r from-[#2D99BA]/10 to-[#1a5f72]/10 rounded-2xl border border-[#2D99BA]/20 hover:border-[#2D99BA]/40 transition-all duration-300 hover:scale-105">
              <Trophy className="w-12 h-12 text-[#2D99BA] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-[#2D99BA]">10% Unlimited Rewards</h3>
              <p className="text-gray-300">Earn 10% of every project value—no caps, no limits</p>
            </div>
            <div className="p-8 bg-gradient-to-r from-[#1a5f72]/10 to-[#2D99BA]/10 rounded-2xl border border-[#2D99BA]/20 hover:border-[#2D99BA]/40 transition-all duration-300 hover:scale-105">
              <Users className="w-12 h-12 text-[#3ba3c4] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-[#3ba3c4]">Premium Experience</h3>
              <p className="text-gray-300">Your referrals get exclusive onboarding and offers</p>
            </div>
          </div>
        </div>

        {/* How it Works - Interactive Steps */}
        <div className="mb-20">
          <h2 className="text-5xl font-bold text-center mb-16 text-white">How it Works</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={index}
                  className={`relative p-8 rounded-2xl border transition-all duration-500 cursor-pointer hover:scale-105 ${
                    activeStep === index 
                      ? 'bg-gradient-to-br from-[#2D99BA]/20 to-[#1a5f72]/20 border-[#2D99BA]/50 shadow-2xl shadow-[#2D99BA]/20' 
                      : 'bg-gray-800/30 border-gray-700/50 hover:border-[#2D99BA]/30'
                  }`}
                  onMouseEnter={() => setActiveStep(index)}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold transition-all duration-300 ${
                      activeStep === index 
                        ? 'bg-gradient-to-r from-[#2D99BA] to-[#3ba3c4] text-white shadow-lg shadow-[#2D99BA]/50' 
                        : 'bg-gray-700 text-gray-300'
                    }`}>
                      {step.number}
                    </div>
                    <Icon className={`w-8 h-8 transition-colors duration-300 ${
                      activeStep === index ? 'text-[#2D99BA]' : 'text-gray-400'
                    }`} />
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                    activeStep === index ? 'text-[#2D99BA]' : 'text-white'
                  }`}>
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{step.description}</p>
                  
                  {/* Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#2D99BA]/50 to-transparent"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Who Can Refer & Terms Combined */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white mb-8">Who Can Refer?</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Whether you're an existing client, a tech enthusiast, or simply anyone in our network—
              <span className="text-[#2D99BA] font-semibold"> everyone is eligible!</span>
            </p>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white mb-8">Key Terms</h2>
            {[
              "10% reward after contract signature—no caps",
              "Referrals must be recorded before signing", 
              "Multiple referrals = multiple rewards",
              "Updates at every milestone"
            ].map((term, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-gray-800/20 rounded-xl border border-gray-700/30 hover:border-[#2D99BA]/30 transition-all duration-300">
                <div className="w-2 h-2 bg-[#2D99BA] rounded-full mt-3 shadow-lg shadow-[#2D99BA]/50"></div>
                <p className="text-gray-200 text-lg">{term}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-20">
          <h2 className="text-5xl font-bold text-center mb-16 text-white">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="group">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between bg-gray-800/30 hover:bg-gray-800/50 rounded-2xl border border-gray-700/30 hover:border-[#2D99BA]/30 transition-all duration-300"
                >
                  <span className="text-xl font-medium text-white group-hover:text-[#2D99BA] transition-colors duration-300">{faq.question}</span>
                  <div className={`transform transition-transform duration-300 ${openFAQ === index ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-6 h-6 text-[#2D99BA]" />
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 py-4 text-gray-300 text-lg leading-relaxed bg-gray-800/10 rounded-b-2xl border-x border-b border-gray-700/20">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ready to Refer - CTA */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto p-16 bg-gradient-to-r from-[#2D99BA]/20 to-[#1a5f72]/20 rounded-3xl border border-[#2D99BA]/30 shadow-2xl shadow-[#2D99BA]/20">
            <Globe className="w-16 h-16 text-[#2D99BA] mx-auto mb-8" />
            <h2 className="text-5xl font-bold text-white mb-6">Ready to Refer?</h2>
            <p className="text-2xl text-gray-300 mb-10 leading-relaxed">
              Introduce future Axelon clients and start earning today
            </p>
            <a 
              href="mailto:welcome@axelontech.com"
              className="inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-[#2D99BA] to-[#3ba3c4] rounded-2xl font-bold text-white text-xl shadow-lg shadow-[#2D99BA]/30 hover:shadow-[#2D99BA]/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <Mail className="w-8 h-8" />
              <span>welcome@axelontech.com</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-20">
          <p className="text-gray-400 text-xl">
            <span className="text-[#2D99BA] font-semibold">Axelon Tech</span>—Rewarding Connections, Empowering Growth.
          </p>
        </div>
      </div>
      </div>

      <style jsx>{`
        .glow-primary {
          box-shadow: 0 0 20px rgba(45, 153, 186, 0.1);
        }
        .glow-secondary {
          box-shadow: 0 0 20px rgba(59, 163, 196, 0.1);
        }
        
        .gradient-shine {
          display: inline-block;
        }
        
        .gradient-shine-word {
          -webkit-text-fill-color: #2D99BA;
          transition: background-position 1s ease-in-out, -webkit-text-fill-color 0.2s ease-in-out;
        }
        
        .gradient-shine:hover .gradient-shine-word {
          background: linear-gradient(
            110deg,
            #2D99BA 0%,
            #2D99BA 25%,
            #ffffff 35%,
            #ffffff 40%,
            #3ba3c4 50%,
            #2D99BA 75%,
            #2D99BA 100%
          );
          background-size: 200% 100%;
          background-position: -200% 0;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          background-position: 200% 0;
        }
      `}</style>
    </div>
  );
}

