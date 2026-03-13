var resultado = document.getElementById ('resultado');
resultado.innerHTML = "<p> Aqui vai sair o resultado!</p>"
var x = 0
resultado.innerHTML += `<p> O Resultado de x é: ${x}</p>`
x  += 1;//igual x = x + 1
resultado.innerHTML += `<p> O Resultado de x é: ${x}</p>`
x  ++;//igual x += 1
resultado.innerHTML += `<p> O Resultado de x é: ${x}</p>`
x  ++;
resultado.innerHTML += `<p> O Resultado de x é: ${x}</p>`