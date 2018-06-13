// Let and const have a block scope but var has function scope.

// ES5
function funcScope (age) {
  if (age > 18) {
    // var status is scoped to the function (available outside this if block)
    var status = 'Go for launch'
  }
  console.log(status)
}
funcScope(20)

// ES6
function blockScope (name) {
  if (name === 'MC Hammer') {
    let status = 'Cant touch this...'
  }
  console.log(status) // status is scoped to the if block.
}
blockScope('MC Hammer')

// ES6
let num = 10
for (let num = 0; num < 3; num++) {
  console.log(num) // 0 1 2
}
console.log(num) // 10
