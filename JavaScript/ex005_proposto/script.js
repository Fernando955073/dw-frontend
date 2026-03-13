var clique = document.getElementById('clique');
var resultado = document.getElementById('resultado');
var x = 0;

function clic(){
     x ++;
    resultado.innerHTML = `O Contador está com ${x} cliques.`
}

function limp(){
     x = 0;
    resultado.innerHTML = `O Contador está com ${x} cliques.`
}