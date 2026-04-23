import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import breadcrumbCsr from "@/assets/breadcrumb-csr.jpg";
import community from "@/assets/community.jpg";
import feed from "@/assets/feed.jpg";
import hatchery from "@/assets/hatchery.jpg";
import heroFarm from "@/assets/hero-farm.jpg";
import heroProducts from "@/assets/hero-products.jpg";
import poultry from "@/assets/poultry.jpg";
import sustainability from "@/assets/sustainability.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery - Jagdamba Poultry Farms" },
      { name: "description", content: "A visual look at Jagdamba Poultry Farms across farms, hatcheries, feed production, products and communities." },
      { property: "og:title", content: "Gallery - Jagdamba Poultry Farms" },
      { property: "og:description", content: "Explore moments from our farms, facilities, teams and distribution network." },
      { property: "og:image", content: heroFarm },
    ],
  }),
  component: GalleryPage,
});

const GALLERY_ITEMS = [
  {
    title: "Fresh Product Showcase",
    image: heroProducts,
  },
  {
    title: "Inside the Shed",
    image: poultry,
  },
  {
    title: "Feed Production",
    image: feed,
  },
  {
    title: "Hatchery Excellence",
    image: hatchery,
  },
  {
    title: "Community Connection",
    image: community,
  },
  {
    title: "Sustainability Lens",
    image: sustainability,
  },
];

function GalleryPage() {
  return (
    <SiteLayout>
      <PageHero
        title="Gallery"
        subtitle="A visual tour of our farms, facilities, people and products."
        crumbs={[{ label: "Gallery" }]}
        image={breadcrumbCsr}
      />

      <section className="container-x py-16 sm:py-20 md:py-24">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {GALLERY_ITEMS.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <article className="group overflow-hidden rounded-[28px] shadow-soft">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[250px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[320px] md:h-[360px]"
                  width={1400}
                  height={960}
                  loading="lazy"
                />
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground sm:py-20">
        <div className="container-x flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-2xl">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest">Want to Know More?</p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold">
              See the story in person or start a conversation with our team.
            </h2>
            <p className="mt-4 text-white/80">
              Reach out for business inquiries, farm collaborations or product discussions.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-soft transition-all hover:-translate-y-0.5 sm:w-auto"
            >
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
