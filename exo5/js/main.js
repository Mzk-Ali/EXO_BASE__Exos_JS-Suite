function convertir(euro){
    result = (euro * 6.55957).toFixed(2) // Arrondi à 2 décimal
    return result
}

const box_result = document.createElement("div") // Creation d'une div
box_result.classList.add("box") //Ajout d'une classe sur l'élément


document.addEventListener('keyup', function(){
    input = document.getElementById("convert").value;

    console.log(input)
    document.getElementById("container").appendChild(box_result)
    if (isNaN(input)){
        box_result.innerText = "Vous devez saisir une valeur numérique"
    }
    else{
        box_result.innerText = convertir(input) + " francs"
    }
})


