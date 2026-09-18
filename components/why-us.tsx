"use client"

import { XCircle, CheckCircle2, Zap, ArrowRight, ShieldCheck, Cpu } from "lucide-react"

export function WhyUsSection() {
  const traditional = [
    { title: "Manual processes", desc: "Teams bogged down in repetitive copy-pasting, data formatting, and spreadsheet updates." },
    { title: "Disconnected tools", desc: "Fragmented software silos with zero real-time sync, requiring manual handoffs." },
    { title: "Repetitive work", desc: "High headcount costs wasted on routine administrative tasks instead of high-value growth." },
    { title: "Static software", desc: "Rigid applications that break when schemas change or require months of custom code to adjust." },
    { title: "Human-dependent workflows", desc: "Operations grind to a halt outside business hours or when key team members are away." },
  ]

  const ourApproach = [
    { title: "Intelligent workflows", desc: "Autonomous multi-agent loops that understand context, make decisions, and execute tasks." },
    { title: "Connected systems", desc: "Seamless bidirectional sync across your CRM, ERP, messaging, and databases in milliseconds." },
    { title: "AI-assisted operations", desc: "Routine work runs autonomously in the background while humans supervise high-stakes decisions." },
    { title: "Adaptive software", desc: "Intelligent applications that learn, self-correct, and scale fluidly as your business expands." },
    { title: "Automated execution", desc: "Continuous 24/7/365 operational availability with sub-second response times and zero fatigue." },
  ]

  return (
    <section id="about" className="relative py-28 sm:py-36 overflow-hidden bg-black/60 scroll-mt-20">
      <span id="why-us" className="absolute -top-24" />
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono uppercase tracking-widest mb-5">
            <Cpu className="w-3.5 h-3.5 text-blue-400" />
            <span>The Paradigm Shift</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
            We Don't Just Ship Features <br className="hidden sm:inline" />
            <span className="text-[#0047FF]">We Engineer Systems</span>
          </h2>

          <div className="mt-8 p-6 rounded-2xl bg-white/[0.02] border border-white/10 max-w-2xl mx-auto">
            <p className="text-lg sm:text-xl font-bold text-white leading-relaxed">
              "The goal isn't to add more technology. <br />
              <span className="text-blue-400">It's to make technology do more."</span>
            </p>
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Traditional Agency Card */}
          <div className="relative rounded-3xl p-8 sm:p-10 bg-zinc-950/80 border border-red-500/20 backdrop-blur-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <div>
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest block">Outdated Method</span>
                  <h3 className="text-2xl font-bold text-zinc-300 mt-1">Traditional Development</h3>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-red-400" />
                </div>
              </div>

              <div className="space-y-5">
                {traditional.map((item) => (
                  <div key={item.title} className="flex items-start gap-3.5">
                    <XCircle className="w-4 h-4 text-red-400/80 shrink-0 mt-1" />
                    <div>
                      <h4 className="text-sm font-semibold text-zinc-200">{item.title}</h4>
                      <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-xs font-mono text-zinc-400">
              Result: High overhead, human bottlenecks, linear growth limits.
            </div>
          </div>

          {/* Our AI-First Approach Card */}
          <div className="relative rounded-3xl p-8 sm:p-10 bg-zinc-950/90 border border-blue-500/40 shadow-[0_0_50px_rgba(0,71,255,0.15)] backdrop-blur-2xl flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <div>
                  <span className="text-[11px] font-mono text-blue-400 uppercase tracking-widest block">AI-First Architecture</span>
                  <h3 className="text-2xl font-bold text-white mt-1">Our Engineering Approach</h3>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-blue-400" />
                </div>
              </div>

              <div className="space-y-5">
                {ourApproach.map((item) => (
                  <div key={item.title} className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                    <div>
                      <h4 className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">{item.title}</h4>
                      <p className="text-xs text-zinc-300 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-blue-500/20 flex items-center justify-between text-xs font-mono text-blue-300">
              <span>Result: Exponential leverage, sub-second execution, compounding scale.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
