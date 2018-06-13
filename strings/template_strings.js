const greeting = `Yo world!`

// String Substitution
// Interpolate js expressions inside string

const name = 'Brendan'
console.log(`Yo, ${name}!`)

const a = 10
const b = 10
console.log(`JavaScript first appeared ${a + b} years ago. Crazy!`)

const stringWithQuotes = `This is a "cool" string`

function fn () {
  return 'I am a result. Rarr'
}
console.log(`foo ${fn()} bar`)

// Caveats
const make = 'Toyota'
const model = undefined
const year = '1990'
const vehicleDescription = `${make} | ${model} | ${year}`

console.log(vehicleDescription)
