import Modals from "deco-sites/fashion/islands/HeaderModals.tsx";
import type { Image } from "deco-sites/std/components/types.ts";
import type { EditableProps as SearchbarProps } from "deco-sites/fashion/components/search/Searchbar.tsx";
import type { LoaderReturnType } from "$live/types.ts";
import type { Product, Suggestion } from "deco-sites/std/commerce/types.ts";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

import Alert from "./Alert.tsx";
import Navbar from "./Navbar.tsx";
import { headerHeight } from "./constants.ts";
import { useEffect } from "preact/hooks";

export interface NavItem {
  label: string;
  href: string;
  children?: Array<{
    label: string;
    href: string;
    children?: Array<{
      label: string;
      href: string;
    }>;
  }>;
  image?: {
    src?: Image;
    alt?: string;
  };
}

export interface Props {
  alerts: string[];
  /** @title Search Bar */
  searchbar?: SearchbarProps;
  /**
   * @title Navigation items
   * @description Navigation items used both on mobile and desktop menus
   */
  navItems?: NavItem[];

  /**
   * @title Product suggestions
   * @description Product suggestions displayed on search
   */
  products?: LoaderReturnType<Product[] | null>;

  /**
   * @title Enable Top Search terms
   */
  suggestions?: LoaderReturnType<Suggestion | null>;

  image: {
    desktop: LiveImage;
    mobile: LiveImage;
  };
}

function colorHeader() {
  let header1: Element | null;
  let alert1: Element | null;

  globalThis.addEventListener("scroll", () => {
    if (!header1) {
      header1 = document.querySelector("div[header-color]");
      if (!header1) return;
    }

    if (!header1) return;

    if (window.scrollY > 40) {
      header1.classList.remove("sm:bg-transparent");
      header1.classList.add("sm:bg-[#fffffff0]");
    } else {
      header1.classList.remove("sm:bg-[#ffffff0]");
      header1.classList.add("sm:bg-transparent");
    }
  });

  globalThis.addEventListener("load", () => {
    if (!alert1) {
      alert1 = document.querySelector("div[alert-hiden]");
      if (!alert) return;
    }
    if (!alert1) return;

    if (!header1) {
      header1 = document.querySelector("div[header-color]");
      if (!header1) return;
    }

    if (!header1) return;

    if (window.location.pathname !== "/") {
      header1.classList.add("sm:bg-white");
      alert1.classList.remove("sm:hidden");
    } else {
      alert1.classList.add("sm:hidden");
      header1.classList.remove("sm:bg-white");
    }
  });

  globalThis.addEventListener("scroll", () => {
    if (!alert1) {
      alert1 = document.querySelector("div[alert-hiden]");
      if (!alert) return;
    }
    if (!alert1) return;

    if (window.scrollY > 40 && window.location.pathname !== "/") {
      alert1.classList.add("sm:hidden");
    } else if (window.location.pathname !== "/") {
      alert1.classList.remove("sm:hidden");
    }
  });
}

function Header(
  {
    alerts,
    searchbar: _searchbar,
    products,
    navItems = [],
    suggestions,
    image,
  }: Props,
) {
  const searchbar = { ..._searchbar, products, suggestions };
  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: `(${colorHeader.toString()})()` }}
      />
      <header>
        <div
          class="fixed bg-white w-full  z-50 sm:bg-transparent sm:hover:bg-white "
          header-color=""
        >
          <Alert  alerts={alerts} />
          <Navbar items={navItems} searchbar={searchbar} image={image} />
        </div>

        <Modals
          menu={{ items: navItems }}
          searchbar={searchbar}
        />
      </header>
    </>
  );
}

export default Header;
