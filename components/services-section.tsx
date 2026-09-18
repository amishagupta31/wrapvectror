"use client"

import { Bot, Cpu, Layers, Sparkles, Workflow, Code2, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      number: "01",
      title: "AI Agents",
      tagline: "AI that doesn't just answer. It acts.",
      description:
        "Build autonomous AI agents capable of researching, reasoning, communicating, executing workflows, and working across your existing tools.",
      examples: [
        "Customer support agents",
        "Research agents",
        "Sales agents",
        "Lead qualification agents",
        "Internal knowledge agents",
        "Workflow agents",
      ],
      ctaText: "Explore AI Agents",
      ctaHref: "#agents",
      icon: Bot,
      glow: "from-cyan-500/20 to-blue-500/5",
    },
    {
      number: "02",
      title: "Intelligent Automation",
      tagline: "Replace repetitive work with systems that run themselves.",
      description:
        "Connect your tools, automate workflows, eliminate manual processes, and create intelligent business operations.",
      examples: [
        "CRM automation",
        "Lead workflows",
        "Email automation",
        "Document processing",
        "Data synchronization",
        "Business process automation",
      ],
      ctaText: "Automate Your Workflow",
      ctaHref: "#automation",
      icon: Workflow,
      glow: "from-blue-500/20 to-indigo-500/5",
    },
    {
      number: "03",
      title: "AI-Powered Software",
      tagline: "Software built for the next generation of businesses.",
      description:
        "Design and develop intelligent SaaS platforms, dashboards, internal tools, customer portals, and AI-powered applications.",
      examples: [
        "SaaS platforms",
        "Executive dashboards",
        "Internal operations tools",
        "Customer portals",
        "AI copilot interfaces",
        "Predictive engines",
      ],
      ctaText: "Build Your Product",
      ctaHref: "#contact",
      icon: Sparkles,
      glow: "from-indigo-500/20 to-cyan-500/5",
    },
    {
      number: "04",
      title: "Web & App Development",
      tagline: "Digital products engineered to perform.",
      description:
        "Build fast, scalable, responsive web applications and platforms using modern technologies.",
      examples: [
        "SaaS platforms",
        "Business dashboards",
        "E-commerce",
        "Customer portals",
        "Admin systems",
        "Mobile applications",
      ],
      ctaText: "Start Building",
      ctaHref: "#contact",
      icon: Code2,
      glow: "from-emerald-500/20 to-cyan-500/5",
    },
    {
      number: "05",
      title: "AI Integration",
      tagline: "Bring intelligence into the systems you already use.",
      description:
        "Integrate AI into existing products, workflows, databases, CRMs, communication systems, and business processes.",
      examples: [
        "Legacy system AI retrofitting",
        "Vector search & RAG pipelines",
        "Custom LLM API gateways",
        "Automated data pipelines",
        "Slack & Teams AI copilots",
        "CRM enrichment hooks",
      ],
      ctaText: "Add AI To Your Business",
      ctaHref: "#contact",
      icon: Cpu,
      glow: "from-purple-500/20 to-blue-500/5",
    },
    {
      number: "06",
      title: "Product Engineering",
      tagline: "From an idea on paper to a product in production.",
      description:
        "We help businesses move from concept → prototype → MVP → scalable production system with zero operational debt.",
      examples: [
        "Strategy & discovery",
        "UX/UI & design systems",
        "Full-stack development",
        "AI model integration",
        "Automated testing & QA",
        "Deployment & scaling",
      ],
      ctaText: "Engineer Your System",
      ctaHref: "#contact",
      icon: Layers,
      glow: "from-cyan-500/20 to-purple-500/5",
      isProcessPillar: true,
    },
  ]

  return (
    <section id="services" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono uppercase tracking-widest mb-5">
            <Cpu className="w-3.5 h-3.5 text-blue-400" />
            <span>Our Capabilities</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
            What We Build
          </h2>

          <p className="mt-5 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            From intelligent automation to complete digital products, we engineer technology around the way your business actually works.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <div
              key={service.number}
              className="relative rounded-3xl p-7 bg-zinc-950/70 border border-white/10 hover:border-blue-500/40 transition-all duration-300 backdrop-blur-xl group hover:shadow-[0_10px_40px_rgba(0,71,255,0.15)] flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold tracking-widest text-blue-400 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    {service.number}
                  </span>
                  <div className="w-11 h-11 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:border-blue-400/50 group-hover:bg-blue-500/10 transition-all duration-300">
                    <service.icon className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-2xl font-bold text-white tracking-tight mb-2 group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm font-semibold text-zinc-300 mb-4 leading-snug">
                  {service.tagline}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Process Step for Service 06 */}
                {service.isProcessPillar && (
                  <div className="mb-6 p-3 rounded-xl bg-blue-500/[0.06] border border-blue-500/20 text-[11px] font-mono text-blue-300">
                    Strategy → UX/UI → Dev → AI → Testing → Deployment → Scale
                  </div>
                )}

                {/* Examples Checklist */}
                <div className="space-y-2 mb-8 pt-4 border-t border-white/5">
                  {service.examples.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-zinc-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card CTA */}
              <div className="pt-4 border-t border-white/10">
                <a
                  href={service.ctaHref}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-400 hover:text-blue-300 group-hover:translate-x-1 transition-all"
                >
                  <span>{service.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
