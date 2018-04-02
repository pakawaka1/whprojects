// const p1 = document.getElementById('p1');
// console.log(p1);

// const p1q = document.querySelector('#p2');
// console.log(p1q);

// const pClass = document.querySelector('.p');
// console.log(pClass);

// const pLast = document.querySelector('p:last-of-type');
// console.log(pLast);
// pLast.style.fontSize = '28px';

// const pClasses = document.querySelectorAll('.p');
// console.log(pClasses);
// pClasses[2].style.fontSize = '8px';
// pClasses[1].style.color = 'red';
// pClasses[3].style.fontWeight = 'boldest';

// const pByClassname = document.getElementsByClassName('p');
// console.log(pByClassname);
// pByClassname[0].style.fontSize;

// const pByTagName = document.getElementsByTagName('p');
// console.log(pByTagName);
// pByTagName[9].style.color = 'yellow';
// console.log(pByTagName.length);


// FOR LOOP
// |-----------------------| ARGUMENTS
// |---------| NEW VARIABLE
//            |------| NUMBER OF LOOPS
//                     |--| INCREMENTOR

// for(var i = 0; i < 10; i++) {
//     pByTagName[i].style.color = 'red';
//     console.log(i);
// }

// Create a new variable of your name
// Using the length of your name
// console.log each index to the browser

// var myName = 'Frankenstein';
// console.log(myName.length);

// for(var i = 0; i <myName.length; i++) {
//     console.log(i);
//     console.log(myName[i]);


// Create a function that prompts the user for their name

// Create a seperate function that loops through each letter logging it into the browser

// function getUsername() {
//     var username = prompt('your name');
//     console.log(`${username} from inside of the function`);

//     printUsername(username); /*argument*/
//     }
// getUsername();

// function printUsername(x)/*Parameter*/ 
//     for(var i = 0; i < x.length; i++) {
//         console.log(x[i]);
//     }
// };
        
        


// Get users two numbers
//  function getUserNums() {
//     var num1 = prompt('Please enter a number');
//     var num2 = prompt('Please enter another number');
//     addUserNums(num1, num2);
// }

// // Alert Added Numbers 
// function addUserNums(x, y) {
//     alert(parseInt(x) +parseInt(y));
// }

// getUserNums();

// write a function that asks the user for three colors
// write 3 more function which loops through each argument array


var paragraphs = document.querySelectorAll('p');

function getColors() {

    var col1 = prompt('Please enter a color');
    var col2 = prompt('Please enter another color');
    var col3 = prompt('Please enter a third color');

    assignColors(col1, col2, col3);
};

function assignColors(x, y, z) {
    for(var i = 0; i < arguments.length; i++) {
        paragraphs[i].style.color = arguments[i];
    }
}

getColors();



//function (x)/*Parameter*/ 
//     for(var i = 0; i < x.length; i++) {
//         console.log(x[i]);
//     }
// };

// ['p', 'p', 'p']
// ['red', 'green', 'blue']

// p1.color = red
// P2 COLOR = "green"
// p3.color = "blue"