import Image from 'index.html'

const myPresentation = document.createElement("p");
const wifiConnect = document.createElement("p");

myPresentation.body.textContent =
	"Hi, I'm Pedro Omar iOS Developer, I'm 25 years old.";
document.body.appendChild(myPresentation);

wifiConnect.body.textContent =
	"Wifi Connect is a app that help to the users to use the Etecsa services with security nad stability.";
document.body.appendChild(wifiConnect);

const wifi = document.querySelector("img");

wifi.onclick = () => {
	const src = wifi.getAttribute("src");
};

var windows = false;

windows.open("https://wwww.google.com")