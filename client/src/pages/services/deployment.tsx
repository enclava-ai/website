import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Server, Shield, Clock, CheckCircle, Users, Wrench } from "lucide-react";

export default function Deployment() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 -skew-y-3 transform origin-top-left scale-110"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-mono mb-6">
                <span>INFRASTRUCTURE</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
                White-Glove <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Deployment
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
                End-to-end management of your confidential computing environment. We handle architecture,
                security hardening, and compliance (SOC 2, HIPAA) so you don't have to.
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
                Our deployment service takes you from initial architecture design to production-ready infrastructure,
                with ongoing support and optimization.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Server,
                  title: "Custom Architecture Design",
                  desc: "We design a tailored infrastructure that meets your security, compliance, and performance requirements."
                },
                {
                  icon: Shield,
                  title: "Air-Gapped Installation",
                  desc: "Support for completely isolated environments with no internet connectivity for maximum security."
                },
                {
                  icon: Clock,
                  title: "24/7 Enterprise Support",
                  desc: "Round-the-clock monitoring, incident response, and technical support from our engineering team."
                }
              ].map((item, i) => (
                <div key={i} className="group p-8 border border-white/10 hover:border-primary/30 transition-all duration-300 bg-card/50">
                  <item.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-display font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deployment Process */}
        <section className="py-24 border-t border-white/5 bg-black/20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Our Deployment Process
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {[
                {
                  step: "01",
                  title: "Discovery & Planning",
                  description: "We analyze your security requirements, compliance needs, and infrastructure constraints to design the optimal architecture.",
                  deliverables: ["Architecture diagram", "Security assessment", "Compliance roadmap"]
                },
                {
                  step: "02",
                  title: "Infrastructure Setup",
                  description: "Our team provisions and configures your confidential computing environment, including TEE setup, networking, and storage.",
                  deliverables: ["TEE configuration", "Network setup", "Storage provisioning"]
                },
                {
                  step: "03",
                  title: "Security Hardening",
                  description: "We implement security best practices, including encryption, access controls, attestation, and audit logging.",
                  deliverables: ["Security policies", "Access controls", "Audit system"]
                },
                {
                  step: "04",
                  title: "Testing & Validation",
                  description: "Comprehensive testing to ensure your environment meets all security, performance, and compliance requirements.",
                  deliverables: ["Security audit report", "Performance benchmarks", "Compliance documentation"]
                },
                {
                  step: "05",
                  title: "Production Launch",
                  description: "We coordinate the production rollout, including data migration, cutover planning, and go-live support.",
                  deliverables: ["Migration plan", "Runbooks", "Go-live support"]
                },
                {
                  step: "06",
                  title: "Ongoing Support",
                  description: "24/7 monitoring, incident response, regular updates, and continuous optimization of your environment.",
                  deliverables: ["SLA guarantee", "Dedicated support team", "Regular health checks"]
                }
              ].map((phase, i) => (
                <div key={i} className="relative pl-16">
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center font-mono text-sm font-bold">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-3">{phase.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{phase.description}</p>
                  <ul className="space-y-2">
                    {phase.deliverables.map((item, j) => (
                      <li key={j} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Why Choose Our Deployment Service
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Users,
                  title: "Expert Team",
                  desc: "Our engineers have deep expertise in confidential computing, TEE technologies, and secure infrastructure."
                },
                {
                  icon: Wrench,
                  title: "Proven Process",
                  desc: "We've deployed Enclava across diverse environments—from air-gapped data centers to hybrid cloud setups."
                },
                {
                  icon: Shield,
                  title: "Compliance First",
                  desc: "We ensure your deployment meets SOC 2, HIPAA, GDPR, and other regulatory requirements from day one."
                },
                {
                  icon: Clock,
                  title: "Fast Time to Value",
                  desc: "Our turnkey approach means you can be running confidential AI workloads in weeks, not months."
                }
              ].map((benefit, i) => (
                <div key={i} className="flex items-start space-x-4 p-6 border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-primary" />
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
        <section className="py-24 text-center border-t border-white/5 bg-black/20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">
              Ready to deploy confidential AI?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Schedule a consultation to discuss your deployment requirements and get a custom quote.
            </p>
            <div className="flex justify-center gap-4">
              <a href="https://cal.com/aljaz/enclava" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="h-14 px-8 rounded-none text-base bg-primary text-background hover:bg-primary/90 transition-all font-mono">
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
