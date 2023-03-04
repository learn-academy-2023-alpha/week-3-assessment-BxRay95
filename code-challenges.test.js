// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array of that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.
describe("calculateFib", () => {
  const fibLength1 = 6
  // Expected output: [1, 1, 2, 3, 5, 8]
  const fibLength2 = 10
  // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
  it("returns array of that length containing the numbers of the Fibonacci sequence", () => {
    expect(calculateFib(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(calculateFib(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})
// // ---> calculateFib is not defined

// Pseudocode: create a function calculateFib that takes in a random number as a parameter, make an array with the starter values of 1, 1.  assign the variables a and b to compare in the array as a starting value. then using the built in method push, add the values of a and b based on the index assigned for them to start at in lines 34 and 35 and push them into the array(arr) then return that array.

const calculateFib = (num) => {
  const arr = [1, 1]
  let a, b
  for(let i = 2; i < num; i++) {
    a = arr[i - 1]
    b = arr[i - 2]
    arr.push(a + b)
  }
  return arr
}

// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

describe("leastToGreatest", () => {
  const studyMinutesWeek1 = {
    sunday: 90,
    monday: 30,
    tuesday: 20,
    wednesday: 15,
    thursday: 30,
    friday: 15,
    saturday: 60
  }
//   // Expected output: [15, 15, 20, 30, 30, 60, 90]
  
  const studyMinutesWeek2 = {
    sunday: 100,
    monday: 10,
    tuesday: 45,
    wednesday: 60,
    thursday: 20,
    friday: 15,
    saturday: 65
  }
//   // Expected output: [10, 15, 20, 45, 60, 65, 100]

it("returns an array of the values sorted from least to greatest", () => {
  expect(leastToGreatest(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
  expect(leastToGreatest(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
})
})

// ---> 

// Pseudocode: create a function leastToGreatest  that takes in an object as a parameter, create a variable for the output sorted array and using .values return an array of values of the properties of the object. then return the sorted array and use the built in method .sort and (i had to look this part up because i couldnt find a way around it) use the a, b to get it to actually sort the values from least to greatest.

// b) Create the function that makes the test pass.

const leastToGreatest = (object) => {
  let sortedArray = Object.values(object)
  return sortedArray.sort((a, b) => (a - b))
}


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("accumulatedNumbers", () => {
const accountTransactions1 = [100, -17, -23, -9]
// // Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// // Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// // Expected output: []
it("returns an array of the values sorted from least to greatest", () => {
  expect(accumulatedNumbers(accountTransactions1)).toEqual([100, 83, 60, 51])
  expect(accumulatedNumbers(accountTransactions2)).toEqual([250, 161, 261, 165])
  expect(accumulatedNumbers(accountTransactions3)).toEqual([])
})
})

// Pseudocode: create a function called accumulatedNumbers that takes in an array of numbers, using the built in method .map iterate through the array and take the first value in the array plus then next value in the array and then calculates the sum of those numbers and returns the number in the array of the accumulating sum.


const accumulatedNumbers = arr => arr.map((sum => value => sum += value)(0))
// console.log(accumulatedNumbers(accountTransactions1));