import ProductCard from "deco-sites/fashion/components/product/ProductCard.tsx";
import SliderJS from "deco-sites/fashion/islands/SliderJS.tsx";
import Icon from "deco-sites/fashion/components/ui/Icon.tsx";
import Slider from "deco-sites/fashion/components/ui/Slider.tsx";
import SendEventOnLoad from "deco-sites/fashion/components/SendEventOnLoad.tsx";
import { useId } from "preact/hooks";
import { mapProductToAnalyticsItem } from "deco-sites/std/commerce/utils/productToAnalyticsItem.ts";
import { useOffer } from "deco-sites/fashion/sdk/useOffer.ts";
import type { LoaderReturnType } from "$live/types.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";

export interface Props {
  title: string;
  products: LoaderReturnType<Product[] | null>;
  itemsPerPage?: number;
}

function ProductSimpleShelf({
  title,
  products,
}: Props) {
  const id = useId();

  if (!products || products.length === 0) {
    return null;
  }

  return (
    <div
      id={id}
      class="md:container grid grid-cols-[48px_1fr_48px] grid-rows-[48px_1fr_48px_1fr] md:grid-rows-[48px_1fr] md:grid-cols-[1fr] py-10 px-2"
    >
      <h2 class="text-center row-start-1 col-span-full">
        <span class="font-medium text-2xl">{title}</span>
      </h2>

      <Slider class="carousel carousel-center sm:carousel-end gap-6 col-span-full row-start-2 row-end-5 md:hidden">
        {products?.map((product, index) => (
          <Slider.Item
            index={index}
            class="carousel-item w-[100vw]  first:ml-6 sm:first:ml-0 last:mr-6 sm:last:mr-0"
          >
            <ProductCard product={product} itemListName={title} />
          </Slider.Item>
        ))}
      </Slider>

      <div class="hidden md:flex  col-span-full gap-2 grow">
        {products?.map((product, index) => (
          <div class="flex-1 max-w-[23%]">
            <ProductCard product={product} itemListName={title} />
          </div>
        ))}
      </div>

      <>
        <div class="relative md:hidden z-10 col-start-1 row-start-3">
          <Slider.PrevButton class=" absolute right-1/2 ">
            <Icon size={40} id="ChevronLeft" strokeWidth={3} />
          </Slider.PrevButton>
        </div>
        <div class="relative md:hidden z-10 col-start-3 row-start-3">
          <Slider.NextButton class=" absolute left-1/2 ">
            <Icon size={40} id="ChevronRight" strokeWidth={3} />
          </Slider.NextButton>
        </div>
      </>

      <SliderJS rootId={id} />
      <SendEventOnLoad
        event={{
          name: "view_item_list",
          params: {
            item_list_name: title,
            items: products.map((product) =>
              mapProductToAnalyticsItem({
                product,
                ...(useOffer(product.offers)),
              })
            ),
          },
        }}
      />
    </div>
  );
}

export default ProductSimpleShelf;
