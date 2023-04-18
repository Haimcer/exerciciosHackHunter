let resultados = [
    "V",
    "E",
    "V",
    "E"
  ]

  pontuacao = 0;
  vitoria = 3;
  empate = 1;
  derrota = 0;

  for(jogo of resultados){
    if(jogo == "V"){
        pontuacao += vitoria
    }
    if(jogo == "E"){
        pontuacao += empate
    }
   
  }
  console.log(pontuacao)