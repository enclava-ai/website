import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Server, Shield, Code, CheckCircle, Terminal } from "lucide-react";
import { motion } from "framer-motion";

export default function SelfHosted() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 -skew-y-3 transform origin-top-left scale-110"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-mono mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span>AVAILABLE NOW • OPEN SOURCE</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
                Self-Hosted <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Enclava Platform
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
                Deploy private AI in your environment with full control. 
                Keep your data within your security perimeter while meeting the strictest compliance requirements.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="h-14 px-8 rounded-none text-base bg-primary text-background hover:bg-primary/90 transition-all font-mono">
                  View on GitHub <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 rounded-none text-base border-white/10 hover:bg-white/5 hover:text-white transition-all font-mono">
                  Read Documentation
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Server,
                  title: "Complete Control",
                  desc: "Deploy on your infrastructure with full administrative access. No third-party dependencies for your sensitive data."
                },
                {
                  icon: Shield,
                  title: "Maximum Security",
                  desc: "Keep your data within your security perimeter. Meet SOC 2, HIPAA, and GDPR requirements with on-premise deployment."
                },
                {
                  icon: Code,
                  title: "Full Customization",
                  desc: "Modify, extend, and integrate freely. Access to source code and unlimited customization options."
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

        {/* Technical Specs */}
        <section className="py-24 border-t border-white/5 bg-black/20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8">
                  Production Ready Architecture
                </h2>
                <p className="text-muted-foreground mb-8">
                  The self-hosted package comes with everything you need to run at scale.
                </p>
                <ul className="space-y-4">
                  {[
                    "Docker-deployed with PostgreSQL cluster",
                    "Load balancing & auto-scaling configuration",
                    "High availability setup included",
                    "Comprehensive monitoring & logging",
                    "Automated backup & recovery scripts"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 blur-3xl"></div>
                <div className="relative bg-[#0d1117] border border-white/10 rounded-lg overflow-hidden font-mono text-sm shadow-2xl">
                  <div className="flex items-center px-4 py-2 border-b border-white/10 bg-white/5">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                    </div>
                    <div className="ml-4 text-xs text-muted-foreground">docker-compose.yml</div>
                  </div>
                  <div className="p-6 text-gray-300 overflow-x-auto">
                    <pre>
{`services:
  enclava-core:
    image: enclava/core:latest
    deploy:
      resources:
        reservations:
          devices:
            - driver: nvidia
              count: 1
              capabilities: [gpu]
    environment:
      - TEE_MODE=sgx
      - ENCRYPTION_KEY=\${KEY}
    volumes:
      - ./secure-data:/data:ro
    networks:
      - secure-mesh

  database:
    image: postgres:15-alpine
    encrypted: true`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">
              Ready to deploy?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Get started with our open source edition today or contact us for enterprise support.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="h-14 px-8 rounded-none text-base bg-white text-black hover:bg-gray-200 transition-all font-mono">
                Deploy Now
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 rounded-none text-base border-white/20 hover:border-primary hover:text-primary transition-all font-mono">
                Contact Sales
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
