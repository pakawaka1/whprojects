// // /**
// //  * MATH OBJECT
// //  * 
// //  */
// // //  INTEGERS - WHOLE NUMBERS
// // //  FLOATS - DECIMALS

// // var wha = (.03 + .01);


// // //Math.round();
// // var rounded = Math.round(0.00000000000001);
// // // .49 && below rounds down
// // // .5 && up rounds up

// // //Math.ceil()
// // var roundedUp = Math.ceil(0.00000000000001);

// // //Math.floor();
// // var roundedDown = Math.floor(0.99999999999999999);

// // //Math.PI();
// // var pi = Math.PI;
// // //Math.pow();
// // console.log(Math.pow(8,2));

// // //Math.sqrt();
// // console.log(Math.sqrt(64));

// // //Math.random();
// // console.log(Math.random());

// // console.log('.round()' + rounded, '.ceil():'+ roundedUp, '.floor():' + roundedDown, '.PI:' + pi);

// var rand = Math.random();
// rand = Math.floor(rand * 11);
// console.log(rand);

// function pickANum() {
//     var userNum = prompt('Guess a number between 0 and 10.....');
//     checkNum(userNum);
// }
// pickANum();

// function pickAnotherNum() {
//     var userNum = prompt('Guess again.....');
//     checkNum(userNum);
// }
// pickANum();

// function checkNum(num) {
//     if(num < rand){
//         alert(num + ' is too low.  Pick again');
//     } else if (num > rand){
//         alert(num + ' is too high.  Pick again dweeb!');
//     } else {
//         alert(num + ' is the right number!! You are the grand winner!');
//     }
// 

var userPick = document.getElementById('userPick');
var submitBtn = document.querySelector('#submit');
var userPickRes = document.querySelector('h1');
var resetBtn = document.querySelector('#reset');


submitBtn.addEventListener('click', getUserPick);
resetBtn.addEventListener('click', getRandNum);


//GLOBAL VARIABLE
var rand;
var attempts = 3;


function getRandNum() {
    attempts = 3;
    userPickRes.innerHTML = '';
    userPick.value = '';
    var rand = Math.random();
    rand = Math.floor(rand * 11);
    console.log(rand);
}
getRandNum();

// Clue: Where we can GET a value, we can also SET a value
function getUserPick() {
    attempts = attempts - 1;
    var userNum = parseInt(userPick.value);
    checkUserPick(userNum);
    userPick.value = '';
}

function checkUserPick(x) {
    if(attempts > 0){
        if(x < rand){
            printUserRes(x + ' is too low.  Pick again');
        } else if (x > rand){
            printUserRes(x + ' is too high.  Pick again dweeb!');
        } else {
            printUserRes(x + ' is the right number!!   You are the grand winner!');
        }
    } else { 
        printUserRes('Game Over');

    }

function printUserRes(userRes) {
    userPickRes.innerHTML = userRes;
    };
};

//add another button that will run a function
//to RESET the random number?//
