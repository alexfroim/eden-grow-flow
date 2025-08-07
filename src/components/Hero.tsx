import { Button } from "@/components/ui/button";
import { Apple, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-landscape.jpg";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroImage})`
    }}>
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Apple className="w-8 h-8 text-primary" />
          <span className="text-primary font-semibold text-lg">Eden AI</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Let Your Landscaping
          <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Business Thrive</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">Our AI agents and workflow automations handle your outreach, follow-ups, scheduling, and customer service—so you can stay focused on delivering top-quality work while we drive your business forward in the background.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-nature transition-all duration-300 text-lg px-8 py-6">
            Book Your Demo
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5 text-lg px-8 py-6">
            See How It Works
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-2xl bg-card/80 backdrop-blur-sm shadow-elegant">
            <div className="text-3xl font-bold text-primary mb-2">24/7 Availability</div>
            <div className="text-muted-foreground">Always-on customer support an</div>
          </div>
          <div className="p-6 rounded-2xl bg-card/80 backdrop-blur-sm shadow-elegant">
            <div className="text-3xl font-bold text-primary mb-2">3,000+ Outbound Calls </div>
            <div className="text-muted-foreground">We handle proactive outreach s</div>
          </div>
          <div className="p-6 rounded-2xl bg-card/80 backdrop-blur-sm shadow-elegant">
            <div className="text-3xl font-bold text-primary mb-2">40+ Hours Saved/Week</div>
            <div className="text-muted-foreground">Automate admin, appointment setting, and client follow-ups</div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;