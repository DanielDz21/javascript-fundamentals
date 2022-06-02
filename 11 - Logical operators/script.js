// What is the code below going to output ?
alert(null || 2 || undefined); // 2

// What will the code below output?
alert(alert(1) || 2 || alert(3)); // 1, then 2 (...)

// What is this code going to show?
alert(1 && null && 2); // null

// What will this code show ?
alert(alert(1) && alert(2)); // 1, then undefined (...)

// What will the result be ?
alert(null || 2 && 3 || 4); // 3

/*
Write an if condition to check that age is between 14 and 90 inclusively.
“Inclusively” means that age can reach the edges 14 or 90.
*/
let age = prompt("What is your age?");

if (age >= 14 && age <= 90) {
  alert("You are allowed to enter!");
}

/*
Write an if condition to check that age is NOT between 14 and 90 inclusively.
Create two variants: the first one using NOT !, the second one – without it.
*/
let age2 = prompt("What is your age?");

if (!(age2 >= 14 && age2 <= 90)) {
  alert("You are not allowed to enter!");
}

if (age2 < 14 || age2 > 90) {
  alert("You are not allowed to enter!");
}

/*
Which of these alerts are going to execute?
What will the results of the expressions be inside if(...)?
*/

if (-1 || 0) alert('first'); // Runs, Truthy
if (-1 && 0) alert('second'); // Don't run, Falsy
if (null || -1 && 1) alert('third'); // Runs, Truthy

/*
Write the code which asks for a login with prompt.
If the visitor enters "Admin" – then prompt for a password,
if the input is an empty line or Esc – show “Canceled”,
if it’s another string – then show “I don’t know you”.

The password is checked as follows:
- If it equals “TheMaster”, then show “Welcome!”,
- Another string – show “Wrong password”,
- For an empty string or cancelled input, show “Canceled”
*/

let login = prompt("Enter your login");

if (login !== 'Admin' && login !== '') {
  alert("I don't know you");
} else if (login === '') {
  alert("Canceled");
} else {
  let password = prompt("Enter your password");
  if (password != 'TheMaster' && password !== '') {
    alert("Wrong password!");
  } else if (password === '') {
    alert("Canceled");
  } else {
    alert("Welcome!");
  }
}
