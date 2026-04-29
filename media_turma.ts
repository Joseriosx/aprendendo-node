//lista bloco array

let alunos = [
    { nome: "BOB", nota: 8 },
    { nome: "João", nota: 5 },
    { nome: "Maria", nota: 9 }
];

console.log("Alunos aprovados:");

//O Loop: 
for (let aluno of alunos) {
    
    // Se a nota for maior que 7
    if (aluno.nota > 7) {
        console.log(aluno.nome + " passou com nota " + aluno.nota);
    }
}
