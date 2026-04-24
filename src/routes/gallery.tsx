import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import breadcrumbCsr from "@/assets/breadcrumb-csr.jpg";
import centralWarehouseAisle from "@/assets/gallery/central-warehouse-aisle.webp";
import farmUtilityYardOverview from "@/assets/gallery/farm-utility-yard-overview.webp";
import farmRoofPanorama from "@/assets/gallery/farm-roof-panorama.webp";
import feedStackCloseup from "@/assets/gallery/feed-stack-closeup.webp";
import feedSackStorage from "@/assets/gallery/feed-sack-storage.webp";
import irrigationSideRoofView from "@/assets/gallery/irrigation-side-roof-view.webp";
import lateAfternoonYardView from "@/assets/gallery/late-afternoon-yard-view.webp";
import operationsYardOverview from "@/assets/gallery/operations-yard-overview.webp";
import platformSideShedView from "@/assets/gallery/platform-side-shed-view.webp";
import roofOverviewFarm from "@/assets/gallery/roof-overview-farm.webp";
import rooflineVillageView from "@/assets/gallery/roofline-village-view.webp";
import rooflineWithTractor from "@/assets/gallery/roofline-with-tractor.webp";
import shedExteriorOverview from "@/assets/gallery/shed-exterior-overview.webp";
import shedLoadingBay from "@/assets/gallery/shed-loading-bay.webp";
import shedRowPerspective from "@/assets/gallery/shed-row-perspective.webp";
import shedYardOverlook from "@/assets/gallery/shed-yard-overlook.webp";
import tractorSideLane from "@/assets/gallery/tractor-side-lane.webp";
import tractorYardFrontView from "@/assets/gallery/tractor-yard-front-view.webp";
import upperRooflineDetail from "@/assets/gallery/upper-roofline-detail.webp";
import villageRoofEdgeView from "@/assets/gallery/village-roof-edge-view.webp";
import warehouseInterior from "@/assets/gallery/warehouse-interior.webp";
import warehouseMachineryCorner from "@/assets/gallery/warehouse-machinery-corner.webp";
import warehouseStackEntry from "@/assets/gallery/warehouse-stack-entry.webp";
import warehouseWideFloorView from "@/assets/gallery/warehouse-wide-floor-view.webp";
import sunlitOperationsYard from "@/assets/gallery/sunlit-operations-yard.webp";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery - Jagdamba Poultry Farms" },
      { name: "description", content: "A visual look at Jagdamba Poultry Farms across farms, hatcheries, feed production, products and communities." },
      { property: "og:title", content: "Gallery - Jagdamba Poultry Farms" },
      { property: "og:description", content: "Explore moments from our farms, facilities, teams and distribution network." },
      { property: "og:image", content: tractorSideLane },
    ],
  }),
  component: GalleryPage,
});

const GALLERY_ITEMS = [
  {
    title: "Shed Row Perspective",
    image: shedRowPerspective,
    alt: "Long poultry shed row photographed from the service road",
    width: 1400,
    height: 1866,
  },
  {
    title: "Long Shed Exterior",
    image: shedExteriorOverview,
    alt: "Long poultry shed exterior view at Jagdamba Poultry Farms",
    width: 1400,
    height: 1866,
  },
  {
    title: "Service Lane and Tractor Access",
    image: tractorSideLane,
    alt: "Farm service lane with tractor beside the poultry shed",
    width: 1400,
    height: 1050,
  },
  {
    title: "Front Yard Tractor View",
    image: tractorYardFrontView,
    alt: "Front yard view of the poultry shed with a tractor parked nearby",
    width: 1400,
    height: 1050,
  },
  {
    title: "Upper Roofline Detail",
    image: upperRooflineDetail,
    alt: "Upper roofline detail view across the farm sheds",
    width: 1400,
    height: 1866,
  },
  {
    title: "Roofline Farm Overview",
    image: roofOverviewFarm,
    alt: "Elevated overview of multiple shed roofs at the farm",
    width: 1400,
    height: 1866,
  },
  {
    title: "Farm Roof Panorama",
    image: farmRoofPanorama,
    alt: "Panoramic roof view across farm buildings and open land",
    width: 1400,
    height: 1866,
  },
  {
    title: "Village-Side Roof View",
    image: rooflineVillageView,
    alt: "Roofline view looking toward the nearby village and fields",
    width: 1400,
    height: 1866,
  },
  {
    title: "Roofline with Tractor",
    image: rooflineWithTractor,
    alt: "Elevated roofline view with tractor and service area below",
    width: 1400,
    height: 1866,
  },
  {
    title: "Irrigation-Side Roof View",
    image: irrigationSideRoofView,
    alt: "Roof view with sprinkler mist and nearby buildings in the background",
    width: 1400,
    height: 788,
  },
  {
    title: "Operations Yard Overview",
    image: operationsYardOverview,
    alt: "Operations yard and shed roofs viewed from above",
    width: 1400,
    height: 788,
  },
  {
    title: "Farm Utility Yard Overview",
    image: farmUtilityYardOverview,
    alt: "Utility yard overview between the sheds and nearby buildings",
    width: 1400,
    height: 788,
  },
  {
    title: "Sunlit Operations Yard",
    image: sunlitOperationsYard,
    alt: "Sunlit operations yard beside the poultry sheds",
    width: 1400,
    height: 788,
  },
  {
    title: "Late-Afternoon Yard View",
    image: lateAfternoonYardView,
    alt: "Late-afternoon overview of the farm yard and sheds",
    width: 1400,
    height: 788,
  },
  {
    title: "Shed Yard Overlook",
    image: shedYardOverlook,
    alt: "Overlook of the shed yard and nearby service buildings",
    width: 1400,
    height: 788,
  },
  {
    title: "Village Roof Edge View",
    image: villageRoofEdgeView,
    alt: "Roof edge view facing the nearby village and open farmland",
    width: 1400,
    height: 788,
  },
  {
    title: "Feed Sack Storage",
    image: feedSackStorage,
    alt: "Stacks of feed sacks stored inside the warehouse",
    width: 1400,
    height: 788,
  },
  {
    title: "Feed Stack Close-Up",
    image: feedStackCloseup,
    alt: "Close-up view of stacked feed sacks inside the storage area",
    width: 1400,
    height: 788,
  },
  {
    title: "Warehouse Stack Entry",
    image: warehouseStackEntry,
    alt: "Feed sack stacks near the warehouse entry",
    width: 1400,
    height: 788,
  },
  {
    title: "Central Warehouse Aisle",
    image: centralWarehouseAisle,
    alt: "Central aisle inside the warehouse with stacked materials on both sides",
    width: 1400,
    height: 1866,
  },
  {
    title: "Warehouse Machinery Corner",
    image: warehouseMachineryCorner,
    alt: "Warehouse corner with machinery and stored sacks",
    width: 1400,
    height: 788,
  },
  {
    title: "Warehouse Interior",
    image: warehouseInterior,
    alt: "Wide interior view of the storage warehouse with stacked sacks",
    width: 1400,
    height: 1866,
  },
  {
    title: "Warehouse Wide Floor View",
    image: warehouseWideFloorView,
    alt: "Wide warehouse floor view with workers and stacked feed sacks",
    width: 1400,
    height: 1866,
  },
  {
    title: "Platform-Side Shed View",
    image: platformSideShedView,
    alt: "Platform-side exterior view of the poultry shed",
    width: 1400,
    height: 1050,
  },
  {
    title: "Shed Loading Bay",
    image: shedLoadingBay,
    alt: "Exterior loading bay area beside a poultry shed",
    width: 1400,
    height: 1050,
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
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-accent text-sm font-semibold uppercase tracking-[0.28em]">
            Real Site Photos
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">
            Recent views from the farm, storage areas and day-to-day operations.
          </h2>
          <p className="mt-4 text-sm leading-7 text-foreground/72 sm:text-base">
            This gallery uses curated on-site photos from the shared drive, selected to keep the page clear, varied and free from repeated angles.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {GALLERY_ITEMS.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-[28px] bg-card shadow-soft ring-1 ring-black/5">
                <div className="relative aspect-[4/3] overflow-hidden bg-[linear-gradient(135deg,rgba(22,68,43,0.12),rgba(255,255,255,1),rgba(201,169,97,0.16))]">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                    width={item.width}
                    height={item.height}
                    loading={index < 6 ? "eager" : "lazy"}
                    decoding="async"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/10 via-black/0 to-transparent" />
                </div>
                <div className="flex h-24 flex-col justify-center px-4 py-4 sm:px-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/70">
                    Gallery Photo
                  </p>
                  <h3 className="mt-2 text-base font-semibold leading-snug text-foreground sm:text-lg">{item.title}</h3>
                </div>
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
