import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import WhoItsFor from "@/components/WhoItsFor";
import Results from "@/components/Results";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <section id="what-we-do">
          <WhatWeDo />
        </section>
        <section id="who-its-for">
          <WhoItsFor />
        </section>
        <section id="results">
          <Results />
        </section>
        <section id="demo">
          <CallToAction />
        </section>
      </main>
    </div>
  );
};

export default Index;
