// While Loop
let i = 1;
while(i <= 10) {
    console.log(i);
    i++;
}

// Do While Loop
let j = 1;
do{
    console.log(j);
    j++;
} while(j <= 10);

// For Loop
for(let k = 1; k <= 10; k++) {
    // debugger;
    console.log(k);
}

// ===============================
//        Example Program
// ===============================

let a = 23;
let isPrime = true;
for(var m = 2; m < a; m++) {
    if(a % m === 0) {
        isPrime = false;
    }
}
if(isPrime) {
    console.log(a, 'is a Prime number');
} else {
    console.log(a, 'is not a Prime number');
}