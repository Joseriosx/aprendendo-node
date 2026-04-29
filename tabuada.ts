const tela = require('readline-sync')

let loop:boolean = true

while(loop){
const numero:number = Number(tela.question('Insira um número inteiro: '))

const por1 = numero * 1
const por2 = numero * 2
const por3 = numero * 3
const por4 = numero * 4
const por5 = numero * 5
const por6 = numero * 6
const por7 = numero * 7
const por8 = numero * 8 
const por9 = numero * 9

console.log(`A tabuada de ${numero} é:`)
console.log(`${numero} x 1 = ${por1}`)
console.log(`${numero} x 2 = ${por2}`)
console.log(`${numero} x 3 = ${por3}`)
console.log(`${numero} x 4 = ${por4}`)
console.log(`${numero} x 5 = ${por5}`)
console.log(`${numero} x 6 = ${por6}`)
console.log(`${numero} x 7 = ${por7}`)
console.log(`${numero} x 8 = ${por8}`)
console.log(`${numero} x 9 = ${por9}`)

const continuar:number = Number(tela.question('Deseja checar a tabuada de outro número?\nSe sim, digite 1.\nCaso não queira, digite 2.\n: '))

if(continuar === 2){
	loop = false
}
}
