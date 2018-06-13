// Let and const have a block scope but var has function scope.

// ES5
function adult5 (age) {
  if (age > 18) {
    var status = 'adult'
  }
  console.log(status) // adult
}
adult5(20)

// ES6
function adult6 (age) {
  if (age > 18) {
    let status = 'adult'
  }
  console.log(status) // ReferenceError: status is not defined
}
adult6(20)

// ES6
let num = 10
for (let num = 0; num < 3; num++) {
  console.log(num) // 0 1 2
}
console.log(num) // 10
