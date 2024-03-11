function generateColor(){
    const random = (Math.random() * 0xFFFFFF << 0).toString(16);
    return random;
}

let i = 0
const box = document.createElement("div") // Creation d'une div
const grid = document.querySelector(".grid")//Selectionne le chemin parent

document.addEventListener('keydown', function(event){
    if(event.key == 'ArrowDown'){
        box.classList.add("box") //Ajout d'une classe sur l'élément
        //i++
        const newbox = box.cloneNode()// On clone l'élement 

        newbox.addEventListener("click", function(){
            newbox.style.backgroundColor = "black";
        })
        grid.appendChild(newbox)
        newbox.style.backgroundColor = "#"+ generateColor();
    }
    else if (event.key == 'ArrowUp'){
        grid.removeChild(grid.lastChild)
    }
})

