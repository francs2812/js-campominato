// ------------------function------------------
//genera numeri random
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//chiedi il livello di difficolta
var levelDif = 0;
var level = prompt("Digita livello di difficoltà da 0 a 2");

switch(level) {
    case "0" :
        var levelDif = 100;
    break;
    case "1" :
        var levelDif = 80;
    break;
    case "2" :
        var levelDif = 50;
    break;
}
console.log(levelDif);
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
        var number = randomNumber(1, levelDif);
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
