// app/about/page.tsx
import React from "react";

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
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
      },
    ],
  };

  return (
    <>
      {/* SEO Schema for Google + LLMs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 px-6 md:px-12 lg:px-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          About WrapVector
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-80">
          Building intelligent technology, autonomous agents, and enterprise automation for high-growth businesses.
        </p>
      </section>

      {/* Feature Grid */}
      <section className="py-16 bg-neutral-900 text-white px-6 md:px-12 lg:px-20">
        <div className="grid gap-12 md:grid-cols-3">
          {[
            {
              title: "Autonomous AI Agents",
              desc: "Context-aware agents that execute multi-step business workflows with precision.",
            },
            {
              title: "End-to-End Automation",
              desc: "Connecting enterprise software, CRMs, APIs, and databases into cohesive autonomous pipelines.",
            },
            {
              title: "Full-Stack Product Engineering",
              desc: "High-performance web applications, robust backends, and low-latency infrastructure.",
            },
            {
              title: "Enterprise Security",
              desc: "SOC2-compliant architectures, strict access governance, and encrypted data processing.",
            },
            {
              title: "Rapid Deployment Sprints",
              desc: "From concept architecture to live production agents in structured build cycles.",
            },
            {
              title: "Scalable Cloud Architecture",
              desc: "Edge-distributed systems engineered for high throughput and 99.99% uptime.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-neutral-800 p-6 rounded-2xl shadow-lg hover:scale-105 transform transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="opacity-80">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-center text-white px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Automate & Scale?
        </h2>
        <p className="text-lg opacity-80 mb-8">
          Let WrapVector engineer intelligent systems for your business.
        </p>
        <a
          href="/#contact"
          className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/20"
        >
          Build With Us
        </a>
      </section>
    </>
  );
}
