import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, ArrowRight, Zap, Shield, Globe, Cpu, Users, Rocket } from "lucide-react"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "About WrapVector | Who We Are",
  description:
    "Meet the team behind WrapVector. We build AI-powered products, intelligent agents, and automation systems for high-growth businesses.",
}

const team = [
  {
    name: "Arjun Mehta",
    role: "Founder & CEO",
    bio: "Full-stack architect with 6+ years shipping production-grade AI systems and enterprise platforms.",
    image: "/images/team-founder.jpg",
    linkedin: "#",
  },
  {
    name: "Rohan Sharma",
    role: "CTO & AI Lead",
    bio: "LangGraph and multi-agent specialist. Designed autonomous orchestration pipelines processing 10K+ daily ops.",
    image: "/images/team-cto.jpg",
    linkedin: "#",
  },
  {
    name: "Priya Nair",
    role: "Lead Designer",
    bio: "UI/UX designer crafting premium digital experiences. Obsessed with editorial aesthetics and interaction design.",
    image: "/images/team-designer.jpg",
    linkedin: "#",
  },
  {
    name: "Vikram Desai",
    role: "Senior Engineer",
    bio: "Backend specialist in distributed systems, real-time APIs, and high-throughput cloud infrastructure.",
    image: "/images/team-engineer.jpg",
    linkedin: "#",
  },
]

const values = [
  {
    icon: Zap,
    title: "Engineering Excellence",
    description: "Every line of code is written with precision. We build systems meant to scale, not just to ship.",
  },
  {
    icon: Shield,
    title: "Enterprise Trust",
    description: "Security-first architectures with strict access governance and encrypted data processing pipelines.",
  },
  {
    icon: Globe,
    title: "Human-Centered Design",
    description: "Technology should feel intuitive. We design interfaces that enterprise users actually enjoy using.",
  },
  {
    icon: Cpu,
    title: "AI-Native Thinking",
    description: "We don't bolt AI onto products — we architect systems where intelligence is the foundation.",
  },
  {
    icon: Users,
    title: "Partnership, Not Vendors",
    description: "We embed with your team, understand your domain, and co-own the outcome from day one.",
  },
  {
    icon: Rocket,
    title: "Speed to Production",
    description: "From concept to deployed, instrumented production system in weeks — not months.",
  },
]

export default function AboutPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "WrapVector",
    url: "https://wrapvector.com",
    logo: "https://wrapvector.com/images/agency-logo.png",
    description:
      "WrapVector builds AI-powered products, intelligent agents, and automation systems that turn complex business processes into seamless digital experiences.",
    sameAs: [
      "https://www.instagram.com/wrapvector/",
      "https://www.linkedin.com/company/wrapvector/",
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <main className="min-h-screen bg-[#050505] text-white selection:bg-[#145CFF] selection:text-white">
        {/* ─── Navigation Bar ─── */}
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
          <div className="container mx-auto max-w-7xl px-6 lg:px-12 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/images/agency-logo.png"
                alt="WrapVector Logo"
                width={32}
                height={32}
                className="h-7 w-auto"
              />
              <span className="font-extrabold text-lg tracking-tight text-white">
                WRAP<span className="text-[#145CFF]">VECTOR</span>
              </span>
            </Link>
            <div className="flex items-center gap-6">
              <Link
                href="/"
                className="text-sm text-zinc-400 hover:text-white transition-colors hidden sm:block"
              >
                Home
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#145CFF] hover:bg-[#2563FF] text-white font-semibold text-xs transition-all shadow-[0_0_20px_rgba(20,92,255,0.4)] hover:shadow-[0_0_30px_rgba(20,92,255,0.6)]"
              >
                <span>Build With Us</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </nav>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* HERO: WHO WE ARE                                               */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <section className="relative pt-40 pb-24 sm:pt-48 sm:pb-32 overflow-hidden">
          {/* Ambient glow */}
          <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[800px] h-[400px] bg-[#145CFF]/8 blur-[180px] pointer-events-none rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-[#145CFF]/6 blur-[140px] pointer-events-none rounded-full" />

          <div className="container mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-[#145CFF] shadow-[0_0_12px_#145CFF] animate-pulse" />
              <span className="text-xs font-mono tracking-[0.25em] text-[#145CFF] uppercase font-bold">
                ABOUT WRAPVECTOR
              </span>
              <span className="w-12 h-[1px] bg-[#145CFF]/40" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
              <div className="lg:col-span-8">
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight leading-[1.02]">
                  We build intelligent
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-zinc-400">
                    systems that work
                  </span>
                  <span className="text-[#145CFF]">.</span>
                </h1>
              </div>

              <div className="lg:col-span-4">
                <p className="text-base text-zinc-300 leading-relaxed">
                  We&apos;re a team of engineers, designers, and AI specialists building the digital backbone of high-growth companies — from autonomous agents to enterprise platforms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* WHY WE STARTED                                                 */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <section className="py-24 sm:py-32 border-t border-white/10">
          <div className="container mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              {/* Left: Story */}
              <div className="space-y-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono tracking-[0.25em] text-[#145CFF] uppercase font-bold">
                    OUR ORIGIN
                  </span>
                  <span className="w-12 h-[1px] bg-[#145CFF]/40" />
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
                  Why we started
                  <span className="text-[#145CFF]">.</span>
                </h2>

                <div className="space-y-6 text-zinc-300 text-base leading-relaxed">
                  <p>
                    We started WrapVector because we saw a gap in the market — businesses needed intelligent, production-grade software, but most agencies were shipping fragile MVPs that collapsed under real-world load.
                  </p>
                  <p>
                    Our founders came from enterprise engineering backgrounds at companies where &ldquo;good enough&rdquo; wasn&apos;t acceptable. We believed that every startup and mid-market business deserved the same caliber of engineering that powers the world&apos;s best technology companies.
                  </p>
                  <p>
                    Today, WrapVector is the engineering partner for companies that refuse to compromise. We build AI agents that actually work in production, automation pipelines that handle millions of operations, and platforms that enterprise clients trust with their most critical workflows.
                  </p>
                </div>
              </div>

              {/* Right: Key Numbers */}
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { number: "200+", label: "Businesses Transformed", sub: "End-to-end systems deployed" },
                    { number: "50+", label: "AI Pipelines Live", sub: "Autonomous agents in production" },
                    { number: "6+", label: "Years Engineering", sub: "High-throughput architectures" },
                    { number: "99.9%", label: "Operational Uptime", sub: "Continuous execution reliability" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="p-6 rounded-2xl bg-[#091020] border border-white/10 hover:border-[#145CFF]/30 transition-all duration-300 group"
                    >
                      <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono block group-hover:text-[#145CFF] transition-colors">
                        {stat.number}
                      </span>
                      <span className="text-sm font-bold text-white mt-2 block">{stat.label}</span>
                      <span className="text-xs text-zinc-500 mt-1 block">{stat.sub}</span>
                    </div>
                  ))}
                </div>

                {/* Mission Statement Card */}
                <div className="p-8 rounded-2xl bg-[#0c1424] border border-[#145CFF]/20 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#145CFF]/10 blur-[60px] pointer-events-none rounded-full" />
                  <span className="text-[10px] font-mono tracking-[0.25em] text-[#145CFF] uppercase font-bold block mb-3">
                    OUR MISSION
                  </span>
                  <p className="text-lg font-semibold text-white leading-relaxed relative z-10">
                    &ldquo;To democratize enterprise-grade engineering — making intelligent, scalable, production-ready technology accessible to every ambitious business.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* WHAT WE BELIEVE (VALUES)                                       */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <section className="py-24 sm:py-32 border-t border-white/10 bg-gradient-to-b from-[#050505] to-[#080d1a]">
          <div className="container mx-auto max-w-7xl px-6 lg:px-12">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="w-8 h-[1px] bg-[#145CFF]/40" />
                <span className="text-xs font-mono tracking-[0.25em] text-[#145CFF] uppercase font-bold">
                  OUR VALUES
                </span>
                <span className="w-8 h-[1px] bg-[#145CFF]/40" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                What we believe<span className="text-[#145CFF]">.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {values.map((value) => {
                const Icon = value.icon
                return (
                  <div
                    key={value.title}
                    className="p-7 rounded-2xl bg-[#091020] border border-white/10 hover:border-[#145CFF]/30 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#145CFF]/10 border border-[#145CFF]/20 flex items-center justify-center mb-5 group-hover:bg-[#145CFF]/20 transition-colors">
                      <Icon className="w-5 h-5 text-[#145CFF]" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">{value.title}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* OUR TEAM                                                       */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <section className="py-24 sm:py-32 border-t border-white/10">
          <div className="container mx-auto max-w-7xl px-6 lg:px-12">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="w-8 h-[1px] bg-[#145CFF]/40" />
                <span className="text-xs font-mono tracking-[0.25em] text-[#145CFF] uppercase font-bold">
                  THE TEAM
                </span>
                <span className="w-8 h-[1px] bg-[#145CFF]/40" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                The people behind<br className="sm:hidden" /> the product<span className="text-[#145CFF]">.</span>
              </h2>
              <p className="text-base text-zinc-400 mt-4 max-w-2xl mx-auto">
                A small, senior team of engineers and designers who have shipped production systems at scale. No juniors. No fluff. Just results.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="group rounded-2xl bg-[#091020] border border-white/10 overflow-hidden hover:border-[#145CFF]/30 transition-all duration-300"
                >
                  {/* Photo */}
                  <div className="relative w-full aspect-square overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#091020] via-transparent to-transparent" />
                  </div>

                  {/* Info */}
                  <div className="p-5 -mt-8 relative z-10">
                    <h3 className="text-lg font-bold text-white">{member.name}</h3>
                    <span className="text-xs font-mono text-[#145CFF] font-bold tracking-wider uppercase block mt-1">
                      {member.role}
                    </span>
                    <p className="text-xs text-zinc-400 leading-relaxed mt-3">
                      {member.bio}
                    </p>
                    <a
                      href={member.linkedin}
                      className="inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-[#145CFF] transition-colors mt-3"
                    >
                      <span>LinkedIn</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* CTA BANNER                                                     */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <section className="py-24 sm:py-32 border-t border-white/10 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#145CFF]/8 blur-[180px] pointer-events-none rounded-full" />

          <div className="container mx-auto max-w-4xl px-6 lg:px-12 text-center relative z-10">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Ready to build something
              <br />
              <span className="text-[#145CFF]">extraordinary</span>?
            </h2>
            <p className="text-base text-zinc-400 mt-6 max-w-xl mx-auto">
              Let&apos;s discuss how WrapVector can engineer intelligent systems for your business. No sales pitch — just a real conversation about your goals.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#145CFF] hover:bg-[#2563FF] text-white font-semibold text-sm transition-all shadow-[0_0_30px_rgba(20,92,255,0.5)] hover:shadow-[0_0_45px_rgba(20,92,255,0.7)] hover:scale-[1.02]"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/#work"
                className="inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white transition-colors"
              >
                <span>View Our Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ─── Footer ─── */}
        <footer className="border-t border-white/10 py-10">
          <div className="container mx-auto max-w-7xl px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/agency-logo.png"
                alt="WrapVector"
                width={24}
                height={24}
                className="h-5 w-auto opacity-60"
              />
              <span className="text-xs text-zinc-500 font-mono">
                © {new Date().getFullYear()} WrapVector. All rights reserved.
              </span>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/" className="text-xs text-zinc-500 hover:text-white transition-colors">Home</Link>
              <Link href="/#work" className="text-xs text-zinc-500 hover:text-white transition-colors">Work</Link>
              <Link href="/#contact" className="text-xs text-zinc-500 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
