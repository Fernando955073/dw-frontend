function somar () {
    var num1 = Number(document.getElementById ('num1').value)
    var num2 =  Number(document.getElementById ('num2').value)
    var soma = num1 + num2;
    var resultado = document.getElementById ('resultado')

    resultado.innerHTML = `A soma dos números é <strong style="color: red;"> ${soma} </strong>`
    resultado.style.outline = '2px solid red'
    //console.log (`O valor do num1 é ${num1}, o valor do num2 é ${num2}. e a soma deles é ${soma}`)
}