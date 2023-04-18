let disparos = [0 ,50 ,90, 80, 100, 80, 40]

i = 0;
for ( acertos of disparos ){
    
if(acertos > 70){
    acertos = i++   
   }
}
if(i < 3) {
    console.log('ELIMINADO');
}else{
    console.log(i);
}
