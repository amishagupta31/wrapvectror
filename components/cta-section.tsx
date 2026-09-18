"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Sparkles, Zap, Shield, Bot } from "lucide-react"

export function CtaSection() {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden bg-black">
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="rounded-3xl p-8 sm:p-16 bg-zinc-950 border border-white/10 shadow-[0_20px_90px_rgba(0,0,0,0.8)] text-center relative overflow-hidden">
          
          {/* Subtle Top Accent Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono uppercase tracking-widest mb-8">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Ready for Immediate Transformation</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight max-w-3xl mx-auto">
            Have A Problem <br className="hidden sm:inline" />
            <span className="text-[#0047FF]">Worth Automating?</span>
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
              className="w-full sm:w-auto bg-[#0047FF] hover:bg-[#0038e0] text-white font-semibold text-base px-8 py-6 rounded-full border border-blue-400/40 shadow-[0_0_25px_rgba(0,71,255,0.4)] hover:shadow-[0_0_35px_rgba(0,71,255,0.6)] hover:scale-[1.02] transition-all"
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
              className="w-full sm:w-auto bg-zinc-900 hover:bg-zinc-800 text-zinc-100 hover:text-white border-white/15 px-8 py-6 rounded-full text-base transition-all"
            >
              <a href="#contact" className="flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4 text-blue-400" />
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
