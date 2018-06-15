// Merge an object
let first = { name: 'Tony' }
let last = { lastName: 'Stark' }
let person = Object.assign(first, last)

// Merging multiple sources
let a = Object.assign({ foo: 0 }, { bar: 1 }, { baz: 2 })

// Merge and overwrite equal keys
let b = Object.assign({ foo: 0 }, { foo: 1 }, { foo: 2 })

// Clone an object
let obj = { person: 'Thor Odinson' }
let clone = Object.assign({}, obj)
