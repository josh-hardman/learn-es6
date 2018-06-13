// var and let can change their value and const cannot change its value

// ES5
var x = 1
x = 2
console.log(x)

// ES6
let y = 3
y = 4
console.log(y)

// ES6
const z = 5
// z = 6 // TypeError: Assignment to constant variable.
console.log(z)
