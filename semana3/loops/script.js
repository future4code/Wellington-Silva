/* exercicio1
Pega o valor da variavel e faz uma conta de adição
dos 14 primeiros algarimos até chegar ao valor 105,
*/


/* exercicio2
a. Push adiciona um novo elemento ao final do array.

b. São os valores 10, 15, 25 e 30.

c. com o valor 3, seria impresso 12, 15, 18, 21, 27, 30
e com valor 4 o valor 12

*/



const originalArray = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let maior = originalArray[0];
let menor = originalArray[0];

/* resposta a */
for (let element of originalArray){
    if(element > maior){
        maior = element;
    }
    else if( element < menor){
        menor = element;
    }
}
console.log('o maior numero é '+maior +' e menor é '+menor)

/* resposta b */
for(let element of originalArray){
    if(element / 10){
        console.log(element / 10 )
    }
}

/* resposta c */
for(let element of originalArray){
    if(element % 2 === 0){
        console.log(element)
    }
}

/* resposta d - incompleta */
for(let index = 0;index <=12;index++){
        console.log('O elemento do índex '+index)
    }
   



