import { useMemo } from "preact/hooks";
import { ProductListingPage } from "deco-sites/std/commerce/types.ts";
import type { JSX } from "preact";

const SORT_QUERY_PARAM = "sort";

const useSort = () =>
  useMemo(() => {
    const urlSearchParams = new URLSearchParams(window.location?.search);
    return urlSearchParams.get(SORT_QUERY_PARAM) ?? "";
  }, []);

// TODO: Replace with "search utils"
const applySort = (
  e:
    | JSX.TargetedMouseEvent<HTMLLIElement>
    | JSX.TargetedEvent<HTMLSelectElement, Event>,
  value?: string,
) => {
  const urlSearchParams = new URLSearchParams(window.location.search);

  console.log(e.currentTarget.value);
  if (value) {
    urlSearchParams.set(SORT_QUERY_PARAM, String(value));
  } else {
    urlSearchParams.set(SORT_QUERY_PARAM, String(e.currentTarget.value));
  }
  window.location.search = urlSearchParams.toString();
};

export type Props = Pick<ProductListingPage, "sortOptions">;

function Sort({ sortOptions }: Props) {
  const sort = useSort();

  return (
    <>
      {
        /*  <select
        id="sort"
        name="sort"
        onInput={applySort}
        class="hidden lg:block w-min h-[36px] px-1 rounded m-2 text-button font-button text-base-content cursor-pointer outline-none bg-none"
      >
        {sortOptions.map(({ value, label }) => (
          <option key={value} value={value} selected={value === sort}>
            <span class="text-sm">{label}</span>
          </option>
        ))}
      </select> */
      }

      <div
        id="sort"
        name="sort"
        class="rounded text-button font-button text-base-content cursor-pointer outline-none"
      >
        <ul>
          {sortOptions.map(({ value, label }) => {
            if (label !== "") {
              return (
                <li
                  key={value}
                  value={value}
                  selected={value === sort}
                  onClick={(e) => applySort(e, label)}
                  class={`${
                    value === sort ? "bg-[#E3E4E6]" : ""
                  } w-full py-4 px-3 first:hidden`}
                >
                  <span class="text-sm">{value}</span>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </>
  );
}

export default Sort;
