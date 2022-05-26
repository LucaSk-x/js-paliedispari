let btn = document.getElementById("btn");
let numeroUtente;
let check;

function generaNumero(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
    return randomNumber;
}

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


/*     while (check === undefined) {
        let typeNumber = prompt("Scegli tra pari o dispari");
    
        if (typeNumber === "pari") {
            check = typeNumber;
        }else if (typeNumber === "dispari") {
            check = typeNumber;
        } else {
            alert('inserisci "pari" o "dispari" ')
        }
    } */

    let somma = numeroUtente + generaNumero (1, 5);

    if (somma % 2 === 0)

    console.log(generaNumero);
    console.log(somma);
});
