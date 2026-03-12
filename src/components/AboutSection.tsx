import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div ref={ref} className="container mx-auto px-6 max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="font-body text-sm uppercase tracking-[0.3em] text-gold mb-4"
        >
          Welcome
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-3xl md:text-5xl font-medium text-foreground mb-6"
        >
          Welcome to Captivating Moments
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="divider-gold w-24 mx-auto mb-8"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-body text-muted-foreground leading-relaxed text-lg"
        >
          Established in 1996, Captivating Moments are Brisbane based Special Events Stylists servicing some of the city's most popular wedding and corporate venues. With over 30 years of experience, we pride ourselves on our level of product, service, and reliability. Our commitment to couples looking to enhance their wedding day, or corporate clientele seeking to 'lift' their occasion remains as it always has, ...above and beyond expectation.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;
