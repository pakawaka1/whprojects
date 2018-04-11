
// //this - context based.  Look to the left of the dot.

// var btns = document.querySelectorAll('button');

// for (var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener('click', function(addEventListener){
//         console.log(event.target);
//         console.log(this);
//     });


// window.addEventListener('click', function(evt) {
//     console.log(evt.target.nodeName);
//     if(evt.target.nodeName == "BUTTON"){
//         console.log(evt.target);
//         console.log(this);
//     }
// });

// var cars = ['jeep', 'honda', 'jeep', 'subaru'];
// var types = ['string', true, 5, [1, 2, 3]];
// console.log(types[3][1]);
// // console.log(cars);
// // console.log(types);

// // objects

// var car = {
//     type: 'jeep', 
//     model: 'wrangler',
//     color: 'black'
// }

// console.log(car.type);

// var matt = {
//     firstname: 'Matt',
//     lastname: 'Higley', 
//     height: "6'4",
//     hair: true,
//     haircolor: 'brown',
//     facialhair: true,
//     facialhaircolor: 'brown',
//     greeting: function(msg){
//         console.log(this.firstname);
//         console.log(msg + this.firstname);

// var types = ['string', true, 5, [1, 2, 3], matt];
// console.log(types);

// console.log(matt.haircolor);
// matt.middlename = 'David';
//  console.log(matt);

// matt.middlename = 'Charles';
// matt.greeting('Hey there!');

// matt.firstname = 'Bruce';
// matt.greeting('I am now');


//constructor object
// function Person(first, last, age, eye) {
//     this.firstname = first;
//     this.lastname = last;
//     this.age = age;
//     this.eyecolor = eye;
//     this.greeting = function(msg){
//         console.log(msg + this.firstname);
//     }
// }

// var myDad = new Person('David', 'Higley', 59, 'brown');
// console.log(myDad.eyecolor);

// var Joseph = new Person('Joseph', 'Mother', 5852, 'red')
// console.log(Joseph.eyecolor);
// console.log(Joseph.firstname);

// var myMom = new Person ('Violet', 'Cervantes', 282, 'brown');
// console.log(myMom.age);
// myMom.greeting('Hello ');

/*
    username
    email 
    passwordr

*/
var form = document.querySelector('form');

var users = [];


function UserAcc (username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

var submitBtn = document.querySelector("input[type='submit']");
submitBtn.addEventListener('click', function(event){
    event.preventDefault();
    users.push(
        new UserAcc(
            form.elements[0].value,
            form.elements[1].value,
            form.elements[2].value
        )
    );
    console.log(users);
});

// for (var i = 0; i< form.elements.length - 1; i++) {
//     users[i]
//     console.log(form.elements[i].value);
//     }
// });

// var Anne = new User ('A123', 'anne@gmail.com', 'slaytanic');
// console.log(Anne.password);
// Anne.greeting('Welcome back ');

// var Bob = new User ('Bobby', 'bob@gmail.com', 'Wx3fy33');
// console.log(Bob.username);
// console.log(Bob.email);
// Bob.greeting('Why are you here ');

// var Cara = new User ('THX1234', 'cara@gmail.com', 'password');
// console.log(Cara.password);
// console.log(Cara.username);
// console.log(Cara.email);
// Cara.greeting('Hello ');

