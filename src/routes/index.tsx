import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Drumstick,
  Sprout,
  Users,
  TrendingUp,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { CountUp } from "@/components/site/CountUp";
import heroFarm from "@/assets/hero-farm.jpg";
import heroFarmer from "@/assets/hero-farmer.jpg";
import heroProducts from "@/assets/hero-products.jpg";
import poultry from "@/assets/poultry.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jagdamba Poultry Farms - Feeding the Future" },
      { name: "description", content: "Integrated poultry solutions: farming, feed, hatchery, processing & distribution. Partner with India's trusted poultry brand." },
      { property: "og:title", content: "Jagdamba Poultry Farms - Feeding the Future" },
      { property: "og:description", content: "Integrated poultry solutions: farming, feed, hatchery, processing & distribution." },
      { property: "og:image", content: heroFarm },
      { name: "twitter:image", content: heroFarm },
    ],
  }),
  component: HomePage,
});

const SLIDES = [
  {
    img: heroFarm,
    eyebrow: "Modern Integrated Farming",
    title: "Feeding the Future with Integrated Poultry Solutions",
    desc: "Three decades of trust, technology and farmer-first growth across 25+ Indian states.",
  },
  {
    img: heroFarmer,
    eyebrow: "Empowering Farmers",
    title: "Growing Together. Earning Together.",
    desc: "Join 50,000+ farmers under our contract farming and buy-back guarantee program.",
  },
  {
    img: heroProducts,
    eyebrow: "From Farm to Plate",
    title: "Premium Quality, Delivered Fresh.",
    desc: "Hygienic processing, world-class packaging and reliable distribution.",
  },
];

function HomePage() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <SiteLayout>
      {/* HERO CAROUSEL */}
      <section className="relative h-[82svh] min-h-[500px] w-full overflow-hidden bg-primary sm:h-[86svh] sm:min-h-[560px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img src={SLIDES[index].img} alt="" className="h-full w-full object-cover ken-burns" width={1920} height={1080} />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/55 to-primary/20" />
          </motion.div>
        </AnimatePresence>

        <div className="container-x relative z-10 flex h-full items-end pb-20 pt-24 sm:items-center sm:pb-0 sm:pt-0">
          <div className="max-w-2xl text-primary-foreground">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="inline-block rounded-full bg-accent/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent-foreground sm:px-4 sm:py-1.5 sm:text-xs sm:tracking-widest">
                  {SLIDES[index].eyebrow}
                </span>
                <h1 className="mt-4 font-serif text-3xl font-bold leading-[1.08] sm:mt-5 sm:text-5xl sm:leading-[1.05] lg:text-6xl xl:text-7xl">
                  {SLIDES[index].title}
                </h1>
                <p className="mt-4 max-w-xl text-sm opacity-90 sm:mt-5 sm:text-lg">{SLIDES[index].desc}</p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
              <Link
                to="/about"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-elegant transition-all hover:-translate-y-0.5 sm:w-auto sm:py-3.5"
              >
                Discover Our Story <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/gallery"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white hover:text-primary sm:w-auto sm:py-3.5"
              >
                View Gallery
              </Link>
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2 sm:bottom-8">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? "w-10 bg-accent" : "w-6 bg-white/50 hover:bg-white/80"}`}
            />
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 right-6 z-10 hidden md:flex flex-col items-center gap-2 text-white/80 bounce-soft">
          <span className="text-[10px] uppercase tracking-[0.25em] [writing-mode:vertical-rl] rotate-180">Scroll</span>
          <span className="h-10 w-px bg-white/60" />
        </div>
      </section>

      {/* STATS */}
      <section className="bg-cream border-y border-border bg-blobs overflow-hidden">
        <div className="container-x relative grid grid-cols-2 gap-4 py-10 sm:gap-6 sm:py-14 md:grid-cols-4">
          {[
            { num: 10, suffix: "k", label: "Partner Farmers", Icon: Users },
            { num: 5, suffix: "+", label: "States & Locations", Icon: TrendingUp },
            { num: 1000000, suffix: "+", label: "Daily Production Capacity", Icon: Drumstick },
            { num: 17, suffix: "", label: "Years of Trust", Icon: Sprout },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center group">
              <div className="mx-auto mb-3 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                <s.Icon className="h-6 w-6" />
              </div>
              <div className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
                <CountUp to={s.num} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* INNOVATION */}
      <section className="container-x py-16 sm:py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <Reveal>
            <div className="relative hover-zoom-img">
              <img src={poultry} alt="Modern poultry shed interior" className="rounded-2xl shadow-elegant w-full h-auto" width={1280} height={896} loading="lazy" />
              <div className="absolute -bottom-6 -right-6 hidden md:block rounded-2xl bg-accent text-accent-foreground p-6 shadow-elegant max-w-[220px] float">
                <div className="font-serif text-3xl font-bold"><CountUp to={99} suffix=".7%" /></div>
                <div className="text-xs uppercase tracking-wider mt-1">Biosecurity Compliance</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-accent text-sm font-semibold uppercase tracking-widest">Innovation</p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl font-bold">Where Tradition Meets Technology.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              IoT-monitored sheds, climate-controlled hatcheries and AI-driven feed formulation
              help us deliver consistent quality at scale - while keeping our farmers at the
              centre of everything we do.
            </p>
            <ul className="mt-6 space-y-3">
              {["Climate-controlled environments", "AI-driven feed efficiency", "Blockchain-tracked supply chain", "24x7 vet support for partners"].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent shrink-0" />
                  <span className="text-foreground/85">{t}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-glow transition-colors">
              Discover Our Story <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
