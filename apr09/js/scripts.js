
// function welcomeMsg(str){
//     //console.log(str);
//     return "Welcome " + str;

// }
// // console.info('Matt');

// console.log(welcomeMsg('Matt'));
// function calcNums(x, y) {
//    // console.log(x + y);

//    return x + y;
// // }

// console.log( calcNums(3,2));

// var h3 = document.querySelector('h3');

// function concatStrings (str1, str2){
//     return str1 + '' + str2;
// }

// function getFirstname() {
//     return prompt('What is your first name?');
// }

// function getLastname() {
//     return prompt('What is your last name?');
// }

//     user.textContent = concatStrings(getFirstname(), getLastname());
//     html.innerHTML = concatStrings(getFirstname(), getLastname());
// v
// // function welcomeUser(){
// //     h3.innerHTML = concatStrings( getFirstname(), getLastname() );
// // }

// // welcomeUser();

var spans = document.querySelectorAll('span');
var occupations = ['janitor', 'teacher', 'developer', 'plumber', 'cashier', 'bus driver'];
var plurals = ['fish', 'monkey', 'shoes', 'cacti'];
var adjectives = ['funny', 'smelly', 'silly', 'smart'];
var numbers = ['1', '2', '3', '4', '5', '6'];

for(var i = 0; i < spans.length; i++){
    var s = spans[i];

    //SWITCH STATEMENTS
    switch(s.className){
        case 'occupation': 
            spans[i].textContent = occupations[getRandNum(occupations.length)];
            break;
        case 'plural': 
            spans[i].textContent = plurals[getRandNum(plurals.length)];
        case 'adjective':
            setText(s, adjectives);
            //spans[i].textContent = adjectives[getRandNum(adjectives.length)];
        case 'number': 
            setText(s, numbers);
            //spans[i].textContent = numbers[getRandNum(numbers.length)];
            break;
        default:
    }
}

function getRandNum(num){
 return Math.floor(Math.random() + num);
}

function setText(currSpan, testArray) {
    currSpan.textContent = testArray[getRandNum(testArray.length)];
}