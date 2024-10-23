const textoGerado = document.querySelector("#text-nome");
const intervalo = 70;


function escreVertexto(textoGerado, text, intervalo) {

    const char = text.split("").reverse();
    const tipo = setInterval(function () {

        if (!char.length) {
            return clearInterval(tipo)
        }

        const next = char.pop();

        textoGerado.innerHTML += next;

    }, intervalo);

}
escreVertexto(textoGerado, text, intervalo);


// Modo noturno

const inputCheck = document.querySelector("#modo-noturno")
const elemento = document.querySelector("body")

inputCheck.addEventListener("click", () => {
    const modo = inputCheck.checked ? "dark" : "light"

    elemento.setAttribute("data-bs-theme", modo)

})


// Validação recebida

const frm = document.querySelector("form")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const nome = frm.floatingNome.value

    alert(`Obrigado pela vista ${nome}! Logo entraremos em contato!`)
})