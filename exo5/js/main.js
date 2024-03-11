input = document.getElementById("convert").ariaValueMax;

const box_result = document.createElement("div") // Creation d'une div
box_result.classList.add("box") //Ajout d'une classe sur l'élément
body.appendChild(box_result)
box_result.innerText = input
