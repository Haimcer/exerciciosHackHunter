precos = [30, 10, 54, 76 ,1, 4 ,35]

let total = 0;
let conta = 0;
let menorPrejuizo = Infinity;

    for (var i = 0; i < precos.length; i++) {

        for (var j = i + 1; j < precos.length; j++) {   
            let compra = precos[i]
            let venda = precos[j]
            let prejuizo = compra - venda;

            if(prejuizo > 0){
             if(prejuizo < menorPrejuizo){
                menorPrejuizo = prejuizo;
             }   
            }
           
        }
    }
console.log(menorPrejuizo)