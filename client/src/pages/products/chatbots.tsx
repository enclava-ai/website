import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Database, Zap, CheckCircle, Code2, Lock } from "lucide-react";
import { Link } from "wouter";

export default function Chatbots() {
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
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
                </span>
                <span>SIMPLE & POWERFUL</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
                Confidential <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Chatbots
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
                OpenAI-compatible endpoints automatically enriched with your private knowledge base.
                Deploy support bots and Q&A systems that understand your proprietary data without exposing it.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/#features">
                  <Button size="lg" className="h-14 px-8 rounded-none text-base bg-blue-500 text-white hover:bg-blue-600 transition-all font-mono">
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
                RAG-Enhanced Chat, Zero Configuration
              </h2>
              <p className="text-muted-foreground text-lg">
                Every request to your chatbot is automatically enriched with relevant context from your knowledge base.
                No complex RAG pipeline setup required—just point your app at our OpenAI-compatible endpoint.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Database,
                  title: "Auto-Enriched Context",
                  desc: "Each query automatically retrieves relevant information from your knowledge base and includes it in the context window."
                },
                {
                  icon: Zap,
                  title: "Drop-In Replacement",
                  desc: "Works anywhere the OpenAI API is supported. Change the endpoint URL, and you're done—no code changes needed."
                },
                {
                  icon: Lock,
                  title: "Confidential by Default",
                  desc: "Your documents never leave the secure enclave. RAG processing happens entirely within the encrypted environment."
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

        {/* Use Cases */}
        <section className="py-24 border-t border-white/5 bg-black/20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Perfect For Simple AI Integrations
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {[
                {
                  title: "Customer Support Bots",
                  description: "Deploy chatbots that can answer questions using your internal documentation, support tickets, and product knowledge.",
                  features: ["Access to help docs", "Product documentation", "Historical support tickets"]
                },
                {
                  title: "Internal Q&A Systems",
                  description: "Give employees instant access to company policies, procedures, and institutional knowledge through a simple chat interface.",
                  features: ["Company policies", "HR documentation", "Process guides"]
                },
                {
                  title: "Developer Documentation Assistants",
                  description: "Help developers navigate complex API documentation and internal code standards with an AI assistant that knows your codebase.",
                  features: ["API documentation", "Code examples", "Best practices"]
                },
                {
                  title: "Knowledge Base Search",
                  description: "Transform static knowledge bases into interactive conversational interfaces that understand context and can surface relevant information.",
                  features: ["Semantic search", "Multi-document synthesis", "Context-aware answers"]
                }
              ].map((useCase, i) => (
                <div key={i} className="p-8 border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent hover:border-blue-500/20 transition-colors">
                  <h3 className="text-xl font-display font-bold text-white mb-3">{useCase.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.features.map((feature, j) => (
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

        {/* How It Works */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8">
                  Simple Integration
                </h2>
                <p className="text-muted-foreground mb-8 text-lg">
                  Replace your OpenAI endpoint with Enclava's chatbot endpoint. We handle the RAG pipeline automatically.
                </p>
                <ul className="space-y-4">
                  {[
                    "Upload your documents to a knowledge base",
                    "Get your chatbot endpoint URL",
                    "Point your application at the new endpoint",
                    "Every query is automatically enriched with relevant context"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mr-4 mt-0.5 font-mono text-sm">
                        {i + 1}
                      </div>
                      <span className="mt-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-3xl"></div>
                <div className="relative bg-[#0d1117] border border-white/10 rounded-lg overflow-hidden font-mono text-sm shadow-2xl">
                  <div className="flex items-center px-4 py-2 border-b border-white/10 bg-white/5">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                    </div>
                    <div className="ml-4 text-xs text-muted-foreground">chatbot-integration.js</div>
                  </div>
                  <div className="p-6 text-gray-300 overflow-x-auto">
                    <pre className="text-xs">{`import OpenAI from 'openai';

const client = new OpenAI({
  baseURL: 'https://your-enclava.com/chatbot/kb_123',
  apiKey: process.env.ENCLAVA_API_KEY
});

// That's it! All queries now use your KB
const response = await client.chat.completions.create({
  model: 'claude-3-5-sonnet-20241022',
  messages: [
    { role: 'user', content: 'How do I reset my password?' }
  ]
});

// Response is enriched with your docs automatically`}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 text-center border-t border-white/5">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">
              Ready to deploy your chatbot?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Start building confidential chatbots with automatic RAG enrichment today.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/#features">
                <Button size="lg" className="h-14 px-8 rounded-none text-base bg-blue-500 text-white hover:bg-blue-600 transition-all font-mono">
                  Get Started
                </Button>
              </Link>
              <a href="https://docs.enclava.ai" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="h-14 px-8 rounded-none text-base border-white/20 hover:border-blue-500 hover:text-blue-400 transition-all font-mono">
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
