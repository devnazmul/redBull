function changeImage(cls, value){
	const img = document.querySelector(cls);
	img.src = value;
}
function changeTextColor(cls, value){
	const color = document.querySelector(cls);
	color.style.color = value;
}
function changeBackground(cls, value){
	const color = document.querySelector(cls);
	color.style.background = value;
}
function changeText(cls, value){
	const txt = document.querySelector(cls);
	txt.innerHTML = value;
}



