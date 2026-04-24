import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { BrandLogo } from "@/components/site/BrandMark";

const SOCIAL_LINKS = [
  { Icon: Facebook, label: "Facebook", href: "#" },
  { Icon: Instagram, label: "Instagram", href: "#" },
  { Icon: Youtube, label: "YouTube", href: "#" },
  {
    Icon: MapPin,
    label: "Location",
    href: "https://maps.app.goo.gl/6ShzPYzyq64YviGAA",
  },
] as const;

export function Footer() {
  return (
    <footer className="mt-20 bg-primary text-primary-foreground">
      <div className="container-x grid gap-6 py-9 md:grid-cols-2 md:py-10 lg:grid-cols-4 lg:py-11">
        <div className="max-w-sm">
          <Link
            to="/"
            aria-label="Jagdamba Poultry Farms home"
            className="group inline-flex rounded-[24px] bg-white px-2.5 py-2 shadow-[0_20px_45px_-28px_rgba(0,0,0,0.65)] ring-1 ring-black/8 transition-transform hover:-translate-y-0.5 sm:px-3 sm:py-2.5"
          >
            <BrandLogo
              className="w-[82px] transition-transform group-hover:scale-[1.02] sm:w-[96px] lg:w-[104px]"
              loading="eager"
            />
          </Link>
          <p className="mt-3 max-w-sm text-sm leading-normal opacity-80">
            Integrated poultry solutions empowering farmers, distributors and communities across India.
          </p>
          <div className="mt-3 flex gap-2.5">
            {SOCIAL_LINKS.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-accent transition-colors"
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-2.5">Quick Links</h4>
          <ul className="space-y-1.5 text-sm opacity-85">
            <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
            <li><Link to="/business" className="hover:text-accent transition-colors">Business</Link></li>
            <li><Link to="/gallery" className="hover:text-accent transition-colors">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-2.5">Highlights</h4>
          <ul className="space-y-1.5 text-sm opacity-85">
            <li>Farmer partnerships</li>
            <li>Fresh poultry supply</li>
            <li>Quality assurance</li>
            <li>Community growth</li>
            <li>Reliable delivery</li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-2.5">Get in Touch</h4>
          <ul className="space-y-2 text-sm opacity-85">
            <li className="flex gap-2.5">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              <span className="break-words">Theur Naigaon Road, Haveli, Pune 412110</span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="h-4 w-4 mt-0.5 shrink-0" />
              <a href="tel:+917387809229" className="break-words hover:text-accent transition-colors">+91 73878 09229</a>
            </li>
            <li className="flex gap-2.5">
              <Mail className="h-4 w-4 mt-0.5 shrink-0" />
              <div className="flex flex-col gap-1">
                <a href="mailto:hello@jagdambapoultry.in" className="hover:text-accent transition-colors break-all">hello@jagdambapoultry.in</a>
                <a href="mailto:Gpf9292@gmail.com" className="hover:text-accent transition-colors break-all">Gpf9292@gmail.com</a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex items-center justify-center py-3 text-center text-xs opacity-75">
          <p>Copyright {new Date().getFullYear()} Jagdamba Poultry Farms. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
