import {
  Store, Globe, CreditCard, Package, Warehouse, Users, Calendar, Megaphone
} from "lucide-react";

interface SPItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  badges?: string[];
}

const SPItem = ({ icon, title, description, badges = [] }: SPItemProps) => (
  <div className="group p-6 rounded-lg bg-card card-shadow hover:card-shadow-hover hover:-translate-y-0.5 transition-all duration-400">
    <div className="w-10 h-10 rounded-lg bg-saffron/10 text-saffron flex items-center justify-center mb-4 group-hover:bg-saffron/20 transition-colors">
      {icon}
    </div>
    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
      <h4 className="text-sm font-semibold text-charcoal font-body">{title}</h4>
      {badges.map((b) => (
        <span key={b} className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-saffron/10 text-saffron font-body">
          {b}
        </span>
      ))}
    </div>
    <p className="text-xs text-card-foreground/60 font-body leading-relaxed">{description}</p>
  </div>
);

const spItems: SPItemProps[] = [
  { icon: <Store className="w-5 h-5" />, title: "Online Store & Service Catalogue", description: "Set up your store and showcase services that support family well-being." },
  { icon: <Globe className="w-5 h-5" />, title: "Web Page & Profile", description: "Create your professional web presence to attract devotees seeking well-being services." },
  { icon: <CreditCard className="w-5 h-5" />, title: "Accept Payments", description: "Receive payments digitally from devotees and temples for your well-being services." },
  { icon: <Package className="w-5 h-5" />, title: "Stock Management", description: "Track and manage your inventory of well-being products with ease.", badges: ["AI Premium"] },
  { icon: <Warehouse className="w-5 h-5" />, title: "Asset Management", description: "Manage your business assets and grow your well-being offerings.", badges: ["AI Premium"] },
  { icon: <Users className="w-5 h-5" />, title: "CRM", description: "Manage your devotee relationships for personalized well-being services." },
  { icon: <Calendar className="w-5 h-5" />, title: "Personal Calendar Management", description: "Organize your schedule and appointments for seamless well-being service delivery." },
  { icon: <Megaphone className="w-5 h-5" />, title: "PR & Communications", description: "Promote your well-being services and connect with the temple community." },
];

const DDServiceProviders = () => (
  <section className="bg-navy-deep py-24 relative overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-saffron/30 to-transparent" />
    <div className="container mx-auto px-6">
      <div className="text-center mb-4">
        <span className="text-xs font-body font-semibold uppercase tracking-[0.2em] text-saffron">For Service Providers & Vendors</span>
      </div>
      <h2 className="font-display text-3xl lg:text-4xl font-semibold text-foreground text-center mb-3">Service Provider Services</h2>
      <p className="text-center text-muted-foreground font-body max-w-2xl mx-auto mb-14 text-sm leading-relaxed">
        Grow your sacred business — sell products for family well-being, manage inventory, and connect with the temple community.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {spItems.map((item) => (
          <SPItem key={item.title} {...item} />
        ))}
      </div>
    </div>
  </section>
);

export default DDServiceProviders;
