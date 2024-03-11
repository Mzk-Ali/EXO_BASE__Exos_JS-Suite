// Fonction permettant une réaction visuelle lorsqu'on clique sur une case
function showReaction(type, clickedBox){
    clickedBox.classList.add(type)
        setTimeout(function(){
            clickedBox.classList.remove(type)
        }, 800)
}


const box = document.createElement("div") // Creation d'une div
box.classList.add("box") //Ajout d'une classe sur l'élément
const grid = document.querySelector(".grid")//Selectionne le chemin parent

//Affiche un message demandant une valeur
valeur = prompt('Avec quel signe, voulez vous commencer le jeu? X ou O')
let finish = 0

const msg = document.createElement("div")
msg.classList.add("msg")
document.body.appendChild(msg)//Ajout de l'élément msg à l'intérieur de body


for(let i=1; i <= 9; i++){
    const newbox = box.cloneNode()// On clone l'élement 
    grid.appendChild(newbox)
    
    //On attend l'évenement "click"
    newbox.addEventListener("click", function(){
        console.log(finish)
        console.log(newbox)
        
        //Verifications si l'élement est pleine ou vide en texte
        if(newbox.innerHTML == ""){
            showReaction("succes", newbox)
            newbox.innerText = valeur
            finish++

            if(valeur == "X"){
                valeur = "O";
                
            }
            else if(valeur == "O"){
                valeur = "X";
            }
            else
            {
                alert("Les signes ne sont pas bons !!!!")
            }
        }
        else
        {
            showReaction("notice", newbox)
        }

        msg.innerHTML = "C'est au tour de " + valeur;
        if (finish == 9){
            msg.innerHTML = "La partie est terminée";
        }

    })
}



