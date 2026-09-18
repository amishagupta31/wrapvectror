"use client"

import { Lightbulb, Wrench, RefreshCw, ArrowRight, Zap, CheckCircle2 } from "lucide-react"

export function ValueProposition() {
  const pillars = [
    {
      step: "01",
      name: "Think",
      tagline: "Architectural & Operational Strategy",
      description:
        "We dissect your existing bottlenecks, software silos, and repetitive manual friction points to design an intelligent operating system tailored to your growth goals.",
      icon: Lightbulb,
      accent: "cyan",
      highlights: [
        "Workflow & Bottleneck Audits",
        "AI Feasibility & ROI Modeling",
        "Systems Architecture Design",
      ],
    },
    {
      step: "02",
      name: "Build",
      tagline: "High-Performance Engineering",
      description:
        "We build bespoke AI agents, modern scalable web applications, and resilient backend pipelines that connect natively into your tools without breaking existing operations.",
      icon: Wrench,
      accent: "blue",
      highlights: [
        "Autonomous Multi-Agent Networks",
        "Custom SaaS & Internal Tools",
        "Enterprise-Grade API Connectors",
      ],
    },
    {
      step: "03",
      name: "Automate",
      tagline: "Continuous Background Intelligence",
      description:
        "Your business operations execute autonomously 24/7. Tasks that previously drained hours of employee focus now run in milliseconds with verified accuracy.",
      icon: RefreshCw,
      accent: "indigo",
      highlights: [
        "Zero-Touch Data Synchronization",
        "Real-Time Telemetry & Failovers",
        "Self-Improving Operational Loops",
      ],
    },
  ]

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-black/40">
      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Technology Should Work For You
          </h2>

          <p className="mt-6 text-base sm:text-lg text-zinc-400 leading-relaxed">
            Businesses shouldn't lose hours to repetitive tasks, disconnected tools, manual workflows, or outdated systems.
          </p>

          <p className="mt-3 text-base sm:text-lg text-zinc-300 leading-relaxed font-medium">
            We design and engineer intelligent technology that works continuously in the background — automating operations, connecting your systems, and helping your team focus on what actually matters.
          </p>
        </div>

        {/* 3 Pillars Grid: Think -> Build -> Automate */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.name}
              className="relative rounded-3xl p-7 bg-zinc-950/60 border border-white/10 hover:border-blue-500/40 transition-all duration-300 backdrop-blur-xl group hover:shadow-[0_10px_40px_rgba(0,71,255,0.15)] flex flex-col justify-between"
            >
              {/* Top Row: Step Index & Icon */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-400">
                    PHASE {pillar.step}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:border-blue-400/40 group-hover:bg-blue-500/10 transition-all duration-300">
                    <pillar.icon className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white tracking-tight mb-1 flex items-center gap-2">
                  {pillar.name}
                </h3>
                <p className="text-xs font-mono text-blue-300/80 mb-4">{pillar.tagline}</p>

                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              {/* Highlights List */}
              <div className="pt-6 border-t border-white/10 space-y-2.5">
                {pillar.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2.5 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
