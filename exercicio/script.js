const botao = document.querySelector(".btn");
const resultadoSoma = document.querySelector(".numero");
const maximo = document.querySelector(".max");

function somar() {
    if (resultadoSoma.innerHTML < 10) {
        resultadoSoma.innerHTML = Number(resultadoSoma.innerHTML) + 1;
    }
    else {
        console.log("Não é possivel adicionar mais!");
        maximo.classList.add("mostrar");
    }
}

if (botao) {
    botao.addEventListener('click', somar);
}
