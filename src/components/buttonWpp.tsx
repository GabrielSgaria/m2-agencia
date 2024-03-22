export function ButtonWpp(){
    function sendMensage(numeroTelefone: number, mensagemPadrao: string) {
        var linkWhatsApp =
          "https://wa.me/" +
          numeroTelefone +
          "?text=" +
          encodeURIComponent(mensagemPadrao);
    
        window.open(linkWhatsApp, "_blank");
      }
    return (
        
        <div className="mt-16">
            <a onClick={() =>
                sendMensage(
                  5541997169203,
                  "Olá! Vim através do site da M2 Agência de Marketing."
                )
              }
              className="flex cursor-pointer items-center justify-center gap-4 text-neutral-800"
            ></a>

        </div>
    )
}