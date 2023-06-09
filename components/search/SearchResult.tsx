import Filters from "deco-sites/fashion/components/search/Filters.tsx";
import Icon from "deco-sites/fashion/components/ui/Icon.tsx";
import SearchControls from "deco-sites/fashion/islands/SearchControls.tsx";
import SendEventOnLoad from "deco-sites/fashion/components/SendEventOnLoad.tsx";
import { mapProductToAnalyticsItem } from "deco-sites/std/commerce/utils/productToAnalyticsItem.ts";
import { useOffer } from "deco-sites/fashion/sdk/useOffer.ts";
import ProductGallery, { Columns } from "../product/ProductGallery.tsx";
import type { LoaderReturnType } from "$live/types.ts";
import type { ProductListingPage } from "deco-sites/std/commerce/types.ts";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  page: LoaderReturnType<ProductListingPage | null>;
  /**
   * @description Use drawer for mobile like behavior on desktop. Aside for rendering the filters alongside the products
   */
  /**
   * @description Number of products per line on grid
   */
  columns: Columns;
  banner: LiveImage;
}

function NotFound() {
  return (
    <div class="w-full flex justify-center items-center py-10">
      <span>Not Found!</span>
    </div>
  );
}

function Result({
  page,
  banner,
}: Omit<Props, "page"> & { page: ProductListingPage }) {
  const { products, filters, breadcrumb, pageInfo, sortOptions } = page;

  return (
    <>
      <div>
        <SearchControls
          sortOptions={sortOptions}
          filters={filters}
          breadcrumb={breadcrumb}
          products={products}
          banner={banner}
        />
        <div class="container px-4 sm:pb-10">
          <div class="flex flex-row">
            <div class="flex-grow">
              <ProductGallery products={products} />
            </div>
          </div>

          <div class="flex justify-center my-4">
            <div class="btn-group">
              <a
                aria-label="previous page link"
                rel="prev"
                href={pageInfo.previousPage ?? "#"}
                class="btn btn-ghost"
              >
                <Icon id="ChevronLeft" width={20} height={20} strokeWidth={2} />
              </a>
              <span class="btn btn-ghost">
                Page {pageInfo.currentPage + 1}
              </span>
              <a
                aria-label="next page link"
                rel="next"
                href={pageInfo.nextPage ?? "#"}
                class="btn btn-ghost"
              >
                <Icon
                  id="ChevronRight"
                  width={20}
                  height={20}
                  strokeWidth={2}
                />
              </a>
            </div>
          </div>
        </div>
        <SendEventOnLoad
          event={{
            name: "view_item_list",
            params: {
              // TODO: get category name from search or cms setting
              item_list_name: "",
              item_list_id: "",
              items: page.products?.map((product) =>
                mapProductToAnalyticsItem({
                  ...(useOffer(product.offers)),
                  product,
                  breadcrumbList: page.breadcrumb,
                })
              ),
            },
          }}
        />
      </div>
    </>
  );
}

function SearchResult({ page, ...props }: Props) {
  if (!page) {
    return <NotFound />;
  }

  return <Result {...props} page={page} />;
}

export default SearchResult;
