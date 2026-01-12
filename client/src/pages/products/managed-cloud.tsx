import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, Lock, RefreshCw } from "lucide-react";

export default function ManagedCloud() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans selection:bg-purple-500/30 selection:text-white">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          {/* Purple tint for Managed Cloud */}
          <div className="absolute inset-0 bg-purple-900/5 -skew-y-3 transform origin-top-right scale-110"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-mono mb-6">
                <span className="animate-pulse">COMING Q2 2026</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
                Managed <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Enclava Cloud
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
                Private AI as a service. All the power of Enclava without the operational overhead.
                We manage the confidential infrastructure, you focus on the AI.
              </p>
              <div className="flex justify-center gap-4">
                <Button size="lg" className="h-14 px-8 rounded-none text-base bg-purple-600 hover:bg-purple-700 text-white transition-all font-mono">
                  Join Waitlist <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Cloud,
                  title: "Zero Infrastructure",
                  desc: "No servers to manage, no scaling concerns, no updates to handle. We run everything for you in confidential computing environments."
                },
                {
                  icon: Lock,
                  title: "Same Security Guarantee",
                  desc: "Your data remains encrypted even from us. Built on the same confidential computing foundation as self-hosted deployments."
                },
                {
                  icon: RefreshCw,
                  title: "Developer Friendly",
                  desc: "Same APIs, same workflows, same integrations as self-hosted. Migrate existing deployments seamlessly."
                }
              ].map((item, i) => (
                <div key={i} className="group p-10 border border-white/10 hover:border-purple-500/30 transition-all duration-300 bg-card/50">
                  <item.icon className="w-12 h-12 text-purple-400 mb-8 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-display font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
