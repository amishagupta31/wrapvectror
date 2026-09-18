"use client"

import Link from "next/link"
import Image from "next/image"
import { Cpu, ArrowUpRight, Github, Twitter, Linkedin, Instagram, Sparkles } from "lucide-react"

export function AppverseFooter() {
  const links = {
    company: [
      { label: "About", href: "#why-us" },
      { label: "Services", href: "#services" },
      { label: "Case Studies", href: "#work" },
      { label: "Careers", href: "#contact" },
      { label: "Contact", href: "#contact" },
    ],
    solutions: [
      { label: "AI Agents", href: "#agents" },
      { label: "AI Automation", href: "#automation" },
      { label: "Software Development", href: "#services" },
      { label: "AI Integration", href: "#services" },
      { label: "Product Engineering", href: "#services" },
    ],
    resources: [
      { label: "Architecture Blog", href: "#technology" },
      { label: "Agent Insights", href: "#agents" },
      { label: "Automation Guides", href: "#automation" },
      { label: "Case Studies", href: "#work" },
    ],
    social: [
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "GitHub", href: "https://github.com" },
      { label: "X (Twitter)", href: "https://x.com" },
      { label: "Instagram", href: "https://instagram.com" },
    ],
  }

  return (
    <footer className="relative border-t border-white/10 bg-black pt-20 pb-12 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-16 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center p-1.5">
                <Image
                  src="/images/agency-logo.png"
                  alt="Agency Logo"
                  width={28}
                  height={28}
                  className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]"
                />
              </div>
              <span className="font-bold text-white text-lg tracking-tight">
                NEXIS<span className="text-cyan-400">.AI</span>
              </span>
            </Link>

            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              Building intelligent technology for businesses that refuse to stand still.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-cyan-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Systems Online • Edge Mesh 99.99% Uptime</span>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-300 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              {links.company.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-cyan-300 transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-300 mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              {links.solutions.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-cyan-300 transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-300 mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              {links.resources.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-cyan-300 transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-300 mb-4">
              Social
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              {links.social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 font-mono">
          <div>
            © {new Date().getFullYear()} NEXIS AI Systems Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-zinc-300 transition-colors cursor-pointer">Privacy Architecture</span>
            <span className="hover:text-zinc-300 transition-colors cursor-pointer">Security Protocol</span>
            <span className="hover:text-zinc-300 transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
