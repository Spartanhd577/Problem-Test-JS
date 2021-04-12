//Numeros compas
var c = parseInt(prompt("ingresa valor del compas "));

for(var i = 1; i <= c - 1; i++ ){
	 for(var j = i + 1; j <= c; j++ ){
		if(amigos(i, j)){
			console.log(i + " y " + j +" ohohoh lo lograste son numeros compas")
		 }
	}
}

function amigos(n, c){
	return (divisor(n) ===  c) && (divisor(c) == n);
}

function divisor(c){
	var suma = 0;
	for(var i = 1; i <= c-1; i++ ){
		if(c % i == 0){
      suma += i;
    }
      
    
			
		
	}

	return suma;
}