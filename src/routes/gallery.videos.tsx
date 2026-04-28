import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SiteLayout } from "@/components/site/SiteLayout";
import breadcrumbCsr from "@/assets/breadcrumb-csr.jpg";

const VIDEO_FILES = [
  "20260423_165521.mp4",
  "20260423_165544.mp4",
  "20260423_165846.mp4",
  "20260423_170148.mp4",
  "20260423_170157.mp4",
  "20260423_170301.mp4",
  "20260423_170517.mp4",
  "20260423_170531.mp4",
  "20260423_170948.mp4",
  "20260423_170954.mp4",
  "20260423_171248.mp4",
  "20260423_171339.mp4",
  "20260423_171352.mp4",
  "20260423_171412.mp4",
  "20260423_171422.mp4",
  "20260423_171825.mp4",
  "20260423_171842.mp4",
  "20260423_171856.mp4",
  "20260423_172150.mp4",
  "20260423_172208.mp4",
  "20260423_172223.mp4",
  "20260423_172245.mp4",
  "20260423_172518.mp4",
  "20260423_172535.mp4",
  "20260423_172648.mp4",
  "20260423_172800.mp4",
  "20260423_172814.mp4",
  "20260423_172912.mp4",
  "20260423_172918.mp4",
  "20260423_172928.mp4",
  "20260423_173202.mp4",
  "20260423_173428.mp4",
  "20260423_173542.mp4",
  "20260423_173609.mp4",
  "20260423_173624.mp4",
  "20260423_173634.mp4",
  "20260423_173655.mp4",
  "20260423_173703.mp4",
  "20260423_173723.mp4",
  "20260423_174137.mp4",
  "20260423_174245.mp4",
  "20260423_174507.mp4",
  "20260423_174538.mp4",
  "20260423_180927.mp4",
] as const;

const MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

type VideoItem = {
  bucketKey: string;
  bucketLabel: string;
  capturedDate: string;
  capturedTime: string;
  fileName: string;
  originalName: string;
  sortKey: number;
  src: string;
  title: string;
};

export const Route = createFileRoute("/gallery/videos")({
  head: () => ({
    meta: [
      { title: "Videos - Jagdamba Poultry Farms" },
      {
        name: "description",
        content:
          "Browse 44 shared farm videos from Jagdamba Poultry Farms, arranged in chronological order on a dedicated gallery page.",
      },
      { property: "og:title", content: "Videos - Jagdamba Poultry Farms" },
      {
        property: "og:description",
        content:
          "Explore the shared farm clips in a dedicated videos gallery, separated cleanly from the photo gallery.",
      },
      { property: "og:image", content: breadcrumbCsr },
    ],
  }),
  component: GalleryVideosPage,
});

function formatTime(hour: number, minute: number) {
  const period = hour >= 12 ? "PM" : "AM";
  const normalizedHour = hour % 12 || 12;

  return `${normalizedHour}:${String(minute).padStart(2, "0")} ${period}`;
}

function parseVideoFile(fileName: string, index: number): VideoItem {
  const match = fileName.match(/^(\d{4})(\d{2})(\d{2})_(\d{2})(\d{2})(\d{2})\.mp4$/);

  if (!match) {
    return {
      bucketKey: "fallback",
      bucketLabel: "Shared Clips",
      capturedDate: "Shared Upload",
      capturedTime: "Time unavailable",
      fileName,
      originalName: fileName.replace(".mp4", ""),
      sortKey: index,
      src: `/media/farm-videos/${fileName}`,
      title: `Farm Clip ${String(index + 1).padStart(2, "0")}`,
    };
  }

  const [, year, month, day, hour, minute, second] = match;
  const hourNumber = Number(hour);
  const minuteNumber = Number(minute);
  const bucketMinute = Math.floor(minuteNumber / 15) * 15;

  return {
    bucketKey: `${year}${month}${day}-${hour}-${String(bucketMinute).padStart(2, "0")}`,
    bucketLabel: formatTime(hourNumber, bucketMinute),
    capturedDate: `${Number(day)} ${MONTH_NAMES[Number(month) - 1]} ${year}`,
    capturedTime: formatTime(hourNumber, minuteNumber),
    fileName,
    originalName: fileName.replace(".mp4", ""),
    sortKey: Number(`${year}${month}${day}${hour}${minute}${second}`),
    src: `/media/farm-videos/${fileName}`,
    title: `Farm Clip ${String(index + 1).padStart(2, "0")}`,
  };
}

const VIDEO_ITEMS = VIDEO_FILES.map(parseVideoFile).sort(
  (left, right) => left.sortKey - right.sortKey,
);

function AutoPlayVideo({
  src,
  title,
}: {
  src: string;
  title: string;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.muted = true;

    const startPlayback = () => {
      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    };

    if (typeof IntersectionObserver === "undefined") {
      startPlayback();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          startPlayback();
          return;
        }

        video.pause();
      },
      { threshold: 0.35 },
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
      video.pause();
    };
  }, []);

  return (
    <div className="relative h-[22rem] overflow-hidden rounded-[22px] bg-black sm:h-[24rem] lg:h-[26rem]">
      <video
        ref={videoRef}
        className="h-full w-full object-contain"
        autoPlay
        controls
        loop
        muted
        playsInline
        preload="metadata"
        aria-label={title}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

function GalleryVideosPage() {
  return (
    <SiteLayout>
      <PageHero
        title="Videos"
        subtitle="A dedicated page for the shared farm video set, arranged in chronological order and kept separate from the photo gallery."
        crumbs={[{ label: "Gallery", to: "/gallery" }, { label: "Videos" }]}
        image={breadcrumbCsr}
      />

      <section className="container-x py-16 sm:py-20 md:py-24">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {VIDEO_ITEMS.map((video, videoIndex) => (
            <Reveal
              key={video.fileName}
              delay={videoIndex * 0.02}
              className="h-full"
            >
              <article className="flex h-full flex-col overflow-hidden rounded-[28px] bg-card shadow-soft ring-1 ring-black/5">
                <div className="bg-[linear-gradient(135deg,rgba(22,68,43,0.12),rgba(255,255,255,1),rgba(201,169,97,0.16))] p-3">
                  <AutoPlayVideo src={video.src} title={video.title} />
                </div>

                <div className="px-4 py-4 sm:px-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/70">
                    {video.capturedTime}
                  </p>
                  <h3 className="mt-2 text-base font-semibold leading-snug text-foreground sm:text-lg">
                    {video.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-foreground/72">
                    Captured on {video.capturedDate}
                  </p>
                  <p className="mt-3 truncate font-mono text-xs text-foreground/48">
                    {video.originalName}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground sm:py-20">
        <div className="container-x flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-2xl">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest">
              Need More Media Added?
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">
              We can feature more farm clips, highlight selected videos, or expand the gallery
              further.
            </h2>
            <p className="mt-4 text-white/80">
              This page is now ready for additional uploads whenever you want to extend the
              collection.
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
