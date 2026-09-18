"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ArrowUpRight, Cpu, Bot, Workflow, Layers, Terminal, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#services", label: "What We Build" },
    { href: "#agents", label: "AI Agents" },
    { href: "#automation", label: "Automation" },
    { href: "#why-us", label: "Systems vs Features" },
    { href: "#process", label: "Process" },
    { href: "#technology", label: "Tech Stack" },
    { href: "#work", label: "Work" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 pt-3 sm:pt-4">
      <div className="container mx-auto max-w-7xl">
        <div
          className={`flex h-16 items-center justify-between px-5 sm:px-7 rounded-full transition-all duration-300 ${
            scrolled
              ? "liquid-glass-enhanced bg-black/80 shadow-[0_8px_32px_rgba(0,0,0,0.6)] border-white/15"
              : "liquid-glass bg-black/50 border-white/10"
          }`}
        >
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent border border-cyan-500/30 group-hover:border-cyan-400/60 transition-all duration-300 p-1.5">
              <Image
                src="/images/agency-logo.png"
                alt="Agency Logo"
                width={32}
                height={32}
                className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(6,182,212,0.6)] group-hover:scale-110 transition-transform duration-300"
                priority
              />
              <div className="absolute inset-0 rounded-xl bg-cyan-400/10 blur-sm group-hover:bg-cyan-400/20 transition-all" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-white text-base sm:text-lg flex items-center gap-1.5">
                NEXIS<span className="text-cyan-400">.AI</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 text-xs xl:text-sm font-medium text-white/80">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-cyan-300 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-cyan-400 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Status + CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] text-zinc-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>Available for Q2/Q3 Build Sprints</span>
            </div>

            <Button
              asChild
              className="relative overflow-hidden group bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-full border border-cyan-400/30 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_28px_rgba(6,182,212,0.5)] hover:scale-[1.02] transition-all"
            >
              <a href="#contact" className="flex items-center gap-1.5">
                <span>Build With Us</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Mobile Nav Drawer */}
          <div className="lg:hidden flex items-center gap-2">
            <Button
              asChild
              size="sm"
              className="sm:hidden bg-cyan-500 text-black font-semibold text-xs px-3.5 py-1.5 rounded-full"
            >
              <a href="#contact">Build →</a>
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-white/10 bg-black/60 text-white hover:bg-white/10 rounded-xl h-9 w-9"
                >
                  <Menu className="h-4 w-4" />
                  <span className="sr-only">Open navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-zinc-950/95 border-l border-white/10 p-6 flex flex-col justify-between w-72 backdrop-blur-2xl">
                <div>
                  <div className="flex items-center gap-3 pb-6 border-b border-white/10 mb-6">
                    <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center p-1.5">
                      <Image
                        src="/images/agency-logo.png"
                        alt="Agency Logo"
                        width={32}
                        height={32}
                        className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]"
                      />
                    </div>
                    <span className="font-bold text-white text-lg">NEXIS<span className="text-cyan-400">.AI</span></span>
                  </div>

                  <nav className="flex flex-col gap-2">
                    {navLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="flex items-center justify-between p-3 rounded-xl text-zinc-200 hover:text-cyan-400 hover:bg-white/5 transition-all text-sm font-medium"
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
                      </a>
                    ))}
                    <a
                      href="#contact"
                      className="flex items-center justify-between p-3 rounded-xl text-zinc-200 hover:text-cyan-400 hover:bg-white/5 transition-all text-sm font-medium"
                    >
                      <span>Contact</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
                    </a>
                  </nav>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <Button asChild className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 rounded-xl shadow-lg shadow-cyan-500/20">
                    <a href="#contact">Build With Us →</a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
