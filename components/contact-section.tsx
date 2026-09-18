"use client"

import { ArrowRight, Sparkles } from "lucide-react"
import { openConnectModal } from "@/components/connect-modal"

export function ContactSection() {
  return (
    <section id="team" className="relative scroll-mt-20">
      <span id="contact" className="absolute -top-24" />

      {/* Seamless Organic Wave Divider transitioning from previous section */}
      <div className="w-full overflow-hidden leading-none select-none pointer-events-none -mb-1 bg-transparent">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative block w-full h-12 sm:h-20 md:h-28 text-[#070c18] fill-current"
          preserveAspectRatio="none"
        >
          <path d="M0,45 C240,110 480,10 720,60 C960,110 1200,15 1440,45 V120 H0 Z" />
        </svg>
      </div>

      {/* Contact Banner Section */}
      <div className="bg-[#070c18] py-20 sm:py-28 relative overflow-hidden">
        {/* Ambient Subtle Blue Glow */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-blue-400 text-xs font-mono uppercase tracking-widest">
                <span>LET'S BUILD WHAT'S NEXT</span>
              </div>

              <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                Have an idea? <br />
                Let's make it <span className="text-[#0047FF]">real</span>
              </h2>
            </div>

            {/* Right Column: Description & Action */}
            <div className="lg:col-span-5 flex flex-col items-start lg:items-start space-y-6">
              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-md">
                Whether you're a startup or an enterprise, we're here to turn your vision into powerful software.
              </p>

              <div className="space-y-3.5">
                <button
                  onClick={() => openConnectModal()}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0047FF] hover:bg-[#0038e0] text-white font-semibold text-sm sm:text-base shadow-[0_0_30px_rgba(0,71,255,0.4)] hover:shadow-[0_0_40px_rgba(0,71,255,0.65)] hover:scale-[1.02] transition-all duration-300 group"
                >
                  <span>Start a Conversation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-2 text-xs text-zinc-400 pl-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block" />
                  <span>Usually responds within 24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
