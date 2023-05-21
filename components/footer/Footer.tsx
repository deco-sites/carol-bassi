import Icon, {
  AvailableIcons,
} from "deco-sites/fashion/components/ui/Icon.tsx";

import Newsletter from "./Newsletter.tsx";
import type { ComponentChildren } from "preact";

export type IconItem = { icon: AvailableIcons };
export type StringItem = {
  label: string;
  href: string;
};

export type Item = StringItem | IconItem;

export type Section = {
  label: string;
  children: Item[];
};

const isIcon = (item: Item): item is IconItem =>
  // deno-lint-ignore no-explicit-any
  typeof (item as any)?.icon === "string";

function SectionItem({ item }: { item: Item }) {
  return (
    <span>
      {isIcon(item)
        ? (
          <div class="text-[#666] border-base-100 border border-solid py-1.5 px-2.5">
            <Icon
              id={item.icon}
              width={25}
              height={20}
              strokeWidth={0.01}
            />
          </div>
        )
        : (
          <a href={item.href}>
            {item.label}
          </a>
        )}
    </span>
  );
}

function FooterContainer(
  { children, class: _class = "" }: {
    class?: string;
    children: ComponentChildren;
  },
) {
  return (
    <div class={`py-6 px-4 text-[#666] sm:px-0 ${_class}`}>
      {children}
    </div>
  );
}

export interface Props {
  sections?: Section[];
}

function Footer({ sections = [] }: Props) {
  return (
    <footer class="w-full bg-[#eee] text-black flex flex-col divide-y divide-primary-content mt-[50px]">
      <div>
        <div class="container w-full flex flex-col divide-y divide-primary-content">
          <FooterContainer>
            {/* Desktop view */}
            <ul class="hidden md:flex flex-row justify-center gap-10">
              <div class="flex items-center max-w-[250px] ">
                <span class="text-[13px] text-[#333] ">
                  A Carol Bassi foi fundada em 2014 por Anna Carolina Bassi,
                  empresária que cresceu ao redor da moda. A estilista então,
                  criou sua própria label, que une seu DNA, seu espírito, sua
                  alegria de viver e seu estilo pessoal.
                </span>
              </div>
              {sections.map((section) => (
                <li>
                  <div>
                    <span class="font-normal text-xl text-black">
                      {section.label}
                    </span>

                    <ul
                      class={`flex ${
                        isIcon(section.children[0]) ? "flex-row" : "flex-col"
                      } gap-2 pt-2 flex-wrap`}
                    >
                      {section.children.map((item) => (
                        <li>
                          <SectionItem item={item} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
              <div class=" min-w-[250px] ">
                <Newsletter />
              </div>
            </ul>

            {/* Mobile view */}

            <ul class="flex flex-col md:hidden md:flex-row gap-4">
              <div class="flex items-center px-2">
                <span class="text-[16px] text-[#333] ">
                  A Carol Bassi foi fundada em 2014 por Anna Carolina Bassi,
                  empresária que cresceu ao redor da moda. A estilista então,
                  criou sua própria label, que une seu DNA, seu espírito, sua
                  alegria de viver e seu estilo pessoal.
                </span>
              </div>

              <div class="text-[#666] ">
                <Newsletter />
              </div>

              {sections.map((section) => (
                <li>
                  <span>
                    <details>
                      <summary>
                        {section.label}
                      </summary>

                      <ul
                        class={`flex ${
                          isIcon(section.children[0]) ? "flex-row" : "flex-col"
                        } gap-2 px-2 pt-2`}
                      >
                        {section.children.map((item) => (
                          <li>
                            <SectionItem item={item} />
                          </li>
                        ))}
                      </ul>
                    </details>
                  </span>
                </li>
              ))}
              <div class="flex flex-col justify-start items-start">
                <span class="font-normal text-black text-lg ">
                  Follow us
                </span>
                <div class="flex flex-row justify-start items-start gap-2">
                  <a
                    href="https://www.instagram.com/carolbassibrand/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram logo"
                  >
                    <Icon
                      width={35}
                      height={35}
                      id="Instagram"
                      strokeWidth={2}
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/carolbassibrand/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook logo"
                  >
                    <Icon
                      width={35}
                      height={35}
                      id="Facebook"
                      strokeWidth={2}
                    />
                  </a>
                </div>
              </div>
            </ul>
          </FooterContainer>
        </div>
      </div>

      <div>
        <div class="container w-full">
          <FooterContainer class="flex justify-between w-full">
            <span class="flex items-center gap-1">
              Powered by{" "}
              <a
                href="https://www.deco.cx"
                aria-label="powered by https://www.deco.cx"
              >
                <Icon id="Deco" height={20} width={60} strokeWidth={0.01} />
              </a>
            </span>

            <ul class="flex items-center justify-center gap-2">
              <li>
                <a
                  href="https://www.instagram.com/deco.cx"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram logo"
                >
                  <Icon
                    width={32}
                    height={32}
                    id="Instagram"
                    strokeWidth={1}
                  />
                </a>
              </li>
              <li>
                <a
                  href="http://www.deco.cx/discord"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Discord logo"
                >
                  <Icon
                    width={32}
                    height={32}
                    id="Discord"
                    strokeWidth={5}
                  />
                </a>
              </li>
            </ul>
          </FooterContainer>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
