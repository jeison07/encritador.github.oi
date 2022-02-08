
var input1 = document.getElementById("input-texto");
var input2 = document.getElementById("msg");
var button1 = document.getElementById("btn-encriptar");	
var button2 = document.getElementById("btn-desencriptar");	
var buttonCopiar = document.getElementById("btn-copy");
var encritacion = false;

			
			
function verificar(codigo){
	var validacion = /[^a-zñ\s]/g;
		if(validacion.test(codigo)){
			return "0";
		}
		else{ 
			return "1";
				
		}	
		
	input1.focus();
	

}
function encriptador(codigo){

	if(input1.value != " "){	
		var chars = {"a":"ai", "e":"enter", "i":"imes", "o":"ober", "u":"ufat"};
		var encriptado = codigo.replace(/[aeiou]/g, m => chars[m]);	
		return encriptado;			

		input2.value = " ";	
		input1.value = " ";	
		input2.value = encriptado;
		encritacion = true;	

	}

	else if(encritacion==false){	
		var chars = {"a":"ai", "e":"enter", "i":"imes", "o":"ober", "u":"ufat"};
		var encriptado = codigo.replace(/[aeiou]/g, m => chars[m]);	
		return encriptado;
	
		input2.value = encriptado;
		encritacion = true;		
	}
			
	input1.focus();
	
}

			
function desencriptador(){

	if(input1.value != " "){

		var desencriptado =document.getElementById("input-texto").value;	
		var desencriptado = desencriptado.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");
		input2.value = " ";	
		input1.value = " " ;		
		input2.value = desencriptado;
		encritacion = false;			
	}

	if(encritacion==true){
		var desencriptado =document.getElementById("msg").value;	
		var desencriptado = desencriptado.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");			
		input2.value = desencriptado;
		encritacion = false;		
	}
	input1.focus();
	event.preventDefault();
	
}


function copiar(){
	var copiando =document.getElementById("msg").select();
	document.execCommand('copy');
	event.preventDefault();
}

				

button1.addEventListener("click", function(event){
	event.preventDefault();
	var codigo = input1.value
	var texto = verificar(codigo);
	if(texto == "1"){
		var encritar = encriptador(codigo);
		input2.value = encritar;

	}
	else{ 
			
		alert("el texto no debe tener: Numeros, Mayusculas ni caracteres especiales");	
	}
})
button2.onclick = desencriptador;
buttonCopiar.onclick = copiar;


	

