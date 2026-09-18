import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { ValueProposition } from "@/components/value-prop"
import { CascadingStats } from "@/components/cascading-stats"
import { ServicesSection } from "@/components/services-section"
import { AgentShowcase } from "@/components/agent-showcase"
import { AutomationSection } from "@/components/automation-section"
import { WhyUsSection } from "@/components/why-us"
import { ProcessSection } from "@/components/process-section"
import { TechStack } from "@/components/tech-stack"
import { WorkSection } from "@/components/work-section"
import { ContactSection } from "@/components/contact-section"
import { AppverseFooter } from "@/components/appverse-footer"
import Script from "next/script"

export const dynamic = "force-static"

export default function Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "WrapVector",
    url: "https://wrapvector.com",
    sameAs: [
      "https://www.instagram.com/wrapvector/",
      "https://www.linkedin.com/company/wrapvector/",
    ],
    description:
      "We build AI-powered products, intelligent agents, and automation systems that turn complex business processes into seamless digital experiences.",
    knowsAbout: [
      "Artificial Intelligence",
      "Autonomous AI Agents",
      "Business Process Automation",
      "Full-Stack Web Development",
      "API Integrations",
      "Product Engineering",
    ],
    offers: {
      "@type": "AggregateOffer",
      name: "AI & Automation Engineering Services",
      priceCurrency: "USD",
    },
  }

  return (
    <>
      <main className="min-h-[100dvh] text-white selection:bg-[#0047FF] selection:text-white">
        <SiteHeader />
        <Hero />
        <ValueProposition />
        <CascadingStats />
        <ServicesSection />
        <AgentShowcase />
        <AutomationSection />
        <WhyUsSection />
        <ProcessSection />
        <TechStack />
        <WorkSection />
        <ContactSection />
        <AppverseFooter />
      </main>

      <Script
        id="org-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </>
  )
}

