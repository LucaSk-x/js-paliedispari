/* chiedere al utente di inserire un parola */
/* ____________________________________ */

/* creare la funzione wordPlindroma */
/* scomporre la prola e inserire le lettere in due array:
nel primo inserire le lettere in ordine
nel secondo al contrario */

/* confronto gli elementi con un ciclo */

let btn = document.getElementById("btn")
const textResult = document.getElementById("textResult")



function checkpalindromo (word) {

    /* inserisco vaolri in arrayStraight */
    let arrayStraight = word.split("");

    let arrayContrary = [];

    /* inserisco valori in arrayContrary */
    for (let i = word.length - 1; i >= 0; i--) {
        arrayContrary.push(word[i]);
    }
    /* creo un ciclo while e controllo in volori */

    let matchesLetter = true;
    for (let i = 0; i < arrayStraight.length; ){
        if (arrayStraight[i] === arrayContrary[i]) {
            matchesLetter = true;
            textResult.innerHTML = `<span> <h4 class="p-3">${word} è un parola palindroma</h4> </span>`
            i++
        } else {
            textResult.innerHTML = `<span> <h4 class="p-3">Inserisci una parola corretta! <br> "${word}" non è un parola palindroma.</h4> </span>`
            matchesLetter = false;
            i = arrayStraight.length + 1;
        }
    }

    
    return word;
};


btn.addEventListener("click", function() {

    const wordInput = document.getElementById("floatingInput");
    const wordUser = wordInput.value;

    checkpalindromo (wordUser)



    console.log(checkpalindromo(wordUser));
    console.log(wordUser);
    

})

