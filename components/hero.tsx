"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { openConnectModal } from "@/components/connect-modal"
import { WrapVectorLogo } from "@/components/wrapvector-logo"

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-24 overflow-hidden bg-radial-gradient">
      {/* Background Accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 backdrop-blur-md mb-8 animate-fade-in shadow-[0_0_20px_rgba(0,71,255,0.2)]">
            <WrapVectorLogo className="h-3.5 w-auto text-blue-400 shrink-0" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-blue-300 uppercase">
              AI • AUTOMATION • SOFTWARE • DIGITAL PRODUCTS
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] max-w-4xl">
            <span className="block text-white">Build Smarter</span>
            <span className="block text-[#0047FF]">
              Automate Everything
            </span>
            <span className="block text-zinc-300">Scale Faster</span>
          </h1>

          {/* Supporting Headline */}
          <p className="mt-6 text-base sm:text-lg text-zinc-300/90 max-w-2xl leading-relaxed font-normal">
            We build AI-powered products, intelligent agents, and automation systems that turn complex business processes into seamless digital experiences.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="mt-9 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Button
              onClick={() => openConnectModal()}
              size="lg"
              className="w-full sm:w-auto bg-[#0047FF] hover:bg-[#0038e0] text-white font-semibold text-sm sm:text-base px-8 py-6 rounded-full border border-blue-400/40 shadow-[0_0_25px_rgba(0,71,255,0.4)] hover:shadow-[0_0_35px_rgba(0,71,255,0.6)] hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Build With Us</span>
              <ArrowRight className="w-4 h-4" />
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto bg-zinc-900 hover:bg-zinc-800 text-zinc-100 hover:text-white border-white/15 px-8 py-6 rounded-full text-base transition-all"
            >
              <a href="#work" className="flex items-center justify-center gap-2">
                <span>Explore Our Work</span>
              </a>
            </Button>
          </div>


        </div>
      </div>
    </section>
  )
}
