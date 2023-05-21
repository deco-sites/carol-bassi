import Icon, {
  AvailableIcons,
} from "deco-sites/fashion/components/ui/Icon.tsx";

function Newsletter() {
  return (
    <div class="flex flex-col justify-start items-start gap-2 ">
      <span class="font-medium text-black text-lg lg:text-2xl ">
        Newsletter
      </span>
      <form class="flex flex-col lg:flex-row items-center gap-2 font-body text-body w-full  lg:w-[400px] rounded py-1 px-1  lg:border lg:border-solid lg:border-black">
        <input
          class="py-2 px-3 w-full lg:w-[300px] flex-grow rounded  bg-transparent border border-solid border-black lg:border-none"
          placeholder="Seu e-mail"
        />
        <button
          class="py-2 px-3 w-full lg:w-[100px] lg:bg-[#adcfdf] text-base-content rounded border border-solid border-black lg:border-none"
          type="button" // prevent form's default behavior
        >
          Cadastrar
        </button>
      </form>
      <div class=" hidden lg:flex flex-col justify-start items-start">
        <span class="font-medium text-black text-2xl ">
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
              width={40}
              height={40}
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
              width={40}
              height={40}
              id="Facebook"
              strokeWidth={2}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
