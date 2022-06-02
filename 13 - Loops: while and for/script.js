// What is the last value alerted by this code ? Why ?
let a = 3;

while (a) {
  alert(a--);
} // 1

/*
For every loop iteration, write down which value it outputs and then compare it with the solution.
Both loops alert the same values, or not?
*/
let b = 0;
while (++b < 5) alert(b); // 1, 2, 3, 4

let c = 0;
while (c++ < 5) alert(c); // 1, 2, 3, 4, 5

/*
For each loop write down which values it is going to show. Then compare with the answer.
Both loops alert same values or not?
*/
for (let d = 0; d < 5; d++) alert(d); // 1, 2, 3, 4
for (let e = 0; e < 5; ++e) alert(e); // 1, 2, 3, 4

// Use the for loop to output even numbers from 2 to 10.
for(let f = 2; f <= 10; f += 2) alert(f); // 2, 4, 6, 8, 10

/*
Rewrite the code changing the for loop to while
without altering its behavior (the output should stay same).
for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}
*/
let g = 0;
while(g < 3) {
  alert( `number ${g}!` );
  g++;
}

/*
The loop must ask for a number until
either the visitor enters a number greater than 100
or cancels the input/enters an empty line.
*/
let number;

do {
  number = prompt("Enter a number greater than 100?", 0);
} while (number <= 100 && number);

/*
Write the code which outputs prime numbers in the interval from 2 to n.
*/
let n = prompt("Enter a number", 0);

nextPrime:
for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      continue nextPrime;
    }
  }
  alert(i);
}
