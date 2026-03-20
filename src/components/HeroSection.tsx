import { Button } from "@/components/ui/button";
import VentureCard from "@/components/VentureCard";
import {
  Building2,
  Landmark,
  BrainCircuit,
  ScanLine,
  HeartPulse,
  Rocket,
} from "lucide-react";
import office1 from "@/assets/office-1.jpeg";
import office2 from "@/assets/office-2.jpeg";
import office3 from "@/assets/office-3.jpeg";
import teamPhoto from "@/assets/team-photo.jpeg";
import founderRamesh from "@/assets/founder-ramesh.png";
import founderSapna from "@/assets/founder-sapna.jpeg";
import founderSreevatsa from "@/assets/founder-sreevatsa.png";
import founderGopal from "@/assets/founder-gopal.png";

const mainVenture = {
  icon: <Building2 className="w-6 h-6" />,
  title: "Keehoo Technology Group",
  description:
    "A long-term technology holding company building mission-driven product ventures designed for scale, governance, and generational value creation.",
  tagline: "Strategic. Structured. Scalable.",
  isMain: true,
  delay: 200,
  href: "/keehoo",
};

const communityVentures = [
  {
    icon: <Landmark className="w-6 h-6" />,
    title: "DigiDevalaya",
    subtitle: "Digital Temple Infrastructure Platform",
    description:
      "A FaithTech ecosystem enabling temples and spiritual institutions to digitize operations, manage communities, offerings, events, and engagement through modern technology infrastructure.",
    tagline: "Institutional-grade Faith Infrastructure.",
    position: "FaithTech",
    href: "/digidevalaya",
    delay: 350,
    launchDate: new Date("2026-03-19T00:00:00"),
    timerPosition: "top-right" as const,
  },
  {
    icon: <HeartPulse className="w-6 h-6" />,
    title: "DigiCounselar",
    subtitle: "Digital Psychological Care Platform",
    description:
      "A HealthTech platform focused on accessible psychological support, structured healing journeys, and technology-enabled counseling infrastructure.",
    tagline: "Digital Psychology for Modern Well-being.",
    position: "HealthTech",
    href: "/digicounselar",
    delay: 500,
    launchDate: new Date("2026-05-19T00:00:00"),
  },
];

const enterpriseVentures = [
  {
    icon: <BrainCircuit className="w-6 h-6" />,
    title: "AI Kruise",
    subtitle: "AI Planner for Leaders",
    description:
      "An intelligent productivity ecosystem that helps leaders manage processes, teams, goals, and operational workflows using AI-driven planning and execution intelligence.",
    tagline: "Enterprise AI for Human Leadership.",
    position: "Productivity Intelligence",
    href: "/ai-kruise",
    delay: 350,
    launchDate: new Date("2026-04-19T00:00:00"),
  },
  {
    icon: <ScanLine className="w-6 h-6" />,
    title: "Stock & Asset Intelligence",
    subtitle: "AI-Powered MSME Infrastructure",
    description:
      "A computer-vision enabled stock and asset management system designed for MSMEs, integrating edge devices to monitor inventory, assets, and operational movement in real time.",
    tagline: "Edge AI for Enterprise Efficiency.",
    position: "Enterprise Asset Intelligence",
    href: "/stock-asset",
    delay: 500,
    launchDate: new Date("2026-04-19T00:00:00"),
  },
];

const founderVentures = [
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "DigiIncubator",
    subtitle: "Startup Incubation Platform",
    description:
      "A platform for founders to incubate, launch, and scale startups with mentorship, shared infrastructure, and resources — powered by the Keehoo technology ecosystem.",
    tagline: "From Idea to Impact.",
    position: "Founder Enablement",
    delay: 350,
    launchDate: new Date("2026-04-19T00:00:00"),
  },
];

const CategorySection = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <p className="text-xs font-body font-bold uppercase tracking-[0.25em] text-teal/70 mb-5 pl-1">{label}</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {children}
    </div>
  </div>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative container mx-auto px-6 pt-24 pb-20 lg:pt-32 lg:pb-28">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20 opacity-0 animate-fade-in-up">
          <p className="text-sm font-body font-semibold uppercase tracking-[0.2em] text-teal mb-6">
            Keehoo Pvt Ltd
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-[3.4rem] font-600 leading-tight text-foreground mb-8">
            Powering the Future of Enterprise, Faith &amp; Human Well-being
            Through Technology.
          </h1>
          <p className="text-base lg:text-lg font-body text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10">
            Keehoo Pvt Ltd is a technology group building scalable product
            ventures across FaithTech, Enterprise Automation and Intelligence,
            and Digital Psychology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-base px-8 py-6">
              Explore Our Ventures
            </Button>
          </div>
        </div>

        {/* Keehoo Group + Venture Ecosystem */}
        <div className="max-w-6xl mx-auto">
          {/* Parent Group Banner */}
          <Link
            to="/keehoo"
            className="group block relative rounded-t-xl border border-border/60 bg-card p-8 lg:p-10 opacity-0 animate-fade-in-up overflow-hidden"
            style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
          >
            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal via-teal/60 to-saffron/40 rounded-t-xl" />

            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-teal/10 text-teal group-hover:bg-teal/20 group-hover:scale-105 transition-all duration-300 flex-shrink-0">
                <Building2 className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground group-hover:text-teal transition-colors duration-300 mb-1">
                  Keehoo Technology Group
                </h2>
                <p className="font-body text-sm lg:text-base text-muted-foreground leading-relaxed max-w-2xl mb-2">
                  A long-term technology holding company building mission-driven product ventures designed for scale, governance, and generational value creation.
                </p>
                <p className="text-xs font-body font-medium text-muted-foreground/60 tracking-wide italic">
                  Strategic. Structured. Scalable.
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-sm font-medium text-teal group-hover:text-teal-glow transition-colors duration-200 flex-shrink-0">
                <span>Explore</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          {/* Venture cards container — visually nested under the parent */}
          <div
            className="relative border-x border-b border-border/40 rounded-b-xl bg-muted/20 p-6 lg:p-8 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "350ms", animationFillMode: "forwards" }}
          >
            {/* Connector line from parent */}
            <div className="absolute -top-px left-10 w-px h-4 bg-teal/30" />
            <div className="absolute -top-px right-10 w-px h-4 bg-teal/30" />

            <p className="text-[11px] font-body font-bold uppercase tracking-[0.3em] text-muted-foreground/50 mb-6 pl-1">
              Product Ventures
            </p>

            <CategorySection label="Community Solutions">
              {communityVentures.map((venture) => (
                <div key={venture.title} className="h-full">
                  <VentureCard {...venture} />
                </div>
              ))}
            </CategorySection>

            <CategorySection label="Enterprise Solutions">
              {enterpriseVentures.map((venture) => (
                <div key={venture.title} className="h-full">
                  <VentureCard {...venture} />
                </div>
              ))}
            </CategorySection>

            <CategorySection label="Founder Solutions">
              {founderVentures.map((venture) => (
                <div key={venture.title} className="h-full">
                  <VentureCard {...venture} />
                </div>
              ))}
            </CategorySection>
          </div>
        </div>

        {/* Facility & Team Section */}
        <div className="max-w-6xl mx-auto mt-24 opacity-0 animate-fade-in-up" style={{ animationDelay: '900ms' }}>
          <div className="text-center mb-12">
            <p className="text-sm font-body font-semibold uppercase tracking-[0.2em] text-teal mb-4">
              Our Foundation
            </p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-600 text-foreground mb-4">
              5+ Years of Building Industry-Leading Products
            </h2>
            <p className="text-base lg:text-lg font-body text-muted-foreground max-w-2xl mx-auto">
              A strong product building team with a factory model — delivering products 
              with quality, speed, governance, scalability, cost-effectiveness, and performance.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="col-span-2 lg:col-span-2 rounded-2xl overflow-hidden aspect-[16/10]">
              <img src={office1} alt="Keehoo technology workspace with team collaborating" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square">
              <img src={office2} alt="Engineering team at work" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square">
              <img src={office3} alt="Modern office lounge area" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>

          <div className="mt-4 rounded-2xl overflow-hidden aspect-[21/9]">
            <img src={teamPhoto} alt="Keehoo founding team at Deshpande Startups Hubli" className="w-full h-full object-cover object-top" loading="lazy" />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { value: "5+", label: "Years of Journey" },
              { value: "6", label: "Product Ventures" },
              { value: "50+", label: "Technology Experts" },
              { value: "3", label: "Industry Verticals" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-3xl lg:text-4xl font-700 text-teal">{stat.value}</p>
                <p className="font-body text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Founders */}
          <div className="mt-20">
            <div className="text-center mb-10">
              <p className="text-sm font-body font-semibold uppercase tracking-[0.2em] text-teal mb-4">
                Leadership
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-600 text-foreground">
                The Minds Behind Keehoo
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Mr. Sreevatsa",
                  role: "Co-Founder & CEO",
                  expertise: "19 years of Business, Tech & Security",
                  photo: founderSreevatsa,
                },
                {
                  name: "Mr. Ramesh Kulkarni",
                  role: "Founder & Chairman",
                  expertise: "20 years of Engineering & Tech Leadership",
                  photo: founderRamesh,
                },
                {
                  name: "Mrs. Sapna Sardesai",
                  role: "Co-Founder & COO",
                  expertise: "20 years of Finance & Marketing Expertise",
                  photo: founderSapna,
                },
                {
                  name: "Mr. Gopal Kommuri",
                  role: "Chief Business Officer",
                  expertise: "21 years of Marketing & Sales",
                  photo: founderGopal,
                },
              ].map((founder) => (
                <div
                  key={founder.name}
                  className="bg-card rounded-lg p-6 card-shadow text-center hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 ring-2 ring-teal/20">
                    <img src={founder.photo} alt={founder.name} className="w-full h-full object-cover object-top" loading="lazy" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-card-foreground mb-1">
                    {founder.name}
                  </h3>
                  <p className="text-sm font-body font-medium text-teal mb-2">{founder.role}</p>
                  <p className="text-xs font-body text-card-foreground/70 leading-relaxed">
                    {founder.expertise}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade to white */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background:
            "linear-gradient(to bottom, transparent, hsl(var(--ivory)))",
        }}
      />
    </section>
  );
};

export default HeroSection;
