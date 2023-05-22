import Icon from "deco-sites/fashion/components/ui/Icon.tsx";
import Button from "deco-sites/fashion/components/ui/Button.tsx";
import SliderControllerJS from "deco-sites/fashion/islands/SliderJS.tsx";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import { useId } from "preact/hooks";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { Children } from "preact/compat";
import type { JSX } from "preact";

type SliderProps = JSX.IntrinsicElements["ul"] & {
  snap?: string;
};

export interface Banner {
  /** @description desktop otimized image */
  desktop: LiveImage;
  /** @description mobile otimized image */
  mobile: LiveImage;
  secondImg?: LiveImage;
  /** @description Image's alt text */
  alt: string;
  /** @description when user clicks on the image, go to this link */
  href: string;
}

export interface Props {
  title?: string;
  titleSub?: string;
  titleDesktop?: boolean;
  titleSubDesktop?: boolean;
  titleMobile?: boolean;
  titleSubMobile?: boolean;

  sizeImgDescktop?: 1 | 2 | 3;
  sizeImgMobile?: 1 | 2 | 3;
  images?: Banner[];
  /**
   * @description Check this option when this banner is the biggest image on the screen for image optimizations
   */
  preload?: boolean;
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
}
const SIZE_IMG = {
  1: "h-[700px] w-[500px]",
  2: "h-[450px] w-[300px]",
  3: "h-[255px] w-[370px]",
};

export function Slider({
  children,
  snap = "snap-center",
  class: _class = "gap-6 scrollbar-none",
  ...props
}: SliderProps) {
  return (
    <ul
      data-slider
      class={`grid grid-flow-col items-center overflow-x-auto overscroll-x-contain snap-x snap-mandatory ${_class}`}
      {...props}
    >
      {Children.map(children, (child, index) => (
        <li
          data-slider-item={index}
          class={snap}
        >
          {child}
        </li>
      ))}
    </ul>
  );
}

type SliderDotsProps = JSX.IntrinsicElements["ol"];

export function SliderDots({ children, class: _class }: SliderDotsProps) {
  return (
    <ol
      class={`flex items-center justify-center overflow-auto overscroll-contain snap-x snap-mandatory ${_class}`}
    >
      {Children.map(children, (child, index) => (
        <li class="snap-center">
          <button
            data-dot={index}
            aria-label={`go to slider item ${index}`}
            class="focus:outline-none group"
          >
            {child}
          </button>
        </li>
      ))}
    </ol>
  );
}

function BannerItem(
  { image, lcp, sizeImgMobile }: {
    image: Banner;
    lcp?: boolean;
    sizeImgMobile: 1 | 2 | 3;
  },
) {
  const {
    alt,
    mobile,
    desktop,
    href,
  } = image;

  return (
    <div class={`relative ${SIZE_IMG[sizeImgMobile] ?? 1} overflow-y-hidden`}>
      <a href={href}>
        <Picture class="w-full" preload={lcp}>
          <img
            class={`w-full lg:h-full flex ${
              image.secondImg ? "hover:hidden" : ""
            }`}
            loading={lcp ? "eager" : "lazy"}
            src={desktop}
            alt={alt}
          />
          <img
            class={`w-full lg:h-full hidden ${
              image.secondImg ? "hover:flex" : ""
            } `}
            loading={lcp ? "eager" : "lazy"}
            src={image.secondImg}
            alt={alt}
          />
        </Picture>
      </a>
    </div>
  );
}

function ProgressiveDots({ images, interval = 0 }: Props) {
  return (
    <SliderDots class="col-span-full w-min self-center justify-self-center gap-2  z-10 row-start-5  overflow-hidden lg:hidden">
      {images?.map((_) => (
        <div>
          <div class="w-[10px] h-[10px]  rounded border border-[#adcfdf]  group-disabled:bg-[#adcfdf]" />
        </div>
      ))}
    </SliderDots>
  );
}

function BannerCarousel(
  {
    images,
    preload,
    interval,
    title,
    titleSub,
    titleDesktop = false,
    titleSubDesktop = false,
    titleMobile = false,
    titleSubMobile = false,
    sizeImgDescktop = 1,
    sizeImgMobile = 1,
  }: Props,
) {
  const id = useId();

  return (
    <>
      <div
        id={id}
        class="flex w-full items-center gap-3 flex-col justify-center my-[30px]"
      >
        <span
          class={`font-bold text-[30px] ${
            titleDesktop ? "lg:flex" : "lg:hidden"
          } ${titleMobile ? "flex" : "hidden"} `}
        >
          {title}
        </span>
        <span
          class={`font-normal text-[20px] ${
            titleSubDesktop ? "lg:flex" : "lg:hidden"
          } ${titleSubMobile ? "flex" : "hidden"} `}
        >
          {titleSub}
        </span>
      </div>
      <div class="w-full lg:bg-[#cacbcc] flex justify-center lg:hidden">
        <div
          id={id}
          class=" relative grid px-4 lg:px-6 grid-cols-[48px_1fr_48px] lg:grid-cols-[120px_1fr_120px] grid-rows-[1fr_48px_1fr_48px_22px] lg:grid-rows-[1fr_48px_1fr_48px] max-w-[1280px] xl:px-0"
        >
          <Slider class="col-span-full row-start-1 row-end-5 lg:row-span-full  scrollbar-none gap-6">
            {images?.map((image, index) => (
              <BannerItem
                image={image}
                sizeImgMobile={sizeImgMobile}
                lcp={index === 0 && preload}
              />
            ))}
          </Slider>
          <ProgressiveDots images={images} interval={interval} />

          <SliderControllerJS
            rootId={id}
            interval={interval && interval * 1e3}
          />
        </div>
      </div>

      <div class="hidden lg:flex container mt-[60px] w-full  md:px-0 ">
        <div
          id={id}
          class="flex w-full items-center gap-3 flex-row justify-center "
        >
          {images?.map((image, index) => (
            <div
              class={` ${SIZE_IMG[sizeImgDescktop] ?? 1}   ${
                image.secondImg !== undefined
                  ? "order-transparent hover:border-base-200 group overflow-hidden hover:overflow-visible"
                  : ""
              }`}
            >
              <figure
                class={`w-full h-full ${
                  image.secondImg !== undefined ? "relative" : ""
                }`}
              >
                <a
                  href={image.href}
                  class={`w-full h-full ${
                    image.secondImg !== undefined ? "contents" : ""
                  }`}
                >
                  <img
                    class={`w-full h-full ${
                      image.secondImg !== undefined
                        ? "flex transition-opacity opacity-100 md:group-hover:hidden md:group-hover:opacity-0"
                        : ""
                    }`}
                    src={image.desktop}
                    alt={image.alt}
                    width={100}
                    height={100}
                    decoding="async"
                    loading="lazy"
                  />
                  {image.secondImg !== undefined
                    ? (
                      <img
                        class=" w-full h-full transition-opacity opacity-0 md:group-hover:opacity-100"
                        src={image.secondImg}
                        alt={image.alt}
                      />
                    )
                    : ""}
                </a>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BannerCarousel;
