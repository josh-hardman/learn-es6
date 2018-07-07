// Old

var products = ['apple', 'bannana', 'bread', 'chips', 'ramen']

var filteredProducts = []

for (var i = 0; i < products.length; i++) {
  if (products[i].indexOf('b') > -1) {
    filteredProducts.push(products[i])
  }
}

filteredProducts

// New

var products = ['apple', 'bannana', 'bread', 'chips', 'ramen']

var filteredProducts = products.filter(function (product) {
  if (product.indexOf('b') > -1) {
    return product
  }
})

filteredProducts
