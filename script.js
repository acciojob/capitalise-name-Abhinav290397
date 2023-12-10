//your JS code here. If required.
const Input = document.querySelector("#fname");
Input.addEventListener("blur",() =>{
	Input.value = Input.value.toUpperCase();
});