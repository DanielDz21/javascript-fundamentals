/*
The following function returns true if the parameter age is greater than 18.
Otherwise it asks for a confirmation and returns its result.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}

Rewrite it, to perform the same, but without if, in a single line.
Make two variants of checkAge:
- Using a question mark operator ?
- Using OR ||
*/

function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allow you?');
}

function checkAge2(age) {
  return (age > 18) || confirm('Did parents allow you?');
}

/*
Write a function min(a,b) which returns the least of two numbers a and b.
For instance:
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
*/
function min(a, b) {
  return (a < b) ? a : b;
}

/*
Write a function pow(x,n) that returns x in power n.
Or, in other words, multiplies x by itself n times and returns the result.
P.S. In this task the function should support only natural values of n: integers up from 1.
*/
function pow(x, n) {
  return (n >= 1) ? (x ** n) : 'Invalid value of n';
}
