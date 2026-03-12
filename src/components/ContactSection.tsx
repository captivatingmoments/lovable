import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Facebook, Instagram, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Enquiry Sent",
        description: "Thank you! We'll be in touch shortly.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-charcoal">
      <div ref={ref} className="container mx-auto px-6 max-w-4xl">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="font-body text-sm uppercase tracking-[0.3em] text-gold mb-4"
          >
            Get In Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl md:text-5xl font-medium text-primary-foreground mb-6"
          >
            Let's Create Together
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="divider-gold w-24 mx-auto mb-16"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-center space-y-8"
          >
            <p className="font-body text-primary-foreground/70 leading-relaxed">
              Natasha and Tony Ricco
            </p>

            <div className="space-y-5">
              <a href="tel:0734221032" className="flex items-center gap-3 text-primary-foreground/70 hover:text-gold transition-colors">
                <Phone className="w-5 h-5 text-gold" strokeWidth={1.5} />
                <span className="font-body text-sm tracking-wide">07 3422 1032</span>
              </a>
              <a href="tel:0419701498" className="flex items-center gap-3 text-primary-foreground/70 hover:text-gold transition-colors">
                <Phone className="w-5 h-5 text-gold" strokeWidth={1.5} />
                <span className="font-body text-sm tracking-wide">0419 701 498</span>
              </a>
              <a href="mailto:natasha@captivatingmoments.com" className="flex items-center gap-3 text-primary-foreground/70 hover:text-gold transition-colors">
                <Mail className="w-5 h-5 text-gold" strokeWidth={1.5} />
                <span className="font-body text-sm tracking-wide">natasha@captivatingmoments.com</span>
              </a>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <a href="https://facebook.com/captivating.moments.event.stylists" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-gold transition-colors">
                <Facebook className="w-6 h-6" strokeWidth={1.5} />
              </a>
              <a href="https://www.instagram.com/captivating.moments.stylists?igsh=Y3NycDk4Yzk1ZDEx&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-gold transition-colors">
                <Instagram className="w-6 h-6" strokeWidth={1.5} />
              </a>
            </div>
          </motion.div>

          {/* Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-body text-xs uppercase tracking-[0.2em] text-primary-foreground/60">
                  Your Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  required
                  maxLength={100}
                  placeholder="Full name"
                  className="bg-charcoal-light border-border text-primary-foreground placeholder:text-muted-foreground font-body"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-body text-xs uppercase tracking-[0.2em] text-primary-foreground/60">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={255}
                    placeholder="you@email.com"
                    className="bg-charcoal-light border-border text-primary-foreground placeholder:text-muted-foreground font-body"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="font-body text-xs uppercase tracking-[0.2em] text-primary-foreground/60">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    maxLength={20}
                    placeholder="04XX XXX XXX"
                    className="bg-charcoal-light border-border text-primary-foreground placeholder:text-muted-foreground font-body"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="eventDate" className="font-body text-xs uppercase tracking-[0.2em] text-primary-foreground/60">
                    Date of Event
                  </Label>
                  <Input
                    id="eventDate"
                    name="eventDate"
                    type="date"
                    required
                    className="bg-charcoal-light border-border text-primary-foreground placeholder:text-muted-foreground font-body"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="attendees" className="font-body text-xs uppercase tracking-[0.2em] text-primary-foreground/60">
                    No. of Attendees
                  </Label>
                  <Input
                    id="attendees"
                    name="attendees"
                    type="number"
                    min={1}
                    max={10000}
                    required
                    placeholder="e.g. 150"
                    className="bg-charcoal-light border-border text-primary-foreground placeholder:text-muted-foreground font-body"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="font-body text-xs uppercase tracking-[0.2em] text-primary-foreground/60">
                  Tell Us About Your Event
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  maxLength={1000}
                  rows={4}
                  placeholder="Share any details about your vision..."
                  className="bg-charcoal-light border-border text-primary-foreground placeholder:text-muted-foreground font-body resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gold hover:bg-gold-light text-background font-body text-sm uppercase tracking-[0.2em] h-12 transition-colors"
              >
                {isSubmitting ? "Sending..." : "Send Enquiry"}
                {!isSubmitting && <Send className="w-4 h-4 ml-2" />}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
