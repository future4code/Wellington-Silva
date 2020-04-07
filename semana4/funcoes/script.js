/* Exercício 1 
A. [] length: 0, ela retorna um array vazio com nenhum elemento

B. retorna um array com 0, 1, 0, 1, 2, 3 e com 6 elementos

C. retorna um array com 0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5 e com 12 elementos

*/

/* exercicio2
A. São as possições que cada nome esta no array, menos a Paula que nocaso como não esta
especificado no array ela se encontra como undefined.

B.let arrayDeNumeros = [1, 2, 3, 4, 5];

const funcao = (lista, numeros) => {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === numeros) {
      return i;
    }
  }
};

console.log(funcao(arrayDeNumeros, 1));

funcionaria, o que seria impresso é o indice 0 onde o 1 ocupa a posição.

*/

/*Exercício 3
O nome  da função poderia ser sumAndProduct \\ somaEProduto.

A função recebe um array como parâmetro e declara 3 variáveis. O laço for vai olhar todo o array
somando e multiplicando cada um dos elementos e atribuindo em duas variáveis, o resultadoA vai ser
o resultado das somas e resultadoB para o resultado dos produtos.
Quando finalizar o laço, os resultados são adicionados a um array, utilizando push para isso e a função encerra tendo
como retorno o arrayFinal.
*/

/* exercício4 - item A */
function conversaoAnos (humano,cachorro){
	dog = 7;
	let calculus = human*dog
	console.log(calculus)
}

conversaoAnos(3)

/* item B */

function palavras(name,old,address,student ){
	if(student  === true){
		return "Eu sou " + name + 'tenho ' + old + ' anos '+ ' moro na rua ' +  address  + ' e sou estudante '
	}else{
		return "Eu sou " + name + 'tenho ' + old + ' anos '+ ' moro na rua ' +  address  + ' e não sou estudante '
	}
	
}



/* exercicio5 */
const seculo = (year) => {
	let result
	let romano = "";

    const conversor = (number) =>{
        let letters = ["M",  "CM",  "D",  "CD", "C",  "XC", "L",  "XL",  "X",  "IX", "V",  "IV", "I"];
        let numbers = [1000,  900,  500,  400,  100,   90,  50,   40,   10,    9,    5,    4,    1]
        let converting=""
        let i=0;
        while(number > 0){
            if(number>=numbers[i]){
                converting+=letters[i]
                number-=numbers[i]
            }
            else{
                i++;
            }
        }
        return converting;
    }

    if(year % 100 !== 0){
        result = Math.round(Math.floor(year/100)+1);
    }
    else{
        result = Math.round(Math.floor(year/100));
    }
    romano=conversor(result);
    console.log(romano);
}


/* exercício6 */
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

/* item a */
const size = (array) => {
    return array.length
}

/* item b */
const pair = (numero) => {
    if(number%2==0){
        return true
    }
    else{
        return false
    }
}

/* item c e d */
const amountPair = (array) =>{
    let amount=0;
    for(let i of array){
        if(pair(i)){
            qtd++;
        }
    }
    return amount;
}