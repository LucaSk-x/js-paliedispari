let btn = document.getElementById("btn");
let numeroUtente;

const textResult = document.getElementById("textResult")
const valori = document.getElementById("valori")


btn.addEventListener ("click", function() {
    while (numeroUtente === undefined) {
        let userInput = prompt("Inserisci un numero tra 1 e 5.");
        let userNumber = parseInt(userInput);
    
        if (userNumber >= 1 && userNumber <= 5) {
            numeroUtente = userNumber;
        } else {
            alert('inserisci un numero compreso tra 1 e 5')
        }
    }

    let check;
    let typeNumber;

    while (check == undefined) {
        let typeNumber = prompt("Scegli tra pari o dispari");
        console.log(typeNumber)
    
        if (typeNumber === "pari") {
            check = true;
        }else if (typeNumber === "dispari") {
            check = false;
        } else {
            alert('inserisci "pari" o "dispari" ')
        } 
    }

    function generaNumero(min, max) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
        return randomNumber;
    }

    function isPari (num) {
        if (num % 2 === 0) {
            return true;
        } else {
            return false;
        }
    };

    let somma = numeroUtente + generaNumero(1, 5);
    if (isPari(somma) === check) {
        textResult.innerHTML = `<span> <h4 class="p-3">Hai vinto</h4> </span>`
    } else {
        textResult.innerHTML = `<span> <h4 class="p-3">Hai perso</h4> </span>`
    }



    console.log(isPari(somma));
    console.log(numeroUtente);
    console.log(somma);
});
