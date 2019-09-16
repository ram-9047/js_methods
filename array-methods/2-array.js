var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];
//Write a function findLongestWord that takes an array of words and returns the longest one.
//If there are 2 with the same length, it should return the first occurrence.
var longestWord = ""
for(var i = 0; i< words.length;i++){
  if(words[i].length > longestWord.length){
    longestWord = words[i]
  }
}
//2nd method
for(let a of words){
  if(a.length > longestWord.length){
    longestWord = words
  }
}
//3rd method
var newArray = words.filter(a => { a.length > longestWord.length ? longestWord = a : null
return longestWord})



var numbers1 = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
// Create a sumArray function that takes an array of numbers1 as a parameter, and calculate the sum of all its numbers
// Use reduce method of array
// Use the above sum and calculate the average.


function sumArray(numbers1){
  var sum = 0;
  for(let a of numbers1){
    sum +=a;

  }
  return sum
}

function sumArray(numbers1) {
  var sum = numbers1.reduce((total, num) => {
      return total += num;
  })
  return(sum);
}

console.log((sumArray(numbers1))/2)

var numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
//Write a function averageNumbers that receives an array of numbers2 and calculate the average of the numbers

function averageNumbers(numbers2){
  var sum = 0;
  for(let a of numbers2){
    sum = sum + a;
  }
  return (sum/(numbers2.length))
}


var words2 = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
];
//Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.

for(var i = 0; i<words2.length;i++){
  
}


