// Exercise 6: Index Properties
// Create an interface that defines a flexible dictionary where all properties are strings and their values are numbers.
// Use the index signature to create an object and log the value of a dynamically added property.

interface StringNumberDictionary {
  [word:string]: number
}

const dictionary:StringNumberDictionary = {
  one:1,
  two:2
};
dictionary["one"] = 1;
dictionary["two"] = 2;

console.log(dictionary["two"]);
// Expected Output: 2