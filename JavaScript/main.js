

let btnInfo = document.getElementById('btnInfo');
let span_text = document.getElementById('span_text');
let ocultar_btnInfo = document.getElementById('ocultar_btnInfo');


btnInfo.addEventListener('click', act_style);

function act_style() {
    span_text.classList.add('mostrar');
    btnInfo.classList.add('ocultar');
}

ocultar_btnInfo.addEventListener('click', ocultarTexto);

function ocultarTexto() {
    span_text.classList.remove('mostrar');

    if(span_text.classList.contains('mostrar')) {
        btnInfo.classList.add('mostrar');
    } else {
        btnInfo.classList.remove('ocultar');
    }
}