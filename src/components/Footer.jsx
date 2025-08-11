import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const ModernFooter = () => {
  return (
    <div>
      {/* Original Footer Content */}
      <footer className="bg-slate-950 text-white relative overflow-hidden pl-10 pr-20">
        {/* Decorative background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-radial from-[#2e99ba]/10 to-transparent rounded-full transform translate-x-24 -translate-y-24"></div>
          <div className="absolute bottom-0 left-0 w-36 h-36 bg-gradient-radial from-[#2e99ba]/10 to-transparent rounded-full transform -translate-x-18 translate-y-18"></div>
        </div>
        
        <div className="px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-8 mb-12">
            {/* Company Info Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="py-1 rounded font-bold text-3xl">
                  Axelon Tech
                </div>
              </div>
              
              <p className="text-slate-400 text-base leading-relaxed">
                Hey, you made it to the footer!
                That probably means you're <br></br>curious — we like that. Let's build something worth talking about.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 text-[#2e99ba] flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="w-8 h-5 rounded overflow-hidden shadow-lg border border-slate-700 flex-shrink-0">
                    <div className="h-1/3 bg-orange-500"></div>
                    <div className="h-1/3 bg-white flex items-center justify-center">
                      <div className="w-2 h-2 border border-blue-800 rounded-full relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-1 h-1 bg-blue-800 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <div className="h-1/3 bg-green-600"></div>
                  </div>
                  <span className="text-slate-400 text-sm">Mumbai, India</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 text-[#2e99ba] flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-slate-400 text-sm">Hiten&nbsp;(+91) 70284 11589 <br></br> Monish&nbsp;(+91) 98237 51351 </span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 text-[#2e99ba] flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-slate-400 text-sm">welcome@axelontech.com </span>
                </div>
              </div>
            </div>
            
            <div></div>
            
            {/* Quick Links Section */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <div className="w-6 h-6 border-2 border-[#2e99ba] rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#2e99ba] rounded-full"></div>
                </div>
                Quick Links
              </h3>
              
              <div className="space-y-3">
                <a href="#home" className="block text-slate-400 hover:text-[#2e99ba] transition-colors duration-200 text-sm">
                  Home
                </a>
                <a href="#about" className="block text-slate-400 hover:text-[#2e99ba] transition-colors duration-200 text-sm">
                  About Us
                </a>
                <a href="#services" className="block text-slate-400 hover:text-[#2e99ba] transition-colors duration-200 text-sm">
                  Services
                </a>
                <a href="#process" className="block text-slate-400 hover:text-[#2e99ba] transition-colors duration-200 text-sm">
                  Know More
                </a>
              </div>
            </div>
          </div>
          
          {/* Footer Bottom */}
          <div className="border-t border-slate-800 pt-8 flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-sm">
              © 2025 All Rights Reserved - AXELON TECH 
            </div>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a href="https://in.linkedin.com/company/axelontech" className="w-8 h-8 bg-slate-800 hover:bg-[#2e99ba] rounded-full flex items-center justify-center transition-colors duration-200">
                <Linkedin className="w-4 h-4 text-slate-400 hover:text-white" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Version at the very bottom */}
        <div className="bg-slate-950 border-t border-slate-800/50 py-2 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-slate-500 text-xs">Version 1.0</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ModernFooter;