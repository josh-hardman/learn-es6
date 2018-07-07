const [first, second] = [{ a: 1 }, { b: 2 }, { c: 3 }]

// second

const test = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
})

const res = test.format(123423.23)

res
