import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Pricing = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const packages = [
    {
      name: "BASIC",
      price: "Rs.8,000",
      period: "/month",
      description: "Perfect for small businesses starting their digital journey",
      features: [
        "8 Posts / Month",
        "4 Stories / Week",
        "Captions & Hashtags",
        "Page Optimization",   
      "Monthly Report",
       ]
    },
    {
    name: "STANDARD",
      price: "Rs.15,000",
      period: "/month",
      description: "For growing businesses ready to scale their presence",
      features: [
        "12-16 Posts / Month",
        "8-12 Stories / Week",
        "2 Reels",
        "Engagement Handling",
        "Strategy Session",
        "Full Optimization",
      ],
      popular: true
    },
    {
      name: "PREMIUM",
      price: "Rs.25,000",
      period: "/month",
      description: "Tailored solutions for established brands",
      features: [
        "20+ Posts / Month",
        "Daily Stories",
        "4-8 Reels",
        "Full Engagement",
        "Ad Strategy",
        "Deep Analytics",
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Choose the package that fits your needs. All plans include our commitment to results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`relative ${pkg.popular ? 'border-green-600 border-2 shadow-2xl scale-105' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="font-display text-2xl font-bold mb-2">
                    {pkg.name}
                  </h3>
                  <div className="mb-4">
                    <span className="font-display text-4xl font-bold">{pkg.price}</span>
                    <span className="text-muted-foreground">{pkg.period}</span>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {pkg.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="https://wa.me/9471587862"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Get Started
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-secondary rounded-2xl p-12 text-center">
            <h2 className="font-display text-3xl font-bold mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We create tailored packages for unique business needs
            </p>
            <a 
              href="https://wa.me/9471587862"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                Discuss Custom Pricing
              </Button>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Pricing;
