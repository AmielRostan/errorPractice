// 1.
function sum(array) {
  let sum = 0;
  try {
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
  } catch(e) {
    console.error(e.name + ': ' + e.message);
  }
  return sum;
}

let res = sum(null);
console.log(res);

// 2.
// tests
try {
  sayName("Alex");
  sayName(1);
} catch(e) {
  console.error(e.name + ': ' + e.message);
}

// Your code here
function sayName(name) {
  if (typeof name !== 'string') {
    throw Error('Invalid name! must be a string!');
  }
  console.log(name);
}

// // 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try {
  greet('');
} catch (e) {
  console.log('Hello World!');
}
