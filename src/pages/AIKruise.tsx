import { BrainCircuit, Users, Target, Workflow, BarChart3, Calendar, Zap, Settings } from "lucide-react";
import Header from "@/components/Header";
import CountdownTimer from "@/components/CountdownTimer";

const features = [
  { icon: <Workflow className="w-6 h-6" />, title: "Process Management", desc: "Streamline workflows and operational processes with AI-driven automation." },
  { icon: <Users className="w-6 h-6" />, title: "Team Intelligence", desc: "Manage teams, assign tasks, and optimize human resource allocation." },
  { icon: <Target className="w-6 h-6" />, title: "Goal Tracking", desc: "Set, monitor, and achieve organizational goals with intelligent planning." },
  { icon: <BarChart3 className="w-6 h-6" />, title: "Execution Analytics", desc: "Real-time insights into operational performance and productivity metrics." },
  { icon: <Calendar className="w-6 h-6" />, title: "Smart Scheduling", desc: "AI-powered calendar management and meeting optimization for leaders." },
  { icon: <Settings className="w-6 h-6" />, title: "Workflow Automation", desc: "Automate repetitive tasks and focus on strategic decision-making." },
];

const AIKruise = () => (
  <main className="bg-background min-h-screen">
    <Header />
    <section className="relative pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />
      <div className="relative container mx-auto px-6 text-center max-w-3xl">
        <div className="flex justify-center mb-6">
          <CountdownTimer targetDate={new Date("2026-04-19T00:00:00")} label="until launch" />
        </div>
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-teal/10 text-teal mb-6 opacity-0 animate-fade-in-up">
          <BrainCircuit className="w-8 h-8" />
        </div>
        <p className="text-sm font-body font-semibold uppercase tracking-[0.2em] text-teal mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
          Productivity Intelligence
        </p>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-foreground mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "150ms" }}>
          AI Kruise
        </h1>
        <p className="text-sm font-body text-teal/80 mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "200ms" }}>AI Planner for Leaders</p>
        <p className="text-base lg:text-lg font-body text-muted-foreground leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: "250ms" }}>
          An intelligent productivity ecosystem that helps leaders manage processes, teams, goals, and operational workflows using AI-driven planning and execution intelligence.
        </p>
        <p className="text-sm font-body italic text-teal mt-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "350ms" }}>
          Enterprise AI for Human Leadership.
        </p>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground text-center mb-14">Platform Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={f.title} className="bg-card border border-border/50 rounded-lg p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1 opacity-0 animate-fade-in-up" style={{ animationDelay: `${200 + i * 100}ms` }}>
              <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center mb-4 text-teal">{f.icon}</div>
              <h3 className="font-display text-lg font-semibold text-card-foreground mb-2">{f.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
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

export default AIKruise;
