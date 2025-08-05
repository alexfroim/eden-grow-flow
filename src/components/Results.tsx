import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Mike Rodriguez",
    company: "Green Valley Landscapes",
    testimonial: "Eden's AI has been a game-changer. We went from missing 40% of leads to responding to every single one within minutes. Our booking rate doubled in the first month.",
    results: "200% increase in lead conversion",
    rating: 5
  },
  {
    name: "Sarah Chen",
    company: "Precision Lawn Care",
    testimonial: "I used to spend 3 hours every evening on scheduling and follow-ups. Now Eden handles it all automatically. I actually have time for my family again.",
    results: "15 hours saved per week",
    rating: 5
  },
  {
    name: "David Thompson",
    company: "Elite Garden Design",
    testimonial: "The social media automation is incredible. Our Instagram grew from 200 to 2,000 followers in 6 months, and we're booking higher-value projects.",
    results: "10x social media growth",
    rating: 5
  }
];

const stats = [
  { number: "92%", label: "Lead Response Rate" },
  { number: "$47K", label: "Average Revenue Increase" },
  { number: "18hrs", label: "Time Saved Weekly" },
  { number: "4.9/5", label: "Customer Satisfaction" }
];

const Results = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Real Results from Real Landscapers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See how Eden's AI automation is transforming landscaping businesses 
            across the country—and imagine what it could do for yours.
          </p>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        
        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden shadow-nature border-0 bg-card/60 backdrop-blur-sm">
              <CardContent className="p-8">
                <Quote className="w-8 h-8 text-primary mb-4" />
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.testimonial}"
                </p>
                
                <div className="border-t pt-6">
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground mb-3">
                    {testimonial.company}
                  </div>
                  <div className="text-sm font-medium text-primary">
                    {testimonial.results}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;