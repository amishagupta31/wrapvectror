"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Send, Sparkles, Shield, Clock, Mail, MessageSquare } from "lucide-react"

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    buildGoal: "AI Agents & Autonomous Workflows",
    challenge: "",
    budget: "$10k - $25k",
    timeline: "1 - 2 Months",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1000)
  }

  return (
    <section id="team" className="relative scroll-mt-20">
      <span id="contact" className="absolute -top-24" />
      {/* Seamless Organic Wave Divider transitioning into dark slate gray */}
      <div className="w-full overflow-hidden leading-none select-none pointer-events-none -mb-1 bg-transparent">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative block w-full h-14 sm:h-24 md:h-32 text-[#0f1722] fill-current"
          preserveAspectRatio="none"
        >
          <path d="M0,45 C240,110 480,10 720,60 C960,110 1200,15 1440,45 V120 H0 Z" />
        </svg>
      </div>

      {/* Main Section Content Container */}
      <div className="bg-[#0f1722] pt-6 pb-28 sm:pb-36">
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/40 text-blue-300 text-xs font-mono uppercase tracking-widest mb-5">
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>Direct Project Inquiry</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
              Let's Build The Future.
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
              Tell us about your operational bottlenecks or the product you need built. We'll map out an actionable engineering roadmap.
            </p>
          </div>

        {/* Contact Form Card */}
        <div className="rounded-3xl p-8 sm:p-12 bg-[#15202c] border border-slate-700/60 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
          {submitted ? (
            <div className="py-16 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Message Received</h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
                Our lead systems architect will review your project requirements and respond within 24 hours with architectural suggestions.
              </p>
              <Button
                onClick={() => setSubmitted(false)}
                variant="outline"
                className="rounded-full text-xs font-mono border-slate-600 text-white hover:bg-slate-800"
              >
                Send Another Inquiry
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Name & Work Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono font-medium text-slate-300 uppercase tracking-wider mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#0c131c] border border-slate-700/80 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#0047FF] focus:ring-1 focus:ring-[#0047FF] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-slate-300 uppercase tracking-wider mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#0c131c] border border-slate-700/80 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#0047FF] focus:ring-1 focus:ring-[#0047FF] transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Company & What do you want to build? */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono font-medium text-slate-300 uppercase tracking-wider mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Acme Technologies"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#0c131c] border border-slate-700/80 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#0047FF] focus:ring-1 focus:ring-[#0047FF] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-slate-300 uppercase tracking-wider mb-2">
                    What do you want to build?
                  </label>
                  <select
                    value={formData.buildGoal}
                    onChange={(e) => setFormData({ ...formData, buildGoal: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#0c131c] border border-slate-700/80 text-white text-sm focus:outline-none focus:border-[#0047FF] focus:ring-1 focus:ring-[#0047FF] transition-all"
                  >
                    <option value="AI Agents & Autonomous Workflows">AI Agents & Autonomous Workflows</option>
                    <option value="Intelligent Operations & Automation">Intelligent Operations & Automation</option>
                    <option value="AI-Powered SaaS / Web Application">AI-Powered SaaS / Web Application</option>
                    <option value="Legacy AI Integration / RAG System">Legacy AI Integration / RAG System</option>
                    <option value="End-to-End Product Engineering">End-to-End Product Engineering</option>
                  </select>
                </div>
              </div>

              {/* Current Challenge */}
              <div>
                <label className="block text-xs font-mono font-medium text-slate-300 uppercase tracking-wider mb-2">
                  Current Challenge / Scope of Work *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe what is currently slowing your team down or the system you want engineered..."
                  value={formData.challenge}
                  onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#0c131c] border border-slate-700/80 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#0047FF] focus:ring-1 focus:ring-[#0047FF] transition-all resize-none"
                />
              </div>

              {/* Row 3: Budget Range & Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono font-medium text-slate-300 uppercase tracking-wider mb-2">
                    Budget Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#0c131c] border border-slate-700/80 text-white text-sm focus:outline-none focus:border-[#0047FF] focus:ring-1 focus:ring-[#0047FF] transition-all"
                  >
                    <option value="<$10k">&lt; $10k (Targeted automation)</option>
                    <option value="$10k - $25k">$10k - $25k (Agent / workflow sprint)</option>
                    <option value="$25k - $50k">$25k - $50k (Complete product / MVP)</option>
                    <option value="$50k+">$50k+ (Enterprise system architecture)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-slate-300 uppercase tracking-wider mb-2">
                    Target Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#0c131c] border border-slate-700/80 text-white text-sm focus:outline-none focus:border-[#0047FF] focus:ring-1 focus:ring-[#0047FF] transition-all"
                  >
                    <option value="Immediate (Next 2-4 weeks)">Immediate (Next 2-4 weeks)</option>
                    <option value="1 - 2 Months">1 - 2 Months</option>
                    <option value="3+ Months">3+ Months</option>
                    <option value="Exploring Feasibility">Exploring Feasibility</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={loading}
                  size="lg"
                  className="w-full bg-[#0047FF] hover:bg-[#0038e0] text-white font-semibold text-base py-6 rounded-xl border border-blue-400/40 shadow-[0_0_25px_rgba(0,71,255,0.4)] hover:shadow-[0_0_35px_rgba(0,71,255,0.6)] transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>Transmitting Requirements...</span>
                  ) : (
                    <>
                      <span>Start The Conversation</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </div>

              {/* Reassurance Note */}
              <div className="text-center pt-2">
                <p className="text-xs text-slate-400 flex items-center justify-center gap-1.5 font-medium">
                  <Shield className="w-3.5 h-3.5 text-blue-400" />
                  <span>No hard sell. Just a conversation about what can be built.</span>
                </p>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  </section>
  )
}


