// Random number generator

var n = Math.random()
n = Math.floor(n * 6) + 1
// console.log(n)

// alert("Hello, I will be calculating your love today. I will need a few things before we start")
// var personOne = prompt("What is your name?")
// var personTwo = prompt("What is their name?")

var num = Math.random
num = Math.floor(n * 100) + 1
// console.log(num)

// if ( num > 75){
//   alert("Your love score is " + num + " what are the chances")
// } else {
//   alert(personOne + " + " + personTwo + "  has a " + num + "%, chance to fall in love.")
// }

// && === and
// || === or 
// ! === not/opposite

// Determining leap year
function isLeap(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return "Leap year."
      } else {
        return "Not a leap year."
      }
    } else {
      return "Leap year."
    }
  } else {
    return "Not leap year."
  }
}


//

"Heim"
"Karla"
"Jawaun"
"Qui"
"Brian"
"Ben"

var guestList = ["Heim",
"Karla",
"Jawaun",
"Qui",
"Brian",
"Ben"]

// console.log(guestList.length)
// console.log(guestList[0])

// var guestName = prompt("What is your name?")

// if (guestList.includes(guestName)) {
//     alert("Welcome!")
// } else {
//     alert("Sorry, maybe next time.")
// }

// Fizz Buzz

var output = [];
var count = 1;

function fizzBuzz() {
  while (count <= 100) {

    if (count % 3 === 0 && count % 5 === 0){
        output.push("FizzBuzz");
    } 
    else if (count % 3 === 0){
        output.push("Fizz");
    } 
    else if (count % 5 === 0){
        output.push("Buzz");
    } 
    else {
        output.push(count)
    }
    count++;
  }
  console.log(output)
}


function whosPaying(names) {
  var numberOfPeople = names.length;
  var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
  var randomPerson = names[randomPersonPosition]

  return randomPerson + " is going to buy lunch today!"
}