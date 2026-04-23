import { createFileRoute } from "@tanstack/react-router";
import { Award, HeartHandshake, Sprout, Users } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import farm from "@/assets/hero-farm.jpg";
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
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <Reveal>
            <img src={farm} alt="Our farm" className="rounded-2xl shadow-elegant w-full h-auto" width={1920} height={1080} loading="lazy" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-accent text-sm font-semibold uppercase tracking-widest">Our Story</p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold">A Legacy Built on Farmer Trust</h2>
            <p className="mt-5 text-left text-muted-foreground leading-relaxed sm:text-justify">
              Jagdamba Poultry Farm is a trusted poultry business focused on quality,
              hygiene, and scientific farming practices. Starting with 50,000 birds on a
              6-acre farm, we have steadily grown to a capacity of 1,50,000 birds by 2026.
            </p>
            <p className="mt-4 text-left text-muted-foreground leading-relaxed sm:text-justify">
              We follow a structured approach using high-quality breeds, proper nutrition,
              and strict vaccination programs to ensure healthy bird growth and consistent
              production. Our commitment is to deliver reliable and high-quality poultry
              farming solutions while continuously expanding with modern techniques.
            </p>
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
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />
            <div className="space-y-8 sm:space-y-10">
              {TIMELINE.map((item, i) => (
                <Reveal key={item.year} delay={i * 0.05}>
                  <div className={`relative flex md:items-center gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className="md:w-1/2 pl-12 md:pl-0 md:px-8">
                      <div className="rounded-2xl border border-border bg-card p-5 shadow-soft transition-shadow hover:shadow-elegant sm:p-6">
                        <div className="font-serif text-2xl font-bold text-accent">{item.year}</div>
                        <h3 className="font-serif text-lg font-bold mt-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
                      </div>
                    </div>
                    <div className="absolute left-4 md:left-1/2 top-6 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 h-4 w-4 rounded-full bg-primary ring-4 ring-cream" />
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
          <div className="mt-14 grid gap-6 md:grid-cols-3">
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

