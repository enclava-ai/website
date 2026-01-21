import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-lg border-b border-white/5 py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-display font-bold tracking-tighter text-white hover:opacity-80 transition-opacity">
          ENCLAVA
        </Link>

        <div className="hidden md:flex items-center space-x-10">
          <a href="/#products" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">
            Platform
          </a>
          <Link href="/services" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">
            Services
          </Link>
          <a href="https://docs.enclava.ai" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">
            Docs
          </a>
          <Link href="/blog" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">
            Blog
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <a href="https://github.com/enclava-ai/enclava" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <Link href="/get-started">
            <Button size="sm" className="font-semibold bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all duration-300 rounded-none px-6">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
