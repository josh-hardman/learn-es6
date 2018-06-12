// var and let can change their value and const cannot change its value

// ES5
var x = 14
x = 12
console.log(x) // 12

// ES6
let y = 14
y = 12
console.log(y) // 12

// ES6
const z = 14
z = 12 // TypeError: Assignment to constant variable.
console.log(z)
