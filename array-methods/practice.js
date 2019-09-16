// Use below arrays to make questions for yourself and practice the methods like
// map
// forEach
// filter
// splics
// reduce
// etc ..

// Write atleast 10 different question for every method.

var pizzas = [
  "Deep Dish",
  "Peperoni",
  "Hawaiian",
  "Meatzza",
  "Spicy Mama",
  "Margherita"
];
//map
var newpizzas = pizzas.map(items => items +" fav")
alert(newpizzas)
//forEach
pizzas.forEach(function(items){
alert(items)})

var cuts = [
  "Chuck",
  "Brisket",
  "Shank",
  "Rib",
  "Plate",
  "Flank",
  "Short Loin",
  "Tenderloin",
  "Sirloin",
  "Round"
];
//map
var newcuts = cuts.map(items => items +" Hawaiian")
alert(newcuts)
//forEach
cuts.forEach(function(items){
  alert(items)
})
var numbers = [1, 2, 3, 4, 5, 6, 23, 121, 345, 33, 23, 12, 435, 642, 66, 23];
//map
var newNumbers = numbers.map(items => items * 10)
alert(newNumbers)

//filter
var evenNumbers = num.filter(function even(a){
  if (a%2 == 0) {
    return a;
  }
})

//forEach
numbers.forEach(function(numbers){
  alert(items * 2)
})
//
var even = []
numbers.forEach(num =>{
  if (num % 2 == 0 ) {
    even.push(num)
  }
})