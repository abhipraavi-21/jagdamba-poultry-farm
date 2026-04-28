import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageHero({
  title,
  subtitle,
  crumbs = [],
  image,
}: {
  title: string;
  subtitle?: string;
  crumbs?: { label: string; to?: string }[];
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-hero-gradient text-primary-foreground">
      {image && (
        <>
          <img
            src={image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover ken-burns"
            width={1920}
            height={720}
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
        </>
      )}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, white 0, transparent 40%), radial-gradient(circle at 80% 80%, white 0, transparent 35%)",
        }}
      />
      <div className="container-x relative py-12 sm:py-16 md:py-24">
        <nav className="mb-3 flex flex-wrap items-center gap-1.5 text-[11px] leading-5 opacity-90 animate-[fade-in_0.5s_ease-out] sm:mb-4 sm:text-sm">
          <Link to="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5" />
              {c.to ? (
                <Link to={c.to} className="hover:text-accent">
                  {c.label}
                </Link>
              ) : (
                <span className="text-accent">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
        <h1 className="font-serif text-[clamp(2rem,7.5vw,4.75rem)] font-bold leading-[1.05] animate-[fade-up_0.6s_ease-out] drop-shadow-sm">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-xl text-sm leading-6 opacity-95 animate-[fade-up_0.7s_ease-out_0.1s_backwards] sm:text-base md:text-lg md:leading-8">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
