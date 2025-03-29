const myPresentation = document.createElement("p");
const wifiConnect = document.createElement("p");

myPresentation.body.textContent =
	"Hi, I'm Pedro Omar iOS Developer, I'm 25 years old.";
document.body.appendChild(myPresentation);

wifiConnect.body.textContent =
	"Wifi Connect is a app that help to the users to use the Etecsa services with security nad stability.";
document.body.appendChild(wifiConnect);

const wifi = document.querySelector("img");

const profile = document.querySelector('.profile');
profile.style.justifyContent = 'center';

document.getElementById('alternarBtn').addEventListener('click', function() {
	const contenedor = document.getElementById('.container');
	contenedor.classList.toggle('alternar-vertical');
	
	const lateral = document.querySelector('.about');
	if(contenedor.classList.contains('alternar-vertical')) {
		lateral.textContent = "Texto abajo";
	} else {
		lateral.textContent = "Texto al lado";
	}
});



