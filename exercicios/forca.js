
const palpite = 'a';
const palavra = 'abeaalhaaaaaaaaaa';
acertos = 0;
i = 1;
for(letra of palavra){
    if(letra == palpite){
        acertos = i++
    }
}

console.log(acertos)