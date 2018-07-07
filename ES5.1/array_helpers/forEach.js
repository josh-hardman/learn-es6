var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Old school
for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i])
}

// Cool kids club 😎
numbers.forEach(function (number) {
  console.log(number)
})

// Caveats
for (var i = 0; i < 4; i++) {
  console.log(numbers[i])
}
