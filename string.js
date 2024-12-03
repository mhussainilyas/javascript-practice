let str = "A quick brown fox jumps over the lazy dog.";
console.log(str);
// --------- string length --------
// console.log(str.length);

// --------- convertion from string to array --------
// let stringToArray = Array.from(str);
// console.log(stringToArray);

// =====================================
//       Searching String Parts
// =====================================

// --------- search() method --------
// console.log(str.search("jumps"));
// console.log(str.search("Jumps"));
// console.log(str.search(/Jumps/i));
// console.log(str.search(/o/g));

// --------- match() method --------
// console.log(str.match("jumps"));
// console.log(str.match("Jumps"));
// console.log(str.match(/Jumps/i));
// let matchValue = str.match(/o/g);
// console.log(matchValue);

// --------- matchAll() method --------
// console.log(str.matchAll("jumps"));
// console.log(str.matchAll("Jumps"));
// console.log(str.matchAll(/Jumps/g));
// let matchedValue = str.matchAll("o");
// console.log(...matchedValue);
// for(let item of matchedValue) {
//    console.log(item[0]);
//    console.log(item.index);
// }

// --------- startsWith() method --------
// let result = str.startsWith("A");
// let result = str.indexOf("jumps");
// let result = str.startsWith("jum", 18);
// console.log(result);

// --------- startsWith() method --------
// let result = str.endsWith("dog.");
// let result = str.lastIndexOf("jumps");
// let result = str.endsWith("jumps", 23);
// console.log(result);

// =====================================
//       Extracting String Parts
// =====================================

// --------- slice() method --------
// let extractPart = str.slice(8);
// let extractPart = str.slice(-9); //reverse indexed process
// let extractPart = str.slice(8, 13);
// console.log(extractPart);

// --------- substring() method --------
// let extractPart = str.substring(8);
// let extractPart = str.substring(-9); //whole string
// let extractPart = str.substring(8, 13);
// console.log(extractPart);

// =====================================
//     Replacing String methods
// =====================================

// --------- replace() method --------
// let replaceStr = str.replace("fox", 'lion');
// console.log(replaceStr);

// --------- replaceAll() method --------
// let replaceStr = str.replaceAll("o", '');
// console.log(replaceStr);

// =====================================
//     Extracting String Character
// =====================================

// --------- charAt() method --------
// let extractedCharacter = str.charAt(8);
// let extractedCharacter = str.charAt(-8); // Note work
// console.log(extractedCharacter);

// --------- charCodeAt() method --------
// let extractedCharacter = str.charCodeAt(8);
// console.log(extractedCharacter);

// --------- at() method --------
// let extractedCharacter = str.at(8);
// let extractedCharacter = str.at(-8);
// console.log(extractedCharacter);