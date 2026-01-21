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
        <section className="py-24 bg-background relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-500/5 to-transparent pointer-events-none"></div>

          <div className="container mx-auto px-6 relative">
            <div className="max-w-2xl mb-20">
              <div className="h-px w-16 bg-purple-400 mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                What's Included
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our automation service designs and implements AI-powered workflows that handle complex
                business processes while maintaining data confidentiality.
              </p>
            </div>

            <div className="space-y-6">
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
                <div key={i} className="group relative">
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex items-start space-x-6 p-8 pl-10 hover:bg-white/[0.02] transition-colors">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-500/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <item.icon className="w-7 h-7 text-purple-400" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
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

        {/* Automation Use Cases */}
        <section className="py-32 border-t border-white/5 bg-black/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent pointer-events-none"></div>

          <div className="container mx-auto px-6 relative">
            <div className="max-w-2xl mb-20">
              <div className="h-px w-16 bg-purple-400 mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                Automation Scenarios
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {[
                {
                  title: "Document Processing Automation",
                  description: "Automatically process incoming documents—invoices, contracts, forms—extract structured data, validate, and route to appropriate systems.",
                  features: ["Structured extraction", "Data validation", "System integration"]
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
                <div key={i} className="group relative">
                  <div className="absolute -left-4 top-0 text-8xl font-display font-bold text-white/5 select-none">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="relative p-8 pl-12 hover:bg-white/[0.02] transition-colors border-l-2 border-white/10 hover:border-purple-400/50">
                    <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {useCase.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{useCase.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {useCase.features.map((feature, j) => (
                        <div key={j} className="inline-flex items-center px-3 py-1.5 bg-purple-500/10 border border-purple-500/20 text-sm text-purple-300">
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

        {/* Development Process */}
        <section className="py-32 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent pointer-events-none"></div>

          <div className="container mx-auto px-6 relative">
            <div className="max-w-2xl mb-20">
              <div className="h-px w-16 bg-purple-400 mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                Our Development Process
              </h2>
            </div>

            <div className="space-y-16 max-w-5xl">
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
                <div key={i} className="group relative flex items-start space-x-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500/30 to-purple-500/5 border border-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="font-mono text-2xl font-bold text-purple-400">{phase.step}</span>
                    </div>
                    {i < 5 && (
                      <div className="w-px h-16 bg-gradient-to-b from-purple-400/30 to-transparent mx-auto mt-4"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {phase.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{phase.description}</p>
                  </div>
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
                <div className="h-px w-16 bg-purple-400 mb-6"></div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                  Why Choose Our Automation Service
                </h2>
              </div>

              <div className="space-y-8">
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
                  <div key={i} className="group relative pl-8 border-l-2 border-white/10 hover:border-purple-400/50 transition-colors">
                    <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-background border-2 border-white/10 group-hover:border-purple-400 group-hover:bg-purple-500/20 transition-all flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <benefit.icon className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" strokeWidth={1.5} />
                      <div>
                        <h3 className="text-xl text-white font-display font-bold mb-2 group-hover:text-purple-400 transition-colors">
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
