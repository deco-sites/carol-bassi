import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Item {
  src: LiveImage;
  /**
   * @description Image alt text
   */
  alt: string;
  /**
   * @description When you click you go to
   */
  href: string;
}

export interface Props {
  imagem1: Item;
  imagem2: Item;
  imagem3: Item;
}

export default function BannerSolo({
  imagem1,
  imagem2,
  imagem3,
}: Props) {
  return (
    <section class="container mt-[60px] w-full px-4 md:px-0 mx-auto">
      <div >
        <Picture class="flex flex-row justify-center items-end">
          <a
            href={imagem1.href}
            class="overflow-hidden"
          >
            <img
              class="w-full hidden sm:flex"
              sizes="(max-width: 640px) 100vw, 30vw"
              src={imagem1.src}
              alt={imagem1.alt}
              decoding="async"
              loading="lazy"
            />
          </a>
          <a
            href={imagem2.href}
            class="overflow-hidden"
          >
            <img
              class="w-full hidden sm:flex"
              sizes="(max-width: 640px) 100vw, 30vw"
              src={imagem2.src}
              alt={imagem2.alt}
              decoding="async"
              loading="lazy"
            />
          </a>
          <a
            href={imagem3.href}
            class="overflow-hidden"
          >
            <img
              class="w-full hidden sm:flex"
              sizes="(max-width: 640px) 100vw, 30vw"
              src={imagem3.src}
              alt={imagem3.alt}
              decoding="async"
              loading="lazy"
            />
          </a>
        </Picture>
      </div>
    </section>
  );
}
