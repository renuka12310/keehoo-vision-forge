import { Button } from "@/components/ui/button";
import { Landmark, Users, Store, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const DDHero = () => (
  <section className="relative min-h-[90vh] bg-navy-deep flex items-center overflow-hidden">
    {/* Decorative mandala-like pattern */}
    <div className="absolute inset-0 opacity-[0.04]" style={{
      backgroundImage: `radial-gradient(circle at 50% 50%, hsl(var(--saffron)) 1px, transparent 1px)`,
      backgroundSize: "40px 40px",
    }} />
    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-saffron to-transparent opacity-60" />

    <div className="container mx-auto px-6 py-24 text-center relative z-10">
      <p className="font-body text-saffron text-sm uppercase tracking-[0.3em] mb-3 opacity-0 animate-fade-in-up" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
        देवालय
      </p>
      <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
        DIGIDEVALAYA
      </h1>
      <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 font-body leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
        For your well-being — one platform connecting temples, devotees & service providers through tradition and technology.
      </p>
      <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
        <Button variant="hero" size="lg" className="text-base px-10 py-6 bg-saffron hover:bg-saffron-glow">
          Explore
        </Button>
      </div>
    </div>
  </section>
);

const EcosystemCard = ({ icon, title, description, delay }: { icon: React.ReactNode; title: string; description: string; delay: number }) => (
  <div className="bg-card rounded-lg p-8 card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-500 text-center opacity-0 animate-fade-in-up" style={{ animationDelay: `${delay}ms` }}>
    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-saffron/10 text-saffron mb-5">
      {icon}
    </div>
    <h3 className="font-display text-xl font-semibold text-charcoal mb-3">{title}</h3>
    <p className="text-card-foreground/70 text-sm leading-relaxed font-body">{description}</p>
  </div>
);

const DDEcosystem = () => (
  <section className="bg-slate-surface py-24">
    <div className="container mx-auto px-6">
      <h2 className="font-display text-3xl lg:text-4xl font-semibold text-charcoal text-center mb-4">The Ecosystem</h2>
      <p className="text-center text-charcoal/60 font-body max-w-2xl mx-auto mb-14 text-sm leading-relaxed">
        Connecting devotees, temple management, and service providers into one sacred ecosystem — all for your well-being.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <EcosystemCard icon={<Landmark className="w-7 h-7" />} title="The Temple" description="A majestic Dravidian sanctuary — managed with modern tools to nurture spiritual well-being of every devotee." delay={200} />
        <EcosystemCard icon={<Users className="w-7 h-7" />} title="The Devotee" description="Book poojas, make donations, experience live darshan, and nurture your family's well-being from anywhere." delay={350} />
        <EcosystemCard icon={<Store className="w-7 h-7" />} title="The Service Provider" description="Sell sacred products for family well-being, manage inventory, accept payments, and grow alongside the temple community." delay={500} />
      </div>
    </div>
  </section>
);

export { DDHero, DDEcosystem };
