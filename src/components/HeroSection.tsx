import { motion } from "framer-motion";
import heroImage from "@/assets/hero-event.jpg";

const HeroSection = () => {
  return (
    <>
      <section id="home" className="relative h-screen overflow-hidden">
        <img
          src={heroImage}
          alt="Elegant event styling by Captivating Moments"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute bottom-12 left-0 right-0 text-center text-5xl md:text-7xl font-medium text-gold-gradient leading-tight tracking-wide z-10"
          style={{ fontFamily: "'Cinzel Decorative', serif" }}
        >
          Captivating Moments
        </motion.h1>
      </section>

      {/* Heading and caption below the image */}
      <section className="bg-background py-16 md:py-24">
        <div className="text-center px-6 max-w-3xl mx-auto">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="divider-gold w-32 mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-body text-base md:text-lg text-primary-foreground/90 tracking-wide leading-relaxed max-w-2xl mx-auto"
          >
            Established in 1996, Captivating Moments are Brisbane based Special Events Stylists servicing some of the city's most popular wedding and corporate venues. With over 30 years of experience, we pride ourselves on our level of product, service, and reliability. Our commitment to couples looking to enhance their wedding day, or corporate clientele seeking to 'lift' their occasion remains as it always has, ...above and beyond expectation.
          </motion.p>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
