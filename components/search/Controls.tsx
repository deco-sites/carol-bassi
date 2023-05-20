import Filters from "deco-sites/fashion/components/search/Filters.tsx";
import Sort from "deco-sites/fashion/components/search/Sort.tsx";
import Modal from "deco-sites/fashion/components/ui/Modal.tsx";
import Breadcrumb from "deco-sites/fashion/components/ui/Breadcrumb.tsx";
import { useSignal } from "@preact/signals";
import type { ProductListingPage } from "deco-sites/std/commerce/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import { Product } from "deco-sites/std/commerce/types.ts";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Icon from "deco-sites/fashion/components/ui/Icon.tsx";

type Props =
  & Pick<ProductListingPage, "filters" | "breadcrumb" | "sortOptions">
  & {
    displayFilter?: boolean;
    products: Product[];
    banner: LiveImage;
  };

function SearchControls(
  { filters, breadcrumb, displayFilter, sortOptions, products, banner }: Props,
) {
  const open = useSignal(false);
  const openSort = useSignal(false);

  return (
    <div class="container flex flex-col justify-between mb-[86px] sm:gap-4 pt-[53px] md:pt-0">
      <Image src={banner} width={1543} height={363} class="w-full" />
      <div class=" px-4">
        <div class="flex flex-row items-center sm:p-0 mb-2 border-b border-[#00000030] justify-between">
          <Breadcrumb itemListElement={breadcrumb?.itemListElement} />
          <div class="flex items-baseline gap-3">
            <div class="hidden lg:block col-start-2 justify-self-end relative ">
              <button
                onClick={() => {
                  openSort.value = !openSort.value;
                }}
                class="flex gap-1 items-center"
              >
                Ordenar
                <Icon
                  id="ChevronUp"
                  width={15}
                  height={15}
                  strokeWidth={2}
                />
              </button>
              {openSort.value && (
                <div class="absolute w-[196px] z-20 bg-white border-2 border-[#e3e4e6] right-0">
                  <Sort sortOptions={sortOptions} />
                </div>
              )}
            </div>
            <p class="text-xs text-[#00000050] flex gap-1 items-baseline">
              <span class="text-xl font-medium">{products.length}</span>Itens
            </p>
          </div>
        </div>
        <div class="relative z-40">
          <Filters filters={filters} />
        </div>
        <div class="grid grid-cols-2 max-h-[30px] gap-2 ">
          <button
            class={displayFilter
              ? "btn-ghost"
              : "bg-light-blue h-[30px] flex items-center justify-center w-full lg:hidden"}
            onClick={() => {
              open.value = true;
            }}
          >
            <Image
              src={"https://carolbassi.vtexassets.com/assets/vtex/assets-builder/carolbassi.store-theme/2.1.24/icons/filter-icon___88bf9cc4dc91617d9b921f1cab6ad20a.svg"}
              width={17}
              height={17}
            />
            Filtrar
          </button>
          {sortOptions.length > 0 && (
            <button
              class={displayFilter
                ? "btn-ghost"
                : "bg-light-blue h-[30px] flex items-center justify-center w-full lg:hidden"}
              onClick={() => {
                openSort.value = true;
              }}
            >
              <Image
                src={"https://carolbassi.vtexassets.com/assets/vtex/assets-builder/carolbassi.store-theme/2.1.24/icons/order-icon___83cdc2297800ef005202897e8b979a55.svg"}
                width={17}
                height={17}
              />
              Ordenar
            </button>
          )}
        </div>

        <Modal
          loading="lazy"
          title="Filtros"
          mode="sidebar-right"
          open={open.value}
          onClose={() => {
            open.value = false;
          }}
          type="filter"
        >
          <Filters filters={filters} />
        </Modal>
        {openSort.value && (
          <div class="fixed left-0 h-[calc(100vh-53px)] lg:h-[calc(100vh-100px)] top-[53px] lg:top-[100px]] w-full !bg-white z-50 lg:hidden">
            <Sort sortOptions={sortOptions} />
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchControls;
