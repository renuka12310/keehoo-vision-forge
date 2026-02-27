import { DDHero, DDEcosystem } from "@/components/digidevalaya/DDHeroEcosystem";
import DDTempleServices from "@/components/digidevalaya/DDTempleServices";
import DDDevoteeServices from "@/components/digidevalaya/DDDevoteeServices";
import DDServiceProviders from "@/components/digidevalaya/DDServiceProviders";
import Header from "@/components/Header";

const DigiDevalaya = () => {
  return (
    <main className="relative">
      <Header />

      <DDHero />
      <DDEcosystem />
      <DDTempleServices />
      <DDDevoteeServices />
      <DDServiceProviders />

      {/* Footer */}
      <footer className="bg-slate-surface py-12 text-center">
        <p className="text-xs text-charcoal/40 font-body tracking-wide">
          © {new Date().getFullYear()} DigiDevalaya — A Keehoo Technology Group Venture
        </p>
      </footer>
    </main>
  );
};

export default DigiDevalaya;
