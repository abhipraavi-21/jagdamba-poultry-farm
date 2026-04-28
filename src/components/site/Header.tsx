import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/site/BrandMark";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/business", label: "Business" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

const GALLERY_MENU = [
  {
    label: "Photos",
    to: "/gallery",
    description: "Farm and facility images",
  },
  {
    label: "Videos",
    to: "/gallery/videos",
    description: "Farm clips and updates",
  },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { location } = useRouterState();
  const isGalleryActive = location.pathname.startsWith("/gallery");
  const isVideosActive = location.pathname === "/gallery/videos";
  const isPhotosActive = location.pathname === "/gallery";

  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-lg shadow-soft" : "bg-background/60 backdrop-blur-md"
      }`}
    >
      <div className="container-x flex min-h-[74px] items-center justify-between py-2 sm:min-h-[88px]">
        <Link
          to="/"
          className="group shrink-0 rounded-2xl"
          aria-label="Jagdamba Poultry Farms home"
        >
          <BrandLogo
            className="w-[88px] transition-transform group-hover:scale-[1.02] sm:w-[116px] lg:w-[124px]"
            loading="eager"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => {
            if (item.to !== "/gallery") {
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className="relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                  activeProps={{ className: "text-primary" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      <span
                        className={`absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-accent transition-transform duration-300 ${
                          isActive ? "scale-x-100" : "scale-x-0"
                        }`}
                      />
                    </>
                  )}
                </Link>
              );
            }

            return (
              <div key={item.to} className="group relative">
                <Link
                  to="/gallery"
                  className={`relative inline-flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${
                    isGalleryActive ? "text-primary" : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180" />
                  <span
                    className={`absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-accent transition-transform duration-300 ${
                      isGalleryActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100 group-focus-within:scale-x-100"
                    }`}
                  />
                </Link>

                <div className="absolute left-1/2 top-full z-20 w-60 -translate-x-1/2 pt-3">
                  <div className="pointer-events-none translate-y-2 rounded-[24px] border border-border/70 bg-background/95 p-2 opacity-0 shadow-elegant backdrop-blur-md transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    {GALLERY_MENU.map((menuItem) => {
                      const isActive = menuItem.to === "/gallery/videos" ? isVideosActive : isPhotosActive;

                      return (
                        <Link
                          key={menuItem.to}
                          to={menuItem.to}
                          className={`block rounded-[18px] px-4 py-3 transition-colors ${
                            isActive ? "bg-primary/8 text-primary" : "text-foreground/80 hover:bg-primary/5 hover:text-primary"
                          }`}
                        >
                          <p className="text-sm font-semibold">{menuItem.label}</p>
                          <p className="mt-1 text-xs text-foreground/60">{menuItem.description}</p>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft hover:bg-primary-glow transition-all hover:-translate-y-0.5"
          >
            Get in Touch
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-primary"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-[fade-in_0.2s_ease-out]">
          <nav className="container-x flex flex-col py-3">
            {NAV.map((item) => {
              if (item.to !== "/gallery") {
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="px-2 py-3 text-base font-medium text-foreground/85 hover:text-primary"
                    activeProps={{ className: "text-primary" }}
                    activeOptions={{ exact: item.to === "/" }}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div key={item.to} className="flex flex-col">
                  <Link
                    to="/gallery"
                    className={`px-2 py-3 text-base font-medium transition-colors ${
                      isGalleryActive ? "text-primary" : "text-foreground/85 hover:text-primary"
                    }`}
                  >
                    Gallery
                  </Link>
                  <div className="mb-2 ml-4 flex flex-col border-l border-border/70 pl-4">
                    {GALLERY_MENU.map((menuItem) => (
                      <Link
                        key={menuItem.to}
                        to={menuItem.to}
                        className="py-2 text-sm font-medium text-foreground/70 hover:text-primary"
                      >
                        {menuItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
            <Link
              to="/contact"
              className="mt-3 mb-2 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
