import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, Mic, Calendar, Brain } from "lucide-react";

export default function AssistantPreview() {
  return (
    <section className="py-32 relative bg-gradient-to-b from-background to-black border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,0,255,0.05)_0%,transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-mono mb-8">
            <Sparkles className="w-3 h-3" />
            <span>COMING SOON</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-display font-medium text-white mb-6 tracking-tight">
            Meet Enclava Assistant
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A fully private AI assistant running in confidential compute. <br className="hidden md:block"/>
            It learns from you without ever exposing your secrets.
          </p>
        </div>

        {/* Feature Grid - Assistant */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Mic,
              title: "Secure Voice & Chat",
              desc: "Interact naturally. All transcripts are encrypted in the secure enclave."
            },
            {
              icon: Brain,
              title: "Proactive Intelligence",
              desc: "Receives briefings on things it found for you based on your interests."
            },
            {
              icon: Calendar,
              title: "Context Aware",
              desc: "Connects to your calendar and data sources to provide relevant insights."
            }
          ].map((item, i) => (
            <div key={i} className="bg-white/[0.02] border border-white/5 p-8 hover:bg-white/[0.04] transition-colors">
              <item.icon className="w-8 h-8 text-purple-400 mb-6" />
              <h3 className="text-xl font-display font-medium text-white mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="h-12 px-8 bg-purple-600 hover:bg-purple-700 text-white rounded-none transition-all">
            Join Assistant Waitlist <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
