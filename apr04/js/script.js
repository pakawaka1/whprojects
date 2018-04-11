// function getFullName() {
//     const name = prompt("What is your full name?").split(' ');
//     // const splitName = name.split(' ');
//     // console.log(name);
//     outputFullName(name);
// }

// // function outputFullname(nameArray) {
// //    console.log(nameArray);
// // //    document.getElementById('firstname').innerHTML = nameArray[0];
// // //    document.getElementById('middlename').innerHTML = nameArray[1];
// // //    document.getElementById('lastname').innerHTML = nameArray[2];
// // //    [nameArray.length - 1];
// // //  OR ||
// //     for(var i = 0; i < nameArray.length; i++){
// //         if(i = 0 || i = nameArray.length - 1) {
// //             console.log("We got the zeroth element!", nameArray[i]);
// //             document.getElementById('firstname').innerHTML += nameArray[i] + " ";
// //         } else {
// //             console.log("You are a loser.........")
// //         }
// //     }
// // }

// // // getFullName();

// var cars = ["jeep", "subaru", "honda"];
// console.log(cars[1]); // get the second element
// console.log(cars.length); // amount of elements in the array

// // PUSH METHOD - which adds to the array
// cars.push('bmv'); // adds another car to the array
// console.log(cars);

// // POP METHOD - which removes the last element from the array
// cars.pop();
// console.log(cars);

// var removedCar = cars.pop();
// console.log(cars);
// console.log(removedCar);

// // UNSHIFT METHOD - ADDS AN ELEMENT FROM THE BEGINNING
// cars.unshift("chevy", "chrysler");
// console.log(cars);

// // SHIFT METHOD - REMOVES AN ELEMENT FROM THE BEGINNING
// cars.shift();
// console.log(cars);

// // SPLICE METHOD - SPLICES ELEMENTS INTO THE ARRAY
// cars.splice(1, 0, "red", "green");
// console.log(cars);

// cars.splice(1, 1, "grape", "kiwi", "apple", "carrot");
// console.log(cars);

// cars.splice(2, 1);
// console.log(cars);

// // SLICE METHOD - REMOVES ELEMENTS FROM THE ARRAY
// cars.slice(5-4);
// var removed = cars.slice(2, 6);
// console.log(cars);
// console.log(removed);

// // 1.  Create a array of 5 movies
// // 2.  At the beginning of the array, add "Die Hard"
// // 3.  Remove the third and fourth movies, and in their place, put "Godfather I", "Godfather II", "Godfather III".
// // 4.  Add "Guardians of the Galaxy" to the end
// // 5.  Duplicate INDEX 1 - 3 into the array.
// // 6.  Remove the first movie from the original array 
// // 7.  Console the second to last movie
// // bonus 8. Delete everything and add Jurassic Park

// var movies = ["Bad Boys 1", "Bad Boys 2", "Bad Boys 3", "Bad Boys 4", "Bad Boys 5"]; //1

// movies.unshift("Die Hard");//2
// console.log(movies);  

// movies.splice(2, 2, "Godfather I", "Godfather II", "Godfather III");//3
// console.log(movies);

// movies.push("Guardians of the Galaxy");//4
// console.log(movies);

// movies.unshift("Bad Boys 1", "Godfather I", "Godfather 2");
// console.log(movies);

// movies.shift();
// console.log(movies);

// console.log(movies[8]);

// // /**
//  * IF / ELSE IF / IF
//  */

// function getUserAge(){
//     var userage = 32prompt('how old are you?');

//     // AND &&
//     // OR ||
    
//     if(userage < 21) {
//     console.log('not old enough');
//     } else if(userage == 21) {
//         console.log('get some!');
//     } else {
//         console.log('you old enough!');
//     }
// }
// getUserAge();

// TERNARY OPERATOR

// function getAge() {
//     var age = prompt('What is my age again?');
//     (age >="21") ? console.log('true') : console.log('false');
// }

// getAge();







// write a function a prompt the user telling the user a story asking for 1 of 3 choices

// each choice continues to their own function

// wash rinse repeat thrice more

//SIMPLE VERSION:
// alerts, prompts, confirms
// if / else if / else


// COMPLEX VERSION: 
// loops
// arrays

const getStory = () => {
    var one = prompt('You are walking through the forest during the daytime.  Daytime turns to dusk.  You must get home.  However, there is a fork in the road with three paths: A, B and C.  Please choose one:  A, B or C');
    if(one === A) {
        prompt('Since you chose Path A, your path is a strange one.  There is a talking bear named Yogi and he likes picnic baskets.  He asks, "Do you have a picnic basket for me?"  Please choose yes or no.');
    };
        var two = () => {
        if(one === A) {
            prompt('You are the winner');
        } else { (one === B); {
            prompt('You are the loser');
        }
        
        }
        }
    
    
    
    
    if(one === B) {
        prompt('Since you chose Path B, your path is a psychedelic one.  There is a talking cat named Chester and wants to give you some mushrooms to eat. He asks, "Do you want to eat a mushroom or two?" Please choose please or noway');
    };
    
    
    if(one === C) ;{
        prompt('Since you chose Path C, your path is a normal one.  There is nothing strange or psychedelic, but it is very quiet.  You seem to be on the correct path.  Finally, you reach home.  You choose the correct path.  Good job!');
    }
};
getStory(); 