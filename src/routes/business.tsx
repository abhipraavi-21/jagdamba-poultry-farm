import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Bird,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Egg,
  HeartPulse,
  LineChart,
  ShieldCheck,
  Sprout,
  Thermometer,
  Warehouse,
  Wheat,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/business")({
  head: () => ({
    meta: [
      { title: "Business - Jagdamba Poultry Farm" },
      {
        name: "description",
        content:
          "Discover Jagdamba Poultry Farm's stage-wise poultry business process, bird health standards, feeding system, and quality-focused production approach.",
      },
      { property: "og:title", content: "Business - Jagdamba Poultry Farm" },
      {
        property: "og:description",
        content:
          "A premium business page outlining Jagdamba Poultry Farm's poultry journey, farm values, and quality production system.",
      },
    ],
  }),
  component: BusinessPage,
});

const heroFocus = [
  {
    title: "Controlled Brooding",
    description: "Warm, stable early-stage care to support healthy chick growth from the start.",
    Icon: Thermometer,
  },
  {
    title: "Balanced Feed Planning",
    description: "Stage-wise nutrition management built around steady development and productivity.",
    Icon: Wheat,
  },
  {
    title: "Preventive Health Care",
    description: "Vaccination support, essential vitamins, and routine monitoring throughout the journey.",
    Icon: ShieldCheck,
  },
];

const businessHighlights = [
  {
    title: "Quality Bird Management",
    description:
      "Bird care is handled with close observation, responsible farm practices, and stage-specific attention.",
    Icon: Bird,
  },
  {
    title: "Scientific Feeding Process",
    description:
      "Each growth stage follows an appropriate feed plan to support structure, strength, and production readiness.",
    Icon: Wheat,
  },
  {
    title: "Vaccination & Health Care",
    description:
      "Preventive care and monitoring are built into the system to help maintain bird health consistently.",
    Icon: ShieldCheck,
  },
  {
    title: "Hygienic Farm Environment",
    description:
      "Clean surroundings, disciplined routines, and responsible hygiene practices help protect overall farm quality.",
    Icon: Warehouse,
  },
];

const processStages = [
  {
    title: "Chick Stage",
    duration: "0-6 Weeks",
    description:
      "We begin with premium BV 300 day-old chicks sourced from Venkey's. Chicks are raised under a controlled brooding temperature of 95 F and given chick crumb feed, vaccination support, and essential vitamins for healthy early growth.",
    Icon: Bird,
  },
  {
    title: "Grower Stage",
    duration: "6-8 Weeks",
    description:
      "Birds are gradually introduced to grower mash feed to support body growth, strength, and healthy development.",
    Icon: Wheat,
  },
  {
    title: "Developer Stage",
    duration: "8-12 Weeks",
    description:
      "At this stage, birds continue to build body structure and strength through proper nutrition, routine care, and health monitoring.",
    Icon: Sprout,
  },
  {
    title: "Pre-Layer Stage",
    duration: "12-16 Weeks",
    description:
      "Special pre-layer feed is introduced to prepare birds for the next phase and support reproductive readiness.",
    Icon: ClipboardCheck,
  },
  {
    title: "Layer Phase",
    duration: "18+ Weeks",
    description:
      "Birds enter the production phase and begin consistent quality egg output with balanced nutrition, hygiene, and continuous care.",
    Icon: Egg,
  },
];

const whyChooseUs = [
  {
    title: "Premium BV 300 Breed",
    description: "Strong breed selection helps create a healthy base for managed growth and dependable output.",
    Icon: Bird,
  },
  {
    title: "Scientific Feeding System",
    description: "Nutrition is introduced stage by stage to support growth, readiness, and production performance.",
    Icon: Wheat,
  },
  {
    title: "Proper Vaccination Care",
    description: "Preventive health care and routine support help maintain consistency throughout the farming cycle.",
    Icon: ShieldCheck,
  },
  {
    title: "Hygienic Farm Environment",
    description: "Farm cleanliness and process discipline remain central to protecting bird well-being.",
    Icon: Warehouse,
  },
  {
    title: "Consistent Egg Quality",
    description: "A structured poultry system supports reliable production with quality-focused attention at every stage.",
    Icon: Egg,
  },
];

const commitments = [
  {
    title: "Bird Health First",
    description:
      "We prioritize healthy growth through proper feeding, warmth, vaccination, and monitoring.",
    Icon: HeartPulse,
  },
  {
    title: "Clean & Disciplined Farming",
    description:
      "Farm hygiene and process discipline are central to maintaining productivity and quality.",
    Icon: ClipboardCheck,
  },
  {
    title: "Consistent Quality Output",
    description:
      "Our structured poultry management approach supports reliable and high-quality production.",
    Icon: LineChart,
  },
];

const stageHighlights = [
  { duration: "0-6 Weeks", label: "Chick Stage" },
  { duration: "6-8 Weeks", label: "Grower Stage" },
  { duration: "8-12 Weeks", label: "Developer Stage" },
  { duration: "18+ Weeks", label: "Production Phase" },
];

function BusinessPage() {
  const primaryActionClass =
    "inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:bg-primary-glow";
  const secondaryActionClass =
    "inline-flex items-center justify-center gap-2 rounded-full border border-primary/15 bg-white px-6 py-3.5 text-sm font-semibold text-primary shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary/5";

  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-cream bg-blobs">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(circle at 12% 18%, color-mix(in oklab, var(--accent) 18%, transparent), transparent 24%), radial-gradient(circle at 88% 16%, color-mix(in oklab, var(--primary) 16%, transparent), transparent 26%), linear-gradient(180deg, rgba(255,255,255,0.65), rgba(255,255,255,0.92))",
          }}
        />

        <div className="container-x relative py-16 sm:py-20 md:py-24 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center xl:gap-16">
            <Reveal>
              <nav className="mb-6 inline-flex flex-wrap items-center gap-2 rounded-full border border-white/80 bg-white/95 px-5 py-3 text-base text-primary shadow-elegant backdrop-blur sm:mb-7">
                <Link to="/" className="font-medium transition-colors hover:text-accent">
                  Home
                </Link>
                <span className="flex items-center gap-2 text-primary/45">
                  <ChevronRight className="h-4 w-4" />
                  <span className="font-semibold text-accent">Business</span>
                </span>
              </nav>

              <h1 className="max-w-3xl font-serif text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl md:text-6xl">
                Building Healthy Poultry, Delivering Quality Production
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                At Jagdamba Poultry Farm, we follow a carefully managed poultry farming
                system focused on bird health, scientific feeding, proper vaccination,
                and consistent quality production.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#process" className={primaryActionClass}>
                  Explore Our Process
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link to="/contact" className={secondaryActionClass}>
                  Contact Us
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {heroFocus.map((item, index) => (
                  <Reveal key={item.title} delay={0.08 + index * 0.08}>
                    <article className="h-full rounded-[28px] border border-white/70 bg-white/85 p-5 shadow-soft backdrop-blur transition-all hover:-translate-y-1 hover:shadow-elegant">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <item.Icon className="h-5 w-5" />
                      </span>
                      <h2 className="mt-4 font-serif text-xl font-bold text-foreground">
                        {item.title}
                      </h2>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {item.description}
                      </p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15} className="relative">
              <div className="absolute -left-8 top-10 h-24 w-24 rounded-full bg-accent/25 blur-3xl" />
              <div className="absolute -right-8 bottom-10 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />

              <div className="relative rounded-[34px] border border-white/75 bg-white/85 p-4 shadow-elegant backdrop-blur sm:p-6 lg:pb-24">
                <div className="rounded-[30px] border border-primary/10 bg-gradient-to-br from-white via-white to-primary/5 p-5 sm:p-7">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="max-w-xl">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                        Farm Operations Snapshot
                      </p>
                      <h2 className="mt-3 font-serif text-2xl font-bold leading-tight text-foreground sm:text-3xl">
                        A premium, stage-wise poultry management system built for healthy
                        growth and dependable production.
                      </h2>
                    </div>
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-soft">
                      <Egg className="h-6 w-6" />
                    </span>
                  </div>

                  <div className="mt-7 grid gap-4 sm:grid-cols-2">
                    {[
                      "Premium BV 300 day-old chicks",
                      "95 F controlled brooding support",
                      "Feed progression from chick to layer",
                      "Quality-focused production care",
                    ].map((point) => (
                      <div
                        key={point}
                        className="rounded-2xl border border-border bg-white p-4 shadow-soft"
                      >
                        <div className="flex items-start gap-3">
                          <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent/15 text-accent">
                            <CheckCircle2 className="h-4 w-4" />
                          </span>
                          <p className="text-sm font-medium leading-6 text-foreground/90">
                            {point}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 rounded-[28px] bg-primary p-5 text-primary-foreground shadow-soft sm:p-6">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                          Poultry Journey
                        </p>
                        <h3 className="mt-2 font-serif text-2xl font-bold">
                          Five carefully managed stages
                        </h3>
                      </div>
                      <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em]">
                        Health + Nutrition + Hygiene
                      </span>
                    </div>

                    <div className="mt-6 grid gap-3 sm:grid-cols-5">
                      {processStages.map((stage) => (
                        <div
                          key={stage.title}
                          className="rounded-2xl border border-white/5 p-3"
                        >
                          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                            {stage.duration}
                          </div>
                          <div className="mt-2 text-sm font-semibold leading-5">
                            {stage.title}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 w-full rounded-[24px] border border-border bg-white p-4 shadow-soft sm:mt-5 sm:max-w-[320px] sm:p-5 lg:absolute lg:bottom-6 lg:right-6 lg:mt-0 lg:max-w-[280px]">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent text-accent-foreground shadow-soft">
                      <ShieldCheck className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                        Quality Promise
                      </p>
                      <p className="mt-1 text-sm font-semibold text-foreground">
                        Managed with discipline from chick care to layer performance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-x py-16 sm:py-20 md:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start xl:gap-14">
          <Reveal className="rounded-[32px] border border-border bg-primary p-7 text-primary-foreground shadow-elegant sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
              Business Foundation
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold sm:text-4xl">
              About Jagdamba Poultry Farm
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/80 sm:text-base">
              Jagdamba Poultry Farm is committed to raising healthy birds through a
              stage-wise and scientifically managed poultry farming process. From
              selecting premium day-old chicks to maintaining feed quality, brooding
              conditions, vaccination care, and egg production readiness, we focus on
              every step with responsibility and precision. Our goal is to ensure bird
              well-being, farm hygiene, and consistent quality output.
            </p>

            <div className="mt-8 grid gap-3">
              {[
                "Carefully managed growth from brooding to production",
                "Practical discipline across nutrition, hygiene, and health care",
                "Business-focused consistency rooted in responsible farm operations",
              ].map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <p className="text-sm leading-6 text-white/85">{point}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                What We Do
              </p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">
                A professional poultry business focused on care, structure, and quality.
              </h2>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {businessHighlights.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.08}>
                  <article className="group h-full rounded-[28px] border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1.5 hover:shadow-elegant">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <item.Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 font-serif text-2xl font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="scroll-mt-24 bg-cream py-16 sm:py-20 md:py-24">
        <div className="container-x">
          <Reveal className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
              Our Poultry Journey
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
              Our Poultry Journey
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
              From day-old chicks to quality egg production, every stage is managed with
              care, nutrition, and health-focused practices.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.84fr_1.16fr] xl:gap-12">
            <Reveal className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-[32px] border border-border bg-white p-6 shadow-elegant sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                  Stage-Wise System
                </p>
                <h3 className="mt-4 font-serif text-3xl font-bold text-foreground">
                  Every phase supports the next.
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                  Healthy poultry production depends on timing, nutrition, warmth, care,
                  and discipline at every stage. Our business process is designed to keep
                  those priorities aligned throughout the farm cycle.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    "Premium chick selection and stable brooding support",
                    "Feed progression matched to development needs",
                    "Routine monitoring, vaccination care, and hygiene discipline",
                  ].map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-3 rounded-2xl bg-cream px-4 py-3"
                    >
                      <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <CheckCircle2 className="h-4 w-4" />
                      </span>
                      <p className="text-sm leading-6 text-foreground/85">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <div className="relative">
              <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-primary/20 via-primary/45 to-accent/30 sm:block" />

              <div className="space-y-5 sm:space-y-6">
                {processStages.map((stage, index) => (
                  <Reveal key={stage.title} delay={index * 0.06}>
                    <div className="relative sm:pl-16">
                      <span className="absolute left-0 top-6 hidden h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-white text-sm font-semibold text-primary shadow-soft sm:inline-flex">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <article className="group rounded-[30px] border border-border bg-white p-6 shadow-soft transition-all hover:-translate-y-1.5 hover:shadow-elegant sm:p-7">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                          <div className="flex items-start gap-4">
                            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                              <stage.Icon className="h-6 w-6" />
                            </span>
                            <div>
                              <span className="inline-flex rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                                {stage.duration}
                              </span>
                              <h3 className="mt-3 font-serif text-2xl font-bold text-foreground sm:text-[1.75rem]">
                                {stage.title}
                              </h3>
                            </div>
                          </div>
                          <span className="text-sm font-semibold uppercase tracking-[0.16em] text-primary/70">
                            Stage {index + 1}
                          </span>
                        </div>

                        <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">
                          {stage.description}
                        </p>
                      </article>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-16 sm:py-20 md:py-24">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
            Why Choose Us
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">
            Why Choose Jagdamba Poultry Farm?
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
            We combine experience, care, and a disciplined poultry management system to
            maintain farm quality and productivity.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {whyChooseUs.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="group h-full rounded-[28px] border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1.5 hover:shadow-elegant">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <item.Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-serif text-2xl font-bold text-foreground xl:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-primary py-16 text-primary-foreground sm:py-20 md:py-24">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.16), transparent 22%), radial-gradient(circle at 80% 0%, rgba(255,255,255,0.14), transparent 20%), linear-gradient(180deg, transparent, rgba(255,255,255,0.04))",
          }}
        />

        <div className="container-x relative">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
              Business Values
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">
              Our commitment stays practical, disciplined, and quality-driven.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {commitments.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <article className="h-full rounded-[30px] border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors hover:bg-white/10 sm:p-8">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground shadow-soft">
                    <item.Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-serif text-2xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/80 sm:text-base">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/55">
        <div className="container-x grid gap-4 py-10 sm:grid-cols-2 sm:py-12 lg:grid-cols-4">
          {stageHighlights.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.06}>
              <article className="rounded-[26px] border border-border bg-white p-5 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Business Highlight
                </p>
                <div className="mt-4 font-serif text-3xl font-bold text-foreground">
                  {item.duration}
                </div>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.label}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x py-16 sm:py-20 md:py-24">
        <Reveal className="relative overflow-hidden rounded-[36px] border border-border bg-gradient-to-br from-white via-cream to-primary/5 p-8 shadow-elegant sm:p-10 md:p-12">
          <div className="absolute -left-10 top-10 h-28 w-28 rounded-full bg-accent/15 blur-3xl" />
          <div className="absolute -right-10 bottom-8 h-36 w-36 rounded-full bg-primary/12 blur-3xl" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                Let's Connect
              </p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
                Want to Know More About Our Farm Business?
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
                Connect with Jagdamba Poultry Farm to learn more about our poultry
                farming process, business values, and quality-focused approach.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className={primaryActionClass}>
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/about" className={secondaryActionClass}>
                View More Details
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}

export default BusinessPage;
