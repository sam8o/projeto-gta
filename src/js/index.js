const botao = document.querySelector("btn-plataforma");
const elementoPlataformas = document.querySelector(". btn-plataforma .plataformas");

botao.addEventListener("click", () => {
    console.log(" o botão foi clicado")
    elementoPlataformas.classList.toggle("ativo");
});

