import { Card, CardContent } from "@/components/ui/card";
import { 
  Phone, 
  PhoneCall, 
  TrendingUp, 
  FileText,
  Headphones,
  Megaphone
} from "lucide-react";

const features = [
  {
    icon: PhoneCall,
    title: "Outbound Calling",
    description: "Our AI agents proactively reach out to qualified leads, nurture prospects, and schedule appointments to keep your pipeline full.",
    color: "text-primary"
  },
  {
    icon: Phone,
    title: "Inbound Call Management",
    description: "Never miss a call again. Our AI handles customer inquiries, appointment scheduling, and service requests 24/7.",
    color: "text-accent"
  },
  {
    icon: TrendingUp,
    title: "Business Development",
    description: "Strategic outreach campaigns and lead generation systems that consistently bring in new opportunities and grow your revenue.",
    color: "text-nature-green"
  },
  {
    icon: FileText,
    title: "Admin Task Automation",
    description: "Eliminate paperwork with automated invoicing, scheduling, follow-ups, and client communication that runs seamlessly in the background.",
    color: "text-primary-glow"
  },
  {
    icon: Headphones,
    title: "Customer Service Excellence",
    description: "AI-powered support that handles questions, updates, and service requests with the personal touch your clients expect.",
    color: "text-accent"
  },
  {
    icon: Megaphone,
    title: "Marketing & Outreach",
    description: "Automated social media, email campaigns, and client nurturing that keeps your brand visible and your services top-of-mind.",
    color: "text-nature-green"
  }
];

const WhatWeDo = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What We Do
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our AI agents handle your outbound calling, inbound support, and business development—so you can focus 
            on delivering exceptional service while we grow your business behind the scenes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-nature transition-all duration-300 border-0 bg-card/60 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="mb-6">
                  <feature.icon className={`w-12 h-12 ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;