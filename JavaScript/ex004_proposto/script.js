window.confirm ('Benvindo ao meu Site');

var resultado = document.getElementById ('resultado');

function calc() {
    var num = Number(window.prompt ("digite um número"))
    resultado.innerHTML = `O dobro do valor é ${num*2} e a matade é ${num/2}.`
}
