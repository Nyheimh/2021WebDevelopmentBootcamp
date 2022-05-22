/* While Loops

var i = 1

while (i < 2) {          ||will run as long as i is < 2
  console.log(i);
  i++;
}

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


Beer on the wall


var numberOfBottles = 99;
  while (numberOfBottles >= 0) {
    var bottleWord = "bottle"
    if (numberOfBottles === 1){
      bottleWord = "bottles"
  }
  console.log(numberOfBottles + " " + bottleWord + " of beer on the wall")
  console.log(numberOfBottles + " " + bottleWord + " of beer on the wall")
    console.log("Take one down, pass it around,")
    numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall")
}



|| For Loops ||
Syntactic Sugar

for (i = 0; i < 2; i++){
  console.log(i);
}

while (something is true){  => State
  // do something
}

for (i = 0; i < 2; i++){ => Iterate
  // do something
}







*/
// expected array as an output 
function fibbonacciGenerator(n) {
  var output = []
  if (n === 1) {
    
    output = [0]
  } else if (n === 2) {
      output = [0,1]
    } else {
      output = [0, 1];
    output.push(output[0] + output[1]); // 1
    if (n === output.length) {
      
    }
  }
    return output
  }
    
  // for (let i = 0; i < 10; i++){
  //   for (let j = i + 1; j < 10; j++){
  //     output = i + j 
  //     console.log(output)
    // }
  // }
// }
console.log(fibbonacciGenerator(5))