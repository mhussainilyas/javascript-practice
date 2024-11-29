// =========================
//    Arithmatic Operators
// =========================
let a = 10;
let b = 20;
// let c = a + b;
// let c = a - b;
// let c = a * b;
// let c = a / b;
let c = a % b;
console.log(c);

// ============================================
//    Arithmatic Operators + Assignment
// ============================================
let num = 10;
// num += 5;
// num -= 5;
// num *= 5;
// num /= 5;
num %= 5;
console.log(num);

// =========================
//    Comparison Operator 
// =========================
let val1 = 10;
let val2 = 30;
// let result = val1 > val2;
// let result = val1 < val2;
// let result = val1 == val2;
// let result = val1 != val2;
let result = val1 === val2;
console.log(result);
if(5 === "5") {
    console.log('Equal');
} else {
    console.log('Not Equal');
}

// =========================
//    Logical Operators
// =========================
let one = true;
let two = false;
// let three = one && two;
// let three = one || two;
let three = !one;
console.log(three);

// =========================
//    Ternary Operators
// =========================
let isRaining = false;
let reponse = isRaining ? "It is raining" : 'It is not raining';
console.log(reponse);