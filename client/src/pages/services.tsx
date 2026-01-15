import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    id: "01",
    title: "White-Glove Deployment",
    subtitle: "Infrastructure",
    description: "End-to-end management of your confidential computing environment. We handle architecture, security hardening, and compliance (SOC 2, HIPAA) so you don't have to.",
    features: ["Custom Architecture Design", "Air-Gapped Installation", "24/7 Enterprise Support"],
    action: "View Deployment Plans",
    link: "/services/deployment"
  },
  {
    id: "02",
    title: "Data Integration",
    subtitle: "Engineering",
    description: "Securely connect Enclava to your existing knowledge bases, data warehouses, and internal APIs. Unlock RAG pipelines without moving data to the public cloud.",
    features: ["Legacy System Bridging", "Secure ETL Pipelines", "Zero-Trust Connectors"],
    action: "Discuss Integration",
    link: "/services/integration"
  },
  {
    id: "03",
    title: "Process Automation",
    subtitle: "Agents",
    description: "Automate complex business workflows using confidential agents. From document processing to decision support, build autonomous systems that respect privacy.",
    features: ["Custom Agent Development", "Workflow Orchestration", "Human-in-the-loop Systems"],
    action: "Explore Automation",
    link: "/services/automation"
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main className="pt-20">
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="mb-20">
              <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">Professional Services</h1>
              <p className="text-muted-foreground max-w-2xl text-xl leading-relaxed">
                Accelerate your adoption of confidential AI with our expert engineering team. We help you build, deploy, and scale securely.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
              {services.map((service) => (
                <Link key={service.id} href={service.link}>
                  <div className="bg-background p-10 hover:bg-white/[0.02] transition-colors group relative flex flex-col h-full cursor-pointer">
                    <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <ArrowUpRight className="w-6 h-6 text-primary" />
                    </div>

                    <span className="font-mono text-xs text-primary tracking-widest uppercase mb-6 block">
                      {service.subtitle}
                    </span>

                    <h3 className="text-2xl font-display font-medium text-white mb-4 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed mb-8 text-sm">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-10 flex-grow">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-xs text-gray-400">
                          <div className="w-1 h-1 bg-white/40 mr-3 rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto pt-8 border-t border-white/5">
                      <Button variant="link" className="p-0 h-auto text-white hover:text-primary rounded-none text-sm font-medium">
                        {service.action} <ArrowUpRight className="ml-2 w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
