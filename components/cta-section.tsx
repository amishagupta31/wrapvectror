"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Sparkles, Zap, Shield, Bot } from "lucide-react"

export function CtaSection() {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      {/* Dramatic Glowing Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/20 to-black pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/15 to-indigo-600/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="rounded-3xl p-8 sm:p-16 bg-gradient-to-b from-zinc-900/90 to-zinc-950/95 border border-cyan-500/30 shadow-[0_20px_90px_rgba(6,182,212,0.2)] backdrop-blur-2xl text-center relative overflow-hidden">
          
          {/* Subtle Top Accent Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-8">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Ready for Immediate Transformation</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight max-w-3xl mx-auto">
            Have A Problem <br className="hidden sm:inline" />
            <span className="text-gradient-cyan">Worth Automating?</span>
          </h2>

          {/* Supporting Text */}
          <p className="mt-6 text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Tell us what's slowing your business down. We'll help you turn it into a system that works smarter.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-base px-8 py-6 rounded-full border border-cyan-400/40 shadow-[0_0_35px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] hover:scale-[1.02] transition-all"
            >
              <a href="#contact" className="flex items-center justify-center gap-2">
                <span>Let's Build Something Intelligent</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto bg-white/[0.03] hover:bg-white/[0.08] text-zinc-200 hover:text-white border-white/15 px-8 py-6 rounded-full text-base backdrop-blur-md transition-all"
            >
              <a href="#contact" className="flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4 text-cyan-400" />
                <span>Book A Discovery Call</span>
              </a>
            </Button>
          </div>

          {/* Reassurance Bullet Line */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Direct Engineering Access</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Full IP & Source Code Ownership</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Rapid 2-to-4 Week Sprint Deliverables</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
