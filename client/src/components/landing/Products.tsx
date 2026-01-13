import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Server, Cloud, Shield } from "lucide-react";

export default function Products() {
  return (
    <section id="products" className="py-32 bg-background relative">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 pb-8 border-b border-white/10">
          <div className="max-w-xl">
            <span className="text-primary font-mono text-xs tracking-widest uppercase mb-4 block">Deployment Models</span>
            <h2 className="text-4xl md:text-6xl font-display font-medium text-white">
              Choose Your <br/>Infrastructure
            </h2>
          </div>
          <div className="mt-6 md:mt-0 max-w-sm">
            <p className="text-muted-foreground text-lg">
              Whether you need total control or zero friction, Enclava provides the confidential foundation.
            </p>
          </div>
        </div>

        {/* Product List */}
        <div className="space-y-24">
          
          {/* Product 1: Self-Hosted */}
          <div className="grid lg:grid-cols-12 gap-12 group">
            <div className="lg:col-span-4 lg:col-start-2">
              <div className="text-9xl font-display font-bold text-white/5 absolute -translate-y-12 -translate-x-12 select-none">01</div>
              <div className="relative">
                <div className="inline-flex items-center space-x-2 mb-6">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-primary font-mono text-xs uppercase">Available Now</span>
                </div>
                <h3 className="text-3xl font-display font-medium text-white mb-4">Self-Hosted Enclava</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                   Deploy private AI in your environment with full control. Open-source, secure by design, and ready for production workloads.
                   Perfect for regulated industries requiring air-gapped or on-premise solutions.
                </p>
                <ul className="space-y-4 mb-8 border-l border-white/10 pl-6">
                  <li className="text-sm text-gray-300">
                    <strong className="block text-white mb-1">Complete Control</strong>
                    Deploy on your infrastructure with full administrative access.
                  </li>
                  <li className="text-sm text-gray-300">
                    <strong className="block text-white mb-1">Cost Optimized</strong>
                    Deploy once, use forever. Pay for the tokens you use.
                  </li>
                </ul>
                <Link href="/products/self-hosted">
                  <Button variant="link" className="p-0 text-white hover:text-primary transition-colors text-lg font-display">
                    View Details <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex items-center justify-center">
              <Link href="/products/self-hosted" className="w-full cursor-pointer">
                <div className="w-full aspect-square md:aspect-video bg-gradient-to-br from-white/5 to-transparent border border-white/5 p-1 relative overflow-hidden group-hover:border-white/10 transition-colors">
                   <div className="absolute inset-0 flex items-center justify-center">
                       <Server className="w-24 h-24 text-white/20 group-hover:text-primary/50 transition-colors duration-500" strokeWidth={1} />
                   </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Product 2: Managed Cloud */}
          <div className="grid lg:grid-cols-12 gap-12 group">
            <div className="lg:col-span-6 lg:col-start-2 order-2 lg:order-1 flex items-center justify-center">
              <Link href="/products/managed-cloud" className="w-full cursor-pointer">
                 <div className="w-full aspect-square md:aspect-video bg-gradient-to-bl from-purple-500/5 to-transparent border border-white/5 p-1 relative overflow-hidden group-hover:border-purple-500/20 transition-colors">
                     <div className="absolute inset-0 flex items-center justify-center">
                       <Cloud className="w-24 h-24 text-white/20 group-hover:text-purple-400/50 transition-colors duration-500" strokeWidth={1} />
                    </div>
                 </div>
              </Link>
            </div>
            <div className="lg:col-span-4 lg:col-start-8 order-1 lg:order-2">
              <div className="text-9xl font-display font-bold text-white/5 absolute -translate-y-12 -translate-x-12 select-none">02</div>
              <div className="relative">
                <div className="inline-flex items-center space-x-2 mb-6">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-purple-400 font-mono text-xs uppercase">Coming Q2 2026</span>
                </div>
                <h3 className="text-3xl font-display font-medium text-white mb-4">Managed Enclava Cloud</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                   Confidential AI as a service. All the power of Enclava without the operational overhead. 
                   We manage the TEE infrastructure, scaling, and updates.
                </p>
                <ul className="space-y-4 mb-8 border-l border-white/10 pl-6">
                  <li className="text-sm text-gray-300">
                    <strong className="block text-white mb-1">Zero Infrastructure</strong>
                    No servers to manage. We run everything in confidential computing environments.
                  </li>
                  <li className="text-sm text-gray-300">
                    <strong className="block text-white mb-1">Developer Friendly</strong>
                    Same APIs as self-hosted. Migrate seamlessly.
                  </li>
                </ul>
                <div className="flex space-x-4">
                  <Link href="/products/managed-cloud">
                    <Button variant="outline" className="border-purple-500/30 text-purple-300 hover:text-white hover:bg-purple-500/20 rounded-none h-12 px-6">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
