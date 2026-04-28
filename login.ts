const readline = require('readline');

// Definimos a senha correta como uma constante
const SENHA_CORRETA = "Miguel2026";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite a sua senha: ', (entrada: string) => {
  // Validação simples
  if (entrada === SENHA_CORRETA) {
    console.log('Acesso concedido! Bem-vindo.');
  } else {
    console.log('Senha incorreta. Acesso negado.');
  }

  rl.close();
});
