import { createFileRoute } from "@tanstack/react-router";
import { Award, HeartHandshake, ShieldCheck, Sprout, Users } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import farm from "@/assets/hero-farm.jpg";
import aboutPhoto from "@/assets/about-photo.webp";
import breadcrumbAbout from "@/assets/breadcrumb-about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Jagdamba Poultry Farms" },
      { name: "description", content: "Three decades of integrated poultry leadership, farmer empowerment and innovation across India." },
      { property: "og:title", content: "About Jagdamba Poultry Farms" },
      { property: "og:description", content: "Three decades of integrated poultry leadership across India." },
      { property: "og:image", content: farm },
    ],
  }),
  component: AboutPage,
});

const TIMELINE = [
  {
    year: "2009",
    title: "Humble Beginning",
    desc: "We started our poultry journey with 50,000 birds on a 6-acre farm, laying the foundation with a focus on quality farming practices and operational discipline.",
  },
  {
    year: "2013",
    title: "First Major Expansion",
    desc: "Within just a few years, we scaled our operations to 80,000 birds, strengthening our infrastructure and improving farm efficiency.",
  },
  {
    year: "2017",
    title: "Reaching New Milestones",
    desc: "Our continuous growth led us to cross the 1,00,000 birds mark, establishing ourselves as a reliable and growing poultry business in the region.",
  },
  {
    year: "2026",
    title: "Scaling Towards the Future",
    desc: "Today, we proudly operate at a capacity of 1,50,000 birds, with a vision to expand further while maintaining high standards of hygiene, nutrition, and sustainability.",
  },
];

const STORY_HIGHLIGHTS = [
  {
    Icon: Sprout,
    title: "Balanced Nutrition",
    desc: "Scientifically planned feed and clean water help birds grow uniformly and stay strong.",
  },
  {
    Icon: ShieldCheck,
    title: "Biosecure Care",
    desc: "Routine hygiene, vaccination and daily monitoring reduce risk and protect flock health.",
  },
  {
    Icon: Users,
    title: "Farmer Partnerships",
    desc: "Practical support and dependable operations help our partners grow with confidence.",
  },
  {
    Icon: Award,
    title: "Reliable Quality",
    desc: "Disciplined shed management keeps poultry production consistent as we expand.",
  },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        title="Rooted in Trust. Driven by Innovation."
        subtitle="From a single shed to one of India's most respected integrated poultry brands."
        crumbs={[{ label: "About" }]}
        image={breadcrumbAbout}
      />

      {/* STORY */}
      <section className="container-x py-16 sm:py-20 md:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-12">
          <Reveal className="h-full">
            <div className="relative h-full overflow-hidden rounded-[32px] shadow-elegant lg:min-h-[540px]">
              <img
                src={aboutPhoto}
                alt="Jagdamba poultry farm shed"
                className="h-full w-full object-cover object-center"
                width={1600}
                height={1200}
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/85 via-primary/40 to-transparent p-5 text-primary-foreground sm:p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
                  Inside Our Farm
                </p>
                <p className="mt-2 max-w-md text-sm leading-6 text-white/90">
                  Purpose-built sheds, disciplined care and steady flock monitoring
                  create the foundation for healthy poultry production.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="h-full">
            <article className="flex h-full flex-col justify-center rounded-[32px] border border-border bg-white/90 p-6 shadow-soft backdrop-blur sm:p-8 lg:min-h-[540px]">
              <p className="text-accent text-sm font-semibold uppercase tracking-widest">
                Our Story
              </p>
              <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">
                A Legacy Built on Farmer Trust
              </h2>
              <p className="mt-5 text-justify leading-relaxed text-muted-foreground">
                Jagdamba Poultry Farm focuses on raising birds in a clean, well-managed
                environment where housing, feed, and farm discipline work together for
                consistent results.
              </p>
              <p className="mt-4 text-justify leading-relaxed text-muted-foreground">
                From shed ventilation to vaccination schedules, every stage of our
                poultry operation is designed to support bird health, reliable output,
                and long-term farmer confidence as we continue to grow.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {STORY_HIGHLIGHTS.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-border bg-primary/[0.03] p-4"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <item.Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-3 text-sm font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <div className="rounded-2xl bg-primary/6 px-4 py-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary/75">
                    Capacity
                  </p>
                  <p className="mt-1 font-serif text-xl font-bold text-primary">
                    1,50,000 Birds
                  </p>
                </div>
                <div className="rounded-2xl bg-accent/10 px-4 py-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                    Farm Footprint
                  </p>
                  <p className="mt-1 font-serif text-xl font-bold text-foreground">
                    6 Acre Campus
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-cream py-16 sm:py-20 md:py-24">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest">Milestones</p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold">A Journey of Growth</h2>
          </Reveal>

          <div className="relative mt-10 sm:mt-14">
            <div className="absolute top-0 bottom-0 left-3.5 w-0.5 bg-border sm:left-4 md:left-1/2 md:-translate-x-1/2" />
            <div className="space-y-8 sm:space-y-10">
              {TIMELINE.map((item, i) => (
                <Reveal key={item.year} delay={i * 0.05}>
                  <div className={`relative flex gap-4 sm:gap-6 md:items-center ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className="pl-10 sm:pl-12 md:w-1/2 md:pl-0 md:px-8">
                      <div className="rounded-2xl border border-border bg-card p-4 shadow-soft transition-shadow hover:shadow-elegant sm:p-6">
                        <div className="font-serif text-2xl font-bold text-accent">{item.year}</div>
                        <h3 className="font-serif text-lg font-bold mt-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
                      </div>
                    </div>
                    <div className="absolute left-3.5 top-6 h-3.5 w-3.5 rounded-full bg-primary ring-4 ring-cream sm:left-4 sm:h-4 sm:w-4 md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2" />
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-primary py-16 text-primary-foreground sm:py-20 md:py-24">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest">Core Values</p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold">What Guides Us</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { Icon: Award, title: "Integrity", desc: "Honest dealings, transparent contracts and unwavering commitments." },
              { Icon: Sprout, title: "Innovation", desc: "Embracing science, technology and sustainable practices." },
              { Icon: HeartHandshake, title: "Farmer First", desc: "Every decision is measured by the value it brings to our farmers." },
            ].map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10 sm:p-8">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                    <v.Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-bold">{v.title}</h3>
                  <p className="mt-2 opacity-80">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

