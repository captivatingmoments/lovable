import LogoText from "@/components/LogoText";

const Footer = () => {
  return (
    <footer className="bg-charcoal border-t border-gold/10 py-10">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-2 flex justify-center">
          <LogoText size="sm" />
        </div>
        <p className="font-body text-xs uppercase tracking-[0.2em] text-primary-foreground/40">
          © {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
