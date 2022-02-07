
var input1 = document.getElementById("input-texto");
var input2 = document.getElementById("msg");
var button1 = document.getElementById("btn-encriptar");	
var button2 = document.getElementById("btn-desencriptar");	
var buttonCopiar = document.getElementById("btn-copy");
var encritacion = false;
var codigo 

= document.getElementById("input-texto").value;
			
			
function verificar(codigo){
	var ok = false;
	for(var i = 0; codigo.length; i++){
		if(codigo[i].codePointAt(0)>=97 && codigo[i].codePointAt(0)<=122){
			ok = true;
		}
		else{ 
			ok = false;
			alert("el texto no debe tener: Numeros, Mayusculas ni caracteres especiales");	
			break;
		}	
	}
	return ok;	
	input1.focus();
	event.preventDefault();		
}
function encriptador(){
	verificar(codigo);
	if(input1.value != " "){
		var encriptado = document.getElementById("input-texto").value;	
		var chars = {"a":"ai", "e":"enter", "i":"imes", "o":"ober", "u":"ufat"};
		encriptado = encriptado.replace(/[aeiou]/g, m => chars[m]);				

		input2.value = " ";	
		input1.value = " ";	
		input2.value = encriptado;
		encritacion = true;	
	}

	else if(encritacion==false){
		var encriptado = document.getElementById("msg").value;	
		var chars = {"a":"ai", "e":"enter", "i":"imes", "o":"ober", "u":"ufat"};
		encriptado = encriptado.replace(/[aeiou]/g, m => chars[m]);	
	
		input2.value = encriptado;
		encritacion = true;		
	}
	else if(encriptado===encriptado.toUpperCase()){
		alert("aaa");

	}



			
	input1.focus();
	event.preventDefault();
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

				

button1.onclick=encriptador;
button2.onclick = desencriptador;
buttonCopiar.onclick = copiar;


	

