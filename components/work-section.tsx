"use client"

import React, { useState, useEffect, useRef, useCallback } from "react"
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react"
import { openConnectModal } from "@/components/connect-modal"
import Image from "next/image"

interface Project {
  number: string
  total: string
  category: string
  title: string
  valueProp: string
  description: string
  technologies: string[]
  results: string[]
  image: string
}

const projects: Project[] = [
  {
    number: "01",
    total: "05",
    category: "AI / EDUCATION / SAAS",
    title: "EduGrade",
    valueProp: "Turning complex education workflows into simple digital experiences.",
    description:
      "An AI-powered academic management platform that automates grading workflows, student evaluation analytics, and institutional performance tracking through intelligent pipelines.",
    technologies: ["Next.js", "React", "Node.js", "MongoDB", "OpenAI"],
    results: [
      "40% faster grading workflow",
      "10K+ academic records processed",
      "Multi-role institutional RBAC",
    ],
    image: "/images/project-edugrade.jpg",
  },
  {
    number: "02",
    total: "05",
    category: "AUTONOMOUS AI / OPERATIONS",
    title: "AgentDesk",
    valueProp: "Autonomous multi-agent orchestration for enterprise customer ops.",
    description:
      "Self-learning multi-agent mesh that executes customer identity verification, database queries, and bidirectional CRM updates with deterministic safety guardrails.",
    technologies: ["LangGraph", "Python", "FastAPI", "Redis", "PostgreSQL", "GPT-4o"],
    results: [
      "78% automated ticket resolution",
      "Sub-second multi-tool orchestration",
      "Deterministic zero-hallucination guardrails",
    ],
    image: "/images/project-agentdesk.jpg",
  },
  {
    number: "03",
    total: "05",
    category: "ENTERPRISE SAAS / CRYPTOGRAPHY",
    title: "QuickCertify",
    valueProp: "Tamper-proof digital credentials with instant cryptographic verification.",
    description:
      "Automated certificate issuance engine with dynamic vector rendering, bulk CSV validation pipelines, and sub-second cryptographic QR verification.",
    technologies: ["React", "Node.js", "TypeScript", "Cryptographic QR", "AWS S3", "Docker"],
    results: [
      "250,000+ verified credentials issued",
      "95% faster administrative turnaround",
      "Zero fraudulent issuances verified",
    ],
    image: "/images/project-quickcertify.jpg",
  },
  {
    number: "04",
    total: "05",
    category: "SMART MOBILITY / IOT PLATFORM",
    title: "GreenRide",
    valueProp: "Intelligent eco-routing and commercial fleet telemetry.",
    description:
      "Urban mobility and commercial fleet platform integrating live geospatial telemetry APIs, dynamic emissions-zone routing, and real-time vehicle dispatch algorithms.",
    technologies: ["React", "FastAPI", "Geo APIs", "PostGIS", "Tailwind CSS", "WebSockets"],
    results: [
      "22% faster urban transit times",
      "24% fleet fuel & carbon reduction",
      "1,420+ active fleet units tracked",
    ],
    image: "/images/project-greenride.jpg",
  },
  {
    number: "05",
    total: "05",
    category: "FINTECH / PREDICTIVE AI",
    title: "FinPulse",
    valueProp: "High-frequency predictive cash flow and anomaly intelligence.",
    description:
      "Predictive financial modeling engine providing real-time multi-currency settlement forecasts, automated ledger reconciliation, and sub-40ms fraud anomaly detection.",
    technologies: ["Next.js", "TypeScript", "Python", "PyTorch", "Supabase", "Redis"],
    results: [
      "Sub-40ms fraud detection latency",
      "$18.4M+ monthly settlement volume",
      "99.99% continuous operational uptime",
    ],
    image: "/images/project-finpulse.jpg",
  },
]

export function WorkSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIdx, setActiveIdx] = useState(0)
  const [projectProgress, setProjectProgress] = useState(0) // 0 to 1 within current project

  const count = projects.length

  // Calculate scroll progress and determine active project
  const handleScroll = useCallback(() => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const totalScrollable = containerRef.current.offsetHeight - window.innerHeight
    if (totalScrollable <= 0) return

    const rawProgress = Math.max(0, Math.min(1, -rect.top / totalScrollable))
    const segmentLength = 1 / count
    const currentIdx = Math.min(count - 1, Math.floor(rawProgress / segmentLength))
    const segmentStart = currentIdx * segmentLength
    const localProgress = Math.min(1, (rawProgress - segmentStart) / segmentLength)

    setActiveIdx(currentIdx)
    setProjectProgress(localProgress)
  }, [count])

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", onScroll)
  }, [handleScroll])

  // Each project gets clean enter → hold → exit lifecycle
  const getProjectStyle = (index: number): React.CSSProperties => {
    if (index === activeIdx) {
      // Currently active project — always fully visible during its segment
      return {
        opacity: 1,
        transform: "translate3d(0, 0, 0) scale(1)",
        visibility: "visible" as const,
        pointerEvents: "auto" as const,
        zIndex: 20,
      }
    }

    if (index === activeIdx + 1 && projectProgress > 0.7) {
      // Next project starts entering only when current is 70%+ scrolled
      const enterProgress = (projectProgress - 0.7) / 0.3
      return {
        opacity: enterProgress * 0.3, // subtle preview only
        transform: `translate3d(0, ${(1 - enterProgress) * 60}px, 0) scale(${0.95 + 0.05 * enterProgress})`,
        visibility: "visible" as const,
        pointerEvents: "none" as const,
        zIndex: 10,
      }
    }

    if (index === activeIdx - 1 && projectProgress < 0.3) {
      // Previous project fading out
      const exitProgress = projectProgress / 0.3
      return {
        opacity: (1 - exitProgress) * 0.3,
        transform: `translate3d(0, ${-exitProgress * 40}px, 0) scale(${1 - 0.05 * exitProgress})`,
        visibility: "visible" as const,
        pointerEvents: "none" as const,
        zIndex: 10,
      }
    }

    // All other projects: completely hidden
    return {
      opacity: 0,
      transform: "translate3d(0, 80px, 0) scale(0.92)",
      visibility: "hidden" as const,
      pointerEvents: "none" as const,
      zIndex: 1,
    }
  }

  return (
    <section
      id="work"
      className="relative bg-[#050505] text-white selection:bg-[#145CFF] selection:text-white scroll-mt-20"
    >
      <span id="ourwork" className="absolute -top-24" />
      <span id="our-work" className="absolute -top-24" />

      {/* ================================================================== */}
      {/* 1. SECTION INTRO                                                    */}
      {/* ================================================================== */}
      <div className="pt-28 pb-16 sm:pt-36 sm:pb-24 border-b border-white/10 relative overflow-hidden bg-gradient-to-b from-[#050505] to-[#080d1a]">
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[700px] h-[350px] bg-[#145CFF]/10 blur-[150px] pointer-events-none rounded-full" />

        <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-[#145CFF] shadow-[0_0_12px_#145CFF] animate-pulse" />
            <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-[#145CFF] uppercase font-bold">
              02 / SELECTED WORK
            </span>
            <span className="w-12 h-[1px] bg-[#145CFF]/40" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-8">
              <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.02]">
                Work that moves <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-zinc-300">
                  businesses forward
                </span>
                <span className="text-[#145CFF]">.</span>
              </h2>
            </div>
            <div className="lg:col-span-4">
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                We design and build digital products that solve real business problems — from powerful web platforms and mobile applications to AI systems, automation and enterprise software.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================================================================== */}
      {/* 2. DESKTOP: STICKY SCROLL CONTAINER                                 */}
      {/*    Height = 100vh per project (500vh for 5)                         */}
      {/*    Each project occupies exactly 1 scroll-segment                   */}
      {/* ================================================================== */}
      <div
        ref={containerRef}
        className="relative hidden lg:block"
        style={{ height: `${count * 100}vh` }}
      >
        {/* Sticky viewport stage */}
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#050505]">
          {/* Subtle ambient glow */}
          <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[650px] h-[500px] bg-[#145CFF]/10 blur-[160px] pointer-events-none rounded-full" />

          {/* Progress bar along top */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-white/5 z-30">
            <div
              className="h-full bg-[#145CFF] transition-all duration-150 ease-out shadow-[0_0_10px_#145CFF]"
              style={{ width: `${((activeIdx + projectProgress) / count) * 100}%` }}
            />
          </div>

          <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 h-full relative z-10 flex items-center">
            <div className="relative w-full min-h-[600px] flex items-center">

              {/* Project layers — stacked absolutely, only active one visible */}
              {projects.map((project, index) => {
                const style = getProjectStyle(index)

                return (
                  <div
                    key={project.number}
                    style={style}
                    className="absolute inset-0 w-full will-change-transform"
                  >
                    <div className="grid grid-cols-12 gap-10 xl:gap-14 items-center h-full">
                      {/* LEFT: Project Info */}
                      <div className="col-span-5 space-y-5 pr-2">
                        {/* Index & Category */}
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-mono font-bold text-[#145CFF] tracking-widest">
                            {project.number} / {project.total}
                          </span>
                          <span className="w-8 h-[1px] bg-white/20" />
                          <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider font-semibold">
                            {project.category}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-4xl xl:text-5xl font-extrabold text-white tracking-tight">
                          {project.title}
                        </h3>

                        {/* Value Prop */}
                        <p className="text-lg xl:text-xl font-semibold text-white leading-snug">
                          &ldquo;{project.valueProp}&rdquo;
                        </p>

                        {/* Description */}
                        <p className="text-sm text-zinc-300 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="space-y-2 pt-1">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block font-bold">
                            TECHNOLOGY
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2.5 py-1 rounded-md bg-white/[0.08] border border-white/15 text-xs font-mono text-zinc-200 hover:border-[#145CFF]/60 hover:text-white transition-colors"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Results */}
                        <div className="p-4 rounded-xl bg-[#0c1424]/90 border border-white/15 space-y-1.5 shadow-lg">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-[#145CFF] block font-bold">
                            VERIFIED RESULT
                          </span>
                          <ul className="space-y-1.5">
                            {project.results.map((res, i) => (
                              <li key={i} className="text-xs text-zinc-200 flex items-center gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#145CFF] flex-shrink-0" />
                                <span className="font-medium">{res}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* CTA */}
                        <div className="pt-2 flex items-center gap-4">
                          <button
                            onClick={() => openConnectModal(project.title)}
                            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#145CFF] hover:bg-[#2563FF] text-white font-semibold text-xs transition-all shadow-[0_0_25px_rgba(20,92,255,0.45)] hover:shadow-[0_0_35px_rgba(20,92,255,0.65)] hover:scale-[1.02] cursor-pointer group"
                          >
                            <span>View Case Study</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </button>
                          <button
                            onClick={() => openConnectModal(project.title)}
                            className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer"
                          >
                            <span>Live Project</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* RIGHT: Project Image */}
                      <div className="col-span-6 relative">
                        <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-[0_25px_80px_rgba(0,0,0,0.9),0_0_40px_rgba(20,92,255,0.08)] hover:border-[#145CFF]/50 transition-all duration-500 group">
                          <Image
                            src={project.image}
                            alt={`${project.title} — ${project.category}`}
                            width={960}
                            height={540}
                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                            priority={index === 0}
                          />
                          {/* Subtle gradient overlay at bottom */}
                          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#050505]/60 to-transparent pointer-events-none" />
                        </div>
                      </div>

                      {/* RIGHT EDGE: Vertical progress indicator */}
                      <div className="col-span-1 flex flex-col items-center justify-between py-6 pl-4 border-l border-white/10 h-[400px]">
                        {projects.map((p, idx) => (
                          <div key={p.number} className="flex flex-col items-center gap-1.5">
                            <span
                              className={`text-xs font-mono font-bold transition-all duration-300 ${
                                idx === activeIdx ? "text-[#145CFF] scale-125" : "text-zinc-600"
                              }`}
                            >
                              {p.number}
                            </span>
                            <span
                              className={`w-1.5 h-7 rounded-full transition-all duration-300 ${
                                idx === activeIdx
                                  ? "bg-[#145CFF] shadow-[0_0_12px_#145CFF]"
                                  : idx < activeIdx
                                  ? "bg-[#145CFF]/40"
                                  : "bg-white/10"
                              }`}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}

            </div>
          </div>

          {/* Bottom scroll hint */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
            <span className="text-[10px] font-mono text-zinc-500 tracking-wider uppercase">
              {activeIdx < count - 1 ? "Scroll to explore" : "All projects viewed"}
            </span>
            {activeIdx < count - 1 && (
              <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
                <div className="w-1 h-2 rounded-full bg-[#145CFF] animate-bounce" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ================================================================== */}
      {/* 3. MOBILE / TABLET: Vertical card flow                              */}
      {/* ================================================================== */}
      <div className="lg:hidden container mx-auto px-4 sm:px-6 py-12 space-y-10">
        {projects.map((project) => (
          <div
            key={project.number}
            className="rounded-2xl bg-[#091020] border border-white/15 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          >
            {/* Project Image */}
            <div className="relative w-full aspect-video">
              <Image
                src={project.image}
                alt={`${project.title} — ${project.category}`}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 space-y-4">
              {/* Index */}
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#145CFF] font-bold">{project.number} / {project.total}</span>
                <span className="text-zinc-400 font-semibold">{project.category}</span>
              </div>

              {/* Title & Value */}
              <div>
                <h3 className="text-3xl font-extrabold text-white">{project.title}</h3>
                <p className="text-base text-white mt-1 font-semibold">&ldquo;{project.valueProp}&rdquo;</p>
              </div>

              <p className="text-xs text-zinc-300 leading-relaxed">{project.description}</p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded bg-white/10 border border-white/15 text-[11px] font-mono text-zinc-200">
                    {t}
                  </span>
                ))}
              </div>

              {/* Key Result */}
              <div className="p-3.5 rounded-xl bg-[#0c1424] border border-white/15 space-y-1">
                <span className="text-[10px] font-mono text-[#145CFF] block font-bold">KEY RESULT</span>
                {project.results.map((res, i) => (
                  <p key={i} className="text-xs text-zinc-200 font-medium flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-[#145CFF] flex-shrink-0" />
                    {res}
                  </p>
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={() => openConnectModal(project.title)}
                className="w-full py-3.5 rounded-xl bg-[#145CFF] text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(20,92,255,0.4)] cursor-pointer"
              >
                <span>View Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}
