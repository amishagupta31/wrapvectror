"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ArrowUpRight } from "lucide-react"
import { useState, useEffect } from "react"
import { openConnectModal } from "@/components/connect-modal"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [sheetOpen, setSheetOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0
      setScrolled(scrollPos > 20)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "/About", label: "About Us" },
    { href: "#work", label: "Our Work" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ease-in-out ${
        scrolled
          ? "pt-3 sm:pt-4 px-3 sm:px-6 pointer-events-none"
          : "pt-0 px-0 pointer-events-auto"
      }`}
    >
      <div
        className={`w-full transition-all duration-300 ease-in-out pointer-events-auto ${
          scrolled ? "container mx-auto max-w-7xl" : "max-w-full"
        }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-300 ease-in-out ${
            scrolled
              ? "h-14 sm:h-16 px-4 sm:px-7 rounded-full liquid-glass-enhanced bg-black/80 shadow-[0_8px_32px_rgba(0,0,0,0.6)] border border-white/15"
              : "h-16 sm:h-20 px-4 sm:px-8 lg:px-12 rounded-none border-b border-white/10 bg-black/60 backdrop-blur-xl"
          }`}
        >
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3.5 group flex-shrink-0">
            <div className="relative flex items-center justify-center w-11 h-10 sm:w-12 sm:h-11 rounded-xl bg-blue-500/15 border border-blue-500/40 group-hover:border-blue-400/80 transition-all duration-300 p-1 flex-shrink-0 shadow-[0_0_15px_rgba(0,71,255,0.25)]">
              <Image
                src="/images/agency-logo.png"
                alt="WrapVector Logo"
                width={48}
                height={32}
                className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(0,71,255,0.8)] group-hover:scale-105 transition-transform duration-300"
                priority
              />
              <div className="absolute inset-0 rounded-xl bg-blue-500/10 blur-sm group-hover:bg-blue-500/25 transition-all" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight text-white text-lg sm:text-xl flex items-center gap-1 whitespace-nowrap">
                WRAP<span className="text-[#0047FF]">VECTOR</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-5 2xl:gap-7 text-xs xl:text-sm font-medium text-white/80 whitespace-nowrap">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-blue-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#0047FF] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="hidden sm:flex items-center gap-3 xl:gap-4 flex-shrink-0">
            <Button
              onClick={() => openConnectModal()}
              className="relative overflow-hidden group bg-[#0047FF] hover:bg-[#0038e0] text-white font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-blue-400/40 shadow-[0_0_20px_rgba(0,71,255,0.4)] hover:shadow-[0_0_28px_rgba(0,71,255,0.6)] hover:scale-[1.02] transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer"
            >
              <span>Build With Us</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
          </div>

          {/* Mobile Nav Drawer */}
          <div className="lg:hidden flex items-center gap-2 flex-shrink-0">
            <Button
              onClick={() => openConnectModal()}
              size="sm"
              className="sm:hidden bg-[#0047FF] text-white font-semibold text-xs px-3.5 py-1.5 rounded-full hover:bg-[#0038e0]"
            >
              Build →
            </Button>

            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
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
              <SheetContent side="right" className="bg-zinc-950/95 border-l border-white/10 p-6 flex flex-col justify-between w-72 sm:w-80 backdrop-blur-2xl">
                <div>
                  <div className="flex items-center gap-3.5 pb-6 border-b border-white/10 mb-6">
                    <div className="w-12 h-10 rounded-xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center p-1 shadow-[0_0_12px_rgba(0,71,255,0.3)]">
                      <Image
                        src="/images/agency-logo.png"
                        alt="WrapVector Logo"
                        width={44}
                        height={28}
                        className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(0,71,255,0.8)]"
                      />
                    </div>
                    <span className="font-extrabold text-white text-xl">WRAP<span className="text-[#0047FF]">VECTOR</span></span>
                  </div>

                  <nav className="flex flex-col gap-2">
                    {navLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setSheetOpen(false)}
                        className="flex items-center justify-between p-3 rounded-xl text-zinc-200 hover:text-blue-400 hover:bg-white/5 transition-all text-sm font-medium"
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
                      </a>
                    ))}
                  </nav>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <Button
                    onClick={() => {
                      setSheetOpen(false)
                      openConnectModal()
                    }}
                    className="w-full bg-[#0047FF] hover:bg-[#0038e0] text-white font-semibold py-3 rounded-xl shadow-lg shadow-blue-600/30"
                  >
                    Build With Us →
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
