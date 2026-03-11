var num1 = prompt("Digite o primeiro número:");
var num2 = prompt("Digite o segundo número:");
var soma = parseInt(num1) + parseInt(num2);

console.log(`A soma de ${num1} + ${num2} é igual a ${soma}`);

var resultado = document.getElementById('area')
console.log(resultado)

resultado.innerHTML = `<h1>A soma dos números é: ${soma}</h1>`
