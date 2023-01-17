const fotos = document.querySelectorAll(".imagem");
const fotos2 = document.querySelectorAll(".imagem2");

const pri = document.getElementById("pri");
const pri2 = document.getElementById("pri2");

const sec = document.getElementById("sec");
const sec2 = document.getElementById("sec2");
/*const sec = document.querySelector(".sec");*/

const info = document.querySelector(".desc");
const info2 = document.querySelector(".desc2");

var desc = [];

var desc2 = [];
const btnEsq = document.querySelector(".esquerda");
const btnDir = document.querySelector(".direita");
const btnEsq2 = document.querySelector(".esquerda2");
const btnDir2 = document.querySelector(".direita2");

btnEsq.addEventListener("click", prev);
btnDir.addEventListener("click", next);
btnEsq2.addEventListener("click", next2);
btnDir2.addEventListener("click", prev2);

info.textContent = desc[0];
setInterval(next, 3000);
//console.log(fotos);
function next(){
	let aux;
	for(let i = 0; i < fotos.length-1; i++){	
			setTimeout(()=>{
			pri.style.cssText =
				"opacity: 0.5;"  +
				"transition: 1s ease-in;";	
			}, 2000);
			aux = fotos[i].src;
			fotos[i].src = fotos[i+1].src;
			fotos[i+1].src = aux;

			aux = desc[i];
			desc[i] = desc[i+1];
			desc[i+1] = aux;
			pri.style.cssText =
				"opacity: 1;"  +
				"transition: 1s ease-in;";

			/*pri.classList.toggle("pri1");
			sec.classList.toggle("sec1");*/
	}
	info.textContent = desc[0];	
	/*setTimeout(()=>{
	pri.style.cssText =
		"opacity: 0.5;"  +
		"transition: 1s ease-in;";
}, 2000);*/
}
function prev(){
	let aux;
	for(let i = fotos.length-1; i > 0; i--){	
			aux = fotos[i].src;
			fotos[i].src = fotos[i-1].src;
			fotos[i-1].src = aux;

			aux = desc[i];
			desc[i] = desc[i-1];
			desc[i-1] = aux;
	}
	info.textContent = desc[0];
}

info2.textContent = desc2[0];
console.log(info2);
setInterval(prev2, 3000);
console.log(info2);
function prev2(){
	let aux;
	for(let i = 0; i < fotos2.length-1; i++){	
			setTimeout(()=>{
			pri2.style.cssText =
				"opacity: 0.5;"  +
				"transition: 1s ease-in;";	
			}, 2000);
			aux = fotos2[i].src;
			fotos2[i].src = fotos2[i+1].src;
			fotos2[i+1].src = aux;

			aux = desc2[i];
			desc2[i] = desc2[i+1];
			desc2[i+1] = aux;
			pri2.style.cssText =
				"opacity: 1;"  +
				"transition: 1s ease-in;";

			/*pri.classList.toggle("pri1");
			sec.classList.toggle("sec1");*/
	}
	info2.textContent = desc2[0];	
	/*setTimeout(()=>{
	pri.style.cssText =
		"opacity: 0.5;"  +
		"transition: 1s ease-in;";
}, 2000);*/
}
function next2(){
	let aux;
	for(let i = fotos2.length-1; i > 0; i--){	
			aux = fotos2[i].src;
			fotos2[i].src = fotos2[i-1].src;
			fotos2[i-1].src = aux;

			aux = desc2[i];
			desc2[i] = desc2[i-1];
			desc2[i-1] = aux;
	}
	info2.textContent = desc2[0];
}


// ===========================================
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

// ==================================================
