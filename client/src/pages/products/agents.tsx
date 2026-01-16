import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Wrench, Network, CheckCircle, Workflow, Shield } from "lucide-react";
import { Link } from "wouter";

export default function Agents() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 -skew-y-3 transform origin-top-left scale-110"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-400 text-xs font-mono mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-400"></span>
                </span>
                <span>ADVANCED CAPABILITIES</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
                Autonomous <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  AI Agents
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
                Deploy sophisticated AI agents with tool use, multi-knowledge base access, and MCP server integration.
                Build agentic workflows that go far beyond simple chat.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/#features">
                  <Button size="lg" className="h-14 px-8 rounded-none text-base bg-purple-500 text-white hover:bg-purple-600 transition-all font-mono">
                    Get Started <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <a href="https://docs.enclava.ai" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="h-14 px-8 rounded-none text-base border-white/10 hover:bg-white/5 hover:text-white transition-all font-mono">
                    View Documentation
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                More Than Just Chat
              </h2>
              <p className="text-muted-foreground text-lg">
                Agents can use tools, access multiple knowledge bases, and integrate with external systems
                through MCP servers—all while keeping your data confidential.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Wrench,
                  title: "Tool Use & Function Calling",
                  desc: "Agents can call custom functions, interact with APIs, execute code, and perform complex multi-step operations."
                },
                {
                  icon: Network,
                  title: "Multi-Knowledge Base Access",
                  desc: "Connect agents to multiple knowledge bases simultaneously, allowing them to reason across different data sources."
                },
                {
                  icon: Workflow,
                  title: "MCP Server Integration",
                  desc: "Integrate with Model Context Protocol servers to extend agent capabilities with external tools and data sources."
                }
              ].map((item, i) => (
                <div key={i} className="group p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300 bg-card/50">
                  <item.icon className="w-10 h-10 text-purple-400 mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-display font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-24 border-t border-white/5 bg-black/20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Build Sophisticated AI Systems
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {[
                {
                  title: "Research & Analysis Agents",
                  description: "Agents that can search through multiple data sources, synthesize information, and produce comprehensive reports on complex topics.",
                  features: ["Multi-source research", "Data synthesis", "Automated reporting"]
                },
                {
                  title: "Workflow Automation",
                  description: "Automate business processes with agents that can interact with internal systems, make decisions, and execute multi-step workflows.",
                  features: ["API integrations", "Decision-making logic", "Multi-step orchestration"]
                },
                {
                  title: "Data Processing Pipelines",
                  description: "Build agents that can extract, transform, and analyze data from various sources while maintaining confidentiality throughout the pipeline.",
                  features: ["Data extraction", "Transformation logic", "Quality validation"]
                },
                {
                  title: "Decision Support Systems",
                  description: "Deploy agents that can analyze complex scenarios, access relevant historical data, and provide recommendations based on company policies.",
                  features: ["Policy compliance", "Historical analysis", "Risk assessment"]
                }
              ].map((useCase, i) => (
                <div key={i} className="p-8 border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent hover:border-purple-500/20 transition-colors">
                  <h3 className="text-xl font-display font-bold text-white mb-3">{useCase.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.features.map((feature, j) => (
                      <li key={j} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8">
                  Flexible Agent Architecture
                </h2>
                <p className="text-muted-foreground mb-8 text-lg">
                  Define custom tools, connect to multiple knowledge bases, and integrate with MCP servers
                  to build agents tailored to your specific use cases.
                </p>
                <ul className="space-y-4">
                  {[
                    "Define custom functions and tools for your agent",
                    "Connect to multiple knowledge bases simultaneously",
                    "Integrate MCP servers for extended capabilities",
                    "Set up guardrails and approval workflows",
                    "Monitor agent actions and decision-making"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center mr-4 mt-0.5 font-mono text-sm">
                        {i + 1}
                      </div>
                      <span className="mt-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl"></div>
                <div className="relative bg-[#0d1117] border border-white/10 rounded-lg overflow-hidden font-mono text-sm shadow-2xl">
                  <div className="flex items-center px-4 py-2 border-b border-white/10 bg-white/5">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                    </div>
                    <div className="ml-4 text-xs text-muted-foreground">agent-config.json</div>
                  </div>
                  <div className="p-6 text-gray-300 overflow-x-auto">
                    <pre className="text-xs">{`{
  "agent": {
    "name": "research-assistant",
    "model": "claude-3-5-sonnet-20241022",
    "knowledge_bases": [
      "kb_internal_docs",
      "kb_customer_data",
      "kb_market_research"
    ],
    "tools": [
      {
        "name": "search_database",
        "description": "Search internal SQL database",
        "parameters": { "query": "string" }
      },
      {
        "name": "generate_report",
        "description": "Generate PDF report",
        "parameters": { "data": "object" }
      }
    ],
    "mcp_servers": [
      "filesystem",
      "database"
    ],
    "guardrails": {
      "require_approval": ["generate_report"],
      "max_iterations": 10
    }
  }
}`}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security */}
        <section className="py-24 border-t border-white/5 bg-black/20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <div className="flex items-center space-x-4 mb-6">
                <Shield className="w-12 h-12 text-purple-400" />
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
                  Confidential by Design
                </h2>
              </div>
              <p className="text-muted-foreground text-lg mb-8">
                All agent operations happen inside the secure enclave. Tool executions, knowledge base queries,
                and MCP server interactions are encrypted and isolated from the host system.
              </p>
              <ul className="space-y-4">
                {[
                  "Tool executions run in isolated environments",
                  "Knowledge base access is encrypted end-to-end",
                  "MCP server communications are secured",
                  "Agent state and memory remain confidential",
                  "Full audit logs of all agent actions"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 text-center border-t border-white/5">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">
              Ready to build autonomous agents?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Deploy sophisticated AI agents that respect your data's confidentiality.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/#features">
                <Button size="lg" className="h-14 px-8 rounded-none text-base bg-purple-500 text-white hover:bg-purple-600 transition-all font-mono">
                  Get Started
                </Button>
              </Link>
              <a href="https://docs.enclava.ai" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="h-14 px-8 rounded-none text-base border-white/20 hover:border-purple-500 hover:text-purple-400 transition-all font-mono">
                  View Documentation
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
