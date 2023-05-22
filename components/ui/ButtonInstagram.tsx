import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {

  href: string;
}

export default function BannerSolo({
  
  href,
}: Props) {
  return (
    <section class="w-full mt-[60px] overflow-hidden">
      <div  class="flex w-full items-center gap-3 flex-col justify-center my-[20px]">
       
          <button 
           type="button"
           class="py-2 px-3 w-[200px] bg-[#adcfdf] text-base-content rounded border border-none">Instagram           
          </button>
  
      </div>
    </section>
  );
}
