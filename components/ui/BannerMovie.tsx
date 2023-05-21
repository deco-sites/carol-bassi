import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Video as LiveImage } from "deco-sites/std/components/types.ts";

export interface Movie {
  srcMobile: LiveImage;
  srcDesktop?: LiveImage;
  /**
   * @description Image alt text
   */
  alt: string;
  /**
   * @description When you click you go to
   */
  href: string;
}

export type BorderRadius =
  | "none"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "full";

export interface Props {
  /**
   * @description Default is 2 for mobile and all for desktop
   */
  itemsPerLine: {
    /** @default 2 */
    mobile?: 1 | 2;
    /** @default 4 */
    desktop?: 1 | 2 | 4 | 6 | 8;
  };
  /**
   * @description Item's border radius in px
   */
  borderRadius: {
    /** @default none */
    mobile?: BorderRadius;
    /** @default none */
    desktop?: BorderRadius;
  };
  srcDesktop?: LiveImage;
  /**
   * @description Image alt text
   */
  alt: string;
  /**
   * @description When you click you go to
   */
  href: string;
  srcMobile?:LiveImage;
}

const MOBILE_COLUMNS = {
  1: "grid-cols-1",
  2: "grid-cols-2",
};

const DESKTOP_COLUMNS = {
  1: "sm:grid-cols-1",
  2: "sm:grid-cols-2",
  4: "sm:grid-cols-4",
  6: "sm:grid-cols-6",
  8: "sm:grid-cols-8",
};

const RADIUS_MOBILE = {
  "none": "rounded-none",
  "sm": "rounded-sm",
  "md": "rounded-md",
  "lg": "rounded-lg",
  "xl": "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  "full": "rounded-full",
};

const RADIUS_DESKTOP = {
  "none": "sm:rounded-none",
  "sm": "sm:rounded-sm",
  "md": "sm:rounded-md",
  "lg": "sm:rounded-lg",
  "xl": "sm:rounded-xl",
  "2xl": "sm:rounded-2xl",
  "3xl": "sm:rounded-3xl",
  "full": "sm:rounded-full",
};

export default function BannnerGrid({
  srcMobile,
  srcDesktop,
  alt,
  href,
  borderRadius,
}: Props) {
  return (
    <section class="w-full px-auto sm:max-w-none sm:m-0 sm:overflow-hidden">
      <div>
        <a
          href={href}
          class={`overflow-hidden ${
            RADIUS_MOBILE[borderRadius.mobile ?? "none"]
          } ${RADIUS_DESKTOP[borderRadius.desktop ?? "none"]} `}
        >
          <div class="w-full h-full m-0 p-o b">
          <video src={srcDesktop} alt={alt} autoPlay muted loop preload="auto" webkit-playsinline x5-playsinline playsInline 
          class="hidden w-full h-full sm:inline-block">
            Video não suportado!
          </video>
          <video src={srcMobile} alt={alt} autoPlay muted loop preload="auto" webkit-playsinline x5-playsinline playsInline 
          class="sm:hidden w-full h-full inline-block">
            Video não suportado!
          </video>
          </div>
        </a>
      </div>
    </section>
  );
}
