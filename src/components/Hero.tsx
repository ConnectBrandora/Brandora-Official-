import { motion } from 'framer-motion';
import { ArrowRight, Play, X } from 'lucide-react';
import backBrand from '@/assets/Backbrand.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const MotionLink = motion(Link);

const Hero = () => {
  const [showReel, setShowReel] = useState(false);
  const [reelSrc, setReelSrc] = useState<string | null>(null);
  const VIDEO_ID = "k75_fxP402I";
  
  const openReel = () => {
    setReelSrc(`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&mute=1`);
    setShowReel(true);
  };
  
  const closeReel = () => {
    setShowReel(false);
    setTimeout(() => setReelSrc(null), 250);
  };
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden noise">
      {/* Background image */}
      <div className="absolute inset-0 -z-20 pointer-events-none" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${backBrand})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 1,
          }}
        />
      </div>

      {/* Animated background gradient overlay */}
      <div className="absolute inset-0 bg-black/20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-sm text-white">Award-Winning Digital Agency</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white"
          >
            We Build{' '}
            <motion.span
              className="gradient-text bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              Digital Experiences
            </motion.span>{' '}
            That Drive Growth
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-10"
          >
            Transform your brand with cutting-edge marketing strategies, stunning web design, and data-driven solutions that convert visitors into loyal customers.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <MotionLink
              to="/case-studies"
              className="group flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-cursor="View"
            >
              View Our Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </MotionLink>
            <motion.button
              onClick={openReel}
              className="group flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-cursor="Play"
            >
              <Play className="w-5 h-5" />
              Watch Showreel
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10 border-t border-border/50"
          >
            {[
              { value: '150+', label: 'Projects Delivered' },
              { value: '50+', label: 'Happy Clients' },
              { value: '8+', label: 'Years Experience' },
              { value: '08+', label: 'Team Members' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>

      {/* Showreel Modal */}
      {showReel && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={closeReel}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="w-full max-w-4xl bg-transparent"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative pb-[56.25%] overflow-hidden rounded-lg shadow-xl">
              {reelSrc && (
                <iframe
                  src={reelSrc}
                  title="Showreel"
                  className="absolute inset-0 w-full h-full border-0"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
            <button
              onClick={closeReel}
              className="absolute top-4 right-4 p-2 rounded-md bg-white/90 hover:bg-white z-50"
              aria-label="Close showreel"
            >
              <X className="w-5 h-5" />
            </button>
          </motion.div>
        </motion.div>
      )}

      <style>{`
        @keyframes bgPan {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
