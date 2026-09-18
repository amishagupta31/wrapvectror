"use client"

import { useState } from "react"
import { Cpu, Code, Database, Server, Workflow, Sparkles, Layers, Terminal } from "lucide-react"

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string>("ai")

  const categories = [
    {
      id: "ai",
      label: "AI & Agents",
      icon: Sparkles,
      description: "State-of-the-art foundation models, agentic frameworks, and vector search systems.",
      techs: [
        { name: "OpenAI", role: "GPT-4o, Reasoning & Vision Models" },
        { name: "Gemini", role: "Long-Context & Multimodal Intelligence" },
        { name: "Claude", role: "Constitutional AI & Nuanced Reasoning" },
        { name: "LangChain", role: "Chaining & Tool Orchestration" },
        { name: "LangGraph", role: "Stateful Multi-Agent Workflows" },
        { name: "LlamaIndex", role: "Advanced RAG & Vector Indexing" },
        { name: "Hugging Face", role: "Open-Source Models & Embeddings" },
      ],
    },
    {
      id: "frontend",
      label: "Frontend",
      icon: Code,
      description: "Lightning-fast, accessible user interfaces built for modern high-load digital products.",
      techs: [
        { name: "React", role: "Component Architecture & Dynamic UI" },
        { name: "Next.js", role: "Full-Stack Server Components & SSR" },
        { name: "Tailwind CSS", role: "Utility-First High Performance Styling" },
        { name: "TypeScript", role: "Type-Safe Enterprise Codebases" },
      ],
    },
    {
      id: "backend",
      label: "Backend",
      icon: Server,
      description: "Robust asynchronous APIs, microservices, and high-concurrency computation pipelines.",
      techs: [
        { name: "Python", role: "AI Services & Data Pipelines" },
        { name: "FastAPI", role: "High-Speed Async Python APIs" },
        { name: "Node.js", role: "Scalable Event-Driven Services" },
        { name: "Express", role: "Lightweight Middleware Frameworks" },
      ],
    },
    {
      id: "data",
      label: "Data & Infrastructure",
      icon: Database,
      description: "Rock-solid cloud hosting, distributed databases, and fault-tolerant storage.",
      techs: [
        { name: "PostgreSQL", role: "Relational Data & pgvector Storage" },
        { name: "MongoDB", role: "Document Storage & Unstructured Data" },
        { name: "Redis", role: "In-Memory Caching & Task Queues" },
        { name: "AWS", role: "Scalable Cloud Compute & Storage" },
        { name: "Vercel", role: "Edge Network & Global Deployment" },
        { name: "Docker", role: "Containerization & Reproducibility" },
      ],
    },
    {
      id: "automation",
      label: "Automation & Integrations",
      icon: Workflow,
      description: "Zero-latency webhooks, custom API gateways, and enterprise orchestration platforms.",
      techs: [
        { name: "APIs & Rest/GraphQL", role: "Universal Integration Standard" },
        { name: "Webhooks", role: "Instant Real-Time Event Triggers" },
        { name: "n8n", role: "Self-Hosted Workflow Orchestration" },
        { name: "Make", role: "Complex Visual Business Logic" },
        { name: "Zapier", role: "Rapid Cross-App Integration" },
      ],
    },
  ]

  const active = categories.find((c) => c.id === activeCategory) || categories[0]

  return (
    <section id="technology" className="relative py-28 sm:py-36 overflow-hidden bg-black/60">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-5">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>Architecture & Stack</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
            Built With The Technology Of Tomorrow.
          </h2>

          <p className="mt-5 text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto">
            We choose technology based on the problem — not the trend.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isSelected
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_25px_rgba(6,182,212,0.4)] border border-cyan-400/40"
                    : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                <cat.icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            )
          })}
        </div>

        {/* Tech Grid Display */}
        <div className="rounded-3xl p-8 sm:p-12 bg-zinc-950/90 border border-white/10 shadow-[0_15px_60px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-white/10 mb-8 gap-3">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
                <active.icon className="w-5 h-5 text-cyan-400" />
                <span>{active.label}</span>
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">{active.description}</p>
            </div>
            <div className="text-xs font-mono text-cyan-400/80 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              {active.techs.length} Production Technologies
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {active.techs.map((tech) => (
              <div
                key={tech.name}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/40 hover:bg-white/[0.04] transition-all duration-200 group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {tech.name}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-cyan-400/50 group-hover:bg-cyan-400 transition-colors" />
                </div>
                <p className="text-xs text-zinc-400 font-mono leading-relaxed">{tech.role}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
