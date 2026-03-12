import { cn } from "@/lib/utils";

interface LogoTextProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Star = ({ className }: { className?: string }) => (
  <span className={cn("inline-block relative", className)}>
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-full h-full"
    >
      {/* Four-point sparkle star */}
      <path
        d="M12 0 L13.5 10.5 L24 12 L13.5 13.5 L12 24 L10.5 13.5 L0 12 L10.5 10.5 Z"
        fill="url(#starGradient)"
      />
      <defs>
        <radialGradient id="starGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="white" />
          <stop offset="40%" stopColor="hsl(36, 60%, 80%)" />
          <stop offset="100%" stopColor="hsl(36, 60%, 48%)" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  </span>
);

const sizeClasses = {
  sm: "text-lg",
  md: "text-2xl",
  lg: "text-4xl md:text-5xl",
};

const starSizes = {
  sm: "w-3 h-3",
  md: "w-4 h-4",
  lg: "w-5 h-5",
};

const LogoText = ({ className, size = "md" }: LogoTextProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-0 tracking-wide text-gold-gradient select-none",
        sizeClasses[size],
        className
      )}
      style={{ fontFamily: "'Cinzel Decorative', serif" }}
    >
      <Star className={cn(starSizes[size], "-mr-0.5 -mt-3")} />
      <span className="leading-none">Captivating</span>
      <span className="mx-1.5" />
      <span className="leading-none">Moments</span>
      <Star className={cn(starSizes[size], "-ml-0.5 -mt-3")} />
    </span>
  );
};

export default LogoText;
