import { Button } from "@/components/ui/button";
import { ArrowUpRight, Cog, Layers, Database, Workflow } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    id: "01",
    title: "Deployment",
    subtitle: "Infrastructure",
    description: "We offer full white glove deployment services. We handle architecture, security hardening, and operations. You enjoy the benefits.",
    features: ["Custom Architecture Design", "Air-Gapped Installation", "24/7 Enterprise Support"],
    action: "View Deployment Plans"
  },
  {
    id: "02",
    title: "Integration",
    subtitle: "Engineering",
    description: "Custom integrations to your existing knowledge bases, data warehouses, and internal APIs. Unlock your data's potential without sacrificing its confidentiality.",
    features: ["Legacy System Bridging", "Secure ETL Pipelines", "Zero-Trust Connectors"],
    action: "Discuss Integration"
  },
  {
    id: "03",
    title: "Automation",
    subtitle: "Agents",
    description: "Automate complex business workflows using confidential agents. From document processing to decision support, build autonomous systems that respect privacy.",
    features: ["Custom Agent Development", "Workflow Orchestration", "Human-in-the-loop Systems"],
    action: "Explore Automation"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-background border-t border-white/5">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div className="max-w-2xl">
            <span className="text-primary font-mono text-xs tracking-widest uppercase mb-4 block">
              Enterprise Solutions
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-6">
              Expert Services
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We don't just sell software. Our engineering team partners with you to build, deploy, and automate using confidential AI.
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            <Link href="/services">
              <Button variant="outline" className="border-white/10 hover:bg-white/5 rounded-none px-8">
                View All Services
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {services.map((service) => (
            <div key={service.id} className="bg-background p-10 hover:bg-white/[0.02] transition-colors group relative flex flex-col h-full">
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
                <Link href="/services">
                  <Button variant="link" className="p-0 h-auto text-white hover:text-primary rounded-none text-sm font-medium">
                    {service.action} <ArrowUpRight className="ml-2 w-3 h-3" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
