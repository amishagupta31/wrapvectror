"use client"

import React, { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, CheckCircle2, Sparkles, Mail, MessageSquare, Shield, Clock, ArrowUpRight } from "lucide-react"

export const OPEN_CONNECT_EVENT = "open-connect-modal"

export function openConnectModal(defaultService?: string) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent(OPEN_CONNECT_EVENT, {
        detail: { service: defaultService || "" },
      })
    )
  }
}

export function ConnectModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Custom Software Development",
    budget: "$10k - $25k",
    message: "",
  })

  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent<{ service?: string }>
      if (customEvent.detail?.service) {
        setFormData((prev) => ({ ...prev, service: customEvent.detail.service || prev.service }))
      }
      setSubmitted(false)
      setIsOpen(true)
    }

    window.addEventListener(OPEN_CONNECT_EVENT, handleOpen)
    return () => window.removeEventListener(OPEN_CONNECT_EVENT, handleOpen)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 900)
  }

  const serviceOptions = [
    "Custom Software Development",
    "Web & Mobile Applications",
    "AI & Automation",
    "Cloud & DevOps",
    "UI/UX Design",
    "Product Strategy",
    "Other / Full-Stack Project",
  ]

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="w-[92vw] sm:max-w-3xl lg:max-w-3xl bg-zinc-950/95 border border-white/15 text-white p-6 sm:p-10 rounded-3xl backdrop-blur-2xl shadow-[0_0_70px_rgba(0,71,255,0.25)] max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-2.5 mb-2">
          <DialogTitle className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Let's build something <span className="text-[#0047FF]">extraordinary</span>
          </DialogTitle>
          <DialogDescription className="text-zinc-400 text-sm sm:text-base">
            Share your requirements or vision. Our engineering team usually responds within 24 hours with an actionable roadmap.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-12 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-blue-500/15 border border-blue-500/40 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(0,71,255,0.3)]">
              <CheckCircle2 className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Inquiry Received!</h3>
            <p className="text-zinc-400 max-w-md mb-8 text-sm sm:text-base">
              Thank you for reaching out. A senior engineer will review your project requirements and get back to you shortly.
            </p>
            <Button
              onClick={() => setIsOpen(false)}
              className="bg-[#0047FF] hover:bg-[#0038e0] text-white font-semibold px-6 py-2.5 rounded-full"
            >
              Done
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                  Your Name <span className="text-blue-400">*</span>
                </label>
                <Input
                  required
                  placeholder="Alex Rivera"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-black/50 border-white/10 focus:border-blue-500 rounded-xl text-white placeholder:text-zinc-600 h-11"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                  Work Email <span className="text-blue-400">*</span>
                </label>
                <Input
                  required
                  type="email"
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-black/50 border-white/10 focus:border-blue-500 rounded-xl text-white placeholder:text-zinc-600 h-11"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                  Company / Organization
                </label>
                <Input
                  placeholder="Acme Inc."
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="bg-black/50 border-white/10 focus:border-blue-500 rounded-xl text-white placeholder:text-zinc-600 h-11"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                  Primary Service
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-black/50 border border-white/10 focus:border-blue-500 rounded-xl text-white px-3.5 h-11 text-sm focus:outline-none"
                >
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-zinc-900 text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                Project Overview & Requirements
              </label>
              <Textarea
                rows={3}
                placeholder="Tell us about the problems you're looking to solve, your current workflow bottlenecks, or product scope..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-black/50 border-white/10 focus:border-blue-500 rounded-xl text-white placeholder:text-zinc-600 resize-none text-sm"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                  Estimated Budget
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full bg-black/50 border border-white/10 focus:border-blue-500 rounded-xl text-white px-3.5 h-11 text-sm focus:outline-none"
                >
                  <option value="< $10k" className="bg-zinc-900 text-white">&lt; $10k</option>
                  <option value="$10k - $25k" className="bg-zinc-900 text-white">$10k - $25k</option>
                  <option value="$25k - $50k" className="bg-zinc-900 text-white">$25k - $50k</option>
                  <option value="$50k+" className="bg-zinc-900 text-white">$50k+</option>
                </select>
              </div>

              <div className="flex items-end">
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#0047FF] hover:bg-[#0038e0] text-white font-semibold h-11 rounded-xl shadow-[0_0_20px_rgba(0,71,255,0.4)] hover:shadow-[0_0_28px_rgba(0,71,255,0.6)] transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Start a Conversation</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-zinc-400 pt-3 border-t border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Usually responds within 24 hours</span>
              </div>
              <div className="flex items-center gap-1 text-zinc-400">
                <Shield className="w-3.5 h-3.5 text-blue-400" />
                <span>NDA Protected & Confidential</span>
              </div>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
