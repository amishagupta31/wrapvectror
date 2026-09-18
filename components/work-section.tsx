"use client"

import { ArrowUpRight, CheckCircle2, Layers, Cpu, Globe } from "lucide-react"

export function WorkSection() {
  const projects = [
    {
      name: "QuickCertify",
      tagline: "AI-Enabled Certificate Generation & Instant Verification",
      industry: "Education & Credentialing",
      problem:
        "Accreditation bodies and universities spent hundreds of manual hours formatting, cross-verifying, and distributing tamper-proof credential certificates.",
      solution:
        "Engineered an automated certificate engine with cryptographic QR verification, dynamic PDF rendering, and bulk data validation pipelines.",
      technologies: ["React", "Node.js", "MongoDB", "QR Verification", "AWS S3"],
      result:
        "Sub-second verification scans, zero fraudulent issuance, and 95% reduction in administrative issuance turnaround time.",
      badge: "Production SaaS",
    },
    {
      name: "GreenRide",
      tagline: "Smart Mobility & Environmental Route Optimization",
      industry: "Transportation & Sustainability",
      problem:
        "Fleet operators lacked real-time environmental routing that dynamically adapted to urban emission zones and peak traffic congestion.",
      solution:
        "Built a responsive mobility platform utilizing real-time geospatial mapping APIs, eco-routing algorithms, and telemetry dashboards.",
      technologies: ["React", "Interactive Maps", "Geo APIs", "Intelligent Routing", "Tailwind CSS"],
      result:
        "Optimized urban travel times with measurable fuel and carbon footprint reductions across active fleet units.",
      badge: "Mobility Platform",
    },
    {
      name: "OpsFlow Intelligence",
      tagline: "Autonomous Cross-Tool Operations Orchestrator",
      industry: "Enterprise SaaS & Operations",
      problem:
        "High-volume sales and support teams suffered from disconnected CRM, billing, and communication systems requiring constant manual copy-pasting.",
      solution:
        "Architected an autonomous multi-agent mesh running background webhooks, intent classification, and bidirectional tool synchronization.",
      technologies: ["LangGraph", "Python", "FastAPI", "Redis", "HubSpot API", "PostgreSQL"],
      result:
        "Thousands of repetitive operational tasks executed in the background daily with verified zero-latency data consistency.",
      badge: "AI Agent System",
    },
  ]

  return (
    <section id="work" className="relative py-28 sm:py-36 overflow-hidden scroll-mt-20">
      <span id="ourwork" className="absolute -top-24" />
      <span id="our-work" className="absolute -top-24" />
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono uppercase tracking-widest mb-5">
            <Layers className="w-3.5 h-3.5 text-blue-400" />
            <span>Featured Case Studies</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
            Built For Real Problems
          </h2>

          <p className="mt-5 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            A look at the products, platforms, and intelligent systems we've engineered.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="rounded-3xl p-8 bg-zinc-950/80 border border-white/10 hover:border-blue-500/40 transition-all duration-300 backdrop-blur-xl flex flex-col justify-between group hover:shadow-[0_10px_40px_rgba(0,71,255,0.15)]"
            >
              <div>
                {/* Header Badge & Industry */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                  <span className="text-[11px] font-mono text-blue-400 font-bold px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                    {project.badge}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">{project.industry}</span>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                  {project.name}
                </h3>
                <p className="text-xs text-zinc-300 mt-1 mb-5 font-mono">{project.tagline}</p>

                {/* Problem & Solution */}
                <div className="space-y-4 mb-6">
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-[10px] font-mono font-bold uppercase text-red-400 tracking-wider block mb-1">
                      The Challenge
                    </span>
                    <p className="text-xs text-zinc-400 leading-relaxed">{project.problem}</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-blue-500/[0.04] border border-blue-500/20">
                    <span className="text-[10px] font-mono font-bold uppercase text-blue-400 tracking-wider block mb-1">
                      The Engineered Solution
                    </span>
                    <p className="text-xs text-zinc-300 leading-relaxed">{project.solution}</p>
                  </div>
                </div>

                {/* Result */}
                <div className="mb-6 flex items-start gap-2 text-xs text-emerald-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-snug">{project.result}</span>
                </div>
              </div>

              {/* Technologies Tags */}
              <div className="pt-5 border-t border-white/10">
                <div className="text-[10px] font-mono text-zinc-400 mb-2">Built with:</div>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
