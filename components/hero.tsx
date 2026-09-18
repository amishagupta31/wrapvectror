"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Bot, Cpu, CheckCircle2, Terminal, Zap, Shield, Sparkles, Activity, Layers, Workflow } from "lucide-react"

export function Hero() {
  const [activeTab, setActiveTab] = useState<"orchestrator" | "workflow" | "neural">("orchestrator")
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTick((prev) => (prev + 1) % 100)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-radial-gradient">
      {/* Subtle Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        <div className="flex flex-col items-center text-center">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-cyan-500/30 backdrop-blur-md mb-8 animate-fade-in shadow-[0_0_20px_rgba(6,182,212,0.2)]">
            <div className="w-4 h-4 relative shrink-0">
              <Image
                src="/images/agency-logo.png"
                alt="Logo"
                width={16}
                height={16}
                className="w-full h-full object-contain filter drop-shadow-[0_0_4px_rgba(6,182,212,0.8)]"
              />
            </div>
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-cyan-300 uppercase">
              AI • AUTOMATION • SOFTWARE • DIGITAL PRODUCTS
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.05] max-w-5xl">
            <span className="block text-gradient-silver">Build Smarter.</span>
            <span className="block text-gradient-cyan drop-shadow-[0_0_40px_rgba(56,189,248,0.35)]">
              Automate Everything.
            </span>
            <span className="block text-gradient-silver">Scale Faster.</span>
          </h1>

          {/* Supporting Headline */}
          <p className="mt-7 text-base sm:text-lg md:text-xl text-zinc-300/90 max-w-3xl leading-relaxed font-normal">
            We build AI-powered products, intelligent agents, and automation systems that turn complex business processes into seamless digital experiences.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-base px-8 py-6 rounded-full border border-cyan-400/40 shadow-[0_0_30px_rgba(6,182,212,0.35)] hover:shadow-[0_0_40px_rgba(6,182,212,0.55)] hover:scale-[1.02] transition-all"
            >
              <a href="#contact" className="flex items-center justify-center gap-2">
                <span>Build With Us</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto bg-white/[0.03] hover:bg-white/[0.08] text-zinc-200 hover:text-white border-white/15 px-8 py-6 rounded-full text-base backdrop-blur-md transition-all"
            >
              <a href="#work" className="flex items-center justify-center gap-2">
                <span>Explore Our Work</span>
              </a>
            </Button>
          </div>

          {/* Trust Line */}
          <div className="mt-8 flex items-center justify-center gap-2 text-xs sm:text-sm text-zinc-400">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
            <p>From idea to production — strategy, design, development, AI and automation under one roof.</p>
          </div>

          {/* Hero Visual: Premium AI & System Architecture Interface */}
          <div className="mt-14 w-full max-w-5xl">
            <div className="relative rounded-3xl p-1 bg-gradient-to-b from-white/20 via-white/5 to-transparent border border-white/10 shadow-[0_20px_70px_rgba(0,0,0,0.8)]">
              <div className="rounded-[22px] bg-zinc-950/90 border border-white/10 backdrop-blur-2xl overflow-hidden">
                
                {/* Console Header Bar */}
                <div className="flex flex-wrap items-center justify-between px-5 py-3.5 border-b border-white/10 bg-white/[0.02]">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="h-4 w-px bg-white/10 mx-1" />
                    <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                      system.core.orchestration_v4.2
                    </span>
                  </div>

                  {/* Mode Tabs */}
                  <div className="flex items-center gap-1 p-1 bg-black/50 border border-white/10 rounded-xl">
                    <button
                      onClick={() => setActiveTab("orchestrator")}
                      className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                        activeTab === "orchestrator"
                          ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                          : "text-zinc-400 hover:text-zinc-200"
                      }`}
                    >
                      AI Agent Mesh
                    </button>
                    <button
                      onClick={() => setActiveTab("workflow")}
                      className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                        activeTab === "workflow"
                          ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                          : "text-zinc-400 hover:text-zinc-200"
                      }`}
                    >
                      Automation Pipelines
                    </button>
                    <button
                      onClick={() => setActiveTab("neural")}
                      className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                        activeTab === "neural"
                          ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                          : "text-zinc-400 hover:text-zinc-200"
                      }`}
                    >
                      System Telemetry
                    </button>
                  </div>
                </div>

                {/* Console Body */}
                <div className="p-6 sm:p-8 text-left">
                  {activeTab === "orchestrator" && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* Node 1 */}
                      <div className="p-4 rounded-2xl bg-white/[0.02] border border-cyan-500/30 hover:border-cyan-400/60 transition-all group">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <Bot className="w-4 h-4 text-cyan-400" />
                            <span className="text-xs font-semibold text-white">Lead Intelligence Agent</span>
                          </div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            Active
                          </span>
                        </div>
                        <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                          Autonomous prospect research, Apollo data enrichment & CRM qualification routing.
                        </p>
                        <div className="flex items-center justify-between pt-3 border-t border-white/5 text-[11px] font-mono text-zinc-400">
                          <span>Latency: 420ms</span>
                          <span className="text-cyan-400">99.8% Success</span>
                        </div>
                      </div>

                      {/* Node 2 */}
                      <div className="p-4 rounded-2xl bg-white/[0.02] border border-blue-500/30 hover:border-blue-400/60 transition-all group">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <Workflow className="w-4 h-4 text-blue-400" />
                            <span className="text-xs font-semibold text-white">Document Ops Agent</span>
                          </div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                            Streaming
                          </span>
                        </div>
                        <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                          Multi-modal invoice parsing, contract analysis & ledger reconciliation in real-time.
                        </p>
                        <div className="flex items-center justify-between pt-3 border-t border-white/5 text-[11px] font-mono text-zinc-400">
                          <span>Throughput: 1.4k docs/h</span>
                          <span className="text-blue-400">0 Manual Errors</span>
                        </div>
                      </div>

                      {/* Node 3 */}
                      <div className="p-4 rounded-2xl bg-white/[0.02] border border-indigo-500/30 hover:border-indigo-400/60 transition-all group">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <Cpu className="w-4 h-4 text-indigo-400" />
                            <span className="text-xs font-semibold text-white">Customer Support Agent</span>
                          </div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                            Live
                          </span>
                        </div>
                        <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                          Context-aware reasoning, automated refunds & cross-system API execution.
                        </p>
                        <div className="flex items-center justify-between pt-3 border-t border-white/5 text-[11px] font-mono text-zinc-400">
                          <span>Resolution: 92%</span>
                          <span className="text-indigo-400">&lt; 3.1s Response</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "workflow" && (
                    <div className="space-y-3 font-mono text-xs">
                      <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 flex items-center justify-between text-zinc-300">
                        <div className="flex items-center gap-3">
                          <span className="text-cyan-400">[01] Inbound Webhook</span>
                          <span className="text-zinc-500">→</span>
                          <span>Payload Validated & Normalized</span>
                        </div>
                        <span className="text-emerald-400 text-[11px]">Completed (12ms)</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 flex items-center justify-between text-zinc-300">
                        <div className="flex items-center gap-3">
                          <span className="text-blue-400">[02] LLM Multi-Agent Tool Call</span>
                          <span className="text-zinc-500">→</span>
                          <span>Vector Context & Knowledge Lookup</span>
                        </div>
                        <span className="text-emerald-400 text-[11px]">Completed (180ms)</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 flex items-center justify-between text-zinc-300">
                        <div className="flex items-center gap-3">
                          <span className="text-indigo-400">[03] Database & External API Sync</span>
                          <span className="text-zinc-500">→</span>
                          <span>HubSpot, Slack & PostgreSQL Update</span>
                        </div>
                        <span className="text-emerald-400 text-[11px]">Completed (45ms)</span>
                      </div>
                    </div>
                  )}

                  {activeTab === "neural" && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
                      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                        <div className="text-[11px] font-mono text-zinc-400 mb-1">Total System Uptime</div>
                        <div className="text-xl font-bold text-white font-mono">99.99%</div>
                        <div className="text-[10px] text-emerald-400 mt-1">Fault-tolerant failover</div>
                      </div>
                      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                        <div className="text-[11px] font-mono text-zinc-400 mb-1">Average Response</div>
                        <div className="text-xl font-bold text-cyan-400 font-mono">380ms</div>
                        <div className="text-[10px] text-zinc-400 mt-1">Streaming TTFT</div>
                      </div>
                      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                        <div className="text-[11px] font-mono text-zinc-400 mb-1">Human Hours Saved</div>
                        <div className="text-xl font-bold text-blue-400 font-mono">24,800+</div>
                        <div className="text-[10px] text-zinc-400 mt-1">Across clients</div>
                      </div>
                      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                        <div className="text-[11px] font-mono text-zinc-400 mb-1">Agent Tasks Executed</div>
                        <div className="text-xl font-bold text-indigo-400 font-mono">4.8M+</div>
                        <div className="text-[10px] text-emerald-400 mt-1">Zero manual touch</div>
                      </div>
                    </div>
                  )}

                  {/* Terminal Status Footer */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between text-[11px] font-mono text-zinc-400 gap-2">
                    <div className="flex items-center gap-2">
                      <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                      <span>Cluster Status: Operational (Region: us-east-1 / Edge Mesh)</span>
                    </div>
                    <div className="text-zinc-500">
                      Orchestrator v4.2 • Autonomous Multi-Tenant Infrastructure
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
