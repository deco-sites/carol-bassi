import Image from "deco-sites/std/components/Image.tsx";
import { headerHeight } from "./constants.ts";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
export interface INavItem {
  label: string;
  href: string;
  children?: INavItem[];
  image1?: {
    src?: LiveImage;
    alt?: string;
    title: string;
    path: string;
  };
  image2?: {
    src?: LiveImage;
    alt?: string;
    title: string;
    path: string;
  };
  image3?: {
    src?: LiveImage;
    alt?: string;
    title: string;
    path: string;
  };
}

function pathAtual() {
  let navB = "";

  globalThis.addEventListener("load", () => {
    navB = window.location.pathname;
  });
  return navB;
}

const ImageItem = ({ item }: {
  item: {
    src?: LiveImage;
    alt?: string;
    title: string;
    path: string;
  };
}) => {
  return (
    <a
      href={item.path}
      class="flex flex-col items-start gap-[18px] max-h-[250px]"
    >
      {item.src && (
        <Image
          src={item.src}
          alt={item.alt}
          width={220}
          height={220}
          loading="lazy"
        />
      )}
      <p class="text-lg ">{item.title}</p>
    </a>
  );
};

function NavItem({ item }: { item: INavItem }) {
  const { href, label, children, image1, image2, image3 } = item;

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
            <div class=" min-h-[350px] min-w-[400px]">
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
                            <span class="text-base">{leaf.label}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
            <div class="w-full h-[250px] flex flex-row justify-start border-gray  border-l-2 gap-20 px-20 items-start">
              {image1 && <ImageItem item={image1} />}
              {image2 && <ImageItem item={image2} />}
              {image3 && <ImageItem item={image3} />}
            </div>
          </div>
        )}
    </li>
  );
}

export default NavItem;
