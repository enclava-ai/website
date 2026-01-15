import { MessageSquare, Bot, ScanText, ArrowRight, Database, Wrench, FileJson } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const products = [
  {
    icon: MessageSquare,
    badge: "Simple & Powerful",
    title: "Chatbots",
    tagline: "RAG-Enhanced Endpoints",
    description: "OpenAI-compatible chat endpoints automatically enriched with your private knowledge base. Perfect for support bots and Q&A systems that need access to proprietary data.",
    features: [
      "Auto-enriched context from RAG",
      "Drop-in OpenAI replacement",
      "Zero configuration required"
    ],
    accent: "from-blue-500/10 to-cyan-500/10",
    iconBg: "bg-blue-500/10 group-hover:bg-blue-500 group-hover:text-black",
    borderAccent: "border-blue-500/20",
    link: "/products/chatbots"
  },
  {
    icon: Bot,
    badge: "Advanced Capabilities",
    title: "Agents",
    tagline: "Autonomous AI Systems",
    description: "Multi-tool agents with access to knowledge bases, MCP servers, and custom integrations. Build sophisticated agentic workflows that go beyond simple chat.",
    features: [
      "Tool use & function calling",
      "Multi-knowledge base access",
      "MCP server integration"
    ],
    accent: "from-purple-500/10 to-pink-500/10",
    iconBg: "bg-purple-500/10 group-hover:bg-purple-500 group-hover:text-black",
    borderAccent: "border-purple-500/20",
    link: "/products/agents"
  },
  {
    icon: ScanText,
    badge: "Document Intelligence",
    title: "OCR",
    tagline: "Confidential Document Processing",
    description: "Extract and process data from sensitive documents—PII, corporate files, invoices—with AI while maintaining complete confidentiality. Predefined and custom templates for structured JSON output.",
    features: [
      "PII & sensitive data handling",
      "Custom template support",
      "Structured JSON extraction"
    ],
    accent: "from-green-500/10 to-emerald-500/10",
    iconBg: "bg-green-500/10 group-hover:bg-green-500 group-hover:text-black",
    borderAccent: "border-green-500/20",
    link: "/products/ocr"
  }
];

const platformFeatures = [
  {
    icon: Database,
    title: "Secure Knowledge Bases",
    description: "Your proprietary data encrypted and isolated in secure enclaves"
  },
  {
    icon: Wrench,
    title: "Centralized Management",
    description: "Oversee all AI usage with budgets, permissions, and access controls"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-32 bg-background relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-primary font-mono text-xs tracking-widest uppercase mb-4 block">
            Product Suite
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-medium text-white mb-6 leading-tight">
            Three Ways to Deploy <br/>Confidential AI
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From simple chatbots to complex document processing, choose the right solution for your use case. All running in secure enclaves.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {products.map((product, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${product.accent} border border-white/10 p-8 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5`}
            >
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 mb-6">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <span className="text-primary font-mono text-xs uppercase tracking-wider">
                  {product.badge}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-3xl font-display font-medium text-white mb-2">
                {product.title}
              </h3>
              <p className="text-sm text-primary/80 mb-4 font-mono">
                {product.tagline}
              </p>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8 border-t border-white/5 pt-6">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-xs text-gray-400">
                    <div className="w-1 h-1 bg-primary rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Learn More */}
              <Link href={product.link}>
                <Button
                  variant="link"
                  className="p-0 h-auto text-white hover:text-primary text-sm group-hover:translate-x-1 transition-transform"
                >
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Platform Features */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto pt-16 border-t border-white/5">
          {platformFeatures.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                <feature.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-white font-medium mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
