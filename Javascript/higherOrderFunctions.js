function add(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function substract(num1, num2) {
  return num1 - num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function calculator(num1, num2, operator) {
  return operator(num1, num2);
}

// Constructor Function
function BellBoy(name, age, hasWorkPermit, languages) {
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.languages = languages;
  this.moveSuitcase = function () {
    alert("May I take your suitcase?");
    pickUpSuitcase();
    move();
  };
}

// Initialise Object
var bellBoy1 = new BellBoy("Timmy", 19, true, ["French", "English"]);

function HouseKeeper(name, yoe, cleaningRepertoire) {
  this.name = name;
  this.yoe = yoe;
  this.cleaningRepertoire = cleaningRepertoire;
}

var houseKeeper1 = new HouseKeeper("Wilma", 25, [
  "kitchen",
  "livingroom",
  "dining room",
]);
