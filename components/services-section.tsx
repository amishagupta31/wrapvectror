"use client"

import { Box, Smartphone, Sparkles, Cloud, PenTool, BarChart3, ArrowRight } from "lucide-react"
import { openConnectModal } from "@/components/connect-modal"

export function ServicesSection() {
  const services = [
    {
      id: "custom-software",
      title: "Custom Software Development",
      description: "Scalable, secure and high-performance solutions.",
      icon: Box,
    },
    {
      id: "web-mobile",
      title: "Web & Mobile Applications",
      description: "Engaging digital products for every platform.",
      icon: Smartphone,
    },
    {
      id: "ai-automation",
      title: "AI & Automation",
      description: "Smarter workflows for faster growth.",
      icon: Sparkles,
    },
    {
      id: "cloud-devops",
      title: "Cloud & DevOps",
      description: "Reliable, scalable infrastructure.",
      icon: Cloud,
    },
    {
      id: "ui-ux",
      title: "UI/UX Design",
      description: "Beautiful, intuitive experiences.",
      icon: PenTool,
    },
    {
      id: "product-strategy",
      title: "Product Strategy",
      description: "Turn ideas into successful products.",
      icon: BarChart3,
    },
  ]

  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden bg-black scroll-mt-20">
      {/* Background Subtle Tech Grid / Ambient Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0047FF0a_1px,transparent_1px),linear-gradient(to_bottom,#0047FF0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        {/* Top Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-16 sm:mb-20">
          {/* Left Column: Tag & Main Title */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-blue-400 text-xs font-mono uppercase tracking-widest">
              <span>WHAT WE DO</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              End-to-end software development <br className="hidden sm:inline" />
              for <span className="text-[#0047FF]">modern businesses</span>
            </h2>
          </div>

          {/* Right Column: Paragraph Subtitle & Explore Button */}
          <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-between space-y-6">
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed lg:text-right max-w-md">
              From strategy and design to development and deployment — we provide complete technology solutions under one roof, built for scale and long-term success.
            </p>

            <button
              onClick={() => openConnectModal()}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-blue-500/40 hover:border-blue-400 text-white hover:text-blue-300 text-sm font-medium transition-all duration-300 bg-blue-950/20 hover:bg-blue-900/30 shadow-[0_0_15px_rgba(0,71,255,0.15)] group"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-blue-400" />
            </button>
          </div>
        </div>

        {/* 6 Services Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <div
                key={service.id}
                onClick={() => openConnectModal(service.title)}
                className="group relative rounded-2xl p-6 bg-[#070d1e]/80 border border-blue-900/30 hover:border-blue-500/60 transition-all duration-300 backdrop-blur-xl flex flex-col justify-between min-h-[260px] cursor-pointer hover:shadow-[0_10px_30px_rgba(0,71,255,0.2)] hover:-translate-y-1"
              >
                {/* Subtle Hover Inner Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div>
                  {/* Icon */}
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center text-[#0047FF] group-hover:text-blue-400 transition-colors mb-6">
                    <IconComponent className="w-8 h-8 stroke-[1.75]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Learn More Link */}
                <div className="mt-6 pt-2 flex items-center gap-1.5 text-xs font-semibold text-white/90 group-hover:text-blue-400 transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
