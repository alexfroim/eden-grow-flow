import { Card, CardContent } from "@/components/ui/card";
import { Users, Building, Briefcase } from "lucide-react";
import businessOwnerImage from "@/assets/trade-business-owner.jpg";

const profiles = [
  {
    icon: Users,
    title: "Small Trade Teams",
    description: "2-10 person crews who excel at their craft but struggle with lead management, scheduling, and customer communication.",
    pain: "Missing calls, losing leads, spending evenings on paperwork"
  },
  {
    icon: Building,
    title: "Growing Trade Companies",
    description: "Established businesses ready to scale but held back by manual processes and administrative overhead.",
    pain: "Can't grow without hiring more office staff"
  },
  {
    icon: Briefcase,
    title: "Solo Trade Professionals",
    description: "Independent contractors who want to compete with larger companies but need professional systems and automation.",
    pain: "Wearing too many hats, working nights on admin"
  }
];

const WhoItsFor = () => {
  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Built For
              <span className="block text-primary">Trade Professionals</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Whether you're a solo professional or managing a growing team, 
              Eden is designed for skilled trades who are excellent at their craft 
              but need help with the business side.
            </p>
            
            <div className="space-y-6">
              {profiles.map((profile, index) => (
                <Card key={index} className="border-l-4 border-l-primary shadow-elegant">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <profile.icon className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-foreground">
                          {profile.title}
                        </h3>
                        <p className="text-muted-foreground mb-3 leading-relaxed">
                          {profile.description}
                        </p>
                        <p className="text-sm text-primary font-medium">
                          Common challenge: {profile.pain}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-nature">
              <img 
                src={businessOwnerImage} 
                alt="Professional tradesperson using Eden AI" 
                className="w-full h-[600px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-elegant">
              <div className="text-2xl font-bold mb-1">500+</div>
              <div className="text-sm opacity-90">Happy Trade Professionals</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;