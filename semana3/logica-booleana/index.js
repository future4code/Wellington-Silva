/*exercicio 1*/

/* Resposta exercicio 1
a. false
b. false
c. true
d.false
e. boolean
*/



/*exercicio 2*/

/* Resposta exercicio 1
a. é maneiras de se guardar e acessar
mais de uma informação ao mesmo tempo
item I

b. Se não definir algum valor será em undefined
let array
console.log('I. ', array)


c.Com o numero de elementos que se coloca dentro dela
array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('III. ', array.length)


d. I.  undefined
  II.  null
  III.  11
  IV.  3  e  4
  V.  19  e  9
  VI.  3
  VII.  1
*/
                


/*exercicio 1 - escritas de código*/
/* item a */
let kelvin = (77-32)*5/9 + 273.15
console.log(kelvin + ' kelvins')

/* item b */
let fahrenheith = (80* 9/5) + 32
console.log(celcius+ ' fahrenheith')

/* item c */
let celToFah = (30* 9/5) + 32
console.log(celcius+ ' fahrenheith')

let celToKel = (30 + 273.15)
console.log(celToKel)


/* item d */
let newValor = Number(prompt("Insira um valor em Celcius"))
let newCalctoKelvin = Number(newValor + 273.15)
console.log('Seu valor em Kelvins  é '+newCalctoKelvin)

let newCalctoFah = ((newValor* 9/5) +32)
console.log('e seu valor em Fahrenheith é '+ newCalctoFah)







/*exercicio 2 - escritas de código*/
/* item a*/
let nome = prompt('Qual é seu nome?')
console.log('Olá '+ nome)

/* item b*/
let endereco = prompt("Qual é seu endereço? ")
console.log('seu endereço atual é '+endereco)

/* item c*/
let corFavorita = prompt('Qual a sua cor preferida '+ nome)
console.log(corFavorita+' é bonita')

/* item d*/
let banda = prompt('Qual tua banda favorita?')
console.log(banda +' é animal')

/* item e*/
let musica = prompt(' e qual musica acha que é a melhor?')
console.log(musica+ ' é uma das minhas preferidas também')



/*exercicio 3 - escritas de código*/
let quilowattCusto = 0.05
let quilowattHora = 280;

let calculo = quilowattHora* quilowattCusto
console.log('o valor a ser cobrado é '+calculo + ' reais')


let desconto = (calculo/100)*15
console.log('seu desconto é de '+desconto +' que resulta em ' + (calculo-desconto))