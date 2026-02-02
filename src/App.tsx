import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import Countdown from "./components/CountDown";
import About from "./pages/About";
import Services from "./pages/Services";
import CaseStudies from "./pages/CaseStudies";
import Team from "./pages/Team";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import brandoraLogo from "@/assets/brandora-logo.png";
import backbrand from "@/assets/Backbrand.png";

const queryClient = new QueryClient();
const LAUNCH_TIME = "2026-02-02T15:00:00";

const AppContent = () => {
  const [launchDone, setLaunchDone] = useState(false);

  useEffect(() => {
    if (new Date() >= new Date(LAUNCH_TIME)) {
      setLaunchDone(true);
    }
  }, []);

  return (
    <>
      {launchDone && <Navigation />}

      {!launchDone ? (
        <div
          className="min-h-screen w-full flex flex-col items-center justify-center text-white px-6"
          style={{
            backgroundImage: `url(${backbrand})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <img
            src={brandoraLogo}
            alt="Brandora"
            className="w-40 h-24 object-contain mb-8"
          />
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Launching Soon
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-center mb-12 max-w-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Get ready for Brandora – your ultimate partner in branding and digital
            solutions. We're crafting something amazing just for you.
          </motion.p>
          <Countdown
            endTime={LAUNCH_TIME}
            onEnd={() => setLaunchDone(true)}
          />
          <p className="text-sm text-white/70 mt-12 text-center">
            © 2026 Brandora.lk
          </p>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:service" element={<Services />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/team" element={<Team />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
