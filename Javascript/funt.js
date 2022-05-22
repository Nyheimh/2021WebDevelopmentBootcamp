/*
function getMilk(money) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
var numberOfBottles = Math.floor(money / 1.5) // using Math.floor to round down
  console.log("buy " + numberOfBottles + " bottles of milk." )
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}

getMilk(9)
}
__________________________________________________________________________________
Calculating time remaining til 90

function lifeInWeeks(age) {

var yearsRemaining = 90 - age;
var days = yearsRemaining * 365;
var weeks = yearsRemaining * 52;
var months = yearsRemaining * 12

console.log("You have " + days + " days in a year, " + weeks + " weeks in a year and " + months + " months in a year.")

}

console.log(lifeInWeeks(28))




____________________________________________________________________________


function getMilk(money, costPerBottle) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  
  console.log("buy " + calcBottles(money, costPerBottle) + " bottles of milk." )
  
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");

  return calcChange(money, 1.5);
}

var change = getMilk(10)
console.log(change)

function calcBottles(startingMoney, costPerBottle){

  var numberOfBottles = Math.floor(startingMoney / costPerBottle)

  return numberOfBottles
}

function calcChange(startingAmount, costPerBottle){
  var change = startingAmount % costPerBottle;
  return change
}


console.log("Hello Heim, here is your change " + getMilk(10, 3) + ".")


BMI Calculator

function bmiCalculator(weight, height){
  var bmi = weight / Math.pow(height, 2);
  return Math.round(bmi)
}
*/