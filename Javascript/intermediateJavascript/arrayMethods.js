var companies = [
  
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989},
]


  var ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]
// basic For
for (let i = 0; i < companies.length; i++){
  console.log(companies[i])
}


// For Each()
// For Each => Better, elegant way to loop through data

companies.forEach(function (company){
  console.log(company)
  // console.log(company.name) => company name
})
//
// Filter()

// Filter everyone 21+

// For loop comparison
// let canDrink = []
// for (let index = 0; index < ages.length; index++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i]) // current age iteration
//   }
// }
// console.log(canDrink)

// ES5

// var canDrink = ages.filter(function (age) {
//   if (age >= 21) {
//     return true;
//   }
// })


// ES6
var canDrink = ages.filter(age => age >= 21);
console.log(canDrink)

// Filter retail companies

// ES5
var retailCompanies = companies.filter(function (company) {
  if (company.category === 'Retail') {
    return true;
  }
})


// ES6
var retailCompanies = companies.filter(company => company.category === 'Retail')
console.log(retailCompanies)

// Get 80s companies

var eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990))
console.log(eightiesCompanies)

// Get companies that lasted < 10 years

const lastedTenYears = companies.filter(company => (company.end - company.start >= 10))
console.log(lastedTenYears)

// Map()
// Creating new arrays from current array

// Create array of company names
var companyNames = companies.map(function (company) {
  return company.name;
})

console.log(companyNames)
// ES5
var testMap = companies.map(function (company) {
  return `${company.name} [${company.start} - ${company.end}]`
})
// ES6
var testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
console.log(testMap)


const agesSquare = ages.map(age => Math.sqrt(age))
const agesTimesTwo = ages.map(age => age * 2)

const ageMap = ages.map(age => Math.sqrt(age)).map(age => age * 2)

console.log(agesSquare)
// Sort()

//Sorting companies by start year

//Es5
// const sortedCompanies = companies.sort(function (c1, c2) {
//   if (c1.start > c2.start) {
//     return 1
//   } else {
//     return -1 
//   }
// })

//ES6
const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1))
console.log(sortedCompanies)

// Sort ages

const sortAges = ages.sort((a, b) => a - b)
console.log(sortAges)

// Reduce()
// Reduce the arrays toa single value - from left to right
// Add all ages together

// For loop
// let ageSum = 0;
// for (let i = 0; i < ages.length; i++){
//   ages += ages[i]
// }

// ES5
// const ageSum = ages.reduce(function (total, age) {
//   return total + age;
// }, 0)

// ES6

const ageSum = ages.reduce((total, age) => total + age, 0)
console.log(ageSum)


// Get total years for all companies

// ES5
// const totalYears = companies.reduce(function (total, company) {
//   return total + (company.end - company.start)
// }, 0)

// ES6
const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0)
console.log(totalYears)

// Combine Methods

const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0)

console.log(combined)