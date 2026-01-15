import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Workflow, Users, CheckCircle, Zap, GitBranch } from "lucide-react";

export default function Automation() {
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
                <span>AGENTS</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
                Process <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Automation
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
                Automate complex business workflows using confidential agents. From document processing to
                decision support, build autonomous systems that respect privacy.
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
                Our automation service designs and implements AI-powered workflows that handle complex
                business processes while maintaining data confidentiality.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Bot,
                  title: "Custom Agent Development",
                  desc: "We build specialized agents tailored to your specific workflows, with custom tools and integrations."
                },
                {
                  icon: Workflow,
                  title: "Workflow Orchestration",
                  desc: "Design and implement multi-step workflows with conditional logic, error handling, and retries."
                },
                {
                  icon: Users,
                  title: "Human-in-the-loop Systems",
                  desc: "Build approval workflows and human oversight mechanisms for critical decision points."
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

        {/* Automation Use Cases */}
        <section className="py-24 border-t border-white/5 bg-black/20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Automation Scenarios
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {[
                {
                  title: "Document Processing Automation",
                  description: "Automatically process incoming documents—invoices, contracts, forms—extract data with OCR, validate, and route to appropriate systems.",
                  features: ["OCR extraction", "Data validation", "System integration"]
                },
                {
                  title: "Customer Support Triage",
                  description: "Automatically categorize, prioritize, and route support tickets based on content analysis and historical data.",
                  features: ["Ticket classification", "Priority scoring", "Auto-routing"]
                },
                {
                  title: "Compliance & Risk Assessment",
                  description: "Automate review of documents and transactions for compliance issues, flagging potential risks for human review.",
                  features: ["Policy checking", "Risk scoring", "Alert generation"]
                },
                {
                  title: "Research & Report Generation",
                  description: "Agents that can gather data from multiple sources, synthesize information, and generate comprehensive reports.",
                  features: ["Multi-source research", "Data synthesis", "Report formatting"]
                },
                {
                  title: "Data Quality & Enrichment",
                  description: "Automatically clean, normalize, and enrich data records by cross-referencing multiple internal sources.",
                  features: ["Data cleaning", "Deduplication", "Enrichment workflows"]
                },
                {
                  title: "Decision Support Systems",
                  description: "Build agents that analyze complex scenarios and provide recommendations based on company policies and historical data.",
                  features: ["Policy analysis", "Historical lookup", "Recommendation engine"]
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

        {/* Development Process */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Our Development Process
              </h2>
            </div>

            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Workflow Analysis",
                  description: "We map your existing business processes, identify automation opportunities, and define success metrics."
                },
                {
                  step: "02",
                  title: "Agent Design",
                  description: "Design agent architecture, define tools and capabilities, and plan integration points."
                },
                {
                  step: "03",
                  title: "Prototype Development",
                  description: "Build a working prototype with core functionality to validate the approach and gather feedback."
                },
                {
                  step: "04",
                  title: "Testing & Refinement",
                  description: "Extensive testing with real data, error handling improvements, and performance optimization."
                },
                {
                  step: "05",
                  title: "Production Deployment",
                  description: "Deploy to production with monitoring, alerting, and gradual rollout to manage risk."
                },
                {
                  step: "06",
                  title: "Continuous Improvement",
                  description: "Ongoing monitoring of agent performance, user feedback collection, and iterative improvements."
                }
              ].map((phase, i) => (
                <div key={i} className="flex items-start space-x-6 p-6 border border-white/5 bg-gradient-to-r from-white/[0.02] to-transparent">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-mono text-sm font-bold">
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
                Why Choose Our Automation Service
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Bot,
                  title: "Domain Expertise",
                  desc: "We understand common business processes and can design agents that handle edge cases and real-world complexity."
                },
                {
                  icon: GitBranch,
                  title: "Iterative Approach",
                  desc: "Start with high-value workflows, prove ROI quickly, then expand to additional processes."
                },
                {
                  icon: Users,
                  title: "Change Management",
                  desc: "We help train your team, document workflows, and ensure smooth adoption of automated systems."
                },
                {
                  icon: Zap,
                  title: "Measurable Impact",
                  desc: "We define clear KPIs and track automation performance to demonstrate tangible business value."
                }
              ].map((benefit, i) => (
                <div key={i} className="flex items-start space-x-4 p-6 border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-purple-400" />
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
              Ready to automate your workflows?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Schedule a consultation to discuss your automation opportunities and workflow requirements.
            </p>
            <div className="flex justify-center gap-4">
              <a href="https://cal.com/aljaz/enclava" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="h-14 px-8 rounded-none text-base bg-purple-500 text-white hover:bg-purple-600 transition-all font-mono">
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
