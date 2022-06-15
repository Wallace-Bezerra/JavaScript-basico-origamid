// const botao = document.querySelector('.botao');

// function abrir() {
//     const texto = document.querySelector('.texto');
//     texto.classList.toggle("abrir");
// }

// botao.addEventListener('click', abrir);

// console.log(botao);



// function mostrarTela(event) {
//     const coordenadas = {
//         x: event.timeStamp
//     }
//     console.log(coordenadas);
// }
// window.addEventListener('mousemove', mostrarTela);

const circulo = document.querySelector('.circulo');



function pointer(event) {
    circulo.style.left = event.x + 'px';
    circulo.style.top = event.y + 'px';
    console.log(event)
}

window.addEventListener('mousemove', pointer);
