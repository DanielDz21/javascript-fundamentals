// What are the final values of all variables a, b, c and d after the code below ?
let a = 1, b = 1;

let c = ++a; // 2
let d = b++; // 1

// What are the values of y and x after the code below?
let y = 2;
let x = 1 + (y *= 2);
// y = 4, x = 5

// What are results of these expressions?
"" + 1 + 0 // '10'
"" - 1 + 0 // -1
true + false // 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // '9px'
"$" + 4 + 5 // '$45'
"4" - 2 // 2
"4px" - 2 // NaN
"  -9  " + 5 // ' -9 5'
"  -9  " - 5 // -14
null + 1 // 1
undefined + 1 // NaN
" \t \n" - 2 // -2


// Fix it. The result should be 3.
let W = Number(prompt("First number?", 1));
let Z = Number(prompt("Second number?", 2));

alert(W + Z); // 3
