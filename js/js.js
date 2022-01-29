const botones = ['hs0', 'hs1', 'hs2', 'hs3', 'hs4', 'hs5', 'hs6', 'hs7', 'hs8', 'hs9', 'hs10'];
const secciones = ['presenta', 's1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10'];

function desplegar(desde, parte){
   let quien = document.getElementById(desde).value;

   if (quien=='-') {
         document.getElementById(parte).style.display = 'none';
         document.getElementById(desde).value = '+';
   } else {
         document.getElementById(parte).style.display = 'block';
         document.getElementById(desde).value = '-';
   }
}

function ocultarTodo(){
      let numeroSecciones = secciones.length;
      
      for (let i=0; i<numeroSecciones; i++) { 
            document.getElementById(secciones[i]).style.display = 'none';
            document.getElementById(botones[i]).value = '+';
	}
}
function mostrarTodo(){
      let numeroSecciones = secciones.length;
      
      for (let i=0; i<numeroSecciones; i++) { 
            document.getElementById(secciones[i]).style.display = 'block';
            document.getElementById(botones[i]).value = '-';
	}
}