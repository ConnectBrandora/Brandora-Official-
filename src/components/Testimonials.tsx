import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import kalanaImage from '@/assets/ChatGPT Image Jan 31, 2026, 10_22_01 PM.png';
import chaminda from '@/assets/ChatGPT Image Jan 31, 2026, 10_31_11 PM.png';
import Chan from '@/assets/ChatGPT Image Jan 31, 2026, 10_36_40 PM.png';
import Madu from '@/assets/ChatGPT Image Jan 31, 2026, 10_42_24 PM.png';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const testimonials = [
    {
      name: 'Chaminda Dias',
      role: 'CEO, Vipex Delivery',
      image: chaminda,
      content: 'Really happy with the work. Communication was easy and everything was done just the way we wanted. The final result looked great and helped improve our brand.',
      rating: 5,
    },
    {
      name: 'Kalana Gayashan',
      role: 'Founder, Farm’s Tech (PVT) Ltd',
      image: kalanaImage,
      content: 'Super smooth experience from start to finish. The designs came out clean and professional, and changes were done quickly. Would definitely work with them again.',
      rating: 5,
    },
    {
      name: 'Chan Besty Ben',
      role: 'Manager,  Top 11 India',
      image: Chan,
      content: 'Great team to work with. Very responsive and easy to communicate with. They understood the requirements well and delivered on time.',
      rating: 5,
    },
    {
      name: 'Madushika Konarage',
      role: 'CTO,  My Coffee',
      image: Madu,
      content: 'Loved the overall experience. Creative work, good communication, and solid results. Everything felt simple and stress-free.',
      rating: 5,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium uppercase tracking-wider text-sm">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            What Our <span className="gradient-text">Clients</span> Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it – hear from the brands we've helped succeed.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-2xl p-8 relative group hover:bg-secondary/30 transition-colors duration-300"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground text-lg mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/50"
                />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
