"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Bot, ArrowRight, Play, CheckCircle2, Sparkles, Terminal, Cpu, Database, Bell } from "lucide-react"

export function AgentShowcase() {
  const [selectedScenario, setSelectedScenario] = useState<number>(0)
  const [isSimulating, setIsSimulating] = useState(false)
  const [activeStepIndex, setActiveStepIndex] = useState(2)

  const scenarios = [
    {
      id: "sales",
      title: "B2B Sales Lead Engine",
      prompt: "Find and qualify high-intent enterprise leads for our sales team.",
      agent: "Autonomous Growth Agent v2.4",
      steps: [
        { label: "User Request", detail: '"Find qualified leads for our sales team"', icon: Bot },
        { label: "Reasoning", detail: "ICP parameter parsing, industry filtering, intent modeling", icon: Cpu },
        { label: "Lead Discovery", detail: "Scraping verified directories, LinkedIn & Apollo feeds", icon: Database },
        { label: "Data Enrichment", detail: "Revenue verification, tech stack analysis & email validation", icon: Sparkles },
        { label: "Qualification Score", detail: "Calculated Lead Score: 94/100 (High Intent)", icon: CheckCircle2 },
        { label: "CRM & Slack Sync", detail: "HubSpot deal created, sales rep notified with personalized brief", icon: Bell },
      ],
    },
    {
      id: "support",
      title: "Autonomous Tier-1 Support Agent",
      prompt: "Handle tier-1 order inquiries, refunds, and address changes automatically.",
      agent: "Customer Resolution Agent v3.1",
      steps: [
        { label: "Customer Inbound", detail: '"Need to update shipping address for order #88492"', icon: Bot },
        { label: "Intent Classification", detail: "Identified address update request, checked order cutoff window", icon: Cpu },
        { label: "Auth & Validation", detail: "Verified user identity via 2FA & order ownership check", icon: Database },
        { label: "Warehouse API Call", detail: "Updated shipping address in Shopify & WMS fulfillment queue", icon: Sparkles },
        { label: "Confirmation Generated", detail: "Generated custom tracking link & updated Zendesk ticket", icon: CheckCircle2 },
        { label: "Real-time Notification", detail: "Customer notified via SMS/Email in < 1.4 seconds", icon: Bell },
      ],
    },
    {
      id: "finance",
      title: "Financial Invoice & Reconciliation Agent",
      prompt: "Extract unstructured vendor invoice PDFs and reconcile against ERP ledgers.",
      agent: "Ledger Intelligence Agent v1.9",
      steps: [
        { label: "Invoice Uploaded", detail: "Multipage PDF received from supplier via email gateway", icon: Bot },
        { label: "OCR & Vision Parsing", detail: "Extracted line items, tax IDs, banking SWIFT & totals", icon: Cpu },
        { label: "ERP Matching", detail: "Queried NetSuite PO #4920 to cross-check quantities & rates", icon: Database },
        { label: "Discrepancy Check", detail: "Zero variance detected. Payment scheduled for Net-30", icon: Sparkles },
        { label: "Approval Logged", detail: "Audit trail timestamped and encrypted on cloud vault", icon: CheckCircle2 },
        { label: "Finance Alert", detail: "Summary digest sent to CFO Slack channel with approval token", icon: Bell },
      ],
    },
  ]

  const current = scenarios[selectedScenario]

  const handleRunSimulation = () => {
    setIsSimulating(true)
    setActiveStepIndex(0)
    let currentStep = 0
    const interval = setInterval(() => {
      currentStep++
      if (currentStep < current.steps.length) {
        setActiveStepIndex(currentStep)
      } else {
        clearInterval(interval)
        setIsSimulating(false)
      }
    }, 700)
  }

  return (
    <section id="agents" className="relative py-28 sm:py-36 overflow-hidden bg-black text-white">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono uppercase tracking-widest mb-5">
            <Bot className="w-3.5 h-3.5 text-blue-400" />
            <span>Autonomous Intelligence</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
            Meet Your New Digital Workforce.
          </h2>

          <p className="mt-5 text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto">
            AI agents can research, analyze, communicate, make decisions, and execute tasks across the tools your business already uses.
          </p>
        </div>

        {/* Interactive Scenario Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {scenarios.map((sc, index) => (
            <button
              key={sc.id}
              onClick={() => {
                setSelectedScenario(index)
                setActiveStepIndex(sc.steps.length - 1)
              }}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                selectedScenario === index
                  ? "bg-[#0047FF] text-white shadow-[0_0_20px_rgba(0,71,255,0.4)] border border-blue-400/40"
                  : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10"
              }`}
            >
              {sc.title}
            </button>
          ))}
        </div>

        {/* Visualization Card */}
        <div className="relative rounded-3xl p-1 bg-zinc-900 border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
          <div className="rounded-[22px] bg-zinc-950/90 p-6 sm:p-10">
            
            {/* Top Bar of Visualizer */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-white/10 gap-4 mb-8">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-mono text-blue-400 font-bold uppercase">{current.agent}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {current.prompt}
                </h3>
              </div>

              <Button
                onClick={handleRunSimulation}
                disabled={isSimulating}
                className="bg-zinc-900 hover:bg-zinc-800 text-white border border-white/20 rounded-full px-5 py-2 text-xs font-mono flex items-center gap-2"
              >
                <Play className={`w-3.5 h-3.5 text-blue-400 ${isSimulating ? "animate-spin" : ""}`} />
                <span>{isSimulating ? "Executing Flow..." : "Replay Agent Flow"}</span>
              </Button>
            </div>

            {/* Linear Workflow Visualization: User Request -> Reasoning -> Tools -> Actions -> Result */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 relative">
              {current.steps.map((step, idx) => {
                const isActive = idx <= activeStepIndex
                const isCurrent = idx === activeStepIndex

                return (
                  <div
                    key={step.label}
                    className={`relative rounded-2xl p-4.5 border transition-all duration-300 flex flex-col justify-between ${
                      isCurrent
                        ? "bg-[#0047FF]/15 border-blue-400 shadow-[0_0_20px_rgba(0,71,255,0.3)] scale-[1.03]"
                        : isActive
                        ? "bg-white/[0.04] border-white/20 text-white"
                        : "bg-white/[0.01] border-white/5 opacity-50"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-blue-300 font-bold">
                          STEP 0{idx + 1}
                        </span>
                        <step.icon className={`w-4 h-4 ${isActive ? "text-blue-400" : "text-zinc-600"}`} />
                      </div>
                      <h4 className="text-xs font-bold text-white mb-1.5">{step.label}</h4>
                      <p className="text-[11px] text-zinc-400 leading-relaxed font-mono">{step.detail}</p>
                    </div>

                    <div className="mt-4 pt-2 border-t border-white/5 flex items-center gap-1.5 text-[10px] font-mono">
                      {isActive ? (
                        <span className="text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> Done
                        </span>
                      ) : (
                        <span className="text-zinc-500">Queued</span>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Agent Telemetry Output Box */}
            <div className="mt-8 p-4 rounded-xl bg-black/60 border border-white/10 font-mono text-xs text-zinc-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-blue-400" />
                <span>
                  Execution Protocol: <strong className="text-white">User Request → AI Agent → Reasoning → Tools → Actions → Result</strong>
                </span>
              </div>
              <div className="text-[11px] text-zinc-400">
                Avg. Total Execution: <span className="text-blue-400 font-bold">1.24s</span>
              </div>
            </div>

            {/* CTA bottom */}
            <div className="mt-8 text-center">
              <Button
                asChild
                size="lg"
                className="bg-[#0047FF] hover:bg-[#0038e0] text-white font-semibold text-sm px-8 py-6 rounded-full border border-blue-400/40 shadow-[0_0_25px_rgba(0,71,255,0.4)] hover:shadow-[0_0_35px_rgba(0,71,255,0.6)] transition-all"
              >
                <a href="#contact" className="flex items-center gap-2">
                  <span>Build Your AI Workforce</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
