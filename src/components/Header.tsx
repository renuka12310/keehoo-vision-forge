import { Link, useLocation, useNavigate } from "react-router-dom";
import { Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/about#contact", label: "Contact Us", isHash: true },
];

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleContactClick = (e: React.MouseEvent, to: string) => {
    e.preventDefault();
    if (location.pathname === "/about") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(to);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-teal/15 flex items-center justify-center">
            <Building2 className="w-4.5 h-4.5 text-teal" />
          </div>
          <span className="font-display text-lg font-semibold text-foreground">
            Keehoo
          </span>
        </Link>

        <nav className="flex items-center gap-8">
          {navLinks.map((link) =>
            link.isHash ? (
              <a
                key={link.label}
                href={link.to}
                onClick={(e) => handleContactClick(e, link.to)}
                className="font-body text-sm font-medium transition-colors duration-200 hover:text-teal text-muted-foreground cursor-pointer"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                className={cn(
                  "font-body text-sm font-medium transition-colors duration-200 hover:text-teal",
                  location.pathname === link.to
                    ? "text-teal"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
