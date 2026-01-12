import { Database, MessageSquare, Bot, Settings, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Database,
    title: "Secure Knowledge Bases",
    description: "Import and interact with your proprietary data in a secure, private environment. Your knowledge base remains encrypted and isolated."
  },
  {
    icon: MessageSquare,
    title: "Confidential Chatbots (RAG)",
    description: "Enable confidential AI integrations anywhere the OpenAI API is supported. Run RAG pipelines without exposing your documents."
  },
  {
    icon: Bot,
    title: "Autonomous Agents",
    description: "Deploy agents with access to tools and RAG for advanced use cases. Agents operate within the secure enclave."
  },
  {
    icon: Settings,
    title: "Centralized AI Management",
    description: "Oversee all company AI usage in one place. Manage API keys with budgets, granular permissions, and access controls."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-32 bg-background relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-20">
          
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-8 leading-tight">
              Platform <br/> Capabilities
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Enclava isn't just a container runner. It's a complete platform for managing secure AI workloads across your organization.
            </p>
            <Button variant="link" className="p-0 text-primary hover:text-white transition-colors text-lg font-display">
              Explore the Platform <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/5 text-white group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-medium text-white mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
