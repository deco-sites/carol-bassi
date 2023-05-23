import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Item {
  src?: LiveImage;
  srcMobile?: LiveImage;
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
      <div>
        <Picture class="flex flex-col items-center gap-3 sm:gap-0 sm:flex-row justify-center sm:items-end">
          <a
            href={imagem1.href}
            class="overflow-hidden"
          >
            {imagem1.src && (
              <img
                class="w-auto h-auto  hidden sm:flex"
                src={imagem1.src}
                alt={imagem1.alt}
                width={100}
                height={100}
                decoding="async"
              />
            )}
            {imagem1.srcMobile && (
              <img
                class="w-auto h-auto sm:hidden"
                src={imagem1.srcMobile}
                alt={imagem1.alt}
                width={100}
                height={100}
                decoding="async"
              />
            )}
          </a>
          <a
            href={imagem2.href}
            class="overflow-hidden"
          >
            {imagem2.src && (
              <img
                class="w-auto h-auto hidden sm:flex"
                src={imagem2.src}
                alt={imagem2.alt}
                width={100}
                height={100}
                decoding="async"
              />
            )}
            {imagem2.srcMobile && (
              <img
                class="w-auto h-auto sm:hidden"
                src={imagem2.srcMobile}
                alt={imagem2.alt}
                width={100}
                height={100}
                decoding="async"
              />
            )}
          </a>
          <a
            href={imagem3.href}
            class="overflow-hidden"
          >
            {imagem3.src && (
              <img
                class="w-auto h-auto hidden sm:flex"
                src={imagem3.src}
                alt={imagem3.alt}
                width={100}
                height={100}
                decoding="async"
              />
            )}
            {imagem3.srcMobile &&
              (
                <img
                  class="w-auto h-auto sm:hidden"
                  src={imagem3.srcMobile}
                  alt={imagem3.alt}
                  width={100}
                  height={100}
                  decoding="async"
                />
              )}
          </a>
        </Picture>
      </div>
    </section>
  );
}
