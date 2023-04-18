const palavra = ["ave", "avanco", "avemaria","banana", "balanço"]

const primeiraLetra = "a";
const segundaLetra = "V";
let combinacoes = "";

for (let i = 0; i < palavra.length; i++){
    if(primeiraLetra == palavra[i][0] && segundaLetra == palavra[i][1]){
        combinacoes = palavra[i]
        console.log(combinacoes)
    }
}

if(combinacoes == ""){
    combinacoes = 'NENHUMA'
    console.log(combinacoes)
}