function App(state){
	var cuadrado = document.createElement("div");
	cuadrado.className = "cuadrado";
	var circulo1 = document.createElement("div")
	circulo1.className = "circulo1";
	var circulo2 = document.createElement("div")
	circulo2.className = "circulo2";
	var circulo3 = document.createElement("div")
	circulo3.className = "circulo3";

	cuadrado.appendChild(circulo1);
	cuadrado.appendChild(circulo2);
	cuadrado.appendChild(circulo3);
	
	if (state == 0) {
		circulo1.style.opacity =  1.0;
	};
	if (state == 2) {
		circulo2.style.opacity =  1.0;
	};
	if (state == 1) {
		circulo3.style.opacity =  1.0;
	};
                                                
return cuadrado;
}

function render(mountpoint,component,state){
	mountpoint.innerHTML = " ";
	mountpoint.appendChild(component(state));
}
var semaforo = document.getElementById('semaforo');
state = 0;
render(semaforo,App,state);
var next = document.getElementById('next');

next.onclick = function(){
render(semaforo,App,state);
	state++;
	if(state > 2){
		state = 0;
	};
};	










