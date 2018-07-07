// Example 1

// Old school
var things = ['tv', 'laptop', 'stools', 'table', 'chair']

var thingsWithFeeling = []

for (var i = 0; i < things.length; i++) {
  thingsWithFeeling.push(things[i] + '!')
}

thingsWithFeeling

// New School
var things = ['tv', 'laptop', 'stools', 'table', 'chair']

var thingsWithFeeling = things.map(function (thing) {
  return thing + '!'
})

thingsWithFeeling

// Example 2

var superCars = [
  {
    make: 'Lamborghini',
    model: 'Hurican',
    year: 2018
  },
  {
    make: 'Bugatti',
    model: 'Chiron',
    year: 2017
  },
  {
    make: 'McLaren',
    model: 'P1',
    year: 2016
  }
]

var myCars = superCars.map(function (car) {
  return car.year + ' ' + car.make + ' ' + car.model
})

myCars
