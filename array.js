// --------- Data-Type of Array ---------
// let arr = [];
// console.log(typeof arr);

// --------- Array Constructor ---------
// let friuts = new Array('Apple', 'Banana', 'Grapes');
// console.log(friuts);

// --------- Array Literals ---------
// let persons = ['Hussain', 'Suleman', 'Zaryab'];
// console.log(persons);

// ==============================
//    Accessing Array Elements
// ==============================
// let persons = ['Hussain', 'Suleman', 'Zaryab'];
// console.log(persons[0]);
// console.log(persons[2]);

// ==============================
//    Modifying Array Elements
// ==============================
// let persons = ['Hussain', 'Suleman', 'Zaryab'];
// persons[1] = 'Faizan';
// console.log(persons);

// ==============================
//        Array Traversing
// ==============================

// ----------- Using for-of () loop -----------
// let friuts = new Array('Apple', 'Banana', 'Grapes', "Mango", "Orange");
// without for-of loop
// for(let i = 0; i < friuts.length; i++) {
//    console.log(friuts[i]);
// }
// width for-of loop
// for(let items of friuts) {
//     console.log(items);
// }

// ----------- Using for-in () loop -----------
// let friuts = ['Apple', 'Banana', 'Grapes', "Mango", "Orange"];
// for(let key in friuts) {
//     console.log(key);
// }

// ----------- Using for-each () loop -----------
// let friuts = ["Apple", "Banana", "Grapes", "Mango", "Orange"];
// friuts.forEach((val, index, array) => {
// console.log(index);
// console.log(val);
//     console.log(`${index} is ${val}`);
// });

// ----------- Using map() method -----------
// let persons = ["Hussain", "Suleman", "Zaryab", "Faizan", "Khuzaima", "Asad"];
// persons.map((val, index, array) => {
//      console.log(`${index} is ${val}`);
//      console.log(array);
// })
// let newArray = persons.map((val, index, array) => {
//   return `${index} is ${val}`;
// });
// console.log(newArray);

// ==============================
//      Array CRUD Operation
// ==============================

// let std = ["Hussain", 'Khuzaima', 'Asad', "Ashfaq", "Shahran"];

// push();
// std.push("Konain");
// console.log(std.push("Konain"));
// console.log(std);

// unshift();
// std.unshift("Haris");
// console.log(std.unshift("Haris"));
// console.log(std);

// pop();
// std.pop();
// console.log(std.pop());
// console.log(std);

// shift();
// std.shift();
// console.log(std.shift());
// console.log(std);

// splice();
// std.splice();
// std.splice(1); //startingValue
// std.splice(1, 1); //deletecount
// std.splice(1, 1, 'Bilal'); //Items
// std.splice(1, 0, 'Bilal'); //add item without delete
// console.log(std.splice());
// console.log(std.splice(1));
// console.log(std.splice(1, 1));
// console.log(std.splice(1, 1, 'Bilal'));
// console.log(std);

// ==============================
//      Searching an Array
// ==============================

// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const number = [1, 2, 3, 4, 5, 6, 7, 4, 9];

// indexOf()
// console.log(number.indexOf(4));
// console.log(number.indexOf(4, 4));

// lastIndexOf()
// console.log(number.lastIndexOf(4));
// console.log(number.lastIndexOf(4, 5));

// includes()
// console.log(number.includes(9));
// console.log(number.includes(19));

// ==============================
//         Some Examples
// ==============================

// let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov"];
// console.log(months);

// Task-01: Add "Dec" at the end of the array
// months.splice(months.length, 0, "Dec");
// console.log(months);

// Task-02: Update "Mar" to "March"
// let marchIndex = months.indexOf("Mar");
// console.log(marchIndex);
// months.splice(marchIndex, 1, "March");
// console.log(months);

// Task-03: Delete "June" from array
// let juneIndex = months.indexOf("June");
// console.log(juneIndex);
// months.splice(juneIndex, 1);
// console.log(months);

// ==============================
//     Array Filter Method
// ==============================

// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// find() Callback
// let result = number.find((val) => {
//     return val > 6;
// })
// console.log(result);

// findIndex() Callback
// let result = number.map((val) => {
//    return val * 10;
// });
// console.log(result);
// let newResult = result.findIndex((val) => {
//     return val > 50;
// })
// console.log(newResult);

// filter() callback
// let result = number.filter((val) => {
//    return val > 5;
// });
// console.log(result);

// ==============================
//         Some Examples
// ==============================

// Case-01: User want to delete 6
// let num = new Array(1, 2, 3, 4, 5, 6, 7, 8, 6, 9);
// let value = 6;
// let result = num.filter((val) => {
//     return val !== value;
// })
// console.log(result);

// Case-02: show products with price less than or equal to 500
// let products = [
//   { name: "Laptop", price: 1200 },
//   { name: "Phone", price: 800 },
//   { name: "Tablet", price: 300 },
//   { name: "Smartwatch", price: 150 },
// ];
// console.log(products);
// let updateValue = products.filter((val, index) => {
//     return val = val.price <= 500;
// });
// console.log(updateValue);

// Case-03: Filter Unique Value
// let num = new Array(1, 2, 3, 4, 5, 6, 7, 8, 6, 9);
// let updatedResult = num.filter((val, index, arr) => {
//     console.log(arr.indexOf(val));
//     console.log(index);
//     return arr.indexOf(val) === index;
// });
// console.log(updatedResult);
// (OR)
// let updatedResult = new Set(num);
// console.log([...updatedResult]);

// ==============================
//      Sort And Compare
// ==============================

// let num = new Array(1, 2, 4, 8, 3, 5, 9, 6, 7);
// let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov"];
// let num = new Array(1, 200000, 4000, 80, 3, 5, 9, 6, 7); // Not Work Properly
// console.log(num.sort());
// console.log(months.sort());
// let result = months.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   }
//   if(a < b) {
//     return 1;
//   }
// });
// console.log(result);

// ==============================
//      Some More Examples
// ==============================

// Example-01
// let items = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
// let result = items.map((val) => {
//     return val.toUpperCase();
// })
// console.log(items);
// console.log(result);

// Example-02
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let value = num.map((val) => {
//   if (val % 2 === 0) {
//     return val * val;
//   } else {
//     return val;
//   }
// });
// (OR)
// let value = num.map((val) => {
//   if (val % 2 === 0) {
//     return val * val;
//   }
// }).filter((val) => {
//     return val !== undefined;
// })
// console.log(value);

// ==============================
//      Reducer() Callback
// ==============================

let productPrice = [1800, 3200, 4500, 2300, 6700];
let totalPrice = productPrice.reduce((accumulator, currentVal) => {
    return accumulator + currentVal;
}, 0);
console.log(totalPrice);