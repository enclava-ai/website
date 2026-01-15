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
        <section className="py-24 bg-background relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>

          <div className="container mx-auto px-6 relative">
            <div className="max-w-2xl mb-20">
              <div className="h-px w-16 bg-primary mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                What's Included
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our deployment service takes you from initial architecture design to production-ready infrastructure,
                with ongoing support and optimization.
              </p>
            </div>

            <div className="space-y-6">
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
                <div key={i} className="group relative">
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex items-start space-x-6 p-8 pl-10 hover:bg-white/[0.02] transition-colors">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <item.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-primary transition-colors">
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

        {/* Deployment Process */}
        <section className="py-32 border-t border-white/5 bg-black/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none"></div>

          <div className="container mx-auto px-6 relative">
            <div className="max-w-2xl mb-20">
              <div className="h-px w-16 bg-primary mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                Our Deployment Process
              </h2>
            </div>

            <div className="space-y-16 max-w-5xl">
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
                <div key={i} className="group relative flex items-start space-x-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/30 to-primary/5 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="font-mono text-2xl font-bold text-primary">{phase.step}</span>
                    </div>
                    {i < 5 && (
                      <div className="w-px h-16 bg-gradient-to-b from-primary/30 to-transparent mx-auto mt-4"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-primary transition-colors">
                      {phase.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{phase.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {phase.deliverables.map((item, j) => (
                        <div key={j} className="inline-flex items-center px-4 py-2 bg-white/5 border border-white/10 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-background relative">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="lg:sticky lg:top-32">
                <div className="h-px w-16 bg-primary mb-6"></div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                  Why Choose Our Deployment Service
                </h2>
              </div>

              <div className="space-y-8">
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
                  <div key={i} className="group relative pl-8 border-l-2 border-white/10 hover:border-primary/50 transition-colors">
                    <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-background border-2 border-white/10 group-hover:border-primary group-hover:bg-primary/20 transition-all flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <benefit.icon className="w-8 h-8 text-primary flex-shrink-0 mt-1" strokeWidth={1.5} />
                      <div>
                        <h3 className="text-xl text-white font-display font-bold mb-2 group-hover:text-primary transition-colors">
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
