import { Button } from "@/components/ui/button";
import VentureCard from "@/components/VentureCard";
import {
  Building2,
  Landmark,
  BrainCircuit,
  ScanLine,
  HeartPulse,
} from "lucide-react";
import office1 from "@/assets/office-1.jpeg";
import office2 from "@/assets/office-2.jpeg";
import office3 from "@/assets/office-3.jpeg";
import teamPhoto from "@/assets/team-photo.jpeg";
import founderRamesh from "@/assets/founder-ramesh.png";
import founderSapna from "@/assets/founder-sapna.jpeg";
import founderSreevatsa from "@/assets/founder-sreevatsa.png";
import founderGopal from "@/assets/founder-gopal.png";

const ventures = [
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Keehoo Technology Group",
    description:
      "A long-term technology holding company building mission-driven product ventures designed for scale, governance, and generational value creation.",
    tagline: "Strategic. Structured. Scalable.",
    isMain: true,
    delay: 200,
    href: "/keehoo",
  },
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
    icon: <BrainCircuit className="w-6 h-6" />,
    title: "AI Kruise",
    subtitle: "AI Planner for Leaders",
    description:
      "An intelligent productivity ecosystem that helps leaders manage processes, teams, goals, and operational workflows using AI-driven planning and execution intelligence.",
    tagline: "Enterprise AI for Human Leadership.",
    position: "Productivity Intelligence",
    href: "/ai-kruise",
    delay: 500,
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
    delay: 650,
    launchDate: new Date("2026-04-19T00:00:00"),
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
    delay: 800,
    launchDate: new Date("2026-05-19T00:00:00"),
  },
];

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

        {/* Venture Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {ventures.map((venture, index) => (
            <div key={venture.title} className={`h-full ${index === 3 ? "lg:col-start-2" : ""}`}>
              <VentureCard {...venture} />
            </div>
          ))}
        </div>

        {/* Facility & Team Section */}
        <div className="max-w-6xl mx-auto mt-24 opacity-0 animate-fade-in-up" style={{ animationDelay: '900ms' }}>
          <div className="text-center mb-12">
            <p className="text-sm font-body font-semibold uppercase tracking-[0.2em] text-teal mb-4">
              Our Foundation
            </p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-600 text-foreground mb-4">
              4+ Years of Building Industry-Leading Products
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
              { value: "5", label: "Product Ventures" },
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
