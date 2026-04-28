import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import blueHopperRowPortrait from "@/assets/gallery/blue-hopper-row-portrait.jpg";
import blueHopperRowWide from "@/assets/gallery/blue-hopper-row-wide.jpg";
import breadcrumbCsr from "@/assets/breadcrumb-csr.jpg";
import eggCrateStorageWall from "@/assets/gallery/egg-crate-storage-wall.jpg";
import eggStorageRoomAisle from "@/assets/gallery/egg-storage-room-aisle.jpg";
import eggStorageRoomWide from "@/assets/gallery/egg-storage-room-wide.jpg";
import eggTrayStacksOutdoors from "@/assets/gallery/egg-tray-stacks-outdoors.jpg";
import feederFlockCloseup from "@/assets/gallery/feeder-flock-closeup.jpg";
import feederFlockPortrait from "@/assets/gallery/feeder-flock-portrait.jpg";
import feedingLineCloseup from "@/assets/gallery/feeding-line-closeup.jpg";
import farmUtilityYardOverview from "@/assets/gallery/farm-utility-yard-overview.webp";
import farmRoofPanorama from "@/assets/gallery/farm-roof-panorama.webp";
import greenCrateEggStorage from "@/assets/gallery/green-crate-egg-storage.jpg";
import irrigationSideRoofView from "@/assets/gallery/irrigation-side-roof-view.webp";
import layerHouseInterior from "@/assets/gallery/layer-house-interior.jpg";
import layerCageAislePortrait from "@/assets/gallery/layer-cage-aisle-portrait.jpg";
import openFlockHouseInterior from "@/assets/gallery/open-flock-house-interior.jpg";
import openFlockHouseWide from "@/assets/gallery/open-flock-house-wide.jpg";
import operationsYardOverview from "@/assets/gallery/operations-yard-overview.webp";
import platformSideShedView from "@/assets/gallery/platform-side-shed-view.webp";
import poultryHouseFlockView from "@/assets/gallery/poultry-house-flock-view.jpg";
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
import warmLightFlock from "@/assets/gallery/warm-light-flock.jpg";
import whiteBirdProfile from "@/assets/gallery/white-bird-profile.jpg";
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
  component: GalleryRoute,
});

const GALLERY_ITEMS = [
  {
    label: "Farm Exterior",
    title: "Shed Row Perspective",
    image: shedRowPerspective,
    alt: "Long poultry shed row photographed from the service road",
    width: 1400,
    height: 1866,
  },
  {
    label: "Poultry House",
    title: "Layer House Interior",
    image: layerHouseInterior,
    alt: "Interior view of a poultry house with long rows of hens and feeding lines",
    width: 1600,
    height: 901,
  },
  {
    label: "Poultry House",
    title: "Blue Hopper Row Portrait",
    image: blueHopperRowPortrait,
    alt: "Portrait view of the poultry house with blue feed hoppers suspended above the cage rows",
    width: 901,
    height: 1600,
  },
  {
    label: "Poultry House",
    title: "Blue Hopper Row Wide",
    image: blueHopperRowWide,
    alt: "Wide interior view of cage rows and blue hoppers running through the poultry house",
    width: 1600,
    height: 901,
  },
  {
    label: "Poultry House",
    title: "Layer Cage Aisle Portrait",
    image: layerCageAislePortrait,
    alt: "Portrait aisle view down the long layer cage rows inside the poultry house",
    width: 1200,
    height: 1600,
  },
  {
    label: "Farm Exterior",
    title: "Long Shed Exterior",
    image: shedExteriorOverview,
    alt: "Long poultry shed exterior view at Jagdamba Poultry Farms",
    width: 1400,
    height: 1866,
  },
  {
    label: "Feed Line",
    title: "Feed Line Close-Up",
    image: feedingLineCloseup,
    alt: "Close-up of a white hen beside the feeding line inside the poultry house",
    width: 1600,
    height: 901,
  },
  {
    label: "Operations Yard",
    title: "Service Lane and Tractor Access",
    image: tractorSideLane,
    alt: "Farm service lane with tractor beside the poultry shed",
    width: 1400,
    height: 1050,
  },
  {
    label: "Bird Close-Up",
    title: "White Bird Profile",
    image: whiteBirdProfile,
    alt: "White poultry bird standing inside the shed with the rest of the flock softly blurred behind it",
    width: 1600,
    height: 901,
  },
  {
    label: "Operations Yard",
    title: "Front Yard Tractor View",
    image: tractorYardFrontView,
    alt: "Front yard view of the poultry shed with a tractor parked nearby",
    width: 1400,
    height: 1050,
  },
  {
    label: "Live Flock",
    title: "Warm Light Flock",
    image: warmLightFlock,
    alt: "Group of white poultry birds gathered inside the shed in warm golden light",
    width: 1600,
    height: 901,
  },
  {
    label: "Live Flock",
    title: "Feeder Flock Close-Up",
    image: feederFlockCloseup,
    alt: "Cluster of white birds gathered around red hanging feeders inside the poultry shed",
    width: 1600,
    height: 901,
  },
  {
    label: "Live Flock",
    title: "Feeder Flock Portrait",
    image: feederFlockPortrait,
    alt: "Portrait view of the flock around red feeders inside the poultry house",
    width: 1200,
    height: 1600,
  },
  {
    label: "Farm Exterior",
    title: "Upper Roofline Detail",
    image: upperRooflineDetail,
    alt: "Upper roofline detail view across the farm sheds",
    width: 1400,
    height: 1866,
  },
  {
    label: "Poultry House",
    title: "Poultry House Flock View",
    image: poultryHouseFlockView,
    alt: "Wide flock view inside the poultry house with feeders and drinkers visible across the floor",
    width: 1600,
    height: 901,
  },
  {
    label: "Poultry House",
    title: "Open Flock House Interior",
    image: openFlockHouseInterior,
    alt: "Interior flock view across the open poultry house with red feeders hanging through the shed",
    width: 1600,
    height: 901,
  },
  {
    label: "Poultry House",
    title: "Open Flock House Wide",
    image: openFlockHouseWide,
    alt: "Wide view across the poultry house showing a large live flock and feeder layout",
    width: 1600,
    height: 901,
  },
  {
    label: "Farm Exterior",
    title: "Roofline Farm Overview",
    image: roofOverviewFarm,
    alt: "Elevated overview of multiple shed roofs at the farm",
    width: 1400,
    height: 1866,
  },
  {
    label: "Farm Exterior",
    title: "Farm Roof Panorama",
    image: farmRoofPanorama,
    alt: "Panoramic roof view across farm buildings and open land",
    width: 1400,
    height: 1866,
  },
  {
    label: "Farm Exterior",
    title: "Village-Side Roof View",
    image: rooflineVillageView,
    alt: "Roofline view looking toward the nearby village and fields",
    width: 1400,
    height: 1866,
  },
  {
    label: "Farm Exterior",
    title: "Roofline with Tractor",
    image: rooflineWithTractor,
    alt: "Elevated roofline view with tractor and service area below",
    width: 1400,
    height: 1866,
  },
  {
    label: "Farm Exterior",
    title: "Irrigation-Side Roof View",
    image: irrigationSideRoofView,
    alt: "Roof view with sprinkler mist and nearby buildings in the background",
    width: 1400,
    height: 788,
  },
  {
    label: "Operations Yard",
    title: "Operations Yard Overview",
    image: operationsYardOverview,
    alt: "Operations yard and shed roofs viewed from above",
    width: 1400,
    height: 788,
  },
  {
    label: "Operations Yard",
    title: "Farm Utility Yard Overview",
    image: farmUtilityYardOverview,
    alt: "Utility yard overview between the sheds and nearby buildings",
    width: 1400,
    height: 788,
  },
  {
    label: "Operations Yard",
    title: "Sunlit Operations Yard",
    image: sunlitOperationsYard,
    alt: "Sunlit operations yard beside the poultry sheds",
    width: 1400,
    height: 788,
  },
  {
    label: "Operations Yard",
    title: "Shed Yard Overlook",
    image: shedYardOverlook,
    alt: "Overlook of the shed yard and nearby service buildings",
    width: 1400,
    height: 788,
  },
  {
    label: "Farm Exterior",
    title: "Village Roof Edge View",
    image: villageRoofEdgeView,
    alt: "Roof edge view facing the nearby village and open farmland",
    width: 1400,
    height: 788,
  },
  {
    label: "Egg Handling",
    title: "Egg Tray Stacks Outdoors",
    image: eggTrayStacksOutdoors,
    alt: "Stacks of filled egg trays arranged in the outdoor handling area",
    width: 1600,
    height: 901,
  },
  {
    label: "Egg Storage",
    title: "Egg Crate Storage Wall",
    image: eggCrateStorageWall,
    alt: "Large wall of packed egg crates stacked inside the storage room",
    width: 1600,
    height: 901,
  },
  {
    label: "Egg Storage",
    title: "Green Crate Egg Storage",
    image: greenCrateEggStorage,
    alt: "Green storage crates filled with eggs stacked neatly along the room wall",
    width: 1600,
    height: 901,
  },
  {
    label: "Egg Storage",
    title: "Egg Storage Room Wide",
    image: eggStorageRoomWide,
    alt: "Wide interior view of the egg storage room with long rows of packed trays",
    width: 1600,
    height: 901,
  },
  {
    label: "Egg Storage",
    title: "Egg Storage Room Aisle",
    image: eggStorageRoomAisle,
    alt: "Egg storage room aisle view showing packed trays stretching across the room",
    width: 1600,
    height: 901,
  },
  {
    label: "Warehouse",
    title: "Warehouse Machinery Corner",
    image: warehouseMachineryCorner,
    alt: "Warehouse corner with machinery and stored sacks",
    width: 1400,
    height: 788,
  },
  {
    label: "Warehouse",
    title: "Warehouse Interior",
    image: warehouseInterior,
    alt: "Wide interior view of the storage warehouse with stacked sacks",
    width: 1400,
    height: 1866,
  },
  {
    label: "Farm Exterior",
    title: "Platform-Side Shed View",
    image: platformSideShedView,
    alt: "Platform-side exterior view of the poultry shed",
    width: 1400,
    height: 1050,
  },
  {
    label: "Farm Exterior",
    title: "Shed Loading Bay",
    image: shedLoadingBay,
    alt: "Exterior loading bay area beside a poultry shed",
    width: 1400,
    height: 1050,
  },
];

function GalleryRoute() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  if (pathname !== "/gallery") {
    return <Outlet />;
  }

  return <GalleryPhotosPage />;
}

function GalleryPhotosPage() {
  return (
    <SiteLayout>
      <PageHero
        title="Gallery"
        subtitle="A visual tour of our farms, facilities, people and products."
        crumbs={[{ label: "Gallery" }]}
        image={breadcrumbCsr}
      />

      <section id="photos" className="container-x scroll-mt-28 py-16 sm:py-20 md:py-24">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-accent text-sm font-semibold uppercase tracking-[0.28em]">
            Real Site Photos
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">
            Recent views from the farm, poultry houses, storage areas and day-to-day operations.
          </h2>
          <p className="mt-4 text-sm leading-7 text-foreground/72 sm:text-base">
            This gallery now includes the full shared photo set across live flock, layer houses, egg handling, storage areas and farm operations, arranged to keep the page clear, varied and true to the site.
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
                    {item.label}
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
