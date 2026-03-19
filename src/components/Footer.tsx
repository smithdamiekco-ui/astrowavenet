import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { Phone, MapPin, Mail } from "lucide-react";
import logo from "@/assets/astrowave-logo.png";

const Footer = forwardRef<HTMLElement>((_, ref) => {
  return (
    <footer ref={ref} className="border-t border-border bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Astrowave TV Net" className="h-8 w-8" />
              <span className="text-lg font-bold tracking-tight text-foreground">
                Astro<span className="text-primary">wave</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Delivering reliable high-speed internet & TV to homes and businesses across all 50 states.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Navigation</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "Plans & Pricing", to: "/plans" },
                { label: "Contact & Support", to: "/contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Legal</h4>
            <ul className="space-y-2">
              {[
                { label: "Privacy Policy", to: "/privacy-policy" },
                { label: "Terms & Conditions", to: "/terms" },
                { label: "Disclaimer", to: "/disclaimer" },
                { label: "Refund Policy", to: "/refund-policy" },
                { label: "Advertising Disclosure", to: "/advertising-disclosure" },
                { label: "Cookies Policy", to: "/cookies-policy" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <a href="tel:+18882537498" className="hover:text-primary transition-colors font-mono">
                  (888) 253-7498
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span>405 Lomen Ave<br />Nome, Alaska 99762</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <a href="mailto:info@astrowavetvnet.com" className="hover:text-primary transition-colors">
                  info@astrowavetvnet.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 pt-6 border-t border-border">
          <p className="text-[11px] text-muted-foreground/70 leading-relaxed max-w-4xl">
            Disclaimer: All prices, speeds, and channel counts shown are subject to change and may vary by location.
            Internet speeds represent maximum download speeds under ideal conditions; actual speeds may vary.
            Taxes, fees, and equipment charges may apply. Service availability is not guaranteed in all areas.
            Contact us at (888) 253-7498 for details. Astrowave TV Net is operated by Steve Alexander Lopez.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Astrowave TV Net. All rights reserved. Owner: Steve Alexander Lopez
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
});
Footer.displayName = "Footer";

export default Footer;
