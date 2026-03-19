import Image from "next/image";

type AspectRatio = "4/3" | "3/2" | "3/4" | "16/9" | "1/1";

interface ProjectImageProps {
  src: string;
  alt: string;
  aspect?: AspectRatio;
  mobileAspect?: AspectRatio;
  priority?: boolean;
  fullBleed?: boolean;
}

const aspectClasses: Record<AspectRatio, string> = {
  "4/3": "aspect-[4/3]",
  "3/2": "aspect-[3/2]",
  "3/4": "aspect-[3/4]",
  "16/9": "aspect-[16/9]",
  "1/1": "aspect-square",
};

export function ProjectImage({
  src,
  alt,
  aspect = "4/3",
  mobileAspect,
  priority = false,
  fullBleed = false,
}: ProjectImageProps) {
  const desktopClass = mobileAspect
    ? `hidden md:block ${aspectClasses[aspect]}`
    : aspectClasses[aspect];

  return (
    <div className={fullBleed ? "" : "relative"}>
      {mobileAspect && (
        <div className={`md:hidden ${aspectClasses[mobileAspect]} relative overflow-hidden`}>
          <Image
            src={src}
            alt={alt}
            fill
            sizes="100vw"
            className="object-cover"
            priority={priority}
          />
        </div>
      )}
      <div className={`${desktopClass} relative overflow-hidden`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={fullBleed ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
          className="object-cover"
          priority={priority}
        />
      </div>
    </div>
  );
}
