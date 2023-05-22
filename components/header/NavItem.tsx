import Image from "deco-sites/std/components/Image.tsx";
import { headerHeight } from "./constants.ts";
export interface INavItem {
  label: string;
  href: string;
  children?: INavItem[];
  image?: { src?: string; alt?: string };
}

function pathAtual() {
  let navB = "";

  globalThis.addEventListener("load", () => {
    navB = window.location.pathname;
  });
  return navB;
}

function NavItem({ item }: { item: INavItem }) {
  const { href, label, children, image } = item;

  return (
    <li class="group flex items-center">
      <a href={href} class="px-4 py-3">
        <span class="group-hover:underline hover:font-black text-[18px]">
          {label}
        </span>
      </a>

      {children && children.length > 0 &&
        (
          <div
            class={`fixed hidden mt-[110px] hover:flex group-hover:flex bg-base-100 z-50 items-center justify-center gap-6 border-t border-b-2 border-base-200 w-screen`}
            nav-height=""
            style={{ top: "0px", left: "0px" }}
          >
            <div class="w-full min-h-[350px]">
              <ul class="flex items-start justify-center gap-6">
                {children.map((node) => (
                  <li class="p-6">
                    <a class="hover:underline" href={node.href}>
                      <span>{node.label}</span>
                    </a>

                    <ul class="flex flex-col gap-5 flex-wrap max-h-[250px] mt-4">
                      {node.children?.map((leaf) => (
                        <li>
                          <a class="hover:underline" href={leaf.href}>
                            <span class="text-xs">{leaf.label}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
            <div class="w-full h-[250px] flex flex-row justify-start items-center border-secondary-black  border-l-2 ">
              {image?.src && (
                <Image
                  class="p-6"
                  src={image.src}
                  alt={image.alt}
                  width={300}
                  height={332}
                  loading="lazy"
                />
              )}
            </div>
          </div>
        )}
    </li>
  );
}

export default NavItem;
