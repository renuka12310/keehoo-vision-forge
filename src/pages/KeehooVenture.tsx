import { Building2, Target, Shield, TrendingUp, Layers, Globe, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const pillars = [
  { icon: <Target className="w-6 h-6" />, title: "Mission-Driven", desc: "Every venture is built with purpose, governance, and long-term value creation at its core." },
  { icon: <Shield className="w-6 h-6" />, title: "Governance First", desc: "Institutional-grade structures ensuring transparency, accountability, and compliance." },
  { icon: <TrendingUp className="w-6 h-6" />, title: "Scalable Growth", desc: "Architecture designed for exponential growth across markets and geographies." },
  { icon: <Layers className="w-6 h-6" />, title: "Multi-Venture Portfolio", desc: "Diversified product ventures across FaithTech, AI, Enterprise, and HealthTech." },
  { icon: <Globe className="w-6 h-6" />, title: "Generational Value", desc: "Building technology assets designed for decades, not quarters." },
  { icon: <Building2 className="w-6 h-6" />, title: "Holding Company Model", desc: "Each venture operates independently with shared infrastructure and governance." },
];

const KeehooVenture = () => (
  <main className="bg-background min-h-screen">
    <Header />
    <section className="relative pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />
      <div className="relative container mx-auto px-6 text-center max-w-3xl">
        <p className="text-sm font-body font-semibold uppercase tracking-[0.2em] text-teal mb-4 opacity-0 animate-fade-in-up">Technology Holding Company</p>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-foreground mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
          Keehoo Technology Group
        </h1>
        <p className="text-base lg:text-lg font-body text-muted-foreground leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          A long-term technology holding company building mission-driven product ventures designed for scale, governance, and generational value creation.
        </p>
        <p className="text-sm font-body italic text-teal mt-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
          Strategic. Structured. Scalable.
        </p>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground text-center mb-14">Our Pillars</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <div key={p.title} className="bg-card border border-border/50 rounded-lg p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1 opacity-0 animate-fade-in-up" style={{ animationDelay: `${200 + i * 100}ms` }}>
              <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center mb-4 text-teal">{p.icon}</div>
              <h3 className="font-display text-lg font-semibold text-card-foreground mb-2">{p.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <footer className="border-t border-border py-8 text-center">
      <p className="font-body text-xs text-muted-foreground">© {new Date().getFullYear()} Keehoo Pvt Ltd. All rights reserved.</p>
    </footer>
  </main>
);

export default KeehooVenture;
