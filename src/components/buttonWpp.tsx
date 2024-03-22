import { BsWhatsapp } from "react-icons/bs";

export function ButtonWpp() {
  function sendMensage(numeroTelefone: number, mensagemPadrao: string) {
    var linkWhatsApp =
      "https://wa.me/" +
      numeroTelefone +
      "?text=" +
      encodeURIComponent(mensagemPadrao);

    window.open(linkWhatsApp, "_blank");
  }
  return (
    <div>
      <a
        onClick={() =>
          sendMensage(
            5541997169203,
            "Olá! Vim através do site da M2 Agência de Marketing."
          )
        }
        className="flex bg-neutral-800 hover:bg-neutral-900 transition-colors p-4 w-48 rounded-xl text-2xl bebasNeue cursor-pointer items-center justify-center text-center gap-4 text-neutral-200"
      >
        Fale conosco <BsWhatsapp />
      </a>
    </div>
  );
}
