// ------------------function------------------
//genera numeri random
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//verifica numeri nell'arrey
function scanNumber(element, array) {
    for (var i = 0; i<array.length; i++) {
        if (element == array[i]){
           return true;
        }
    }
    return false;
}

//crea un array con 16 numeri immaginari da 1 a 100

var bombs = [];
    while(bombs.length < 16) {
        var number = randomNumber(1, 100);
        //console.log(number)
        if (!scanNumber(number, bombs)){
          bombs.push(number);
          //console.log(bombs);
        }
    }
    
console.log(bombs);

//richiesta numeri utente

var numbersUser =[];
var point=0;
var game = false;
while(numbersUser.length < 8 && game == false) {
    var numberUser = parseInt(prompt("Digita un numero"));
    if(!scanNumber(numberUser, numbersUser)) {
        if(!scanNumber(numberUser, bombs)){
            numbersUser.push(numberUser);
            console.log(point++,numberUser);
        }else {
            game = true;
            alert("GameOver \n il tuo punteggio è "+ point);
        }
    }
 }
 if(numbersUser.length == 8) {
    alert("Hai vinto! \n il tuo punteggio è "+ point);
 }

console.log(numbersUser);
