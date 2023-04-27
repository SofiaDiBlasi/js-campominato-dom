let startButton = document.getElementById("start");
let container = document.querySelector("div.container");
let punteggio = 0;

//creo una funzione: dato un numero creerò un div con il numero scritto al suo interno
function createDiv(numero) {
    let div = document.createElement("div");
    div.className = "square";
    div.innerHTML += numero;
    return div;
}

//creo un'altra funzione, dati un div padre ed un div figlio, attaccherà (in append) il figlio al padre
function attachChild(divPadre, divFiglio){
    divPadre.append(divFiglio);
}

//funzione per generare numeri random 
function numberRandom() {
   return Math.floor(Math.random() * 100) + 1;
}

//creazione di array con 16 numeri casuali distinti
function randomArray() {
    let array = [];

    while (array.length <= 16) {
        let rn = numberRandom();
        if (!array.includes(rn)){
             array.push(rn);
        }
    }
    return array;
}


//creo un evento al bottone per quando andrà ad essere cliccato
startButton.addEventListener("click", function(){
    container.innerHTML = "";
    punteggio = 0;
    let arrayBomb = randomArray();

    for (let i = 1; i <= 100 ; i++) {
       let createdDiv = createDiv(i);

        if (!arrayBomb.includes(i)){
            createdDiv.addEventListener("click", function(){
                console.log("this: ", this.innerHTML);
                this.classList.toggle("clicked");
                punteggio++;
            });
        } else {
            createdDiv.addEventListener("click", function(){
                this.classList.toggle("bomba");
                let divPunteggio = document.createElement("div");
                divPunteggio.className = "text-center";
                divPunteggio.innerHTML = "Hai perso, il tuo punteggio è: " + punteggio;
                container.append(divPunteggio);
            });
        }
        attachChild(container, createdDiv);
    }
})

