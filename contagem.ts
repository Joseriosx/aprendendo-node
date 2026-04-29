const readline = require('readline');

console.log("iniciando contagem regressiva...");

// a estrutura do for:
// 1. let i = 10: começamos no 10 
// 2. i >= 0: o laço continua enquanto i for maior ou igual a zero
// 3. i--: subtraimos 1 a cada volta (decretamento)
for (let i = 10; i >= 0; i--) {
	console.log(i);
}

console.log("fim da contagem!");
