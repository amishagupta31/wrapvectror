"use client"

import { Sparkles } from "lucide-react"

export function CascadingStats() {
  const stats = [
    {
      value: "+200",
      label: "Businesses Transformed",
      subtext: "End-to-end operational systems & workflows deployed",
    },
    {
      value: "+50",
      label: "Autonomous AI Pipelines",
      subtext: "Live multi-agent orchestration networks in production",
    },
    {
      value: "+6",
      label: "Years of Engineering",
      subtext: "Pioneering high-throughput full-stack architectures",
    },
    {
      value: "99.9%",
      label: "Operational Uptime",
      subtext: "Continuous 24/7 background execution reliability",
    },
  ]

  return (
    <section className="relative py-20 sm:py-28 lg:py-32 overflow-hidden bg-black text-white">
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-mono uppercase tracking-widest text-blue-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Proven Scale & Performance</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
            Metrics That Drive <span className="text-[#0047FF]">Leverage</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl mx-auto">
            Engineered systems that generate compounding operational velocity and measurable business outcomes.
          </p>
        </div>

        {/* Level Aligned 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-[#070e24] text-white rounded-2xl p-7 sm:p-8 flex flex-col justify-between h-72 sm:h-80 shadow-[0_20px_50px_rgba(0,0,0,0.9)] border border-blue-900/40 hover:border-blue-500/60 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.02] group relative overflow-hidden backdrop-blur-xl hover:shadow-[0_20px_50px_rgba(0,71,255,0.25)]"
            >
              {/* Subtle top indicator */}
              <div className="flex items-center justify-between w-full">
                <span className="text-[11px] font-mono font-bold tracking-wider text-blue-400 uppercase">
                  STAT 0{index + 1}
                </span>
                <div className="w-2.5 h-2.5 rounded-full bg-[#0047FF] shadow-[0_0_8px_rgba(0,71,255,0.8)] group-hover:scale-125 transition-transform" />
              </div>

              {/* Main Metric Value */}
              <div className="my-auto py-2">
                <div className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white font-sans leading-none group-hover:text-blue-300 transition-colors">
                  {stat.value}
                </div>
              </div>

              {/* Label & Description */}
              <div className="pt-4 border-t border-blue-900/40">
                <h3 className="text-base sm:text-lg font-bold text-zinc-100 leading-snug group-hover:text-white transition-colors">
                  {stat.label}
                </h3>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  {stat.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
