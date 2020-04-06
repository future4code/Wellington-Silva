/* exercicio1  
Ele recebe o valor do usuario e o armazena em
uma constante depois ele realiza um teste, onde 
se o produto da conta for igual a 0 passa no teste
e se não, ele não passa no teste.

Ele imprime os numeros pares, para os que passaram no teste e
não passou no teste os numeros impares
*/

/* exercicio2
a. Para identificar o preço unitário de cada fruta,

b. será: O preço da fruta  Maçã  é  R$  2.25

c. Seria um montante de 24,55R$

d. Será: O preço da fruta  Pera  é  R$  5

*/

/* exercicio3
 a mensagem será mensagem is not defined, sim existe um erro,

como esta como let mensagem e sendo elemento pai ela não tem acesso
aos escopos do filho.

*/

/* exercicio4 */

/* item a 
const number1 = Number(prompt('Digite um numero: '))
const number2 = Number(prompt('Digite o segundo numero: '))

if(number1 > number2){
    console.log('Os numeros na order descrescente são: '+number1+' e '+number2)
}else{
    console.log('Os numeros estão na ordem crescente')
}*/


/* item b e c
const number1 = Number(prompt('Digite o primeiro numero: '))
const number2 = Number(prompt('Digite o segundo numero: '))
const number3 = Number(prompt('Digite o terceiro numero: '))

if(number1 > number2 || number2 > number3 ){
    console.log('Os numeros em ordem decrescente são: ',number1,number2,number3)
}
else if(number1 < number2 || number2 < number3){
    console.log('Os numeros estão em ordem crescente')
}

else if(number1 == number2 == number3){
    console.log('os numeros são iguais, insira numeros diferentes')
}
else{
    console.log('nan')
}
*/



/* exercicio5 */
