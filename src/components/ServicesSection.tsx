import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Flower2, Sparkles, Heart, PartyPopper } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Weddings",
    description: "Breathtaking ceremony and reception styling that tells your love story.",
  },
  {
    icon: Sparkles,
    title: "Corporate Events",
    description: "Sophisticated and polished decor that elevates your brand presence.",
  },
  {
    icon: Flower2,
    title: "Floral Design",
    description: "Exquisite arrangements crafted to complement every aesthetic and season.",
  },
  {
    icon: PartyPopper,
    title: "Special Events",
    description: "Private Events, Christenings and Birthday Parties, CM can add something special to your event to make it memorable and exciting.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-32 bg-charcoal">
      <div ref={ref} className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center font-body text-sm uppercase tracking-[0.3em] text-gold mb-4"
        >
          What We Offer
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center font-display text-3xl md:text-5xl font-medium text-primary-foreground mb-6"
        >
          Our Services
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="divider-gold w-24 mx-auto mb-16"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="text-center p-8 border border-gold/10 hover:border-gold/30 transition-colors"
            >
              <service.icon className="w-8 h-8 text-gold mx-auto mb-5" strokeWidth={1.5} />
              <h3 className="font-display text-xl text-primary-foreground mb-3">{service.title}</h3>
              <p className="font-body text-sm text-primary-foreground/60 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
