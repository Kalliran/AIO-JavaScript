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
