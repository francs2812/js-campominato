// ------------------function------------------
//genera numeri random
function randomNumber(min, max) {
    var x = Math.floor((Math.random() * max) + min);
    return x;
}

//verifica numeri nell'arrey
function scanNumber(element, array) {
    for (var i = 0; i<array.length; i++) {
        if (element == array[i]){
            checkNumber = true;
        }
    }
}

var checkNumber = false;

