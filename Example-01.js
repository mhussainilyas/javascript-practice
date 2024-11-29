// ===========================
//         Calculatore
// ===========================
const calculate = (num1, num2, operator) => {
  switch (operator) {
    case "+":
      return num1 + num2;
      break;
    case "-":
      return num1 - num2;
      break;
    case "*":
      return num1 * num2;
      break;
    case "/":
      if (num2 == 0) {
        alert("Denomirator should note be zero (0)");
      } else {
        return num1 / num2;
        break;
      }
    default:
      return "operator note found";
  }
};

console.log(calculate(10, 40, "/"));

// ===========================
//        String Reverse
// ===========================
const isReverse = (str) => {
  let reverse = "";
  for (let c = str.length - 1; c >= 0; c--) {
    reverse = reverse + str[c];
  }
  return reverse;
};
console.log(isReverse("Javeria"));

// ===========================
//      Palindrome String
// ===========================
const palindrome = (str) => {
    let reverse = "";
    for(let c = str.length - 1; c >= 0; c--) {
        reverse += str[c];
    }
    if(str == reverse) {
        console.log(`${str} is a Palindrome String`);
    } else {
        console.log(`${str} is not a Palindrome String`);
    }
}
palindrome("Hussain");
palindrome("level");

// ===========================
//      Template String
// ===========================
const fruits = ['Apple', 'Banana', "Orange", 'Mangoe', 'Grapes'];
const html = `
   <ul>
     ${fruits.map((item) => (
        `<li>${item}</li>`
     ))}
   </ul>
`;
document.write(html);