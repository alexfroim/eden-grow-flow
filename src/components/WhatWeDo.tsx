import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Calendar, TrendingUp, Share2, Zap, Clock } from "lucide-react";
const features = [{
  icon: MessageSquare,
  title: "AI Lead Capture",
  description: "Never miss a lead again. Our AI responds instantly to inquiries, qualifies prospects, and schedules appointments—even while you sleep.",
  color: "text-primary"
}, {
  icon: Calendar,
  title: "Smart Scheduling",
  description: "Automated quoting, appointment booking, and follow-up reminders. Your calendar stays full while you focus on the work.",
  color: "text-accent"
}, {
  icon: TrendingUp,
  title: "Business Growth",
  description: "Advanced lead generation tools and conversion optimization that turn your expertise into consistent, profitable growth.",
  color: "text-nature-green"
}, {
  icon: Share2,
  title: "Social Media Automation",
  description: "Keep your brand active with automated posting, customer showcases, and engagement—without lifting a finger.",
  color: "text-primary-glow"
}, {
  icon: Zap,
  title: "Instant Customer Service",
  description: "AI-powered responses to common questions, service updates, and customer care that delights every interaction.",
  color: "text-accent"
}, {
  icon: Clock,
  title: "Time Freedom",
  description: "Reclaim hours every week by automating repetitive tasks. Spend time growing your business instead of managing it.",
  color: "text-nature-green"
}];
const WhatWeDo = () => {
  return <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What We Do
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">Our AI-powered agents and workflow automations handle everything from outbound and inbound calls to admin tasks, customer support, and marketing—so you can stay focused on delivering your best work.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => <Card key={index} className="group hover:shadow-nature transition-all duration-300 border-0 bg-card/60 backdrop-blur-sm">
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
            </Card>)}
        </div>
      </div>
    </section>;
};
export default WhatWeDo;