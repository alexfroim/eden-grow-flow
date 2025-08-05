import { Button } from "@/components/ui/button";
import { Apple } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Apple className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">Eden</span>
          </button>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#what-we-do" className="text-muted-foreground hover:text-primary transition-colors">
              What We Do
            </a>
            <a href="#who-its-for" className="text-muted-foreground hover:text-primary transition-colors">
              Who It's For
            </a>
            <a href="#results" className="text-muted-foreground hover:text-primary transition-colors">
              Results
            </a>
            <a href="#demo" className="text-muted-foreground hover:text-primary transition-colors">
              Demo
            </a>
          </div>
          
          {/* CTA Button */}
          <Button className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-nature transition-all duration-300">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;