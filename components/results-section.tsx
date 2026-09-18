"use client"

import { TrendingDown, TrendingUp, Zap, Clock, ShieldCheck, Cpu } from "lucide-react"

export function ResultsSection() {
  const outcomes = [
    {
      direction: "down",
      metric: "Manual Work",
      symbol: "↓",
      headline: "Eliminate Repetitive Operational Tasks",
      description:
        "Remove low-value copy-pasting, data formatting, and cross-system manual updates so high-value talent focuses on core growth.",
      accent: "text-emerald-400",
      border: "border-emerald-500/20",
      bg: "bg-emerald-500/[0.03]",
    },
    {
      direction: "up",
      metric: "Operational Efficiency",
      symbol: "↑",
      headline: "Continuous 24/7 Process Execution",
      description:
        "Systems execute relentlessly across time zones without human bottlenecks, delays, or fatigue-induced discrepancies.",
      accent: "text-cyan-400",
      border: "border-cyan-500/20",
      bg: "bg-cyan-500/[0.03]",
    },
    {
      direction: "down",
      metric: "Processing Time",
      symbol: "↓",
      headline: "From Hours Down To Sub-Second APIs",
      description:
        "Multi-step document parsing, lead qualification, and reporting pipelines run in milliseconds via optimized asynchronous execution.",
      accent: "text-blue-400",
      border: "border-blue-500/20",
      bg: "bg-blue-500/[0.03]",
    },
    {
      direction: "up",
      metric: "Customer Response Speed",
      symbol: "↑",
      headline: "Instant Inbound Qualification",
      description:
        "Greet high-intent inbound prospects and resolve customer queries within seconds of arrival, boosting lead conversion rates.",
      accent: "text-indigo-400",
      border: "border-indigo-500/20",
      bg: "bg-indigo-500/[0.03]",
    },
    {
      direction: "up",
      metric: "Scalability",
      symbol: "↑",
      headline: "Handle 10x Load Without Headcount Spikes",
      description:
        "Decouple business revenue growth from linear employee hiring costs through intelligent, fault-tolerant software architecture.",
      accent: "text-purple-400",
      border: "border-purple-500/20",
      bg: "bg-purple-500/[0.03]",
    },
  ]

  return (
    <section className="relative py-28 sm:py-36 overflow-hidden bg-black/40">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-5">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Measurable Impact</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
            Technology With A Business Outcome.
          </h2>

          <p className="mt-5 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            We don't build technology for novelty. Every line of code, agent framework, and automated workflow is engineered for measurable operational leverage.
          </p>
        </div>

        {/* Outcomes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((item, idx) => (
            <div
              key={item.metric}
              className={`rounded-3xl p-8 border ${item.border} ${item.bg} bg-zinc-950/70 backdrop-blur-xl hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_10px_35px_rgba(0,0,0,0.5)] ${
                idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className={`text-3xl font-black font-mono ${item.accent}`}>
                    {item.symbol}
                  </span>
                  <span className="text-sm font-mono font-bold uppercase tracking-wider text-white">
                    {item.metric}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {item.headline}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-zinc-500">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Engineered for compounding ROI</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
