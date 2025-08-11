// Calcom.jsx
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function Calcom({ isScrolled }) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "welcome" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <button
      data-cal-namespace="welcome"
      data-cal-link="axelon-tech/welcome"
      data-cal-config='{"layout":"month_view"}'
      className={`group relative bg-gradient-to-r from-[#2D99BA] to-[#35A1D3] hover:from-[#268ba8] hover:to-[#3094bf] text-white rounded-full font-semibold transition-all duration-500 transform hover:scale-105 hover:shadow-lg animate-pulse-slow overflow-hidden ${
        isScrolled ? "px-5 py-2.5 text-sm" : "px-6 py-3 text-base"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
      <div className="relative flex items-center space-x-2 z-10">
        <div className="relative">
          <svg
            className={`transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 ${
              isScrolled ? "w-5 h-5" : "w-6 h-6"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping group-hover:animate-none"></div>
        </div>
        <span className={`group-hover:tracking-wider transition-all duration-300 ${isScrolled ? "text-sm" : "text-base"}`}>
          {isScrolled ? "Book Call" : "Book a Call"}
        </span>
        <svg
  className={`transform group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300 animate-bounce-subtle ${
    isScrolled ? "w-4 h-4" : "w-5 h-5"
  }`}
  fill="none"
  stroke="currentColor"
  viewBox="0 0 24 24"
>
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
</svg>
      </div>
      <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-[#2D99BA] to-[#35A1D3] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-glow"></div>
    </button>
  );
}