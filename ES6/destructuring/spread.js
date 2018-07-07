// Merge an object
let first = [5, 5, 5]
let last = [6]
let person = [...first, ...last]
console.log(person)

// Merging multiple sources
let a = Object.assign({ foo: 0 }, { bar: 1 }, { baz: 2 })

// Merge and overwrite equal keys
let b = Object.assign({ foo: 0 }, { foo: 1 }, { foo: 2 })

// Clone an object
let obj = { person: 'Thor Odinson' }
let clone = Object.assign({}, obj)
