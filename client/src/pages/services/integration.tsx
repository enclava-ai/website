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
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                What's Included
              </h2>
              <p className="text-muted-foreground text-lg">
                Our integration service connects your existing data infrastructure to Enclava while maintaining
                zero-trust security and compliance.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
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
                <div key={i} className="group p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300 bg-card/50">
                  <item.icon className="w-10 h-10 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-display font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Types */}
        <section className="py-24 border-t border-white/5 bg-black/20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Integration Scenarios We Support
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
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
                  description: "Build pipelines that ingest documents from various sources, process them with OCR, and load into knowledge bases.",
                  features: ["Multi-format support", "OCR integration", "Validation workflows"]
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
                <div key={i} className="p-8 border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent hover:border-blue-500/20 transition-colors">
                  <h3 className="text-xl font-display font-bold text-white mb-3">{integration.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{integration.description}</p>
                  <ul className="space-y-2">
                    {integration.features.map((feature, j) => (
                      <li key={j} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Our Integration Process
              </h2>
            </div>

            <div className="space-y-8">
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
                <div key={i} className="flex items-start space-x-6 p-6 border border-white/5 bg-gradient-to-r from-white/[0.02] to-transparent">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-mono text-sm font-bold">
                    {phase.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-white mb-2">{phase.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 border-t border-white/5 bg-black/20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Why Choose Our Integration Service
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
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
                <div key={i} className="flex items-start space-x-4 p-6 border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-display font-bold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
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
