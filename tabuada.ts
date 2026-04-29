const tela = require('readline-sync')

let loop = true

while(loop){

const numero:number = Number(tela.question('Insira um número inteiro: '))
const numeros:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for(let i = 1; i <= numeros.length; i++){
	console.log(`${numero} x ${i} =  ${numero * i}`)
	}	

const continuar:number = Number(tela.question('Deseja checar a tabuada de outro número?\nSIM - 1 | NÃO - 2\nDigite aqui: '))

if(continuar === 2){
	loop = false
	}
}
