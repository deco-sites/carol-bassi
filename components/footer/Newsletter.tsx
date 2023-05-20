import Icon, {
  AvailableIcons,
} from "deco-sites/fashion/components/ui/Icon.tsx";

function Newsletter() {
  return (
    <div class="flex flex-col justify-start items-start gap-2 ">
      <span class="font-medium text-black text-2xl ">
        Newsletter
      </span>
      <form class="flex flex-row items-center gap-2 font-body text-body w-full sm:w-[408px] rounded py-1 px-1  border border-solid border-black">
        <input
          class="py-2 px-3 flex-grow bg-transparent "
          placeholder="Seu e-mail"
        />
        <button
          class="py-2 px-3 bg-[#adcfdf] text-base-content rounded"
          type="button" // prevent form's default behavior
        >
          Cadastrar
        </button>
      </form>
      <div class="flex flex-col justify-start items-start"  >
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
