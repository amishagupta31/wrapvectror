"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle2, Clock, Zap, AlertCircle, Sparkles, RefreshCw, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AutomationSection() {
  const [activeWorkflow, setActiveWorkflow] = useState<"leads" | "onboarding" | "reporting">("leads")

  const workflows = {
    leads: {
      title: "Inbound Lead Qualification & Routing",
      manual: [
        { label: "Lead arrives via website form", time: "0 min" },
        { label: "Employee manually checks inbox", time: "15 min delay" },
        { label: "Copies details to Google Sheet", time: "5 min" },
        { label: "Searches LinkedIn & Company data", time: "10 min" },
        { label: "Updates HubSpot CRM fields manually", time: "5 min" },
        { label: "Writes & sends manual template reply", time: "5 min" },
      ],
      manualTotal: "40+ mins per lead • Prone to typos & delays",
      automated: [
        { label: "Lead Arrives", time: "0.0s", detail: "Webhook triggers agent" },
        { label: "AI Agent", time: "0.2s", detail: "Parses ICP parameters" },
        { label: "Enrichment", time: "0.4s", detail: "Fetches Apollo & Crunchbase data" },
        { label: "Qualification", time: "0.6s", detail: "Computes fit score 0-100" },
        { label: "CRM Sync", time: "0.8s", detail: "Updates deal in HubSpot" },
        { label: "Personalized Response", time: "1.1s", detail: "Tailored email sent via Gmail API" },
      ],
      automatedTotal: "1.1 seconds total • 100% consistent • 24/7 instant execution",
    },
    onboarding: {
      title: "Client Contract & Workspace Provisioning",
      manual: [
        { label: "Client signs contract PDF", time: "0 min" },
        { label: "Ops manager downloads PDF", time: "20 min delay" },
        { label: "Creates Notion workspace manually", time: "15 min" },
        { label: "Invites client to Slack & tools", time: "10 min" },
        { label: "Creates invoice in QuickBooks", time: "10 min" },
        { label: "Sends welcome email with links", time: "5 min" },
      ],
      manualTotal: "60+ mins • Human bottleneck between signature and kickoff",
      automated: [
        { label: "Signature Signed", time: "0.0s", detail: "DocuSign webhook received" },
        { label: "AI Contract Parser", time: "0.3s", detail: "Extracts billing terms & tier" },
        { label: "Workspace Builder", time: "0.6s", detail: "Clones customized Notion portal" },
        { label: "Identity & Invites", time: "0.9s", detail: "Invites to Slack & Stripe customer" },
        { label: "Invoice Issued", time: "1.2s", detail: "Stripe invoice created automatically" },
        { label: "Kickoff Dispatched", time: "1.5s", detail: "Welcome kit & calendar links sent" },
      ],
      automatedTotal: "1.5 seconds • Client onboarded instantly within seconds of signing",
    },
    reporting: {
      title: "Multi-Platform Marketing Data Aggregation",
      manual: [
        { label: "Log into Meta, Google Ads & TikTok", time: "10 min" },
        { label: "Export 3 separate CSV spreadsheets", time: "15 min" },
        { label: "VLOOKUP & clean mismatched columns", time: "30 min" },
        { label: "Calculate blended ROAS & CPA", time: "15 min" },
        { label: "Format PowerPoint executive deck", time: "45 min" },
        { label: "Email weekly report to executives", time: "5 min" },
      ],
      manualTotal: "2.0+ hours weekly • Outdated by the time it's sent",
      automated: [
        { label: "Scheduled Trigger", time: "0.0s", detail: "Cron execution every Monday 06:00" },
        { label: "API Extractors", time: "0.5s", detail: "Fetches live spend from 4 ad networks" },
        { label: "Data Normalization", time: "0.8s", detail: "Unifies currency, attribution & UTMs" },
        { label: "AI Analysis Agent", time: "1.2s", detail: "Generates executive anomaly summary" },
        { label: "Dashboard Refreshed", time: "1.6s", detail: "PostgreSQL & dashboard updated" },
        { label: "Slack Briefing", time: "1.9s", detail: "Formatted digest pushed to leadership" },
      ],
      automatedTotal: "1.9 seconds • Zero human effort • 100% real-time data integrity",
    },
  }

  const current = workflows[activeWorkflow]

  return (
    <section id="automation" className="relative py-28 sm:py-36 overflow-hidden bg-black/50">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono uppercase tracking-widest mb-5">
            <Zap className="w-3.5 h-3.5 text-blue-400" />
            <span>Workflow Modernization</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
            If Your Team Does It Repeatedly, <br className="hidden sm:inline" />
            <span className="text-[#0047FF]">We Can Probably Automate It.</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto">
            Eliminate operational drag. Transform disconnected human steps into automated pipelines that execute in seconds.
          </p>
        </div>

        {/* Workflow Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {(
            [
              { key: "leads", label: "Lead Qualification & CRM" },
              { key: "onboarding", label: "Client Onboarding" },
              { key: "reporting", label: "Multi-Tool Reporting" },
            ] as const
          ).map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveWorkflow(tab.key)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeWorkflow === tab.key
                  ? "bg-[#0047FF] text-white shadow-[0_0_20px_rgba(0,71,255,0.4)] border border-blue-400/40"
                  : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Before vs After Side-by-Side Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Manual Process Card */}
          <div className="relative rounded-3xl p-7 sm:p-9 bg-zinc-950/80 border border-red-500/20 backdrop-blur-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
                <div>
                  <span className="text-[11px] font-mono text-red-400 font-bold uppercase tracking-wider">Before</span>
                  <h3 className="text-xl font-bold text-zinc-200 mt-0.5">Manual Human Workflow</h3>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 flex items-center gap-1.5">
                  <Clock className="w-3 h-3" /> High Friction
                </span>
              </div>

              <div className="space-y-3.5">
                {current.manual.map((step, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs text-zinc-300">
                    <div className="flex items-center gap-2.5">
                      <span className="text-red-400/60 font-mono text-[10px]">0{i + 1}</span>
                      <span>{step.label}</span>
                    </div>
                    <span className="text-[11px] font-mono text-zinc-400">{step.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-red-400">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{current.manualTotal}</span>
            </div>
          </div>

          {/* Automated System Card */}
          <div className="relative rounded-3xl p-7 sm:p-9 bg-zinc-950/90 border border-blue-500/40 shadow-[0_0_40px_rgba(0,71,255,0.15)] backdrop-blur-2xl flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
                <div>
                  <span className="text-[11px] font-mono text-blue-400 font-bold uppercase tracking-wider">After — Automated</span>
                  <h3 className="text-xl font-bold text-white mt-0.5">Engineered AI Pipeline</h3>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 flex items-center gap-1.5">
                  <Zap className="w-3 h-3 text-blue-400" /> Sub-second Speed
                </span>
              </div>

              <div className="space-y-3.5">
                {current.automated.map((step, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-blue-500/[0.04] border border-blue-500/20 hover:border-blue-400/50 transition-all flex items-center justify-between text-xs text-white"
                  >
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <div>
                        <span className="font-semibold text-white">{step.label}</span>
                        <span className="text-zinc-400 text-[11px] ml-2 font-mono">({step.detail})</span>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-blue-300 font-bold">{step.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-blue-500/20 flex items-center justify-between text-xs font-mono text-blue-300">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span>{current.automatedTotal}</span>
              </div>
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Button
            asChild
            size="lg"
            className="bg-[#0047FF] hover:bg-[#0038e0] text-white font-semibold text-sm px-8 py-6 rounded-full border border-blue-400/40 shadow-[0_0_25px_rgba(0,71,255,0.4)] transition-all"
          >
            <a href="#contact" className="flex items-center gap-2">
              <span>Automate Your Team's Workflows</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>

      </div>
    </section>
  )
}
