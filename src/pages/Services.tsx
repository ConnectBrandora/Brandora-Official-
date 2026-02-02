import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Search,
  Palette,
  Share2,
  Megaphone,
  Sparkles,
  FileText,
  ArrowRight,
} from "lucide-react";
import { useEffect } from "react";

const Services = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedService, setSelectedService] = useState<any | null>(null);
  const [loadingDetails, setLoadingDetails] = useState(false);
  const [details, setDetails] = useState<string | null>(null);
  const [visitors, setVisitors] = useState<number | null>(null);

  const openDetails = (service: any) => {
    setSelectedService(service);
    setDetails(null);
    setVisitors(null);
    setLoadingDetails(true);
    setTimeout(() => {
      setDetails(`${service.title}: ${service.description} — Our package options include Starter, Growth, and Scale.`);
      setVisitors(Math.floor(300 + Math.random() * 900));
      setLoadingDetails(false);
    }, 700);
  };
  const loadMoreVisitors = () => {
    if (visitors === null) return;
    setLoadingDetails(true);
    setTimeout(() => {
      setVisitors((v) => (v ?? 0) + Math.floor(80 + Math.random() * 300));
      setLoadingDetails(false);
    }, 600);
  };

  const services = [
    {
      icon: Search,
      title: "SEO Optimization",
      description:
        "Dominate search rankings and drive organic traffic with our proven SEO strategies.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Palette,
      title: "Web Design & Development",
      description: "Stunning, conversion-focused websites that make lasting impressions.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description: "Build engaged communities and amplify your brand voice across platforms.",
      color: "from-orange-500 to-yellow-500",
    },
    {
      icon: Sparkles,
      title: "Branding & Identity",
      description: "Craft a memorable brand identity that resonates with your audience.",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: FileText,
      title: "Content Creation",
      description: "Compelling content that educates, entertains, and converts.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Megaphone,
      title: "Digital Advertising",
      description: "Targeted campaigns that deliver ROI across Google, Meta, and beyond.",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <section id="services" className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-sky-400/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6" ref={ref as any}>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-blue-400 font-medium uppercase tracking-widest text-sm">WHAT WE DO</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight mt-4 mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent whitespace-nowrap">
                Services That Transform
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From strategy to execution, we offer end-to-end digital solutions designed to accelerate your growth.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative glass rounded-2xl p-8 hover:bg-blue-600 hover:shadow-2xl transition-all duration-500 overflow-hidden"
                data-cursor="View"
              >
                {/* Gradient border on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  style={{ padding: "1px" }}
                >
                  <div className="absolute inset-[1px] bg-card rounded-2xl" />
                </div>

                <div className="relative z-10">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:from-blue-600 group-hover:to-sky-600 transition-transform duration-300`}
                  >
                    <service.icon className="w-7 h-7 text-blue-700 group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3 transition-colors group-hover:text-white">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 transition-colors group-hover:text-white/90">{service.description}</p>

                  <motion.button
                    onClick={() => openDetails(service)}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-full font-medium border border-blue-600 text-blue-600 bg-transparent hover:bg-blue-50 transition-colors"
                    whileHover={{ x: 5 }}
                    aria-haspopup="dialog"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Unified Service Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setSelectedService(null)}>
          <div className="w-full max-w-2xl bg-white rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">{selectedService.title}</h3>
                <button onClick={() => setSelectedService(null)} className="p-2 rounded hover:bg-slate-100">Close</button>
              </div>
              <p className="text-muted-foreground mb-4">{loadingDetails ? "Loading details..." : details}</p>
              <div className="mb-4">
                <div className="text-sm text-slate-500 mb-2">Visitors</div>
                <div className="text-3xl font-bold text-blue-600">{visitors ?? (loadingDetails ? "…" : "—")}</div>
              </div>
              <div className="flex gap-3">
                <button disabled={loadingDetails} onClick={loadMoreVisitors} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-60">
                  Load more visitors
                </button>
                <a href={`/services`} className="px-4 py-2 border rounded text-blue-600 border-blue-200">Open Services</a>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Services;
