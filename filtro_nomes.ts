const tela = require('readline-sync')

const nomes:string[] = []
let loop = true

while(loop) {
const nome = tela.question('Insira um nome: ')

nomes.push(nome)

const continuar:number = Number(tela.question('Deseja adicionar mais algum nome?\nSIM - 1 | NÃO - 2\nDigite aqui: '))
	if(continuar === 2) {
		loop = false
	}
}
const filtrados = nomes 
.filter(n => n.toLowerCase().startsWith('a'))
.sort()

console.log('Começam com A: ')

if (filtrados.length > 0) {
	filtrados.forEach((nome, i) => {
		console.log(`${i+3}. ${nome}`)
	})
} else { 
	console.log('Nenhum nome encontrado com a letra A.')
}


