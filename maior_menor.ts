// 1. Definimos o array de números
const numeros: number[] = [10, 5, 20, 8, 3, 15];

// 2. Criamos uma função para garantir a segurança dos tipos
function encontrarMaiorEMenor(arr: number[]) {
    // Se o array estiver vazio, não há o que buscar
    if (arr.length === 0) {
        console.log("O array está vazio.");
        return;
    }

    // Inicializamos as variáveis com o primeiro valor do array
    // O uso do "as number" ajuda a evitar o erro de 'undefined' no Vim/Terminal
    let maior: number = arr[0] as number;
    let menor: number = arr[0] as number;

    for (let i = 1; i < arr.length; i++) {
        const atual = arr[i] as number;

        if (atual > maior) {
            maior = atual;
        }

        if (atual < menor) {
            menor = atual;
        }
    }

    console.log(`Lista de números: [${arr.join(', ')}]`);
    console.log(`-----------------------------`);
    console.log(`Maior valor encontrado: ${maior}`);
    console.log(`Menor valor encontrado: ${menor}`);
}

// 3. Chamamos a função
encontrarMaiorEMenor(numeros);
