import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, Gift, Sparkles } from "lucide-react";
import naturePattern from "@/assets/nature-pattern.jpg";

const CallToAction = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{ backgroundImage: `url(${naturePattern})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Sparkles className="w-8 h-8 text-primary" />
            <span className="text-primary font-semibold text-lg">Ready to Grow?</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Your Landscaping Business
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Deserves Eden
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of landscapers who've transformed their business with AI automation. 
            Book a personalized demo and see how Eden can help you grow.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-3xl mx-auto">
            <Card className="border-primary/20 shadow-nature bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Free Demo</h3>
                <p className="text-muted-foreground mb-6">
                  30-minute personalized walkthrough of Eden's AI tools for your business
                </p>
                <Button className="w-full bg-gradient-to-r from-primary to-primary-glow hover:shadow-nature">
                  Book Your Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-accent/20 shadow-nature bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <Gift className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Free Trial</h3>
                <p className="text-muted-foreground mb-6">
                  30 days free—no credit card required. Start automating your business today
                </p>
                <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent/5">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Questions? Our team is here to help.
            </p>
            <Button variant="ghost" className="text-primary hover:text-primary-glow">
              Chat with our AI assistant →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;