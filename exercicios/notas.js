let notas = [100, 100, 100, 20, 50 ,30, 14, 100, 100, 100,]

let notaFinal = 0;
let maiorNota = 0;
let menorNota = Infinity;

for (var i = 0; i < notas.length; i++) {
    notaFinal += notas[i]

   if ( notas[i] > maiorNota ) {
      maiorNota = notas[i];
   }

   if(notas[i] < menorNota){
    menorNota = notas[i];
}

}
notas.shift(maiorNota);
notas.shift(menorNota);
notaFinal = notaFinal - maiorNota - menorNota
notaFinal = notaFinal/notas.length

console.log(notaFinal)