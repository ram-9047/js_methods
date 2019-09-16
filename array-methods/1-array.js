// Arrays to work on
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var strings = ["this", "is", "a", "collection", "of", "words"];

// Use the above two arrays and practice array methods


// Find largest number in numbers
console.log(Math.max.apply(null, numbers)
console.log(Math.max(...numbers))

// Find longest string in strings

  // var longestWord = 0;
  // for(var i = 0; i< strings.length; i++){
  // if(strings[i].length > longestWord){
  // longestWord =  strings[i].length}
  // console.log(longestWord)}

// Find all the even numbers
var evenNumbers = []
for (var i = 0; i < numbers.length; ++i) { 
  if ((numbers[i] % 2) === 0) {
      evenNumbers.push(numbers[i]);
  }
}
// 2nd method
console.log(numbers.filter(function(numbers){
  return(numbers % 2) == 0;
}))

// Find all the odd numbers
console.log(numbers.filter(function(numbers){
  return(numbers % 2) != 0
}))

//2nd method
var oddNumbers = []
for(var i = 0; i <numbers.length, ++i){
  if((numbers % 2) != 0){
    oddNumbers.push(numbers[i])
  }
}

// Find all the words that contain 'is' use string method 'includes'
var a = []
for(var i = 0; i< strings.length; ++i){
  if(strings.includes("is",[i]) == true){
    a.push(strings[i])
  }
}


// Find all the words that contain 'is' use string method 'indexOf'
console.log(strings.indexOf('is'));

//2nd method
function findIndex(strings){
  return strings.indexOf("is")
}


// Check if all the numbers in numbers array are divisible by three use array method (every)
function isDivisibleByThree(num){
  if( num % 3 == 0){
    return num}
}
console.log(numbers.every(isDivisibleByThree))

//  Sort Array from smallest to largest
console.log(numbers.sort(function(a,b){
  return (a-b);
}))
// Remove the last word in strings
console.log(strings.pop())

// Add a new word in the array
console.log(strings.push("new word"))

// Remove the first word in the array
console.log(strings.shift())

// Place a new word at the start of the array use (upshift)
console.log(strings.unshift("first word"))

// Make a subset of numbers array [18,9,7,11]
console.log(numbers.slice(3,7))

// Make a subset of strings array ['a','collection']
console.log(strings.slice(3,5))

// Replace 12 & 18 with 1221 and 1881
console.log(numbers.splice(1,1,1221))
console.log(numbers.splice(3,1,1881))

//2nd method
for(var i = 0; i<= numbers.length; i++){
  if(numbers[i] == 12){
    numbers[i] = 1221
  } else if(numbers[i] == 18){
    numbers[i] == 1881
  }
}

// Replace words with string in strings array
strings.splice(5,1,"string")


// Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" }
];
// Find all customers whose firstname starts with 'J'
var a = []
for(var i = 0;i<customers.length;i++){
  if(customers[i].firstname.charAt(0) == "J"){
    a.push(customers[i])
  }
}
//2nd method
var a = []
for(let firstName of customers){
  if(firstName.firstname.charAt(0) == "J"){
    a.push(firstName)
  }
}

// Create new array with firstname and lastname
var newArray = customers.map(item =>`${item.firstname} ${item.lastname}`)


// Sort the array created above alphabetically
newArray.sort()
