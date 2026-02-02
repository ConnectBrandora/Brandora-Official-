import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from '@/components/WhatsAppButton';
import CustomCursor from '@/components/CustomCursor';
import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';
import { Link } from "react-router-dom";
import { ArrowRight, Target, Zap, Users, TrendingUp, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import partnerLogo from "@/assets/image.svg";
const Index = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [selectedService, setSelectedService] = useState<any | null>(null);
  const [serviceDetails, setServiceDetails] = useState<string | null>(null);
  const [loadingDetails, setLoadingDetails] = useState(false);
  const [visitors, setVisitors] = useState<number | null>(null);

  const openServiceModal = (service: any) => {
    setSelectedService(service);
    setServiceDetails(null);
    setVisitors(null);
    setLoadingDetails(true);
    // simulate fetch for details & visitors
    setTimeout(() => {
      setServiceDetails(service.description + " — More info: tailored strategies, pricing tiers, and timelines.");
      setVisitors(Math.floor(200 + Math.random() * 1200));
      setLoadingDetails(false);
    }, 700);
  };

  const loadMoreVisitors = () => {
    if (visitors === null) return;
    setLoadingDetails(true);
    setTimeout(() => {
      setVisitors((v) => (v ?? 0) + Math.floor(50 + Math.random() * 200));
      setLoadingDetails(false);
    }, 600);
  };
  const services = [{
    icon: <Target className="w-8 h-8" />,
    title: "SEO Optimization",
    description: "Boost your visibility and rank higher on search engines with our proven SEO strategies.",
    link: "/services/seo"
  }, {
    icon: <Zap className="w-8 h-8" />,
    title: "Web Design & Development",
    description: "Create stunning, responsive websites that convert visitors into customers.",
    link: "/services/web-design"
  }, {
    icon: <Users className="w-8 h-8" />,
    title: "Social Media Management",
    description: "Build and engage your community across all major social platforms.",
    link: "/services/social-media"
  }];
  return(
<div className="min-h-screen">
      <Navigation />
      <CustomCursor />
      <Hero />

      {/* Services Section */}
      <section id="services" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-3">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital solutions tailored to your business goals. Click any card to learn more.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
            {services.map((service, idx) => {
              const cardContent = (
                <div className="group block rounded-2xl p-6 bg-card/60 border border-border hover:shadow-lg transform hover:-translate-y-1 transition-all h-full flex flex-col justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex-none text-blue-600 bg-blue-50 p-3 rounded-lg">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <button
                      onClick={() => openServiceModal(service)}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-full font-medium border border-blue-600 text-blue-600 bg-transparent hover:bg-blue-50 transition-colors"
                      aria-haspopup="dialog"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );

              // Only the Digital Advertising card is clickable
              if (service.title === "Digital Advertising") {
                return (
                  <Link to={service.link} key={idx} className="h-full">
                    {cardContent}
                  </Link>
                );
              }

              return (
                <div key={idx} className="h-full">
                  {cardContent}
                </div>
              );
            })}
          </div>

          {/* Service Detail Modal (Index) */}
          {selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setSelectedService(null)}>
              <div className="w-full max-w-2xl bg-white rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold">{selectedService.title}</h3>
                    <button onClick={() => setSelectedService(null)} className="p-2 rounded hover:bg-slate-100">Close</button>
                  </div>
                  <p className="text-muted-foreground mb-4">{loadingDetails ? "Loading details..." : serviceDetails}</p>
                  <div className="mb-4">
                    <div className="text-sm text-slate-500 mb-2">Visitors</div>
                    <div className="text-3xl font-bold text-blue-600">{visitors ?? (loadingDetails ? "…" : "—")}</div>
                  </div>
                  <div className="flex gap-3">
                    <button disabled={loadingDetails} onClick={loadMoreVisitors} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-60">
                      Load more visitors
                    </button>
                    <Link to="/services" className="px-4 py-2 border rounded text-blue-600 border-blue-200">View service page</Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
       <section className="py-20 px-4 bg-secondary">
         <div className="container mx-auto max-w-4xl text-center">
           <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
             Ready to Grow Your Business?
           </h2>
           <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
              Let's discuss how we can help you achieve your digital marketing goals
           </p>
             <div className="flex justify-center">
             <Button
               size="lg"
               className="bg-blue-600 hover:bg-blue-700 text-white font-semibold flex items-center gap-2"
               onClick={() => window.open('https://wa.me/9471587862', '_blank', 'noopener,noreferrer')}
             >
               <MessageCircle className="w-4 h-4" />
               Schedule a Consultation
             </Button>
             </div>
         </div>
       </section>
      <Testimonials />
      <Footer />
      <WhatsAppButton />
    </div>
  );

   
};
export default Index;