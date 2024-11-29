// Number Data-type
var myFavNum = 595;
console.log(myFavNum);

// String Data-type
var myName = 'Hussain';
console.log(myName);

// Boolean Data-type
var isRaining = false;
var areYouAwesome = true;
console.log(isRaining, areYouAwesome);

// Undefine Data-type
var hussain;
console.log(hussain);

// Null Data-type
var badMemories = null;
console.log(badMemories);

// Bigint Data-type
var bigNumber = 123456789012345678901234567890n;
console.log(bigNumber);

// Symbol Data-type
var mySymbol = Symbol('description');
console.log(mySymbol);

// typeof keyword
var num = 10;
console.log(typeof num);

// Convert number to string
var str = 5;
console.log(typeof String(str));
console.log(typeof (str + ''));

// Convert string to number
var num = "5";
console.log(typeof Number(num));
console.log(typeof (+num));

// Truthy vs Falsy in javascript
var myName = "Hussain";
if(myName) {
    console.log("This is true");
} else {
    console.log('This is false');
}

// parseInt()
var str = "42.5";
var num = parseInt(str);
console.log(num);

// parseFloat()
var str = "42.5";
var num = parseFloat(str);
console.log(num);

// More Example for parseInt() & parseFloat()
console.log(parseInt("123"));
console.log(parseInt("123", 10));
console.log(parseInt("   123  "));
console.log(parseInt("077"));
console.log(parseInt("770"));
console.log(parseFloat("077"));
console.log(parseInt("1.9"));
console.log(parseFloat("1.9"));
console.log(parseInt("$123"));
console.log(parseFloat("$123"));
console.log(parseInt("-123"));
console.log(parseInt("xyz"));

// isNaN() method 
console.log(isNaN("Hussain"));
if(NaN === NaN) {
    console.log("Equal");
} else {
    console.log('Not Equal');
}