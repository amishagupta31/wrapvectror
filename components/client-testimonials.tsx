"use client"

import { Star, Quote, CheckCircle2 } from "lucide-react"

export function ClientTestimonials() {
  const testimonials = [
    {
      name: "Marcus Vance",
      role: "VP of Operations",
      company: "LogixGlobal",
      metric: "94% Manual Work Reduced",
      quote:
        "WrapVector transformed our logistics pipeline. Tasks that previously required four ops managers now execute autonomously in seconds with zero errors.",
      initials: "MV",
    },
    {
      name: "Sarah Chen",
      role: "Founder & CEO",
      company: "EduGrade AI",
      metric: "6 Weeks to Production",
      quote:
        "Their engineering speed is unmatched. They took our complex multi-modal evaluation concept and turned it into an enterprise-grade platform ready for scale.",
      initials: "SC",
    },
    {
      name: "David Kelling",
      role: "Head of Product",
      company: "FinPulse Engine",
      metric: "< 400ms Pipeline Latency",
      quote:
        "The autonomous agent mesh WrapVector architected for our reconciliation system handles hundreds of thousands of daily records effortlessly.",
      initials: "DK",
    },
    {
      name: "Elena Rostova",
      role: "Chief Technology Officer",
      company: "NexaCloud Systems",
      metric: "99.99% Fault-Tolerant Uptime",
      quote:
        "Exceptional full-stack and cloud engineering. They don't just build features — they architect resilient infrastructure built for long-term growth.",
      initials: "ER",
    },
    {
      name: "Tariq Al-Mansoor",
      role: "Managing Director",
      company: "Apex Capital Ventures",
      metric: "12x Process Velocity",
      quote:
        "WrapVector is our secret weapon for building AI-native internal tools. Their attention to detail, UX polish, and execution standards are world-class.",
      initials: "TA",
    },
    {
      name: "Jessica Miller",
      role: "Director of Customer Experience",
      company: "SwiftSupport",
      metric: "92% Tier-1 Resolution",
      quote:
        "Our customer resolution rate hit 92% in the very first week of deployment. The AI agents understand real context and execute cross-tool workflows seamlessly.",
      initials: "JM",
    },
  ]

  // Triple the list for seamless infinite loop with translateX(-33.333%) -> translateX(0%)
  const displayItems = [...testimonials, ...testimonials, ...testimonials]

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-black/40 border-t border-white/5">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-[150px] pointer-events-none rounded-full" />

      {/* Section Header */}
      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 mb-14 sm:mb-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.12]">
            What Our <span className="text-[#0047FF]">Clients Say</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
            Trusted by founders, product leaders, and enterprise operators building the future of software and automation.
          </p>
        </div>
      </div>

      {/* Marquee Row: Left-to-Right Flow */}
      <div className="relative w-full overflow-hidden">
        {/* Left & Right Gradient Fade Masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-[#050505] to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-[#050505] to-transparent z-20" />

        <div className="flex w-max gap-6 animate-scroll-right hover:[animation-play-state:paused] py-2">
          {displayItems.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="w-[360px] sm:w-[420px] flex-shrink-0 p-6 sm:p-7 rounded-2xl bg-[#070d1e]/85 border border-blue-900/35 hover:border-blue-500/60 transition-all duration-300 backdrop-blur-xl flex flex-col justify-between shadow-[0_10px_35px_rgba(0,0,0,0.6)] hover:shadow-[0_15px_45px_rgba(0,71,255,0.2)] group"
            >
              <div>
                {/* Top Row: Stars & Metric Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-blue-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-blue-400 stroke-none" />
                    ))}
                  </div>

                  <span className="text-[10px] sm:text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-200">
                    {item.metric}
                  </span>
                </div>

                {/* Quote Body */}
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Bottom Author Row */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-950/60 border border-blue-500/40 flex items-center justify-center text-xs font-mono font-bold text-white shadow-[0_0_12px_rgba(0,71,255,0.3)]">
                    {item.initials}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white flex items-center gap-1.5">
                      <span>{item.name}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                    </div>
                    <div className="text-xs text-zinc-400">
                      {item.role}, <span className="text-zinc-300 font-medium">{item.company}</span>
                    </div>
                  </div>
                </div>

                <Quote className="w-5 h-5 text-blue-500/30 group-hover:text-blue-400/60 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
