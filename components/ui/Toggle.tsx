import Button from "deco-sites/fashion/components/ui/Button.tsx";
import { useUI } from "../../sdk/useUI.ts";

function Toggle(
  { description, specs }: { description: string; specs: string },
) {
  const { detailsToggle } = useUI();

  return (
    <div>
      <div class=" flex w-full">
        <button
          onClick={() => {
            detailsToggle.value = "Características";
          }}
          class={`${
            detailsToggle.value === "Características"
              ? "  border-primary-black-black"
              : "border-extra-translucid-black"
          } text-[20px] border-b-2 w-min !bg-white !rounded-0 text-primary-black`}
        >
          Características
        </button>
        <div class="flex-grow border-b-2 border-extra-translucid-black" />
        <button
          onClick={() => {
            detailsToggle.value = "Descrição";
          }}
          class={`${
            detailsToggle.value === "Descrição"
              ? "  border-primary-black-black"
              : "border-extra-translucid-black"
          } text-[20px] border-b-2 w-min !bg-white !rounded-0 text-primary-black`}
        >
          Descrição
        </button>
      </div>
      <p class="text-base pt-2 sm:text-sm">
        {detailsToggle.value === "Descrição" ? description : specs}
      </p>
    </div>
  );
}

export default Toggle;
