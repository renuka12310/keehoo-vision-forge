import {
  Building2, BookOpen, CalendarCheck, Heart, ChefHat, Package, 
  Warehouse, Users, UserCheck, Calendar, GitBranch, Library,
  Megaphone, ShieldCheck, BarChart3, Settings, Sparkles
} from "lucide-react";

interface ServiceItemProps {
  icon: React.ReactNode;
  title: string;
  badges?: string[];
}

const ServiceItem = ({ icon, title, badges = [] }: ServiceItemProps) => (
  <div className="group flex items-start gap-4 p-4 rounded-lg hover:bg-saffron/5 transition-colors duration-200">
    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-saffron/10 text-saffron flex items-center justify-center group-hover:bg-saffron/20 transition-colors">
      {icon}
    </div>
    <div className="flex-1 min-w-0">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-sm font-medium text-charcoal font-body">{title}</span>
        {badges.map((b) => (
          <span key={b} className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-saffron/10 text-saffron font-body">
            {b}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const templeServices: ServiceItemProps[] = [
  { icon: <Building2 className="w-5 h-5" />, title: "Temple Structure" },
  { icon: <BookOpen className="w-5 h-5" />, title: "Rituals & Darshan" },
  { icon: <CalendarCheck className="w-5 h-5" />, title: "Booking Management" },
  { icon: <Heart className="w-5 h-5" />, title: "Donation Management" },
  { icon: <ChefHat className="w-5 h-5" />, title: "Prasadam & Kitchen", badges: ["Soon"] },
  { icon: <Package className="w-5 h-5" />, title: "Stock & Inventory", badges: ["AI Premium"] },
  { icon: <Warehouse className="w-5 h-5" />, title: "Asset Management", badges: ["AI Premium"] },
  { icon: <Users className="w-5 h-5" />, title: "Devotee Management" },
  { icon: <UserCheck className="w-5 h-5" />, title: "Volunteer & HR" },
  { icon: <Calendar className="w-5 h-5" />, title: "Events & Planning" },
  { icon: <GitBranch className="w-5 h-5" />, title: "Branch & Governance" },
  { icon: <Library className="w-5 h-5" />, title: "Knowledge", badges: ["AI Premium"] },
  { icon: <Megaphone className="w-5 h-5" />, title: "PR & Communications" },
  { icon: <ShieldCheck className="w-5 h-5" />, title: "Crowd Management", badges: ["AI Premium"] },
  { icon: <BarChart3 className="w-5 h-5" />, title: "Feedback & Analytics" },
  { icon: <Settings className="w-5 h-5" />, title: "Settings & Config" },
];

const DDTempleServices = () => (
  <section className="bg-navy-deep py-24 relative overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-saffron/30 to-transparent" />
    <div className="container mx-auto px-6">
      <div className="text-center mb-4">
        <span className="text-xs font-body font-semibold uppercase tracking-[0.2em] text-saffron">For Temple Management</span>
      </div>
      <h2 className="font-display text-3xl lg:text-4xl font-semibold text-foreground text-center mb-3">Temple Services</h2>
      <p className="text-center text-muted-foreground font-body max-w-2xl mx-auto mb-14 text-sm leading-relaxed">
        A comprehensive suite to manage every aspect of your temple — from rituals and donations to governance and analytics.
      </p>
      <div className="max-w-5xl mx-auto bg-card rounded-xl p-6 md:p-8 card-shadow">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
          {templeServices.map((s) => (
            <ServiceItem key={s.title} {...s} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default DDTempleServices;
