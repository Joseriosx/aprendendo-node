const tela = require('readline-sync')

const array1: number[] = [2, 3, 5, 3, 6, 7, 9, 5, 2, 3]
const array2: number[] = [3, 6, 9, 9, 7, 5, 7, 4, 1, 3]

const resultado: number[] = []


for (let i = 0; i < array1.length; i++) {
    let valor1 = array1[i] 

    
    for (let j = 0; j < array2.length; j++) {
        let valor2 = array2[j] 

        const multiplicacao = array1[i] * array2[j]

        resultado.push(multiplicacao)
    }
}

console.log(resultado)
