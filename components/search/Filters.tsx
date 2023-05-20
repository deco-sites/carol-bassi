import Avatar from "deco-sites/fashion/components/ui/Avatar.tsx";
import type {
  Filter,
  FilterToggle,
  ProductListingPage,
} from "deco-sites/std/commerce/types.ts";
import Icon from "deco-sites/fashion/components/ui/Icon.tsx";

interface Props {
  filters: ProductListingPage["filters"];
}

const isToggle = (filter: Filter): filter is FilterToggle =>
  filter["@type"] === "FilterToggle";

function FilterValues({ key, values }: FilterToggle) {
  return (
    <ul
      class={`flex flex-col lg:bg-white lg:max-h-[322px] lg:overflow-y-scroll`}
    >
      {values.map(({ label, value, url, selected, quantity }) => {
        return (
          <a
            href={url}
            class="flex items-center gap-2 px-4 py-[11px] lg:px-2 lg:py-0"
          >
            <div
              aria-checked={selected}
              class="checkbox !w-3 !h-3 !rounded-none border border-gray text-primary-black"
            />
            <span class="text-base lg:text-lg">{label}</span>
          </a>
        );
      })}
    </ul>
  );
}

function Filters({ filters }: Props) {
  return (
    <ul class="flex flex-col gap-6 p-4 lg:flex-row lg:absolute lg:w-full lg:items-baseline">
      <li>
        <p class="hidden lg:block text-xl text-primary-black">Filtros</p>
      </li>
      {filters
        .filter(isToggle)
        .map((filter) => (
          <li>
            <details class="flex flex-col list-none group ">
              <summary class="list-none flex gap-1 items-center justify-between w-full ">
                {filter.label}{" "}
                <Icon
                  id="ChevronDown"
                  width={15}
                  height={15}
                  strokeWidth={2}
                  class="group-open:rotate-180"
                />
              </summary>
              <FilterValues {...filter} />
            </details>
          </li>
        ))}
    </ul>
  );
}

export default Filters;
