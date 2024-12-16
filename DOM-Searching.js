// let completeDocument = document;

// !getElementById()
// let findElementById = document.getElementById("heading");
// let findElementById = document.getElementById("#heading"); ❌
// console.log(findElementById);

// ?Inner-Text
// console.log(findElementById.innerHTML);
// console.log(findElementById.innerText);
// console.log(findElementById.textContent);

// !getElementsByClassName()
// let findElementByClass = document.getElementsByClassName("list-of--node");
// console.log(findElementByClass); ❌
// 1st Method
// console.log(...findElementByClass);
// 2nd Method
// for (let items of findElementByClass) {
//   console.log(items);
//   console.log(items.innerHTML);
//   console.log(items.innerText);
//   console.log(items.textContent);
// }

// !getElementsByTagName()
// let findElementByTagName = document.getElementsByTagName("li");
// console.log(findElementByTagName);
// for(let items of findElementByTagName) {
//     console.log(items);
// }

// !querySelector()
// let findBySelector = document.querySelector("#heading");
// let findBySelector = document.querySelector(".list-of--node");
// let findBySelector = document.querySelector("li");
// console.log(findBySelector);

// !querySelectorAll()
// let findBySelector = document.querySelectorAll("li");
// console.log(findBySelector);
// for (let ele of findBySelector) {
//   console.log(ele);
// }
// findBySelector.forEach((items, index, arr) => {
    // console.log(items);
    // console.log(index);
//     console.log(arr[index].innerText);
// })