let arr = [1,2,3,4,5]

let result = arr.reduce(function(accumulator, currentValue) { return accumulator += currentValue })

let result = arr.reduce((accumulator, currentValue) => {
  return accumulator += currentValue;
})

let result = arr.reduce((accumulator, currentValue) => accumulator += currentValue)

console.log(result)

function()

// let sum = 0 // accumulator
// for(i=0; i<arr.length; i++) {
//   sum += arr[i] // currentValue
// }
