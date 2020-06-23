function numbers(sequencial: number[]): number | void {
    
    type answer = {
        quantosNumeros: number,
        quantosImpares: number,
        somatorio: number
    }

    const impares = sequencial.filter((num) =>{
        return num % 2 !== 0 
    });

    let plus: number = 0
    for (let i = 0; i < sequencial.length; i++) {
        plus += sequencial[i]
    }


    const objetoFinal: answer = {
        quantosNumeros: sequencial.length,
        quantosImpares: impares.length,
        somatorio: plus,
    }

    console.log(objetoFinal)
}

numbers([1,50,35,108,7,86,37])