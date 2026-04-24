import fullLogo from "@/assets/jagdamba-logo-transparent.png";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  alt?: string;
  className?: string;
  imageClassName?: string;
  loading?: "eager" | "lazy";
};

export function BrandLogo({
  alt = "Jagdamba Poultry Farm logo",
  className,
  imageClassName,
  loading = "lazy",
}: BrandLogoProps) {
  return (
    <span className={cn("block", className)}>
      <img
        src={fullLogo}
        alt={alt}
        className={cn("block h-auto w-full", imageClassName)}
        width={557}
        height={497}
        loading={loading}
        decoding="async"
      />
    </span>
  );
}

type BrandIconProps = {
  alt?: string;
  className?: string;
  imageClassName?: string;
  loading?: "eager" | "lazy";
};

export function BrandIcon({
  alt = "Jagdamba Poultry Farm emblem",
  className,
  imageClassName,
  loading = "lazy",
}: BrandIconProps) {
  return (
    <span className={cn("block overflow-hidden rounded-full", className)}>
      <img
        src={fullLogo}
        alt={alt}
        className={cn("h-full w-full origin-top object-cover object-top scale-[2.05]", imageClassName)}
        width={557}
        height={497}
        loading={loading}
        decoding="async"
      />
    </span>
  );
}
