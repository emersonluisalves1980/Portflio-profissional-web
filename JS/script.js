
const radios = document.querySelectorAll(
    '.slider input[name="radio-btn"]'
);

let indiceAtual = 0;
let intervaloCarrossel = null;

function mostrarProximoCertificado() {
    if (!radios.length) return;

    indiceAtual = (indiceAtual + 1) % radios.length;
    radios[indiceAtual].checked = true;
}

function iniciarCarrossel() {
    clearInterval(intervaloCarrossel);

    if (radios.length < 2) return;

    intervaloCarrossel = setInterval(
        mostrarProximoCertificado,
        5000
    );
}

radios.forEach((radio, indice) => {
    radio.addEventListener('change', () => {
        indiceAtual = indice;
        iniciarCarrossel();
    });
});

if (radios.length > 0) {
    indiceAtual = Array.from(radios).findIndex(
        radio => radio.checked
    );

    if (indiceAtual < 0) {
        indiceAtual = 0;
        radios[0].checked = true;
    }

    iniciarCarrossel();
}
