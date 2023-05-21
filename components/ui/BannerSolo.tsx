import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
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

export default function BannerSolo({
  srcDesktop,
  alt,
  href,
}: Props) {
  return (
    <section class="w-full mt-[60px] overflow-hidden">
      <div>
        <a
          href={href}
          class="overflow-hidden"
        >
          <Picture>
            <img
              class="w-full hidden sm:flex"
              sizes="(max-width: 640px) 100vw, 30vw"
              src={srcDesktop}
              alt={alt}
              decoding="async"
              loading="lazy"
            />
          </Picture>
        </a>
      </div>
    </section>
  );
}
