"use client"

import { useEffect, useRef, useState } from "react"
import { Sparkles } from "lucide-react"

export function CascadingStats() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isFullyAligned, setIsFullyAligned] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Progress starts when top of section enters bottom 85% of viewport
      // Progress completes when section is well into view (top at 25% of viewport)
      const start = windowHeight * 0.85
      const end = windowHeight * 0.2
      const rawProgress = (start - rect.top) / (start - end)
      const clampedProgress = Math.min(Math.max(rawProgress, 0), 1)

      setScrollProgress(clampedProgress)
      setIsFullyAligned(clampedProgress >= 0.75)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const stats = [
    {
      value: "+200",
      label: "Businesses Transformed",
      subtext: "End-to-end operational systems & workflows deployed",
      initialY: 0,
    },
    {
      value: "+50",
      label: "Autonomous AI Pipelines",
      subtext: "Live multi-agent orchestration networks in production",
      initialY: 80, // staggered step 1
    },
    {
      value: "+6",
      label: "Years of Engineering",
      subtext: "Pioneering high-throughput full-stack architectures",
      initialY: 160, // staggered step 2
    },
    {
      value: "99.9%",
      label: "Operational Uptime",
      subtext: "Continuous 24/7 background execution reliability",
      initialY: 240, // staggered step 3
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 lg:py-40 overflow-hidden bg-black text-white"
    >
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-mono uppercase tracking-widest text-blue-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Proven Scale & Performance</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
            Metrics That Drive Leverage.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl mx-auto">
            Engineered systems that generate compounding operational velocity and measurable business outcomes.
          </p>
        </div>

        {/* Dynamic Cascading to Aligned Cards Grid */}
        <div className="relative pb-16 lg:pb-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            {stats.map((stat, index) => {
              // Calculate real-time translateY based on scroll progress
              // Starts at stat.initialY and smoothly goes to 0 as user scrolls
              const yOffset = Math.round(stat.initialY * (1 - scrollProgress))

              return (
                <div
                  key={stat.label}
                  style={{
                    transform: `translate3d(0, ${yOffset}px, 0)`,
                  }}
                  className="bg-white text-black rounded-2xl p-7 sm:p-8 flex flex-col justify-between h-72 sm:h-80 shadow-[0_20px_50px_rgba(0,0,0,0.85)] border border-neutral-200 transition-transform duration-500 ease-out hover:scale-[1.03] group relative overflow-hidden will-change-transform"
                >
                  {/* Subtle top indicator */}
                  <div className="flex items-center justify-between w-full">
                    <span className="text-[11px] font-mono font-bold tracking-wider text-neutral-400 uppercase">
                      STAT 0{index + 1}
                    </span>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#0047FF] opacity-80 group-hover:scale-125 transition-transform" />
                  </div>

                  {/* Main Metric Value */}
                  <div className="my-auto py-2">
                    <div className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-neutral-950 font-sans leading-none">
                      {stat.value}
                    </div>
                  </div>

                  {/* Label & Description */}
                  <div className="pt-4 border-t border-neutral-200/80">
                    <h3 className="text-base sm:text-lg font-bold text-neutral-900 leading-snug">
                      {stat.label}
                    </h3>
                    <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
                      {stat.subtext}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}

