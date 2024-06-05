let phoneNumber = "2284243299";

let phoneNumberString = phoneNumber.toString(); // "2284243299"
let phoneNumberArray = phoneNumberString.split(""); // ["2", "2", "8", "4", "2", "4", "3", "2", "9", "9"]
let phoneNumberArrayReversed = phoneNumberArray.reverse(); // [9, 9, 9, 2, 3, 4, 2, 4, 8, 2]
let phoneNumberReversed = phoneNumberArrayReversed.join(""); // 9923424822

const dt = new Date();
const month = dt.getMonth();
console.log(month);

for (let digit of phoneNumber) {
  if (digit === "-") continue;
  console.log(digit);
}

const person = ["Russell C. Guy", "3447 Twin House Lane", "Neosho", "MO"];

let [personName, address, city, state] = person;

const firstArray = ["a", "b", "c"];

const secondArray = [...firstArray, "d"]; // ["a", "b", "c", "d"]
// this is called a "shallow copy", because it contains just the values from the original array and has no reference to the original array.
console.log(secondArray);

const fruits = ["apple", "banana", "cherry"];
const fruitsCopy = [...fruits]; // ["apple", "banana", "cherry"]
console.log(fruitsCopy);
fruitsCopy.push("watermelon"); // ["apple", "banana", "cherry", "watermelon"]
console.log(fruitsCopy); // Now the new array is its own array and changes you make to it won't affect the original array.
console.log(fruits);
