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

// =====================================
//     Some additional method 
// =====================================

// --------- toUpperCase() method --------
// let upperLetter = str.toUpperCase();
// console.log(upperLetter);

// --------- toUpperCase() method --------
// let lowerLetters = str.toLowerCase();
// console.log(lowerLetters);

// --------- trim() method --------
// let string = "         !Muhammad Hussain         ";
// console.log(string.length);
// let newStr = string.trim();
// console.log(newStr);
// console.log(newStr.length);

// --------- split() method --------
// let newStr = str.split();
// let newStr = str.split("");
// let newStr = str.split(" ");
// console.log(newStr);

// --------- reverse() method --------
// let newStr = str.split(" ").reverse();
// console.log(newStr);

// --------- join() method --------
// let newStr = str.split(" ").reverse().join();
// console.log(newStr);

// =====================================
//           Practice Example 
// =====================================

// !Example-01
// console.log("a".charCodeAt());
// console.log('z'.charCodeAt());
// console.log('A'.charCodeAt());
// console.log('Z'.charCodeAt());

// for(let char = 97; char <= 122; char++) {
//    console.log(char);
//    console.log(String.fromCharCode(char));
// }

// for(let char = 65; char <= 90; char++) {
//    console.log(String.fromCharCode(char));
// }

// !Example-02
// const checkAllVowelPresentOrNot = (str) => {
//    let vowel = "aeiou";
//    for(let char of vowel) {
//       console.log(str.includes(char));
//       debugger;
//       if(!str.includes(char)) {
//          return false;
//       }
//    }
//    return true;
// }

// checkAllVowelPresentOrNot(str);
// console.log(checkAllVowelPresentOrNot("Muhammad Hussain"));
// console.log(checkAllVowelPresentOrNot(str));

// !Example-03
// const countVowel = (str) => {
//    let vowel = "aeiouAEIOU";
//    let result = 0;
//    for(let char of str) {
//       if(vowel.includes(char)) {
//          result++;
//       }
//    }
//    return result;
// }

// console.log(countVowel(str));
// console.log(countVowel("Hussain Ilyas"));

// !Example-04
// *The given string is pangram or not?

// 👉👉 1st Method
// const isPangram = (str) => {
//    let totalAlpha = '';
//    for(let char = 97; char <= 122; char++) {
//       totalAlpha = totalAlpha + String.fromCharCode(char);
//    }
//    let string = str.toLowerCase();
//    for(let char of totalAlpha) {
//       if(!string.includes(char)) {
//            return "Not Pangram String.";
//       }
//    }
//    return "Pangram String.";
// }

// 👉👉 2nd Method
const isPangram = (str) => {
   let arrString = str.toLowerCase().split("");
   const value = arrString.filter((item) => {
      return item.charCodeAt(0) >= "a".charCodeAt(0) && item.charCodeAt(0) <= "z".charCodeAt(0)
   })
   // console.log(value);
   // console.log([...new Set(value)]);
   // console.log([...new Set(value)].length);
   if([...new Set(value)].length === 26) {
      return "Given String is pangram."
   } else {
      return "Given String is not pangram."
   }
}

console.log(isPangram(str));
// console.log(isPangram("Muhammad Hussain Ilyas"));
