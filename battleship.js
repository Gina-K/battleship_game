var location1 = 3;
var location2 = 4;
var location3 = 5;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) {
    guess = prompt("Ready, aim, fire! (enter a number 0-6):");
    if (guess < 0 || guess > 6) {
        alert("Please enter a valid cell number!");
    } else {
        guesses = guesses + 1;
        if (guess == location1 || guess == location2 || guess == location3) {

            hits = hits + 1;
            alert("HIT!");
        } else {
            alert("MISS!");
        }
    }
    if (hits == 3) {
        isSunk = true;
        alert("You sank my battleship!");
    }
}

var stats = "You took " + guesses + " guesses to sink the battleship, " + "which means your shooting accuracy was " + (3 / guesses);
alert(stats);


// I've defined the ship location random by myself. Delete when do it by book

/*
var location1 = getRandomInt(7);
var location2;
var location3;

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

if (location1 < 6) {
    location2 = location1 + 1;
} else {
    location2 = location1 - 1;
}

if (location2 > location1) {
    if (location2 < 6) {
        location3 = location2 + 1;
    } else {
        location3 = location1-1
    }
} else {
    location3 = location2 - 1;
}


console.log(location1);
console.log(location2);
console.log(location3);*/