const tela = require('readline-sync')

let numero:number = Number(tela.question('Digite o numero: '))


if (numero %2 === 0) {
        console.log("Esse numero é par")
} else {
        console.log("Esse numero eh impar")
}



