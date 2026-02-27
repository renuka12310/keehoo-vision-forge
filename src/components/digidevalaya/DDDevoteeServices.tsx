import {
  Heart, CalendarCheck, Globe, BookOpen, Video, ShoppingBag
} from "lucide-react";

interface DevoteeItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const DevoteeItem = ({ icon, title, description }: DevoteeItemProps) => (
  <div className="group p-6 rounded-lg bg-card card-shadow hover:card-shadow-hover hover:-translate-y-0.5 transition-all duration-400">
    <div className="w-10 h-10 rounded-lg bg-saffron/10 text-saffron flex items-center justify-center mb-4 group-hover:bg-saffron/20 transition-colors">
      {icon}
    </div>
    <h4 className="text-sm font-semibold text-charcoal font-body mb-1.5">{title}</h4>
    <p className="text-xs text-card-foreground/60 font-body leading-relaxed">{description}</p>
  </div>
);

const devoteeItems: DevoteeItemProps[] = [
  { icon: <Heart className="w-5 h-5" />, title: "Donations", description: "Contribute to your temple's mission and nurture community well-being." },
  { icon: <CalendarCheck className="w-5 h-5" />, title: "Pooja Booking", description: "Book special poojas and ceremonies for your family's spiritual well-being." },
  { icon: <Globe className="w-5 h-5" />, title: "Metaverse Experience", description: "Visit the temple virtually with family and friends — well-being from anywhere." },
  { icon: <BookOpen className="w-5 h-5" />, title: "Knowledge & Values", description: "Learn sacred scriptures and traditions to enrich your well-being." },
  { icon: <Video className="w-5 h-5" />, title: "Live Darshan", description: "Watch live temple darshan for peace and well-being at home." },
  { icon: <ShoppingBag className="w-5 h-5" />, title: "Buy from Service Providers", description: "Shop sacred products from trusted service provider stores for your family's well-being." },
];

const DDDevoteeServices = () => (
  <section className="bg-slate-surface py-24">
    <div className="container mx-auto px-6">
      <div className="text-center mb-4">
        <span className="text-xs font-body font-semibold uppercase tracking-[0.2em] text-saffron">For Devotees & Families</span>
      </div>
      <h2 className="font-display text-3xl lg:text-4xl font-semibold text-charcoal text-center mb-3">Devotee Services</h2>
      <p className="text-center text-charcoal/60 font-body max-w-2xl mx-auto mb-14 text-sm leading-relaxed">
        Stay connected to your faith — donate, book, learn, and experience darshan. Everything for your spiritual well-being.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {devoteeItems.map((item) => (
          <DevoteeItem key={item.title} {...item} />
        ))}
      </div>
    </div>
  </section>
);

export default DDDevoteeServices;
