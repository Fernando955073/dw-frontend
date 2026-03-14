var idade = 17;

if (idade < 16) {
    console.log("Eleitor não vota");
} else if (idade >= 16  && idade <= 18 ) {
    console.log("Eleitor vota se quiser");
} else if (idade >= 18 && idade <= 70 ) {
    console.log("Eleitor é obrigado a votar");
} else {
    console.log("Eleitor vota se quiser");
}