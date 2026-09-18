"use client"

import { useState } from "react"
import { Search, Compass, Layout, Terminal, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react"

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      number: "01",
      name: "Discover",
      title: "Understand Your Operations",
      description: "Understand your business, users, workflows, bottlenecks, and goals through deep technical discovery.",
      details: [
        "In-depth operational & tool stack mapping",
        "Identification of high-cost human bottlenecks",
        "Feasibility and security assessment",
      ],
      icon: Search,
    },
    {
      number: "02",
      name: "Strategize",
      title: "Design the Impact Blueprint",
      description: "Identify where software, automation, and AI can create measurable impact and clear ROI.",
      details: [
        "System architecture & schema definition",
        "Agent role specification & tool definitions",
        "Milestone roadmap and integration blueprint",
      ],
      icon: Compass,
    },
    {
      number: "03",
      name: "Design",
      title: "Intuitive UX & Scalable Systems",
      description: "Create intuitive experiences and scalable system architecture engineered for reliability.",
      details: [
        "High-fidelity responsive UI prototypes",
        "State machine & data flow modeling",
        "Fail-safe fallback & guardrail design",
      ],
      icon: Layout,
    },
    {
      number: "04",
      name: "Build",
      title: "High-Velocity Engineering",
      description: "Engineer, integrate, test, and deploy the solution with rigorous quality standards.",
      details: [
        "Production full-stack development & testing",
        "Autonomous agent fine-tuning & prompt evals",
        "Seamless zero-downtime tool integration",
      ],
      icon: Terminal,
    },
    {
      number: "05",
      name: "Scale",
      title: "Continuous Optimization",
      description: "Monitor, optimize, automate further, and continuously improve system throughput.",
      details: [
        "Live error telemetry & latency tracking",
        "Continuous fine-tuning on operational data",
        "Scaling infrastructure with business volume",
      ],
      icon: TrendingUp,
    },
  ]

  return (
    <section id="process" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono uppercase tracking-widest mb-5">
            <Compass className="w-3.5 h-3.5 text-blue-400" />
            <span>Methodology</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
            From Idea to Intelligence.
          </h2>

          <p className="mt-5 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            A rigorous, battle-tested 5-step engineering process designed to eliminate guesswork and ship high-leverage systems.
          </p>
        </div>

        {/* 5-Step Process Visualizer with Connecting Line */}
        <div className="relative mb-14 hidden lg:block">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-8 right-8 h-0.5 bg-blue-500/30 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-5 gap-4 relative z-10">
            {steps.map((step, idx) => (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`flex flex-col items-center p-4 rounded-2xl transition-all duration-300 ${
                  activeStep === idx
                    ? "bg-zinc-900 border border-blue-400 shadow-[0_0_25px_rgba(0,71,255,0.3)] scale-105"
                    : "bg-zinc-950/80 border border-white/10 hover:border-white/20"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-3 font-mono font-bold text-sm transition-all ${
                    activeStep === idx
                      ? "bg-[#0047FF] text-white shadow-lg shadow-blue-500/30"
                      : "bg-white/5 text-zinc-400 border border-white/10"
                  }`}
                >
                  <step.icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-bold text-blue-400 mb-0.5">{step.number}</span>
                <span className="text-sm font-bold text-white">{step.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Step Details Spotlight */}
        <div className="rounded-3xl p-8 sm:p-12 bg-zinc-950/90 border border-blue-500/30 shadow-[0_15px_60px_rgba(0,0,0,0.7)] backdrop-blur-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Number, Title, Description */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  STEP {steps[activeStep].number} — {steps[activeStep].name.toUpperCase()}
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                {steps[activeStep].title}
              </h3>

              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-6">
                {steps[activeStep].description}
              </p>

              <div className="space-y-3">
                {steps[activeStep].details.map((detail) => (
                  <div key={detail} className="flex items-center gap-3 text-sm text-zinc-200">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Step Navigator Buttons */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              {steps.map((step, idx) => (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`flex items-center justify-between p-4 rounded-xl border text-left transition-all ${
                    activeStep === idx
                      ? "bg-blue-500/[0.1] border-blue-400/60 text-white"
                      : "bg-white/[0.02] border-white/5 text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.05]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-blue-400">{step.number}</span>
                    <span className="text-sm font-semibold">{step.name} — {step.title}</span>
                  </div>
                  <ArrowRight className={`w-4 h-4 ${activeStep === idx ? "text-blue-400" : "opacity-30"}`} />
                </button>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
