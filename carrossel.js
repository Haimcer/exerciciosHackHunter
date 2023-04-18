let images = ["a","b","c","d","e","f" ]

let input = ">>>>>>>>>"

i = 0
componente = "";

for(click of input){
    componente = click
    
   if( componente.length < images.length ){
    if(componente == ">"){
        i++
    }

    if(componente == "<"){
        i = i-1
    }

    if(i > images.length){
        i = 0;
    }

    if(i < 0){
        i = images.length - 1
    }
   }
    console.log(i)
}

