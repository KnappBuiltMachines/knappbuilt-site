import Image from "next/image";
import Link from "next/link";

type Variant = "machines" | "stack";

export default function Logo({
  variant = "machines",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  const isStack = variant === "stack";
  const src = isStack ? "/logo.png" : "/logo-machines.png";
  const alt = isStack
    ? "Knapp-Built Stack — Pallet Pattern Creator"
    : "Knapp-Built Machines";
  const dims = { w: 1657, h: 949 };
  const sizeClass = isStack ? "h-11 w-auto" : "h-12 w-auto";

  return (
    <Link href="/" className={`inline-flex items-center ${className}`} aria-label={alt}>
      <Image src={src} alt={alt} width={dims.w} height={dims.h} priority className={sizeClass} />
    </Link>
  );
}
