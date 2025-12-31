
import React, { useRef } from "react";
import { services } from "../data/services";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Services: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".service-card-animate",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-grid-animate",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section id="services" className="py-20 px-6 bg-muted/30" ref={containerRef}>
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-section-title text-gradient mb-6">Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              What I offer: from robust web architectures to seamless blockchain integrations and scalable design systems.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 services-grid-animate">
            {services.map((item, idx) => (
              <div key={idx} className="service-card-animate h-full">
                <Card className="card-service h-full">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold mb-2 text-gradient">
                      {item.service}
                    </CardTitle>
                    <CardDescription className="text-base text-muted-foreground">
                      {item.benefit}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;