// le nom des joueur:

let player1 = "PLAYER 1";
let player2 = "PLAYER 2";

// demander aux joueurs de saisir un nom :

document.getElementById('player1').addEventListener('click', function (e) {
    console.log("teztez");
    player1 = prompt("Saisissez votre nom joueur 1 !")
    document.getElementById('player1').innerText = player1;
    e.preventDefault
    e.stopPropagation;
});


document.getElementById('player2').addEventListener('click', function () {
    player2 = prompt("Saisissez votre nom joueur 2 !")
    document.getElementById('player2').innerHTML = player2;
    e.preventDefault
    e.stopPropagation;
});

// ***************************************************************************************** \\


/* 
 - si player1 turn : affiche un dé aléatoirement
     - si result = 1, alors ca sera le tour du player2
     
 _ si result (player1 ou player2) = 100, fin de la partie et le player a gagné
  */


// player1 turn

let randomNumber1 = 0;


document.getElementById('play').addEventListener('click', function (e) {
    console.log('play');
    //e.preventDefault;
    //e.stopPropagation;
    setTimeout(function () {

        // let curentPlayer 
        let randomNumber1 = Math.floor(Math.random() * 6) + 1;
        let randomNumber2 = Math.floor(Math.random() * 6) + 1;

        let currentResult1 = 0;
        currentResult1 += randomNumber1;
        let result = 0;
        result += currentResult1;


        // document.getElementById("img").setAttribute("src",
        // "images/D" + randomNumber1 + ".png");

        //document.getElementById('result1').innerHTML = randomNumber1;  

        if (randomNumber1 == 1) {


            document.getElementById("img").setAttribute("src",
                "images/D" + randomNumber1 + ".png");
            document.getElementById('result1').innerHTML = 0;
            document.getElementById("h1").innerHTML = "Draw!";

        } else if (randomNumber1 != 1) {
             document.getElementById("img").setAttribute("src",
                "images/D" + randomNumber1 + ".png");
            document.getElementById('result1').innerHTML = currentResult1;
            document.getElementById('curentResult1').innerHTML = result;
            document.getElementById("h1").innerHTML = (player2 + " WINS!");
        } else {
            document.getElementById("h1").innerHTML = (player1 + " WINS!");
        }
    }, 2500);
});


// renitialisation de la partie (nouvelle partie)
let currentResult1 = 0;
let currentResult2 = 0;
let result1 = 0;
let result2 = 0;
let currentPlayer = 0;
let playGame = true;

document.getElementById('newGame').addEventListener('click', function () {


    document.getElementById('currentResult1').innerHTML = 0;
    document.getElementById('currentResult2').innerHTML = 0;
    document.getElementById('result1').innerHTML = 0;
    document.getElementById('result2').innerHTML = 0;

});
/* dice.forEach(function(die){
     die.classList.add("shake");
 });
 setTimeout(function(){
     dice.forEach(function(die){
         die.classList.remove("shake");*/

// document.getElementById("die").setAttribute("src", image[img1]);

//})
