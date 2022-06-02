/*
A Function Declaration can
be called earlier than it is defined.
*/

// Function Declaration
function sum(a, b) {
  return a + b;
}

/*
A Function Expression is created when
the execution reaches it and is usable only from that moment.
*/

// Function Expression
let sum = function (a, b) {
  return a + b;
};
