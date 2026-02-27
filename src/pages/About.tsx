import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import {
  ArrowLeft,
  Rocket,
  Package,
  TrendingUp,
  Blocks,
  BrainCircuit,
  Users,
  ShieldCheck,
  Award,
  Phone,
  MapPin,
  ChevronRight,
  Sparkles,
  Target,
  Zap,
  Globe,
  Lock,
  BarChart3,
} from "lucide-react";

const milestones = [
  {
    year: "2021",
    number: "01",
    icon: <Rocket className="w-5 h-5" />,
    description:
      "Started our journey at Deshpande Startups in Hubli, laying a strong foundation for innovation, product development, and scalable technology growth.",
  },
  {
    year: "2022",
    number: "02",
    icon: <Package className="w-5 h-5" />,
    description:
      "Achieved a major milestone by launching our first flagship products — Payroll and LMS — delivering practical, user-centric solutions to streamline enterprise operations.",
  },
  {
    year: "2023",
    number: "03",
    icon: <TrendingUp className="w-5 h-5" />,
    description:
      "Introduced advanced product versions and expanded our portfolio with enhanced Payroll, MDM, and Data Engineering solutions focused on performance and reliability.",
  },
  {
    year: "2024",
    number: "04",
    icon: <Blocks className="w-5 h-5" />,
    description:
      "Accelerated digital transformation by launching Low-Code Applications, enabling businesses to build and automate processes with unmatched flexibility and speed.",
  },
  {
    year: "2025",
    number: "05",
    icon: <BrainCircuit className="w-5 h-5" />,
    description:
      "Partnered with Morpheo as design and build partner — together redefining customer interaction, automating enterprise workflows, and elevating productivity across the organization.",
  },
];

const whyChoose = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Mission-Driven",
    description: "Every product is built with purpose, governance, and long-term value creation in mind.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "AI-First Approach",
    description: "We embed intelligent automation at the core of every solution we build.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Scalable Architecture",
    description: "Enterprise-grade infrastructure designed to grow with your organization.",
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Security & Compliance",
    description: "Built with security-first principles and regulatory alignment from day one.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Data Intelligence",
    description: "Advanced analytics and insights that drive smarter business decisions.",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Innovation Culture",
    description: "Continuous R&D investment to stay ahead of market evolution.",
  },
];

const compliances = [
  { name: "ISO 27001", description: "Information Security Management" },
  { name: "ISO 9001", description: "Quality Management System" },
];

const About = () => {
  return (
    <main className="bg-background min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
        <div className="relative container mx-auto px-6 text-center max-w-3xl">
          <p className="text-sm font-body font-semibold uppercase tracking-[0.2em] text-teal mb-4 opacity-0 animate-fade-in-up">
            About Us
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-foreground mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            Our Journey
          </h1>
          <p className="text-base lg:text-lg font-body text-foreground/80 leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            From a bold vision to a trusted leader in AI solutions
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-12">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className="relative flex gap-6 md:gap-10 items-start opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${300 + i * 150}ms` }}
                >
                  {/* Number circle */}
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-secondary border border-border flex flex-col items-center justify-center">
                    <span className="text-xs font-body text-teal font-semibold">{m.number}</span>
                    <span className="text-sm font-display font-semibold text-foreground">{m.year}</span>
                  </div>

                  {/* Content card */}
                  <div className="flex-1 bg-card rounded-lg p-6 border border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-teal">{m.icon}</span>
                      <span className="font-display text-lg font-semibold text-card-foreground">{m.year}</span>
                    </div>
                    <p className="font-body text-sm text-card-foreground/80 leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Users className="w-5 h-5 text-teal" />
            <p className="text-sm font-body font-semibold uppercase tracking-[0.15em] text-teal">
              KeeHoo Team
            </p>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">
            Working on a new team experience
          </h2>
          <p className="font-body text-foreground leading-relaxed max-w-xl mx-auto mb-8">
            We're curating updated portraits, bios, and behind-the-scenes footage of every KeeHoo squad. This section is under active construction.
          </p>
          <div className="inline-flex items-center gap-2 bg-secondary/60 border border-border rounded-full px-6 py-3">
            <Sparkles className="w-4 h-4 text-teal" />
            <span className="font-body text-sm text-muted-foreground">Team gallery coming soon.</span>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-sm font-body font-semibold uppercase tracking-[0.15em] text-teal mb-3">
              Why Choose Us
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">
              Why KeeHoo?
            </h2>
            <p className="font-body text-foreground">
              What sets us apart in the world of AI solutions
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item, i) => (
              <div
                key={item.title}
                className="bg-card border border-border/50 rounded-lg p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${200 + i * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center mb-4">
                  <span className="text-teal">{item.icon}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-card-foreground mb-2">{item.title}</h3>
                <p className="font-body text-sm text-card-foreground/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliances */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <ShieldCheck className="w-5 h-5 text-teal" />
              <p className="text-sm font-body font-semibold uppercase tracking-[0.15em] text-teal">
                Compliances
              </p>
            </div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-2">
              Security & Regulatory Coverage
            </h2>
            <p className="font-body text-sm text-foreground/70">
              A snapshot of the standards and certifications we map our platform against.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {compliances.map((c) => (
              <div
                key={c.name}
                className="bg-card border border-border/50 rounded-lg px-6 py-4 flex items-center gap-3 hover:shadow-md transition-shadow duration-300"
              >
                <Award className="w-5 h-5 text-teal flex-shrink-0" />
                <div>
                  <p className="font-body text-sm font-semibold text-card-foreground">{c.name}</p>
                  <p className="font-body text-xs text-muted-foreground">{c.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Footer / Contact */}
      <footer className="border-t border-border py-14 bg-secondary/20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Platform */}
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">Platform</h3>
              <div className="space-y-2">
                <Link to="/" className="block font-body text-sm text-muted-foreground hover:text-teal transition-colors">
                  Home
                </Link>
                <Link to="/about" className="block font-body text-sm text-muted-foreground hover:text-teal transition-colors">
                  About
                </Link>
                <Link to="/digidevalaya" className="block font-body text-sm text-muted-foreground hover:text-teal transition-colors">
                  DigiDevalaya
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-teal flex-shrink-0" />
                  <span className="font-body text-sm text-muted-foreground">+91 8050 426 308</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-muted-foreground">
                    Deshpande Startups, Gokul Rd<br />
                    Hubballi – 580030, Karnataka
                  </span>
                </div>
              </div>
            </div>

            {/* Brand */}
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">Keehoo Pvt Ltd</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Building Intelligent Systems for Faith, Enterprise, and Human Potential.
              </p>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-border text-center">
            <p className="font-body text-xs text-muted-foreground">
              © {new Date().getFullYear()} Keehoo Pvt Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default About;
