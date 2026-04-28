const tela = require('readline-sync')

const idade:number = Number(tela.question('Digite sua idade: '))

if (idade >= 18) {
	console.log("Você é maior de idade")
} else {
	console.log("Você é menor de idade")
}
