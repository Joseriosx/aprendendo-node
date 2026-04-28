const tela = require('readline-sync')

let loop:boolean = true

while(loop){

        const aluno = (tela.question('Bem vindo ao sistema de Médias.\nInsira o nome do aluno:  '))
        const nota1:number = Number(tela.question('Insira a primeira nota: '))
        const nota2:number = Number(tela.question('Insira a segunda nota: '))
        const nota3:number = Number(tela.question('Insira a terceira nota: '))

        const media = (nota1 + nota2 + nota3)/3

        if(media <= 4) {
                console.log(`O aluno: ${aluno} obteve a média: ${media} e está REPROVADO.`)
}
        else if (media >= 7) {
                console.log(`O aluno: ${aluno} obteve a média: ${media} e está APROVADO.`)
}
        else {
                console.log(`O aluno ${aluno} obteve a média: ${media} e está de RECUPERAÇÃO.`)
}
        const continuar:number = Number(tela.question('Deseja continuar no sistema?\nSIM - 1 | NÃO - 2'))

        if(continuar === 2) {
                loop = false
        }
}
