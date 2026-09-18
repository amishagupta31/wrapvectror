"use client"

import { useState } from "react"
import { 
  Box, 
  Smartphone, 
  Sparkles, 
  Cloud, 
  PenTool, 
  BarChart3, 
  ArrowRight, 
  RotateCw, 
  Cpu, 
  CheckCircle2 
} from "lucide-react"
import { openConnectModal } from "@/components/connect-modal"

export function ServicesSection() {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({})

  const toggleFlip = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation()
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const services = [
    {
      id: "custom-software",
      title: "Custom Software Development",
      description: "Scalable, secure and high-performance engineering tailored to your operational workflows.",
      icon: Box,
      tagline: "Architecture & Scale",
      tools: ["Next.js 15", "TypeScript", "Python / Go", "PostgreSQL", "Docker", "GraphQL / REST"],
      capabilities: "Enterprise architectures built with clean code and distributed resiliency.",
    },
    {
      id: "web-mobile",
      title: "Web & Mobile Applications",
      description: "Engaging digital products, SaaS dashboards, and cross-platform apps for every screen.",
      icon: Smartphone,
      tagline: "Cross-Platform Products",
      tools: ["React Native", "Flutter", "Tailwind CSS", "Expo", "Supabase", "TanStack Query"],
      capabilities: "High-frame-rate native interfaces and responsive progressive web platforms.",
    },
    {
      id: "ai-automation",
      title: "AI & Automation",
      description: "Smarter autonomous workflows, custom LLM pipelines, and intelligent agent mesh.",
      icon: Sparkles,
      tagline: "Autonomous Agent Mesh",
      tools: ["LangChain", "LangGraph", "Claude & OpenAI", "n8n", "Pinecone Vector", "FastAPI"],
      capabilities: "Autonomous multi-agent orchestration replacing hundreds of manual work hours.",
    },
    {
      id: "cloud-devops",
      title: "Cloud & DevOps",
      description: "Reliable cloud infrastructure with automated CI/CD and zero-downtime deployments.",
      icon: Cloud,
      tagline: "Zero-Downtime Infrastructure",
      tools: ["AWS / GCP", "Terraform", "GitHub Actions", "Cloudflare Edge", "Kubernetes", "Redis"],
      capabilities: "Fault-tolerant infrastructure with automated failovers and 99.99% uptime SLAs.",
    },
    {
      id: "ui-ux",
      title: "UI/UX Design",
      description: "Editorial digital experiences, cohesive design systems, and intuitive user journeys.",
      icon: PenTool,
      tagline: "Editorial & Interface Design",
      tools: ["Figma", "Design Systems", "Framer", "Design Tokens", "Spline 3D", "Micro-Animations"],
      capabilities: "Award-caliber product design with seamless interaction patterns.",
    },
    {
      id: "product-strategy",
      title: "Product Strategy",
      description: "Turn ambitious ideas into battle-tested scalable roadmaps and validated digital products.",
      icon: BarChart3,
      tagline: "Discovery to Market Fit",
      tools: ["PostHog Analytics", "Linear", "Architecture Audits", "Unit Economics", "MVP Scoping"],
      capabilities: "Strategic product execution translating business goals into shipped software.",
    },
  ]

  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden bg-black scroll-mt-20">
      {/* Background Subtle Tech Grid / Ambient Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0047FF0a_1px,transparent_1px),linear-gradient(to_bottom,#0047FF0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Top Header Row */}
        <div className="mb-12 sm:mb-16 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.12]">
            End-to-end software development <br className="hidden sm:inline" />
            for <span className="text-[#0047FF]">modern businesses</span>
          </h2>
        </div>

        {/* Wider 3-Column Grid of 3D Flippable Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => {
            const IconComponent = service.icon
            const isFlipped = !!flippedCards[service.id]

            return (
              <div
                key={service.id}
                className="group relative h-[340px] sm:h-[360px] [perspective:1000px] cursor-pointer"
                onClick={() => toggleFlip(service.id)}
              >
                {/* 3D Rotating Container */}
                <div
                  className={`relative w-full h-full transition-transform duration-700 ease-out ${
                    isFlipped ? "[transform:rotateY(180deg)]" : "group-hover:[transform:rotateY(180deg)]"
                  }`}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* ─── FRONT FACE ─── */}
                  <div
                    className="absolute inset-0 rounded-2xl p-7 sm:p-8 bg-[#070d1e]/85 border border-blue-900/40 hover:border-blue-500/60 backdrop-blur-xl flex flex-col justify-between shadow-[0_10px_35px_rgba(0,0,0,0.6)] hover:shadow-[0_15px_45px_rgba(0,71,255,0.2)] transition-all"
                    style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
                  >
                    {/* Top row with icon and flip cue */}
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-xl bg-blue-950/40 border border-blue-500/30 flex items-center justify-center text-[#0047FF] shadow-[0_0_15px_rgba(0,71,255,0.2)]">
                          <IconComponent className="w-7 h-7 stroke-[1.75]" />
                        </div>
                        
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-blue-300/90 group-hover:border-blue-400/40 transition-colors">
                          <RotateCw className="w-3 h-3 text-blue-400 group-hover:rotate-180 transition-transform duration-500" />
                          <span>Flip for Tech Stack</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-2.5 text-sm text-zinc-400 leading-relaxed font-normal">
                        {service.description}
                      </p>
                    </div>

                    {/* Bottom Status / Learn More row */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                      <span className="font-mono text-zinc-500 uppercase tracking-wider text-[11px]">
                        {service.tagline}
                      </span>
                      <div className="flex items-center gap-1.5 font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
                        <span>View Tools</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>

                  {/* ─── BACK FACE (TECH & TOOLS) ─── */}
                  <div
                    className="absolute inset-0 rounded-2xl p-7 sm:p-8 bg-[#040817] border border-[#0047FF]/70 backdrop-blur-2xl flex flex-col justify-between shadow-[0_0_40px_rgba(0,71,255,0.3)]"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <div>
                      {/* Back Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <Cpu className="w-4 h-4 text-blue-400" />
                          <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-300">
                            Tech & Tools
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-zinc-400 px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20">
                          {service.tools.length} Tools
                        </span>
                      </div>

                      <h4 className="text-base sm:text-lg font-bold text-white tracking-tight mb-3">
                        {service.title} Stack
                      </h4>

                      {/* Tools & Tech Badges */}
                      <div className="flex flex-wrap gap-1.5 mb-3.5">
                        {service.tools.map((tool) => (
                          <span
                            key={tool}
                            className="px-2.5 py-1 rounded-md bg-blue-500/15 border border-blue-400/30 text-blue-200 text-xs font-mono font-medium shadow-[0_0_10px_rgba(0,71,255,0.1)] hover:bg-blue-500/25 transition-colors"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>

                      {/* Capabilities summary */}
                      <p className="text-xs text-zinc-300/90 leading-relaxed font-normal">
                        {service.capabilities}
                      </p>
                    </div>

                    {/* Back CTA Button */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          openConnectModal(service.title)
                        }}
                        className="w-full py-2.5 px-4 rounded-xl bg-[#0047FF] hover:bg-[#0038e0] text-white font-semibold text-xs tracking-wide transition-all shadow-[0_0_20px_rgba(0,71,255,0.4)] hover:shadow-[0_0_30px_rgba(0,71,255,0.6)] flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>Build With This Stack</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
