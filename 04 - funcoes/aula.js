	function sayMyName(name	){
			console.log('Your name is: '+name);
	}

	function incrementarJuros(valor, percentualJuros){
		const valorAtualizado = percentualJuros*valor;
		return valorAtualizado.toFixed(2);
	}
	console.log(incrementarJuros(100,1.1));
	console.log(incrementarJuros(100, 1.15));
	console.log(incrementarJuros(100, 1.2));
	sayMyName('Alex Sandro');