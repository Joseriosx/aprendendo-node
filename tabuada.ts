const tela = require('readline-sync')

let loop = true

while(loop){

const numero:number = Number(tela.question('Insira um número inteiro: '))
const multiplicadores:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

multiplicadores.forEach((num) => {
	const resultado = numero * num;
	console.log(`${numero} x ${num} =  ${resultado}`);
	})	

const continuar:number = Number(tela.question('Deseja checar a tabuada de outro número?\nSIM - 1 | NÃO - 2\nDigite aqui: '))

if(continuar === 2){
	loop = false
	console.log('Programa encerrado.')
	}
}
