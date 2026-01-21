import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "/images/abstract_secure_confidential_computing_visualization.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <div className="absolute inset-0 bg-background"></div>
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content - Typography Focused */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-3"
            >
              <div className="h-px w-8 bg-primary"></div>
              <span className="text-primary font-mono text-xs tracking-widest uppercase">
                Confidential Computing Platform
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-6xl md:text-8xl font-display font-medium tracking-tighter leading-[0.9] text-white"
            >
              Confidential AI <br />
              <span className="text-muted-foreground">Made Practical.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed max-w-2xl border-l-2 border-white/10 pl-6"
            >
              Run sensitive AI workloads in secure enclaves. We encrypt your
              data in use, at rest, and in transit.
              <span className="block mt-4 text-white">
                Open source. Zero trust. Infinite scale.
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link href="/get-started">
                <Button size="lg" className="h-14 px-8 rounded-none text-base bg-primary text-background hover:bg-primary/90 transition-all font-mono">
                  Get Started Now <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>

          </div>

          {/* Right Content - Abstract Technical Viz */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative"
            >
              {/* Floating Elements instead of a Box */}
              <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-px h-64 bg-gradient-to-b from-transparent via-primary/50 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
