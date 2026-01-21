import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Database, Lock, Zap, CheckCircle, Code, Network } from "lucide-react";

export default function Integration() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 -skew-y-3 transform origin-top-left scale-110"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-xs font-mono mb-6">
                <span>ENGINEERING</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
                Data <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Integration
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
                Securely connect Enclava to your existing knowledge bases, data warehouses, and internal APIs.
                Unlock RAG pipelines without moving data to the public cloud.
              </p>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-24 bg-background relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-500/5 to-transparent pointer-events-none"></div>

          <div className="container mx-auto px-6 relative">
            <div className="max-w-2xl mb-20">
              <div className="h-px w-16 bg-blue-400 mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                What's Included
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our integration service connects your existing data infrastructure to Enclava while maintaining
                zero-trust security and compliance.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Database,
                  title: "Legacy System Bridging",
                  desc: "Connect to legacy databases, file systems, and applications without exposing data outside your environment."
                },
                {
                  icon: Lock,
                  title: "Secure ETL Pipelines",
                  desc: "Build encrypted data pipelines that transform and load data into Enclava's knowledge bases securely."
                },
                {
                  icon: Network,
                  title: "Zero-Trust Connectors",
                  desc: "Implement mutual TLS, attestation, and encrypted channels for all data transfers into the enclave."
                }
              ].map((item, i) => (
                <div key={i} className="group relative">
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex items-start space-x-6 p-8 pl-10 hover:bg-white/[0.02] transition-colors">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <item.icon className="w-7 h-7 text-blue-400" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed max-w-2xl">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Types */}
        <section className="py-32 border-t border-white/5 bg-black/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none"></div>

          <div className="container mx-auto px-6 relative">
            <div className="max-w-2xl mb-20">
              <div className="h-px w-16 bg-blue-400 mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                Integration Scenarios We Support
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {[
                {
                  title: "Knowledge Base Sync",
                  description: "Sync documents from SharePoint, Confluence, Google Drive, or internal file servers into Enclava knowledge bases.",
                  features: ["Real-time sync", "Incremental updates", "Metadata preservation"]
                },
                {
                  title: "Database Connectors",
                  description: "Connect to SQL, NoSQL, and data warehouses (PostgreSQL, MySQL, MongoDB, Snowflake) for RAG queries.",
                  features: ["Read-only access", "Query optimization", "Connection pooling"]
                },
                {
                  title: "API Integrations",
                  description: "Integrate with internal REST APIs, GraphQL endpoints, and microservices for real-time data access.",
                  features: ["OAuth/JWT support", "Rate limiting", "Retry logic"]
                },
                {
                  title: "Document Processing Pipelines",
                  description: "Build pipelines that ingest documents from various sources, process them with Extract, and load into knowledge bases.",
                  features: ["Multi-format support", "Extract integration", "Validation workflows"]
                },
                {
                  title: "CRM & Ticketing Systems",
                  description: "Connect to Salesforce, Zendesk, Jira, and other business tools to enrich agent knowledge.",
                  features: ["Bidirectional sync", "Field mapping", "Webhook support"]
                },
                {
                  title: "Custom Integrations",
                  description: "Build bespoke connectors for proprietary systems, legacy applications, or unique data sources.",
                  features: ["Custom protocols", "Legacy format support", "On-premise adapters"]
                }
              ].map((integration, i) => (
                <div key={i} className="group relative">
                  <div className="absolute -left-4 top-0 text-8xl font-display font-bold text-white/5 select-none">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="relative p-8 pl-12 hover:bg-white/[0.02] transition-colors border-l-2 border-white/10 hover:border-blue-400/50">
                    <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {integration.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{integration.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {integration.features.map((feature, j) => (
                        <div key={j} className="inline-flex items-center px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 text-sm text-blue-300">
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 bg-background relative">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-12">
              {[
                {
                  step: "01",
                  title: "Data Source Assessment",
                  description: "We audit your existing data sources, understand access patterns, and identify security requirements."
                },
                {
                  step: "02",
                  title: "Architecture Design",
                  description: "Design secure data flow architecture with encryption, attestation, and zero-trust principles."
                },
                {
                  step: "03",
                  title: "Connector Development",
                  description: "Build and test custom connectors with proper error handling, retry logic, and monitoring."
                },
                {
                  step: "04",
                  title: "Security Validation",
                  description: "Perform security audits, penetration testing, and compliance verification of all integrations."
                },
                {
                  step: "05",
                  title: "Deployment & Monitoring",
                  description: "Deploy integrations with monitoring, alerting, and automated health checks."
                }
              ].map((phase, i) => (
                <div key={i} className="group relative">
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/30 to-blue-500/5 border border-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform mb-4">
                      <span className="font-mono text-xl font-bold text-blue-400">{phase.step}</span>
                    </div>
                    {i < 4 && (
                      <div className="hidden lg:block absolute top-8 left-16 w-full h-px bg-gradient-to-r from-blue-400/30 to-transparent"></div>
                    )}
                  </div>
                  <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {phase.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 border-t border-white/5 bg-black/20 relative">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="lg:sticky lg:top-32">
                <div className="h-px w-16 bg-blue-400 mb-6"></div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                  Why Choose Our Integration Service
                </h2>
              </div>

              <div className="space-y-8">
                {[
                  {
                    icon: Code,
                    title: "Deep Technical Expertise",
                    desc: "Our team has experience integrating with hundreds of different data sources and APIs."
                  },
                  {
                    icon: Lock,
                    title: "Security First",
                    desc: "Every integration is designed with zero-trust principles, encryption, and attestation."
                  },
                  {
                    icon: Zap,
                    title: "Performance Optimized",
                    desc: "We optimize data transfer, caching, and query performance for minimal latency."
                  },
                  {
                    icon: Network,
                    title: "Future-Proof",
                    desc: "Integrations are built to be maintainable, extensible, and compatible with upgrades."
                  }
                ].map((benefit, i) => (
                  <div key={i} className="group relative pl-8 border-l-2 border-white/10 hover:border-blue-400/50 transition-colors">
                    <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-background border-2 border-white/10 group-hover:border-blue-400 group-hover:bg-blue-500/20 transition-all flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <benefit.icon className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" strokeWidth={1.5} />
                      <div>
                        <h3 className="text-xl text-white font-display font-bold mb-2 group-hover:text-blue-400 transition-colors">
                          {benefit.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">{benefit.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 text-center border-t border-white/5">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">
              Ready to integrate your data?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Schedule a consultation to discuss your integration requirements and data sources.
            </p>
            <div className="flex justify-center gap-4">
              <a href="https://cal.com/aljaz/enclava" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="h-14 px-8 rounded-none text-base bg-blue-500 text-white hover:bg-blue-600 transition-all font-mono">
                  Schedule a Call <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
