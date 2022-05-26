let btn = document.getElementById("btn");
let numeroUtente;

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

    function generaNumero(min, max) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
        return randomNumber;
    }

    let somma = numeroUtente + generaNumero (1, 5);

    console.log(generaNumero);
    console.log(somma);
});
