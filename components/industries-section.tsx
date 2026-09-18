"use client"

import { useState } from "react"
import { Building, Rocket, ShoppingCart, GraduationCap, HeartPulse, Landmark, Home, Briefcase, Truck, Megaphone, ArrowRight, CheckCircle2 } from "lucide-react"

export function IndustriesSection() {
  const industries = [
    {
      name: "Startups",
      icon: Rocket,
      description: "Ship MVPs in weeks, automate early user onboarding, and scale without early hiring bloat.",
      useCase: "Autonomous customer trial activation & feedback synthesis.",
    },
    {
      name: "SaaS Platforms",
      icon: Briefcase,
      description: "Embed native AI copilots, automate billing churn alerts, and connect multi-tenant API pipelines.",
      useCase: "In-app natural language query agents & automated usage analytics.",
    },
    {
      name: "E-commerce",
      icon: ShoppingCart,
      description: "Automate multi-channel inventory sync, order fulfillment exception handling, and smart support.",
      useCase: "Autonomous tracking resolution & personalized email recovery.",
    },
    {
      name: "Education & EdTech",
      icon: GraduationCap,
      description: "Automate credential verification, student assessment pipelines, and dynamic curriculum delivery.",
      useCase: "Instant cryptographic certificate verification & tutoring agents.",
    },
    {
      name: "Healthcare",
      icon: HeartPulse,
      description: "Streamline patient scheduling, automated intake documentation, and HIPAA-compliant data routing.",
      useCase: "Intake form synthesis & calendar sync across clinic providers.",
    },
    {
      name: "Finance & Fintech",
      icon: Landmark,
      description: "Automate invoice reconciliation, audit trail logging, and real-time fraud signal detection.",
      useCase: "OCR invoice matching against purchase orders in ERP ledgers.",
    },
    {
      name: "Real Estate",
      icon: Home,
      description: "Qualify inbound buyer leads instantly, automate document distribution, and schedule tours.",
      useCase: "Instant SMS lead qualification & property listing packet dispatch.",
    },
    {
      name: "Professional Services",
      icon: Building,
      description: "Automate client engagement letters, project time tracking, and multi-tool status reporting.",
      useCase: "Proposal generation & client portal milestone synchronization.",
    },
    {
      name: "Logistics & Supply",
      icon: Truck,
      description: "Real-time shipment tracking alerts, customs documentation extraction, and route monitoring.",
      useCase: "Automated BOL extraction & carrier milestone notifications.",
    },
    {
      name: "Marketing & Sales",
      icon: Megaphone,
      description: "Automate prospect research, CRM enrichment, campaign analytics, and personalized outreach.",
      useCase: "Intent-based lead scoring & automatic sales rep brief generation.",
    },
  ]

  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-5">
            <Building className="w-3.5 h-3.5 text-cyan-400" />
            <span>Vertical Solutions</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
            Built For Businesses Ready To Move Faster.
          </h2>

          <p className="mt-5 text-base sm:text-lg text-zinc-300 font-medium max-w-2xl mx-auto">
            Different industries. Same challenge: too much work, too many systems, not enough automation.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="rounded-2xl p-5 bg-zinc-950/70 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 backdrop-blur-xl flex flex-col justify-between group hover:bg-white/[0.03] hover:shadow-[0_8px_30px_rgba(6,182,212,0.1)]"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/10 group-hover:border-cyan-400/40 transition-all">
                  <ind.icon className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                </div>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {ind.name}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  {ind.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5">
                <div className="text-[10px] font-mono text-cyan-400 font-semibold mb-0.5">Automated Workflow:</div>
                <p className="text-[11px] text-zinc-300 leading-snug">{ind.useCase}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
