console.log("Hello World");
//Here we are asking the computor to generate a random number between the numbers given// sing operator to the variable
let randomNumber = Math.random(); 0.0-1
// with if condition, we are asking the code to run if the requirements are met//
 //Here we are saying give me an output if the condition is met and random number is under 0.5 // 
if (randomNumber < 0.50) {

      console.log("Condition was Met");
       console.log(randomNumber);  
 }
//Here we are using the same if condition as above//
 if (randomNumber >= 0.5) {

     console.log('Condition Was Met');
     console.log(randomNumber); 
 }

// Here we are using the if else condition//
//We are stating if the if condition is not met then we can move on to the else condition//
const dayOfWeek = 'Saturday';

 if (dayOfWeek === 'Monday'){
     console.log("Yay its Monday!");

 } else if (dayOfWeek === 'Friday'){

    console.log("Yay Its Friday");

 } else if (dayOfWeek === 'Saturday') {

     console.log("You have the correct Day from the variable"); 
 }

 //Here we are saying if the age is less than 5 run the first code 
 // then we added other else if conditions for less than age 10 upto 35//
 

 const age = prompt("Enter An Age");

 if (age < 5) {

     console.log("Hey, you're a baby!");

 } else if (age < 10) {

     console.log("Hey, you're just a kid!");
 } else if (age < 35) {

     console.log("You're getting older.");
 }
//Here we are stating if all other condition fail run this particular code//
 else {

     console.log("You are over the age of 35.");
 }
//Here we are going to use switch statment for substitute of if statnents//
 const fruit = 'Papayas';
//Here we are declaring which variable to check , then we provided a list of 
// possible cases for it. but if all the case statement are not true we use 
// a default statment for it
 switch (fruit) {

     case 'Oranges':
         console.log("Oranges are $0.59 a pound");
         break;
     case 'Bananas':
         console.log("Bananas are $0.10 a pound");
       break;
   case 'Avocados':
        console.log("Advocados are expensive");   
        break; 
    case 'Papayas':
        console.log("Papayas are $0.70 a pound");
        break;
    default:
        console.log("Last Resort If All Conditions Fail");
 }
// Here we are using nested condition saying the child condition runs if the parent condition pasees
// If the password length is greater than or equals to 6 character then the condions are met
// and it can go into the nested conditions  

 const password = prompt("Enter in a new password");

 if (password.length >= 6) {
     if (password.indexOf(' ') === -1) {
        console.log("Valid Password");
     } else {
       console.log("Password Cant Have Spaces");
    }
} else {
    console.log("Password is too short");
 }
//Here we are designing the code to perform a song with a declaration statment and argument parameters
//which will manipulate our code

function singSong() {

    console.log("DO");
    console.log("RE");
    console.log("ME");
}

singSong()
singSong()
singSong()
// Here we are using the same as the above function method with one argument//
function greet(firstName) {

    console.log(`Hey There, ${firstName}`)
}

greet('Boomer');

//Here we used two arguments
function greet1(firstName,lastName) {

    console.log(`Hey There, ${firstName} ${lastName}`)
}

greet1('Boomer','Sooner');