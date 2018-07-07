// Old
var haystack = ['hay', 'bundles of hay', 'needle', 'straws of hay']

var needle

for (var i = 0; i < haystack.length; i++) {
  if (haystack[i] === 'needle') {
    needle = haystack[i]
  }
}

needle

// New
var haystack = ['hay', 'bundles of hay', 'needle', 'straws of hay']

var needle = haystack.find(function (element) {
  if (element === 'needle') {
    return true
  }
})

needle
