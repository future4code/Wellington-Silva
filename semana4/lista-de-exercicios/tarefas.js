

function comparador(){
	let number1 = Number(prompt('Digite um numero'))
	let number2 = Number(prompt('Digite o segundo numero: '))


	
	if (number1 > number2 || number1%number2===0) {
		console.log ('O maior é '+ number1)
		console.log (number1+' é divisivel '+number2)
		console.log ('A diferença entre eles é: '+(number1-number2))

	}else if(number1 > number2 || number1%number2){
		console.log ('O maior é ' +number2)
		console.log (number1+' não é divisivel '+number2)
		console.log ('A diferença entre eles é: '+(number1-number2))
	}

}

let conta = comparador();
console.log(comparador());