"use client"

import { Activity, ShieldCheck, Zap, Cpu } from "lucide-react"

export function MetricsStrip() {
  const metrics = [
    {
      value: "200+",
      label: "Enterprise Systems",
      detail: "Deployed & Scaled in Production",
      icon: Cpu,
    },
    {
      value: "50+",
      label: "Autonomous AI Pipelines",
      detail: "Live Multi-Agent Workflows",
      icon: Zap,
    },
    {
      value: "99.9%",
      label: "Uptime Reliability",
      detail: "Zero-Downtime Architecture",
      icon: ShieldCheck,
    },
    {
      value: "10x",
      label: "Operational Velocity",
      detail: "Measurable Client ROI",
      icon: Activity,
    },
  ]

  return (
    <section className="relative z-20 w-full bg-[#0047FF] border-y border-blue-400/30 shadow-[0_10px_35px_rgba(0,71,255,0.25)]">
      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 py-3.5 sm:py-4.5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 items-center">
          {metrics.map((metric) => {
            const Icon = metric.icon
            return (
              <div 
                key={metric.label}
                className="flex flex-col items-center sm:items-start group transition-transform duration-200 hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <Icon className="w-3.5 h-3.5 text-blue-200" />
                  <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase text-blue-100">
                    {metric.label}
                  </span>
                </div>
                
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-mono tracking-tight leading-none mb-1">
                  {metric.value}
                </div>

                <p className="text-[11px] sm:text-xs text-blue-100/80 font-medium leading-tight">
                  {metric.detail}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
