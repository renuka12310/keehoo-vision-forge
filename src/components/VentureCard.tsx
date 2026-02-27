import { ArrowRight, Sparkles, Lock, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import CountdownTimer from "@/components/CountdownTimer";

interface VentureCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  description: string;
  tagline: string;
  position?: string;
  isMain?: boolean;
  delay?: number;
  href?: string;
  launchDate?: Date;
  timerPosition?: "top-right" | "center";
}

const VentureCard = ({
  icon,
  title,
  subtitle,
  description,
  tagline,
  position,
  isMain = false,
  delay = 0,
  href,
  launchDate,
  timerPosition = "center",
}: VentureCardProps) => {
  const [flipped, setFlipped] = useState(false);
  const hasTimer = !!launchDate;
  const isUpcoming = hasTimer && launchDate.getTime() > Date.now();
  const isMysteryCard = isUpcoming && timerPosition === "center";

  // Mystery card: flip in place to reveal
  if (isMysteryCard) {
    return (
      <div
        className="opacity-0 animate-fade-in-up"
        style={{
          animationDelay: `${delay}ms`,
          animationFillMode: "forwards",
          perspective: "1200px",
        }}
      >
        <div
          onClick={() => setFlipped(!flipped)}
          className="relative w-full min-h-[280px] cursor-pointer"
          style={{
            transformStyle: "preserve-3d",
            transition: "transform 0.7s cubic-bezier(0.4, 0.0, 0.2, 1)",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* FRONT — mystery face */}
          <div
            className="absolute inset-0 group bg-card rounded-lg p-8 card-shadow hover:card-shadow-hover transition-shadow duration-500 overflow-hidden flex flex-col items-center justify-center"
            style={{ backfaceVisibility: "hidden" }}
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-teal/10 rounded-tl-lg group-hover:border-teal/30 transition-colors duration-500" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-teal/10 rounded-br-lg group-hover:border-teal/30 transition-colors duration-500" />

            {/* Pulsing ring behind timer */}
            <div className="relative mb-6">
              <div className="absolute -inset-6 rounded-full bg-saffron/8 animate-ping opacity-20" />
              <div className="absolute -inset-4 rounded-full bg-teal/6 animate-pulse opacity-30" />
              <CountdownTimer targetDate={launchDate} label="to launch" />
            </div>

            {/* Mystery hint */}
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-teal animate-pulse" />
              <span className="text-xs font-body font-bold uppercase tracking-[0.2em] text-teal/80">
                Coming Soon
              </span>
              <Sparkles className="w-3.5 h-3.5 text-teal animate-pulse" />
            </div>

            {/* Lock icon hint */}
            <div className="flex items-center gap-2 text-muted-foreground/40 group-hover:text-teal/60 transition-colors duration-300">
              <Lock className="w-3.5 h-3.5" />
              <span className="text-[11px] font-body tracking-wide">Tap to reveal</span>
            </div>

            {/* Hover eye icon */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
              <Eye className="w-5 h-5 text-teal/50" />
            </div>

            {/* Bottom glow */}
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-saffron/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* BACK — revealed content */}
          <div
            className="absolute inset-0 group bg-card rounded-lg p-8 card-shadow overflow-hidden flex flex-col justify-between"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            {/* Teal accent line */}
            <div className="absolute top-0 left-8 right-8 h-[2px] bg-teal rounded-full opacity-80" />

            <div>
              <div className="flex items-start justify-between mt-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-teal/10 text-teal">
                  {icon}
                </div>
                <div className="flex-shrink-0">
                  <CountdownTimer targetDate={launchDate} label="to launch" />
                </div>
              </div>

              <div className="mt-3">
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                  {title}
                </h3>
                {subtitle && (
                  <p className="text-sm font-body font-medium text-teal mb-3">{subtitle}</p>
                )}
                <p className="text-card-foreground/70 font-body text-sm leading-relaxed mb-5">
                  {description}
                </p>
                {position && (
                  <p className="text-xs font-body font-semibold uppercase tracking-widest text-teal/80 mb-4">
                    {position}
                  </p>
                )}
                <p className="text-xs font-body font-medium text-card-foreground/50 tracking-wide mb-5 italic">
                  {tagline}
                </p>
              </div>
            </div>

            {/* CTA */}
            {href ? (
              <Link
                to={href}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 text-sm font-medium text-teal hover:text-teal-glow transition-colors duration-200"
              >
                <span>Explore</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ) : (
              <div className="flex items-center gap-1.5 text-sm font-medium text-teal">
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            )}

            {/* Bottom glow */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-teal/40 to-transparent" />
          </div>
        </div>
      </div>
    );
  }

  // Normal card (Keehoo main + DigiDevalaya with top-right timer)
  const cardContent = (
    <div
      className={`group relative bg-card rounded-lg p-8 card-shadow hover:card-shadow-hover transition-all duration-500 hover:-translate-y-2 opacity-0 animate-fade-in-up cursor-pointer overflow-hidden flex flex-col justify-between`}
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      {/* Teal accent line */}
      <div className="absolute top-0 left-8 right-8 h-[2px] bg-teal rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, transparent 30%, hsla(180, 53%, 35%, 0.04) 50%, transparent 70%)",
        }}
      />

      {/* Top row: icon + timer */}
      <div className="mt-4 flex items-start justify-between">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-teal/10 text-teal group-hover:bg-teal/20 group-hover:scale-110 transition-all duration-300">
          {icon}
        </div>
        {hasTimer && timerPosition === "top-right" && (
          <div className="flex-shrink-0">
            <CountdownTimer targetDate={launchDate} label="to launch" />
          </div>
        )}
      </div>

      <div className="mt-3">
        <h3 className="font-display text-xl font-semibold text-charcoal mb-1 group-hover:text-teal transition-colors duration-300">
          {title}
        </h3>
        {subtitle && (
          <p className="text-sm font-body font-medium text-teal mb-3">{subtitle}</p>
        )}
        <p className="text-card-foreground/70 font-body text-sm leading-relaxed mb-5">
          {description}
        </p>
        {position && (
          <p className="text-xs font-body font-semibold uppercase tracking-widest text-teal/80 mb-4">
            {position}
          </p>
        )}
        <p className="text-xs font-body font-medium text-card-foreground/50 tracking-wide mb-5 italic">
          {tagline}
        </p>
      </div>

      {/* CTA */}
      <div className="flex items-center gap-1.5 text-sm font-medium text-teal group-hover:text-teal-glow transition-colors duration-200">
        <span>Learn More</span>
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
      </div>

      {/* Bottom glow */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-teal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );

  if (href) {
    return <Link to={href} className="block h-full">{cardContent}</Link>;
  }
  return cardContent;
};

export default VentureCard;
