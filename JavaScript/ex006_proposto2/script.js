function compara(){
    var num1 = Number(document.getElementById ('num1').value);
    var num2 =  Number(document.getElementById ('num2').value);
    var num3 =  Number(document.getElementById ('num3').value);
    var resultado = document.getElementById ('resultado');
    var maior;
    
    if (num1 = num2 && num3) {
        resultado.innerHTML = `Os números são iguais`;
    } else if (num1 > num2 && num3){
        resultado.innerHTML = `O primeiro número é maior`;
    } else if (num2 > num1 && num3){
        resultado.innerHTML = `O segundo número é maior`;
    } else if (num3 > num1 && num2){
        resultado.innerHTML = `O terceiro número é maior`;
    }
}
