import Avatar from "deco-sites/fashion/components/ui/Avatar.tsx";
import { useVariantPossibilities } from "deco-sites/fashion/sdk/useVariantPossiblities.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";

interface Props {
  product: Product;
}

function VariantSelector({ product, product: { url } }: Props) {
  const possibilities = useVariantPossibilities(product);

  return (
    <ul class="flex flex-col gap-4">
      {Object.keys(possibilities).map((name) => (
        <li class="flex flex-col gap-2">
          <span class="text-sm ">
            <p class="text-[20px] text-primary-black py-2">
              {name === "Cores" ? "Cor" : name}
            </p>
          </span>
          <ul class="flex flex-row gap-1 flex-wrap">
            {Object.entries(possibilities[name]).map(([value, [link]]) => (
              <li>
                <a href={link}>
                  <Avatar
                    content={value}
                    variant={link === url ? "active" : "default"}
                  />
                </a>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default VariantSelector;
