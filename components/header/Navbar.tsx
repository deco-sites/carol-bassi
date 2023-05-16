import HeaderSearchMenu from "deco-sites/fashion/islands/HeaderSearchMenu.tsx";
import HeaderButton from "deco-sites/fashion/islands/HeaderButton.tsx";
import Icon from "deco-sites/fashion/components/ui/Icon.tsx";
import NavItem from "./NavItem.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { navbarHeight } from "./constants.ts";
import type { INavItem } from "./NavItem.tsx";
import type { Props as SearchbarProps } from "deco-sites/fashion/components/search/Searchbar.tsx";

function Navbar({ items, searchbar, image }: {
  items: INavItem[];
  searchbar: SearchbarProps;
  image: {
    desktop: LiveImage;
    mobile: LiveImage;
  };
}) {
  return (
    <>
      {/* Mobile Version */}
      <div
        style={{ height: navbarHeight }}
        class="md:hidden flex flex-row justify-between items-center border-b border-base-200 w-full pl-2 pr-6 gap-2"
      >
        <HeaderButton variant="menu" />

        <a href="/" aria-label="Store logo" class="block px-4 py-3 w-[180px]">
          <Image src={image.mobile} alt="logo" width={180} height={30} />
        </a>

        <div class="flex gap-1">
          <HeaderButton variant="search" />
          <HeaderButton variant="cart" />
        </div>
      </div>

      {/* Desktop Version */}

      <div class="hidden md:flex flex-row h-[100px] justify-between items-center border-b border-base-200 w-full pl-2 pr-6">
        <div class="flex-none">
          <a href="/" aria-label="Store logo" class="block px-4 py-3">
            <Image
              src={image.desktop}
              alt="logo"
              width={100}
              height={100}
              class="w-[340px] h-[100px]"
            />
          </a>
        </div>

        <div class="flex-auto flex justify-center">
          {items.map((item) => <NavItem item={item} />)}
        </div>

        <div class="flex-none w-44 flex items-center justify-end gap-2">
          <HeaderButton variant="search" />

          <HeaderSearchMenu searchbar={searchbar} />

          <a
            class="btn btn-square btn-ghost"
            href="/login"
            aria-label="Log in"
          >
            <Icon id="User" width={20} height={20} strokeWidth={0.4} />
          </a>

          <HeaderButton variant="cart" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
