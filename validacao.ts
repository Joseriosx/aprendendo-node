const tela = require('readline-sync')
let i:boolean = true

while (i) {

	let numero:number = Number(tela.question('Digite o numero de 1 a 10: ')) 


	if (numero >10)	{

        	console.log("POR FAVOR, DIGITE NOVAMENTE")
       
	}


	else {      
        	console.log("PARABENS, você colocou " + numero+ " e está conforme pedimos")
		break
	}
}

