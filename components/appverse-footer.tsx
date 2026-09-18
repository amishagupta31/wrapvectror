"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Linkedin, Instagram, Github, Twitter } from "lucide-react"

export function AppverseFooter() {
  const socials = [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/wrapvector/", icon: Linkedin },
    { label: "Instagram", href: "https://www.instagram.com/wrapvector/", icon: Instagram },
    { label: "GitHub", href: "https://github.com", icon: Github },
    { label: "X (Twitter)", href: "https://x.com", icon: Twitter },
  ]

  return (
    <footer className="relative border-t border-white/10 bg-black py-10 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-white/10">
          
          {/* Left: Brand Logo & Tagline */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-10 rounded-xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center p-1 shadow-[0_0_12px_rgba(0,71,255,0.3)]">
                <Image
                  src="/images/agency-logo.png"
                  alt="WrapVector Logo"
                  width={44}
                  height={28}
                  className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(0,71,255,0.8)]"
                />
              </div>
              <span className="font-extrabold text-white text-xl tracking-tight">
                WRAP<span className="text-[#0047FF]">VECTOR</span>
              </span>
            </Link>

            <div className="sm:border-l sm:border-white/10 sm:pl-4 sm:ml-1 flex flex-col justify-center">
              <p className="text-xs text-zinc-400">
                Building intelligent AI systems & scalable digital products.
              </p>
            </div>
          </div>

          {/* Right: Social Links */}
          <div className="flex items-center flex-wrap justify-center gap-2.5 sm:gap-3">
            {socials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-blue-500/10 border border-white/10 hover:border-blue-500/40 text-xs text-zinc-300 hover:text-white transition-all group"
              >
                <item.icon className="w-3.5 h-3.5 text-blue-400 group-hover:scale-110 transition-transform" />
                <span>{item.label}</span>
                <ArrowUpRight className="w-3 h-3 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            ))}
          </div>

        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500 font-mono">
          <div>
            © {new Date().getFullYear()} WrapVector Systems Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-5 text-xs text-zinc-400">
            <span className="hover:text-zinc-200 transition-colors cursor-pointer">Privacy</span>
            <span className="hover:text-zinc-200 transition-colors cursor-pointer">Security</span>
            <span className="hover:text-zinc-200 transition-colors cursor-pointer">Terms</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
